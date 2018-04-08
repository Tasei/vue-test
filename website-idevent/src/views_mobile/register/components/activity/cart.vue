<template>
<div>
	<table class="table product-cart-table">
		<thead>
			<tr>
				<th colspan="3">{{$t('order.detail')}}</th>
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

	<next-step></next-step>
	<i-button class="btn btn-lg btn-default" :on-ok="clearCart">{{$t('clearShoppingCart')}}</i-button>
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
    mounted() {
        $(".i-dot-steps-title").html('预订信息');
    },
	methods: {
        //清空购物车
        clearCart (e) {
            this.$http.post('shoppingCart/clearByType', {
                type: "hotel",
            }).then((response) => {
                let ret = response.body
                if (ret.err === 0) {
                    this.$router.push({name:"register_form"})
//                    window.location.reload()
//                    this.$router.push({name: "register_activity"})

                    if (this.$route.name === 'register_activity2') {

                    } else {

                    }
                }
            })
        },
	}
}
</script>
