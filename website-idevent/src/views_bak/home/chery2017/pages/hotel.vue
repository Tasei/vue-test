<template>
    <div class="fd-hotel">
        <div>
            <div class="hotel-banner">
                <img src="https://static.idevent.cn/oss/product/04LzOpSQVTQQHXYnm.jpeg/w750"/>
            </div>
            <ul class="list-group hotel-contact">
                <li class="list-group-item hotel-name">
                    {{$t('name')}}
                </li>
                <li class="list-group-item">
                    <a href="tel:0898-36398888">
                        <i class="fa fa-phone"></i>Tel: 0898-36398888
                        <i class="fa fa-angle-right arrow-right"></i>
                    </a>
                </li>
                <li class="list-group-item">
                    <a :href="'http://map.baidu.com/mobile/webapp/search/search/qt=s&wd='+ '海南省海口市 美兰区 琼山大道2号 海口鲁能希尔顿酒店'+'/newmap=1&ie=utf-8&vt=map'">
                        <i class="fa fa-map-marker"></i>{{$t('address')}}
                        <i class="fa fa-angle-right arrow-right"></i>
                    </a>
                </li>
            </ul>
        </div>

        <div class="hotel-info hotel-introduce">
            <h5 class="hotel-title"><i class="fa fa-caret-right fa-lg caret-right" aria-hidden="true"></i>{{$t('traffic')}}</h5>
            <div class="hotel-introduce-content" v-html="$t('intro')"></div>
        </div>

        <div class="hotel-info hotel-introduce">
            <h5 class="hotel-title"><i class="fa fa-caret-right fa-lg caret-right" aria-hidden="true"></i>{{$t('hotel-deadline')}}</h5>
            <div class="hotel-introduce-content" v-html="$t('hotel-deadline-time')"></div>
        </div>

    </div>
</template>
<script>
    export default{
        data(){
            return {
            }
        },
        locales: {
            en: {
                traffic: "Traffic Information",
                name: "Hilton Haikou Meilan",
                address: "No.2 Qiongshan Avenue, Meilan District, Haikou, Hainan, China",
                intro: "<p>19km away from Haikou Meilan International Airport</p><p>36.1km away from Haikou Railway Station</p><p>14.8km away from Haikou East Railway Station</p>",
                'hotel-deadline': "Hotel Reservation Deadline",
                'hotel-deadline-time': "The hotel reservation deadline is 00:00, February 26th ,2017",
            },
            zh: {
                traffic: "交通信息",
                name: "海口鲁能希尔顿酒店",
                address: "海南省海口市 美兰区 琼山大道2号",
                intro: "<p>距离海口美兰国际机场约19km</p> <p>距离海口火车站约36.1km</p> <p>距离海口东火车站约14.8km</p>",
                'hotel-deadline': "酒店预订截止时间",
                'hotel-deadline-time': "酒店预订截止时间为2017年2月26日零点",
            }
        }
    }
</script>
<style lang="less" scoped>
    @import "../../../../assets/style/hotel";
</style>
