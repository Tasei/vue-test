<template>
    <component :is="currentView"></component>
</template>
<script>
    import contact from "./pages/contact.vue"
    import common from "./pages/common.vue"
    import pickup from "./pages/pickup.vue"
    import schedule from "./pages/schedule.vue"
    import myHotel from "./pages/myHotel.vue"

    export default{
        components: {
            contact, common, pickup, schedule, myHotel
        },
        computed: {
            currentView(){
                return this.$route.query.page
            }
        },
    }
</script>
<style lang="less">
    @import "./style/page.less";
</style>
