<template>
    <div>
        <div class="home-index">
            <div class="index-banner">
                <mt-swipe :auto="4000" class="swiper_container">
                    <mt-swipe-item v-for="p in banner">
                        <div class="info" :style="{ 'background-image': 'url(' + p + ')' }"></div>
                    </mt-swipe-item>
                </mt-swipe>
            </div>
            <index-menu :list="translated" class="index_menu"></index-menu>
        </div>

        <bottom-bar></bottom-bar>
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
                banner: [
                    require("./assets/1.png"),
                    require("./assets/2.png"),
                    require("./assets/3.png"),
                    require("./assets/4.png"),
                    require("./assets/5.png"),
                    require("./assets/6.png")
                ],
            }
        },
        computed: {
            translated() {
                return [{
                    iconImg: require("./assets/calender.png"),
                    title: '游轮航程',
                    route_to: {name: 'home_page', query: {page: 'schedule', mobile: 1,title:'游轮航程'}}
                }, {
                    iconImg: require("./assets/ship.png"),
                    title: '关于游轮',
                    route_to: {name: 'home_page', query: {page: 'about', mobile: 1,title:'关于游轮'}}
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
        }
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    @import "../../../assets/style/home/index.less";
    .home-index {
        height: 100vh;
        padding: 50.6vw 0 60px 0;
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
