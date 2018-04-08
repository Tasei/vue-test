<template>
    <div>
        <iui-block>
            <iui-title>联系我们</iui-title>

            <p>客服热线: <a href="tel:021-61425830">021-61425830</a></p>

            <p>工作时间：周一至周五 9:00-12:00 13:00-17:00</p>

            <btn-home></btn-home>
        </iui-block>
    </div>
</template>
<script>
    import iuiBlock from "../../../components/iui/block.vue"
    import iuiTitle from "../../../components/iui/block_title.vue"
    import btnHome from "../../../components/btn_home.vue"

    export default {
        components: {iuiBlock, iuiTitle, btnHome},
        mounted() {
            this.$store.commit('SPIN')
        }
    }
</script>
<style lang="less" scoped>
</style>
