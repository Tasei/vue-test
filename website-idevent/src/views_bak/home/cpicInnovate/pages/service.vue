<template>
    <div class="mt-container lg">
        <div class="block">
            <div class="title">成立大会注意事项</div>
            <p>1.成立大会将于7月28日上午9:00准时开始，请各位学员提前半小时入场。</p>
            <p>2.请各位学员保持会场安静，不随意走动，手机处于静音状态。</p>
            <p>3.各位学员当天请统一着院服。</p>
            <p>4.中途茶歇时间较短，请各位学员不要远离会场。</p>
        </div>

        <div class="block">
            <div class="title">交通指引</div>
            <p>请各位学员于7月28日上午7:00准时从田林宾馆下楼，乘坐大巴前往会场。</p>
            <!--
            <div class="sub-title">推荐路线：</div>
            <p>1、从田林宾馆出发至地铁9号线桂林路站→在世纪大道处换乘地铁二号线→在陆家嘴站下车（5号口出）→步行约550米到达。</p>
            <p>2、从田林宾馆出发至地铁1号线漕宝路站→在人民广场处换乘地铁二号线→在陆家嘴站下车（5号口出）→步行约550米到达。</p>
            <p style="color: #999;font-size: 12px;">注：开学典礼入场时间处于早高峰时段，请您合理安排出行。</p>
            -->
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
</style>
