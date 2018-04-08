<template>
    <div class="yum__page" v-if="config">
        <!--banner-->
        <div class="banner">
            <div v-if="config.live==0" class="live" @click="toggleToast('09:30开启，敬请期待')">
                <div class="live__bg coming"></div>
            </div>
            <router-link v-else :to="{name: 'home_page', query: {page: 'live'}}" class="live">
                <div class="live__bg" :class="{'ing': config.live==1, 'playback': config.live == 2}"></div>
            </router-link>
        </div>

        <div class="yum__container">
            <div class="yum__container__content live__message">
                <h5>2017百胜中国餐厅经理年会直播</h5>
                <div class="scroll" v-if="messageList.length > 0">
                    <p :style="{backgroundImage: 'url(' +avatar+ ')'}" v-if="message">
                        {{message.invitation && message.invitation.user_name ? message.invitation.user_name
                        : (message.invitation && message.invitation.weixin) ? message.invitation.weixin.nickname : '游客'}}: {{message.content}}
                    </p>
                </div>
            </div>
        </div><!--end-->

        <div class="yum__container">
            <div class="yum__container__content shadow__none transparent live__item clearfix">
                <div class="col-xs-12 clearfix">
                    <div class="col-xs-4">
                        <div class="content" v-if="!config.video" @click="toggleToast('11:15开启，敬请期待')">
                            <div class="banner banner-1">
                                <div class="avatar"></div>
                            </div>
                            <h5>肯德基</h5>
                            <a href="javascript:;" class="link">
                                <span>观看视频</span>
                            </a>
                        </div>
                        <router-link v-else :to="{name: 'home_page', query: {page: 'videos', idx: 0}}"
                                     class="content">
                            <div class="banner banner-1">
                                <div class="avatar"></div>
                            </div>
                            <h5>肯德基</h5>
                            <a href="javascript:;" class="link">
                                <span>观看视频</span>
                            </a>
                        </router-link>
                    </div>
                    <div class="col-xs-4">
                        <div class="content" v-if="!config.video" @click="toggleToast('11:15开启，敬请期待')">
                            <div class="banner banner-2">
                                <div class="avatar"></div>
                            </div>
                            <h5>必胜客</h5>
                            <a href="javascript:;" class="link">
                                <span>观看视频</span>
                            </a>
                        </div>
                        <router-link v-else :to="{name: 'home_page', query: {page: 'videos', idx: 1}}"
                                     class="content">
                            <div class="banner banner-2">
                                <div class="avatar"></div>
                            </div>
                            <h5>必胜客</h5>
                            <a href="javascript:;" class="link">
                                <span>观看视频</span>
                            </a>
                        </router-link>
                    </div>
                    <div class="col-xs-4">
                        <div class="content" v-if="!config.video" @click="toggleToast('11:15开启，敬请期待')">
                            <div class="banner banner-3">
                                <div class="avatar"></div>
                            </div>
                            <h5>必胜宅急送</h5>
                            <a href="javascript:;" class="link">
                                <span>观看视频</span>
                            </a>
                        </div>
                        <router-link v-else :to="{name: 'home_page', query: {page: 'videos', idx: 3}}"
                                     class="content">
                            <div class="banner banner-3">
                                <div class="avatar"></div>
                            </div>
                            <h5>必胜宅急送</h5>
                            <a href="javascript:;" class="link">
                                <span>观看视频</span>
                            </a>
                        </router-link>
                    </div>
                </div>
            </div>
        </div><!--end-->

        <div class="yum__container">
            <div class="yum__container__content schedule">
                <div class="yum__container__title">会议内容</div>
                <div class="content">
                    <!--<div class="schedule-shit"></div>-->
                    <h3>6月19日 周一</h3>
                    <h5>网络直播开幕式</h5>
                    <div class="cell clearfix">
                        <div class="cell__hd">09:30-10:00</div>
                        <div class="cell__bd">进入直播室（暖场互动）</div>
                    </div>
                    <div class="cell clearfix">
                        <div class="cell__hd">10:00-10:05</div>
                        <div class="cell__bd">开场</div>
                    </div>
                    <div class="cell clearfix">
                        <div class="cell__hd">10:05-10:20</div>
                        <div class="cell__bd">CEO讲话</div>
                    </div>
                    <div class="cell clearfix">
                        <div class="cell__hd">10:20-11:10</div>
                        <div class="cell__bd" style="margin-left: 106px;">《百胜演说家》主题演讲</div>
                    </div>
                    <div class="cell clearfix">
                        <div class="cell__hd">11:10-11:15</div>
                        <div class="cell__bd">主持人结语</div>
                    </div>
                    <h5 class="max">品牌沟通视频</h5>
                    <div class="cell clearfix">
                        <div class="cell__hd">11:15-</div>
                        <div class="cell__bd">KFC/ PHDI/ PHHS</div>
                    </div>
                    <h5 class="max">其他</h5>
                    <div class="cell clearfix">
                        <div class="cell__bd clear">本视频直播网站开放至6月30日</div>
                    </div>
                </div>
            </div>
        </div><!--end-->


        <div class="yum__container" v-if="vote && vote.is_active != 0">
            <div class="yum__container__content vote">
                <div class="yum__container__title" v-html="vote.title"></div>
                <div class="content" v-if="vote.is_active == 1 && vote.is_voted == 0">
                    <div class="desc" v-html="vote.subhead"></div>
                    <div class="vote-list clearfix">
                        <div class="col-xs-12 clearfix" v-for="options of voteList">
                            <div class="col-xs-6" v-for="opt of options">
                                <div class="vote-item" @click="voteSelected(opt)">
                                    <div class="pic" :style="{backgroundImage: 'url(' + opt.pic + '/w750)'}">
                                        <div v-if="opt.selected" class="selected"></div>
                                    </div>
                                    <h5 class="text-dark" v-html="getOpText(opt.text)"></h5>
                                    <p class="text-gray">{{opt.label}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="javascript:;" @click="voteSubmit" class="vote-btn">投票</a>
                </div>
                <div class="content" v-if="vote.is_voted == 1 || vote.is_active == -1">
                    <div class="desc" v-html="vote.subhead"></div>
                    <vote-result :vote="vote" :list="rankList"></vote-result>
                </div>

            </div>
        </div><!--end-->

        <div class="yum__container">
            <div class="yum__container__content question">
                <div class="yum__container__title">
                    问卷调查<span class="question-tag"></span>
                </div>
                <div class="content">
                    直播年会怎么样？来这里留下你的回馈，随机红包随心拿。
                </div>
                <div v-if="!config.poll" class="link" @click="toggleToast('11:15开启，敬请期待')">
                    <span>填写问卷</span>
                </div>
                <router-link v-else :to="{name: 'register_form2'}" class="link">
                    <span>填写问卷</span>
                </router-link>
            </div>
        </div><!--end-->

        <a :href="'tel:' + contact" class="contact">
            <span>如有问题，请联系我们</span>
        </a>
        <div v-if="config.redPacket==0" class="yum-fix" @click="toggleToast('09:30开启，敬请期待')">
            <div class="yum-fix-card"></div>
        </div>
        <router-link v-if="config.redPacket==1" :to="{name: 'red_packet_poker'}" class="yum-fix">
            <div class="yum-fix-card"></div>
        </router-link>
    </div>
</template>
<script>
    import _chunk from 'lodash/chunk'
    import _collection from 'lodash/collection'
    import {Indicator, Toast} from 'mint-ui'
    import voteResult from './components/vote_result.vue'
    let tt;
    export default{
        data(){
            return {
                vote: null,
                config: null,
                voteList: [],
                rankList: [],
                selected: [],
                messageList: [],
                messageIndex: 0,
                contacts: [
                    '021-61425802',
                    '021-61425836',
                    '021-61425817',
                    '021-61425830'
                ]
            }
        },
        computed: {
            message() {
                return this.messageList[this.messageIndex]
            },
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
            voteResult
        },
        created() {
            if (!this.user) {
                return
            }
            this.forceHttp()
            this.getConfig()
        },
        mounted() {
            this.getPoll()
            this.getMessageList()
        },
        destroyed() {
            clearInterval(tt)
        },
        methods: {
            getOpText(text) {
                return text.split(" ").join("<br/>")
            },
            forceHttp() {
                if (window.location.protocol.toLowerCase() === "https:") {
                    window.location.href = window.location.href.replace("https:", "http:")
                }
            },
            getConfig() {
                this.$http.post('custom/yum2017/getConfig').then((response) => {
                    if (response.body.err == 0) {
                        this.config = response.body.res.switch
                    }
                }).then(() => {
                    this.$store.commit('SPIN')
                })
            },
            getPoll(callback) {
                this.$http.post('interact/poll/getGroupFirstPoll', {
                    meeting_id: this.meeting.id
                }).then((response) => {
                    if (response.body.err == 0) {
                        let ret = response.body.res
                        this.vote = response.body.res
                        if (!this.vote) {
                            return
                        }
                        let options = JSON.parse(JSON.stringify(ret.options))
                        for (let opt of options) {
                            opt.selected = false
                            opt.vote_count = parseInt(opt.vote_count)
                        }
                        this.voteList = _chunk(options, 2)
                        //如果投过票计算排名
                        if (this.vote.is_voted == 1 || this.vote.is_active == -1) {
                            let rankList = _collection.orderBy(options, ['vote_count'], ['desc'])
                            for (let [index, item] of rankList.entries()) {
                                if (index == 0) {
                                    item.rank = 1
                                } else {
                                    let prev = rankList[index - 1]
                                    if (item.vote_count >= prev.vote_count) {
                                        item.rank = prev.rank
                                    } else {
                                        item.rank = parseInt(prev.rank) + 1
                                    }
                                }
                                item.percent = parseInt(item.percent)
                            }

                            this.rankList = rankList
                        }
                    }
                }).then(() => {
                    if (callback) {
                        callback()
                    }
                })
            },

            //选择事件
            voteSelected(opt) {
                let is_multi = this.vote.is_multi == 1 ? true : false
                if (is_multi) {
                    let pos = this.selected.indexOf(opt.id)
                    if (pos > -1) {
                        this.selected.splice(pos, 1)
                        opt.selected = false
                    } else {
                        if (this.selected.length >= parseInt(this.vote.max_choice)) {
                            return
                        }
                        this.selected.push(opt.id)
                        opt.selected = true
                    }
                } else {
                    if (!opt.selected) {
                        for (let options of this.voteList) {
                            for (let el of options) {
                                el.selected = false
                            }
                        }
                        opt.selected = true
                        this.selected = []
                        this.selected.push(opt.id)
                    } else {
                        opt.selected = false
                        this.selected = []
                    }
                }
            },

            //提交事件
            voteSubmit() {
                if (!this.config.vote) {
                    Toast('10:00开启，敬请期待');
                    return
                }
                if (this.selected.length > parseInt(this.vote.max_choice)) {
                    Toast('最多可选择' + this.vote.max_choice + '项')
                    return
                }

                if (this.selected.length < parseInt(this.vote.min_choice)) {
                    Toast('至少选择' + this.vote.min_choice + '项')
                    return
                }

                Indicator.open()
                let self = this
                this.$http.post('interact/poll/batchVote', {
                    option_ids: this.selected
                }).then((response) => {
                    Indicator.close()
                    if (response.body.err == 0) {
                        let instance = Toast('投票成功')
                        setTimeout(() => {
                            instance.close()
                            Indicator.open()
                            self.getPoll(() => {
                                Indicator.close()
                            })
                        }, 1000)
                    } else {
                        Indicator.close()
                        Toast(response.body.msg)
                    }
                })

            },

            //获取留言列表
            getMessageList() {
                this.$http.post('interact/messageboard/getList', {
                    meeting_id: this.meeting.id,
                    limit: 10
                }).then((response) => {
                    if (response.body.err == 0) {
                        this.messageList = response.body.res.list
                    }
                }).then(() => {
                    if (this.messageList.length <= 0) {
                        return
                    }
                    let _this = this
                    tt = setInterval(() => {
                        if (_this.messageIndex >= _this.messageList.length - 1) {
                            _this.messageIndex = 0
                        } else {
                            _this.messageIndex += 1
                        }

                    }, 3000)
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
