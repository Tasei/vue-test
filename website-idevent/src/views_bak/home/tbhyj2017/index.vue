<template>
    <div>
        <div :class="{'welcomHide':welcomHide}">
            <img src="images/ldhyy.png" alt="">
        </div>
        <div :class="{'home-index':true,'welcomHide':!welcomHide}">

            <div class="list-box">
                <ul class="list-group index-list">
                    <li class="list-group-item">
                        <i class="index-icon index-icon-calendar"></i>
                        <router-link :to="{name:'home_page', query: {page: 'schedule'}}">
                            <h5>会议议程</h5>
                            <!--<p class="list-details">查看具体会议安排</p>-->
                        </router-link>
                    </li>
                    <li class="list-group-item">
                        <i class="index-icon index-icon-seat"></i>
                        <router-link :to="{name:'home_page', query: {page: 'seat'}}">
                            <h5>座位表</h5>
                            <!--<p class="list-details">展示我的座位号信息</p>-->
                        </router-link>
                    </li>
                    <li class="list-group-item">
                        <i class="index-icon index-icon-reception"></i>
                        <router-link :to="{name:'home_page',query: {page: 'reception'}}">
                            <h5>接送机</h5>
                            <!--<p class="list-details">展示所有接驳信息</p>-->
                        </router-link>
                    </li>
                    <li class="list-group-item">
                        <i class="index-icon index-icon-vote"></i>
                        <!--<router-link :to="{name:'home_page',query: {page: ''}}">-->
                            <!--<h5>投票</h5>-->
                            <!--<p class="list-details">查看具体投票情况</p>-->
                        <!--</router-link>-->
                       <a  href="http://wxconference.cpic.com.cn:8002/conference_brand/html/research/vote_login.html">
                            <h5>最美柜员投票</h5>
                        </a>
                    </li>
                    <li class="list-group-item">
                        <i class="index-icon  index-icon-iphoto"></i>
                        <router-link :to="{name:'home_page',query: {page: 'takePicture'}}">
                            <h5>拍照签到</h5>
                            <!--<p class="list-details">展示所有接驳信息</p>-->
                        </router-link>

                        <!--<a @click="iPhoto">-->
                            <!--&lt;!&ndash;href="http://i.idevent.cn/3d_wall/?q=haiyan&mid=tbhyj2017"&ndash;&gt;-->
                            <!--<h5>拍照签到</h5>-->
                        <!--</a>-->
                    </li>
                    <li class="list-group-item">
                        <i class="index-icon bar-icon-zpq"></i>
                        <!--<router-link :to="{name:'iphoto_me'}">-->
                        <!--<h5>精彩瞬间</h5>-->
                        <!--<p class="list-details">人脸识别查看精彩瞬间</p>-->
                        <!--</router-link>-->
                        <a href="https://iphoto.idevent.cn/?mid=10080">
                            <h5>精彩瞬间</h5>
                            <!--<p class="list-details">人脸识别查看精彩瞬间</p>-->
                        </a>
                    </li>
                    <li class="list-group-item">
                        <i class="index-icon index-icon-my"></i>
                        <router-link :to="{name:'home_page',query: {page: 'contact'}}">
                            <h5>会务组</h5>
                            <!--<p class="list-details">展示所有接驳信息</p>-->
                        </router-link>
                    </li>
                    <li class="list-group-item">
                        <i class="index-icon index-icon-qrcode"></i>
                        <router-link :to="{name:'home_page',query: {page: 'qrcode'}}">
                            <h5>餐券</h5>
                        </router-link>
                    </li>
                    <!--<li class="list-group-item">-->
                        <!--<i class="index-icon index-icon-programList"></i>-->
                        <!--<router-link :to="{name:'home_page',query: {page: 'programList'}}">-->
                            <!--<h5>海燕奖节目单</h5>-->
                        <!--</router-link>-->
                    <!--</li>-->
                    <!--<li class="list-group-item">-->
                        <!--<i class="index-icon index-icon-productList"></i>-->
                        <!--<router-link :to="{name:'home_page',query: {page: 'productList'}}">-->
                            <!--<h5>产品发布清单</h5>-->
                        <!--</router-link>-->
                    <!--</li>-->
                </ul>
            </div>
        </div>

        <!--<bottom-bar></bottom-bar>-->
    </div>
