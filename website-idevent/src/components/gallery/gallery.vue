<template>
    <div>
        <!--照片查看大图-->
        <mt-popup class="mt-popup-image" :modal=false v-model="popupVisible">
            <div class="mt-container">
                <span class="icon icon-close" @click="popupClose"></span>
                <div id="imgBox" @click="popupClose">
                    <swiper :options="swiperOption" ref="mySwiper">
                        <swiper-slide v-for="(p, index) of list" >
                            <img v-lazy="p" class="slide-img"/>
                        </swiper-slide>

                    </swiper>
                </div>
            </div>
        </mt-popup>
    </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        onClose: {
            type: Function,
            default: () => {}
        },
        list: {
            type: Array,
            default: () => {return []}
        }
    },
    data() {
        return {
            popupVisible: true,
            swiperOption: {
                autoplay: false,
            }
        }
    },
    computed: {
        swiper() {
          return this.$refs.mySwiper.swiper
        },
    },
    methods: {
        popupClose() {
            this.popupVisible = false
        }
    },
    components:{
        swiper, swiperSlide
    },
}
</script>

<style lang="less" scoped>
    .mt-popup-image {
        height: 100%;
        width: 100%;
        background-color: #000;
    }
</style>
