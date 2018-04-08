<template>
    <div>
        <div class="home-index" v-if="user">
            <!--<div class="index-banner">-->
                <!--<mt-swipe :auto="4000" class="swiper_container">-->
                    <!--<mt-swipe-item v-for="p in banner">-->
                        <!--<div class="info" :style="{ 'background-image': 'url(' + p + ')' }"></div>-->
                    <!--</mt-swipe-item>-->
                <!--</mt-swipe>-->
            <!--</div>-->
            <!--<index-menu :list="translated" class="index_menu"></index-menu>-->

            <div>
                <img :src="banner" class="img-responsive" />
            </div>
            <div class="list-group">
                <div class="list-group-left">
                    <div class="little">
                        <div class="list-group-item hotel" @click="goItem({name: 'home_page', query: {page: 'hotel', mobile: 1,title:'酒店介绍'}})">
                            <i class="iuifont iui-icon-hotel"></i>
                            <a href="javascript:;">
                                <h5>酒店介绍</h5>
                                <!--<p>Hotel</p>-->
                            </a>
                        </div>
                        <div class="list-group-item venue" @click="goItem({name: 'home_page', query: {page: 'common', mobile: 1,title:'报名须知'}})">
                            <i class="iuifont iui-icon-notice"></i>
                            <a href="javascript:;">
                                <h5>报名须知</h5>
                                <!--<p>Survey</p>-->
                            </a>
                        </div>
                    </div>
                    <div class="big">
                        <div class="list-group-item schedule" @click="goItem({name: 'home_page', query: {page: 'schedule', mobile: 1,title:'日程安排'}})">
                            <a href="javascript:;">
                                <h5>日程安排</h5>
                                <p>查看具体安排</p>
                            </a>
                            <i class="iuifont iui-icon-schedule"></i>
                        </div>
                    </div>
                    <div class="middle">
                        <div class="list-group-item reception" @click="goItem({name: 'home_page', query: {page: 'flight', mobile: 1,title:'航班信息'}})">
                            <a href="javascript:;">
                                <h5>航班信息</h5>
                                <p class="CaOEn-name">查看航班信息</p>
                            </a>
                            <i class="iuifont iui-icon-flight"></i>
                        </div>
                    </div>
                </div>
                <div class="list-group-right">
                    <div class="big">
                        <div class="list-group-item register" @click="goItem({name:'register_form'})">

                            <a href="javascript:;">
                                <h5>注册报名</h5>
                                <!--<p>Registration</p>-->
                                <p class="list-details">查看报名信息</p>
                            </a>
                            <i class="iuifont iui-icon-register"></i>
                        </div>
                    </div>
                    <div class="middle">
                        <div class="list-group-item common" @click="goItem({name: 'home_page', query: {page: 'tips', mobile: 1,title:'旅行贴士'}})">
                            <i class="iuifont iui-icon-notice"></i>
                            <a href="javascript:;">
                                <h5>旅行贴士</h5>
                                <p>查看贴心服务</p>
                            </a>
                        </div>

                    </div>
                    <div class="little">
                        <div class="list-group-item contact" @click="goItem({name: 'home_page', query: {page: 'contact', mobile: 1,title:'联系我们'}})">
                            <i class="iuifont iui-icon-message"></i>
                            <a href="javascript:;">
                                <h5>联系我们</h5>
                                <!--<p>Contact us</p>-->
                                <!--<p class="list-details">查看联系方式</p>-->
                            </a>
                        </div>
                        <div class="list-group-item qrcode" @click="goItem({name: 'home_page', query: {page: 'qrcode', mobile: 1,title:'个人信息'}})">
                            <i class="iuifont iui-icon-user"></i>
                            <a href="javascript:;">
                                <h5>个人信息</h5>
                                <!--<P>QR Code</P>-->
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--<bottom-bar></bottom-bar>-->
    </div>
