<template>
    <div class="register_entry">
        <iui-bg></iui-bg>
        <div class="holder"></div>
        <router-link :to="{name:'register_form'}" class="btn btn-lg btn-primary">立即注册</router-link>
    </div>
</template>
<style scoped>
    .register_entry {
        text-align: center;
    }

    .holder {
        padding-top: 120%;
    }

    .iui-page-bg {
        background-image: url("../images/reg_bg.jpg");
    }

    .btn {
        max-width: 80%;
    }
</style>
<script>
    import iuiBg from "../../../components/iui/page_bg.vue"

    export default {
        components: {iuiBg},
        mounted() {
            this.$store.commit('SPIN', false)
        },
    }
</script>
