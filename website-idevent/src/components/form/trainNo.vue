<template>
    <div>
        <label :for="config.id">
            <span v-if="config.validate.required" class="text-danger">*</span>
            {{config.label}}
        </label>

        <div class="input-group">
            <input
                :value="config.value" v-on:input="config.value = $event.target.value"
                type="text" class="form-control"
                :id="config.id"
                :placeholder="config.placeholder"
                :name="elementName"
                v-validate="config.validate"
                :maxlength="10"
                @change="autoSearch"
            >
            <div class="input-group-addon"><a href="javascript:void(0);" class="text-primary"
                                              @click="search(true)">查询</a></div>
        </div>
        <p class="help-block">
            {{config.help}}
            <span v-show="errors.has(elementName)" class="form-invalid">{{ errors.first(elementName) }}</span>
        </p>

        <div>
            <label>
                <span class="text-danger">*</span>
                出发线路</label>
            <input type="text" @click="openPopup" data-msg-required="该字段为必填项" required="true" class="form-control"
                   v-model="selectedText" name="flight_info_selector" placeholder="请选择出发到达城市" readonly/>
            <p class="help-block">请选择出发到达城市</p>
        </div>

        <table style="margin-bottom: 12px;" class="table table-detail" v-if="selected">
            <tbody>
            <tr>
                <td>出发火车站</td>
                <td>{{selected.train_takeoff_station}} {{selected.train_takeoff_datetime}}</td>
            </tr>
            <tr>
                <td>到达火车站</td>
                <td>{{selected.train_landing_station}} {{selected.train_landing_datetime}}</td>
            </tr>
            </tbody>
        </table>
        <div class="flightNotice" v-if="selected && flightNotice != ''">
            <div v-for="item in flightNotice">
                <img v-if="selected.train_landing_station == item.name" :src="item.img" alt="">
            </div>
        </div>
        <mt-popup v-model="popupVisible" class="popup-train" position="bottom" popup-transition="popup-fade">
            <mt-picker :slots="slots" @change="onCityChange" :visible-item-count="5" :show-toolbar="true">
                <span class="mint-datetime-action mint-datetime-cancel" @click="popupVisible = false">取消</span>
                <span class="mint-datetime-action mint-datetime-confirm" @click="confirm">确定</span>
            </mt-picker>
        </mt-popup>
    </div>
</template>
<style lang="less" scoped rel="stylesheet/less">
    input {
        text-transform: uppercase;
    }
    .popup-train {
        width: 100%;
    }
</style>
<script>
    import formUtils from "utils/form"
    import {Toast, Indicator} from 'mint-ui';
    import formMixin from "mixins/formElements"
    export default {
        mixins: [formMixin],
        props: {
            elements: Array
        },
        data() {
            return {
                flightNotice:'',
                list: [],
                listText: [],
                selectedValues: [],
                selected: null,
                selectedText: '',
                popupVisible: false,
                train_no: '',
                slots: [{
                    flex: 1,
                    values: [],
                    className: 'slot1',
                    textAlign: 'right'
                }, {
                    divider: true,
                    content: '-',
                    className: 'slot2'
                }, {
                    flex: 1,
                    values: [],
                    className: 'slot3',
                    textAlign: 'left'
                }]
            }
        },
        created () {
            let str = this.meeting.websettings.flightNotice;
            if(str != ''){
                this.flightNotice = eval('(' + str + ')')
            }
            console.log(this.flightNotice)
            if (this.config.value) {
                this.search(false)
                this.selected = {}
                for (let el of this.elements) {
                    switch (el.name) {
                        case 'train_no':
                            this.selected.train_no = el.value
                            break;
                        case 'train_takeoff_station':
                            this.selected.train_takeoff_station = el.value
                            break;
                        case 'train_takeoff_datetime':
                            this.selected.train_takeoff_datetime = el.value
                            break;
                        case 'train_landing_station':
                            this.selected.train_landing_station = el.value
                            break;
                        case 'train_landing_datetime':
                            this.selected.train_landing_datetime = el.value
                            break;
                        default:
                            break;
                    }
                }

                this.getSelectedValue()
            }
        },

        methods: {
            autoSearch(e) {
                if (e.target.value.length >= 5) {
                    this.search()
                }
            },
            //选择改变
            onCityChange(picker, values) {
                let index = this.listText.indexOf(values[0])
                picker.setSlotValues(1, this.listText.slice(index + 1))
                this.selectedValues = values
            },

            getSelectedValue () {
                if (this.selected) {
                    this.selectedText = this.selected.train_takeoff_station + ' - ' + this.selected.train_landing_station
                }
            },
            clear () {
                this.selected = null
                this.selectedValues = []
                this.selectedText = ''
                this.list = []
            },

            confirm () {
                let start_index = this.listText.indexOf(this.selectedValues[0])
                let end_index = this.listText.indexOf(this.selectedValues[1])
                let start_city = this.list[start_index]
                let end_city = this.list[end_index]
                this.selected = {
                    train_no: this.train_no,
                    train_takeoff_station: start_city.station_name,
                    train_takeoff_datetime: start_city.leave_time,
                    train_landing_station: end_city.station_name,
                    train_landing_datetime: end_city.arrived_time
                }
                console.log(this.selected)
                this.getSelectedValue()
                this.fillInfo()
                this.popupVisible = false
            },

            openPopup () {
                if (this.list.length > 0) {
                    this.popupVisible = true
                }
            },
            search(visible = true) {
                if (this.disabled) {
                    return false
                }

                this.clear()
                Indicator.open()
                let self = this

                this.$http.post('transport/query/getTrainInfo', {
                    'train_num': this.config.value,
                }).then(function (response) {
                    let ret = response.body

                    if (ret.err == 0) {
                        self.train_no = ret.res.name
                        let list = ret.res.train_list
                        self.list = list;
                        if (list.length > 0) {
                            let arr = []
                            for (let [index, ele] of list.entries()) {
                                arr.push(ele.station_name)
                            }
                            self.slots[0].values = arr.slice(0, list.length - 1)
                            self.slots[2].values = arr.slice(1)
                            self.listText = arr
                            self.popupVisible = visible
                            self.selectedValues = []
                            self.selectedValues[0] = self.slots[0].values[0]
                            self.selectedValues[1] = self.slots[2].values[0]
                        } else {
                            Toast('未查询到车次信息')
                        }
                    } else {
                        Toast('未查询到车次信息')
                    }
                }).finally(function () {
                    Indicator.close()
                })
            },
            fillInfo() {
                let info = this.selected
                for (let el of this.elements) {
                    switch (el.name) {
                        case 'train_no':
                            el.value = !!info ? info.train_no : ''
                            break;
                        case 'train_takeoff_station':
                            el.value = !!info ? info.train_takeoff_station : ''
                            break;
                        case 'train_takeoff_datetime':
                            el.value = !!info ? info.train_takeoff_datetime : ''
                            break;
                        case 'train_landing_station':
                            el.value = !!info ? info.train_landing_station : ''
                            break;
                        case 'train_landing_datetime':
                            el.value = !!info ? info.train_landing_datetime : ''
                            break;
                        default:
                            break;
                    }
                }
            }
        },
    }
</script>

