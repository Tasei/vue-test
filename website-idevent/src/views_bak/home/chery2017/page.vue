<template>
    <div>
        <v-hotel v-if="page=='hotel'"></v-hotel>
        <v-info v-if="page=='info'"></v-info>
        <v-seat v-if="page=='seat'"></v-seat>
    </div>
</template>
<script>
    import vHotel from "./pages/hotel"
    import vInfo from "./pages/info"
    import vSeat from "./pages/seatMap.vue"
    export default{
        components: {
            vHotel,
            vInfo,
            vSeat,
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

