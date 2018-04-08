<template>
    <div class="countdown">
        <div class="modal"></div>
        <div class="number number-1" v-if="number==1"></div>
        <div class="number number-2" v-if="number==2"></div>
        <div class="number number-3" v-if="number==3"></div>
        <div class="number number-4" v-if="number==4"></div>
        <div class="number number-5" v-if="number==5"></div>
        <div class="text-tip" v-if="number==0">开始</div>
    </div>
</template>
<script>
    export default {
        props: {
            number: {
                type: [String, Number],
                default: -1
            }
        }
    }
</script>
<style lang="less" scoped>
    //倒计时
    .countdown {
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        top: 0;
        z-index: 97;
        .modal {
            position: absolute;
            left: 0;
            width: 100%;
            height: 100%;
            top: 0;
            z-index: 98;
            background-color: rgba(0, 0, 0, 0.5);
        }
        .text-tip {
            font-size: 400px;
            color: #fcf2d7;
            position: absolute;
            z-index: 99;
            left: 0;
            width: 100%;
            text-align: center;
            height: 80px;
            line-height: 80px;
            top: 50%;
            margin-top: -40px;


        }
        .number {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 99;
            left: 0;
            top: 0;
            background-size: auto 288px;
            background-position: center;
            background-repeat: no-repeat;
            &.number-1 {
                background-image: url("../images/chicken/countdown_1.png");
            }
            &.number-2 {
                background-image: url("../images/chicken/countdown_2.png");
            }
            &.number-3 {
                background-image: url("../images/chicken/countdown_3.png");
            }
            &.number-4 {
                background-image: url("../images/chicken/countdown_4.png");
            }
            &.number-5 {
                background-image: url("../images/chicken/countdown_5.png");
            }
        }
    }
</style>
