<template>
    <iui-block>
        <iui-title>美国道路标志</iui-title>

        <h5>美国路标警告标志 Warning Signs</h5>
        <img class="img-responsive" :src="require('../images/警告标志1.png')">
        <img class="img-responsive" :src="require('../images/警告标志2.png')">
        <img class="img-responsive" :src="require('../images/警告标志3.png')">
        <img class="img-responsive" :src="require('../images/警告标志4.png')">

        <h5>铁路及轻轨路口标志 Railroad and Light Rail Transit Grade Crossing Signs</h5>
        <img class="img-responsive" :src="require('../images/铁路标志1.png')">
        <img class="img-responsive" :src="require('../images/铁路标志2.png')">

        <h5>铁道交叉路口车辆保管限制空间 Limited Vehicle Storage Space Between Intersection and Tracks</h5>
        <img class="img-responsive" :src="require('../images/铁路交叉口.png')">

        <h5>临时交通管制标志 Temporary Traffic Control Signs</h5>
        <img class="img-responsive" :src="require('../images/临时交通管制.png')">

        <h5>交叉路口强制性车道变动 Mandatory Movements in Lanes at an Intersection</h5>
        <img class="img-responsive" :src="require('../images/交叉路口车道变动.png')">

        <h5>交通标志牌 Regulatory Signs</h5>
        <img class="img-responsive" :src="require('../images/交通标志牌1.png')">
        <img class="img-responsive" :src="require('../images/交通标志牌2.png')">
        <img class="img-responsive" :src="require('../images/交通标志牌3.png')">

        <h5>引导标志 Guide Signs</h5>
        <img class="img-responsive" :src="require('../images/引导标志1.png')">
        <img class="img-responsive" :src="require('../images/引导标志2.png')">
        <img class="img-responsive" :src="require('../images/引导标志3.png')">

        <h5>驾驶者服务及娱乐标志 Motorist Services and Recreation Signs</h5>
        <img class="img-responsive" :src="require('../images/驾驶服务娱乐1.png')">
        <img class="img-responsive" :src="require('../images/驾驶服务娱乐2.png')">

        <h5>行人及自行车标志 Pedestrian and Bicycle Signs</h5>
        <img class="img-responsive" :src="require('../images/行人及自行车1.png')">
        <img class="img-responsive" :src="require('../images/行人及自行车2.png')">

        <h5>行人绕道标志 Pedestrian Detour Signs</h5>
        <img class="img-responsive" :src="require('../images/行人绕道.png')">

        <h5>自行车指南标 Bicycle Guide Signs</h5>
        <img class="img-responsive" :src="require('../images/自行车指南.png')">

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