</template>
<script>
    import iButton from "iButton"
    import {Toast} from "mint-ui"
    import BottomBar from "./components/bottom_bar"
    import IndexMenu from "../../../views_mobile/components/iui/index_menu.vue"
    import Wechat, { wx } from 'assets/js/wechat'
    export default{
        data(){
            return {
                welcomHide:true,
                list: [{
                    icon: "schedule",
                    title: "会议议程",
                    desc: "查看具体会议安排",
                    route_to: {name: 'home_page', query: {page: 'schedule'}}
                },{
                    icon:"print",
                    title:"座位表",
                    desc:"展示我的座位号信息",
                    route_to:{name:'home_page',query:{page: 'seat'}}
                },{
                    icon: "hotel",
                    title: "酒店介绍",
                    desc: "查看入住酒店名称、地址",
                    route_to: {name: 'home_page', query: {page: 'hotel'}}
                },{
                    icon: "flight",
                    title: "接送机",
                    desc: "展示所有接驳信息",
                    route_to: {name: 'home_page', query: {page: 'reception'}}
                },{
                    icon: "notice",
                    title: "投票",
                    desc: "查看具体投票情况",
                    route_to: {name: 'home_page', query: {page: 'vote'}}
                },{
                    icon: "iphoto",
                    title: "精彩瞬间",
                    desc: "人脸识别查看精彩瞬间",
                    route_to: {name: 'home_page', query: {page: 'contact'}}
                }]
            }
        },
        computed: {
            banner(){
//                return this.meeting.settings.home.index_banner;
            }
        },
        mounted() {
            console.log(this.user)
            if (this.user) {
                this.$store.commit('SPIN');
                this.welcomHideFn();
            }
        },
        components: {
            iButton, BottomBar, IndexMenu
        },
        methods: {
            vote() {
                console.log(this.user.created_at)
                Toast('客户自己提供链接......')
            },
            iPhoto() {
                Toast('敬请期待')
            },
            welcomHideFn() {
                if (this.user.weixin) {
                    if (this.$cookie.get('welcomeYou') == "ok") {
                        return
                    } else {
                        this.$cookie.set('welcomeYou', 'ok', {expires: '1D'});
                        this.welcomHide = false;
                        let no = setTimeout(() => {
                            this.welcomHide = true;
                        }, 5000)
                    }
                }
            },

        }
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    @import "../../../assets/style/home/index.less";

    .welcomHide {
        display: none;
    }

    /*.curton{*/
    /*width: 100%;*/
    /*height:100%;*/
    /*-webkit-animation: resize 2s 1;*/
    /*-o-animation: resize 2s 1;*/
    /*animation: resize 2s 1;*/
    /*}*/
    /*@-webkit-keyframes resize {*/
    /*0% {*/
    /*width:375px;*/
    /*}*/
    /*50% {*/
    /*width:250px;*/
    /*}*/
    /*100% {*/
    /*width:0px;*/
    /*}*/
    /*}*/
    .home-index {
        background: url(images/mulu_bg.png) 0 0 no-repeat;
        -webkit-background-size: 100%;
        background-size: 100%;
    }

    .list-box {
        margin: 130px 0px 0 54px;
        border-radius: 4px;
    }

    .index-list {
        margin-bottom: 18px;
        li {
            padding: 12px 10px 12px 30px;
            border: 0;
            overflow: hidden;
            background-repeat: no-repeat;
            background-position: center;
            background-size: 26px 21px;
            background-color: transparent !important;
            h5 {
                color: #fff;
                font-size: 20px;
                line-height: 20px;
                font-family: PingFangSC-Medium;
                margin: 0;
                /*margin-bottom: 16px;*/
            }
            p {
                margin: 0;
            }
            .list-details {
                color: #999;
                font-size: 12px;
                line-height: 12px;
            }

            &:after {
                content: '';
                position: absolute;
                /*left: 62px;*/
                bottom: 15px;
                right: 135px;
                /*top: auto;*/
                height: 10px;
                width: 10px;
                background-image: url(images/right.png);
                -webkit-background-size: 100%;
                background-size: 100%;
                display: block;
                z-index: 15;
                transform: scaleY(1) !important;
            }

            /*&:first-child {*/
            /*border-top-left-radius: 2px;*/
            /*border-top-right-radius: 2px;*/
            /*}*/
            /*&:last-child {*/
            /*border-bottom-left-radius: 2px;*/
            /*border-bottom-right-radius: 2px;*/
            /*&:after {*/
            /*height: 0!important;*/
            /*}*/
            /*}*/

            .index-icon {
                position: absolute;
                display: inline-block;
                left: 0px;
                width: 20px;
                height: 20px;
                top: 12px;
                background-size: 100% auto;

                &.index-icon-calendar {
                    background-image: url('images/calendar.png');
                }
                &.index-icon-seat {
                    background-image: url('images/seat.png');
                }
                &.index-icon-hotel {
                    background-image: url('images/hotel.png');
                }
                &.index-icon-reception {
                    background-image: url('images/air.png');
                }
                &.index-icon-vote {
                    background-image: url('images/vote.png');
                }
                &.bar-icon-zpq {
                    background-image: url('images/zpq.png');
                }
                &.index-icon-iphoto {
                    background-image: url('images/iphoto.png');
                }
                &.index-icon-my {
                    background-image: url('images/my.png');
                }
                &.index-icon-qrcode {
                    background-image: url('images/cqewm.png');
                }
                &.index-icon-programList {
                    background-image: url('images/jiemu.png');
                }
                &.index-icon-productList {
                    background-image: url('images/icon_cpqd.png');
                }
            }

        }
    }
</style>
