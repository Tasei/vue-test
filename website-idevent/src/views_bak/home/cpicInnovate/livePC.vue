<template>
    <div class="page-bg">
        <div class="holder"></div>
        <iframe class="video-player" width="800" height="450" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true"
                mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true"
                src="http://ilive.idevent.cn/?a=index&c=show&id=69485&type=pc"></iframe>
    </div>
</template>
<script>
    export default {
        mounted() {
            this.$store.commit('SPIN')
        }
    }
</script>
<style lang="less" scoped>
    .page-bg{
        position: relative;
        background-image: url("./assets/live_bg.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top center;
        height: 1000px;

        .holder{
            padding-top: 220px;
        }

        .video-player{
            display: block;
            margin: 0 auto;
            box-shadow: #fff 0 0 20px;
        }
    }
</style>
