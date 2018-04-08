<template>
    <div class="bg">
        <div class="word-box">
            <div class="staff">
                <router-link :to="{name: 'home_page',query:{page:'staffword'}}">
                    员工奖项
                </router-link>
            </div>
            <div class="agent">
                <a :href="agentImg">代理商奖项</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                agentImg:require('../assets/dls_pic.jpg')
            }
        },
        created() {

        },
        mounted() {
            this.$store.commit('SPIN')
        },
        methods:{

        }
    }
</script>
<style lang="less" scoped>
    .bg {
        min-height: 100vh;
        background: url("../assets/banjiang_bg.png");
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
        padding-top:0.1px;
        .word-box{
            margin: 0 auto;
            margin-top:35vh;
            padding:0 45px;
            width:100%;
            div{
                width:100%;
                height:136px;
                color:#fff;
                text-align: center;
                line-height:136px;
                font-size:17px;
                a{
                    display: inline-block;
                    width:100%;
                    height:100%;
                    color: #fff;
                    font-size:17px;
                }
            }
            .staff{
                background: url("../assets/staff.png");
                -webkit-background-size: 100% 100%;
                background-size: 100% 100%;
                margin-bottom:35px;
            }
            .agent{
                background: url("../assets/agent.png");
                -webkit-background-size: 100% 100%;
                background-size: 100% 100%;
            }
        }
    }

</style>
