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
                您的邀请码将在<span class="text-primary">2017年11月7日</span>通过短信发送的形式提供给您或您指定的联系人手机上，请妥善保管邀请码。
            </p>
            <h5 class="text-dark">2. 如果我忘记邀请码怎么办？</h5>
            <p>
                请及时致电雪佛兰会务组客服，取得邀请码。
            </p>
        </div>


        <div class="common-invite-code">
            <h4 class="hotel-title font-bold">
                <i class="fa fa-caret-right fa-lg caret-right" aria-hidden="true"></i>
                注册和修改
            </h4>
            <h5 class="text-dark">3. 报名参加此次会议的最后期限？</h5>
            <p>
                报名参加此次会议的最后期限为<span class="text-primary">2017年11月9日星期四</span>，此日后提交的任何信息系统将自动设定为无效信息。
            </p>
            <h5 class="text-dark">4. 是否可以修改或更新已注册信息？</h5>
            <p>
                “保存&预览”后，您仍可随时输入您的邀请验证码再次登录在线注册网页，进行相关信息修改或更新；但请在<span class="text-primary">2017年11月9日星期四</span>注册网页关闭前登录，此日后修改或更新的任何信息无效。
            </p>

            <h5 class="text-dark">5.航班未订前是否可以在线注册报名?</h5>
            <p>
                登记注册时如果您还没有确定具体航班，您可以先完成其它注册信息的填写，并请在<span class="text-primary">2017年11月14日星期二</span>之前补齐相关航班信息。
            </p>
        </div>

        <div class="common-invite-code">
            <h4 class="hotel-title font-bold">
                <i class="fa fa-caret-right fa-lg caret-right" aria-hidden="true"></i>
                费用支付
            </h4>
            <h5 class="text-dark">6.此次会议活动需交纳哪些费用? </h5>
            <p>
                此次会议不收取注册费和会务费，与会代表仅须自订往返机票、并支付房费押预付款和个人杂费（如迷你吧、长途电话、洗衣费、客房服务费等个人消费），注册时需预先支付酒店住宿费用预付款。如您按照预订信息入住，房费预付款将在您退房后预计7个自然日原渠道退回。如您未按照预定信息入住，房费押金将不予退回。
            </p>
            <h5 class="text-dark">7.如何订房? 怎样付房费?</h5>
            <p>
                若预定酒店，请点击“在线注册”，按要求填写相关信息，在支付完成后，我们会为您预留房间。请务必在11月9日前完成支付，否则您预订的房间将不予保留。付款完成后，如有用房变更，请在11月9日之前联系会务组客服，否则由于房间更改及取消造成的损失将由您自行承担。
            </p>

            <h5 class="text-dark">8.房间预订在线支付?</h5>
            <p>
                在您完成在线支付操作后，会务组将根据您注册时填写的信息为您预订并保留房间。如您无法在线支付，可通过其他方式进行支付。
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
