<template>
    <div>
        <div class="home-index">
            <div v-if="banner">
                <img :src="banner" class="img-responsive"/>
            </div>
            <index-menu :list="list" class="cpicInnovateMenu"></index-menu>
        </div>

    </div>
</template>
<script>
    import IndexMenu from "../../components/iui/index_menu.vue"

    export default {
        computed: {
            list() {
                return [

                    {
                        icon: "brand",
                        title: "我的信息",
                        desc: "查看我的二维码",
                        route_to: {name: 'home_page', query: {page: 'qrcode'}}
                    },
                    {
                        icon: "schedule",
                        title: "活动日程",
                        desc: "查看具体会议安排",
                        route_to: {name: 'home_schedule'}
                    },
                    {
                       icon: "committee",
                        title: "嘉宾介绍",
                        desc: "查看参会嘉宾",
                        route_to: {name: 'home_page', query: {page: 'guest'}}
                    },
                    {
                        icon: "notice",
                        title: "注意事项",
                        desc: "这里是常见问题",
                        route_to: {name: 'home_page', query: {page: 'service'}}
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
                try {
                    return this.meeting.settings.home.index_banner;
                } catch(e) {}
                return ''
            },
        },
        mounted() {
            this.$store.commit('SPIN')
        },
        components: {
            IndexMenu
        }
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    @import "../../../assets/style/home/index.less";

</style>
<style lang="less">
    .cpicInnovateMenu{
        .item {
            padding-top: 30px!important;
            padding-bottom: 30px!important;
        }
    }
</style>
