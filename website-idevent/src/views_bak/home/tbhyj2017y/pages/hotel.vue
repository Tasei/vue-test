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
                <iui-title>酒店介绍</iui-title>
                <div class="hotel-introduce-content" v-html="hotelInfo.introduce"></div>
            </div>
        </iui-block>
        <div><img src="../images/hotel_map.jpg" alt=""></div>
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
                    name: '广西南宁万达嘉华酒店',
                    name_en: 'Guangxi nanning wanda realm hotel',
                    pic: require("../images/hotel.jpg"),
                    phone: '0771-2538888',
                    address: '广西南宁市五象新区良堤路6号',
                    introduce: "作为万达酒店及度假村旗下首家桂系风情设计的酒店，南宁万达嘉华度假酒店提取传统壮族民居设计元素，将其深化发展成为优雅高贵的宫殿风格。224间设施完备的客房拥有私密观景阳台，宾客可将邻近邕江的静谧磅礴景观尽收眼底。所有房间内均配有“万达嘉华之床”，为宾客带来美妙的睡眠体验。酒店内设三个标志性餐饮场所，分别为“品珍”中餐厅，“美食汇”全日制餐厅和 “大堂吧”。"
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
