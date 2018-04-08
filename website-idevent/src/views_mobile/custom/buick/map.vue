<template>
    <div>
        <div class="pic">
            <div v-if="hash=='pic_pvg_t1'" class="pic-pvg">
                <img :src="pic_pvg_t1" />
                <h3 class="text-dark text-center">上海浦东国际机场T1航站楼</h3>
            </div>
            <div v-if="hash=='pic_pvg_t2'" class="pic-pvg">
                <img :src="pic_pvg_t2" />
                <h3 class="text-dark text-center">上海浦东国际机场T2航站楼</h3>
            </div>
            <div v-if="hash=='pic_sha_t2'" class="pic-pvg">
                <img :src="pic_sha_t2" />
                <h3 class="text-dark text-center">上海虹桥国际机场T2航站楼</h3>
            </div>
            <div v-if="hash=='venue_map'" class="pic-pvg">
                <img :src="venue_map" />
                <h3 class="text-dark text-center">会场距各酒店总览图</h3>
            </div>
            <div v-if="hash=='venue_map_plane'" class="pic-pvg">
                <img :src="venue_map_plane" />
                <h3 class="text-dark text-center">会场平面图</h3>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                pic_pvg_t1: require('../../../assets/images/mobile/buick/PVG-T1.png'),
	            pic_pvg_t2: require('../../../assets/images/mobile/buick/PVG-T2.png'),
	            pic_sha_t2: require('../../../assets/images/mobile/buick/SHA-T2.png'),
                venue_map: require('../../../assets/images/mobile/buick/venue_map.png'),
	            venue_map_plane: require('../../../assets/images/mobile/buick/venue_map_plane.png'),
            }
        },
        computed: {
            hash() {
                return this.$route.query.hash
            }
        },
        mounted() {
            this.$store.commit('SPIN', false)
        },
    }
</script>
<style lang="less" scoped>
    .pic {
        h3 {
            font-size: 16px;
            margin: 15px 0 20px;
        }
    }
</style>
