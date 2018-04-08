<template>
    <component :is="currentView"></component>
</template>
<script>
    import index from "./pages/index"
    import maps from "./pages/maps"
    import videos from "./pages/video"

    export default{
        components: {
            index, maps, videos
        },
        computed: {
            currentView(){
                return this.$route.query.page
            }
        },

    }
</script>
