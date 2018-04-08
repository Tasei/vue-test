<template>
    <div class="home-hotel">
        <div class="bg"></div>
        <div v-if="hotelInfo">
            <div class="hotel-banner">
                <img :src="hotelInfo.pic" class="img-responsive">
            </div>
            <ul class="list-group hotel-contact">
                <li class="list-group-item hotel-name font-bold">{{hotelInfo.name}}
                    <span class="font-normal" style="margin-top: 7px;display: block;font-size: 15px" v-if="hotelInfo.name_en">{{hotelInfo.name_en}}</span>
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

        <iui-block style="margin-top: 10px;">
            <div v-if="hotelInfo && hotelInfo.introduce">
                <iui-title>场馆简介</iui-title>
                <div class="hotel-introduce-content" v-html="hotelInfo.introduce"></div>
            </div>
            <br/>
            <br/>
            <div class="text-center">
                <a href="javascript:;" style="font-size: 15px;" @click="viewImg(map)">查看场馆地图</a>
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
        data() {
            return {
                hotelInfo: {
                    name: '上海国际会议中心',
                    name_en: 'Shanghai International Convention Center',
                    pic: require("../images/hotel.jpg"),
                    phone: '021-67001888',
                    address: '上海浦东滨江大道2727号',
                    introduce: '上海国际会议中心地处陆家嘴金融贸易中心，毗邻东方明珠电视塔，与外滩万国建筑群隔江相望，交通设施方便快捷，地理位置得天独厚，于1999年8月落成并正式对外营业。总建筑面积11万平方米，作为上海标志性新景观，被评为建国五十年十大经典建筑之一。<br/>内设五星级东方滨江大酒店，拥有273间景观豪华客房、风格迥异的餐厅以及丰富多样的娱乐与健身设施。'
                },
                map: require("../images/pm_3f_big.jpg"),
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
    .home-hotel {
        background: #f2f2f2;
        min-height: 100vh;
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
