<template>
    <venue-com :info="info"></venue-com>
</template>

<script>
    import venueCom from "./components/venueComponent.vue"
    export default {
        data() {
            return {
                info:{
                    title:'董事长分会',
                    address:'地点：深圳东海朗廷酒店 24F 星愿廷I',
                    imgArr:[
                        {imgSrc:require('../images/xingyuanting.jpg'),},
//                        {imgSrc:require('../images/chairman-1.jpg'),}
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

