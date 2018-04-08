<template>
    <div>
        <steps></steps>
        <i-dot-loading :loading="loading"></i-dot-loading>

        <group-picker v-if="step == 'picker'" :groups="groups"></group-picker>
        <goods-list :goodsList="filteredGoodsList" :helpText="helpText" v-if="step == 'goodsList'"></goods-list>
        <goods-detail :goods="goods" v-if="step == 'goodsDetail'"></goods-detail>
        <goods-cart :cartList="cartList" :totalPrice="totalPrice" v-if="step=='goodsCart'"></goods-cart>

    </div>
</template>

<script>
    import steps from "../../register/components/steps"
    import nextStep from "../../register/components/nextStep"
    import {iDotLoading} from "iLoading"
    import goodsList from "./components/list"
    import goodsDetail from "./components/detail"
    import goodsCart from "./components/cart"

    import groupPicker from "./components/groupPicker.vue"

    export default {
        data() {
            return {
                step: "loading",
                goodsList: [],
                cartList: [],
                totalPrice: '',
                goods: null,
                group: null,
                subStep: 0,
                helpText: ''
            }
        },
        components: {
            steps, nextStep, iDotLoading,
            goodsList, goodsDetail, goodsCart,
            groupPicker
        },
        computed: {
            groupType() {
                switch (this.subStep) {
                    case 1:
                        return 'flight'
                    case 2:
                        return 'hotel'
                    case 3:
                        return 'hotel2'
                    case 4:
                        return 'food'
                    case 5:
                        return 'team'
                }
            },
            isRelative() {
                return this.user.group.name.indexOf('家属') > -1
            },
            groups() {
                let options = {}
                for (let item of this.goodsList) {
                    options[item.introduce.group] = item.introduce.title
                }
                return options
            },
            loading() {
                return (this.step === "loading")
            },
            filteredGoodsList() {
                return this.goodsList.filter(value => {
                    let list = value.introduce.group === this.group && value.introduce.type === this.groupType
                    return list
                })
            }
        },
        created() {
            let group = this.$cookie.get("RADIOMETER_PURCHASE_GROUP")
            if (group) {
                this.group = group
            }
            this.step = 'picker'
            this.getGoodsList()
        },
        mounted() {
            this.setText()
        },
        watch: {
            groupType() {
                this.setText()
                if (this.filteredGoodsList.length === 0) {
                    this.subStep++
                }
                if (this.subStep > 6) {
                    if (this.group === '2224') {
                        this.$router.push({name: 'register_checkout'})
                    } else {
                        this.$router.push({name: 'register_activity'})
                    }
                }
            }
        },
        methods: {
            setText() {
                switch (this.groupType) {
                    case 'flight':
                        $(".i-dot-steps-title").html('机票预定');
                        if (this.isRelative) {
                            this.helpText = '公司仅为大家提供上海/北京/广州/香港往返国际段航班的预定。以下价格有效期至2017年11月30日。'
                        } else {
                            this.helpText = '公司为大家预定上海/北京/广州/香港往返的国际段航班。国内段航班员工请自行在携程上预定，经销商请自行负责。'
                        }
                        break;
                    case 'hotel':
                    case 'hotel2':
                        $(".i-dot-steps-title").html('酒店预定');
                        this.helpText = '巴厘岛威斯汀度假酒店为此次雷度年会的会议酒店，酒店位于巴厘岛南部海岸的努沙杜瓦海滩。'
                        break;
                    case 'food':
                        $(".i-dot-steps-title").html('餐饮预订');
                        this.helpText = ''
                        break;
                    case 'team':
                        $(".i-dot-steps-title").html('团建活动');
                        this.helpText = '1月24日的团队建设将设在巴厘岛的3个不同景点完成，大家在完成各项活动时也能感受到巴厘岛的独特风景。'
                        break;
                    default:
                        break;
                }
            },
            getGoodsList() {
                let self = this;
                this.$http.post('product/general/showGeneralProductList', {
                    meeting_id: this.meeting.id,
                }).then((response) => {
                    if (response.body.err === 0) {
                        self.goodsList = response.body.res.list;
                        this.getCartList()
                    }
                })

            },
            //获取购物车列表
            getCartList() {
                this.$http.post('shoppingCart/getList', {
                    type: "goods",
                }).then(function (response) {
                    let ret = response.body
                    if (ret.err == 0) {
                        this.cartList = ret.res.list
                        this.totalPrice = ret.res.total_price

                        if (this.cartList.length == 0) {

                        } else {
                            this.step = "goodsCart"
                            this.subStep = this.cartList.length
                        }
                    }
                }).then(() => {
                    this.$store.commit('SPIN')
                })
            },
        }
    }
</script>
