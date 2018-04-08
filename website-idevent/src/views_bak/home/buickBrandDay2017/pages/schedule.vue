<template>
    <div>
        <iui-block>
            <iui-title>日程安排</iui-title>

            <h5>活动日期：2017年4月18日</h5>
            <h5>会议地点：上海･上海港国际客运码头</h5>
            <span class="help-block">（上海虹口区东大名路800号，高阳路向黄浦江方向码头入口处）</span>


            <h5 class="text-danger">*着装要求：</h5>
            <p>深色商务正装，配别克胸针、领带、丝巾。</p>

            <h5 class="text-danger">*注意：</h5>
            <p>请于4月7日前完成注册和预订，并提前支付房费预付款。房费预付款支付完成后，房间预订方可生效。在截止日期未完成付款的房间无法保留，敬请谅解！</p>

            <router-link :to="{name:'home_page', query:{page:'timeline'}}">点击查看活动日程</router-link>

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
