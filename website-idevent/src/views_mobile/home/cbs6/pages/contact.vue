<template>
    <div>
        <iui-block>
            <iui-title>会议地点</iui-title>
            <p>宴会厅三楼</p>

            <iui-title>着装要求</iui-title>
            <p>7日CBS6发布会期间，请各位参会者穿着正装出席</p>

            <iui-title>天气</iui-title>
            <p>深圳12月7日 天气22℃/14℃，阴天</p>

            <iui-title>午餐地点</iui-title>
            <p>秀自助餐厅2楼</p>

            <iui-title>送机服务</iui-title>
            <p>本次活动提供送机服务，请参会者前往签到处告知当天航班信息</p>

            <iui-title>招商银行会务组联系方式</iui-title>
            <p>周印芳：<a href="tel:15216778370">15216778370</a></p>
            <p><span style="letter-spacing: 1em;">于</span>振：<a href="tel:18621581209">18621581209</a></p>
            <p>陈思思：<a href="tel:15867787704">15867787704</a></p>
        </iui-block>
        <btn-home></btn-home>

    </div>
</template>
<script>
    import iuiBlock from "../../../components/iui/block.vue"
    import iuiTitle from "../../../components/iui/block_title.vue"
    import btnHome from "../components/btn_home.vue"
    export default{
        components: {iuiBlock, iuiTitle, btnHome},
        mounted() {
            this.$store.commit('SPIN', false)
        },
    }
</script>
