<template>
    <component :is="currentView"></component>
</template>
<script>
    import qrcode from "./pages/qrcode"
    import contact from "./pages/contact"
    import hotel from "./pages/hotel"
    import common from "./pages/common"
    import schedule from "./pages/schedule"
    import reception from "./pages/reception"
//    import map from "./pages/map"
    export default{
        components: {
            contact, schedule,common,hotel,reception,qrcode
        },
        computed: {
            currentView(){
                return this.$route.query.page
            }
        }
    }
</script>
