<template>
    <div class="col-sm-12">
        <steps></steps>

        <div v-for="form in formList" v-if="form.value.settings.hidden==false">
            <h5 class="hotel-products-nav-title">{{form.name}}</h5>
            <table class="table table-detail">
                <template v-for="el in form.value.elements" >
                    <tr v-if="formUtils.isFilledItem(el)">
                        <td>{{filterLabel(el.label)}}</td>
                        <td v-html="formUtils.getItemText(el)"></td>
                    </tr>
                </template>
            </table>
        </div>

        <router-link style="margin: 0 auto 20px" v-if="isEditable" class="btn btn-lg btn-primary"
                     :to="{name:'register_form'}">
            {{$t('editInfo')}}
        </router-link>
        <a v-if="pay_go_url" style="margin:0 auto 10px" class="btn btn-lg btn-default" :href="pay_go_url">
            {{$t('goBackHome')}}
        </a>

        <router-link v-if="_IS_('cadillac2018')" style="margin:0 auto 10px" class="btn btn-lg btn-default" :to="{name: 'home_page', query: {page: 'selectAccount'}}">
            返回上一页
        </router-link>


        <router-link v-else style="margin:0 auto 10px" class="btn btn-lg btn-default" :to="{name:'home_index'}">
            {{$t('goBackHome')}}
        </router-link>



        <div v-if="detail">
            <p style="color:red;" v-if="_IS_('kickoff2018') && detail.pay_offline==='1'">* 关闭此页面, 订单完成</p>
            <div v-if="detail.hotel_details && !_IS_('kickoff2018')">
                <div>
                    <h5 class="hotel-products-nav-title">{{$t('hotel.hotelInfo')}}</h5>
                    <table class="table table-detail">
                        <tbody>
                        <tr>
                            <td>{{$t('hotel.checkInDate')}}</td>
                            <td>{{detail.hotel_details.start_date}}</td>
                        </tr>
                        <tr>
                            <td>{{$t('hotel.checkOutDate')}}</td>
                            <td>{{detail.hotel_details.end_date}}</td>
                        </tr>
                        <tr>
                            <td>{{$t('hotel.hotelName')}}</td>
                            <td>
                                {{$lang == 'en' ? detail.hotel_details.hotel_name_en : detail.hotel_details.hotel_name}}
                            </td>
                        </tr>
                        <tr>
                            <td>{{$t('hotel.roomType')}}</td>
                            <td>
                                {{$t('hotel.roomTypes["' + detail.hotel_details.type_name + '"]')}}
                                <span v-if="detail.hotel_details.is_share" class="label label-shareable">拼房</span>
                            </td>
                        </tr>
                        <tr v-if="_IS_('cadillac2018')">
                            <td>{{mateTitle}}</td>
                            <td>
                                {{mateName}}
                            </td>
                        </tr>
                        <tr v-if="isPrivateShare && sharePosition==1">
                            <td>邀请码</td>
                            <td>{{detail.hotel_details.share_code}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div v-if="isShare">
                    <div v-if="isPrivateShare">
                        <div v-if="detail.hotel_details.room_mate">
                            <h5 class="hotel-products-nav-title">同住人信息</h5>
                            <table class="table table-detail">
                                <tbody>
                                <tr>
                                    <td>姓名</td>
                                    <td>{{detail.hotel_details.room_mate.name}}</td>
                                </tr>
                                <tr>
                                    <td>手机号码</td>
                                    <td>{{detail.hotel_details.room_mate.mobile}}</td>
                                </tr>
                                <tr>
                                    <td>电子邮箱</td>
                                    <td>{{detail.hotel_details.room_mate.email}}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="alert alert-warning" v-else>
                            <p>您尚未完成拼房, 请邀请您的同住人尽快完成注册</p>
                            <p>若未能在限定时间内完成拼房, 系统将自动为您分配同住人</p>
                            <p>剩余时间:
                                <count-down :final="detail.hotel_details.expire_time"></count-down>
                            </p>
                        </div>
                    </div>

                    <div v-else>
                        <div v-if="detail.hotel_details.room_mate">
                            <h5 class="hotel-products-nav-title">同住人信息</h5>
                            <table class="table table-detail">
                                <tbody>
                                <tr>
                                    <td>姓名</td>
                                    <td>{{detail.hotel_details.room_mate.name}}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="alert alert-warning" v-else>
                            <p>系统正在为您自动匹配同住人, 请留意短信通知</p>
                        </div>
                    </div>
                </div>

            </div>

            <div v-if="detail.orders">
                <h5 class="hotel-products-nav-title">{{$t('order.detail')}}</h5>
                <table class="table">
                    <tbody>
                    <tr v-for="order in detail.orders">
                        <td>{{order.product.name}} x {{order.quantity}}</td>
                        <td>{{order.price_total}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div class="order-detail-summary row">
                <p>{{$t('order.time')}}: {{detail.created_at}}</p>
                <p>{{$t('order.num')}}: {{detail.order_num}}</p>
                <div class="offline-notice" v-if="detail.pay_offline==1&&detail.is_paid==0">
                    <p>等待线下支付确认</p>
                    <p>备注：如需线下转账请联系
                        <a href="tel:18602118037">国旅焦迪 18602118037</a></p>
                </div>
            </div>
            <!--<i-button class="btn btn-lg btn-danger cadillacBg" :on-ok="cancelOrder" v-if="isEditable&&_IS_('cadillac2018')">
                {{$t('order.cancel')}}
            </i-button>-->
            <i-button class="btn btn-lg btn-danger" :on-ok="cancelOrder" v-if="isEditable&&!_IS_('fordchongqing2018')">
                {{$t('order.cancel')}}
            </i-button>
        </div>
        <div v-if="isShowQrcode" style="text-align: center;width: 100%;margin-top: 25px">
            <h5 class="hotel-products-nav-title" style="text-align: left;margin-top: 10px">注册状态</h5>
            <p style="margin-top: 15px">
                注册成功
            </p>
            <p>
                请截屏保存二维码，活动期间扫码入场
            </p>
            <div class="my-qrcode-image-wrapper">
                <img class="my-qrcode-image" src="/api/meeting/showQrcode" style="width: 60%">
            </div>
        </div>
    </div>
</template>
<script>
    import steps from "./components/steps"
    import iButton from "iButton"
    import countDown from "components/countdown"
    import {Toast} from "mint-ui"

    import formUtils from "utils/form"

    export default {
        components: {steps, iButton, countDown},
        data() {
            return {
                mateTitle:'',
                mateName:'',
                pay_go_url: '',
                detail: null,
                formList: [],
                buy_product: true,
            }
        },
        created() {
            if (this.meeting.settings.register) {
                this.pay_go_url = this.meeting.settings.register.pay_go_url;
            }
            this.getForms()
            this.getDetail()
            this.getSteps()
            this.getOneForms()
        },
        computed: {
            meeting() {
                return this.$store.state.meeting
            },
            formUtils() {
                return formUtils
            },
            isShare() {
                if (this.detail && this.detail.hotel_details) {
                    return this.detail.hotel_details.is_share
                }
                return false
            },
            isPrivateShare() {
                if (this.detail && this.detail.hotel_details) {
                    return this.detail.hotel_details.is_share && this.detail.hotel_details.private
                }
                return false
            },
            sharePosition() {
                return this.detail.hotel_details.position
            },
            isEditable() {
                if (this._IS_('100t2017')) {
                    return false
                }
                if (this._IS_('gl6')) {
                    return false
                }
                let payCancel = 0;

                if (this.meeting.settings.register) {
                    payCancel = this.meeting.settings.register.pay_cancel
                }

                if (payCancel == 1 && this.buy_product) {
                    return false
                }

                return !this.$store.state.steps.reg_close
            },
            isShowQrcode() {
                let pay_show_qrcode = 0;

                if (this.meeting.settings.register) {
                    pay_show_qrcode = this.meeting.settings.register.pay_show_qrcode
                }
                if (pay_show_qrcode == 1 && this.buy_product) {
                    return true;
                }
                return false

            }
        },
        methods: {
            filterLabel(label) {
                return label.startsWith('#') ? '' : label
            },
            getSteps() {
                this.$http.post('meeting/getStepList', {
                    meeting_id: this.meeting.id
                }).then(function (response) {
                    let ret = response.body
                    if (ret.err != 0) {
                        return
                    }
                    this.$store.commit('STEPS', ret.res)
                })
            },
            getForms() {
                this.$http.post('register/getRegInfo')
                    .then(function (response) {
                        let ret = response.body

                        if (ret.err == 0) {
                            this.formList = ret.res.formList
                            // this.hasRegInfo = ret.res.hasRegInfo

                            this.$store.commit('SPIN', false)
                        } else {
                            Toast('获取信息失败, 请稍后刷新重试');
                        }
                    })
            },
            isFilledItem(el) {
                if (!formUtils.isValueItem(el.type)) {
                    return false
                }

                switch (typeof el.value) {
                    case 'string':
                        return el.value != ""
                        break
                    case 'array':
                        return el.length > 0
                        break
                    default:
                        break
                }

                return true
            },
            cancelOrder(e) {
                if (!confirm(this.$t('order.cancelConfirm'))) {
                    e.loading = false
                    return
                }
                let self = this
                this.$http.post('order/cancel').then((response) => {
                    let ret = response.body
                    if (ret.err == 0) {
                        Toast(self.$t('order.cancelled'))
                        setTimeout(function () {
                            self.$router.push({name: "home_index"})
                        }, 1500)
                    } else {
                        Toast(ret.msg)
                    }
                }).finally(function () {
                    e.loading = false
                })
            },
            getDetail() {
                let self = this

                this.$http.post('order/detail').then((response) => {
                    let ret = response.body
                    if (ret.err == 0) {
                        self.detail = ret.res

                        if (!self.detail) {
                            self.$router.push({name: "home_index"})
                            return
                        } else {
                            if (self.detail.is_finish != '1') {
                                self.$router.push({name: "register_pay"})
                                return
                            } else {
                                console.log(self.detail.orders);
                                if (self.detail.orders.length == 0) {
                                    self.buy_product = false;
                                }
                            }
                        }

                    }
                })
            },

            getOneForms() {
                let self = this
                this.$http.post('register/getOneRegInfo', {
                    name:"同住人信息",
                    child_id: self.child_id
                }).then(function(response) {
                    let ret = response.body

                    if (ret.err == 0) {
                        this.mateTitle = ret.res.formList[0].value.elements[0].label
                        this.mateName = ret.res.formList[0].value.elements[0].value

                        this.oneviewMode = ret.res.hasRegInfo
                        this.onehasRegInfo = ret.res.hasRegInfo
                        console.log(this.mateTitle + '——' + this.oneformList)
                        if(!this.mateName) {
                            this.$router.push({name: "home_page",query:{page:'roommate'}})
                        }
                    } else {
                        Toast(ret.msg);
                    }
                }).finally(() => {
                    this.$store.commit('SPIN', false)
                })

            },
        }
    }
</script>
<style lang="less" scoped>
    table.table-detail {
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 5px;
        margin-right: 5px;
        font-size: 14px;
        td {
            border-bottom: 0 none;
            padding: 5px 0 !important;
            &:first-child {
                color: #777;
                //width: 140px;
                width: 30%;
            }
        }
    }

    .order-detail-summary {
        color: #999;
        border-top: 1px solid #ddd;
        font-size: 12px;
        line-height: 20px;
        padding: 15px 20px 0 20px;
    }

    .offline-notice {
        padding: 15px 5px 5px;
        background: #eee;
        font-size: 12px;
        color: #333;
        text-align: center;
    }

    .cadillacBg{
        background-color: #8A1529;
    }
</style>
