<template>
    <div class="col-sm-12">
        <steps></steps>

        <i-dot-loading :loading="loading"></i-dot-loading>

        <!-- <hotel-share-guide v-if="step=='guide'"></hotel-share-guide> -->
        <hotel-list v-if="step=='hotelList'"></hotel-list>
        <hotel-buy  :hotel="hotel" v-if="step=='hotelBuy'"></hotel-buy>
        <hotel-cart :cartList="cartList" :totalPrice="totalPrice" v-if="step=='hotelCart'"></hotel-cart>
    </div>
</template>
<script>
    import steps from "./components/steps"
    import nextStep from "./components/nextStep"

    // import hotelShareGuide from "./components/hotelShareGuide"
    import hotelList from "./components/activity/list"
    import hotelBuy from "./components/activity/details"
    import hotelCart from "./components/activity/cart"

    import {iDotLoading} from "iLoading"

    export default {
        components: {
            steps, nextStep,
            hotelList, hotelBuy, hotelCart,
            iDotLoading,
        },
        data() {
            return {
                step: "loading",
                hotel: null,
                cartList: [],
                totalPrice: '',
            }
        },
        computed: {
            loading() {
                return (this.step == "loading")
            }
        },
        created() {
            this.getCartList()
        },
        watch: {
            '$route'(to, from) {
                this.getCartList()
            }
        },
        methods: {
            //获取购物车列表
            getCartList() {
                this.$http.post('shoppingCart/getList', {
                    type: "hotel",
                }).then((response) => {
                    let ret = response.body
                    if (ret.err === 0) {
                        this.cartList = ret.res.list
                        this.totalPrice = ret.res.total_price

                        console.log(this.$route.name)
                        let limit = (this.$route.name === 'register_activity2') ? 2 : 1

                        if (this.cartList.length < limit) {
                            this.step = 'hotelList'
                        } else {
                            this.step = "hotelCart"
                            this.$store.commit('SPIN', false)
                        }
                    }
                })
            },
        }

    }
</script>
