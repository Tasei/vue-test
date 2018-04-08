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
                <iui-title>酒店简介</iui-title>
                <div class="hotel-introduce-content" v-html="hotelInfo.introduce"></div>
            </div>
            <div style="margin-top: 15px">
                <a :href="'http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D'+ hotelInfo.address +' '+hotelInfo.name" style="font-size: 15px;">查看线路图</a>
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
        data() {
            return {
                hotelInfo: {
                    name: '杭州国际博览中心',
                    name_en: 'HANGZHOU INTERNATIONAL EXPO CENTER',
                    pic: require("../assets/hotel.jpg"),
                    phone: '+86（571）8290 8888',
                    address: '杭州市萧山区钱江世纪城奔竞大道353号',
                    introduce: '杭州国际博览中心位于素有“人间天堂”美誉之称的杭州，坐落于钱塘江南岸、钱江三桥以东的萧山区钱江世纪城，与奥体中心共同组成杭州奥体博览中心。杭州国际博览中心隶属于杭州奥体博览中心萧山建设投资有限公司，委托中国最大的会展输出管理集团——北辰会展集团管理运营，预计将于2016年10月投入使用。其总占地面积19.7公顷，是集会议、展览、餐饮、旅游、酒店、商业、写字楼等多元业态的综合体。 杭州国际博览中心以其得天独厚的地理位置、方便快捷的交通网络、规格多样的活动场地、江南意蕴与现代简约相融的场馆设计，成为各类展览、会议、活动的首选场地！'
                },
                map: ''//require("../images/pm_3f_big.jpg"),
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
