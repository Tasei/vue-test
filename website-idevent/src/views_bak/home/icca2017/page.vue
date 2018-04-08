<template>
    <component :is="currentView"></component>
</template>
<script>
    import qrcode from "./pages/qrcode.vue"
    import contact from "./pages/contact.vue"
    import venue from "./pages/venue"
    import schedule from "./pages/schedule"
    import conference from "./pages/conference"
    import introduce from "./pages/introduce"

    export default{
        components: {
            qrcode, contact,venue, schedule, conference, introduce
        },
        computed: {
            currentView(){
                return this.$route.query.page
            }
        },
    }
</script>

