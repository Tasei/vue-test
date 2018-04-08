<template>
    <div>
        <img :src="currentImg" class="img-responsive" @click="viewImg(currentImg)" />

        <btn-home></btn-home>
    </div>
</template>
<script>
    import btnHome from "../components/btn_home.vue"
    export default{
        components: {
            btnHome
        },
        computed:{
            image(){
                return this.$route.query.img
            },
            currentImg(){
                switch (this.image) {
                    case 'pvg_t1':
                        return this.pic_pvg_t1
                    case 'pvg_t2':
                        return this.pic_pvg_t2
                    case 'sha_t1':
                        return this.pic_sha_t1
                    case 'sha_t2':
                        return this.pic_sha_t2
                    case 'hotel_loc':
                        return this.pic_hotel_loc
                }
            },
        },
        mounted() {
            this.$store.commit('SPIN', false)
        },
        data() {
            return {
                pic_pvg_t1: require('../images/pic_pvg_t1.png'),
                pic_pvg_t2: require('../images/pic_pvg_t2.png'),
                pic_sha_t1: require('../images/pic_sha_t1.png'),
                pic_sha_t2: require('../images/pic_sha_t2.png'),
                pic_hotel_loc: require('../images/hotel_location.png'),
            }
        },
        methods: {
            viewImg(src){
                window.location.href = src
            }
        }

    }
</script>
