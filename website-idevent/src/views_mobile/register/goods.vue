<template>
    <div v-if="_IS_('kickoff2018')">
        <goods-radio-meter></goods-radio-meter>
    </div>
    <div v-else>
        <steps></steps>

        <i-dot-loading :loading="loading"></i-dot-loading>
        <goods-list :goodsList="goodsList" v-if="step == 'goodsList'"></goods-list>
        <goods-detail :goods="goods" v-if="step == 'goodsDetail'"></goods-detail>
        <goods-cart :cartList="cartList" :totalPrice="totalPrice" v-if="step=='goodsCart'"></goods-cart>

    </div>
</template>

<script>
import steps from "./components/steps"
import nextStep from "./components/nextStep"
import {iDotLoading} from "iLoading"
import goodsList from "./components/goods/list"
import goodsDetail from "./components/goods/detail"
import goodsCart from "./components/goods/cart"
import goodsRadioMeter from "../custom/radioMeter/goods.vue"

export default{
    data(){
        return {
            step: "loading",
            goodsList: [],
            cartList: [],
            totalPrice: '',
            goods: null,
        }
    },
    components:{
        steps, nextStep, iDotLoading,
        goodsList, goodsDetail, goodsCart,
        goodsRadioMeter
    },
    computed: {
        loading() {
            return (this.step == "loading")
        }
    },
    created() {
        if (this._IS_('kickoff2018')) {
            return
        }

        this.getGoodsList()
    },
    methods: {
        getGoodsList() {
            let self = this;
            this.$http.post('product/general/showGeneralProductList', {
                meeting_id: this.meeting.id,
            }).then((response) => {
                if(response.body.err === 0) {
                    self.step = 'goodsList'
                    self.goodsList = response.body.res.list;
                    self.getCartList()
                }
            })

        },
        //获取购物车列表
        getCartList(){
            this.$http.post('shoppingCart/getList', {
                type: "goods",
            }).then(function (response) {
                let ret = response.body
                if (ret.err == 0) {
                    this.cartList = ret.res.list
                    this.totalPrice = ret.res.total_price

                    if (this.cartList.length == 0) {
                        //this.getGoodsList()
                    } else {
                        this.step = "goodsCart"
                    }
                }
            }).then(() => {
                this.$store.commit('SPIN')
            })
        },
    }
}
</script>
