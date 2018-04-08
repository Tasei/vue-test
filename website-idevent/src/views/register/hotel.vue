<template>
    <div>
        <steps></steps>
        <hr>
        <div v-if="cart_list.length <= 0">
            <h4 class="text-dark font-bold">酒店住宿
                <span v-if="!modal" class="text-normal font-normal">请选择拼房模式</span>
                <span v-if="modal && is_join==0" class="text-normal font-normal">您当前为不拼房模式</span>
                <span v-if="modal && is_join==1" class="text-normal font-normal">您当前为拼房模式</span>
                <a href="javascript:;" @click="updateModal" class="pull-right font-normal" v-if="modal">修改拼房模式</a>
            </h4>
            <!--选择拼房模式-->
            <div class="row mode-select" v-if="!modal">
                <div class="col-xs-6" @click="toggleJoin(0)">
                    <div class="mode-item text-center">
                        <h4 class="text-primary font-bold">不拼房</h4>
                        <p class="text-primary">我是土豪，我不拼房</p>
                        <p class="content text-dark"><span class="text-primary">全价</span>购买酒店产品，舒适安全</p>
                    </div>
                </div>
                <div class="col-xs-6 text-center" @click="toggleJoin(1)">
                    <div class="mode-item">
                        <h4 class="text-warning font-bold">拼房</h4>
                        <p class="text-warning">我要省钱，选择拼房</p>
                        <p class="content text-dark"><span class="text-warning">半价</span>半价购买酒店产品，经济实惠</p>
                    </div>
                </div>
            </div>
            <!--拼房模式下的选项tab-->
            <div class="row mode-select" v-if="modal && is_join==1 && !join_select">
                <div class="col-xs-6">
                    <div class="mode-item text-center">
                        <h4 class="text-primary font-bold">我有拼房邀请码</h4>
                        <form class="form-inline" role="form" style="margin: 30px 0">
                            <div class="form-group">
                                <label for="inputPassword2" class="sr-only">Password</label>
                                <input type="text" v-model="code" style="background:transparent" class="form-control input-lg form-border-none" id="inputPassword2" placeholder="* 请输入拼房邀请码">
                            </div>
                            <i-button :on-ok="btnCode" type="button" class="btn btn-primary btn-lg">确定</i-button>
                        </form>
                    </div>
                </div>
                <div class="col-xs-6 text-center">
                    <div class="mode-item">
                        <h4 class="text-warning font-bold">我没有拼房邀请码</h4>
                        <i-button :on-ok="startJoin" style="margin: 20px 0px 30px" type="button" class="btn btn-warning btn-lg padding-lg">发起拼房</i-button>
                    </div>
                </div>
            </div>
            <!--
            <div v-if="modal">
                <form class="form-inline" role="form">
                    <div class="form-group">
                        <i-radio option="0" v-model="is_join">不拼房</i-radio>
                        <i-radio option="1" v-model="is_join">拼房</i-radio>
                    </div>
                    <div class="form-group" v-if="!start && is_join==1">
                        <input type="text" class="input-sm form-control" id="inputPassword2" placeholder="请输入拼房邀请码" />
                    </div>
                    <button v-if="!start && is_join==1" type="submit" class="btn btn-primary btn-sm">&nbsp;&nbsp;确认&nbsp;&nbsp;</button>
                    <div class="form-group" v-if="!start && is_join==1">
                        <p class="form-control-static">没有邀请码？<a href="javascript:;" @click="start=true" class="text-primary">发起拼房</a></p>
                    </div>
                </form>
            </div>-->
            <div v-if="modal && (is_join==0 || (is_join==1 && join_select))">
                <br/>
                <form role="form">
                    <div class="row">
                        <div class="form-group col-xs-5">
                            <label><span class="text-danger">*</span> 入住日期</label>
                            <i-date-picker start-view="2" id="start_date" v-model="start_date"></i-date-picker>
                        </div>
                        <div class="form-group col-xs-5">
                            <label><span class="text-danger">*</span> 离店日期</label>
                            <i-date-picker start-view="2" id="end_date" v-model="end_date"></i-date-picker>
                        </div>
                        <div class="form-group col-xs-2">
                            <label>&nbsp;&nbsp;</label>
                            <i-button :on-ok="getHotelList" type="button" class="btn btn-primary btn-block btn-lg">查询</i-button>
                        </div>
                    </div>
                </form>
                <div v-if="hotel_list.length <= 0" class="icon-placeholder"><i class="fa fa-search"></i><br/><br/>暂无酒店数据，选择日期搜索酒店</div>
                <div v-if="hotel_list.length > 0" class="hotel-product clearfix" v-for="hotel in hotel_list">
                    <div class="left pull-left">
                        <swiper :options="swiperOption">
                        <!-- 幻灯内容 -->
                            <swiper-slide v-for="pic in hotel.attachments">
                                <div class="product-cover"><img :src="pic.url"/></div>
                            </swiper-slide>
                            <div class="swiper-pagination" slot="pagination"></div>
                            <div class="swiper-button-prev" slot="button-prev"></div>
                            <div class="swiper-button-next" slot="button-next"></div>
                        </swiper>
                    </div>
                    <div class="right">
                        <h4 class="font-bold">{{hotel.name}}  <span class="text-normal font-normal">{{hotel.name_en}}</span></h4>
                        <p class="text-gray">{{hotel.address}}</p>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>房型</th>
                                    <th>价格</th>
                                    <th>剩余库存</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody v-for="type in hotel.roomTypes">
                                <tr>
                                    <td><i-radio :option="type" v-model="selected"></i-radio></td>
                                    <td>{{type.type_name}}</td>
                                    <td><span class="text-warning">{{type.total_price}}<span v-if="is_join==1">(拼房价)</span></span></td>
                                    <td>
                                        <span v-if="type.remain<=5" class="text-danger">库存紧张</span>
                                        <span v-else>库存充足</span>
                                    </td>
                                    <td><a href="javascript:;" @click="openRoom(type)">{{type.open ? '收起': '展开'}}</a></td>
                                </tr>
                                <tr v-show="type.open">
                                    <td colspan="5">
                                        <table class="table bordered">
                                            <thead>
                                            <tr>
                                                <th>日期</th>
                                                <th>价格</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="room in type.rooms">
                                                    <td>{{room.date}}</td>
                                                    <td>{{room.price}}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br/>
                        <i-button :on-ok="addCart" type="button" class="btn btn-warning btn-lg padding-lg">加入购物车</i-button>
                    </div>
                    <div class="clearfix"></div>
                    <hr/>
                </div>
            </div><!--product end-->
        </div>
        <!--购物车列表-->
        <div v-else>
            <h4 class="text-dark font-bold">酒店住宿</h4>
            <table class="table bordered">
                <thead>
                    <tr>
                        <th>酒店名</th>
                        <th>房型</th>
                        <th>入住时间</th>
                        <th>数量</th>
                        <th>单价</th>
                        <th>总价</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="p in cart_list">
                        <td>{{p.product.hotel_name}}</td>
                        <td>{{p.product.type_name}}</td>
                        <td>{{p.product.date}}</td>
                        <td>{{p.quantity}}</td>
                        <td class="text-warning">{{p.product.price}}<span v-if="p.product.category==7">(拼房价)</span></td>
                        <td class="text-warning">{{p.total_price}}</td>
                    </tr>
                </tbody>
            </table>
            <hr/>
        </div>
        <next-step v-if="!modal && cart_list.length <= 0" class="btn-outline">酒店自理</next-step>
        <next-step v-if="cart_list.length > 0"></next-step>
        <i-button v-if="cart_list.length > 0" :on-ok="clearCart" type="button" class="btn btn-primary btn-outline btn-lg padding-lg">清空重选</i-button>
    </div>
