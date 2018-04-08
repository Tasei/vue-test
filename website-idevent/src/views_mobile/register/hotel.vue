<template>
<div class="col-sm-12">
	<steps></steps>

	<i-dot-loading :loading="loading"></i-dot-loading>
    <!--以下一行专为凯迪拉克的董事长做的提示-->
    <!--<div v-if="this.user.code.endsWith('#1')">建议您入住深圳东海朗廷酒店</div>-->
	<!-- <hotel-share-guide v-if="step=='guide'"></hotel-share-guide> -->
	<hotel-entry :isShare="isShare" v-if="step=='entry'"></hotel-entry>
	<hotel-list :isShare="isShare" :hotelList="hotelList" v-if="step=='hotelList'"></hotel-list>
	<hotel-buy :isShare="isShare" :hotel="hotel" v-if="step=='hotelBuy'"></hotel-buy>
	<hotel-cart :cartList="cartList" :totalPrice="totalPrice" v-if="step=='hotelCart'"></hotel-cart>
</div>
</template>
<script>
import steps from "./components/steps"
import nextStep from "./components/nextStep"

import hotelEntry from "./components/hotelEntry"
// import hotelShareGuide from "./components/hotelShareGuide"
import hotelList from "./components/hotelList"
import hotelBuy from "./components/hotelBuy"
import hotelCart from "./components/hotelCart"

import {iDotLoading} from "iLoading"

export default {
	components: {
		steps, nextStep,
		hotelEntry,
		// hotelShareGuide,
		hotelList, hotelBuy, hotelCart,
		iDotLoading,
	},
	data() {
		return {
			step: "loading",
			hotelList: [],
			hotel: null,
			cartList: [],
			totalPrice: '',
			userParams: {},
			isShare: null,
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
	methods:{
		//获取用户参数
		getUserParams() {
			this.$http.post('hotel/getUserParams')
				.then(function(response){
					let ret = response.body
	                if (ret.err == 0) {
	                	this.userParams = ret.res
	                	let chooseShareMode = false
	                	if (this.userParams.allow_share.indexOf("0") > -1) {
	                		this.isShare = false
	                	}
	                	if (this.userParams.allow_share.indexOf("2") > -1) {
	                		this.isShare = true
	                	}
	                	if (this.userParams.allow_share.indexOf("1") > -1) {
							chooseShareMode = true
							this.isShare = true
						}
						if (this.userParams.allow_share.length > 1){
							chooseShareMode = true
						}

						this.step = chooseShareMode ? 'guide' : 'entry'


						this.step = 'entry'
						this.isShare = chooseShareMode

						this.$store.commit('SPIN', false)
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

                    if (this.cartList.length == 0) {
                    	this.getUserParams()
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
