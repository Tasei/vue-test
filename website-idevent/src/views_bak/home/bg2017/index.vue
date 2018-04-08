<template>
    <div>
        <div>
            <div class="home-index">
                <div v-if="banner">
                    <img :src="banner" class="img-responsive"/>
                </div>
                <div class="home-bar">
                    <router-link :to="{name: 'home_page', query: {page: 'schedule'}}" class="bar-item">
                        <div class="bar-item-icon item-icon-schedule"></div>
                        <div class="bar-item-text">日程</div>
                    </router-link>
                    <router-link :to="{name: 'home_hotel_detail', query: {hotel_id: hotel_id}}" class="bar-item">
                        <div class="bar-item-icon item-icon-hotel"></div>
                        <div class="bar-item-text">酒店</div>
                    </router-link>
                    <router-link :to="{name: 'home_page', query: {page: 'seat'}}" class="bar-item">
                        <div class="bar-item-icon item-icon-seat"></div>
                        <div class="bar-item-text">座位</div>
                    </router-link>
                    <router-link :to="{name: 'iphoto_home', query: {page: 'iphoto'}}" class="bar-item">
                        <div class="bar-item-icon item-icon-iphoto"></div>
                        <div class="bar-item-text">iPhoto</div>
                    </router-link>
                    <div class="animated-chicken left" v-if="!animated"></div>
                    <div class="animated-chicken right" v-else></div>
                </div>
                <div class="home-vote clearfix" v-if="voteList.length > 0">
                    <router-link class="vote-item" v-for="vote of voteList" :to="{name: 'home_vote', query: {vote_id: vote.id}}">
                        <div class="content clearfix">
                            <div class="content-icon" :style="{backgroundImage: 'url(' + vote.pic + ')'}"></div>
                            <div class="content-text">
                                <h5>{{vote.title}}</h5>
                                <p>{{vote.subhead}}</p>
                            </div>
                        </div>
                    </router-link>
                    <router-link :to="{name: 'public_safari'}" class="vote-item">
                        <div class="content clearfix">
                            <div class="content-icon discovery"></div>
                            <div class="content-text">
                                <h5>Discovery</h5>
                                <p>听说有奖品？</p>
                            </div>
                        </div>
                    </router-link>
                    <router-link :to="{name: 'register_form'}" class="vote-item">
                        <div class="content clearfix">
                            <div class="content-icon questionnaire"></div>
                            <div class="content-text">
                                <h5>调查问卷</h5>
                                <p>喜欢这次年会吗</p>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="home-act clearfix">
                    <!--
                    <div class="shadow">
                        <div class="content">
                            <p><span>暂未开始  敬请期待</span></p>
                        </div>
                    </div>-->
                    <div class="col-xs-12 clearfix">
                        <div class="col-xs-4" @click="btnChou">
                            <div class="act-item item-bg-chou"></div>
                        </div>
                        <router-link :to="{name: 'shake_chicken'}" class="col-xs-4">
                            <div class="act-item item-bg-yao"></div>
                        </router-link>
                        <router-link :to="{name: 'red_packet_poker'}" class="col-xs-4">
                            <div class="act-item item-bg-qiang"></div>
                        </router-link>
                    </div>
                </div>
            </div>

            <bottom-bar></bottom-bar>
        </div>
    </div>
