<template>
<div class="col-sm-12">
	<steps></steps>
	<div v-if="!this.detail || isAutoPay">
		<i-dot-loading :loading="true"></i-dot-loading>
		<button type="button" class="btn btn-lg btn-default">{{$t('purchase.processingNotice')}}</button>
	</div>
	<div v-else>
		<table class="table">
			<tbody>
	            <tr v-for="order in detail.orders">
	                <td>{{order.product.name}} {{order.product.date}}</td>
	                <td>
	                	<span class="label label-price pull-right">
	                		{{order.price_total}}
	                	</span>
                	</td>
	            </tr>
			</tbody>
		</table>
		<div class="order-payment-gateway">
			<ul v-if="isFree">
				<li>
					{{$t('purchase.freeOfCharge')}}
					<div class="pull-right">
						<span class="label label-price label-price-lg">
							<del>{{detail.price_total}}</del> {{detail.real_price}}
						</span>
					</div>
				</li>
			</ul>
			<ul v-else>
				<li>
					{{$t('purchase.choosePay')}}
					<div class="pull-right">
						<span class="label label-price label-price-lg">
                            <template v-if="detail.price_total!=detail.real_price">
                                <del>{{detail.price_total}}</del> {{detail.real_price}}
                            </template>
                            <template v-else>
                                {{detail.real_price}}
                            </template>
                        </span>
					</div>
				</li>
				<li v-if="isWeixin && !_IS_('kickoff2018')" @click="choosePayment('wx_pub')">
					<div class="pull-right">
						<i-radio option="wx_pub" v-model="paymentMethod"></i-radio>
					</div>
					<div class="order-payment-method">
						<span class="icon-wechat-pay">{{$t('purchase.wechat')}}</span>
					</div>
				</li>
				<li @click="choosePayment('alipay_wap')">
					<div class="pull-right">
						<i-radio option="alipay_wap" v-model="paymentMethod"></i-radio>
					</div>
					<div class="order-payment-method">
						<span class="icon-alipay">{{$t('purchase.alipay')}}</span>
					</div>
				</li>
                <li @click="choosePayment('offline')" v-if="meeting.settings.register.pay_offline==1">
                    <div class="pull-right">
                        <i-radio option="offline" v-model="paymentMethod"></i-radio>
                    </div>
                    <div class="order-payment-method">
                        <span class="fa fa-credit-card" style="font-size:22px;margin-right:6px;color:#333"></span>{{$t('purchase.offline')}}
                    </div>
                </li>
                <li v-if="_IS_('kickoff2018') && paymentMethod=='offline'">备注：如需线下转账请联系
                    <a href="tel:18602118037">国旅焦迪 18602118037</a></li>
			</ul>
		</div>

        <p v-if="_IS_('kickoff2018')" style="color: red;margin-bottom: 0;">* 请核对您的所有行程是否有误, 订单完成后将无法修改</p>

		<div v-if="isFree">
			<i-button :on-ok="payFree" class="btn btn-primary btn-lg">{{$t('purchase.finishOrder')}}</i-button>
			<i-button :on-ok="cancelOrder" class="btn btn-default btn-lg">{{$t('purchase.cancelOrder')}}</i-button>
		</div>
		<div v-else>
			<i-button :on-ok="pay" class="btn btn-primary btn-lg">{{$t('purchase.gotoPay')}}</i-button>
			<i-button :on-ok="cancelOrder" class="btn btn-default btn-lg">{{$t('purchase.cancelOrder')}}</i-button>
		</div>

        <!--<chevrolet-pay-notice v-if="_IS_('chevrolet2017')"></chevrolet-pay-notice>-->
	</div>
</div>
</template>
<style lang="less" rel="stylesheet/less">
.order-payment-gateway {
	margin-left: -15px;
	margin-right: -15px;
	ul{
		padding-left: 20px;
		font-size: 14px;
		line-height: 20px;
		color: #777;

		li {
			padding: 15px 20px 15px 0;
			border-bottom: 1px solid #ddd;
			&:last-child{
				// border-bottom: 0 none;
			}
		}
		.order-payment-method {
			font-size: 16px;
			color: #000;
			line-height: 24px;
			margin-right: 40px;
		}
	}
	.btn-lg{
		// border-radius: 0;
	}
}
</style>
<script>
import pingpp from 'pingpp-js'