</template>
<script>
    import iRadio from '../../../components/radio'
    import iCheck from '../../../components/check'
    import iButton from '../../../components/button'
    import iStep from 'iStep'
    import { swiper, swiperSlide, swiperPlugins } from 'vue-awesome-swiper'
    import iDatePicker from '../../components/datepicker'
    import steps from "components/steps"
    import nextStep from "components/nextStep"
    import iMessage from 'iMessage'
    export default{
        data(){
            return {
                modal: false, //是否已经选择
                is_join: 1,//是否拼房
                join_select: false,//是否选择了拼房模式下的类型
                start: false,
                selected: null,
                hotel_list: [],
                start_date: '',
                end_date: '',
                cart_list: [],
                code: '',
                swiperOption: {
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    spaceBetween: 30
                }
            }

        },
        created () {
            this.getCartList()
        },
        components:{
            iRadio, iStep, iCheck, iButton, swiper, swiperSlide, iDatePicker,iRadio, steps, nextStep
        },

        methods: {
            //选择拼房模式
            toggleJoin (v) {
                this.hotel_list = []
                this.modal = true
                this.is_join = v
                //获取酒店列表
                //this.getHotelList()
            },
            startJoin () {
                this.join_select = true
            },
            //更改拼房模式
            updateModal () {
                this.modal = false
                this.join_select = false
            },

            //获取酒店列表
            getHotelList (e) {
                this.$http.post('hotel/getList', {
                    start_date: this.start_date,
                    end_date: this.end_date,
                    is_share: this.is_join
                }).then((response) => {
                    let ret = response.body
                    if (ret.err == 0) {
                        let list = ret.res.list
                        for (let [index, ele] of list.entries()) {
                            if (ele.roomTypes.length < 0) {
                                continue
                            }

                            for (let [j, type] of ele.roomTypes.entries()) {
                                ele.roomTypes[j].open = false
                            }
                        }
                        this.hotel_list = list
                    }
                }).then(() => {
                    e.loading = false
                })
            },

            btnClick (e) {
                setTimeout(function() {
                    e.loading = false
                }, 1000)
            },

            //班期展开
            openRoom (type) {
                type.open = type.open ? !type.open: true
            },

            //加入购物车
            addCart (e) {
                if (!this.selected) {
                    e.loading = false
                    return false
                }
                if (this.is_join==1) {
                    this.createShare(e)
                } else {
                    let ids = []
                    for (let [index, room] of this.selected.rooms.entries()) {
                        ids.push(room.product_id)
                    }

                    this.addCartFunc(e, ids)
                }
            },

            //公共加入购物车函数
            addCartFunc (e, ids = []) {
                if (ids.length <= 0) {
                    e.loading = false
                    return false
                }
                let self = this
                this.$http.post('shoppingCart/addItems', {
                    type: 'hotel',
                    ids: ids,
                    quantity: 1
                }).then((response) => {
                    if (response.body.err == 0) {
                        self.getCartList()
                    } else {
                        iMessage.info(response.body.msg)
                    }
                }).then(() => {
                    e.loading = false
                })
            },

            //获取购物车列表
            getCartList(){
                this.$http.post('shoppingCart/getList', {
                    type: "hotel",
                }).then(function (response) {
                    let ret = response.body
                    if (ret.err == 0) {
                        this.cart_list = ret.res.list
                    }
                })
            },

            //清空购物车
            clearCart (e) {
                let self = this
                this.$http.post('shoppingCart/clearByType', {
                    type: "hotel",
                }).then((response) => {
                    let ret = response.body
                    if (ret.err == 0) {
                        //Message.success('操作成功');
                        self.cart_list = []
                    }
                })
            },

            //拼房加入购物车
            createShare (e) {
                if (!this.selected) {
                    e.loading = false
                    return false
                }

                let self = this
                let ids = []
                for (let [index, room] of this.selected.rooms.entries()) {
                    ids.push(room.id)
                }
                this.$http.post('share/create', {
                    stock_id: ids,
                    is_private: 1
                }).then((response) => {
                    if (response.body.err == 0) {
                        self.addCartFunc(e, response.body.res)
                    } else {
                        iMessage.error(response.body.msg)
                        e.loading = false
                    }
                })
            },

            //有邀请码的情况下输入邀请码按钮
            btnCode (e) {
                let self = this
                if (this.code == '') {
                    e.loading = false
                    return false
                }

                this.$http.post('share/verify', {
                    code: this.code
                }).then((response) => {
                    if (response.body.err == 0) {
                        self.addCartFunc(e, response.body.res)
                    } else {
                        iMessage.error(response.body.msg)
                        e.loading = false
                    }
                })
            }
        }
    }
