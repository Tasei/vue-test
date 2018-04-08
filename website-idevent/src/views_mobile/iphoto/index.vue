<template>
    <div>
        <!--header bannner-->
        <div class="header">
            <div class="banner">
                <div v-if="banner" v-lazy:background-image="banner"></div>
            </div>
            <div class="avatar">
                <img v-if="logo" :src="logo + '/b400'"/>
            </div>
        </div>

        <!--tab-->
        <h3 class="fix text-center text-dark">精彩瞬间</h3>
        <div class="iphoto-tab clearfix" v-sticky :sticky-top="0">
            <div class="col-xs-12 clearfix">
                <div class="col-xs-6 newest text-right" @click="changeType(0)" :class="{'active': sort_type==0}">
                    <span>新作</span>
                </div>
                <div class="col-xs-6 hottest text-left" @click="changeType(1)" :class="{'active': sort_type==1}">
                    <span>热门</span>
                </div>
                <a href="javascript:;" class="tab-animation-bar"
                   :class="{'tab-animation': tab_animation, 'left': sort_type==0, 'right': sort_type==1}"></a>
            </div>
        </div>
        <div v-infinite-scroll="getList"
             infinite-scroll-disabled="loading"
             infinite-scroll-distance="10">
            <photo-grid :list="list" :total="total"></photo-grid>
        </div>
    </div>
</template>
<script>
    import { Toast, Indicator, MessageBox } from 'mint-ui';
    import VueSticky from 'vue-sticky'
    import photoGrid from './components/grid'
    export default {
        components: {
           photoGrid
        },
        data(){
            return {
                list: [],
                page: 1,
                total: 0,
                sort_type: 0,
                user_album: null,
                meeting_album: null,
                loading: true,
                tab_animation: false
            }
        },
        computed: {
            banner() {
                if(this.meeting.settings && this.meeting.settings.iphoto && this.meeting.settings.iphoto.homepage_banner) {
                    return this.meeting.settings.iphoto.homepage_banner
                } else {
                    return false
                }
            },

            logo() {
                if(this.meeting.settings && this.meeting.settings.iphoto && this.meeting.settings.iphoto.homepage_logo) {
                    return this.meeting.settings.iphoto.homepage_logo
                } else {
                    return false
                }
            }
        },
        directives: {
            'sticky': VueSticky,
        },

        created () {
            this.getUserAlbum()
        },

        methods: {
            //用户相册基本信息
            getUserAlbum () {
                if (!this.user) {
                    return
                }
                let self = this
                //获取照片列表
                this.$http.post('photo/getAlbumByMeetingId', {
                    meeting_id: this.user.meeting_id,
                    invitation_id: this.user.id
                }).then((response) => {
                    if (response.body.err == 0) {
                        self.user_album = response.body.res
                    }
                }).then(() => {
                    this.getMeetingAlbum()
                })

            },

            //会议基本信息
            getMeetingAlbum () {
                let self = this
                this.$http.post('photo/getAlbumByMeetingId', {
                    meeting_id: this.user.meeting_id
                }).then((response) => {
                    if (response.body.err == 0) {
                        self.meeting_album = response.body.res
                    }
                }).then(() => {
                    self.getList()
                })
            },

            //会议相册列表
            getList () {
                let self = this
                //Indicator.open()
                this.loading = true
                this.$http.post('photo/list', {
                    meeting_id: this.meeting.id,
                    page: this.page,
                    limit: 15,
                    sort_type: this.sort_type
                }).then((response) => {
                    if (response.body.err == 0) {
                        let ret = response.body.res
                        for(let el of ret.list) {
                            self.list.push(el)
                        }
                        self.total = ret.total
                        self.page = parseInt(self.page) + 1
                        this.$nextTick(() => {
                            if(self.total > self.list.length) {
                                self.loading = false
                            }
                        })
                    }
                }).then((response) => {
                    Indicator.close()
                    this.$store.commit('SPIN')
                })
            },

            changeType (sort_type) {
                if(this.sort_type == sort_type) {
                    return false
                }
                this.tab_animation = true
                this.list = []
                this.page = 1
                this.total = 0
                this.sort_type = sort_type
                //Indicator.open()
                //this.$store.commit('SPIN', true)
                this.getList()
            }
        }
    }
</script>
<style lang="less" scoped>
    .header {
        position: relative;
        padding-bottom: 35px;
        .banner {
            padding-top: 50.67%;
            background-color: #d8d8d8;
            position: relative;
            overflow: hidden;
            div {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                background-color: #eeeeee;
            }
        }
        .avatar {
            position: absolute;
            left: 50%;
            bottom: 0;
            width: 70px;
            height: 70px;
            margin-left: -35px;
            background-image: url("../../assets/images/iphoto/avatar.png");
            background-repeat: no-repeat;
            background-position: center;
            background-size: 100% 100%;
            border-radius: 50%;
            overflow: hidden;
        }
    }

    h3.fix {
        background-color: #fff;
        z-index: 1;
        font-size: 24px;
        margin: 15px 0;
    }
    .iphoto-tab {
        background-color: #ffffff;
        .col-xs-12, .col-xs-6 {
            padding-left: 0;
            padding-right: 0;
        }
        span {
            display: inline-block;
            font-size: 15px;
            padding: 14px 0 11px 0;
        }
        .hottest {
            padding-left: 48px;
            background: #ffffff;
        }
        .newest {
            padding-right: 48px;
            background: #ffffff;
        }
    }
</style>
