<template>
    <div>
        <iui-block>
            <iui-title>客服热线：</iui-title>
            <p>
                陈先生：<a href="tel:021-60950484">021-60950484</a>
            </p>
            <p>
                吴小姐：<a href="tel:021-60950481">021-60950481</a>
            </p>
            <h5>工作时间</h5>
            <p>周一至周五<br>
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
            <p><a href="mailto:chevrolet@citssh.com.cn">chevrolet@citssh.com.cn</a></p>


            <div style="margin-top: 50px;">
                <btn-logout></btn-logout>
            </div>
        </iui-block>
        <bottom-bar></bottom-bar>

    </div>
</template>
<script>
    import iuiBlock from "../../../components/iui/block.vue"
    import iuiTitle from "../../../components/iui/block_title.vue"
    import btnLogout from "../../../components/btn_logout.vue"
    import bottomBar from "../components/bottom_bar"
    export default{
        components: {iuiBlock, iuiTitle, bottomBar, btnLogout},
        mounted() {
            this.$store.commit('SPIN', false)
        },
    }
</script>
