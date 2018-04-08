<template>
    <component :is="currentView"></component>
</template>
<script>
    import live from "./pages/live"
    import videos from "./pages/video"

    export default{
        components: {
            live, videos, 
        },
        computed: {
            currentView(){
                return this.$route.query.page
            }
        },
    
    }
</script>
