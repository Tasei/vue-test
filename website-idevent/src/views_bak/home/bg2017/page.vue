<template>
    <component :is="currentView"></component>
</template>
<script>
    import schedule from './pages/schedule'
    import vote from './pages/vote'
    import seat from './pages/seat'
    import safari from './pages/safari'
    export default{
        components: {
            schedule,
            vote,
            seat,
            safari
        },
        computed: {
            currentView(){
                return this.$route.query.page
            }
        },
    }
</script>
