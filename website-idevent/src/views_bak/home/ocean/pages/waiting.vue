<template>
    <div class="waiting">
        <div class="activities-waiting">
            敬请期待
        </div>
    </div>
</template>
<script>


    export default{
        data() {
            return {
            }
        },
        computed: {

        },
        components: {

        },

        mounted() {
            this.$store.commit('SPIN', false)
        },
        methods: {

        }
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    .waiting{
        width:100%;
        padding:100px 15px 0;
        .activities-waiting{
            margin:0 auto;
            height:200px;
            width:200px;
            line-height: 200px;
            text-align: center;
            background-color: rgba(0,0,0,0.5);
            color: #fff;
            font-size: 20px;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            border-radius: 50%;
        }
    }

</style>

