<template>
    <div class="mt-container">
        <div class="block">
            <div class="title">保险</div>
            <div>
                <p>公司已经为每一位出席者购买了国际旅游保险，如有问题请寻求现场工作人员协助。</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        created() {
            if (this.$route.query.title) {
                document.title = this.$route.query.title;
            }
        },
        data() {
            return {
            }
        },
        mounted() {
            this.$store.commit('SPIN');
        }
    }
</script>
<style lang="less" scoped>
    @import "../assets/style.less";
</style>
