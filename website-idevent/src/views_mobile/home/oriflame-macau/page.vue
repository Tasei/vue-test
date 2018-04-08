<template>
    <component :is="currentView"></component>
</template>
<script>
    import pending from "./pages/pending"
    export default{
        components: {
            pending
        },
        computed: {
            currentView(){
                return this.$route.query.page
            }
        }
    }
</script>
