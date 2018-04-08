<template>
    <div>
        <div class="pic">
            <div v-if="hash=='map_pvg_t1'" class="pic-pvg">
                <img :src="pic_pvg_t1" class="img-responsive"/>
                <h3 class="text-dark text-center">上海浦东国际机场T1航站楼</h3>
            </div>
            <div v-if="hash=='map_pvg_t2'" class="pic-pvg">
                <img :src="pic_pvg_t2" class="img-responsive"/>
                <h3 class="text-dark text-center">上海浦东国际机场T2航站楼</h3>
            </div>
            <div v-if="hash=='map_sha_t2'" class="pic-pvg">
                <img :src="pic_sha_t2" class="img-responsive"/>
                <h3 class="text-dark text-center">上海虹桥国际机场T2航站楼</h3>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                pic_pvg_t1: require('../../../../assets/images/mobile/chevrolet/PVG-T1.png'),
                pic_pvg_t2: require('../../../../assets/images/mobile/chevrolet/PVG-T2.png'),
                pic_sha_t2: require('../../../../assets/images/mobile/chevrolet/SHA-T2.png'),
            }
        },
        computed: {
            hash() {
                return this.$route.query.hash
            }
        },
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    .pic {
        h3 {
            font-size: 16px;
            margin: 15px 0 20px;
        }
    }
</style>
