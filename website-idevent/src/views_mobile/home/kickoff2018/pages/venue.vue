<template>
    <div class="home-hotel">
        <div class="bg"></div>
        <div>
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
            </iui-block>
            <iui-block style="margin-top: 10px;">
                <div>
                    <iui-title>会议</iui-title>
                    <h5 class="text-color">23日上午产品线会议</h5>
                    <div class="hotel-introduce-content">
                        ABL-会议中心2楼 Nusantara 3<br/>
                        AQT-会议中心2楼 Nusantara 1<br/>
                        Sampler-会议中心2楼 Jakarta A<br/>
                        TCM-会议中心2楼 Jakarta B<br/>
                        HemoCue-会议中心2楼 Bandung
                    </div>
                    <h5 class="text-color">
                        23日下午全体大会
                    </h5>
                    <div class="hotel-introduce-content">
                        会议中心1楼-AUDITORIUM
                    </div>
                    <div class="hotel-introduce-content"  v-if="isSeeColor == 'true'">
                        <a   :href="$t('hotel.plane_imgs[0].img')" :style="{'background-color':bgColor(0)}" class="a-image">{{$t('hotel.plane_imgs[0].name')}}</a>
                        <a   :href="$t('hotel.plane_imgs[1].img')" :style="{'background-color':bgColor(1)}" class="a-image">{{$t('hotel.plane_imgs[1].name')}}</a>
                    </div>
                </div>
            </iui-block>
            <iui-block style="margin-top: 10px;">
                <div>
                    <iui-title>用餐</iui-title>
                    <h5 class="text-color">22日晚餐</h5>
                    <div class="hotel-introduce-content">
                        时间：18:00-22:00<br/>
                        地点：B翼1楼Seasonal Tastes
                    </div>
                    <h5 class="text-color">
                        23日午餐
                    </h5>
                    <div class="hotel-introduce-content">
                        时间：12:00-13:30<br/>
                        地点：会议中心2楼Exhibition Gallery
                    </div>
                    <h5 class="text-color">
                        23日晚餐
                    </h5>
                    <div class="hotel-introduce-content">
                        时间：18:00-21:00<br/>
                        地点：会议中心1楼Mangupura Room
                    </div>
                    <div class="hotel-introduce-content" v-if="isSeeColor == 'true'">
                        <a   :href="$t('hotel.plane_imgs[2].img')" :style="{'background-color':bgColor(2)}" class="a-image">{{$t('hotel.plane_imgs[2].name')}}</a>
                        <a   :href="$t('hotel.plane_imgs[3].img')" :style="{'background-color':bgColor(3)}" class="a-image">{{$t('hotel.plane_imgs[3].name')}}</a>

                    </div>
                </div>
            </iui-block>
            <iui-block style="margin-top: 10px;">
                <div>
                    <iui-title>其他</iui-title>
                    <h5 class="text-color">24日团建集合点</h5>
                    <div class="hotel-introduce-content">
                        地点：会议中心1楼Exhibition Hall
                    </div>
                    <div class="hotel-introduce-content" v-if="isSeeColor == 'true'">
                        <a   :href="$t('hotel.plane_imgs[4].img')" :style="{'background-color':bgColor(4)}" class="a-image">{{$t('hotel.plane_imgs[4].name')}}</a>
                    </div>
                </div>
            </iui-block>
            <!--<iui-block style="margin-top: 10px;">-->
                <!--<div v-if="hotelInfo && hotelInfo.introduce">-->
                    <!--<div class="hotel-introduce-content" >-->
                        <!--<a v-for="(item,index) in  $t('hotel.plane_imgs')" :href="item.img" :style="{'background-color':bgColor(index)}" class="a-image">{{item.name}}</a>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</iui-block>-->
        </div>
    </div>
</template>
<script>
    import iuiBlock from "../../../components/iui/block.vue"
    import iuiTitle from "../../../components/iui/block_title.vue"
    export default{
        components: {
            iuiTitle, iuiBlock
        },
        locales: {
            zh: {
                hotel: {
                    intro_title: '酒店介绍',
                    plane_title:'总体平面图',
                    plane_imgs:[
                        {
                            img:require('../assets/0.jpg'),
                            name:'总体平面图',
                        },
                        {
                            img:require('../assets/1.jpg'),
                            name:'产品会议平面图',
                        },
                        {
                            img:require('../assets/2.jpg'),
                            name:'大会及晚宴平面图'
                        },
                        {
                            img:require('../assets/3.jpg'),
                            name:'餐饮及康乐',
                        },
                        {
                            img:require('../assets/4.png'),
                            name:'酒店班车',
                        }
                    ],
                },
                map: '查看线路图',
                book: '预定链接'
            }
        },
        data() {
            return {
                isSeeColor:'',
                hotelBtn:false,
                hotelInfo: {
                    name: '巴厘岛威斯汀酒店',
                    name_en: 'Westin Resort Bali',
                    pic: [
                        require("../assets/hotel.jpg"),
                    ],
                    phone: '(62) (361) 771906',
                    phoneShow: '(62) (361) 771906',
                    address: '印度尼西亚, 巴厘岛, 巴厘岛, 努沙杜瓦旅游区',
                    introduce: 'Westin Resort Bali(巴厘岛威斯汀酒店)，坐落于巴厘岛南部海岸的努沙杜瓦海滩，紧靠巴厘岛国际会议中心，距离机场仅10公里。这里有优质的白色私人沙滩、清澈的海水和碧蓝的天空，是一处美丽的热带天堂。您来此度假，将呼吸到沁人心脾的清甜空气，度过愉悦的假期。',
                    mapLink: 'https://map.baidu.com/mobile/webapp/place/detail/qt=ninf&wd=%E5%B7%B4%E5%8E%98%E5%B2%9B%E5%A8%81%E6%96%AF%E6%B1%80%E9%85%92%E5%BA%97&c=34803&searchFlag=bigBox&version=5&exptype=dep&src_from=webapp_all_bigbox&src=0&uid=fc65dcf2cd6e54eaaaf0cd4d&industry=life&qid=1679200671332119457/showall=1&pos=0&da_ref=listclk&da_qrtp=11&da_adquery=%E5%B7%B4%E5%8E%98%E5%B2%9B%E5%A8%81%E6%96%AF%E6%B1%80%E9%85%92%E5%BA%97&da_adtitle=%E5%B7%B4%E5%8E%98%E5%B2%9B%E5%A8%81%E6%96%AF%E6%B1%80%E9%85%92%E5%BA%97&da_adindus=%E9%85%92%E5%BA%97%3B%E6%98%9F%E7%BA%A7%E9%85%92%E5%BA%97&detail_from=list&vt=map',
                },
            }
        },
        mounted() {
            this.isSeeColor = this.meeting.websettings.is_see_color;
            this.$store.commit('SPIN')
        },
        methods: {
            viewImg(src){
                window.location.href = src
            },
            bgColor(i){
                let BgColors = ['#4ab1de','#71cdc9','#d5c371','#e686af','#75c68e']
                return BgColors[i]
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
   .a-image{
       display: inline-block;
       color: #fff;
       -webkit-border-radius: 2px;
       -moz-border-radius: 2px;
       border-radius: 2px;
       padding:5px 10px;
       margin-top:10px;
       margin-bottom:10px;
       margin-right:10px;
   }
    .text-color{
        color: #666 !important;
    }
</style>
