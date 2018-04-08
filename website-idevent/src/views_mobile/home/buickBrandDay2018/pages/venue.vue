<template>
    <div class="home-hotel">
        <div>
            <div class="hotel-banner">
                <img :src="venueMap" class="img-responsive">
            </div>
            <ul class="list-group hotel-contact">
                <li class="list-group-item hotel-name">乌镇互联网国际会展中心

                </li>
                <li class="list-group-item">
                    <a href="https://m.amap.com/detail/index/poiid=B0FFGE2GFR">
                        <i class="fa fa-map-marker text-primary"></i>嘉兴市桐乡市环河路646号附近
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
                venueMap: require("../images/hzzx.jpg"),
            }
        }
    }
</script>
