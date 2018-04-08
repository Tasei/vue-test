<template>
    <div>
        <div class="home-index">
            <div v-if="banner">
                <img :src="banner" class="img-responsive"/>
            </div>
            <index-menu :list="list" class="menu-100t"></index-menu>
        </div>

        <bottom-bar></bottom-bar>
    </div>
</template>
<script>
    import {Toast} from "mint-ui"
    import BottomBar from "./components/bottom_bar"
    import IndexMenu from "../../components/iui/index_menu.vue"

    export default {
        data() {
            return {
                hotel_id: 0
            }
        },
        computed: {
            list() {
                let self = this;

                return [
                    {
                        icon: "schedule",
                        title: "活动日程",
                        desc: "查看会议具体日程安排",
                        route_to: {name: 'home_page', query: {page: 'schedule'}}
                    },
                    {
                        icon: "venue",
                        title: "会场信息",
                        desc: "查看峰会会场信息",
                        route_to: {name: 'home_page', query: {page: 'venue'}}
                    },
                    {
                        icon: "iphoto",
                        title: "精彩瞬间",
                        desc: "查看峰会精彩照片",
//                        route_to: {name: 'iphoto_home', query: {page: 'common'}},
                        disabled: true,
                        link: 'https://iphoto.idevent.cn/?mid=t100'
                    },
                    {
                        icon: "money",
                        title: "走进鑫星汇",
                        desc: "峰会跟踪报道",
                        route_to: {name: 'home_page', query: {page: 'articles'}}
                    },
                    {
                        icon: "notice",
                        title: "温馨提示",
                        desc: "如需帮助，请联系我们",
                        route_to: {name: 'home_page', query: {page: 'notice'}}
                    },
                ]
            },
            banner() {
                return this.meeting.settings.home.index_banner;
            },
        },
        components: {
            BottomBar, IndexMenu
        },
        created() {
//            if (window.location.hostname.startsWith('m.')) {
//                this.$router.push({name: "register_form"})
//            } else {
                this.$store.commit('SPIN')
//            }
        },
        methods: {}
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    @import "../../../assets/style/home/index.less";

    .home-index {
        background: #fff;

        .iui-index-menu {
            border: 1px solid #ccc;
            box-shadow: 1px 1px 1px #ccc;
        }
    }
</style>
<style lang="less">
    .menu-100t {
        .item {
            padding: 18px 10px 18px 64px !important;
        }
    }
</style>
