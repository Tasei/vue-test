<template>
    <div class="contact">
        <div class="bg"></div>
        <iui-block>
            <iui-title>活动联系人：</iui-title>
            <p class="text-dark">ICCA中国委员会秘书处 刘璇</p>
            <p>
                电话：<a href="tel:021-51105000">021-51105000转2626</a>
            </p>
            <p>
                传真：<a href="tel:021-51105006">021-51105006</a>
            </p>
            <p>
                手机：<a href="tel:13482429008">13482429008</a>
            </p>
            <p>
                邮件：<a href="mailto:becky.liu@sicmo.com.cn">becky.liu@sicmo.com.cn</a>
            </p>
        </iui-block>

        <iui-block>
            <iui-title>ICCA联系人：</iui-title>
            <p class="text-dark">ICCA亚太办公室 玛格</p>
            <p>
                电话：<a href="tel:+60-3-79553343">+60-3-79553343</a>
            </p>
            <p>
                手机：<a href="tel:+60-167781037">+60-167781037</a>
            </p>
            <p>
                邮件：<a href="mailto:margaret.l@iccaworld.org">margaret.l@iccaworld.org</a>
            </p>
        </iui-block>

        <iui-block>
            <iui-title>注册技术支持：</iui-title>
            <p class="text-dark">上海楷泰信息科技有限公司 陈旭</p>
            <p>
                电话：<a href="tel:021-61425836">021-61425836</a>
            </p>
            <p>
                手机：<a href="tel:18701791440">18701791440</a>
            </p>
            <p>
                邮件：<a href="mailto:service@idevent.cn">service@idevent.cn</a>
            </p>
        </iui-block>

    </div>
</template>
<script>
    import iuiBlock from "../../../../views_mobile/components/iui/block.vue"
    import iuiTitle from "../../../../views_mobile/components/iui/block_title.vue"
    export default{
        components: {iuiBlock, iuiTitle},
        mounted() {
            this.$store.commit('SPIN', false)
        },
    }
</script>
<style lang="less" scoped>
    .contact {
        background: #f2f2f2;
        min-height: 100vh;
    }
    .bg {
        position: fixed;
        left: 0;
        top:0;
        right: 0;
        bottom: 0;
        background: #f2f2f2;
        z-index: -1;
    }
</style>
