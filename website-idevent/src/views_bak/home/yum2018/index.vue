<template>
    <div v-if="user">
        <div class="home-index">
            <div v-if="banner">
                <img :src="banner" class="img-responsive"/>
            </div>
            <index-menu :list="list"></index-menu>
        </div>

        <bottom-bar></bottom-bar>

        <mt-popup
            position="right"
            v-model="welcomeVisible">
            <welcome></welcome>
            <button class="btn btn-lg btn-primary" @click="welcomeVisible=false"
                    style="margin:10px auto 20px;width: 60%;display: block;">关闭
            </button>
        </mt-popup>
    </div>
</template>
<script>
    import iButton from "iButton"
    import {Toast} from "mint-ui"
    import BottomBar from "./components/bottom_bar"
    import IndexMenu from "../../components/iui/index_menu.vue"
    import welcome from "./pages/welcome.vue"

    export default {
        components: {welcome, iButton, BottomBar, IndexMenu},
        data() {
            return {
                welcomeVisible: false,
                list: [{
                    icon: "schedule",
                    title: "活动日程",
                    desc: "查看会议具体日程安排",
                    route_to: {name: 'home_page', query: {page: 'schedule'}}
                }, {
                    icon: "venue",
                    title: "会场信息",
                    desc: "会场信息提前知晓, 早早做好出行准备",
                    route_to: {name: 'home_page', query: {page: 'venue'}}
                }, {
                    icon: "flight",
                    title: "航班信息",
                    desc: "查看航班安排",
                    disabled: true,
                    route_to: {name: 'home_page', query: {page: 'flight'}}
                }, {
                    icon: "brand",
                    title: "座位安排",
                    desc: "查看座位安排",
                    disabled: true,
                    route_to: {name: 'home_page', query: {page: 'seat'}},
                    link: require("./assets/seat_map.jpg")
                }, {
                    icon: "iphoto",
                    title: "精彩瞬间",
                    desc: "查看峰会精彩照片",
                    disabled: true,
                    link: 'https://iphoto.idevent.cn/?mid=yum2018'
                }, {
                    icon: "message",
                    title: "联系我们",
                    desc: "可通过电话联系客服",
                    route_to: {name: 'home_page', query: {page: 'contact'}}
                }]
            }
        },
        computed: {
            banner() {
                return this.meeting.settings.home.index_banner;
            }
        },
        mounted() {
            if (this.user) {
                this.$store.commit('SPIN')
            }
        },
        created() {
            this.welcomeVisible = true
//            let is = this.$cookie.get("yum2018_welcome")
//            if (!is) {
//                this.welcomeVisible = true
//                this.$cookie.set("yum2018_welcome", "1", {expires: '1Y'})
//            }
        }
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    @import "../../../assets/style/home/index.less";

    .home-index {
        background-color: #dddddd;
    }
</style>
