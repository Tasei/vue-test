<template>
    <div>
        <div class="home-index">
            <div v-if="banner">
                <img :src="banner" class="img-responsive"/>
            </div>
            <index-menu :list="menuList" class="iveco-menu"></index-menu>
            <bottom-bar></bottom-bar>
        </div>
    </div>
</template>
<script>
    import iButton from "iButton"
    import {Toast} from "mint-ui"
    import IndexMenu from "../../components/iui/index_menu"
    import BottomBar from "./components/bottomBar"

    export default {
        data() {
            return {
                menuList: [
//                    {
//                        icon: "register",
//                        title: "报名注册",
//                        desc: "填写参会信息",
//                        route_to: {name: "register_form"}
//                    },
                    {
                        icon: "schedule",
                        title: "我的日程",
                        desc: "查看具体会议安排",
                        route_to: {name: "home_page", query: {page: "schedule"}}
                    },
                    {
                        icon: "hotel",
                        title: "我的酒店<span style='opacity: 0.7'>（持续更新）</span>",
                        desc: "查看入住酒店名称、地址",
                        route_to: {name: "home_page", query: {page: "venue"}}
                    },
                    {
                        icon: "seat",
                        title: "会议及用餐信息<span style='opacity: 0.7'>（持续更新）</span>",
                        desc: "展示我的座位信息",
                        route_to: {name: "home_page", query: {page: "seat"}}
                    },
                    {
                        icon: "flight",
                        title: "接送机安排<span style='opacity: 0.7'>（持续更新）</span>",
                        desc: "展示所有接驳信息",
                        route_to:{name:"home_page",query:{page:"reception"}}
                    },
                    {
                        icon:"cloud",
                        title:"当日天气",
                        desc:"展示近几日天气",
                        route_to:{name: "home_page",query: {page: "weather"}}
                    },
                    {
                        icon: "message",
                        title: "联系我们",
                        desc: "如需帮助，请联系我们",
                        route_to: {name: "home_page", query: {page: "contact"}}
                    },
                ]
            }
        },
        computed: {
            banner() {
                return this.meeting.settings.home ? this.meeting.settings.home.index_banner : '';
            },
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
        background-color: #f3f3f3;
        background-image: url("./assets/index_bg.png");
        background-position: top center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>
<style lang="less" rel="stylesheet/less">
    .iveco-menu {
        background: transparent !important;
        .item {
            i.menu-icon {
                color: #fff !important;
            }
            a, h5 {
                color: #fff !important;
            }
            h5{
                font-weight: normal !important;
            }
        }

        p {
            color: #C1DCFF !important;
        }
    }
</style>
