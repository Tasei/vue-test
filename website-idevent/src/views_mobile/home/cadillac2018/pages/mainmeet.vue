<template>
    <venue-com :info="info"></venue-com>
</template>

<script>
    import venueCom from "./components/venueComponent.vue"
    export default {
        data() {
            return {
                info:{
                    title:'2018凯迪拉克市场营销年会 ',
                    address:'主会场：深圳会展中心1楼5号馆多功能厅',
                    imgArr:[
                        {imgSrc:require('../images/main-0.png'),},
                        {imgSrc:require('../images/main-1.jpg'),}
                    ],
                },
            }
        },
        components:{
            venueCom
        },
        mounted() {
            this.$store.commit('SPIN', false)
        },
    }
</script>

