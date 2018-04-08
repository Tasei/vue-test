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

	<i-button class="btn btn-lg btn-primary btn-outline" :on-ok="continueCart">下一步</i-button>
    <i-button class="btn btn-lg btn-default" :on-ok="clearCart">重新选择</i-button>
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
    computed: {
	    isOver() {
	        console.log(this.$parent.groupType)
	        return this.$parent.groupType === undefined
        }
    },
    mounted() {
        $(".i-dot-steps-title").html('预订信息');
    },
	methods: {
        //清空购物车
        clearCart (e) {
            this.$http.post('shoppingCart/clearByType', {
                type: "goods",
            }).then((response) => {
                let ret = response.body
                if (ret.err == 0) {
                    this.$router.push({name:"register_form"})
//                    window.location.reload()
                }
            })
        },
        continueCart(e) {
            this.$parent.subStep++
            this.$parent.step = 'goodsList'
            e.loading = false
        }
	}
}
</script>
