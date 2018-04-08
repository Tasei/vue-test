<template>
    <div class="mt-container">
        <div class="block">
            <div class="title">乘坐飞机注意事项</div>
            <div class="content">
                <p>1、游客在机停稳后方可上下机并按机场安全管理规定或指示标志通行及排队上下机；要讲究文明礼貌，先照顾老人、儿童、妇女；切勿拥挤，以免发生意外。请勿携带违禁物品。</p>
                <p>2、在机临时停靠时期，服从服务人员安排，请勿远离。</p>
                <p>3、游客乘坐飞机时，应注意遵守民航乘机安全管理规定，特别是不要在飞机上使用手机等无线电通讯工具或电子游戏等，建议全程系好安全带。</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data() {
            return {}
        },
        mounted() {
            this.$store.commit('SPIN');
        },
    }
</script>
<style lang="less" scoped>
    @import "../assets/style.less";
</style>
