<template>
    <div>
        <div class="home-index">
            <div v-if="banner">
                <img :src="banner" class="img-responsive"/>
            </div>
            <index-menu :list="menuList"></index-menu>
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
                    {
                        icon: "schedule",
                        title: "活动日程",
                        desc: "查看具体会议安排",
                        route_to: {name: "home_page", query: {page: "schedule"}}
                    },
                    {
                        icon: "hotel",
                        title: "会议酒店",
                        desc: "查看入住酒店名称、地址",
                        route_to: {name: "home_page", query: {page: "hotel"}}
                    },
                    {
                        icon: "camera",
                        title: "精彩瞬间",
                        desc: "人脸识别查看精彩瞬间",
                        link: "https://iphoto.idevent.cn/?mid=cbs6"
                    },
                    {
                        icon: "product",
                        title: "走进CBS",
                        desc: "了解更多会议信息",
                        link: "http://v6.rabbitpre.com/m/Qj2iaqe",
                    },
                    {
                        icon: "iphoto",
                        title: "我的二维码",
                        desc: "展示个人信息二维码",
                        route_to: {name: "home_page", query: {page: "qrcode"}}
                    },
                    {
                        icon: "message",
                        title: "温馨提示",
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
    }
</style>
