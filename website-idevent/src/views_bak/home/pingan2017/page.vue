<template>
    <component :is="currentView"></component>
</template>
<script>
    import charge from "./pages/charge.vue"

    export default {
        components: {
            charge
        },
        computed: {
            currentView() {
                return this.$route.query.page
            },
        },
    }
</script>

