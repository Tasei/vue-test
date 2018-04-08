<template>
<div class="col-sm-12">
	<table class="table product-cart-table">
		<thead>
			<tr>
				<th colspan="3">预订商品和价格</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="item in cartList">
				<td>{{item.product.name}}</td>
				<td>{{item.quantity}}</td>
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

	<next-step></next-step>
	<i-button class="btn btn-lg btn-primary btn-outline" :on-ok="continueCart">继续选择</i-button>
    <i-button class="btn btn-lg btn-default" :on-ok="clearCart">清空购物车</i-button>
</div>
</template>
<style>

</style>
<script>
import iButton from "iButton"
import nextStep from "../nextStep"
export default {
	components: {
		iButton,
		nextStep,
	},
	props: {
		cartList: Array,
		totalPrice: String,
	},
	methods: {
        //清空购物车
        clearCart (e) {
            this.$http.post('shoppingCart/clearByType', {
                type: "goods",
            }).then((response) => {
                let ret = response.body
                if (ret.err == 0) {
                    this.$router.replace({name:"register_form"})
                    window.location.reload()
                }
            })
        },
        continueCart(e) {
            this.$parent.step = 'goodsList'
            e.loading = false
        }
	}
}
</script>
