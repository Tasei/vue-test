<template>
<div>
    <div class="bg"></div>
    <div class="fd-common-question">
        <!-- start -->
        <div class="common-invite-code">
            <h4 class="hotel-title font-bold">
                <i class="fa fa-caret-right fa-lg caret-right" aria-hidden="true"></i>
                {{$t('heading.0')}}
            </h4>
            <h5 class="text-dark">{{$t('list.0.title')}}</h5>
            <p v-html="$t('list.0.content')"></p>
            <h5 class="text-dark">{{$t('list.1.title')}}</h5>
            <p v-html="$t('list.1.content')"></p>
        </div>

        <div class="common-invite-code">
            <h4 class="hotel-title font-bold">
                <i class="fa fa-caret-right fa-lg caret-right" aria-hidden="true"></i>
                {{$t('heading.1')}}
            </h4>
            <h5 class="text-dark">{{$t('list.2.title')}}</h5>
            <!--<p v-html="$t('list.2.content')"></p>-->
            <h5 class="text-dark">{{$t('list.3.title')}}</h5>
            <p v-html="$t('list.3.content')"></p>
        </div>
    </div>
</div>
</template>
<script>
export default{
    mounted() {
        this.$store.commit('SPIN', false)
    },
    locales: {
        en: {
            heading: [
                "Invitation Code", "Registration and Change"
            ],
            list:[
                {
                    title: "1. How to get the supplier invitation code?",
                    content: 'Your invitation code will be sent to your Email-box from designated Email address. The invitation code is the key voucher to participate. Please take good care of it.'
                },
                {
                    title: "2. What if I forgot my invitation code? ",
                    content: 'Please contact Chery Jaguar Land Rover in a timely manner to obtain a new code. Ms. Wang: <a href="tel:13262830662">13262830662</a>'
                },
                {
                    title: "1. Due to the shortage of hotel inventory, please book in time.",
//                    content: 'The hotel reservation deadline is 00:00, February 26th ,2018'
                },
                {
                    title: "2. Can I modify or update my reservation information?",
                    content: 'You are free to enter the invitation code to log in and modify or update the information after the reservation'
                },
            ]
        },
        zh: {
            heading: [
                "邀请码", "注册和修改"
            ],
            list:[
                {
                    title: "1. 如何获得供应商邀请码？",
                    content: '您的邀请码将由指定邮箱发送的形式发到您的邮箱，邀请码是参会重要凭证，请妥善保管'
                },
                {
                    title: "2. 如果我忘记供应商代码怎么办？",
                    content: '请及时致电奇瑞捷豹路虎路虎供应商大会会务组，取得供应商代码。<br/>李女士：<a href="tel:18640229498">18640229498</a>'
                },
                {
                    title: "1. 酒店房间资源紧缺，请及时预定",
//                    content: ''
                },
                {
                    title: "2. 是否可以修改或更新预订信息？",
                    content: '预定完成后，您仍然随时可以输入邀请码再次登陆，进行相关信息的修改'
                },
            ]
        }
    }
}
</script>
<style lang="less" scoped rel="stylesheet/less">
    .bg {
        background: url("../../../../assets/images/mobile/shedule_bg.png") top repeat-y;
        background-size: 100% auto;
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom: 0;
        z-index: -1;
    }
    .fd-common-question{
        background: transparent;
        padding-bottom: 10px;
        min-height: 100vh;
        .common-invite-code{
            padding: 15px;
            background: #fff;
            margin-bottom: 10px;
            .hotel-title{
                color: #333;
                font-size: 17px;
                .caret-right{
                    padding-right: 7px;
                    color: #00549C;
                    font-size: 1em;
                    vertical-align: -5%;
                }
            }
            h5{
                font-family:PingFang-SC-Medium;
                font-weight: bold;
                margin-top: 20px;
            }
        }
    }

</style>
