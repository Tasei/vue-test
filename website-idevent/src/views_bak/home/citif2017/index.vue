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
                    icon: "agency",
                    title: "组织机构",
                    desc: "查看组织机构名录",
                    route_to: {name: 'home_page', query: {page: 'agency'}}
                }, {
                    icon: "schedule",
                    title: "会议议程",
                    desc: "查看大会议程",
                    route_to: {name: 'home_page', query: {page: 'schedule'}}
                }, {
                    icon: "pic",
                    title: "活动相册",
                    desc: "查看大会精彩照片",
                    disabled: true,
                    link: 'javascript:;',
                    onClick: () => {
                        window.location.href = 'https://m.idevent.cn/photos/?mid=' + this.meeting.id
                    }
                }, {
                    icon: "hotel",
                    title: "会议场地",
                    desc: "查看场地信息及路线",
                    route_to: {name: 'home_page', query: {page: 'venue'}}
                }, {
                    icon: "notice",
                    title: "会议服务",
                    desc: "关于会议相关温馨提示",
                    route_to: {name: 'home_page', query: {page: 'service'}}
                }, {
                    icon: "brand",
                    title: "合作伙伴",
                    desc: "查看品牌合作伙伴",
                    route_to: {name: 'home_page', query: {page: 'brand'}}
                }, {
                    icon: "message",
                    title: "联系我们",
                    desc: "如需帮助，请联系我们",
                    route_to: {name: 'home_page', query: {page: 'contact'}}
                }
                /*
                , {
                    icon: "iphoto",
                    title: "洽谈扫码",
                    desc: "扫描买家二维码确认洽谈",
                    disabled: true,
                    link: 'javascript:;',
                    onClick: () => {
                        window.location.href = 'https://i.idevent.cn/scan?meeting_id='
                        + this.meeting.id + '&invitation_id=' + this.user.id
                    }
                }
                */
                ]
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
        background-color: #FAFAE5;
    }
</style>
