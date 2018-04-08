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
    import Wechat from '../../../assets/js/wechat'
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
                        icon: "committee",
                        title: "ICCA中国委员会介绍",
                        desc: "ICCA中国委员会介绍请看这里",
                        route_to: {name: 'home_page', query: {page: 'introduce'}}
                    },
                    {
                        icon: "schedule",
                        title: "会议日程",
                        desc: "查看会议具体日程安排",
                        route_to: {name: 'home_page', query: {page: 'schedule'}}
                    },
                    {
                        icon: "iphoto",
                        title: "活动相册",
                        desc: "查看大会精彩照片",
                    },
                    {
                        icon: "meeting",
                        title: "同期活动",
                        desc: "中国会议与商务旅行论坛暨交易会",
                        route_to: {name: 'home_page', query: {page: 'conference'}}
                    },
                    {
                        icon: "venue",
                        title: "会场介绍",
                        desc: "查看上海国际会议中心信息",
                        route_to: {name: 'home_page', query: {page: 'venue'}}
                    },
                    {
                        icon: "message",
                        title: "联系我们",
                        desc: "如需帮助，请联系我们",
                        route_to: {name: 'home_page', query: {page: 'contact'}}
                    },
                ]
            },
            banner(){
                return this.meeting.settings.home.index_banner;
            },
        },
        components: {
            iButton, BottomBar, IndexMenu
        },
        mounted() {
            new Wechat(
                '2018ICCA中国委员会交流会',
                '2018年5月7日',
                window.location.href,
                'https://static.idevent.cn/oss/meeting/125/pic/4SSsZUAvqT02wObE.jpeg/b200'
            )
            this.$store.commit('SPIN')
        },
        methods: {
//            getHotelList() {
//                let self = this
//                this.$http.post('hotel/showListByGroup').then((response) => {
//                    if (response.body.err == 0 && response.body.res.list.length > 0) {
//                        this.hotel_id = response.body.res.list[0].id
//                    }
//                }).then(() => {
//                    this.$store.commit('SPIN')
//                })
//            }
        }
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    @import "../../../assets/style/home/index.less";
</style>
