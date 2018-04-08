<template>
    <div>
        <iui-block>
            <iui-title>客服热线：</iui-title>
            <p>吕小姐：<a href="tel:021-61425830">021-61425830</a></p>
            <p>杜小姐：<a href="tel:021-61425802">021-61425802</a></p>
            <h5>工作时间</h5>
            <p>周一至周五(除节假日)<br>
                09:00-12:00<br>
                13:00-17:00
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
