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
                        <a :href="'tel:'+hotelInfo.phone" style="color: #00549c;">
                            <i class="fa fa-phone-bg text-primary"></i>Tel: {{hotelInfo.phoneShow}}
                            <!-- <i class="fa fa-angle-right arrow-right"></i> -->
                        </a>
                    </li>
                    <li class="list-group-item" v-if="hotelInfo.address">
                        <a :href="hotelInfo.mapLink" style="color: #00549c;">
                            <i class="fa fa-map-marker-bg text-primary"></i><span>{{hotelInfo.address}}</span>
                            <!-- <i class="fa fa-angle-right arrow-right pd-right"></i> -->
                        </a>
                    </li>
                </ul>
            </div>

            <iui-block style="margin-top: 10px;">
                <div v-if="hotelInfo && hotelInfo.introduce">
                    <h4 class="iui-block-title">
                        <i class="fa fa-caret-right"></i><slot>{{$t('hotel.intro_title')}}</slot>
                    </h4>
                    <div class="hotel-introduce-content" v-html="hotelInfo.introduce"></div>
                </div>
            </iui-block>
            <iui-block style="margin-top: 10px;">
                <div v-if="hotelInfo && hotelInfo.introduce">
                    <h4 class="iui-block-title">
                        <i class="fa fa-caret-right"></i><slot>{{$t('hotel.intro_facilities')}}</slot>
                    </h4>
                    <div class="hotel-facilities-title">
                        娱乐：酒店拥有健身房、室外游泳池、SPA馆、美发美容沙龙。
                    </div>
                    <dl class="hotel-recreation">
                        <dt>SPA馆：</dt>
                        <dd>酒店6楼和7楼</dd>
                    </dl>
                    <dl class="hotel-recreation">
                        <dt>健身房：</dt>
                        <dd>酒店6楼</dd>
                    </dl>
                    <dl class="hotel-recreation">
                        <dt>美发美容沙龙：</dt>
                        <dd>酒店7楼</dd>
                    </dl>
                    <dl class="hotel-recreation">
                        <dt>室外游泳池：</dt>
                        <dd>酒店6楼</dd>
                    </dl>
                    <div class="hotel-facilities-title">
                        会议：酒店的4楼、5楼、8楼拥有众多大大小小的会议室。
                    </div>
                    <dl class="hotel-recreation">
                        <dt>2018友邦新闻发布会地点：</dt>
                        <dd>酒店4楼 Amber Room</dd>
                    </dl>
                    <dl class="hotel-recreation">
                        <dt>媒体专访地点：</dt>
                        <dd>酒店8楼 Conference Room4</dd>
                    </dl>
                    <ul class="hotel-facilities-img">
                        <li>
                            <img src="../assets/jdss_1.png" alt="">
                        </li>
                        <li>
                            <img src="../assets/jdss_2.png" alt="">
                        </li>
                        <li>
                            <img src="../assets/jdss_3.png" alt="">
                        </li>
                    </ul>
                </div>
            </iui-block>
            <iui-block style="margin-top: 10px;">
                <div>
                    <h4 class="iui-block-title">
                        <i class="fa fa-caret-right"></i><slot>{{$t('hotel.intro_traffic')}}</slot>
                    </h4>
                    <div>
                        <p>景点：酒店距离税务贸易中心（Tax Trade Centre）仅有300米，距离胡志明市政厅500米，距离歌剧院500米，距离联合广场（Union Square）500米，距离胡志明美术馆900米，均可步行抵达。</p>
                        <p>购物：酒店距离滨城市场、西贡夜市仅800米，距离西贡购物中心600米，均可步行抵达。</p>
                        <p>友邦越南大厦：酒店距离友邦越南大厦约700米。</p>
                    </div>
                </div>
            </iui-block>
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
                    intro_facilities: '酒店设施',
                    intro_traffic: '周边交通',
                },
            }
        },
        data() {
            return {
                isSeeColor:'',
                hotelBtn:false,
                hotelInfo: {
                    name: '西贡万韵酒店',
                    name_en: 'The Reverie Saigon',
                    pic: [
                        require("../assets/mgmgrand-sanya-exterior.png"),
                    ],
                    phone: '+842839209520',
                    phoneShow: '+842839209520',
                    address: '22-36 Nguyen Hue Blvd,Ben Nghe Ward, District 1,Ho Chi Minh City, Vietnam',
                    introduce: '酒店位于胡志明市一区的中心位置，2015年开业，共有286间房。这座 38 层高的豪华酒店堪称世界奢华酒店之一，它的设计之精美堪比一座艺术博物馆，贴心的服务让众人为之心动。每间客房都是特别定制的，使用了意大利顶级家居设计品牌，每个房间都有独特的落地窗设计，可以饱览全城风景，整个酒店复杂精致，充满奇思妙想。',
                    mapLink: 'https://map.baidu.com/mobile/webapp/place/detail/qt=ninf&wd=%E8%83%A1%E5%BF%97%E6%98%8E%E5%B8%82%E8%A5%BF%E8%B4%A1%E4%B8%87%E9%9F%B5%E9%85%92%E5%BA%97&c=33335&searchFlag=bigBox&version=5&exptype=dep&src_from=webapp_all_bigbox&sug_forward=&src=0&uid=ca93391b0c19ca50a3d2301f&industry=life&qid=16867401564352070482/showall=1&pos=0&da_ref=listclk&da_qrtp=11&da_adtp=&da_log=&da_adquery=%E8%83%A1%E5%BF%97%E6%98%8E%E5%B8%82%E8%A5%BF%E8%B4%A1%E4%B8%87%E9%9F%B5%E9%85%92%E5%BA%97&da_adtitle=%E8%83%A1%E5%BF%97%E6%98%8E%E5%B8%82%E8%A5%BF%E8%B4%A1%E4%B8%87%E9%9F%B5%E9%85%92%E5%BA%97&da_adindus=%E9%85%92%E5%BA%97;%E6%98%9F%E7%BA%A7%E9%85%92%E5%BA%97&detail_from=list&vt=map&universalLinkCbkTag=1'
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
    .fa-phone-bg{
        width: 13px;
        height: 14px;
        margin-right: 8px;
        display: inline-block;
        background: url("../assets/call.png");
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
    }
    .fa-map-marker-bg{
        width: 13px;
        height: 14px;
        margin-right: 8px;
        display: inline-block;
        background: url("../assets/pin.png");
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
    }
    /* .theme-blue .text-primary{
        color: #DC6379 !important;
    } */
    .theme-blue .fa-caret-right:before{
        content: "\F0DA";
        color: #DC6379;
    }
    .hotel-facilities-title{
        margin: 10px 0;
    }
    .hotel-recreation{
        overflow: hidden;
        margin-bottom: 0;
        color: #999;
        dt{
            font-weight: normal;
            float: left;
        }
        dd{
            float: left;
        }
    }
    .hotel-facilities-img{
        overflow: hidden;
        width: 94vw;
        margin-top: 10px;
        margin-bottom: 0;
        li{
            list-style: none;
            float: left;
            margin-bottom: 0;
            margin-right: 5px;
            img{
                width: 29.9vw;
                margin: 0;
            }
        }
    }
    .theme-blue .home-hotel .hotel-contact li a .arrow-right.pd-right {
        padding-right: 5px;
    }
</style>
