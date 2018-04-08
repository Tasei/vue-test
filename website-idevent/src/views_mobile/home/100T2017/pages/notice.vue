<template>
    <div>
        <iui-block>
            <iui-title>注意事项</iui-title>
            <h5>着装要求：</h5>
            <p>
                26日峰会期间，请各位参会者穿着商务正装出席
            </p>

            <h5>费用承担：</h5>
            <p>参会者以鑫星伊顿邀请的对象为准</p>
            <p>参与会议无需支付其他费用</p>
            <p>参会者请自行承担车船及住宿费用</p>

            <h5>最晚退房时间：</h5>
            <p>酒店最晚退房时间为中午12:00</p>

            <h5>天气：</h5>
            <p>北京8月26日 天气20℃-28℃，微风</p>

            <wechat-qr></wechat-qr>

            <btn-home></btn-home>
        </iui-block>
    </div>
</template>
<script>
    import iuiBlock from "../../../components/iui/block.vue"
    import iuiTitle from "../../../components/iui/block_title.vue"
    import btnHome from "../../../components/btn_home.vue"
    import wechatQr from "../components/wechat_qr.vue"
    export default{
        components: {iuiBlock, iuiTitle, btnHome, wechatQr},
        mounted() {
            this.$store.commit('SPIN', false)
        },
    }
</script>
