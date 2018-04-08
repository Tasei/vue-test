<template>
    <div>
        <div class="home-index">
            <div v-if="banner" class="home-index-banner">
                <img :src="banner" class="img-responsive"/>
            </div>
            <index-menu :list="list"></index-menu>
        </div>

        <bottom-bar></bottom-bar>
    </div>
</template>
<script>
    import iButton from "iButton"
    import {Toast} from "mint-ui"
    import BottomBar from "./components/bottom_bar"
    import IndexMenu from "../../components/iui/index_menu.vue"

    export default{
        data() {
            return {
                list: [
                    {
                        icon: "register",
                        title: "报名注册",
                        desc: "填写个人信息",
                        route_to: {name: 'register_form'}
                    },
                    {
                        icon: "schedule",
                        title: "活动日程",
                        desc: "查看活动具体日程安排",
                        route_to: {name: 'home_page', query: {page: 'schedule'}}
                    },
                    {
                        icon: "venue",
                        title: "活动场地",
                        desc: "查看场地信息和地图",
                        route_to: {name: 'home_page', query: {page: 'venue'}}
                    },
                    {
                        icon: "hotel",
                        title: "酒店介绍",
                        desc: "查看酒店信息",
                        route_to: {name: 'home_hotel'}
                    },
                    {
                        icon: "flight",
                        title: "接送机安排",
                        desc: "查看接送机信息",
                        route_to: {name: 'home_page', query: {page: 'pickup'}}
                    },
                    {
                        icon: "notice",
                        title: "常见问题",
                        desc: "报名注册如遇问题请看这里",
                        route_to: {name: 'home_page', query: {page: 'common'}}
                    },
                    {
                        icon: "message",
                        title: "联系我们",
                        desc: "如需帮助，请联系我们",
                        route_to: {name: 'home_page', query: {page: 'contact'}}
                    },
                ]
            }
        },
        computed: {
            banner(){
                return this.meeting.settings.home?this.meeting.settings.home.index_banner:'';
            },
        },
        components: {
            iButton, BottomBar, IndexMenu
        },
        mounted() {
            this.$store.commit('SPIN', false)
        },
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    @import "../../../assets/style/home/index.less";
</style>
