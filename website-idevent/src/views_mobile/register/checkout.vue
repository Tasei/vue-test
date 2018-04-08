<template>
    <div class="col-sm-12">
        <steps></steps>

        <template v-if="autoCheckout">
            <i-dot-loading :loading="true"></i-dot-loading>
            <button type="button" class="btn btn-lg btn-default">{{$t('purchase.processingNotice')}}</button>
        </template>

        <template v-else>
            <table class="table product-cart-table">
                <thead>
                <tr>
                    <th colspan="3">{{$t('purchase.orderOverview')}}</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in cartList">
                    <td>{{item.product.type_name}}</td>
                    <td>{{item.product.date}}</td>
                    <td class="text-right">
                        <span class="label label-price">{{item.total_price}}</span>
                    </td>
                </tr>
                </tbody>
                <tfoot>
                <tr>
                    <td></td>
                    <td></td>
                    <td class="text-right">
                        <span class="label label-price label-price-lg">{{totalPrice}}</span>
                    </td>
                </tr>
                </tfoot>

            </table>

            <i-button :on-ok="checkout" class="btn btn-primary btn-lg">{{cartList.length > 0 ? $t('nextStep') :
                $t('done')}}
            </i-button>
            <i-button class="btn btn-lg btn-default" :on-ok="clearCart">{{$t('clearShoppingCart')}}</i-button>
        </template>
    </div>
</template>
<script>
    import steps from "./components/steps"
    import iButton from "iButton"
    import {MessageBox} from "mint-ui"
    import {iDotLoading} from "iLoading"

    export default {
        data(){
            return {
                cartList: [],
                totalPrice: '',
            }
        },
        components: {
            steps,
            iButton,
            iDotLoading,
        },
        computed: {
            steps() {
                return this.$store.state.steps.list
            },
            autoCheckout() {
                let all_buy_steps = [
                    'register_hotel',
                    'register_activity',
                    'register_restaurant',
                    'register_flight'
                ];
                let self = this
                let buy_steps = all_buy_steps.filter(function (n) {
                    return self.steps.indexOf(n) != -1;
                });
                return buy_steps.length < 2
            }
        },
        created() {
            this.$store.commit('SPIN', false)

            if (this.autoCheckout) {
                let self = this
                setTimeout(function () {
                    self.checkout()
                }, 1000)
            } else {
                this.getCartList()
            }
        },
        methods: {
            //生成订单
            checkout (e) {
                let self = this
                this.$http.post('order/checkout')
                    .then((response) => {
                        let ret = response.body
                        if (ret.err == 0) {
                            self.$router.push({name: "register_pay"})
                        } else {
                            MessageBox({
                                title: self.$t('notice'),
                                message: ret.msg,
                                confirmButtonText: self.$t('goBack'),
                            }).then(action => {
                                self.$router.push({name: "register_hotel"})
                            });
                        }
                    }).finally(function () {
                    if (!!e) {
                        e.loading = false
                    }
                })
            },
            //获取购物车列表
            getCartList(){
                this.$http.post('shoppingCart/getList', {
                    type: "hotel",
                }).then(function (response) {
                    let ret = response.body
                    if (ret.err == 0) {
                        this.cartList = ret.res.list
                        this.totalPrice = ret.res.total_price
                    }
                })
            },
            //清空购物车
            clearCart (e) {
                this.$http.post('shoppingCart/clearByType', {
                    type: "hotel",
                }).then((response) => {
                    let ret = response.body
                    if (ret.err == 0) {
                        this.$router.push({name: "register_hotel"})
                    }
                })
            },
        }
    }
</script>
<style lang="less">

</style>
