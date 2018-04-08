<template>
    <iui-block>
        <iui-title>Spring Mountain內驾驶注意事項</iui-title>

        <p>
在赛道上不交叉驾驶
注意赛道上和赛道下周围的环境。
请尽量避免课堂上对话。因你不想错过课堂上的重要信息。
保持大量补充水分和或佳得乐。
请在开车时，保持在个人可控范围内。
        </p>

        <h5>手机</h5>
        <p>
请不要使用手机连接车载蓝牙。
请在培训，赛道和课程的整個活动过程中一直保持你的手机保持关闭或设置为“飞行模式”
手机不能只调振动或无声模式。
培训，赛道和课程的活动过程中会休息时间检查你的信息和拨打电话。
        </p>

    </iui-block>
</template>
<script>
    import iuiBlock from "../../../components/iui/block.vue"
    import iuiTitle from "../../../components/iui/block_title.vue"
    export default{
        components: {iuiBlock, iuiTitle},
        mounted() {
            this.$store.commit('SPIN', false)
        },
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    @import "../style/page.less";
</style>
