<template>
    <i-fixed class="pending">
        <img src="../images/pending.jpg">
    </i-fixed>
</template>
<script>
    import iFixed from 'components/fixed'

    export default {
        components: {
            iFixed
        },
        mounted() {
            this.$store.commit('SPIN')
        },
    }
</script>
<style scoped lang="less">
    .pending{
        img{
            max-width: 1920px;
            width: 100%;
        }
    }
</style>
