<template>
    <component :is="currentView"></component>
</template>
<script>
    import contact from "./pages/contact"
    import service from "./pages/service"
    import qrcode from "./pages/qrcode"
    import guest from "./pages/guest"

    export default{
        components: {
            contact, service, qrcode, guest
        },
        computed: {
            currentView(){
                return this.$route.query.page
            }
        }
    }
</script>
