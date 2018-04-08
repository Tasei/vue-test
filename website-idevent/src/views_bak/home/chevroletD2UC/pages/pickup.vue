<template>
    <div>
        <iui-block>
            <iui-title>接机服务</iui-title>
            <h5>接机时间：</h5>
            <p>4月7日，09:00-16:00，每小时一班</p>
            <h5>接机地点：</h5>
            <p>武汉天河国际机场</p>
            <p>(请留意现场工作人员手举牌指引)</p>

            <iui-title>送机服务</iui-title>
            <h5>送机时间：</h5>
            <p>4月8日，06:00-12:00，每小时一班</p>
            <h5>集合点：</h5>
            <p>各酒店大堂</p>
            <h5>送机地点：</h5>
            <p>武汉天河国际机场</p>
        </iui-block>
        <btn-home></btn-home>
    </div>
</template>
<script>
    import iuiBlock from "../../../components/iui/block.vue"
    import iuiTitle from "../../../components/iui/block_title.vue"
    import btnHome from "../components/btn_home.vue"
    export default{
        components: {
            iuiBlock, iuiTitle, btnHome
        },
        mounted() {
            this.$store.commit('SPIN', false)
        },
    }
</script>
