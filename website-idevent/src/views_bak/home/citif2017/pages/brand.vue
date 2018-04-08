<template>
    <div class="mt-container">
        <div class="block">
            <div class="title">合作媒体</div>
            <p>敬请期待</p>
            <!--<a href="javascirpt:;" class="meeting_china_logo"></a>-->
        </div>
        <div class="block">
            <div class="title">技术支持</div>
            <p>上海楷泰信息科技有限公司</p>
            <a href="javascirpt:;" class="meeting_china_logo2"></a>
        </div>
    </div>
</template>
<script>
    export default {
        mounted() {
            this.$store.commit('SPIN')
        }
    }
</script>
<style lang="less" scoped>
    @import "../assets/style";
    .meeting_china_logo {
        display: block;
        height: 33px;
        background: url("../assets/logo.png") no-repeat left center;
        background-size: auto 33px;
    }
    .meeting_china_logo2 {
        display: block;
        height: 132px;
        background: url("../assets/shit.png") no-repeat left center;
        background-size: auto 132px;
    }
</style>
