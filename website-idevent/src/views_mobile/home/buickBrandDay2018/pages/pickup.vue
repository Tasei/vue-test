<template>
    <div>
        <iui-block>
            <iui-title>接机服务</iui-title>
            <h5>接机时间：</h5>
            <p>4月17日,10:00-16:00,每小时一班</p>
            <h5>接机地点：</h5>
            <p>上海虹桥国际机场T1航站楼&T2航站楼抵达出口、杭州萧山国际机场抵达出口、嘉兴南站抵达出口、桐乡火车站抵达出口
            </p>
            <p>(请留意现场工作人员手举牌指引)</p>
        </iui-block>

        <iui-block>
            <iui-title>送机服务</iui-title>
            <h5>送机时间：</h5>
            <p>4月18日,06:00-14:00,每小时一班</p>
            <h5>集合点：</h5>
            <p>各酒店大堂</p>
            <h5>送机地点：</h5>
            <p>上海虹桥国际机场T1航站楼&T2航站楼、杭州萧山国际机场、嘉兴南站、桐乡火车站</p>
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
