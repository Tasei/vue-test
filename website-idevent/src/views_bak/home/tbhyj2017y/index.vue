<template>
    <div>
        <div :class="{'noteHide':noteHide,'noteImg':true}" >
            <img src="images/note.jpg" alt="">
            <button class="note-btn btn " @click="noteHideFn">点击进入</button>
        </div>
        <div :class="{'home-index':true,'noteHide':!noteHide}">
            <div v-if="banner">
                <img :src="banner" class="img-responsive"/>
            </div>
            <!--<index-menu :list="list"></index-menu>-->
            <div class="list-box">
                <ul class="list-group index-list">
                    <li class="list-group-item">
                        <i class="index-icon index-icon-calendar"></i>
                        <router-link :to="{name:'home_page', query: {page: 'schedule'}}">
                            <h5>会议议程</h5>
                            <p class="list-details">查看具体会议安排</p>
                        </router-link>
                    </li>
                    <li class="list-group-item">
                        <i class="index-icon index-icon-seat"></i>
                        <router-link :to="{name:'home_page', query: {page: 'seat'}}">
                            <h5>座位表</h5>
                            <p class="list-details">展示我的座位号信息</p>
                        </router-link>
                    </li>
                    <!--<li class="list-group-item">-->
                        <!--<i class="index-icon index-icon-hotel"></i>-->
                        <!--<router-link :to="{name:'home_page',query: {page: 'hotel'}}">-->
                            <!--<h5>酒店介绍</h5>-->
                            <!--<p class="list-details">查看入住酒店名称、地址</p>-->
                        <!--</router-link>-->
                    <!--</li>-->
                    <li class="list-group-item">
                        <i class="index-icon index-icon-reception"></i>
                        <router-link :to="{name:'home_page',query: {page: 'reception'}}">
                            <h5>接送机</h5>
                            <p class="list-details">展示所有接驳信息</p>
                        </router-link>
                    </li>
                    <li class="list-group-item">
                        <i class="index-icon index-icon-vote"></i>
                        <!--<router-link :to="{name:'home_page',query: {page: ''}}">-->
                            <!--<h5>投票</h5>-->
                            <!--<p class="list-details">查看具体投票情况</p>-->
                        <!--</router-link>-->
                       <a href="http://wxconference.cpic.com.cn:8002/conference_brand/html/research/vote_login.html">
                            <h5>最美柜员投票</h5>
                           <!--@click="vote"-->
                            <p class="list-details">查看具体投票情况</p>
                        </a>
                    </li>
                    <li class="list-group-item">
                        <i class="index-icon index-icon-iphoto"></i>
                        <router-link :to="{name:'home_page',query: {page: 'takePicture'}}">
                            <h5>拍照签到</h5>
                            <p class="list-details">上传签到照片信息</p>
                        </router-link>
                        <!--<a @click="iPhoto">-->
                            <!--<h5>拍照签到</h5>-->
                            <!--<p class="list-details">上传签到照片信息</p>-->
                        <!--</a>-->
                    </li>
                    <li class="list-group-item">
                        <i class="index-icon bar-icon-picture"></i>
                        <!--<router-link :to="{name:'iphoto_me'}">-->
                            <!--<h5>精彩瞬间</h5>-->
                            <!--<p class="list-details">人脸识别查看精彩瞬间</p>-->
                        <!--</router-link>-->
                        <a href="https://iphoto.idevent.cn/?mid=10080">
                            <h5>精彩瞬间</h5>
                            <p class="list-details">人脸识别查看精彩瞬间</p>
                        </a>
                    </li>
                    <!--<li class="list-group-item">-->
                        <!--<i class="index-icon index-icon-qrcode"></i>-->
                        <!--<router-link :to="{name:'home_page',query: {page: 'qrcode'}}">-->
                            <!--<h5>餐券二维码</h5>-->
                            <!--<p class="list-details">展示餐券信息</p>-->
                        <!--</router-link>-->
                    <!--</li>-->

                </ul>
            </div>
            <bottom-bar></bottom-bar>

        </div>

    </div>
