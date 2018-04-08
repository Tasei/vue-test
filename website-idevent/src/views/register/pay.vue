<template>
    <div>
        <steps></steps>
        <hr>
        <h4 class="text-dark font-bold">订单详情</h4>
        <table class="table bordered">
            <thead>
            <tr>
                <th>商品</th>
                <th>时间</th>
                <th>数量</th>
                <th>单价</th>
                <th>总价</th>
            </tr>
            </thead>
            <tbody v-if="detail">
                <tr v-for="order in detail.orders">
                    <td>{{order.product.name}}</td>
                    <td>{{order.product.date}}</td>
                    <td>{{order.quantity}}</td>
                    <td class="text-warning">¥{{order.product.price}}<span v-if="order.product.category==7">(拼房价)</span></td>
                    <td class="text-warning">¥{{order.price_total}}</td>
                </tr>
            </tbody>
        </table>
        <p class="help-text"><small class="text-gray">*以上价格仅供参考，以实际下单生成支付金额为准</small></p>
        <h5 class="text-right text-dark">
            共计：<span class="font-bold text-warning" style="font-size: 20px">¥{{detail ? detail.price_total: ''}}</span>
        </h5>
        <br>
        <h4 class="text-dark font-bold" style="margin-bottom: 20px;">支付方式</h4>
        <i-radio option="alipay" v-model="type"><i class="alipay"></i>&nbsp;支付宝</i-radio>
        <hr>
        <a target="_blank" @click="btnPay" :href="pay_url" type="button" class="btn btn-primary btn-lg padding-lg">前往支付</a>
        <i-button :on-ok="payCancel" style="margin-left: 20px;" type="button" class="btn btn-primary btn-outline btn-lg padding-lg">取消订单</i-button>
    </div>
</template>
<script>
    import iRadio from '../../../components/radio'
    import iButton from '../../../components/button'
    import iStep from 'iStep'
    import steps from "components/steps"
    import queryString from 'query-string'
    import iMessage from 'iMessage'

    export default{
        data(){
            return {
                detail: null,
                type: 'alipay',
                pay_url: 'javascript:;',
            }
        },
        components:{
            iRadio, iStep, iButton, steps
        },

        created () {
            this.getDetail()
        },
        methods: {
            getDetail () {
                let self = this
                let host = this.$router.mode=='hash'? '/#' : ''
                this.$http.post('order/detail').then((response) => {
                    let res = response.body.res
                    if (response.body.err == 0 && res) {
                        self.pay_url = host + '/register/pay/redirect?id=' + res.id + '&type=' + self.type
                        if (res && res.is_finish == 1) {
                            self.$router.push('/register/complete')
                        }
                        this.detail = res
                    } else {
                        self.$router.push('/register/form')
                    }
                })
            },

            payCancel (e) {
                let self = this
                this.$http.post('order/cancel').then((response) =>  {
                    console.log(response)
                    let ret = response.body
                    if (ret.err == 0) {
                        //this.$router.push('/register/form')
                        window.location.reload()
                    } else {
                        e.loading = false
                        iMessage.error(ret.msg)
                    }
                })
            },

            btnPay () {
                let self = this
                iMessage.open({
                    title: '支付状态',
                    content: '请耐心等待支付完成',
                    type: 'info',
                    close: true,
                    duration: 0,
                    position: 'center',
                    okText: '支付已完成',
                    onOk: () => {
                        window.location.reload()
                    },
                    closeText: '支付遇到问题',
                    onClose: () => {
                        iMessage.info('请拨打电话021-61425809')
                    }
                })

                this.checkPaySuccess()

            },

            checkPaySuccess(){
                let self = this
                this.$http.post('order/detail').then(function (response) {
                    let ret = response.body
                    if (ret.err == 0) {
                        if (ret.res.is_finish == 1) {
                            window.location.reload()
                        }
                    }

                    setTimeout(self.checkPaySuccess, 2000);
                })
            }
        }
    }
</script>
<style lang="less">
    .alipay {
        width: 24px;
        height: 24px;
        background: url("../../assets/images/alipay@2x.png") no-repeat center;
        background-size: 24px;
        float: left;
        margin: 0 5px;
        display: inline-block;
    }
</style>
