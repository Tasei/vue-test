<template>
    <div class="mt-container">
        <div class="block" :class="{opened:opened.hb}">
            <template v-if="hasDepart || hasReturn">
                <!--<div class="title">航班信息</div>-->
                <div class="tour depart" v-if="hasDepart">
                    <div class="type">去程</div>
                    <div class="list">
                        <div class="phase" v-for="p in transitData.Depart" v-if="p.hasData">
                            <div class="date">
                                {{p.Date}}&nbsp;&nbsp;{{p.FromCity}}—{{p.ToCity}}
                            </div>
                            <div class="timeBox">
                                <div class="time start">
                                    {{p.DepartureTime}}
                                    <div class="station">{{p.DepartureAirport}}</div>
                                </div>
                                <div class="duration"></div>
                                <div class="time end">
                                    {{p.ArrivalTime}}
                                    <div class="station">{{p.ArrivalAirport}}</div>
                                    <div class="p">{{p.Duration}}</div>
                                </div>
                            </div>
                            <div class="flightInfo">
                                {{p.Company}} / {{p.Number}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tour return" v-if="hasReturn">
                    <div class="type">回程</div>
                    <div class="list">
                        <div class="phase" v-for="p in transitData.Return" v-if="p.hasData">
                            <div class="date">
                                {{p.Date}}&nbsp;&nbsp;{{p.FromCity}}—{{p.ToCity}}
                            </div>
                            <div class="timeBox">
                                <div class="time start">
                                    {{p.DepartureTime}}
                                    <div class="station">{{p.DepartureAirport}}</div>
                                </div>
                                <div class="duration"></div>
                                <div class="time end">
                                    {{p.ArrivalTime}}
                                    <div class="station">{{p.ArrivalAirport}}</div>
                                    <div class="p">{{p.Duration}}</div>
                                </div>
                            </div>
                            <div class="flightInfo">
                                {{p.Company}} / {{p.Number}}
                            </div>
                        </div>
                    </div>
                </div>
                <!--<a class="display open" @click="toggleContent('hb')">展开全部</a>-->
                <!--<a class="display close" @click="toggleContent('hb')">收起</a>-->
                <hr style="border-color:#d9d9d9;margin:40px 0 20px 0"/>
                <div class="leader">领队：{{leader.name}}<a :href="'tel:'+leader.phone">{{leader.phone}}</a></div>
            </template>

            <template v-if="!hasDepart && !hasReturn">
                <div class="title">航班信息</div>
                <p>未查询到您的航班信息。</p>
            </template>

        </div>
    </div>
</template>
<script>
    import formUtils from "utils/form"
    import {Indicator, Toast} from 'mint-ui';

    export default {
        data() {
            return {
                leader:{
                    name:'戎磊 ',
                    phone:18621938325,
                },
                transitData: {
                    Depart: [
                        {hasData: false},
                        {hasData: false},
                        {hasData: false},
                        {hasData: false}
                    ],
                    Return: [
                        {hasData: false},
                        {hasData: false},
                        {hasData: false},
                        {hasData: false}
                    ],
                },
                opened: {
                    hb: false,
                }
            }
        },
        created() {
            if (this.$route.query.title) {
                document.title = this.$route.query.title;
            }
            this.getTransitInfo();
        },
        computed: {
            hasDepart() {
                for (let i of this.transitData.Depart) {
                    console.log(i.hasData);
                    if (i.hasData) {
                        return true;
                    }
                }
            },
            hasReturn() {
                for (let i of this.transitData.Return) {
                    if (i.hasData) {
                        return true;
                    }
                }
            }
        },
        methods: {
            checkLogin() {
                if (!this.user) {
                    this.$cookie.set('__redirect', this.$route.fullPath)
                    this.$router.push({
                        name: 'portal',
                        query: {
                            mid: this.meeting.id
                        }
                    })
                }
            },
            getTransitInfo() {
                this.checkLogin();
                let self = this;
                this.$http.post('register/getRegInfo', {
                    child_id: self.child_id
                }).then(function (response) {
                    let ret = response.body;
                    if (ret.err == 0 && ret.res.formList) {
                        for (let form of ret.res.formList) {
                            if (form.name == 'Transit') {
                                for (let ele of form.value.elements) {
                                    if(ele.label == '领队信息'){
                                       let leaderArr =  ele.value.split('：');
                                       let name = leaderArr[0];
                                       let phone = leaderArr[1];
                                        this.leader.name = name;
                                        this.leader.phone =phone;
                                    }
                                    let labelArr = ele.label.split('_');
                                    let type = labelArr[0];
                                    let index = parseInt(labelArr[1]) - 1;
                                    let key = labelArr[2];
                                    if (this.transitData[type] && this.transitData[type][index]) {
                                        let v = this.getItemText(ele);
                                        this.transitData[type][index][key] = v;
                                        if (v) {
                                            this.transitData[type][index].hasData = true;
                                        }
                                    }
                                }
                                console.log(this.transitData);
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
                    let values = [].concat(el.value);
                    let texts = []
                    for (let option of el.options) {
                        if (values.indexOf(option.value) > -1) {
                            texts = texts.concat(option.text)
                        }
                    }
                    return texts.join(",");
                }
                if (el.type == 'paragraph') {
                    return marked(el.text, {sanitize: true})
                }
                if (el.type == 'photo_uploader') {
                    return '<img src="' + el.attachment.url + '" />';
                }
                return el.value
            },
            toggleContent(n) {
                this.opened[n] = !this.opened[n];
            },
        }
    }
</script>
<style lang="less" scoped>
    @import "../assets/style.less";

    @ori-green80: rgba(128, 167, 0, 0.8);
    @ori-green50: rgba(128, 167, 0, 0.5);
    @ori-green20: rgba(128, 167, 0, 0.2);
    @ori-blue: #3B8BD4;
    @ori-blue80: rgba(59, 139, 212, 0.8);
    @ori-blue50: rgba(59, 139, 212, 0.5);
    @ori-blue20: rgba(59, 139, 212, 0.2);

    .mt-container {
        color: #333;
    }

    .type {
        background-image: url("../assets/flight_go.png");
        background-position: left center;
        background-size: contain;
        background-repeat: no-repeat;
        height: 24px;
        line-height: 24px;
        padding-left: 30px;
        font-size: 16px;
        color: @ori-blue;
        margin-bottom: -10px;
    }

    .date {
        padding: 25px 24px 10px 24px;
        position: relative;
        color: #666;
        &:before {
            content: '';
            display: block;
            position: absolute;
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background-color: #1F9BD1 ;
            left: 11px;
            top: 64%;
            transform: translate(-50%, -50%);
        }
        &:after {
            content: '';
            display: block;
            position: absolute;
            top: -5px;
            bottom: 0;
            left: 10px;
            border-right: 2px dotted @ori-green50;
            opacity: 0.5;
            margin-top: 4px;
        }
    }

    .timeBox {
        padding: 18px 6%;
        border: 1px solid @ori-green20;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        .start, .duration, .end {
            float: left;
            width: 38%;
        }
        .duration {
            width: 24%;
            padding: 4px 0;
            background: url('../assets/arrow.png') right bottom no-repeat;
            background-size: contain;
            margin-top: 12px;
        }
        .time {
            font-size: 32px;
            text-align: center;
            position: relative;
            .station {
                font-size: 12px;
                margin-top: 5px;
                color: #666;
            }
            .p {
                position: absolute;
                top: -10px;
                right: -6px;
                font-size: 12px;
                color: #999;
            }
        }
        &:after {
            content: '';
            display: block;
            clear: both;
        }
    }

    .flightInfo {
        background-color: #1F9BD1;
        color: #fff;
        opacity: 0.8;
        padding: 12px 15px;
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;
    }

    .tour {
        margin-bottom: 30px;
        .phase {
            &:first-child {
                .date {
                    &:after {
                        top: 64%;
                    }
                }
            }
        }
        &.return {
            .type {
                color: @ori-blue;
                background-image: url("../assets/flight_back.png");
            }
            .date {
                &:before {
                    background-color: @ori-blue;
                }
                &:after {
                    border-right: 2px dotted @ori-blue50;
                }
            }
            .timeBox {
                border: 1px solid @ori-blue20;
            }
            .flightInfo {
                background-color: #14ADA9;
            }
        }
    }

    .block {
        position: relative;
        /*height: 280px;*/
        overflow: hidden;
        /*.display {*/
            /*position: absolute;*/
            /*bottom: 0;*/
            /*left: 0;*/
            /*right: 0;*/
            /*height: 80px;*/
            /*background-image: linear-gradient(0deg, #FFFFFF 0%, #FFFFFF 30%, rgba(255, 255, 255, 0.00) 100%);*/
            /*padding-top: 40px;*/
            /*text-align: center;*/
            /*&.open {*/
                /*display: block;*/
            /*}*/
            /*&.close {*/
                /*!*display: none;*!*/
            /*}*/
        /*}*/
        /*&.opened {*/
            /*height: auto;*/
            /*padding-bottom: 3em;*/
            /*.display {*/
                /*&.open {*/
                    /*display: none;*/
                /*}*/
                /*&.close {*/
                    /*display: block;*/
                /*}*/
            /*}*/
        /*}*/
    }

</style>
