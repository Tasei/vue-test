<template>
    <div class="fd-contact">
        <!--<div class="hotel-contact mb10">-->
        <!--<h5 class="">客服热线：</h5>-->
        <!--<p>-->
        <!--<a href="tel:4008888888">-->
        <!--<i class="fa fa-phone fd-phone"></i>4008888888-->
        <!--<i class="fa fa-angle-right fd-right"></i>-->
        <!--</a>-->
        <!--</p>-->
        <!--</div>-->
        <!--<div class="hotel-contact mb10">-->
        <!--<p class="line-height30"><span class="contact-title">地址:</span>中国 上海市 普陀区 江宁路1306弄7号富丽大厦 2507室</p>-->
        <!--<p class="line-height30"><span class="contact-title">邮编:</span>200000</p>-->
        <!--<p class="line-height30"><span class="contact-title">邮箱:</span><a href="mailto:Lizhen@idevent.com ">Lizhen@idevent.com </a></p>-->
        <!--</div>-->
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
