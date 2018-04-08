<template>
    <component :is="currentView"></component>
</template>
<script>
    import qrcode from "./pages/qrcode"
    import schedule from "./pages/schedule"
    import venue from "./pages/venue"
    import questionnaire from "./pages/questionnaire"
    import vote from "./pages/vote.vue"
    import voteDetail from "./pages/vote_detail.vue"
    import currentQuestion from "./pages/currentQuestion"
    export default{
        components: {
            qrcode, schedule, venue, questionnaire, vote, voteDetail,currentQuestion
        },
        computed: {
            currentView(){
                return this.$route.query.page
            }
        }
    }
</script>
