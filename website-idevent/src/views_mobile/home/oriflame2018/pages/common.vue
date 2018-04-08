<template>
    <div>
        <iui-block>
            <!--<iui-title>邀请码</iui-title>-->

            <h5>1. 报名参加此次会议的最后期?</h5>
            <p>报名参加此次会议的最后期限为<span class="text-primary">2018年04月16日12:00（星期一）</span>，此日后提交的任何信息系统将自动设定为无效信息。</p>
            <h5>2. 是否可以修改或更新已注册信息？</h5>
            <p>注册完成后，您仍可随时使用您的手机号再次登录在线注册系统，进行相关信息修改或更新；但请在注册报名关闭前登录，此日后修改或更新的任何信息无效。</p>
            <h5>3.报名费用如何支付：</h5>
            <p>请根据页面提示的付款金额，将费用转账至欧瑞莲指定账户，并在转账时填写备注”2018巴黎+编号+姓名“，否则财务将无从查账；</p>
            <p>
                ·对公账户名称：欧瑞莲化妆品（中国）有限公司上海分公司
            </p>
            <p>
                ·开户行名称：招商银行上海市淮海支行
            </p>
            <p>
                ·对公账户账号：212081736610001
            </p>
        </iui-block>
    </div>
</template>
<script>
    import iuiBlock from "../../../components/iui/block.vue"
    import iuiTitle from "../../../components/iui/block_title.vue"

    export default{
        components: {
            iuiBlock, iuiTitle
        },
        created() {
            if (this.$route.query.title) {
                document.title = this.$route.query.title;
            }
        },
        mounted() {
            this.$store.commit('SPIN', false)
        },
    }
</script>
