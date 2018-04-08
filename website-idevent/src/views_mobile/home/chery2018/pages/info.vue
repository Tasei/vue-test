<template>
<div>
    <mt-swipe :auto="0" class="swiper_container">
        <mt-swipe-item v-for="item in imgUrl" class="inner">
            <a class="info" :style="{ 'background-image': 'url(' + item.src + ')' }" :href="item.link"></a>
        </mt-swipe-item>
    </mt-swipe>
</div>
</template>
<script>

    export default{
        data(){
            return {
                items: {
                    zh: [
                        {
                            src:require('../images/lsjg_ch.jpg'),
                            link:'https://www.landrover.com.cn/vehicles/range-rover-evoque/index.html'
                        },
                        {
                            src:require('../images/sx_ch.jpg'),
                            link:'https://www.landrover.com.cn/vehicles/discovery-sport/index.html'
                        },
                        {
                            src:require('../images/xfl_ch.jpg'),

                            link:'https://www.jaguar.com.cn/jaguar-range/xf/index.html',
                        },
                        {
                            src:require('../images/xel_ch.jpg'),
                            link:'https://www.jaguar.com.cn/jaguar-range/xe/index.html'
                        }
                    ],
                    en: [
                        {
                            src:require('../images/lsjg_en.jpg'),
                            link:'https://www.landrover.com.cn/vehicles/range-rover-evoque/index.html'
                        },
                        {
                            src:require('../images/sx_en.jpg'),
                            link:'https://www.landrover.com.cn/vehicles/discovery-sport/index.html'
                        },
                        {
                            src:require('../images/xfl_en.jpg'),
                            link:'https://www.jaguar.com.cn/jaguar-range/xf/index.html'
                        },
                        {
                            src:require('../images/xel_en.jpg'),
                            link:'https://www.jaguar.com.cn/jaguar-range/xe/index.html'
                        }
                    ]
                }
            }
        },
        created() {
            this.$store.commit('SPIN')
        },
        computed: {
            imgUrl() {
                return this.$lang === 'en' ? this.items.en : this.items.zh
            }
        }
    }
</script>
<style lang="less" scoped>
    .swiper_container{
        width: 100vw;
        height: 100vh;
        .info {
            display: block;
            width: 100vw;
            height: 100vh;
            background-repeat: no-repeat;
            background-position: center top;
            background-size: cover;
        }
    }
    .link {
        display: block;
        width: 80%;
        height: 25px;
        bottom: 19%;
        right: 0;
        position: fixed;

    }
</style>
