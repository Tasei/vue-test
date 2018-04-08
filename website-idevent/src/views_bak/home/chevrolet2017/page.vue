<template>
    <v-map v-if="page=='map'"></v-map>
</template>
<script>
    import vMap from "./pages/map"
    export default{
        components: {
            vMap
        },
        computed: {
            page(){
                return this.$route.query.page
            }
        },
        mounted() {
            this.$store.commit('SPIN', false)
        },
    }
</script>

