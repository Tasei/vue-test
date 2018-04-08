<template>
    <bottom-bar :list="list" class="citif-bar"></bottom-bar>
</template>
<script>
    import bottomBar from "../../../../views_mobile/components/iui/bottom_bar"
    export default{
        locales: {
            en: {
            },
            zh: {
                bottomBar: {
                    home: '主页',
                    my: '注册报名',
                    contact: '联系我们',
                }
            }
        },
        components: {
            bottomBar
        },
        computed: {
            list(){
                return [{
                    title: this.$t('bottomBar.home'),
                    route: {name: "home_index"},
                    icon: "home",
                    icon_active: "home-s",
                },{
                    title: this.$t('bottomBar.my'),
                    route: {name: 'register_form', query: {mobile: 1}},
                    icon: "user",
                    icon_active: "user-s"
                },{
                    title: this.$t('bottomBar.contact'),
                    route: {name: "home_page", query: {page: 'contact', mobile: 1}},
                    icon: "message",
                    icon_active: "message-s"
                }];
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
