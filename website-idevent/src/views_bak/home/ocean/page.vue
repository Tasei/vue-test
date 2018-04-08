<template>
    <component :is="currentView"></component>
</template>
<script>
    import momentList from "./pages/momentList.vue"
    import momentList1 from "./pages/momentList1.vue"
    import momentDetail from "./pages/momentDetail.vue"
    import waiting from "./pages/waiting.vue"
    import canvasfont from "./pages/canvas"
    import entry from './pages/entry'
    import entry2 from './pages/entry2'
    import sign from './pages/signature'
    export default{
        components: {
            momentList,
            momentDetail,
            waiting,
            canvasfont,
            sign,
            entry,
            entry2,
            momentList1
        },
        computed: {
            currentView(){
                return this.$route.query.page
            }
        }
    }
</script>
<style lang="less">
    /*@import "./style/page.less";*/
</style>
