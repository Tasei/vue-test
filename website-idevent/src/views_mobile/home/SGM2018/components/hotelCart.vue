<template>
    <div v-if="!isFree">
        <table class="table product-cart-table">
            <thead>
            <tr>
                <th colspan="3">{{$t('hotel.cartDetail')}}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in cartList">
                <td>{{$t('hotel.roomTypes["'+item.product.type_name+'"]')}}</td>
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

        <router-link :to="{name:'register_checkout'}" class="btn btn-lg btn-primary">下一步</router-link>
        <i-button class="btn btn-lg btn-default" :on-ok="clearCart">{{$t('clearShoppingCart')}}</i-button>
    </div>
</template>
<style>

</style>
<script>
    import iButton from "iButton"

    export default {
        components: {
            iButton,
        },
        props: {
            cartList: Array,
            totalPrice: String,
        },
        created() {
            if (this.isFree) {
                this.$router.push({name: "register_checkout"})
            }
        },
        computed: {
            isFree() {
                return this.totalPrice == 0
            },
            type() {
                return this.$route.query.type
            },
        },
        methods: {
            //清空购物车
            clearCart(e) {
                this.$http.post('shoppingCart/clearByType', {
                    type: "hotel_sgm_" + this.type,
                }).then((response) => {
                    let ret = response.body
                    if (ret.err == 0) {
                        this.$router.replace({name: "register_form"})
                        window.location.reload()
                    }
                })
            },
        }
    }
</script>
