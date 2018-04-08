<template>
    <component :is="currentView"></component>
</template>
<script>
    import qrcode from "./pages/qrcode"
    import contact from "./pages/contact"
    import venue from "./pages/venue"
    import schedule from "./pages/schedule"
    export default{
        components: {
            qrcode, schedule, venue, contact
        },
        computed: {
            currentView(){
                return this.$route.query.page
            }
        }
    }
</script>
