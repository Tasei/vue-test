<template>
    <div>
        <!-- <h5 class="hotel-products-nav-title">{{$t('hotel.bookingListTitle')}} </h5> -->
        <p v-if="_IS_('kickoff2018')">旅行社为大家提供25日及26日自由活动的旅游路线推荐，大家可以选择跟团，也可以自行安排。在会议期间，旅行社也将在会议签到处设立旅游咨询台，欢迎您届时前往垂询相关信息。</p>
        <h5 class="hotel-products-nav-title">旅游线路</h5>
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
                        <p>{{hotel.name_en}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                hotelList: [],
                defaultQuery: {
                    start_date: '2018-01-25',
                    end_date: '2018-01-26',
                    type: 'hotel'
                }
            }
        },
        mounted() {
            if (this.$route.query.start_date) {
                this.defaultQuery.start_date = this.$route.query.start_date
            }
            if (this.$route.query.end_date) {
                this.defaultQuery.end_date = this.$route.query.end_date
            }
            this.getHotelList()

            let title = this.defaultQuery.start_date.substr(8, 10) + '日旅游线路'
            $(".i-dot-steps-title").html(title);
        },
        methods: {
            enterDetail(hotel) {
                this.$parent.hotel = hotel
                this.$parent.step = "hotelBuy"
            },
            getHotelList(e) {
                let params = this.defaultQuery
                this.$http.post('hotel/getList', params)
                    .then((response) => {
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
                            this.hotelList = list
                            this.$store.commit('SPIN')
                        }
                    })
            },
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
                line-height:1.2;
                h5 {
                    font-size: 17px;
                    font-weight: 600;
                    margin-top: 0;
                    margin-bottom: 5px;
                    padding-right: 50px;
                }
                p {
                    font-size: 13px;
                    color: #666;
                    margin-bottom: 0;
                }
            }

            .media-left{
                width: 74px;
            }

            .hotel-product-cover {
                width: 64px;
                height: 64px;
                display: block;
            }
        }
    }

    p.tips {
        margin: 15px;
        padding: 10px;
    }
</style>
