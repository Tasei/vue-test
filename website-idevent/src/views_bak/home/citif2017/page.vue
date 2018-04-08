<template>
    <component :is="currentView"></component>
</template>
<script>
    import qrcode from "./pages/qrcode"
    import contact from "./pages/contact"
    import brand from "./pages/brand"
    import service from "./pages/service"
    import agency from "./pages/agency"
    import venue from "./pages/venue"
    import schedule from "./pages/schedule"
    export default{
        components: {
            qrcode, contact, brand, service, agency, venue, schedule
        },
        computed: {
            currentView(){
                return this.$route.query.page
            }
        }
    }
</script>
