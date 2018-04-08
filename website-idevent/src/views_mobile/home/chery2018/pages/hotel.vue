<template>
    <div class="fd-hotel">
        <div>
            <div class="hotel-banner">
                <img :src="hotelImg"/>
            </div>
            <ul class="list-group hotel-contact">
                <li class="list-group-item hotel-name">
                    {{$t('name')}}
                </li>
                <li class="list-group-item">
                    <a href="tel:0571-87338888">
                        <i class="fa fa-phone"></i>Tel: (0571)87338888
                        <i class="fa fa-angle-right arrow-right"></i>
                    </a>
                </li>
                <li class="list-group-item">
                    <a :href="'http://map.baidu.com/mobile/webapp/search/search/qt=s&wd='+ '杭州城中香格里拉大酒店'+'/newmap=1&ie=utf-8&vt=map'">
                        <i class="fa fa-map-marker"></i>{{$t('address')}}
                        <i class="fa fa-angle-right arrow-right"></i>
                    </a>
                </li>
            </ul>
        </div>

        <div class="hotel-info hotel-introduce">
            <h5 class="hotel-title"><i class="fa fa-caret-right fa-lg caret-right" aria-hidden="true"></i>{{$t('traffic')}}
            </h5>
            <div class="hotel-introduce-content" v-html="$t('intro')"></div>
        </div>

        <div class="hotel-info hotel-introduce">
            <h5 class="hotel-title" v-show="hotelBtn != 'false'"><i class="fa fa-caret-right fa-lg caret-right" aria-hidden="true"></i>{{$t('hotel-deadline')}}
            </h5>
            <!--<div class="hotel-introduce-content" v-html="$t('hotel-deadline-time')"></div>-->
            <a class="btn btn-primary btn-outline btn-lg m-logout-btn" @click="goHotelFn" v-show="hotelBtn != 'false'">
                {{$t('hotel-reservation')}}
            </a>
        </div>


    </div>
</template>
<script>
    import iButton from "iButton"

    export default {
        data() {
            return {
                hotelImg: require('../images/hotel.jpg'),
                hotelBtn:'',
            }
        },
        components: {
            iButton
        },
        created() {
            this.hotelBtn = this.meeting.websettings.hotelBtn
            this.$store.commit('SPIN')
        },
        locales: {
            en: {
                traffic: "Traffic Information",
                name: "Midtown Shangri-La Hangzhou",
                address: "Jiali center, yan 'an road, no.6 changshou road, xicheng district, hangzhou.China",
                intro: "<p>32km away from Xiaoshan International Airport</p><p>10km away from Hangzhou Railway Station</p>" +
                "<p>Traffic restrictions Related: Monday - Friday: 7:00-9:00 am, 4:30-6:30 pm,</p>" +
                    "<p>Vehicles with non-local license plates are prohibited to drive on the road.</p>" +
                "<p>Vehicles with Hangzhou license plates are restricted based on the last digit of license plate number and stagger the traffic peak.</p>" +
                "<p>March 21st last digit: 3 and 7 (prohibited)</p>" +
                "<p>March 22nd last digit 4 and 6 (prohibited)</p>" +
                "<p>March 23rd last digit 5 and 0 (prohibited)</p>" +
                "<p>On weekends (West Lake scenic area): odd-numbered license plates are prohibited on odd-numbered dates, even-numbered license plates are prohibited on even-numbered dates, 8:30-17:00, the rest of the time are without restrictions.</p>"
                ,
                'hotel-deadline': "Due to the shortage of hotel inventory, please book in time.",
                'hotel-deadline-time': "The hotel reservation deadline is 00:00, February 26th ,2018",
                'hotel-reservation': 'Hotel reservation',
            },
            zh: {
                traffic: "交通信息",
                name: "杭州城中香格里拉大酒店",
                address: "杭州市下城区长寿路6号延安嘉里中心",
                intro: "<p>距离萧山国际机场32公里</p> <p>距离杭州东站10公里</p>" +
                "<p>相关限行：周一-周五：早上7：00-9:00，</p>" +
                "<p>晚上4:30-6:30外牌不能在道路上开，</p>" +
                "<p>杭州车牌进行错峰限行。</p>" +
                "<p>3月21日尾号为3和7（禁行）</p>" +
                "<p>3月22日尾号为4和6(禁行）</p>" +
                "<p>3月23日尾号为5和0（禁行）</p>" +
                "<p>周末（西湖风景区）：单日限单号车，双日限双号车，时间是8：30-17:00，其余时间都可出行</p>",
                'hotel-deadline': "酒店房间资源紧缺，请及时预定",
                'hotel-deadline-time': "",
                'hotel-reservation': '酒店预订',
            }
        },
        methods: {
            goHotelFn() {
                if (this.$lang === "en") {
                    window.location.href = 'http://www.shangri-la.com/reservations/booking/en/index.aspx?hid=SHHZ&group_code=CJL210318&check_in=20180321&check_out=20180323'
                } else {
                    window.location.href = 'http://www.shangri-la.com/reservations/booking/sc/index.aspx?hid=SHHZ&group_code=CJL210318&check_in=20180321&check_out=20180323'
                }
            }
        }
    }
</script>
<style lang="less" scoped>
    @import "../../../../assets/style/hotel";

    .hotel-info {
        padding: 5px 15px;
    }

    .hotel-banner {
        max-height: 200px;
        img {
            width: 100%;
        }
    }
</style>
