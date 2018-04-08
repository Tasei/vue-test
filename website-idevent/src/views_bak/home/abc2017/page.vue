<template>
    <v-notice v-if="page=='buyer_notice'"></v-notice>
</template>
<script>
    import vNotice from "./pages/buyer_notice"
    export default{
        components: {
            vNotice
        },
        computed: {
            page(){
                return this.$route.query.page
            }
        },
    }
</script>

