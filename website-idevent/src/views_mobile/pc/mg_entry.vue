<template>
    <i-fixed class="bg">
        <div class="entry">
            <div class="left">
                <router-link class="btn btn-primary btn-lg font-arial" :to="{name: 'pc_mg_home', query: {mid:'mg2017_media'}}">
                    Media Tour Entry
                </router-link>
            </div>
            <div class="right">
                <router-link class="btn btn-primary btn-lg font-arial" :to="{name: 'pc_mg_home', query: {mid:'mg2017_dealer'}}">
                    Dealer Conference Entry
                </router-link>
            </div>
        </div>
    </i-fixed>
</template>
<script>
    import iFixed from 'components/fixed'
    export default{
        mounted() {
            this.$store.commit('SPIN')
        },
        components: {
            iFixed
        }
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    .bg {
        background: #000;
        background-image: url("./images/login_kv.jpg");
        background-repeat: no-repeat;
        background-size: cover;
    }

    .entry {
        width: 500px;
        position: absolute;
        left: 50%;
        margin-left: -250px;
        /*padding-top: 96px;*/
        /*margin-top: -101px;*/
        bottom: 10%;
        .left, .right {
            width: 50%;
            float: left;
            text-align: center;
            padding: 20px;
        }

        .btn{
            /*width: 200px;*/
            /*font-size: 28px;*/
            /*padding: 28px !important;*/
        }
    }
    .font-arial {
        font-family: Arial!important;
    }
</style>
