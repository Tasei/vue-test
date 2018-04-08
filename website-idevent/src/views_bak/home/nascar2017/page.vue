<template>
    <component :is="currentView"></component>
</template>
<script>
    import luggage from "./pages/luggage.vue"
    import tips from "./pages/tips.vue"
    import flight from "./pages/flight.vue"
    import contact from "./pages/contact.vue"

    import notice from "./pages/notice.vue"
    import notice0 from "./pages/notice_0.vue"
    import notice1 from "./pages/notice_1.vue"
    import notice2 from "./pages/notice_2.vue"
    import notice3 from "./pages/notice_3.vue"

    export default{
        components: {
            luggage, tips, flight, contact,
            notice, notice0, notice1, notice2, notice3
        },
        computed: {
            currentView(){
                return this.$route.query.page
            }
        },
    }
</script>
