<template>
    <div class="fd-contact">
        <table class="box">
            <tr class="title">
                <td>会务组</td>
                <td>分工</td>
                <td>联系方式</td>
            </tr>
            <tr class="item" v-for="item in list">
                <td>{{item.name}}</td>
                <td>{{item.position}}</td>
                <td><a href="tel:item.mobile">{{item.mobile}}</a></td>
            </tr>
        </table>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                list:[
                    {
                        name:"曾乃奎",
                        position:"综合协调",
                        mobile:"13564613136"
                    },
                    {
                        name:"燕然之",
                        position:"会务、住宿、海燕奖",
                        mobile:"13816544300"
                    },
                    {
                        name:"李鑫",
                        position:"签到、餐饮",
                        mobile:"18638552776"
                    },
                    {
                        name:"李婷",
                        position:"会场服务、记录",
                        mobile:"15618780087"
                    },
                    {
                        name:"周大为",
                        position:"会议材料、记录",
                        mobile:"13739050363"
                    }
                ]
            }
        },
        computed: {
            meeting(){
                return this.$store.state.meeting
            }
        },
        mounted() {
            this.$store.commit('SPIN', false)
        },
    }
</script>
<style lang="less" scoped>
    .fd-contact {
        padding:30px 20px 0;
        background: #f3f3f3;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        .box{
            width:100%;
            tr {
                line-height: 25px;
                td:not(:last-child){
                    padding-right: 32px;
                }
            }
            .title{
                font-family: PingFangSC-Regular;
                font-size: 15px;
                color: #000000;
                letter-spacing: 0;
                line-height: 33px;
            }

        }
    }

</style>
