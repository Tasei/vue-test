<template>
<div>
    <div class="fd-index" v-if="user">
        <div>
            <img :src="banner" class="img-responsive" />
        </div>
        <div class="list-box">
            <ul class="list-group index-list">
                <li class="list-group-item">
                    <i class="index-icon index-icon-interact"></i>
                    <router-link :to="{name:'home_page',query: {page: 'interact'}}">
                        <h5>现场互动</h5>
                        <p class="list-details">参加大会现场互动环节</p>
                    </router-link>
                    <!--<a @click="iPhoto">-->
                        <!--<h5>现场互动</h5>-->
                        <!--<p class="list-details">参加大会现场互动环节</p>-->
                    <!--</a>-->
                </li>
                <li class="list-group-item">
                    <i class="index-icon index-icon-hotel"></i>
                    <router-link :to="{name:'home_page',query: {page: 'my_hotel'}}">
                        <h5>我的酒店</h5>
                        <p class="list-details">查看入住酒店名称、地址</p>
                    </router-link>
                </li>
                <li class="list-group-item">
                    <i class="index-icon index-icon-iphoto"></i>
                    <!--<router-link :to="{name:'iphoto_me'}">-->
                        <!--<h5>精彩瞬间</h5>-->
                        <!--<p class="list-details">人脸识别查看精彩瞬间</p>-->
                    <!--</router-link>-->
                    <a @click="iPhoto">
                        <h5>精彩瞬间</h5>
                        <p class="list-details">人脸识别查看精彩瞬间</p>
                    </a>
                </li>
                <li class="list-group-item">
                    <i class="index-icon index-icon-calendar"></i>
                    <router-link :to="{name:'home_page', query: {page: 'schedule'}}">
                        <h5>会议日程</h5>
                        <p class="list-details">查看具体会议安排</p>
                    </router-link>
                </li>
                <li class="list-group-item">
                    <i class="index-icon index-icon-question"></i>
                    <router-link :to="{name:'home_page', query: {page: 'common'}}">
                        <h5>常见问题</h5>
                        <p class="list-details">报名注册如遇问题请看这里</p>
                    </router-link>
                </li>
                <li class="list-group-item">
                    <i class="index-icon index-icon-contact"></i>
                    <router-link :to="{name:'home_page', query: {page: 'contact'}}">
                        <h5>联系我们</h5>
                        <p class="list-details">如需帮助，请联系我们</p>
                    </router-link>
                </li>

            </ul>
        </div>
        <bottom-bar class="ford-bottom-bar"></bottom-bar>
    </div>

</div>
</template>
<script>
import iButton from "iButton"
import {Toast} from "mint-ui"
import BottomBar from "./components/bottomBar"
    export default{
        data() {
            return{
            }
        },
        computed: {
            user() {
                return this.$store.state.user
            },
            banner() {
                return this.meeting.settings.home ? this.meeting.settings.home.index_banner : '';
            },
        },
        mounted() {
            this.$store.commit('SPIN', false)
        },
        components:{
            iButton,BottomBar
        },
        methods: {
            iPhoto(){
                window.location.href = 'https://iphoto.idevent.cn/?mid=10118'
//                Toast('敬请期待......')
            },
        }
    }
</script>
<style lang="less" scoped>
    .fd-index {
        // background-color: #0e1b23;
        background-color: #ddd;
        min-height: 100vh;
        overflow: hidden;
        position: relative;
        .list-box{
            margin: 5px 5px 0 5px;
            background: #fff;
            border-radius: 4px;
        }
        .index-list {
            margin-bottom: 18px;
            padding-bottom:30px;
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

                    &.index-icon-interact{
                        background-image: url('../../../assets/images/mobile/home/menu/interact.png');
                    }
                    &.bar-icon-reg{
                        background-image: url('./images/register_normal.png');
                    }
                    &.index-icon-hotel{
                        background-image: url('../../../assets/images/mobile/home/menu/hotel.png');
                    }
                    &.index-icon-iphoto{
                        background-image: url('../../../assets/images/mobile/home/menu/iphoto.png');
                    }
                    &.index-icon-calendar{
                        background-image: url('../../../assets/images/mobile/home/menu/calendar.png');
                    }
                    &.index-icon-question{
                        background-image: url('../../../assets/images/mobile/home/menu/question.png');
                    }
                    &.index-icon-contact{
                        background-image: url('../../../assets/images/mobile/home/menu/contact.png');
                    }
                }

            }
        }
        .index-btn{
            padding:0 10px 25px;
        }
        .m-logout-btn{
            margin-top:0px !important;
        }
    }

    @media only screen and (-webkit-min-device-pixel-ratio: 2) {
        li:after {
            -webkit-transform: scaleY(.5);
            transform: scaleY(.5)
        }
    }

.ford-bottom-bar{
    z-index:9999;
}
</style>
