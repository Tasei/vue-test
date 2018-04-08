<template>
<div>
    <div class="fd-common-question">
        <!-- start -->
        <div class="common-invite-code">
            <h4 class="hotel-title font-bold">
                <i class="fa fa-caret-right fa-lg caret-right" aria-hidden="true"></i>
                邀请码
            </h4>
            <h5 class="text-dark">1. 如何获得邀请码？</h5>
            <p>
                您的邀请码为您的经销商代码
            </p>
        </div>


        <div class="common-invite-code">
            <h4 class="hotel-title font-bold">
                <i class="fa fa-caret-right fa-lg caret-right" aria-hidden="true"></i>
                注册和修改
            </h4>
            <h5 class="text-dark">2.报名参加此次会议的最后期限?</h5>
            <p>
                报名参加此次会议的最后期限为<span class="text-primary">2018年1月21日星期日18点</span>。
            </p>
            <!--<h5 class="text-dark">3.是否可以修改或更新已注册信息? </h5>-->
            <!--<p>-->
                <!--“保存&预览”后，您仍可随时输入您的邀请验证码再次登录在线注册网页，进行相关信息修改或更新；但请在<span class="text-primary">2018年1月20日星期六18点</span>前注册网页关闭前登录，此日后修改或更新的任何信息无效。-->
            <!--</p>-->

            <h5 class="text-dark">3.航班未订前是否可以在线注册报名?</h5>
            <p>
                登记注册时如果您还没有确定具体航班，您可以先完成其它注册信息的填写，并请在<span class="text-primary">2018年1月26日星期五18点</span>前补齐相关航班信息。
            </p>
        </div>

        <div class="common-invite-code">
            <h4 class="hotel-title font-bold">
                <i class="fa fa-caret-right fa-lg caret-right" aria-hidden="true"></i>
                费用支付
            </h4>
            <h5 class="text-dark">4.此次会议活动需交纳哪些费用? </h5>
            <p>
                此次会议不收取注册费和会务费，与会代表仅须自订往返机票，自理2月2日晚餐及个人杂费。
            </p>
            <h5 class="text-dark">5.如何订房? </h5>
            <p>
                若预定酒店，请点击“报名注册”，按要求填写相关信息，在预定完成后，我们会为您预留房间。请务必在<span class="text-primary">1月21日18点</span>前完成注册，否则您预订的房间将不予保留。注册完成后，如有用房变更，请在<span class="text-primary">1月21日18点</span>前联系会务组客服，否则由于房间更改及取消造成的损失将由您自行承担。
            </p>
        </div>

    </div>
</div>
</template>
<script>
export default{
    mounted() {
        this.$store.commit('SPIN', false)
    }
}
</script>
<style lang="less" scoped rel="stylesheet/less">
    .fd-common-question{
        background: #f3f3f3;
        padding-bottom: 10px;
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
