<template>
    <div class="home-hotel">
        <div class="bg"></div>
        <div v-if="hotelInfo">
            <div class="hotel-banner">
                <mt-swipe :auto="4000" class="swiper_container">
                    <mt-swipe-item v-for="p in hotelInfo.pic">
                        <div class="info" :style="{ 'background-image': 'url(' + p + ')' }"></div>
                    </mt-swipe-item>
                </mt-swipe>
            </div>
            <ul class="list-group hotel-contact">
                <li class="list-group-item hotel-name font-bold">{{hotelInfo.name}}
                    <span class="font-normal" style="margin-top: 7px;display: block;font-size: 15px" v-if="hotelInfo.name_en">{{hotelInfo.name_en}}</span>
                </li>
                <li class="list-group-item" v-if="hotelInfo.phone">
                    <a :href="'tel:'+hotelInfo.phone">
                        <i class="fa fa-phone text-primary"></i>Tel: {{hotelInfo.phoneShow}}
                        <i class="fa fa-angle-right arrow-right"></i>
                    </a>
                </li>
                <li class="list-group-item" v-if="hotelInfo.address">
                    <a :href="hotelInfo.mapLink">
                        <i class="fa fa-map-marker text-primary"></i>{{hotelInfo.address}}
                        <i class="fa fa-angle-right arrow-right"></i>
                    </a>
                </li>
            </ul>
        </div>

        <iui-block style="margin-top: 10px;">
            <div v-if="hotelInfo && hotelInfo.introduce">
                <iui-title>{{$t('hotel.intro_title')}}</iui-title>
                <div class="hotel-introduce-content" v-html="hotelInfo.introduce"></div>
            </div>
            <div style="margin-top: 15px">
                <a :href="hotelInfo.mapLink" style="font-size: 15px;">{{$t('map')}}</a>
            </div>
            <div style="margin-top: 15px">
                <a href="https://www.starwoodmeeting.com/Book/icesap" style="font-size: 15px;">{{$t('book')}}</a>
            </div>
        </iui-block>

    </div>
</template>
<script>
    import iuiBlock from "../../../../views_mobile/components/iui/block.vue"
    import iuiTitle from "../../../../views_mobile/components/iui/block_title.vue"
    export default{
        components: {
            iuiTitle, iuiBlock
        },
        locales: {
            en: {
                hotel: {
                    address: 'No.66 Lvshun Road. Shanghai, SHA 200080',
                    intro_title: 'Introduction',
                    intro: 'Live it up at W Shanghai - The Bund along the bank of the Huangpu River, one of the world’s most stylish locales. Bask in breathtaking landscapes that blend modern skyscrapers with Eastern and Western architecture of decades past. Check out the surrounding area’s colorful mix of creativity and commerce: chic boutiques,celebrated restaurants and frenetic nightlife. Our hotel is 11 miles from Shanghai Hongqiao International Airport (SHA) and 20 miles from Shanghai Pudong International Airport (PVG). Special room rates have been secured by ICESAP for registered delegates.',
                },
                map: 'View Map',
                book: 'Book your accommodation here',
            },
            zh: {
                hotel: {
                    address: '上海市旅顺路66号, 邮政编码 200080',
                    intro_title: '会场简介',
                    intro: '上海式的时尚享受。上海外滩W酒店高踞于世界最时尚的都市街道之一，是都市生活的完美体现。景象壮观的黄浦江、喧嚣热闹的夜生活、驰名中外的美食餐厅，精致优雅的时尚聚会，处处洋溢着浓郁的都市氛围。敬请您前来领略精彩无比的上海风情。',
                },
                map: '查看线路图',
                book: '预定链接'
            }
        },
        data() {
            return {
                hotelInfo: {
                    name: '外滩W酒店',
                    name_en: 'W Shanghai – The Bund',
                    pic: [
                        require("../assets/hotel.jpg"),
                        require("../assets/hotel_2.jpg"),
                        require("../assets/hotel_3.jpg"),
                        require("../assets/hotel_2.png"),
                        require("../assets/hotel_3.png")
                    ],
                    phone: '86-21-2286-9999',
                    phoneShow: '(86)(21) 2286 9999',
                    address: this.$t('hotel.address'),
                    introduce: this.$t('hotel.intro'),
                    mapLink: 'http://map.baidu.com/mobile/webapp/search/search/qt=s&wd=%e4%b8%8a%e6%b5%b7%e5%a4%96%e6%bb%a9W%e9%85%92%e5%ba%97/newmap=1&ie=utf-8&vt=map',
                },
            }
        },
        mounted() {
            this.$store.commit('SPIN')
        },
        methods: {
            viewImg(src){
                window.location.href = src
            }
        }

    }
</script>
<style lang="less" scoped>
    .swiper_container{
        width: 100vw;
        height: 156px;
        .info {
            display: block;
            width: 100vw;
            height: 156px;
            background-repeat: no-repeat;
            background-position: center top;
            background-size: cover;
        }
    }
    .home-hotel {
        background: #f2f2f2;
        min-height: 100vh;
        .hotel-banner {
            height: 156px;
        }
    }
    .bg {
        position: fixed;
        left: 0;
        top:0;
        right: 0;
        bottom: 0;
        background: #f2f2f2;
        z-index: -1;
    }
    .hotel-contact {
        .list-group-item {
            &:last-child {
                &:after {
                    height: 0;
                }
            }
        }

    }
</style>