</template>
<script>
    import iButton from "iButton"
    import {Toast} from "mint-ui"
    import BottomBar from "./components/bottom_bar"
    import IndexMenu from "../../../views_mobile/components/iui/index_menu.vue"
    export default{
        data(){
            return {
                noteHide:false,
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
                return this.meeting.settings.home.index_banner;
            }
        },
        created(){

        },
        mounted() {
            if (this.user) {
                this.$store.commit('SPIN')
                this.isFirstFn();
            }
        },
        components: {
            iButton, BottomBar, IndexMenu
        },
        methods:{
            vote(){
                Toast('客户自己提供链接......')
            },
            iPhoto(){
                Toast('敬请期待')
            },
            noteHideFn(){
                this.noteHide =true;
            },
            isFirstFn(){
                console.log(this.$cookie.get('welcome'))

                    if(this.$cookie.get('welcome')=="ok"){
                        this.noteHide =true;
                        return
                    }else{
                        this.$cookie.set('welcome', 'ok', { expires: '1D' });
                        this.noteHide =false;
                    }

            },

        }
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    @import "../../../assets/style/home/index.less";
    .noteHide{
        display: none;
    }
    .noteImg{
        position: relative;
        .note-btn{
            position: absolute;
            bottom:50px;
            left:50%;
            transform: translate(-50%, 0);
            padding: 7px 33px;
            font-size:17px;
            background-color: #0089FF;
            color: #fff;
            -webkit-border-radius: 2px;
            -moz-border-radius: 2px;
            border-radius: 2px;

        }
    }
    .home-index {
        background-color: #FAFAE5;
    }
    .list-box{
        margin: 5px 5px 0 5px;
        background: #fff;
        border-radius: 4px;
        max-height: 400px;
        overflow-y: scroll;
    }
    .index-list {
        margin-bottom: 18px;
        li {
            padding: 12px 10px 12px 64px;
            border: 0;
            overflow: hidden;
            background-repeat: no-repeat;
            background-position: center ;
            background-size: 26px 21px;
            h5 {
                color: #333;
                font-size: 17px;
                line-height: 17px;
                font-weight: bold;
                margin: 0;
                margin-bottom: 7px;
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
                left: 62px;
                bottom: 0;
                right: 0;
                top: auto;
                height: 1px;
                width: 100%;
                background-color: #ddd;
                display: block;
                z-index: 15;
                -webkit-transform-origin: 50% 100%;
                transform-origin: 50% 100%
            }

            &:first-child {
                border-top-left-radius: 2px;
                border-top-right-radius: 2px;
            }
            &:last-child {
                border-bottom-left-radius: 2px;
                border-bottom-right-radius: 2px;
                &:after {
                    height: 0!important;
                }
            }

            .index-icon {
                position: absolute;
                display: inline-block;
                left: 20px;
                width: 27px;
                height: 27px;
                top: 12px;
                background-size: 100% auto;
                &.bar-icon-reg{
                    /*background-image: url('./images/register_normal.png');*/
                }
                &.index-icon-calendar{
                    background-image: url('../../../assets/images/mobile/home/menu/calendar.png');
                }
                &.index-icon-seat{
                    background-image: url('images/seat.png');
                }
                &.index-icon-hotel{
                    background-image: url('../../../assets/images/mobile/home/menu/hotel.png');
                }
                &.index-icon-reception{
                    background-image: url('images/air.png');
                }
                &.index-icon-vote{
                    background-image: url('images/vote.png');
                }
                &.index-icon-iphoto{
                    background-image: url('images/iphoto.png');
                }
                &.bar-icon-picture{
                    background-image: url('images/bar_zpqb.png');
                }
                &.index-icon-qrcode{
                    background-image: url('images/cqewm.png');
                }
                /*&.index-icon-contact{*/
                    /*background-image: url('../../../assets/images/mobile/home/menu/contact.png');*/
                /*}*/
            }

        }
    }
</style>
