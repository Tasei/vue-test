<template>
    <bottom-bar :list="navList"></bottom-bar>
</template>
<script>
    import BottomBar from "../../../components/iui/bottom_bar"
    export default {
        components: {BottomBar},
        computed: {
            navList() {
                let list = [];
                list.push({
                    title: this.$t('bottomBar.home'),
                    route: {name: "home_index"},
                    icon: "home",
                    icon_active: "home-s",
                });
                if (this.$store.state.lang != 'en') {
                    list.push({
                        title: "报名信息",
                        route: {name: "register_form"},
                        icon: "register",
                        icon_active: "register-s"
                    });
                }
                list.push({
                    title: this.$t('bottomBar.qrCode'),
                    route: {name: "home_page",query:{page:"qrcode"}},
                    icon: "iphoto",
                    icon_active: "iphoto"
                });
                return list;
            },
        }
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    .iui-bottom-bar{
        background:  #1F9BD1 !important;
    }
</style>
