<template>
<div>
    <take-picture></take-picture>
    <!--<bottom-bar></bottom-bar>-->
</div>

</template>

<script>
    import Wechat, {wx} from 'assets/js/wechat'
    import takePicture from '../../tbhyj2017y/pages/takePicture.vue'
    import BottomBar from "../components/bottom_bar"
    export default {
        mounted(){
            this.$store.commit('SPIN')
        },
        components:{
            takePicture,BottomBar
        }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
