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
                list.push({
                    title: this.$t('bottomBar.qrCode'),
                    route: {name: "home_page", query: {page: 'qrcode'}},
                    icon: "user",
                    icon_active: "user-s"
                });
                return list;
            },
        }
    }
</script>
