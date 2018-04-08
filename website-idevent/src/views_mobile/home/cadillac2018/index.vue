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
    import IndexMenu from "./components/index_menu.vue"
    export default{
        data(){
            return {
                list: [
                    {
                        icon: "schedule",
                        title: "会议日程",
//                        desc: "查看大会议程",
                        route_to: {name: 'home_page', query: {page: 'schedule'}}
                    },
                    {
                        icon: "venue",
                        title: "会场信息",
//                        desc: "查看会场信息",
                        route_to: {name: 'home_page', query: {page: 'venue'}}
                    },
                    {
                        icon: "hotel",
                        title: "酒店介绍",
//                        desc: "查看酒店信息",
                        route_to: {name: 'home_page', query: {page: 'hotel'}}
                    },

                    {
                        icon: "flight",
                        title: "接送机安排",
//                        desc: "查看接送机信息",
                        route_to: {name: 'home_page', query: {page: 'reception'}}
                    },
                    {
                        icon: "notice",
                        title: "常见问题",
//                        desc: "报名注册如遇问题请看这里",
                        route_to: {name: 'home_page', query: {page: 'common'}}
                    },
                    {
                        icon: "message",
                        title: "联系我们",
//                        desc: "如需帮助，请联系我们",
                        route_to: {name: 'home_page', query: {page: 'contact'}}
                    }
                ]
            }
        },
        computed: {
            banner(){
                return this.meeting.settings.home.index_banner;
            }
        },
        mounted() {
            if(this.user){
                this.$store.commit('SPIN')
            }
        },
        components: {
            iButton, BottomBar, IndexMenu
        }
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    @import "../../../assets/style/home/index.less";
    .home-index {
        /*background-color: #Fff;*/
    }
</style>
