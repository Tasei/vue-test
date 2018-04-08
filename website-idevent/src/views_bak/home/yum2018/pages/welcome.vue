<template>
    <div>
        <iui-block>
            <iui-title>欢迎信</iui-title>

            <p>各位伙伴，大家好！</p>
             
            <p>非常荣幸能邀请您参加2018 RGM Convention，希望在本次活动中，能充分体现我们百胜特有的“为客疯狂”精神，让与会者能够充分感受到我们的高标准服务与执着的热情。</p>
             
            <p>相信在我们全体人员的共同努力下，本次年会一定能取得圆满成功。谢谢大家！</p>
             
            <p>祝各位在上海参会愉快！</p>
             
            <p>2018 RGM Convention年会总统筹<br>
                罗淑莹</p>

        </iui-block>
    </div>
</template>
<script>
    import iuiBlock from "../../../components/iui/block.vue"
    import iuiTitle from "../../../components/iui/block_title.vue"

    export default {
        components: {iuiBlock, iuiTitle},
        mounted() {
            this.$store.commit('SPIN')
        }
    }
</script>
<style lang="less" scoped>
</style>
