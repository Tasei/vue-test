<template>
    <div class="home-hotel">
        <div>
            <div class="hotel-banner">
                <img :src="venueMap" class="img-responsive">
            </div>
            <ul class="list-group hotel-contact">
                <li class="list-group-item hotel-name">上海･上海港国际客运码头

                </li>
                <li class="list-group-item">
                    <a href="http://m.amap.com/detail/index/poiid=B0FFGIR62A">
                        <i class="fa fa-map-marker text-primary"></i>上海虹口区东大名路800号
                        <i class="fa fa-angle-right arrow-right"></i>
                    </a>
                </li>
            </ul>
        </div>

        <iui-block>
            <router-link :to="{name:'home_page', query:{page:'hotelMap'}}">会场距各酒店总览图</router-link>
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
                venueMap: require("../images/venue_map.png"),
            }
        }
    }
</script>
