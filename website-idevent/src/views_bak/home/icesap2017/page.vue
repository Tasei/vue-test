<template>
    <component :is="currentView"></component>
</template>
<script>
    import qrcode from "./pages/qrcode"
    import info from "./pages/info"
    import contact from "./pages/contact"
    import venue from "./pages/venue"
    import schedule from "./pages/schedule"
    import partner from "./pages/partner"

    export default{
        components: {
            qrcode, schedule, venue, contact, info, partner
        },
        computed: {
            currentView(){
                return this.$route.query.page
            }
        }
    }
</script>
