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
                <a href="http://www.shangri-la.com/cn/hangzhou/midtownshangrila/" style="font-size: 15px;">查看酒店官网</a>
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
                    name: '杭州城中香格里拉大酒店',
                    name_en: 'Midtown Shangri-La Hangzhou',
                    pic: require("../assets/hotel.jpg"),
                    phone: '0571-87338888',
                    address: '杭州下城区长寿路6号',
                    introduce: "<p>杭州城中香格里拉大酒店位于长寿路延安路嘉里中心，近地铁凤起路站；紧邻杭州交通枢纽，可便捷前往灵隐寺，河坊街，断桥、苏堤等景点。<br></p>" +
                    "<p>自酒店步行可至湖滨国际名品街、In77购物中心，至西湖约8分钟左右；周围还有武林广场、杭州大厦、银泰百货，购物、游玩都很方便。<br></p>" +
                    "<p>酒店共有417间宽敞的客房和套房，最小面积43平方米，装修时尚大气，可满足不同住宿需求。<br></p>" +
                    "<p>这里多间美味餐厅将为你提供各种精致美食，中餐厅、啤酒吧、大堂酒廊，以及设有多个“开放式厨房”、供应国际美食的全日用餐咖啡厅。<br></p>" +
                    "<p>酒店拥有面积为1,600平米的大宴会厅和9间小型多功能厅；还附设健身房、室内游泳池、按摩浴、蒸汽浴及桑拿浴室等丰富的健身及娱乐设施；香格里拉CHI水疗提供豪华护理，舒缓你的身心。</p>"
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
