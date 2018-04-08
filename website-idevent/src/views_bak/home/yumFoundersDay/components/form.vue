<template>
    <div class="form-success">
        <a href="javascript:;" class="right"></a>
        <h5>感谢您的反馈</h5>
        <!--<p>赶紧去领红包吧</p>-->
        <router-link :to="{name: 'home_index'}" class="btn btn-primary btn-lg">返回首页</router-link>
        <!--<router-link :to="{name: 'red_packet_index'}" class="btn btn-primary btn-lg">领红包</router-link>-->
    </div>
</template>
<style lang="less" scoped>
    .form-success {
        text-align: center;
        padding-top: 100px;
    }
    a.right {
        display: inline-block;
        width: 70px;
        height: 70px;
        color: #cc1018;
        font-size: 40px;
        line-height: 1;
        border-radius: 100%;
        background: #cc1018 url("../images/right.png") no-repeat center;
        background-size: 64px 64px;
    }
    h5 {
        font-size: 20px;
        margin: 30px 0 10px;
        color: #333;
    }
    p {
        color: #999;
        font-size: 15px;
    }
    .btn-primary {
        background: #cc1018;
    }
</style>
