<template>
    <hotel-detail :id="hotelId"></hotel-detail>
</template>
<script>
    import hotelDetail from "../../../components/hotel/detail.vue"
    export default{
        components: {hotelDetail},
        computed: {
            hotelId(){
                return this.$route.query.hotel_id
            }
        }
    }
</script>
