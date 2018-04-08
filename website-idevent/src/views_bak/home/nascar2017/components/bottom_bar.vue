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
                        title: "联系我们",
                        route: {name: "home_page", query: {"page": "contact"}},
                        icon: "message",
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
