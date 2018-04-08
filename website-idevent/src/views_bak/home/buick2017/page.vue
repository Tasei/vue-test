<template>
    <component :is="currentView"></component>
</template>
<script>
    import contact from "./pages/contact.vue"
    import common from "./pages/common.vue"
    import pickup from "./pages/pickup.vue"
    import schedule from "./pages/schedule.vue"
    import venue from "./pages/venue.vue"
    import hotelMap from "./pages/hotelMap.vue"
    import qrcode from "./pages/qrcode.vue"

    import viewImage from "./pages/image.vue"

    export default{
        components: {
            contact, common, pickup, schedule, venue, qrcode,viewImage, hotelMap
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
