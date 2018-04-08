<template>
    <div class="fd-seat">
        <div class="title">
            大会座位表
        </div>
        <!--<div class="seat">-->
            <!--{{seat.item}}-->
        <!--</div>-->
        <div class="seatList">
            <a :href="img1"><img :src="img1" alt=""></a>
        </div>
        <div class="seatList">
            <a :href="img2"><img :src="img2" alt=""></a>
        </div>
        <div class="seatList">
            <a :href="img3"><img :src="img3" alt=""></a>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                seat:{
                    item:'3排15号'
                },
                img1: require('../images/seat0.jpg'),
                img2: require('../images/seat1.png'),
                img3: require('../images/seat2.png'),
            }
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
    .title{
        padding-top:20px;
        padding-bottom:17px;
        font-size: 17px;
        color: #999999;
        background: #fff;
        letter-spacing: 0;
        line-height: 17px;
    }
    .seatList{
        border-bottom:1px solid #ddd;
        margin-bottom:8px;
    }
}
</style>
