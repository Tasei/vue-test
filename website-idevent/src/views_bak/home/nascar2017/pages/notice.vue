<template>
    <iui-list :list="list"></iui-list>
</template>
<script>
    import iuiBlock from "../../../components/iui/block.vue"
    import iuiList from "../../../components/iui/list.vue"
    export default{
        components: {iuiBlock, iuiList},
        data(){
            return {
                list: [
                    {
                        title: "Spring Mountain內驾驶注意事項",
                        to: {name: "home_page", query: {page: "notice0"}}
                    },
                    {
                        title: "美国交通违法行为处理",
                        to: {name: "home_page", query: {page: "notice1"}}
                    },
                    {
                        title: "美国驾车注意事项",
                        to: {name: "home_page", query: {page: "notice2"}}
                    },
                    {
                        title: "美国道路标志",
                        to: {name: "home_page", query: {page: "notice3"}}
                    },
                ]
            }
        },
        mounted() {
            this.$store.commit('SPIN', false)
        },
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    @import "../style/page.less";
</style>
