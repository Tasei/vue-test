<template>
    <div class="yum__page" v-if="config">
        <!--banner-->
        <!--<div v-if="config.liveOn===0">-->
            <!--<img src="./images/banner_coming.png"/>-->
        <!--</div>-->
        <!--<router-link :to="{name:'home_page', query:{page:'live'}}" v-else-if="config.liveOn===1">-->
            <!--<img src="./images/banner_live.png"/>-->
        <!--</router-link>-->
        <!--<div v-else-if="config.liveOn===2">-->
            <!--<img src="./images/banner_end.png"/>-->
        <!--</div>-->

        <div>
            <img src="./images/banner.png"/>
        </div>
        <div class="yum__container">
            <div class="yum__container__content live__message">
                <h5>{{meeting.name}}回看 11月2日~14日</h5>
            </div>
        </div><!--end-->

        <div class="yum__container" v-if="config.videoOn">
            <div class="yum__container__content shadow__none transparent live__item clearfix">
                <div class="col-xs-12 clearfix">
                    <div class="col-xs-4">
                        <router-link :to="{name: 'home_page', query: {page: 'videos', idx: 0}}"
                                     class="content">
                            <div class="banner banner-1">
                                <div class="avatar"></div>
                            </div>
                            <h5>公司信息</h5>
                            <a href="javascript:;" class="link">
                                <span>观看视频</span>
                            </a>
                        </router-link>
                    </div>
                    <div class="col-xs-4">
                        <router-link :to="{name: 'home_page', query: {page: 'videos', idx: 1}}"
                                     class="content">
                            <div class="banner banner-2">
                                <div class="avatar"></div>
                            </div>
                            <h5>品牌信息</h5>
                            <a href="javascript:;" class="link">
                                <span>观看视频</span>
                            </a>
                        </router-link>
                    </div>
                    <div class="col-xs-4">
                        <router-link :to="{name: 'home_page', query: {page: 'videos', idx: 2}}"
                                     class="content">
                            <div class="banner banner-3">
                                <div class="avatar"></div>
                            </div>
                            <h5>文化沟通</h5>
                            <a href="javascript:;" class="link">
                                <span>观看视频</span>
                            </a>
                        </router-link>
                    </div>
                </div>
            </div>
        </div><!--end-->

        <div class="yum__container" v-if="false">
            <div class="yum__container__content schedule">
                <div class="yum__container__title">会议内容</div>
                <div class="content">
                    <!--<div class="schedule-shit"></div>-->
                    <h3>11月1日 周三</h3>
                    <h5><span>网络直播开幕式</span></h5>
                    <div class="cell clearfix">
                        <div class="cell__hd">14:00-14:07</div>
                        <div class="cell__bd">独立上市一周年庆祝仪式</div>
                    </div>
                    <div class="cell clearfix">
                        <div class="cell__hd">14:07-14:53</div>
                        <div class="cell__bd">公司发展战略介绍及颁奖</div>
                    </div>
                    <div class="cell clearfix">
                        <div class="cell__hd">14:53-15:57</div>
                        <div class="cell__bd">品牌发展战略介绍及颁奖</div>
                    </div>
                    <div class="cell clearfix">
                        <div class="cell__hd">15:57-16:00</div>
                        <div class="cell__bd">认同鼓励</div>
                    </div>
                    <div class="cell clearfix">
                        <div class="cell__hd">16:00-16:30</div>
                        <div class="cell__bd">中场休息</div>
                    </div>
                    <div class="cell clearfix">
                        <div class="cell__hd">16:30-17:30</div>
                        <div class="cell__bd">企业文化音乐剧</div>
                    </div>
                    <div class="cell clearfix">
                        <div class="cell__hd">17:30</div>
                        <div class="cell__bd">直播结束</div>
                    </div>
                    <h5><span>其他</span></h5>
                    <div class="cell clearfix">
                        <div class="cell__bd clear">本视频直播网站开放至11月14日</div>
                    </div>
                </div>
            </div>
        </div><!--end-->

        <div class="yum__container">
            <div class="yum__container__content question">
                <div class="yum__container__title">
                    问卷调查
                    <!--<span class="question-tag"></span>-->
                </div>
                <div class="content">
                    感谢观看百胜中国Founders' Day活动直播，期待您的宝贵建议与反馈。
                </div>
                <div v-if="!config.surveyOn" class="link">
                    <span>填写问卷(稍后开放)</span>
                </div>
                <router-link v-else :to="{name:'register_form2'}" class="link">
                    <span>填写问卷</span>
                </router-link>
            </div>
        </div><!--end-->

        <a :href="'tel:' + contact" class="contact">
            <span>如有问题，请联系我们</span>
        </a>
        <router-link :to="{name:'red_packet_poker'}" class="yum-fix" v-if="false">
            <div class="yum-fix-card"></div>
        </router-link>
    </div>
</template>
<script>
    import _chunk from 'lodash/chunk'
    import _collection from 'lodash/collection'
    import {Indicator, Toast, MessageBox} from 'mint-ui'
//    import voteResult from './components/vote_result.vue'

    let tt;
    export default {
        data() {
            return {
                config: null,
                contacts: [
//                    '021-61425802',
//                    '021-61425836',
//                    '021-61425817',
                    '021-61425830'
                ]
            }
        },
        computed: {
            avatar() {
                if (this.message && this.message.invitation && this.message.invitation.weixin) {
                    return this.message.invitation.weixin.headimgurl
                } else {
                    return require('./images/human.png')
                }
            },
            contact() {
                return _collection.sample(this.contacts)
            }
        },
        components: {
//            voteResult
        },
        created() {
            MessageBox.alert('活动已关闭, 谢谢观看')
//            if (!this.user) {
//                return
//            }
//            this.forceHttp()
//            this.getConfig()
        },
        mounted() {
        },
        destroyed() {
            clearInterval(tt)
        },
        methods: {
            forceHttp() {
                if (window.location.protocol.toLowerCase() === "https:") {
                    window.location.href = window.location.href.replace("https:", "http:")
                }
            },
            getConfig() {
                this.$http.post('custom/yum2017/getConfig').then((response) => {
                    if (response.body.err == 0) {
                        this.config = response.body.res
                    }
                }).then(() => {
                    this.$store.commit('SPIN')
                })
            },

            toggleToast(text) {
                Toast(text)
            }
        }
    }
</script>
<style lang="less" scoped>
    @import "style";
</style>