</template>
<script>
    import iButton from "iButton"
    import {Toast} from "mint-ui"
    import BottomBar from "./components/bottom_bar"
    import IndexMenu from "./components/index_menu"
    export default{
        data(){
            return {
//                banner: [
//                    require("./assets/1.png"),
//                    require("./assets/2.png"),
//                    require("./assets/3.png"),
//                    require("./assets/4.png"),
//                    require("./assets/5.png"),
//                    require("./assets/6.png")
//                ],
            }
        },
        computed: {
            banner() {
                return this.meeting.settings.home ? this.meeting.settings.home.index_banner : '';
            },
            translated() {
                return [{
                    iconImg: require("./assets/calender.png"),
                    title: '日程安排',
                    route_to: {name: 'home_page', query: {page: 'schedule', mobile: 1,title:'日程安排'}}
                }, {
                    iconImg: require("../../../assets/images/mobile/home/menu/hotel.png"),
                    title: '酒店介绍',
                    route_to: {name: 'home_page', query: {page: 'about', mobile: 1,title:'酒店介绍'}}
                }, {
                    iconImg: require("./assets/flight.png"),
                    title: '航班信息',
                    route_to: {name: 'home_page', query: {page: 'flight', mobile: 1,title:'航班信息'}}
                }, {
                    iconImg: require("./assets/weather.png"),
                    title: '当地天气',
                    route_to: {name: 'home_page', query: {page: 'weather', mobile: 1,title:'当地天气'}}
                }, {
                    iconImg: require("./assets/tips.png"),
                    title: '旅行贴士',
                    route_to: {name: 'home_page', query: {page: 'tips', mobile: 1,title:'旅行贴士'}}
                }, {
                    iconImg: require("./assets/question.png"),
                    title: '礼仪须知',
                    route_to: {name: 'home_page', query: {page: 'info', mobile: 1,title:'礼仪须知'}}
                }];
            }
        },
        mounted() {
            this.$store.commit('SPIN');
        },
        components: {
            iButton, BottomBar, IndexMenu
        },
        methods:{
            goItem(r) {
                console.log(r)
                if(r.query){
                    let rBtn = this.meeting.websettings[r.query.page]
                    if(rBtn == 'false'){
                        Toast('敬请期待')
                        return
                    }
                    this.$router.push(r)
                }else{
                    this.$router.push(r)
                }
            }
        }
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    @import "../../../assets/style/home/index.less";
    .home-index {
        height: 100vh;
        /*padding: 50.6vw 0 60px 0;*/
        position: relative;
        @media (min-width: 750px) {
            padding-top: 380px;
        }
    }
    .index-banner {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 50.6vw;
        max-height: 380px;
        .swiper_container{
            width: 100%;
            height: 100%;
            .info {
                display: block;
                width: 100%;
                height: 100%;
                background-repeat: no-repeat;
                background-position: center top;
                background-size: cover;
            }
        }
    }
    .index_menu {
        height: 100%;
        min-height: 300px;
        overflow: hidden;
        margin: 5px;
        border-radius: 0;
    }
    .list-group{
        margin:0;
        padding:1%;
        display:flex;
        justify-content: space-between;
        background-color: white;
        .list-group-left,.list-group-right{
            width:49.5%;
            &>div:not(:last-of-type){
                margin-bottom:2%;
            }
            .little{
                display: flex;
                justify-content:space-between;
                &>div{
                    width:49%;
                    text-align: center;
                    padding:10% 0;
                    -webkit-background-size: 100% 100%;
                    background-size: 100% 100%;
                    i {
                        color: #fff;
                        font-size:20px;
                    }
                    a{
                        color: #fff;
                        h5,p{
                            margin:0;
                        }
                        .CaOEn-name{
                            font-size:12px;
                        }
                    }
                }
            }
            .big,.middle{
                &>div{
                    display: flex;
                    padding:29% 0;
                    padding-left:10%;
                    -webkit-background-size: 100% 100%;
                    background-size: 100% 100%;
                    i {
                        color: #fff;
                        font-size:40px;
                        vertical-align: middle;
                    }
                    a{
                        color: #fff;
                        h5{
                            font-size:20px;
                            margin-right:15px;
                            margin-bottom:0;
                        }
                        p{
                            color: #ddd;
                            margin-bottom:0;
                        }
                    }
                }
            }
            .middle{
                &>div{
                    padding:5.42% 0;
                    padding-left:10%;
                    p{
                        margin-bottom:7px;
                    }
                }
            }
        }
    }
    .register{
        background: #97be16;
    }
    .venue{
        background: #51b4ad;
    }
    .reception{
        background: #d3c31a;
    }
    .schedule{
        background: #8b79d5;
    }
    .common{
        background: #f19f39;
    }
    .qrcode{
        background: #8b79d5;
    }
    .interact{
        background: #5cb84d;
    }
    .hotel{
        background: #97be16;
    }
    .contact{
        background:#5cb84d;
    }
</style>
<style lang="less">
    .mint-swipe-indicators {
        top: 10px;
        bottom: auto;
        .mint-swipe-indicator {
            background: #fff;
            &.is-active{
                background: #80A700;
                opacity:0.6;
                border: 1px solid rgba(255,255,255,0.2);
            }
        }
    }
</style>
