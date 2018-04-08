<template>
    <bottom-bar :list="list"></bottom-bar>
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
                        title: "我的",
                        route: {name: "home_index"},
                        icon: "home",
                        icon_active: "home",
                    },
                    {
                        title: "注册",
                        route: {name: "register_form"},
                        icon: "register-s",
                        icon_active: "register-s"
                    },
                    {
                        title: "联系我们",
                        route: {name: "home_page", query: {"page": "contact"}},
                        icon: "message",
                        icon_active: "message"
                    },
                ]
            }
        }
    }
</script>
<style lang="less" rel="stylesheet/less">
    .iui-bottom-bar {

        div.mint-tabbar {
            .mint-tab-item.is-selected {
                .mint-tab-item-label {
                    color: rgba(255, 255, 255, 0.6) !important;
                }

                .iuifont {
                    color: rgba(255, 255, 255, 0.6) !important;
                }
            }
        }

        .mint-tab-item:nth-child(2) {
            .mint-tab-item-label {
                color: #fff !important;
            }
            .iui-icon-register-s {
                color: #fff !important;
            }
        }
    }
</style>
