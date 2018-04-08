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
                <a href="http://www.nerago.com/sys/hp_rm.do?hotelCode=SOHOTO16671" style="font-size: 15px;">查看酒店官网</a>
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
                    name: '上海雅居乐万豪酒店',
                    name_en: 'Shanghai Marriott Hotel City Centre',
                    pic: require("../assets/hotel1.jpg"),
                    phone: '021-51078338、3126877',
                    address: '上海市黄浦区西藏中路555号',
                    introduce: "<p>上海雅居乐万豪酒店坐落于繁华的西藏中路，俯瞰上海的地理中心——人民广场，与各个文化、娱乐和购物场所近在咫尺；约5分钟即可抵达地铁1、2、8号线人民广场站，信步可至南京路步行街、人民公园和外滩；您可搭乘地铁2号线或选择酒店机场接送服务轻松至浦东或虹桥机场。<br></p>" +
                    "<p>酒店专为成功商务人士及休闲旅客提供舒适的居住环境和便捷的设施。七百余间宽敞的房间配备万豪品牌的“Revive”舒适之床。位于37楼的行政酒廊，更能让您尊享独特服务，还可一览市中心美景。住在行政房间的客人还可享受以下礼遇：快速入住/退房登记、免费早餐、全天候茶点和晚宴鸡尾酒供应。<br></p>" +
                    "<p>酒店还有设备齐全的健身中心以及25米室内游泳池及水疗。酒店的5个餐厅更是上海市中心的用餐圣地：万豪中餐厅的沪粤式佳肴，隐樽的北海道日料以及都会尚膳餐厅的国际自助餐。在大堂吧享受一套海派下午茶，亦或是至一刻馆品味咖啡蛋糕都是您不可错过的选择。<br></p>" +
                    "<p>上海雅居乐万豪酒店将为您提供卓越的服务，让您在此拥有一个旅获精彩的非凡旅程。<br></p>"
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
