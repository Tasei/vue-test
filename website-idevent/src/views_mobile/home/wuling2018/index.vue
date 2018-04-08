<template>
    <div class="fd-index" v-if="user">
        <div>
            <img :src="banner" class="img-responsive" />
        </div>
        <div class="list-box">
            <div class="list-group">
                <div class="group">
                    <div class="list-item x fuck safe" style="background-color: #fec73f">
                        <router-link :to="{name:'home_page',query: {page: 'safe'}}">
                            <div class="item">
                                <div class="content">
                                    <span class="icon icon-safe"></span>
                                    <h5>安全须知</h5>
                                    <p>Safety</p>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="list-item x fuck hotel" style="background-color: #b94c9a">
                        <router-link :to="{name:'home_page',query: {page: 'hotel'}}">
                            <div class="item">
                                <div class="content">
                                    <span class="icon icon-hotel"></span>
                                    <h5>酒店信息</h5>
                                    <p>Hotel</p>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="list-item xx fuck schedule" style="background-color: #c52027" @click="goschedule">
                        <!-- <router-link :to="{name:'home_page',query: {page: 'schedule'}}"> -->
                            <div class="item">
                                <div class="content">
                                    <div class="clearfix center">
                                        <div class="text-block pull-left text-left">
                                            <h5>会议议程</h5>
                                            <p class="wulingCenter">Agenda</p>
                                        </div>
                                        <span class="icon icon-schedule pull-right" style="position: relative; margin-top: 3px; top: -4px"></span>
                                    </div>
                                </div>
                            </div>
                        <!-- </router-link> -->
                    </div>
                    <div class="list-item xm x fuck wish" style="background-color: #54459a">
                        <div class="item">
                            <a href="http://m.autobaojun.com/action/baojun_zhanhui/wx_index.php" class="fuka">
                                <div class="content">
                                        <span class="icon icon-wish" style="margin-top: 20%"></span>
                                        <h5>祝福</h5>
                                        <p>Blessing</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="list-item x res fuck" style="background-color: #0d9b61">
                         <router-link :to="{name:'home_page',query: {page: 'file'}}">
                            <div class="item">
                               <!--  <a href="https://file0b5e65b04b93.iamh5.cn/v3/idea/e7PC2aKM?nid=7330680&wxid=oZwt-wEcZV14cy_JCcgbxqUX2KFk&latestUser=1&suid=ohAJ7wbXOapYHj4uKLCdE2p81_DE&from=singlemessage" class="fuka"> -->
                                    <div class="content">
                                        <span class="icon icon-res" style="margin-top: 20%"></span>
                                        <h5>文件资料</h5>
                                        <p>Document</p>
                                    </div>
                                <!-- </a> -->
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="group">
                    <div class="list-item xx" style="background-color: #eb7d24">
                        <router-link :to="{name:'home_page',query: {page: 'meeting_info'}}">
                            <div class="item">
                                <div class="content center" style="padding: 0 18%">
                                    <div class="clearfix">
                                        <span class="icon icon-dahui pull-right" style="position: relative; margin-top: 4px; top: -4px"></span>
                                        <div class="pull-left text-left">
                                            <h5 style="margin: 0; padding: 0">年会日程</h5>
                                            <p class="wulingCenter">Schedule</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="list-item x fuck notice" style="background-color: #0a9bd2">
                        <router-link :to="{name:'home_page',query: {page: 'dinner'}}">
                            <div class="item">
                                <div class="content">
                                    <span class="icon icon-notice"></span>
                                    <h5>用餐提醒</h5>
                                    <p>Dining</p>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="list-item x fuck girl" style="background-color: #33bca2">
                        <router-link :to="{name:'home_page',query: {page: 'assistant'}}">
                            <div class="item">
                                <div class="content">
                                    <span class="icon icon-help"></span>
                                    <h5>我的秘书</h5>
                                    <p>Assistant</p>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="list-item x fuck traffic" style="background-color: #1d3f65">
                        <router-link :to="{name:'home_page',query: {page: 'traffic'}}">
                            <div class="item">
                                <div class="content">
                                    <span class="icon icon-traffic" style="margin-top: 20%"></span>
                                    <h5>交通&天气</h5>
                                    <p>Transportation</p>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="list-item x fuck meeting" style="background-color: #c2b600">
                        <router-link :to="{name:'home_page',query: {page: 'secretary'}}">
                            <div class="item">
                                <div class="content">
                                    <span class="icon icon-meeting" style="margin-top: 20%"></span>
                                    <h5>廉洁参会</h5>
                                    <p>Integrity</p>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    import {Toast} from "mint-ui"
    import 'linearicons'
    export default{
        data() {
            return{
                // mark: require('./images/mark.svg')
            }
        },
        computed: {
            user() {
                return this.$store.state.user
            },
            banner() {
                return this.meeting.settings.home ? this.meeting.settings.home.index_banner : '';
            },
        },
        mounted() {
            this.$store.commit('SPIN', false)
        },
        methods: {
             goschedule() {
                let link = this.meeting.websettings.goschedule;
                if(link == 'false'){
                    Toast('敬请期待')
                }else{
                    this.$router.push({name:'home_page',query: {page: 'schedule'}})
                }
            }
        }
    }
