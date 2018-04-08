<template>
    <div>
        <iui-block>
            <iui-title>领队联系方式</iui-title>
            <p v-if="isConsumer">
                倪童迪 <a href="tel:+8613816824732">+8613816824732</a>
            </p>
            <p v-else>
                李峥 <a href="tel:+8613501995757">+8613501995757</a>
            </p>

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
        computed: {
            isConsumer(){
                return this.user.group.name == "consumer" || this.user.group.name == "consumer-staff"
            }
        }
    }
</script>
