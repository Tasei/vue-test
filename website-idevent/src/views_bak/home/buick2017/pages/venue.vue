<template>
    <div class="home-hotel">
        <div>
            <div class="hotel-banner">
                <img :src="venueMap" class="img-responsive">
            </div>
            <ul class="list-group hotel-contact">
                <li class="list-group-item hotel-name">武汉汉秀剧场

                </li>
                <li class="list-group-item">
                    <a href="http://m.amap.com/detail/index/poiid=B0FFF54G3Y">
                        <i class="fa fa-map-marker text-primary"></i>武汉市武昌区水果湖街东湖路138号-2栋
                        <i class="fa fa-angle-right arrow-right"></i>
                    </a>
                </li>
            </ul>
        </div>

        <iui-block>
            <router-link :to="{name:'home_page', query:{page:'hotelMap'}}">场地距各酒店总览图</router-link>
            <btn-home></btn-home>
        </iui-block>

    </div>
</template>
<script>
    import iuiBlock from "../../../components/iui/block.vue"
    import iuiTitle from "../../../components/iui/block_title.vue"
    import btnHome from "../components/btn_home.vue"
    export default{
        components: {
            iuiTitle, iuiBlock, btnHome
        },
        created() {
            this.$store.commit('SPIN')
        },
        data(){
            return {
                venueMap: require("../images/hanxiu.jpg"),
            }
        }
    }
</script>
