<template>
    <div>
        <div class="home-index">
            <div v-if="banner">
                <img :src="banner" class="img-responsive"/>
            </div>
            <h5 class="welcome">{{userName}}，您好！欢迎您参加直通NASCAR</h5>
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
        computed: {
            banner(){
                return this.meeting.settings.home.index_banner;
            },
            userName(){
                switch (this.user.group.name) {
                    case 'm-bj':
                    case 'm-sh':
                        return "尊敬的" + this.user.contact.name + "老师"
                    default:
                        return "尊敬的" + this.user.contact.name
                }

            }
        },
        components: {
            iButton, BottomBar, IndexMenu
        },
        created(){
            this.$store.commit("SPIN")
        },
        data(){
            return {
                list: [
                    {
                        icon: "schedule",
                        title: "我的行程",
                        desc: "查看活动具体日程安排",
                        route_to: {name: 'home_schedule'}
                    },
                    {
                        icon: "hotel",
                        title: "我的酒店",
                        desc: "查看酒店信息",
                        route_to: {name: 'home_hotel'}
                    },
                    {
                        icon: "flight",
                        title: "我的航班",
                        desc: "查看航班信息",
                        route_to: {name: 'home_page', query: {page: "flight"}}
                    },
                    {
                        icon: "luggage",
                        title: "行李托运",
                        desc: "查看行李托运规则",
                        route_to: {name: 'home_page', query: {page: "luggage"}}
                    },
                    {
                        icon: "iphoto",
                        title: "精彩瞬间",
                        desc: "活动实时照片",
                        route_to: {name: 'iphoto_home'}
                    },
                    {
                        icon: "write",
                        title: "活动贴士",
                        desc: "活动小贴士",
                        route_to: {name: 'home_page', query: {page: "tips"}}
                    },
                    {
                        icon: "notice",
                        title: "试驾注意",
                        desc: "驾驶注意事項",
                        route_to: {name: 'home_page', query: {page: "notice"}}
                    },


                ]
            }
        }
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    @import "../../../assets/style/home/index.less";

    .home-index {
        background: #e8b61a;
    }

    .iui-index-menu {
        margin-top: 0;
        border-radius: 0;
    }

    .welcome {
        font-size: 14px;
        color: #666;
        font-family: PingFangSC-Regular;
        background-color: #fff;
        margin: 0 5px;
        padding: 15px 20px;
    }
</style>
