<template>
    <component :is="currentView"></component>
</template>
<script>
    import regNotice from "./pages/regNotice.vue"
    import qrcode from "./pages/qrcode.vue"
    import schedule from "./pages/schedule.vue"
    import notice from "./pages/notice.vue"
    import venue from "./pages/venue.vue"
    import invitation from "./pages/invitation.vue"

    import articles from "./pages/articles.vue"
    import articleThink from "./pages/articleThink.vue"
    import articleIntro from "./pages/articleIntro.vue"
    import articleNotice from "./pages/articleNotice.vue"
    import articleSummary from "./pages/articleSummary.vue"

    export default {
        components: {
            regNotice, qrcode, schedule, notice, venue, articles, articleThink, articleIntro, articleNotice, articleSummary
        },
        computed: {
            currentView() {
                return this.$route.query.page
            },
        },
    }
</script>

