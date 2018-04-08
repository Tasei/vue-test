<template>
    <div class="fd-seat">
        <div class="listImg">
            <img src="../images/productList.jpg" alt="">
        </div>

    </div>
</template>

<script>
    export default{
        data(){
            return {}
        },
        mounted() {
            this.$store.commit('SPIN', false)
        },
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
.fd-seat{
    font-family: PingFangSC-Medium;
    text-align: center;
    background: #f3f3f3;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .listImg{
        img{
            width:100%;
            height:100%;
        }
    }
}
</style>
