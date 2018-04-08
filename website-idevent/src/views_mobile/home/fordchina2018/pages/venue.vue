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
            </iui-block>

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
                hotelInfo: {
                    name: '厦门瑞颐大酒店',
                    name_en: 'Pan Pacific Xiamen',
                    pic: [
                        require("../images/hotel.jpeg"),
                    ],
                    phone: '0592-5078888',
                    phoneShow: '0592-5078888',
                    address: '厦门 思明区 鹭江道12号 ，和平码头对面',
                    introduce: '时间：2009年开业；2012年装修<br/>'+
                    '房间：588间<br/>' +
                    '琴岸咖啡厅<br/>' +
                    '自助早餐时间：06:30-10:30<br/>' +
                    '最多可容纳人数：320',
                    mapLink: 'https://map.baidu.com/mobile/webapp/search/search/qt=s&wd=%E5%8E%A6%E9%97%A8%E7%91%9E%E9%A2%90%E5%A4%A7%E9%85%92%E5%BA%97/newmap=1&ie=utf-8&vt=map&calluniversalonce=1&universalLinkCbkTag=1',
                },
            }
        },
        created(){
        },
        mounted() {
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
        height: 200px;
        .info {
            display: block;
            width: 100vw;
            height: 200px;
            background-repeat: no-repeat;
            background-position: center top;
            background-size: cover;
        }
    }
    .home-hotel {
        background: #f2f2f2;
        min-height: 100vh;
        .hotel-banner {
            height: 200px;
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
