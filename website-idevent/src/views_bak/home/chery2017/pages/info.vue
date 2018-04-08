<template>
<div>
    <mt-swipe :auto="0" class="swiper_container">
        <mt-swipe-item v-for="item in imgUrl" class="inner"> 
            <a class="info" :style="{ 'background-image': 'url(' + item + ')' }" href="http://www.cheryjaguarlandrover.com"></a>
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
                        require('assets/images/mobile/chery/info_bg_f.jpg'),
                        require('assets/images/mobile/chery/info_bg_s.jpg'),
                        require('assets/images/mobile/chery/info_bg_t.jpg')
                    ],
                    en: [
                        require('assets/images/mobile/chery/info_bg_f_en.jpg'),
                        require('assets/images/mobile/chery/info_bg_s_en.jpg'),
                        require('assets/images/mobile/chery/info_bg_t_en.jpg')
                    ]
                }
            }
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