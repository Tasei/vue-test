<template>
    <div>
        <h5 class="hotel-products-nav-title">{{$t('hotel.bookingListTitle')}} </h5>
        <div class="hotel-products-list row" v-if="hotelList.length>0">
            <div v-for="hotel in hotelList"
                 @click="enterDetail(hotel)"
                 class="hotel-product-item-wrapper">
                <div class="hotel-product-item media">
                    <a href="javascript:void(0);" class="media-left" v-if="hotel.cover">
                        <img :src="hotel.cover.url+'/b100'" class="hotel-product-cover">
                    </a>
                    <div class="hotel-product-intro media-body">
                        <button class="btn btn-product-choice btn">{{$t('choose')}}</button>
                        <h5 v-if="$lang=='zh'">{{hotel.name}}</h5>
                        <h5 v-if="$lang=='en'">{{hotel.name_en}}</h5>
                        <!--<p>{{hotel.address}}</p>-->
                    </div>
                </div>
                <!--
                <div class="hotel-product-rooms">
                    <table>
                        <tbody>
                        <tr v-for="room in hotel.roomTypes">
                            <td width="60%">
                                {{$t('hotel.roomTypes["' +room.type_name+'"]')}}
                                <span v-if="room.allow_share>0" class="label label-shareable">{{$t('hotel.roomAllowShare')}}</span>
                            </td>
                            <td width="20%" style="text-align:center">
                                <span class="text-danger"
                                      v-if="room.remain<10">{{$t('hotel.bookingAlmostSoldOut')}}</span>
                            </td>
                            <td style="text-align:right">
                                <span class="label label-price" v-if="room.total_price>0">{{room.total_price}}</span>
                            </td>
                            <td>
                                <div style="width:20px;"></div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>-->
            </div>
        </div>
        <div class="hotel-products-list-empty" v-else>
            <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
            <p>{{$t('hotel.bookingUnavailable')}}</p>
            <button class="btn btn-default btn-lg" type="button" @click="goBack">{{$t('goBack')}}</button>
        </div>
    </div>
</template>
<script>
    export default{
        props: {
            hotelList: Array
        },
        methods: {
            enterDetail(hotel) {
                this.$parent.hotel = hotel
                this.$parent.step = "hotelBuy"
            },
            goBack() {
                this.$parent.getUserParams()
            }
        },
    }
</script>
<style lang="less" rel="stylesheet/less">
    .hotel-products-list-empty {
        text-align: center;
        .fa {
            color: #ccc;
            font-size: 72px;
            margin-top: 60px;
            margin-bottom: 30px;
        }
        p {
            color: #666;
            line-height: 20px;
            font-size: 14px;
        }
    }

    .hotel-products-list {

        .hotel-product-item-wrapper {
            border-bottom: 1px solid #ddd;
        }

        .hotel-product-rooms {
            background-color: #f9f9f9;
            padding-left: 20px;
            table {
                width: 100%;
                font-size: 14px;
                color: #777;

                tr {
                    border-bottom: 1px solid #ddd;
                    &:last-child {
                        border-bottom: 0 none;
                    }
                }
                td {
                    padding: 15px 0;
                }
            }
        }

        .hotel-product-item {
            padding: 20px;
            position: relative;

            .btn-product-choice {
                background-color: #f3f3f3;
                font-size: 12px;
                line-height: 12px;
                color: #333;
                padding: 8px 15px;
                border-radius: 28px;
                margin-right: 15px;
                margin-bottom: 10px;
                position: absolute;
                right: 0;
                top: 15px;
            }

            .hotel-product-intro {
                h5 {
                    font-size: 17px;
                    font-weight: 600;
                    margin-top: 0;
                    margin-bottom: 7px;
                    margin-right: 50px;
                }
                p {
                    font-size: 13px;
                    color: #666;
                }
            }

            .hotel-product-cover {
                width: 64px;
                height: 64px;
            }
        }
    }

    p.tips {
        margin: 15px;
        padding: 10px;
    }
</style>
