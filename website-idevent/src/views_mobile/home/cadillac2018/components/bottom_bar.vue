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
                    title: 'iphoto',
                    link: 'https://iphoto.idevent.cn/?mid=10137',
                    icon: "camera",
                    icon_active: "camera",
                });
                list.push({
                    title: this.$t('bottomBar.signUp'),
                    route: {name: "home_page", query: {page: 'selectAccount'}},
                    icon: "write",
                    icon_active: "write"
                });
                return list;
            },
        }
    }
</script>
