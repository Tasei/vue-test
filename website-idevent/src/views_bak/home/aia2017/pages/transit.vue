<template>
    <div class="mt-container">
        <div class="block">
            <template v-if="!transitData.Depart && !transitData.Return">
                <div class="title">交通信息</div>
                <p>您选择了交通自理，请自行确认好您的出行时间。</p>
            </template>
            <template v-if="transitData.Depart">
                <div class="type" :class="{flight_1: isDepartFlight}">
                    去程
                </div>
                <div class="date">
                    {{transitData.DepartDate}}&nbsp;&nbsp;{{transitData.DepartFromCity}}——{{transitData.DepartToCity}}
                </div>
                <div class="timeBox">
                    <div class="time start">
                        {{transitData.DepartDepartureTime}}
                        <div class="station">{{transitData.DepartFromStation}}</div>
                    </div>
                    <div class="duration">{{transitData.DepartDuration}}</div>
                    <div class="time end">
                        {{transitData.DepartArrivalTime}}
                        <div class="station">{{transitData.DepartToStation}}</div>
                    </div>
                </div>
                <div class="flightInfo">
                    {{transitData.DepartFOTNumber}} {{transitData.DepartSeatClass}}
                </div>
            </template>

            <template v-if="transitData.Return">
                <div class="type" :class="{flight_2: isReturnFlight}">
                    返程
                </div>
                <div class="date">
                    {{transitData.ReturnDate}}&nbsp;&nbsp;{{transitData.ReturnFromCity}}——{{transitData.ReturnToCity}}
                </div>
                <div class="timeBox">
                    <div class="time start">
                        {{transitData.ReturnDepartureTime}}
                        <div class="station">{{transitData.ReturnFromStation}}</div>
                    </div>
                    <div class="duration">{{transitData.ReturnDuration}}</div>
                    <div class="time end">
                        {{transitData.ReturnArrivalTime}}
                        <div class="station">{{transitData.ReturnToStation}}</div>
                    </div>
                </div>
                <div class="flightInfo">
                    {{transitData.ReturnFOTNumber}} {{transitData.ReturnSeatClass}}
                </div>
            </template>

            <template v-if="transitData.Depart || transitData.Return">
                <p>如信息有误，或需要改签，请联系我们票务客服：应悦 13916789217 </p>
                <p>工作人员将在机场及火车站举领导力峰会牌迎接。机场联络人：陈琳 13777497460。杭州东站及城站联络人：章剑文 13918159247</p>
            </template>

        </div>
    </div>
</template>
<script>
    import formUtils from "utils/form"
    import { Indicator, Toast } from 'mint-ui';
    export default{
        data() {
            return {
                isDepartFlight: false,
                isReturnFlight: false,
                transitData: {
                    Transportation: '',
                    Depart: '',
                    Return: '',
                },
            }
        },
        created() {
            this.getTransitInfo()
        },
        methods: {
            getTransitInfo() {
                let self = this
                this.$http.post('register/getRegInfo', {
                    child_id: self.child_id
                }).then(function(response) {
                    let ret = response.body

                    if (ret.err == 0 && ret.res.formList) {
                        for (let form of ret.res.formList){
                            if (form.name == 'Transit'){
                                for (let ele of form.value.elements){
                                    this.transitData[ele.label] = this.getItemText(ele)
                                }
                                if (this.transitData.DepartTransportation == '飞机') {
                                    this.isDepartFlight = true;
                                }
                                if (this.transitData.ReturnTransportation == '飞机') {
                                    this.isReturnFlight = true;
                                }
                                break;
                            }
                        }
                    } else {
                        Toast(ret.msg);
                    }
                }).finally(() => {
                    this.$store.commit('SPIN', false)
                })
            },
            getItemText(el) {
                //translate options to text
                if (el.options) {
                    let values = [].concat(el.value)
                    let texts = []
                    for (let option of el.options) {
                        if (values.indexOf(option.value) > -1) {
                            texts = texts.concat(option.text)
                        }
                    }
                    return texts.join(",")
                }
                if (el.type == 'paragraph') {
                    return marked(el.text, {sanitize: true})
                }
                if (el.type == 'photo_uploader') {
                    return '<img src="'+el.attachment.url+'" />';
                }
                return el.value
            },
        }
    }
</script>
<style lang="less" scoped>
    @import "../assets/style";
    @purple: #5E3B74;
    @purple50: rgba(94,59,116,0.5);
    .mt-container {
        background-color: #fff;
        color:#333;
    }
    .type {
        background-image: url("../assets/icon-train.png");
        background-position: left center;
        background-size: contain;
        background-repeat: no-repeat;
        height: 24px;
        line-height: 24px;
        padding-left: 30px;
        font-size:16px;
        margin-bottom: 6px;
        &.flight_1 {
            background-image: url("../assets/icon-flight-1.png");
        }
        &.flight_2 {
            background-image: url("../assets/icon-flight-2.png");
        }
    }
    .date {
        padding: 10px 24px;
        position: relative;
        &:before {
            content: '';
            display: block;
            position: absolute;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: @purple;
            opacity: 0.5;
            left: 7px;
            top: 50%;
            margin-top: -4px;
        }
        &:after {
            content: '';
            display: block;
            position: absolute;
            top: 50%;
            bottom: 0;
            left: 10px;
            border-right: 2px dotted @purple;
            opacity: 0.5;
            margin-top:4px;
        }
    }
    .timeBox {
        padding: 18px 6%;
        border: 1px solid @purple50;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        .start, .duration, .end {
            float: left;
            width: 38%;
        }
        .duration {
            width: 24%;
            text-align:center;
            font-size: 12px;
            padding: 10px 0 4px 0;
            background: url('../assets/arrow.png') right bottom no-repeat;
            background-size: contain;
            color: #666;
        }
        .time {
            font-size: 32px;
            text-align:center;
            .station {
                font-size: 12px;
                margin-top:5px;
                color: #666;
            }
        }
        &:after {
            content: '';
            display:block;
            clear: both;
         }
    }
    .flightInfo {
        background-color: @purple;
        color: #fff;
        padding: 12px 15px;
        margin-bottom: 30px;
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;
    }

</style>