</script>
<style lang="less">
    @import "../../../styles/themes/default/variables";
    .mode-select {
        margin-bottom: 20px;
        div.col-xs-6 {
            cursor: pointer;
            &:first-child {
                padding-right: 10px;
                .mode-item {
                    background-color: fade(@brand-primary, 3%);
                    border: 1px solid fade(@brand-primary, 20%);
                    &:hover {
                        background-color: fade(@brand-primary, 8%);;
                    }
                    .content {
                        border-top: 1px solid fade(@brand-primary, 20%);
                    }
                }
            }
            &:last-child  {
                padding-left: 10px;
                .mode-item {
                    background-color: fade(@brand-warning, 3%);
                    border: 1px solid fade(@brand-warning, 20%);
                    &:hover {
                        background-color: fade(@brand-warning, 8%);;
                    }
                    .content {
                        border-top: 1px solid fade(@brand-warning, 20%);;
                    }
                }
            }

            .content {
                margin: 0;
                display: inline-block;
                padding: 20px 0 30px 0;
            }


        }
    }

    //product
    .hotel-product {
        position: relative;
        width: 100%;
        min-height: 240px;
        .left {
            position: relative;
            width: 340px;
            height: 240px;
        }

        .right {
            margin: 0 0 0 340px;
            padding-left: 20px;
        }

        .product-cover {
            height: 240px;
            text-align: center;
            background: #eeeeee;
            width: 100%;
            overflow: hidden;
            img {
                height: 100%;
            }
        }
    }
    label {
        display: block;
    }
    .input-lg {
        font-size: 16px;
    }


</style>
