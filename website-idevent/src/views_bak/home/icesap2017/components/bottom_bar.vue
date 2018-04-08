<template>
    <bottom-bar :list="list" class="citif-bar"></bottom-bar>
</template>
<script>
    import bottomBar from "../../../../views_mobile/components/iui/bottom_bar"
    export default{
        components: {
            bottomBar
        },
        computed: {
            list(){
                let list = [];
                list.push({
                    title: this.$t('bottomBar.home'),
                    route: {name: "home_index"},
                    icon: "home",
                    icon_active: "home-s",
                });
                if (this.$store.state.lang != 'en') {
                    list.push({
                        title: this.$t('bottomBar.signUp'),
                        route: {name: "register_form"},
                        icon: "register",
                        icon_active: "register-s"
                    });
                }
                list.push({
                    title: this.$t('bottomBar.qrCode'),
                    route: {name: "home_page", query: {page: 'qrcode'}},
                    icon: "user",
                    icon_active: "user-s"
                });
                return list;
            }
        },
        data(){
            return {
            }
        },

    }
</script>
<style lang="less" rel="stylesheet/less">
    .citif-bar {

        div.mint-tabbar {
            .mint-tab-item,.mint-tab-item {
                .mint-tab-item-label {
                    color: rgba(255, 255, 255, .5) !important;
                }

                .iuifont {
                    color: rgba(255, 255, 255, .5) !important;
                }
            }
        }


    }
    .iui-bottom-bar {

        div.mint-tabbar {
            .mint-tab-item,.mint-tab-item.is-selected {
                .mint-tab-item-label {
                    color: rgba(255, 255, 255, 1) !important;
                }

                .iuifont {
                    color: rgba(255, 255, 255, 1) !important;
                }
            }
        }


    }
</style>
