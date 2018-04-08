<template>
    <div class="home-hotel">
        <div v-if="hotelInfo">
            <div class="hotel-banner" v-if="hotelInfo.attachments">
                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide v-for="pic in hotelInfo.attachments" :key="pic.id">
                        <img :src="pic.url + '/w750'" class="img-responsive">
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
            <ul class="list-group hotel-contact">
                <li class="list-group-item hotel-name">{{hotelInfo.name}}
                    <!-- <span v-if="hotelInfo.name_en">{{hotelInfo.name_en}}</span> -->
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
            <div v-if="hotelInfo && hotelInfo.introduce">
                <iui-title>酒店简介</iui-title>
                <div class="hotel-introduce-content" v-html="hotelInfo.introduce"></div>
            </div>

            <a v-if="hotelInfo && hotelInfo.facilities" class="btn btn-primary btn-outline btn-lg m-logout-btn" :href="hotelInfo.facilities">
                酒店预订
            </a>
            <router-link :to="{name:'home_index'}" class="btn btn-home btn-lg btn-primary">返回首页</router-link>
        </iui-block>

    </div>
</template>
<script>
    import iuiBlock from "../../../components/iui/block.vue"
    import iuiTitle from "../../../components/iui/block_title.vue"
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    export default{
        components: {
            iuiTitle, iuiBlock, swiper, swiperSlide
        },
        data() {
            return {
                hotelInfo: null,
                swiperOption: {
                    autoplay: 3000,
                    setWrapperSize: true,
                    autoHeight: true,
                    pagination: '.swiper-pagination',
                }
            }
        },
        props: {
            id: [String, Number],
        },
        created() {
            this.getDetail()
        },
        methods: {
            getDetail () {
                let self = this
                self.$http.post('hotel/getById', {
                    id: this.id
                }).then((response) => {
                    let ret = response.body
                    if (ret.err == 0) {
                        self.hotelInfo = ret.res
                        self.$store.commit('SPIN', false)
                    }
                })
            },
            goHotelFn(link){
                window.location.href = link;
            }
        }
    }
</script>
