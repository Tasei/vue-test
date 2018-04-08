<template>
    <div class="home-hotel">
        <div class="bg"></div>
        <div v-if="hotelInfo">
            <div class="hotel-banner">
                <img :src="hotelInfo.pic" class="img-responsive">
            </div>
            <ul class="list-group hotel-contact">
                <li class="list-group-item hotel-name font-bold">{{hotelInfo.name}}
                    <span class="font-normal" style="margin-top: 7px;display: block;font-size: 15px"
                          v-if="hotelInfo.name_en">{{hotelInfo.name_en}}</span>
                </li>
                <li class="list-group-item" v-if="hotelInfo.phone">
                    <a :href="'tel:'+hotelInfo.phone">
                        <i class="fa fa-phone text-primary"></i>Tel: {{hotelInfo.phone}}
                        <i class="fa fa-angle-right arrow-right"></i>
                    </a>
                </li>
                <li class="list-group-item" v-if="hotelInfo.address">
                    <a
                        :href="'http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D'+ hotelInfo.address +' '+hotelInfo.name">
                        <i class="fa fa-map-marker text-primary"></i>{{hotelInfo.address}}
                        <i class="fa fa-angle-right arrow-right"></i>
                    </a>
                </li>
            </ul>
        </div>

        <iui-block>
            <div class="text-center" style="margin-bottom: 20px;">
                <router-link class="btn btn-outline btn-primary" style="width: 80%;" :to="{name: 'register_hotel'}">
                    酒店预订
                </router-link>
            </div>

            <div v-if="hotelInfo && hotelInfo.introduce">
                <iui-title>酒店简介</iui-title>
                <div class="hotel-introduce-content" v-html="hotelInfo.introduce"></div>
            </div>
            <div style="margin-top: 15px">
                <!--<a :href="'http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D'+ hotelInfo.address +' '+hotelInfo.name" style="font-size: 15px;">查看线路图</a>-->
            </div>
            <btn-home></btn-home>
        </iui-block>
    </div>
</template>
<script>
    import iuiBlock from "../../../components/iui/block.vue"
    import iuiTitle from "../../../components/iui/block_title.vue"
    import btnHome from "../../../components/btn_home.vue"

    export default {
        components: {
            iuiTitle, iuiBlock, btnHome
        },
        data() {
            return {
                hotelInfo: {
                    name: '北京首都机场朗豪酒店',
                    name_en: 'Langham Place Beijing Capital Airport',
                    pic: require("../images/hotel.jpg"),
                    phone: '+86-010-64575555',
                    address: '北京 顺义区 首都机场三号航站楼二经路1号',
                    introduce: '北京首都机场朗豪酒店毗邻首都机场三号航站楼，提供24小时穿梭巴士(3号航站楼每20分钟一班, 2号航站楼每30分钟一班)。乘坐机场快轨到达市中心约15分钟；距离北京超大型新中国国际展览中心约4公里，可便捷前往；艺术爱好者热衷的798艺术区与酒店也相距不远。酒店拥有各类设计时尚，宽敞豪华的客房及套房，配备隔音落地玻璃窗、Blissful 静夜睡床，配有淋浴间及独立超大浴缸的大理石浴室。24小时开放的CLUB L贵宾会占地两层，专向行政客房及套房客人开放，可享受多项尊贵礼遇。酒店同时拥有5间餐厅和酒吧、20多间多功能厅及会议室，共计2735平方米，更设有现代有氧健身中心、LIFE！ '
                },
                map: ''//require("../images/pm_3f_big.jpg"),
            }
        },
        mounted() {
            this.$store.commit('SPIN')
        },
        methods: {
            viewImg(src) {
                window.location.href = src
            }
        }

    }
</script>
<style lang="less" scoped>
    .home-hotel {
        background: #f2f2f2;
        min-height: 100vh;
    }

    .bg {
        position: fixed;
        left: 0;
        top: 0;
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
