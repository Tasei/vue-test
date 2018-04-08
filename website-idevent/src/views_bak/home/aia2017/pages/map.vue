<template>
    <div class="mt-container">
        <div class="block">
            <div class="title">会场平面图</div>
            <a href="https://static.idevent.cn/oss/meeting/84/pic/4O0vhlWnoEQm4Mxr.jpeg"><img src="../assets/map.jpg"></a>
        </div>
    </div>
</template>
<script>
    export default{
        mounted() {
            this.$store.commit('SPIN')
        }
    }
</script>
<style lang="less" scoped>
    @import "../assets/style";
</style>
