<template>
    <i-fixed>
    <div class="lottery" :style="{backgroundImage: 'url('+ bg +')'}">
        <div class="content" :style="globalSty">
            <div class="left">
                <h3 class="left-title font-bold text-dark">
                    获奖名单<span>获奖人数 {{award_list.length}}</span>
                </h3>
                <table class="table">
                    <thead>
                    <tr>
                        <th width="119">头像</th>
                        <th>中奖人</th>
                    </tr>
                    </thead>
                </table>
                <div class="padding-global">
                    <table class="table">
                        <tbody>
                            <tr v-for="(p, index) of award_list">
                                <td width="119">
                                    <div class="avatar" :style="{backgroundImage: 'url('+ p.weixin.headimgurl + ')' }"></div>
                                </td>
                                <td class="name" v-if="p.contact.name">{{p.contact.name}}</td>
                                <td class="name" v-else>{{p.weixin.nickname}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="right">
                <h3 v-if="!current" class="wait">抽奖未开始<br/>请稍等</h3>
                <div v-else>
                    <h3 class="right-title font-bold text-dark">
                        第{{current.subject}}次抽奖现场
                        <!--<span class="people">参加抽奖人数 <small>{{current.lottery_number}}</small></span>-->
                        <p>{{current.content}}</p>
                    </h3>
                    <div class="text-center avatar-item" v-if="trans">
                        <div class="avatar-list">
                            <img :src="trans.weixin.headimgurl" />
                        </div>
                        <h3 class="text-dark" v-if="trans.contact.name">{{trans.contact.name}}</h3>
                        <h3 class="text-dark" v-else>{{trans.weixin.nickname}}</h3>
                    </div>
                    <a v-if="!start" href="javascript:;" @click="btnStart" class="btn-start btn btn-primary btn-lg">开始抽奖</a>
                    <a v-if="start" href="javascript:;" @click="btnStop" class="btn-start btn btn-primary btn-lg">停止抽奖</a>

                </div>
            </div>
        </div>
        <div style="clear:both"></div>
    </div>
    </i-fixed>
</template>

<script>
    import iFixed from 'components/fixed'
    import _ from 'lodash'
    import {Toast} from 'mint-ui'
    let tt;
    export default{
        data(){
            return{
                award_list: [],
                avatar_list: [],
                lottery_list: [],
                current: null,
                result: false,
                trans: null,
                start: false,
                end: false
            }
        },
        mounted() {
            //绑定键盘事件
            let _this = this
            let body = document.querySelector('body')
            body.onkeydown = (e) => {
                if (e.keyCode == 13 || e.keyCode == 32) {
                    if (_this.start) {
                        _this.btnStop()
                    } else {
                        _this.btnStart()
                    }
                    e.preventDefault()
                }
            }
        },
        computed: {
            globalSty() {
                return {
                    height: (window.innerHeight - 100) + 'px'
                }
            },
            meeting() {
                return this.$store.state.meeting
            },
            bg() {
                return this.meeting.settings.lottery.background
            }
        },

        created() {
            this.getCurrentInfo()
        },
        methods: {
            getCurrentInfo() {
                let self = this
                this.$http.post('meeting/lottery/getCurrentInfo', {
                    meeting_id: this.meeting.id
                }).then((response) => {
                    if (response.body.err == 0) {
                        let res = response.body.res
                        self.current = res.program
                        self.avatar_list = _.shuffle(res.list)
                        if (self.avatar_list.length > 0) {
                            self.trans = self.avatar_list[0]
                        }
                    }
                }).then(() => {
                    //this.getLottery()
                    this.$store.commit('SPIN')
                })
            },
            btnStop() {
                if (!this.start || this.lottery_list.length <= 0) {
                    return
                }
                this.award_list.unshift(this.lottery_list.shift())
                clearInterval(tt)
                this.trans = this.award_list[0]
                this.start = false

                //移除已中奖用户
                for(let [index, el] of this.avatar_list.entries()) {
                    if (el.id == this.trans.id) {
                        this.avatar_list.splice(index, 1)
                        break;
                    }
                }
            },

            btnStart() {
                if (this.start) {
                    return
                }
                if (this.award_list.length >= parseInt(this.current.packet_number)) {
                    Toast('此轮抽奖已结束')
                    return
                }
                this.start = true
                //开始抽奖
                let self = this
                tt = setInterval(() => {
                    let rand = Math.floor(Math.random() * self.avatar_list.length)
                    self.trans = self.avatar_list[rand]
                }, 100)
                this.getLottery()


                /*
                this.$http.post('meeting/lottery/lottery', {
                    meeting_id: this.meeting.id
                }).then((response) => {
                    if (response.body.err == 0) {
                        let list = response.body.res.list
                        let len = 0
                        let tt1 = setInterval(() => {
                            if (list.length > 0) {
                                self.award_list.push(JSON.parse(JSON.stringify(list[len])))
                            }
                            len += 1
                            if (len >= list.length) {
                                clearInterval(tt)
                                clearInterval(tt1)
                                self.trans = list[list.length - 1]
                                return;
                            }
                        }, 1000)
                    }
                })*/
            },

            getLottery() {
                if (this.award_list.length > 0 || this.lottery_list.length > 0) {
                    return
                }
                this.$http.post('meeting/lottery/lottery', {
                    meeting_id: this.meeting.id
                }).then((response) => {
                    if (response.body.err == 0) {
                        this.lottery_list = response.body.res.list
                    }
                })
            }
        },
        components: {
            iFixed
        }
    }
</script>
<style lang="less" scoped>
    @global-border: 1px solid #f9e3ca;
    .lottery {
        width: 100%;
        height: 100%;
        background-image: url("../../assets/images/crowne/lottery_bg.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;
        padding-top: 210px;
        position: relative;
        .content {
            width: 1200px;
            margin: 0 auto;
            position: absolute;
            left: 0;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
        }
    }
    .left {
        width: 390px;
        border: @global-border;
        float: left;
        position: relative;
        height: 100%;
        /*background: url("../../assets/images/crowne/lottery_left_bg.jpg") no-repeat center;*/
        /*background-size: cover;*/
        .left-title {
            font-size: 17px;
            padding: 30px 25px;
            display: block;
            text-align: left;
            margin: 0;
            position: relative;
            span {
                display: inline-block;
                color: #666;
                font-size: 10px;
                font-weight: normal;
                position: absolute;
                right: 25px;
                bottom: 30px;
            }
        }
    }
    .table {
        margin-bottom: 0;
        td, th{
            border-top: none!important;
        }
        td {
            height: 54px;
            padding: 10px 0!important;
            vertical-align: middle!important;
            border: none;
        }
        th {
            padding-left: 0!important;
            border-bottom: none!important;
            background: rgba(0,180,89, 0.1);
            color: #666;
            font-weight: normal;
            &:first-child {
                text-indent: 25px;
            }
        }
    }

    .right {
        width: 800px;
        float: left;
        margin-left: 10px;
        height: 100%;
        position: relative;
        /*background: url("../../assets/images/crowne/lottery_right_bg.jpg") no-repeat center;*/
        /*background-size: cover;*/
        padding: 0 30px;
        .right-title {
            position: relative;
            margin: 0;
            font-size: 50px;
            line-height: 1;
            padding-top: 30px;

            span {
                position: absolute;
                display: block;
            }
            .people {
                font-size: 20px;
                bottom: 0px;
                color: #666;
                right: 30px;
                font-weight: normal;
                small {
                    font-size: 32px;
                }
            }
            p {
                font-size: 18px;
                color: #666;
                margin: 10px 0 0;
            }
        }
    }

    .number_bg {
        height: 30px;
        width: 30px;
        color: #fff;
        font-size: 26px;
        font-weight: bold;
        text-align: center;
        line-height: 30px;
        border-radius: 2px;
    }
    .name {
        font-size: 26px;
        color: #333;
    }

    .avatar {
        width: 54px;
        height: 54px;
        background: #eeeeee;
        background-size: 54px;
        background-position: center;
    }
    .padding-global {
        padding: 0 25px;
        max-height: 603px;
        overflow-x: hidden;
        overflow-y: auto;
    }
    .avatar-item {
        margin-top: 70px;
        color: #fff;
        h3 {
            font-size: 40px;
            margin-top: 30px;
        }
    }
    .avatar-list {
        display: inline-block;
        padding: 10px;
        background: #fff;
        width: 300px;
        height: 300px;
        img {
            width: 280px;
            height: 280px;
        }
    }
    .btn-start {
        display: block;
        max-width: 300px;
        margin: 40px auto!important;
    }

    .wait {
        text-align: center;
        color: #666;
        opacity: 0.8;
        margin-top: 140px;
        line-height: 1.5;
        font-size: 40px;
    }
    @media screen and (max-width: 1366px) {
        .avatar-item {
            margin-top: 20px;
        }
    }
    @media screen and (max-width: 1024px) {
        .content {
            width: 960px!important;
        }
        .left {
            width: 350px;
        }
        .right {
            width: 600px;
        }
        .people {
            right: 0px!important;
        }
        .avatar-item {
            margin-top: 20px;
        }
        .avatar-list {
            padding: 10px;
            background: #fff;
            width: 260px;
            height: 260px;
            img {
                width: 240px;
                height: 240px;
            }
        }
    }
</style>
