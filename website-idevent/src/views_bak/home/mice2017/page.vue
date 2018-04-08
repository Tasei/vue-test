<template>
    <component :is="page"></component>
</template>
<script>
    import buyer_notice from "./pages/buyer_notice"
    import schedule from "./pages/schedule.vue"
    export default{
        components: {
            buyer_notice,
            schedule
        },
        computed: {
            page(){
                return this.$route.query.page
            },
        },
    }
</script>

