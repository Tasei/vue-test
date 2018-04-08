<template>
    <div>
        <iui-block>
            <iui-title>客服热线：</iui-title>
            <p>熊小姐：<a href="tel:021-60950484">021-60950484</a>；<a href="tel:15201996536">15201996536</a></p>
            <p>赵先生：<a href="tel:021-60908348">021-60908348</a></p>
            <p>刘先生：<a href="tel:021-60950498">021-60950498</a></p>
            <p>陈小姐：<a href="tel:021-60908351">021-60908351</a></p>
            <h5>工作时间</h5>
            <p>9月28日-9月30日<br>
                09:00-12:00&13:00-20:00
            </p>
            <p>10月1日-10月9日（含国庆假日）<br>
                09:00-12:00&13:00-17:00
            </p>

            <h5>传真</h5>
            <a href="tel:60908350">+86 60908350</a>

            <h5>地址</h5>
            <p>上海市静安区长安路1001号长安大厦1号楼912室</p>

            <h5>邮编</h5>
            <p>200070</p>

            <h5>邮箱</h5>
            <p><a href="mailto:buick@citssh.com.cn">buick@citssh.com.cn</a></p>

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
