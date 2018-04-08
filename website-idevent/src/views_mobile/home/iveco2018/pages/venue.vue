<template>
    <div class="home-hotel">
        <div class="bg"></div>
        <div v-if="this.hotelBtn">
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
        </div>
        <div class="hotelBtn" v-else>
            <img src='../assets/nohotel.png' alt="">
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
                },
                map: '查看线路图',
                book: '预定链接'
            }
        },
        data() {
            return {
                hotelBtn:false,
                hotelInfo: {
                    name: '博鳌国宾馆',
                    name_en: 'BOAO STATE GUEST HOUSE',
                    pic: [
                        require("../assets/hotel_boao.jpg"),
                    ],
                    phone: '0898-62629999',
                    phoneShow: '0898-62629999',
                    address: '海南省琼海市博鳌镇龙潭岭',
                    introduce: '博鳌国宾馆地处海南博鳌龙潭岭主峰山麓，占地400亩，近邻博鳌亚洲论坛永久会址，远眺万泉河、龙滚河、九曲江三江入海口，是海南岛独具一格的“山体国宾馆”。立足海南，面向世界——博鳌国宾馆将以东方文化和国际标准完美融合的服务，迎接政府贵宾、高端商务会议和休闲度假宾客！',
                    mapLink: 'https://map.baidu.com/mobile/webapp/search/search/qt=s&wd=%E5%8D%9A%E9%B3%8C%E5%9B%BD%E5%AE%BE%E9%A6%86/newmap=1&ie=utf-8&vt=map',
                },
                hotelInfo_dongyu: {
                    name: '东屿岛大酒店',
                    name_en: 'DONG YU ISLAND HOTEL',
                    pic: [
                        require("../assets/hotel_dongyu.jpg"),
                    ],
                    phone: '0898-62706888',
                    phoneShow: '0898-62706888',
                    address:'海南省琼海市远洋大道2号',
                    introduce: '酒店坐落于海南岛的东部琼海市博鳌镇风光旖旎的东屿岛上，万泉河在她身边蜿蜒流淌，不远处的三江入海口与隔玉带滩遥遥相望的南中国海构成一幅美轮美奂的景色。这里属于亚热带季风及海洋湿润气候区，年平均气温28度，终年无霜雪，冬季比海口温暖，夏季比三亚凉爽，这里也是长寿岛的寿乡之一。',
                    mapLink: 'https://map.baidu.com/mobile/webapp/search/search/qt=s&wd=%E4%B8%9C%E5%B1%BF%E5%B2%9B%E5%A4%A7%E9%85%92%E5%BA%97&c=289/newmap=1&ie=utf-8&vt=map',
                },
                hotelInfo_boaoya: {
                    name: '博鳌亚洲论坛大酒店',
                    name_en: 'BOAO FORUM FOR ASIA HOTEL',
                    pic: [
                        require("../assets/hotel_boaoya.jpg"),
                    ],
                    phone: '0898-62966888',
                    phoneShow: '0898-62966888',
                    address: '海南省琼海市博鳌东屿岛远洋大道1号',
                    introduce: '琼海博鳌亚洲论坛大酒店位于琼海博鳌东屿岛远洋大道，近博鳌东方文化院，毗邻于被指定为亚洲论坛永久地址的博鳌亚洲论坛会议中心。',
                    mapLink: 'https://map.baidu.com/mobile/webapp/search/search/qt=s&wd=%E5%8D%9A%E9%B3%8C%E4%BA%9A%E6%B4%B2%E8%AE%BA%E5%9D%9B%E5%A4%A7%E9%85%92%E5%BA%97&c=289/newmap=1&ie=utf-8&vt=map',
                },
            }
        },
        created(){
            this.getUserHotel();
        },
        mounted() {
            this.$store.commit('SPIN')
        },
        methods: {
            viewImg(src){
                window.location.href = src
            },
            getUserHotel(){
                console.log(this.user.user_name)
                let userHotel = this.user.user_name;
                if(userHotel.indexOf("博鳌国宾馆") != -1){
                    this.hotelBtn = true;
                    this.hotelInfo = this.hotelInfo;
                }
                if(userHotel.indexOf("东屿岛大酒店") != -1){
                    this.hotelBtn = true;
                    this.hotelInfo = this.hotelInfo_dongyu;
                }
                if(userHotel.indexOf("博鳌亚洲论坛大酒店") != -1){
                    this.hotelBtn = true;
                    this.hotelInfo = this.hotelInfo_boaoya;
                }
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
    .hotelBtn{

    }
</style>
