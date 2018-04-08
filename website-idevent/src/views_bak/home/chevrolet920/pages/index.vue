<template>
    <div class="yum__page">
        <div class="index-page-header">
            <img :src="require('../images/920banner.jpg')" class="img-responsive">
        </div>
        <!--banner-->
        <div class="banner-wrapper">
            <div class="live-player">
                <!--<iframe class="player" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true" :src="liveSrc"></iframe>-->
                <video class="player"
                       poster="http://static.idevent.cn/oss/chevrolet920/bg_01.jpg"
                       src="http://ilive.vod.idevent.cn/1239b2f33cd9421789b420a143ebec6f/034b2712caa34cbebdc0103ee149629c-5287d2089db37e62345123a1be272f8b.mp4" controls="controls"></video>
            </div>

            <div class="live-title">
                <h5>雪佛兰920梦幻集体婚礼回播</h5>
            </div>
        </div>

        <div class="yum__container">
            <div class="yum__container__content shadow__none transparent live__item clearfix">
                <div class="col-xs-12 clearfix">
                    <div class="col-xs-4">
                        <router-link class="content" :to="{name:'home_page', query:{page:'maps'}}">
                            <div class="banner banner-3">
                                <div class="avatar"></div>
                            </div>
                            <h5>自驾停车指南</h5>
                            <a href="javascript:;" class="link">
                                <span>前往查看</span>
                            </a>
                        </router-link>
                    </div>
                    <div class="col-xs-4">
                        <router-link class="content" :to="{name:'home_page', query:{page:'videos'}}">
                            <div class="banner banner-1">
                                <div class="avatar"></div>
                            </div>
                            <h5>精彩花絮</h5>
                            <a href="javascript:;" class="link">
                                <span>前去观看</span>
                            </a>
                        </router-link>
                    </div>
                    <div class="col-xs-4">
                        <a class="content" href="https://iphoto.idevent.cn/?mid=chevrolet920">
                            <div class="banner banner-2">
                                <div class="avatar"></div>
                            </div>
                            <h5>iPhotos</h5>
                            <a href="javascript:;" class="link">
                                <span>立即体验</span>
                            </a>
                        </a>
                    </div>
                </div>
            </div>
        </div><!--end-->

        <div class="yum__container" v-if="false">
            <div class="yum__container__content schedule">
                <div class="yum__container__title">婚礼日程</div>
                <div class="content">
                    <h3>9月20日 周三</h3>

                    <div class="cell clearfix" v-for="item in schedules">
                        <div class="cell__hd">{{item.time}}</div>
                        <div class="cell__bd">{{item.title}}</div>
                    </div>
                </div>
            </div>
        </div><!--end-->

        <a class="yum-fix" href="http://quyou.quyoucard.com/activity/intro?actname=Chevrolet&nonce=201708241448&from=singlemessage">
            <div class="yum-fix-card"></div>
        </a>

    </div>
</template>
<script>
    import _chunk from 'lodash/chunk'
    import _collection from 'lodash/collection'
    import {Indicator, Toast} from 'mint-ui'

    let tt;
    export default {
        data() {
            return {
//                liveSrc: 'http://ilive.idevent.cn/?a=index&c=show&id=72319&type=mobile',
                liveSrc: 'http://mudu.tv/show/videolink/260710/origin',
                schedules: [
                    {
                        time: "20:00-20:20",
                        title: "婚礼开始，介绍新人"
                    },
                    {
                        time: "20:20-20:35",
                        title: "结婚誓词，交换戒指"
                    },
                    {
                        time: "20:35-20:45",
                        title: "领导证婚"
                    },
                    {
                        time: "20:45-20:50",
                        title: "时光胶囊，并交接给汽车博物馆馆长"
                    },
                    {
                        time: "20:50-20:55",
                        title: "祝酒"
                    },
                    {
                        time: "20:55-20:58",
                        title: "快闪跳舞"
                    },
                    {
                        time: "20:58-21:01",
                        title: "迪士尼卡通人物出现，飘雪"
                    },
                    {
                        time: "21:01-21:03",
                        title: "一起跳舞"
                    },
                    {
                        time: "21:03-21:13",
                        title: "拍照时刻"
                    },
                    {
                        time: "21:13-21:15",
                        title: "蛋糕灯光秀"
                    },
                    {
                        time: "21:15-21:20",
                        title: "MC结束"
                    },

                ],
            }
        },
        computed: {
        },
        components: {
//            voteResult
        },
        created() {
            if (!this.user) {
                return
            }
            this.forceHttp()
            this.$store.commit('SPIN')
        },
        mounted() {
        },
        methods: {
            forceHttp() {
                if (window.location.protocol.toLowerCase() === "https:") {
                    window.location.href = window.location.href.replace("https:", "http:")
                }
            },
            toggleToast(text) {
                Toast(text)
            }
        }
    }
</script>
<style lang="less" scoped>
    @import "../style";
</style>
