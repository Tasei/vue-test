<template>
	<div class="page">
        <h5>活动已结束 感谢您的参与</h5>
        <router-link to="{name:'home'}" class="btn btn-lg btn-primary">返回首页</router-link>
	</div>
</template>
<script>

    export default {
        created() {
            this.$store.commit('SPIN')
        }
    }
</script>
<style scoped lang="less">
    .page{
        margin: 20px;
        h5{
            margin-top:  200px;
            font-size: 28px;
            text-align: center;
        }

        .btn{
            width: 75%;
            margin: 30px auto;
            display: block;
        }
    }
</style>
