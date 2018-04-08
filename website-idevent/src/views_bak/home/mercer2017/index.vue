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

    export default {
        data() {
            return {
                list: [
                    {
                        icon: "schedule",
                        title: "会议日程",
                        desc: "查看会议具体日程安排",
                        route_to: {name: 'home_page', query: {page: 'schedule'}}
                    },
                    {
                        icon: "hotel",
                        title: "会议场地",
                        desc: "介绍会议场地相关信息",
                        route_to: {name: 'home_page', query: {page: 'venue'}}
                    },
                    {
                        icon: "iphoto",
                        title: "活动相册",
                        desc: "查看会场活动照片",
                        disabled: true,
                        link: 'https://iphoto.idevent.cn/?mid=mercer2017'
                    },
                    {
                        icon: "user",
                        title: "话题投票",
                        desc: "展示话题投票",
                        route_to: {name: 'home_page', query: {page: 'vote'}}
                    },
                    {
                        icon: "notice",
                        title: "现场提问",
                        desc: "展示现场提问",
                        route_to: {name: 'home_page', query: {page: 'currentQuestion'}}
                    },
                    {
                        icon: "register",
                        title: "问卷调查",
                        desc: "展示问卷调查",
                        route_to: {name: 'home_page', query: {page: 'questionnaire'}}
                    }

                ]
            }
        },
        computed: {
            banner() {
                return this.meeting.settings.home ? this.meeting.settings.home.index_banner : '';
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
        background-color: #f3f3f3;
    }

    .lang {
        margin: 10px 0;
    }
</style>
