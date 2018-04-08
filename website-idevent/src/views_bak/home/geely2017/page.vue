<template>
    <v-map v-if="page=='seatMap'"></v-map>
</template>
<script>
    import vMap from "./pages/seatMap"
    export default{
        components: {
            vMap
        },
        computed: {
            page(){
                return this.$route.query.page
            }
        },
//        mounted() {
//            this.$store.commit('SPIN', false)
//        },
    }
</script>

