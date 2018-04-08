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
                    },
                    {
                        title: "注册",
                        route: {name: "register_form"},
                        icon: "register-s",
                        icon_active: "register-s",
                    },
                    {
                        title: "我的",
                        route: {name: "home_page", query: {page: 'qrcode'}},
                        icon: "user",
                    },
                ]
            }
        }
    }
</script>
<style lang="less" rel="stylesheet/less" scoped>
</style>
