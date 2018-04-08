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
                @change="flightNoChange()"
            >
            <div class="input-group-addon"><a href="javascript:void(0);" class="text-primary" @click="search">{{$t('search')}}</a>
            </div>
        </div>
        <p class="help-block">
            {{config.help}}
            <span v-show="errors.has(elementName)" class="form-invalid">{{ errors.first(elementName) }}</span>
        </p>

        <div v-if="needSelect">
            <label>
                <span class="text-danger">*</span>
                {{$t('flight.route')}}
            </label>
            <div>
                <select class="form-control" v-validate="{required:true}" v-model="selectedIndex" :name="selectorName">
                    <option value="-1">-- 请选择航班线路 --</option>
                    <option v-for="(flight, index) in flightList"
                            :key="index"
                            :value="index">
                        {{flight.flight_takeoff_city}} - {{flight.flight_landing_city}}</option>
                </select>
            </div>
            <p class="help-block">
                <span v-show="errors.has(selectorName)" class="form-invalid">{{ errors.first(selectorName) }}</span>
            </p>
        </div>

        <table class="table table-detail" v-if="flightInfo">
            <tbody>
            <tr>
                <td>{{$t('flight.takeoffTime')}}</td>
                <td>{{flightInfo.flight_takeoff_datetime}}</td>
            </tr>
            <tr>
                <td>{{$t('flight.takeoffAirport')}}</td>
                <td>{{flightInfo.flight_takeoff_city}} {{flightInfo.flight_takeoff_airport}}
                    {{flightInfo.flight_takeoff_terminal}}
                </td>
            </tr>
            <tr>
                <td>{{$t('flight.landingTime')}}</td>
                <td>{{flightInfo.flight_landing_datetime}}</td>
            </tr>
            <tr>
                <td>{{$t('flight.landingAirport')}}</td>
                <td>{{flightInfo.flight_landing_city}} {{flightInfo.flight_landing_airport}}
                    {{flightInfo.flight_landing_terminal}}
                </td>
            </tr>
            </tbody>
        </table>
        <div class="flightNotice" v-if="flightInfo && flightNotice != ''">
            <div v-for="item in flightNotice">
                <img v-if="flightInfo.flight_landing_city == item.name" :src="item.img" alt="">
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped rel="stylesheet/less">
    input {
        text-transform: uppercase;
    }

    .popup-flight {
        width: 100%;
    }
</style>
<script>
    import formMixin from "mixins/formElements"
    import formUtils from "utils/form"
    import {Toast} from "mint-ui"
    export default {
        mixins: [formMixin],
        data() {
            return {
                flightNotice:'',
                flightList: [],
                selectedText: "",
                flightInfo: null,
                selectedIndex: -1,
                needSelect: false,
            }
        },
        props: {
            elements: Array
        },
        computed: {
            selectorName(){
                return 'flight_info_selector_' + this.config.id
            }
        },
        created() {
            let str = this.meeting.websettings.flightNotice;
            if(str != ''){
                this.flightNotice = eval('(' + str + ')')
            }
            console.log(this.flightNotice)

            if (this.config.value == '') {
                this.needSelect = true
                return
            }

            let flightInfo = {}
            console.log(this.elements)
            for (let el of this.elements) {
                switch (el.name) {
                    case 'flight_takeoff_airport':
                        flightInfo.flight_takeoff_airport = el.value
                        break;
                    case 'flight_takeoff_city':
                        flightInfo.flight_takeoff_city = el.value ? el.value : '-'
                        break;
                    case 'flight_takeoff_terminal':
                        flightInfo.flight_takeoff_terminal = el.value ? el.value : '-'
                        break;
                    case 'flight_takeoff_datetime':
                        flightInfo.flight_takeoff_datetime = el.value
                        break;
                    case 'flight_landing_airport':
                        flightInfo.flight_landing_airport = el.value
                        break;
                    case 'flight_landing_city':
                        flightInfo.flight_landing_city = el.value ? el.value : '-'
                        break;
                    case 'flight_landing_terminal':
                        flightInfo.flight_landing_terminal = el.value ? el.value : '-'
                        break;
                    case 'flight_landing_datetime':
                        flightInfo.flight_landing_datetime = el.value
                        break;
                    default:
                        break;
                }
            }
            this.flightInfo = flightInfo
            this.selectedText = flightInfo.flight_takeoff_city + '-' + flightInfo.flight_landing_city
        },
        watch: {
            selectedIndex() {
                this.flightInfo = this.flightList[this.selectedIndex]
                this.fillInfo()
            }
        },
        methods: {
            flightNoChange() {
                this.search()
                this.flightInfo = null
                this.needSelect = true
            },
            search() {
                let self = this
                self.flightList = []

                let flight_date = ''

                for (let el of self.elements) {
                    if (el.name == 'flight_takeoff_date') {
                        flight_date = document.getElementById('datepicker-' + el.id).value
                        break;
                    }
                }

                this.$http.post('transport/query/getFlightInfo', {
                    'flight_number': this.config.value,
                    'flight_date': flight_date
                }).then(function (response) {
                    let ret = response.body

                    if (ret.err == 0 && ret.res.list.length > 0) {
                        self.flightList = ret.res.list
                        self.needSelect = true
                    } else {
                        Toast('未能查询到此航班号信息')
                    }
                })
            },
            fillInfo() {
                let info = this.flightInfo
                for (let el of this.elements) {
                    switch (el.name) {
                        case 'flight_no':
                            if (info && info.flight_no) {
                                el.value = info.flight_no
                            }
                            break;
                        case 'flight_takeoff_airport':
                            el.value = !!info ? info.flight_takeoff_airport : ''
                            break;
                        case 'flight_takeoff_city':
                            el.value = !!info ? info.flight_takeoff_city : '-'
                            break;
                        case 'flight_takeoff_terminal':
                            el.value = !!info ? info.flight_takeoff_terminal : '-'
                            break;
                        case 'flight_takeoff_datetime':
                            el.value = !!info ? info.flight_takeoff_datetime : ''
                            break;
                        case 'flight_landing_city':
                            el.value = !!info ? info.flight_landing_city : '-'
                            break;
                        case 'flight_landing_airport':
                            el.value = !!info ? info.flight_landing_airport : ''
                            break;
                        case 'flight_landing_terminal':
                            el.value = !!info ? info.flight_landing_terminal : '-'
                            break;
                        case 'flight_landing_datetime':
                            el.value = !!info ? info.flight_landing_datetime : ''
                            break;
                        default:
                            break;
                    }
                }
            }
        },
    }
</script>
