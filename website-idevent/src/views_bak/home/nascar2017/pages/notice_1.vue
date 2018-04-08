<template>
    <iui-block>
        <iui-title>美国交通违法行为处理</iui-title>

        <h5>关于罚款</h5>
        <p>酒后驾车，在美国，一旦查出酒后驾车，处罚是十分严厉的，不仅要吊销驾照，没收车辆被拍卖，还将被定为二级谋杀罪。如果是非美国公民违反此规定，除接受处罚处，将被驱逐出境。轻者违规，电脑记录在案，如超速行驶等。</p>
        <p>限速，超过规定越多，罚金越高。（限速详见下表）</p>
        <p>停车限时，停车场按时收费。大型停车场是电脑管理，停车人只要根据自己的停车时间，往计时器中投入相应的硬币，就可以走人。但是，交费时一定要留有充分的余地，否则，时间一过，你的车窗上就会贴上一张罚款单。</p>

        <h5>时速限制</h5>
        <p>此表包含了最常用的白天速度的限制，1英里约为1.6公里。</p>

        <table class="table iui-table">
            <thead>
            <tr>
                <td>加州道路</td>
                <td>每小时限速</td>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>高速公路(郊区)</td>
                <td>70英里/112公里</td>
            </tr>
            <tr>
                <td>高速公路(市区)</td>
                <td>65英里/104公里</td>
            </tr>
            <tr>
                <td>有隔离带高速公路</td>
                <td>65英里/104公里</td>
            </tr>
            <tr>
                <td>无隔离带高速公路</td>
                <td>55-65英里/88-104公里</td>
            </tr>
            <tr>
                <td>市区道路</td>
                <td>25英里/40公里</td>
            </tr>
            <tr>
                <td>校区道路</td>
                <td>25英里/40公里</td>
            </tr>

            </tbody>
        </table>

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
