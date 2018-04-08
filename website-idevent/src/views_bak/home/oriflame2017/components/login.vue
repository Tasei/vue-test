<template>
    <div class="login-tips">
        <p class="font-bold"><a :class="{active:is_en}" @click="changeLang('zh')">中文</a> | <a :class="{active:!is_en}" @click="changeLang('en')">English</a></p>
    </div>
</template>
<script>
    export default{
        computed: {
            is_en() {
                return this.$store.state.lang == 'en';
            }
        },
        methods: {
            changeLang(lang){
                this.$store.commit('LANG', lang);
            }
        }
    }
</script>
<style lang="less" scoped>
    .login-tips {
        color: #999;
    }
    a {
        margin: 0 10px;
        color: #999 !important;
        font-size: 15px;
        &.active {
            color: #006CB7 !important;
        }
    }
</style>
