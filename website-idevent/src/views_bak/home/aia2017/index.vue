<template>
    <div>
        <div class="home-index">
            <div v-if="banner">
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
        data(){
            return {
                list: [{
                    icon: "schedule",
                    title: "会议日程",
                    desc: "查看会议具体日程安排",
                    route_to: {name: 'home_page', query: {page: 'schedule'}}
                }, {
                    icon: "hotel",
                    title: "酒店介绍",
                    desc: "查看入住酒店相关信息",
                    route_to: {name: 'home_page', query: {page: 'venue'}}
                }, {
                    icon: "notice",
                    title: "注意事项",
                    desc: "着装要求、费用承担说明及温馨提示",
                    route_to: {name: 'home_page', query: {page: 'notice'}}
                }, {
                    icon: "location",
                    title: "交通信息",
                    desc: "查看我的航班/列车信息",
                    route_to: {name: 'home_page', query: {page: 'transit'}}
                }, {
                    icon: "group",
                    title: "活动分组",
                    desc: "查看我的分组信息",
                    route_to: {name: 'home_page', query: {page: 'group'}}
                }, {
                    icon: "committee",
                    title: "嘉宾介绍",
                    desc: "查看所有嘉宾介绍",
                    route_to: {name: 'home_page', query: {page: 'guest'}}
                }, {
                    icon: "pic",
                    title: "会场平面图",
                    desc: "查看整体会场平面图",
                    route_to: {name: 'home_page', query: {page: 'emap'}}
                }, {
                    icon: "ticket",
                    title: "订票服务",
                    desc: "查看订票细则",
                    route_to: {name: 'home_page', query: {page: 'order'}}
                }, {
                    icon: "message",
                    title: "联系我们",
                    desc: "如需帮助",
                    route_to: {name: 'home_page', query: {page: 'contact'}}
                }]
            }
        },
        computed: {
            banner(){
                return this.meeting.settings.home.index_banner;
            }
        },
        mounted() {
            this.$store.commit('SPIN')
        },
        components: {
            iButton, BottomBar, IndexMenu
        }
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    @import "../../../assets/style/home/index.less";
    .home-index {
        background-color: #dddddd;
    }
</style>
