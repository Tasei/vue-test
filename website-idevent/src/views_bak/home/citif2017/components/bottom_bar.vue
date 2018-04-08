<template>
    <bottom-bar :list="list" class="citif-bar"></bottom-bar>
</template>
<script>
    import bottomBar from "../../../components/iui/bottom_bar"
    export default{
        components: {
            bottomBar
        },
        data(){
            return {
                list: [
                    {
                        title: "首页",
                        route: {name: "home_index"},
                        icon: "home",
                        icon_active: "home-s",
                    },
                    {
                        title: "报名注册",
                        route: {name: "register_form"},
                        icon: "register",
                        icon_active: "register-s"
                    },
                    {
                        title: "我的",
                        route: {name: "home_page", query: {page: 'qrcode'}},
                        icon: "user",
                        icon_active: "user-s"
                    },
                ]
            }
        }
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
