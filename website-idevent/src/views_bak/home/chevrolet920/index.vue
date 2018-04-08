<template>
    <div class="page-cover" :style="bgStyle" v-if="meeting">
        <div class="countdown">{{seconds}}s</div>
        <router-link class="btn-enter btn btn-lg btn-default btn-outline" :to="indexLink">
            直通920雪佛兰婚礼现场
        </router-link>
    </div>
</template>
<script>
    import Wechat from '../../../assets/js/wechat'
    let timer
    export default {
        computed: {
            bgStyle() {
                return {
                    backgroundImage: 'url(' + this.meeting.settings.register.login_background + ')'
                }
            }
        },
        data() {
            return {
                seconds: 6,
                indexLink: {name: 'home_page', query: {page: 'index'}}
            }
        },
        created() {
            if (this.user) {
                new Wechat(
                    '雪佛兰920梦幻集体婚礼',
                    '2017.09.20 上海 迪士尼度假区',
                    'http://m.idevent.cn/home/index?mid=chevrolet920',
                    'http://static.idevent.cn/oss-iphoto/meeting/attachment/4PPNA2AFthqx0PKq.jpg/b200'
                )

                this.$store.commit('SPIN')
                this.countdown()
            }
        },
        methods: {
            countdown() {
                let _this = this
                timer = setInterval(function () {
                    _this.seconds--
                    if (_this.seconds == 0) {
                        _this.$router.push(_this.indexLink)
                        clearTimeout(timer)
                    }
                }, 950)
            }
        },
        beforeDestory() {
            clearTimeout(timer)
        }
    }
</script>
<style lang="less" scoped>
    .countdown {
        color: #CF2042;
        position: absolute;
        display: inline-block;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        right: 10px;
        top: 10px;
        border: 1px solid #CF2042;
        padding: 5px;
        line-height: 20px;
        text-align: center;
    }

    .page-cover {
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        z-index: 9999999;
        background: #ffffff;
        background-position: top center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .btn-enter {
        display: block;
        width: 61.8% !important;
        height: 44px;
        line-height: 44px;
        position: absolute;
        left: 50%;
        bottom: 12%;
        transform: translateX(-50%);
        color: #00b459;
        font-size: 17px;
        text-align: center;
        /*border: 1px solid #00b459;*/
        border-radius: 1px;
    }

</style>
