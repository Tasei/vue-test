<template>
    <div v-if="hotel" class="hotel-product-buy row">
        <div class="hotel-image-carousel" v-if="hotel.cover">
            <img :src="hotel.cover.url+'/w640'"/>
        </div>

        <div class="hotel-product-buy-header">
            <h3 class="hotel-name" v-if="$lang=='zh'">{{hotel.name}}</h3>
            <h3 class="hotel-name" v-if="$lang=='en'">{{hotel.name_en}}</h3>
            <!--<p class="hotel-address">{{hotel.address}}</p>-->
            <div class="hotel-stars">
                <span v-for="n in hotelStars" class="fa fa-star"></span>
            </div>
        </div>
        <div class="hotel-product-buy-section">
            <h5>{{hotel.address}}</h5>
            <div>
                <!-- <button
                    v-for="room in hotel.roomTypes"
                    :class="{'btn-primary active': selectedRoom && room.id == selectedRoom.id}"
                    @click="chooseRoom(room)"
                    class="btn btn-product-choice">
                    {{$t('hotel.roomTypes["' +room.type_name+'"]')}}
                </button> -->
                <button
                    v-for="room in hotel.roomTypes"
                    :class="{'btn-primary active': selectedRoom && room.id == selectedRoom.id}"
                    @click="chooseRoom(room)"
                    class="btn btn-product-choice">
                    {{room.type_name}}
                </button>
            </div>
        </div>
        <div class="hotel-product-buy-section">
            <h5>线路介绍</h5>
            <div v-html="hotel.introduce"></div>
        </div>

        <template>
            <div class="hotel-product-buy-section" v-if="selectedRoom">
                <h5>{{$t('purchase.priceList')}}</h5>
                <table>
                    <tbody>
                    <tr v-for="item in selectedRoom.rooms">
                        <td>{{item.date}}</td>
                        <td width="25%">
                            <div class="text-right">
                                <span class="label label-price">
                                {{item.price}}
                                </span>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="product-add-cart-section" v-if="selectedRoom">
                <div class="pull-left">
				<span class="hotel_stay_days">
					{{selectedRoom.rooms.length}}
				</span>
                    份
                </div>

                <i-button class="btn btn-add-cart pull-right" :on-ok="addCart">{{$t('confirm')}}</i-button>

                <div class="pull-right">
            <span class="label label-price label-price-lg">
                {{selectedRoom.total_price}}
            </span>
                </div>
            </div>
        </template>
    </div>
</template>
<script>
    import iButton from "iButton"
    import {Toast} from "mint-ui"

    export default {
        components: {iButton},
        props: {
            hotel: Object,
        },
        data() {
            return {
                selectedRoom: null,
            }
        },
        created() {
            if (this.hotel.roomTypes.length>0) {
                this.chooseRoom(this.hotel.roomTypes[0])
            }
        },
        computed: {
            hotelStars() {
                return parseInt(this.hotel.type)
            },
        },
        methods: {
            chooseRoom(room) {
                this.selectedRoom = room
            },
            addCart(e) {
                this.addCartFunc(e)
            },
            addCartFunc(e, ids) {
                if (!ids) {
                    ids = []
                    for (let [index, room] of this.selectedRoom.rooms.entries()) {
                        ids.push(room.product_id)
                    }
                }
                this.$http.post('shoppingCart/addItems', {
                    type: 'hotel',
                    ids: ids,
                    quantity: 1
                }).then((response) => {
                    if (response.body.err == 0) {
                        this.getCartList(e)
                    } else {
                        Toast(response.body.msg)
                    }
                }).finally(() => {
                    e.loading = false
                })
            },
            getCartList(e) {
                this.$http.post('shoppingCart/getList', {
                    type: 'hotel'
                }).then(function (response) {
                    let ret = response.body
                    if (ret.err == 0) {
                        this.$parent.cartList = ret.res.list
                        this.$parent.totalPrice = ret.res.total_price
                        this.$parent.step = "hotelCart"
                    }
                }).finally(() => {
                    e.loading = false
                })
            },
        }
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    .hotel-product-buy {
        padding-bottom: 50px;

        .hotel-image-carousel {
            img {
                width: 100%;
                height: auto;
            }
        }
        .hotel-product-buy-header {
            padding: 0 20px;

            .hotel-name {
                font-size: 22px;
                line-height: 22px;
                color: #333;
                margin-top: 15px;
                margin-bottom: 10px;
            }
            .hotel-address {
                font-size: 13px;
                line-height: 18px;
                color: #666;
                margin-bottom: 5px;
            }
            .hotel-stars {
                color: #fbbf3f;
                margin-bottom: 10px;
                span {
                    margin-right: 4px;
                }
            }
        }
        .hotel-product-buy-section {
            padding: 0 20px;
            margin: 15px auto;
            border-top: 1px solid #ddd;
            h5 {
                font-size: 14px;
                line-height: 14px;
                color: #666;
                margin-bottom: 15px;
                margin-top: 15px;
            }
            table {
                width: 100%;
                font-size: 14px;
                color: #333;
            }
        }
        .btn-product-choice {
            font-size: 12px;
            line-height: 12px;
            padding: 8px 15px;
            border-radius: 28px;
            margin-right: 15px;
            margin-bottom: 10px;
        }
    }

    .btn-product-choice {
        background-color: #f3f3f3;
        color: #333;
    }
</style>
