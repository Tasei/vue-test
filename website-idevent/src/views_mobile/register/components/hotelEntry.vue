<template>
    <div class="content-wrapper">
        <template v-if="isShare">
            <div @click="showShareCode" class="hotel-enter-panel">
                <h5 :class="{'shrink': shareCodeVisible}">{{$t('hotel.joinShareTitle')}}</h5>

                <div v-if="!shareMate">
                    <input
                        class="hotel-invitation-code"
                        type="text" v-model="code"
                        :placeholder="$t('hotel.joinSharePlaceholder')">
                    <div :class="{'animated fadeIn': shareCodeVisible, hide: !shareCodeVisible}">
                        <i-button :on-ok="searchInvitationCode" type="button" class="btn btn-primary btn-block btn-lg">
                            {{$t('search')}}
                        </i-button>
                    </div>
                </div>
                <div v-if="shareMate">
                    <p class="share-mate-info">{{shareMate.room_shares.share_code}} {{shareMate.name}}
                        {{shareMate.mobile}}</p>
                    <p class="share-mate-info">{{shareMate.room_shares.start_date}} ~
                        {{shareMate.room_shares.end_date}}</p>
                    <p class="share-mate-info">{{shareMate.room_shares.hotel_name}}
                        {{shareMate.room_shares.type_name}}</p>
                    <i-button :on-ok="submitCode" type="button" class="btn btn-primary btn-block btn-lg">
                        {{$t('hotel.joinShareConfirm')}}
                    </i-button>
                    <i-button :on-ok="clearCode" type="button" class="btn btn-default btn-block btn-lg">
                        {{$t('hotel.joinShareReset')}}
                    </i-button>
                </div>
            </div>


            <div @click="showCalendar" class="hotel-enter-panel blue">
                <h5 :class="{'shrink': calendarVisible}">
                    {{$t('hotel.bookingTitle')}}
                </h5>
                <p></p>
                <div class="hotel-order-calendar" :class="{'animated fadeIn': calendarVisible, hide: !calendarVisible}">
                    <div class="row">
                        <div class="col-xs-6 checkin-date">
                            <label>{{$t('hotel.checkInDate')}}</label>

                            <v-date-picker
                                v-model="hotelQuery.start_date"
                                placeholder="yyyy-mm-dd"
                                format="date"
                                :startDate="checkInStartDate"
                                :endDate="checkInEndDate"
                                :mobile="true"
                                :required="true"></v-date-picker>
                        </div>
                        <div class="col-xs-6 checkout-date">
                            <label>{{$t('hotel.checkOutDate')}}</label>
                            <v-date-picker
                                v-model="hotelQuery.end_date"
                                placeholder="yyyy-mm-dd"
                                format="date"
                                :startDate="checkOutStartDate"
                                :endDate="checkOutEndDate"
                                :mobile="true"
                                :required="true"></v-date-picker>
                        </div>
                        <div class="col-xs-12">
                            <i-button
                                :disabled="code.length > 0"
                                :on-ok="getHotelList"
                                type="button"
                                class="btn btn-primary btn-block btn-lg">{{$t('search')}}
                            </i-button>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
        </template>

        <template v-else>
            <h5 class="hotel-products-nav-title" style="margin-bottom: 30px;"></h5>
            <div class="hotel-order-calendar visible">
                <form @submit.prevent="getHotelList">
                    <div class="row">
                        <div class="col-xs-6 checkin-date">
                            <label>{{$t('hotel.checkInDate')}}</label>
                            <v-date-picker
                                v-model="hotelQuery.start_date"
                                format="date"
                                :startDate="checkInStartDate"
                                :endDate="checkInEndDate"
                                :mobile="true"
                                :required="true"></v-date-picker>
                        </div>
                        <div class="col-xs-6 checkout-date">
                            <label>{{$t('hotel.checkOutDate')}}</label>
                            <v-date-picker
                                v-model="hotelQuery.end_date"
                                format="date"
                                :startDate="checkOutStartDate"
                                :endDate="checkOutEndDate"
                                :mobile="true"
                                :required="true"></v-date-picker>
                        </div>
                        <div class="col-xs-12">
                            <button type="submit" class="btn btn-primary btn-lg">
                                {{$t('search')}}
                            </button>
                        </div>

                        <div class="clearfix"></div>
                    </div>
                </form>
            </div>
        </template>

        <a class="btn-default btn btn-lg notNeed" @click="skipHotel">{{$t('hotel.notNeed')}}</a>
    </div>
</template>
<style>
    .content-wrapper {
        position: relative;
    }

    .notNeed {
        opacity: 1 !important;
    }
</style>
<script>
    import iButton from "iButton"
    import {Toast} from "mint-ui"
    import vDatePicker from "components/datepicker"

    let moment = require('moment');

    export default {
        components: {iButton, vDatePicker},
        props: {
            isShare: Boolean,
        },
        data() {
            return {
                code: '',
                calendarVisible: false,
                shareCodeVisible: false,
                shareMate: null,
                hotelQuery: {
                    start_date: null,
                    end_date: null,
                }
            }
        },
        computed: {
            checkInStartDate() {
                return this.$parent.userParams.start_date
            },
            checkInEndDate() {
                return moment(this.checkOutEndDate, 'YYYY-MM-DD').subtract(1, 'd').format('YYYY-MM-DD')
            },
            checkOutStartDate() {
                return moment(this.checkInStartDate, 'YYYY-MM-DD').add(1, 'd').format('YYYY-MM-DD')
            },
            checkOutEndDate() {
                return this.$parent.userParams.end_date
            }
        },
        created() {
            if (!this.checkInStartDate) {
                this.$store.commit('SPIN', true)
                this.skipHotel()
            }
        },
        methods: {
            skipHotel() {
                this.$router.push({name: "register_checkout"})
            },
            searchInvitationCode(e) {
                let code = this.code
                if (code.length <= 0) {
                    return
                }
                let self = this
                this.$http.post('share/verify', {
                    code: code
                }).then((response) => {
                    if (response.body.err == 0) {
                        self.shareMate = response.body.res
                    } else {
                        Toast(response.body.msg)
                    }
                }).finally(() => {
                    e.loading = false
                })
            },
            clearCode(e) {
                this.code = ''
                this.shareCodeVisible = true
                this.shareMate = null
                e.loading = false
            },
            submitCode(e) {
                let code = this.code
                if (code.length <= 0) {
                    return
                }
                let self = this
                this.$http.post('share/confirm', {
                    code: code
                }).then((response) => {
                    if (response.body.err == 0) {
                        self.addCartFunc(response.body.res)
                    } else {
                        Toast(response.body.msg)
                    }
                }).finally(() => {
                    e.loading = false
                })
            },
            addCartFunc(ids) {
                if (ids.length == 0) {
                    return false
                }

                let self = this
                this.$http.post('shoppingCart/addItems', {
                    type: 'hotel',
                    ids: ids,
                    quantity: 1
                }).then((response) => {
                    if (response.body.err == 0) {
                        self.$router.push({name: "register_checkout"})
                    } else {
                        Toast(response.body.msg)
                    }
                })
            },

            showCalendar() {
                this.calendarVisible = true
                this.shareCodeVisible = false
            },
            showShareCode() {
                this.shareCodeVisible = true
                this.calendarVisible = false
            },
            getHotelList(e) {
                this.$http.post('hotel/getList', this.hotelQuery)
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
                            this.$parent.hotelList = list
                            this.$parent.step = "hotelList"
                        }
                        e.loading = false
                    })
            },
        }
    }
</script>
