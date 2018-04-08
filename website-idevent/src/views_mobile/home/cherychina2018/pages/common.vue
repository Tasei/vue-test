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
            <!--<h5 class="text-dark">{{$t('list.1.title')}}</h5>-->
            <!--<p v-html="$t('list.1.content')"></p>-->
        </div>

        <div class="common-invite-code">
            <h4 class="hotel-title font-bold">
                <i class="fa fa-caret-right fa-lg caret-right" aria-hidden="true"></i>
                {{$t('heading.1')}}
            </h4>
            <h5 class="text-dark">{{$t('list.1.title')}}</h5>
            <p v-html="$t('list.1.content')"></p>

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
        zh: {
            heading: [
                "参会二维码", "注册和修改"
            ],
            list:[
//                {
//                    title: "1. 如何获取验证码？",
//                    content: '您的手机号即为您的邀请码，如有问题，请及时联系会务组热线获知。'
//                },
                {
                    title: "1. 二维码的用途？",
                    content: '在注册完成后，将自动生成个人二维码（可在菜单中最右边我的选项中查看）。二维码仅供此次大会使用，在酒店签到以及大会签到时均需出示二维码。验证码仅限此次大会使用，在乘坐接送大巴、在酒店签到以及大会签到时均需出示二维码。'
                },
                {
                    title: "1. 如何进行注册？",
                    content: '参会者可通过微信公众号进行注册。关注大会公众号，点击注册后：输入手机号获取验证码，依次填写个人信息、入住酒店需求、接送机需求。届时会务组会为参会人安排相关行程。如有相关问题可咨询会务组热线： 021-61425817/021-61425809 /021-61425836/021-61425830(2月22日-3月10日工作时间: 09:00-18:00)'
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