import steps from "./components/steps"
import iButton from "iButton"
import iRadio from 'iRadio'
import {iDotLoading} from "iLoading"
import {Toast} from "mint-ui"

//import chevroletPayNotice from "../home/chevrolet2017/components/pay_notice"

export default {
	components: {
	    steps, iButton, iRadio, iDotLoading,
        //chevroletPayNotice
	},
	data() {
		return {
			detail: null,
			paymentMethod: 'alipay_wap',
			isWeixin: false,
			checkLoop: true,
		}
	},
	computed: {
		isFree() {
			return this.detail && this.detail.real_price == 0
		},
		isAutoPay() {
			return this.detail && this.detail.price_total == 0
		}
	},
	created() {
		this.$store.commit('SPIN', false)
		let ua = navigator.userAgent.toLowerCase()
        if (ua.indexOf('micromessenger') > -1) {
            this.isWeixin = true
//            this.paymentMethod = 'wx_pub'
        }
		this.getDetail()
	},
	destroyed(){
		this.checkLoop = false
	},
	methods: {
		choosePayment(method) {
			this.paymentMethod = method
		},
		payFree(e) {
			let self = this

			this.$http.post('pay/charge/create', {
                id: this.detail.id,
                type: this.paymentMethod
            }).then((response) => {
            	let ret = response.body
                if (ret.err == 0) {
                    self.$router.push({name: "register_complete"})
                    return
                } else {
                	Toast(ret.msg)
                }
            }).finally(function() {
            	if (!!e) {
            		e.loading = false
            	}
            })
		},

		pay(e) {
		    if (this.paymentMethod === 'offline') {
		        return this.payFree(e)
            }

		    let self = this
			let host = 'http://' + location.host + ( this.$router.mode=='hash'? '/#' : '' )
            this.$http.post('pay/charge/create', {
                id: this.detail.id,
                type: this.paymentMethod,
                cancel_url: host + '/register/pay',
                success_url: host + '/alipay_success.htm',
            }).then((response) => {
            	let ret = response.body
                if (ret.err == 0) {
                    pingpp.createPayment(ret.res, (result, err) => {
                        console.log(result, err)
                        if (result == "success") {
                        	Toast(self.$t('purchase.paySuccess'))
						    // 只有微信公众账号 wx_pub 支付成功的结果会在这里返回，其他的支付结果都会跳转到 extra 中对应的 URL。
						} else if (result == "fail") {
						    Toast(err.msg)
						} else if (result == "cancel") {
						    // 微信公众账号支付取消支付
                            Toast(self.$t('purchase.payCancel'))
						    e.loading = false
						}
                    })
                } else {
                	Toast(ret.msg)
                	e.loading = false
                }
            })
		},
		checkIsPaid() {
			if (!this.checkLoop) {
				return
			}
			let self = this
			this.$http.post('order/get').then((response) => {
                let ret = response.body
				if (ret.err == 0) {
					if (ret.res && ret.res.is_finish == 1) {
                        self.$router.push({name: "register_complete"})
                        return
                    }
				}
				setTimeout(self.checkIsPaid, 1500)
            }, function(){
            	setTimeout(self.checkIsPaid, 1500)
            })
		},
		getDetail () {
            let self = this

            this.$http.post('order/detail').then((response) => {
                let ret = response.body
				if (ret.err == 0) {
                    // if (ret.res && ret.res.is_finish == 1) {
                    //     self.$router.push({name: "register_complete"})
                    //     return
                    // }

                    if (!ret.res) {
                    	self.$router.push({name: "home_index"})
                    	return
                    }
                    self.detail = ret.res

                    if (self.isAutoPay) {
                    	setTimeout(function() {
                    		self.payFree()
                    	}, 1000)
                    } else {
                    	self.checkIsPaid()
                    }
				}
            })
        },
        cancelOrder (e) {
            let self = this
            this.$http.post('order/cancel').then((response) =>  {
                let ret = response.body
                if (ret.err == 0) {
                    Toast(self.$t('purchase.orderCancelSuccess'))
                    this.$router.push({name: "home_index"})
                } else {
                    Toast(ret.msg)
                }
            }).finally(function() {
            	e.loading = false
            })
        },
	}
}
</script>
