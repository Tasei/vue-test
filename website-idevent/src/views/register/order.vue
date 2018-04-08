<template>
    <div>
        <steps></steps>
        <hr/>
        <h4 class="text-dark font-bold">订单详情<router-link to="/register/form" class="pull-right">返回修改</router-link></h4>
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
            <tbody>
                <tr v-for="p in list">
                    <td>{{p.product.name}}</td>
                    <td>{{p.product.date}}</td>
                    <td>
                        <span v-if="p.product.remain <= 0" class="text-danger">库存不足</span>
                        <span v-else>{{p.quantity}}</span>
                    </td>
                    <td class="text-warning">¥{{p.product.price}}<span v-if="p.product.category==7">(拼房价)</span></td>
                    <td class="text-warning">¥{{p.total_price}}</td>
                </tr>
            </tbody>
        </table>
        <p class="help-text"><small class="text-gray">*以上价格仅供参考，以实际下单生成支付金额为准</small></p>
        <h5 class="text-right text-dark">共计：<span class="font-bold text-warning" style="font-size: 20px">¥{{total_price}}</span></h5>
        <hr/>
        <i-button :on-ok="save" type="button" class="btn btn-primary btn-lg padding-lg">{{list.length > 0 ? '去结算' : '完成'}}</i-button>
    </div>
</template>
<script>
    import iStep from 'iStep'
    import iButton from '../../../components/button'
    import steps from "components/steps"
    export default{
        data(){
            return {
                total_price: 0.00,
                list: []
            }
        },
        created () {
            this.getCartList()
        },
        components:{
            iStep, iButton, steps,
        },

        methods: {
            save (e) {
                let self = this
                this.$http.post('order/checkout').then((response) => {
                    if (response.body.err == 0) {
                        self.$router.push('/register/pay')
                    } else {
                        e.loading = false
                    }
                })

                event.preventDefault()
            },

            getCartList () {
                let self = this
                this.$http.post('shoppingCart/getList').then((response) => {
                    let ret = response.body
                    if (ret.err == 0) {
                        self.list = ret.res.list
                        self.total_price = ret.res.total_price
                    }
                })
            }
        }
    }
</script>
