<template>
    <div v-if="goods">
        <div class="banner" :style="{ backgroundImage: 'url(' + goods.cover +')'}"></div>
        <div class="title-wrapper mod">
            <h1 class="text-dark">{{goods.name}}</h1>
            <!-- <div class="price">
                ￥{{product.price}} <span>起</span></div> -->
        </div>
        <!--<div class="mod cost">-->
            <!--<h2>费用说明</h2>-->
            <!-- <ol>
                <li>使馆价325元+服务费128元</li>
                <li>请确保提前9个工作日递交相关材料</li>
            </ol> -->
            <!--<div class="md" v-html="formatText(goods.introduce)"></div>-->
        <!--</div>-->
        <div class="mod book">
            <h2>预定须知</h2>
            <div class="md" v-html="formatText(goods.context)"></div>
        </div>

        <div class="mod buy-wrapper">
            <a href="javascript:;" class="btn btn-primary bt-block btn-lg padding-lg" @click="openPop">
                加入购物车
            </a>
            <!--<router-link class="btn btn-outline btn-lg btn-primary" :to="{name:'register_form'}">暂不购买</router-link>-->
        </div>

        <mt-popup
            v-model="popupVisible"
            position="bottom">
            <div>
                <span class="mint-datetime-action mint-datetime-cancel text-gray" @click="popupVisible = false">取消</span>
                <span class="mint-datetime-action mint-datetime-confirm text-primary" @click="addCart">确定</span>
            </div>
            <div style="clear:both"></div>
            <div class="schedule">
                <ul v-if="goods.list.length > 0">
                    <li v-for="p of goods.list" class="clearfix text-dark">
                        <span class="pull-left">份数</span>
                        <span class="pull-right">
                            <span class="label label-price">{{p.product.price}}</span>
                            <span class="count">
                                <!--<i @click="minusCount" class="text-primary icon icon-minuscircleo"></i>-->
                                &nbsp;&nbsp;× {{count}}&nbsp;&nbsp;
                                <!--<i @click="plusCount" class="text-primary icon icon-pluscircle"></i>-->
                            </span>
                        </span>
                    </li>
                </ul>
            </div>
            <br/><br/>
        </mt-popup>
    </div>
</template>

<script>
import iButton from "iButton"
import { Indicator, Toast } from "mint-ui"
import nextStep from "../../../register/components/nextStep"
import marked from 'marked'
export default{
    props: {
        goods: Object
    },

    data() {
        return {
            popupVisible: false,
            count: 1,
        }
	},
	components: {
		iButton, nextStep
	},
	methods: {
		openPop() {
		    this.popupVisible = true
		},
		closePop() {
		    this.popupVisible = false
		},
		updateSelected(cur) {
		    this.selectedDate = cur.date;
		},
		addCart() {
		    if(this.goods.list.length <= 0) {
		        Toast('暂无库存')
		        return false
		    }

		    let id = this.goods.list[0].product.id
            Indicator.open()
            let self = this
			this.$http.post('shoppingCart/addItems', {
                type: 'goods',
                ids: [id],
                quantity: this.count
            }).then((response) => {
                Indicator.close()
                if (response.body.err == 0) {
                    this.getCartList()
                } else {
                    Toast(response.body.msg)
                }
            })
		},

		//获取购物车列表
        getCartList(){
            Indicator.open()
            this.$http.post('shoppingCart/getList', {
                type: "goods",
            }).then(function (response) {
                Indicator.close()
                let ret = response.body
                if (ret.err == 0) {
                    this.$parent.cartList = ret.res.list
                    this.$parent.totalPrice = ret.res.total_price
                    this.$parent.step = "goodsCart"
                }
            })
        },

        minusCount() {
            if (this.count <= 1) {
                this.count = 1
            } else {
                this.count -= 1
            }
        },
        plusCount() {
            this.count += 1
        },
        formatText(text) {
            return marked(text)
        }
	}
}
</script>

<style lang="less" scoped>
    @transparent-border: 5px solid transparent;

    ol {
        list-style-position: inside;
        margin-top: 10px;
    }
    .banner {
        width: 100%;
        height: 35vh;
        background: #ddd;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
    }
    .title-wrapper {
        h1 {
            font-size: 22px;
            margin: 0;
        }
        .price {
            margin-top: 10px;
            font-size: 18px;
            color: #f89649;
            span {
                font-size: 12px;
                color: #999;
            }
        }
    }
    .mod {
        padding: 15px 20px;
        border-bottom: 1px solid #ddd;
        font-size: 14px;
        color: #666;
        h2 {
            font-size: 17px;
            color: #333;
            margin: 0 0 10px 0;
            &::before {
                content: "";
                display: inline-block;
                width: 0;
                height: 0;
                border-left: 5px solid #00549c;
                border-bottom: @transparent-border;
                border-right: @transparent-border;
                border-top: @transparent-border;
            }
        }
        &:last-child {
            border: 0 none;
        }
        &.buy-wrapper {
            border: 0 none;
        }
    }
    .Btn {
        text-align: center;
        padding: 15px 0;
        border-radius: 3px;
        &.buy {
            background: #00549c;
            color: #fff;
            font-weight: bold;
        }
        &.cancle {
            color: #999;
        }
    }
    .alertbox {
        position: fixed;
        z-index: 2;
        width: 100%;
        height: 100%;
        top: 0;
        bottom: 0;
        background: rgba(0,0,0, 0.5);
    }
    .mint-popup.mint-popup-bottom {
        width: 100%;
    }

    .schedule {
        li {
            padding: 20px;
            span {
                display: inline-block;
                font-size: 16px;
                position: relative;
            }
            .count {
                min-width: 80px;
                text-align: center;
                margin-left: 20px;
            }
            .icon {
                font-size: 22px;
                line-height: 1;
                position: absolute;
                top: -1px;
                &.icon-minuscircleo {
                    left: 0;
                }
                &.icon-pluscircle {
                    right: 0;
                }
            }
        }
    }

</style>

