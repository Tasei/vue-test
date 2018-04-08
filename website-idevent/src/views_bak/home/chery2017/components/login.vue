<template>
    <div class="login-tips">
        <p class="font-bold text-center"><a @click="changeLang('zh')">中文</a> | <a @click="changeLang('en')">English</a></p>
    </div>
</template>
<script>
    export default{
        methods: {
            changeLang(lang){
                this.$store.commit('LANG', lang)
            }
        }
    }
</script>
<style lang="less" scoped>
    .login-tips {
        color: rgba(255, 255, 255, 0.6);
    }
    a {
        margin: 0 10px;
        color: rgba(255, 255, 255, 0.6);
        font-size: 15px;
    }
</style>