</script>
<style lang="less" scoped>
    .wulingCenter{
        text-align: center;
        font-size:16px !important;
    }
    .content {
        position: relative;
        text-align: center;
    }
    .center {
        padding: 0 19%;
        width: 100%;
        transform: translate3d(0, -50%, 0);
        margin-top: 50%;
    }
    .fuka {
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
    .icon {
        width: 30px;
        height: 30px;
        text-align: center;
        display: inline-block;
        margin-top: 16px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;

    }
    .list-item p {
        line-height: 14px;
        font-size: 12px;
        margin: 0;
        padding: 0;
        color: rgba(255, 255, 255, 0.75);
    }
    .icon-safe {
        background-image: url('./images/icon_aqxz.png')
    }
    .icon-traffic {
        background-image: url('./images/icon_jttq.png')
    }
    .icon-hotel {
        background-image: url('./images/icon_hotel.png')
    }
    .icon-schedule {
        background-image: url('./images/icon_hyyc.png')
    }
    .icon-wish {
        background-image: url('./images/icon_zfs.png')
    }
    .icon-res {
        background-image: url('./images/icon_wjzl.png')
    }
    .icon-dahui {
        background-image: url('./images/icon_dhrc.png')
    }
    .icon-notice {
        background-image: url('./images/icon_yctx.png')
    }
    .icon-help {
        background-image: url('./images/icon_wdms.png')
    }
    .icon-meeting {
        background-image: url('./images/icon_ljch.png')
    }
    .text-block {
        h5, p {
            margin: 0;
            padding: 0;
        }
    }
    .fuck {
        &::after, &::before {
            content: '';
            position: absolute;
            display: block;
            width: 50px;
            height: 40px;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: 60%;
            z-index: 10;
        }
    }
    .safe {
        &.fuck {
            &::after {
                top: 50%;
                right: -17px;
                background-image: url('./images/jdxx_d.png');
                transform: translate3d(0, -50%, 0);
            }
        }
    }
    .schedule {
        &.fuck {
            &::after {
               background-image: url('./images/aqxz_d.png');
               top: -10px;
               left: 5px;
            }
        }
    }
    .hotel {
        &.fuck {
            &::after {
                background-image: url('./images/dhrc_d.png');
                top: 50%;
                right: -18px;
                transform: translate3d(0, -50%, 0);
            }
        }
    }
    .wish {
        &.fuck {
            &::after {
                background-image: url('./images/hyyc_d.png');
                top: -10px;
                left: 0;
            }
        }
    }
    .res {
        &.fuck {
            &::after {
                background-image: url('./images/zf_d.png');
                top: 50%;
                left: -18px;
                transform: translate3d(0, -50%, 0);
            }
        }
    }
    .traffic {
        &.fuck {
            &::after {
                background-image: url('./images/wjzl_d.png');
                top: 50%;
                left: -18px;
                transform: translate3d(0, -50%, 0);
            }
        }
    }
    .notice {
        &.fuck {
            &::after {
                background-image: url('./images/yctx_d.png');
                left: 50%;
                top: -32px;
                transform: translate3d(-50%, 0, 0);
            }
        }
    }
    .girl {
        &.fuck {
            // &::after {
            //     background-image: url('./images/syxx_d.png');
            //     left: 15px;
            //     bottom: -13px;
            //     transform: translate3d(-50%, 0, 0);
            // }
            &::before {
               background-image: url('./images/wdms_d.png');
               top: 20%;
               left: -36px;
            }
        }
    }
    .meeting {
        &.fuck {
            &::after {
                background-image: url('./images/jttq_d.png');
                left: -18px;
                top: 50%;
                transform: translate3d(0, -50%, 0)
            }
        }
    }
    .fd-index {
        // background-color: #0e1b23;
        background-color: #fff;
        min-height: 100vh;
        overflow: hidden;
        position: relative;
        .list-group {
            clear: both;
            overflow: hidden;
            padding: 1%;
            .group {
                width: 50%;
                float: left;
            }
            .list-item {
                width: 100%;
                position: relative;
                background-color: #ddd;
                margin: 1%;
                float: left;
                &.x {
                    width: 48%;
                    h5 {
                        font-weight: normal!important;
                        font-size: 12px;
                        margin-top: 0;
                        margin-bottom: 0
                    }
                }
                &.xx {
                    width: 98%;
                    h5 {
                        font-weight: normal!important;
                        font-size: 20px;
                        margin-bottom: 0;
                    }
                }
                &.long {
                    width: 98%;
                    .item {
                        padding-top: 49%;
                    }
                }
                .item {
                    width: 100%;
                    padding-top: 100%;
                    .content {
                        h5 {
                            color: #fff;
                            margin-bottom: 0;
                        }
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                    }
                }

            }
        }
    }
</style>
