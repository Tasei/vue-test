<template>
    <div class="grid-body">
        <div class="collection clearfix">
            <div v-for="let (el, index) in list" class="thumb">
                <div class="content"
                     v-lazy:background-image="el.photo.pic + '/w750'" @click="popupStartImage(el.photo, index)">
                </div>
            </div>
        </div>
        <div v-if="total > 0 && list.length >= total" class="text-gray clearfix text-center bottom-line"><slot>~ 已经到底啦，不能再拉啦 ~</slot></div>
        <!--照片查看大图-->
        <mt-popup class="mt-popup-image" modal="false" v-model="popupVisible" position="right">
            <div class="mt-container">
                <span class="icon icon-close" @click="popupClose"></span>
                <div id="imgBox">
                    <swiper :options="swiperOption" ref="mySwiper">
                        <swiper-slide v-for="(p, index) of list" >
                            <img v-lazy="p.photo.pic + watermark" class="slide-img"/>
                        </swiper-slide>

                    </swiper>
                    <div class="popup-action" v-if="current">
                        <div class="clearfix btn-action">
                            <span @click="addZan" class="iuifont"
                                  :class="{'iui-icon-like': !current.photo.is_liked, 'iui-icon-like-s': current.photo.is_liked}"></span>
                            <!--
                            <span class="iuifont iui-icon-shopping"></span>
                            <span class="pull-right iuifont iui-icon-print"></span>
                            -->
                        </div>
                        <div class="text-action">
                            <p>
                                <i class="iuifont iui-icon-like"></i>
                                {{current.photo.like_count}}人赞了此照片
                            </p>
                            <!--
                            <p>
                                <i class="iuifont iui-icon-shopping"></i>
                                剩余0次下载原图机会
                            </p>
                            -->
                        </div>
                    </div>
                </div>
            </div>
        </mt-popup>
    </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { Toast, Indicator, MessageBox } from 'mint-ui';
export default{
    props: {
        total: {
            type: Number,
            default: 0
        },
        list: {
            type: Array,
            default: []
        }
    },

    computed: {
        swiper() {
          return this.$refs.mySwiper.swiper
        },
        watermark() {
            if(this.meeting.settings && this.meeting.settings.iphoto && this.meeting.settings.iphoto.photo_watermark_encode) {
                return '?x-oss-process=image/resize,w_1125/watermark,image_' + this.meeting.settings.iphoto.photo_watermark_encode + ',g_se,x_10,y_10'
            } else {
                return ''
            }
        }
    },
    components:{
        swiper, swiperSlide
    },
    data(){
        return {
            current: null,
            popupVisible: false,
            swiperOption: {
                autoplay: false,
                onSlideChangeEnd: () => {
                    this.current = this.list[this.swiper.activeIndex]
                }
            },
        }
    },

    methods: {
        popupStartImage (p, index) {
            //
            this.swiper.slideTo(index, 1000, false)
            this.current = this.list[index]
            this.popupVisible = true
            //提示
            Toast({
                message: '长按图片可以保存哦',
                position: 'middle',
                duration: 1000
            });
        },

        popupClose () {
            this.popupVisible = false
        },

        //我给你点赞
        addZan() {
            let index = this.swiper.activeIndex
            let is_liked = parseInt(this.current.photo.is_liked)
            let like_count = parseInt(this.current.photo.like_count)
            this.current.photo.is_liked = is_liked ? 0 : 1
            this.current.photo.like_count = is_liked ? --like_count : ++like_count
            console.log(this.current.photo)
            this.list[index] = this.current
            this.$http.post('photo/addLike', {
                invitation_id: this.user.id,
                photo_id: this.current.photo.id,
                is_add: this.current.photo.is_liked
            })
            event.stopPropagation()
        }
    }

}
</script>
<style lang="less" scoped>
    .grid-body {
    }
    .collection {
        padding: 1.5px;
    }
    .thumb {
        display: inline-block;
        width: 50%;
        position: relative;
        overflow: hidden;
        float: left;
        padding: 1.5px;
        .content {
            padding-top: 56.25%;
            background-color: #eaeaea;
            position: relative;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
        }
    }

    .mt-popup-image {
        height: 100%;
        width: 100%;
        background-color: #000;
    }
    .bottom-line {
        margin-top: 30px;
        font-size: 12px;
    }
    .popup-action {
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
        z-index: 100;
        background-image: linear-gradient(-180deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.75) 100%);
        .btn-action {
            padding: 30px 20px 20px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            .iuifont {
                font-size: 24px;
                line-height: 1;
                color: #fff;
            }
            .iui-icon-shopping {
                margin-left: 20px;
            }
        }
        .text-action {
            padding: 20px;
            p {
                color: rgba(255, 255, 255, 0.5);
                font-size: 13px;
            }
        }

    }
</style>
