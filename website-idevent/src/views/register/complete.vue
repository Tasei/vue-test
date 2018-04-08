<template>
    <div>
        <steps></steps>
        <hr>
        <h4 class="text-dark font-bold">订单详情</h4>
        <table class="table bordered">
            <thead>
            <tr>
                <th>商品</th>
                <th>数量</th>
                <th>单价</th>
                <th>总价</th>
            </tr>
            </thead>
            <tbody v-if="detail">
            <tr v-for="order in detail.orders">
                <td>{{order.product.name}}</td>
                <td>{{order.quantity}}</td>
                <td class="text-warning">¥{{order.product.price}}</td>
                <td class="text-warning">¥{{order.price_total}}</td>
            </tr>
            </tbody>
        </table>
        <div class="pull-left description">
            <p><small class="text-gray">订单号：{{detail ? detail.order_num : ''}}</small></p>
            <p><small class="text-gray">订单时间：{{detail ? detail.created_at: ''}}</small></p>
            <p><small class="text-gray">拼房邀请码：<a>8909899</a></small></p>
            <p><small class="text-dark">退改说明 <i class="dropdown-icon" :class="{'rotate180': dropdown}" @click="toggleDropdown"></i></small></p>
            <div class="detail" :class="{'in': dropdown}">
                <p><small class="text-gray">已支付商品订单不可部分更改；</small></p>
                <p><small class="text-gray">酒店/线路如有变更，恕不另行通知；</small></p>
                <p><small class="text-gray">会议开始前30日内取消订单收取订单总价的20%违约金；</small></p>
                <p><small class="text-gray">会议开始前10日内取消订单收取订单总价80%违约金。</small></p>
            </div>
        </div>
        <h5 class="price text-right text-dark"><span>总价：</span><span class="text-dark">¥{{detail ? detail.price_total: '0.00'}}</span></h5>
        <h5 class="price text-right text-dark"><span>总附加手续费：</span><span class="text-dark">¥0.00</span></h5>
        <h5 class="price text-right text-dark"><span>总支付宝已付款：</span><span class="font-bold text-warning font20">¥ {{detail ? detail.price_total: '0.00'}}</span></h5>
    </div>
</template>
<script>
    import iStep from 'iStep'
    import steps from "components/steps"
    import nextStep from "components/nextStep"
    export default{
        data(){
            return{
                dropdown: false,
                detail: null
            }
        },

        created () {
            this.getDetail()
        },

        methods:{
            toggleDropdown () {
                this.dropdown = !this.dropdown
            },

            getDetail () {
                let self = this
                this.$http.post('order/detail').then((response) => {
                    if (response.body.err == 0) {
                        this.detail = response.body.res
                    }
                })
            }
        },

        components: {iStep, steps, nextStep}
    }
</script>
<style lang="less" scoped>
    h5.price {
        span {
            &.font20 {
                font-size: 20px;
            }
            display: inline-block;
            letter-spacing: 1px;
            &:first-child {
                width: auto;
            }
            &:last-child {
                min-width: 78px;
            }
        }
    }

    .description {
        padding-top: 20px;
        p {
            margin-bottom: 0;
            .text-dark {
                display: inline-block;
            }
        }

        .detail {
            display: none;
            background: #f9f9f9;
            padding: 14px;
            &.in {
                display: block;
            }
        }
    }

    .dropdown-icon {
        float: right;
    }
</style>
