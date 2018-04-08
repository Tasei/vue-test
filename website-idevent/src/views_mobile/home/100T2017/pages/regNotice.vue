<template>
    <div>
        <iui-block>
            <iui-title>注意事项</iui-title>

            <h5 class="subtitle">着装要求</h5>
            <p>26日峰会期间，请各位参会者穿着商务正装出席。</p>

            <h5 class="subtitle">费用承担</h5>
            <p>参会者以鑫星伊顿邀请的对象为准<br>
                参与会议无需支付其他费用<br>
                参会者请自行承担车船及住宿费用</p>
            <hr>

            <template v-if="steps.is_over">
                <router-link :to="{name:'register_complete'}" class="btn btn-primary btn-lg padding-lg">{{$t('viewMyOrder')}}</router-link>
                <wechat-qr></wechat-qr>
            </template>
            <template v-else>
                <i-button class="btn btn-primary btn-lg" :on-ok="gotoHotel">我需要住宿</i-button>
                <i-button class="btn btn-primary btn-outline btn-lg" :on-ok="skipHotel">我不需要住宿</i-button>
            </template>
        </iui-block>
    </div>
</template>
<script>
    import iuiBlock from "../../../components/iui/block.vue"
    import iuiTitle from "../../../components/iui/block_title.vue"
    import iButton from "iButton"
    import wechatQr from "../components/wechat_qr.vue"

    export default {
        components: {iuiBlock, iuiTitle, iButton, wechatQr},
        mounted() {
            this.$store.commit('SPIN', false)
        },
        methods: {
            gotoHotel() {
                this.$router.push({name: "register_hotel"})
            },
            skipHotel() {
                this.$router.push({name: "register_checkout"})
            },
        },
        computed: {
            steps() {
                return this.$store.state.steps
            },
        }
    }
</script>
<style lang="less" scoped>
    .subtitle {
        color: #b3b3b3;
    }

    hr {
        margin: 20px 0 5px;
    }
</style>
