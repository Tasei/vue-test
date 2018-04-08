<template>
    <bottom-bar class="bg-bottom-bar" :list="list"></bottom-bar>
</template>
<script>
    import bottomBar from "../../../../views_mobile/components/iui/bottom_bar"
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
                    },
                    {
                        title: "报名注册",
                        route: {name: "register_form"},
                        icon: "register",
                    },
                    {
                        title: "我的",
                        route: {name: "home_qrcode"},
                        icon: "user",
                    },
                ]
            }
        }
    }
</script>
<style lang="less" rel="stylesheet/less" scoped>
    .bottom-bar {
        .bottom-bar-item {
            a {
                color: #4b4a48 !important;
            }
        }
    }
</style>

