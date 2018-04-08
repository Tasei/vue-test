<template>
    <component :is="currentView"></component>
</template>
<script>
    import qrcode from "./pages/qrcode"
    import order from "./pages/order"
    import contact from "./pages/contact"
    import venue from "./pages/venue"
    import schedule from "./pages/schedule"
    import notice from "./pages/notice"
    import transit from "./pages/transit"
    import group from "./pages/group"
    import guest from "./pages/guest"
    import emap from "./pages/map"
    export default{
        components: {
            qrcode, schedule, venue, order, contact, notice, transit, group, guest, emap
        },
        computed: {
            currentView(){
                return this.$route.query.page
            }
        }
    }
</script>