</template>
<script>
import BottomBar from "./components/bottom_bar"
import {Toast} from 'mint-ui'
let tt;
export default {
    computed: {
        banner(){
            return this.meeting.settings.home.index_banner;
        },
    },
    data(){
        return{
            voteList: [],
            hotel_id: 0,
            animated: false
        }
    },
    components: {
        BottomBar
    },
    created() {
        this.getList()
        this.getVoteList()
    },
    methods: {
        getList() {
            let self = this
            this.$http.post('hotel/showListByGroup').then((response) => {
                if (response.body.err == 0 && response.body.res.list.length > 0) {
                    this.hotel_id = response.body.res.list[0].id
                }
            }).then(() => {
                this.$store.commit('SPIN')
            })
        },

        //获取投票列表
        getVoteList() {
            this.$http.post('interact/poll/getGroups', {
                meeting_id: this.meeting.id
            }).then((response) => {
                if(response.body.err == 0) {
                    this.voteList = response.body.res.list
                }
            })
        },
        btnChou () {
            Toast('您已获取抽奖资格，请看大屏幕')
        },
        btnQuestion() {
            Toast('敬请期待')
        }
    },
    mounted() {
        let _this = this
        tt = setInterval(() => {
            _this.animated = !_this.animated
        }, 5000)
    },
    destroyed() {
        clearInterval(tt)
    }
}
</script>
<style lang="less" scoped>
    @import "../../../assets/style/home/index.less";
    .img-responsive {
        background-color: #ffffff;
    }
    .home-index {
        background: #f6f6f6;
        padding-bottom: 80px;
    }
    .home-bar {
        display: flex;
        padding: 19px 32px 25px;
        background: url("images/banner.png") no-repeat center;
        background-size: 100% 100%;
        position: relative;
        .bar-item {
            justify-content: space-between;
            width: 25%;
            flex: 1;
            margin-left: 30px;
            display: block;
            position: relative;
            .bar-item-icon {
                padding-top: 100%;
                position: relative;
                overflow: hidden;
                background-repeat: no-repeat;
                background-size: 100% 100%;
                background-position: center;
                &.item-icon-schedule {
                    //background-image: url("./images/schedule_3x.png");
                    background-image: url("images/icon_nian_3x.png");
                }
                &.item-icon-hotel {
                    //background-image: url("./images/hotel_3x.png");
                    background-image: url("images/icon_hui_3x.png");
                }
                &.item-icon-seat {
                    //background-image: url("./images/seat_3x.png");
                    background-image: url("images/icon_lai_3x.png");
                }
                &.item-icon-iphoto {
                    //background-image: url("./images/iphoto_3x.png");
                    background-image: url("images/icon_le_3x.png");
                }
            }
            .bar-item-text {
                text-align: center;
                font-size: 13px;
                color: #333;
                line-height: 13px;
                margin-top: 6px;
            }
            &:first-child {
                margin-left: 0;
            }
        }

        .animated-chicken {
            position: absolute;
            bottom: 0;
            width: 55px;
            height: 25px;
            &.left {
                left: 0;
                background: url("images/animated-chicken-left.gif") no-repeat center;
                background-size: 100% 100%;
                animation: animation-left 5s linear infinite;
            }
            &.right {
                right: 0;
                background: url("images/animated-chicken-right.gif") no-repeat center;
                background-size: 100% 100%;
                animation: animation-right 5s linear infinite;
            }
        }
    }

    .home-vote {
        margin-top: 10px;
        position: relative;

        .vote-item {
            width: 50%;
            float: left;
            padding: 25px 15px;
            background-color: #ffffff;
            position: relative;
            display: inline-block;
            border-top: 1px solid #f9f9f9;
            &:nth-child(odd) {
                border-right: 1px solid #f9f9f9;
            }
            &:nth-child(1) {
                border-top: none;
            }
            &:nth-child(2) {
                border-top: none;
            }

            a {
                display: block;
                position: relative;
            }
            .content {
                .content-icon {
                    float: left;
                    width: 34px;
                    height: 34px;
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                    background-position: center;
                    &.voice-tube {
                         background-image: url("images/voice-tube.png");
                    }
                    &.cook {
                        background-image: url("images/cook.png");
                    }
                    &.clothing {
                        background-image: url("images/clothing.png");
                    }
                    &.questionnaire {
                        background-image: url("images/questionnaire.png");
                    }
                    &.discovery {
                        background-image: url("images/discovery.png");
                    }

                }
                .content-text {
                    margin-left: 41px;
                    h5 {
                        margin: 0;
                        font-size: 16px;
                        line-height: 16px;
                        font-weight: bold;
                        color: #333;
                    }
                    p {
                        font-size: 12px;
                        line-height: 12px;
                        color: #999;
                        margin: 6px 0 0;
                    }
                }
            }
        }

    }
    .home-act {
        margin-top: 10px;
        position: relative;
        .col-xs-12, .col-xs-4 {
            padding-left: 0;
            padding-right: 0;
            background-color: #ffffff;
            .act-item {
                padding-top: 100%;
                background-size: 100% 100%;
                background-repeat: no-repeat;
                background-position: center;
                &.item-bg-yao {
                    background-image: url("images/yao.jpg");
                }
                &.item-bg-qiang {
                    background-image: url("images/qiang.jpg");
                }
                &.item-bg-chou {
                    background-image: url("images/chou.jpg");
                }
            }
        }
    }
    .shadow {
        position: absolute;
        left:  0;
        top: 0;
        width: 100%;
        height: 100%;
        background: #ffffff;
        opacity: 0.92;
        z-index: 1;
        .content {
            display: table;
            height: 100%;
            width: 100%;
            p {
                margin: 0;
                vertical-align: middle;
                display: table-cell;
                color: #333;
                text-align: center;
                position: relative;
                span {
                    position: relative;
                    &:before {
                        content: '';
                        position: absolute;
                        left: -34px;
                        top: 0;
                        bottom: 0;
                        width: 27px;
                        background: url("images/line.png") no-repeat center;
                        background-size: 27px 3px;
                    }
                    &:after{
                        content: '';
                        position: absolute;
                        right: -34px;
                        top: 0;
                        bottom: 0;
                        width: 27px;
                        background: url("images/line.png") no-repeat center;
                        background-size: 27px 3px;
                        transform: rotate(180deg);
                    }
                }
            }
        }
    }

    @keyframes animation-left {
        from {
            left: -55px;
        }
        to {
            left: 100%;
        }
    }
    @keyframes animation-right {
        from {
            right: -55px;
        }
        to {
            right: 100%;
        }
    }
</style>
