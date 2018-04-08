<template>
    <div class="shake clearfix">
        <div class="not-game" v-if="!program">
            <div class="bg"></div>
            <div class="chicken-loading"></div>
            <p>游戏暂未开始</p>
        </div>
        <!--未开始-->
        <div class="not-start clearfix" v-if="program && !start">
            <div class="bg"></div>
            <h5 class="title">
                {{user.contact.name}}，您当前是<span>「{{number}}号小黄鸡」</span>
            </h5>
            <div v-if="!end">
                <div class="chicken">
                    <div class="chicken-number" :class="numCls"></div>
                </div>
                <h3 class="name">{{user.group.name}}</h3>
                <p class="tip">请看大屏幕等待游戏开始</p>
            </div>
            <div v-else class="end">
                <div class="over">
                    <div class="rank" :class="rankCls"></div>
                </div>
            </div>
            <div v-if="members.length > 0">
                <div class="team">
                    您的队友
                </div>
                <div class="col-xs-12 clearfix" v-for="list of members">
                    <div class="col-xs-4" :class="{'col-end': end}" v-for="m of list">
                        <div class="item text-center">
                            <div class="pic">
                                <div class="img">
                                    <img v-if="m.weixin && m.weixin.headimgurl" :src="m.weixin.headimgurl + '/b200'" />
                                </div>
                            </div>
                            <h5 class="text-dark">
                                {{m.contact.name ? m.contact.name : (m.weixin ? m.weixin.nickname: '猪队友') }}
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--摇一摇-->
        <div v-if="program && start">
            <div class="bg shake-bg"></div>
            <div class="shake-icon" :class="tadaCls"></div>
        </div>
    </div>
</template>
<script>
    import Shake from 'shake.js'
    import _chunk from 'lodash/chunk'
    import cx from 'classnames'
    import { Indicator } from 'mint-ui'
    let tt_info, tt_status, tt_submit
    export default{
        data(){
            return {
                start: false,
                end: false,
                count : 1000,
                program: null,
                members: [],
                number: 0,
                groups: [],
                rank: 0,
                rank_list: []
            }
        },

        computed: {
            tadaCls() {
                return cx({
                    ['animated tada']: this.start
                })
            },
            numCls() {
                return cx({
                    ['chicken-1']: this.number==1,
                    ['chicken-2']: this.number==2,
                    ['chicken-3']: this.number==3,
                    ['chicken-4']: this.number==4,
                    ['chicken-5']: this.number==5,
                    ['chicken-6']: this.number==6,
                    ['chicken-7']: this.number==7,
                    ['chicken-8']: this.number==8,
                    ['chicken-9']: this.number==9,
                    ['chicken-10']: this.number==10,
                    ['chicken-11']: this.number==11
                })
            },

            rankCls() {
                return cx({
                    ['rank-1']: this.rank==1,
                    ['rank-2']: this.rank==2,
                    ['rank-3']: this.rank==3,
                    ['rank-4']: this.rank==4,
                    ['rank-5']: this.rank==5,
                    ['rank-6']: this.rank==6,
                    ['rank-7']: this.rank==7,
                    ['rank-8']: this.rank==8,
                    ['rank-9']: this.rank==9,
                    ['rank-10']: this.rank==10,
                    ['rank-11']: this.rank==11
                })
            }
        },

        created() {
            let self = this
            let myShake = new Shake({
                threshold: 15, // optional shake strength threshold
                timeout: 100
            })
            myShake.start()
            window.addEventListener('shake', function(){
                if(self.start) {
                    self.count += 1
                }
            }, false);

            //初始化
            this.getRaceGroups()
        },
        destroyed () {
            clearInterval(tt_info)
            clearInterval(tt_submit)
            clearInterval(tt_status)
        },

        methods: {
            //获取当前比赛信息
            getRaceGroups() {
                let _this = this
                _this.$http.post('meeting/race/getGroupList', {
                    meeting_id: _this.meeting.id
                }).then((response) => {
                    if (response.body.err == 0) {
                        let arr = []
                        for (let group of response.body.res.list) {
                            if (group.is_default== 0) {
                                arr.push(group)
                            }
                        }

                        for (let [index, el] of arr.entries()) {
                            if (this.user.group_id == el.id) {
                                this.number = index + 1
                            }
                        }
                    }
                }).then(() => {
                    if (this.number > 0) {
                        this.getInfo()
                    } else {
                        this.$store.commit('SPIN')
                    }
                })
            },
            //获取比赛信息
            getInfo() {
                let _this = this
                clearInterval(tt_info)
                clearInterval(tt_status)
                clearInterval(tt_submit)
                _this.$http.post('meeting/race/getCurrentInfo', {
                    meeting_id: _this.meeting.id
                }).then((response) => {
                    if(response.body.err == 0) {
                        let res = response.body.res
                        if (res.program) {
                            _this.program = res.program
                            //加入比赛
                            _this.joinProgram()
                            //获取队友列表
                            _this.getGroupMembers()

                            if (res.program.process_status == 0) {
                                tt_status = setInterval(() => {
                                    _this.getProgramStatus()
                                }, 1000)
                            } else if (res.program.process_status == 1) {
                                _this.start = true
                                _this.count = 0
                                //提交数据
                                clearInterval(tt_submit)
                                tt_submit = setInterval(() => {
                                    _this.submitCount()
                                }, 1000)
                            }

                        } else {
                            /*
                            tt_info = setInterval(() => {
                                self.getInfo()
                            }, 5000)*/
                        }
                    }
                }).then(() => {
                    this.$store.commit('SPIN')
                })
            },
            //队友列表
            getGroupMembers() {
                this.$http.post('meeting/race/getGroupMembers', {
                    program_id: this.program.id,
                    invitation_id: this.user.id
                }).then((response) => {
                    if (response.body.err == 0) {
                        this.members = _chunk(response.body.res.list, 3)
                    }
                })
            },

            //获取比赛状态
            getProgramStatus() {
                let self = this
                clearInterval(tt_submit)
                this.$http.post('meeting/race/getProgramStatus', {
                    program_id: this.program.id
                }).then((response) => {
                    if(response.body.err == 0 && response.body.res.process_status==1) {
                        clearInterval(tt_status)
                        this.start = true
                        this.count = 0
                        //提交数据
                        tt_submit = setInterval(() => {
                            self.submitCount()
                        }, 1000)
                    }
                })
            },

            //获取组排名
            getGroupMembersRanking() {
                Indicator.open()
                this.$http.post('meeting/race/getGroupMembersRanking', {
                    program_id: this.program.id,
                    invitation_id: this.user.id
                }).then((response) => {
                    Indicator.close()
                    if(response.body.err == 0) {
                        this.rank = response.body.res.groupRanking
                        this.members = _chunk(response.body.res.list, 3)
                    }
                })
            },

            //加入比赛
            joinProgram() {
                this.$http.post('meeting/race/join', {
                    invitation_id: this.user.id,
                    program_id: this.program.id
                })
            },
            //提交数据
            submitCount() {
                let self = this
                if(!this.start) {
                    return
                }

                this.$http.post('meeting/race/updateScore', {
                    program_id: this.program.id,
                    group_id: this.user.group_id,
                    invitation_id: this.user.id,
                    score: this.count
                }).then((response) => {
                    if (response.body.err == 0 && response.body.res.process_status == 2) {
                        this.start = false
                        this.end = true
                        clearInterval(tt_submit)
                        this.getGroupMembersRanking()
                    }
                })
            },

            //获取比赛队友贡献列表
        }
    }
</script>
<style lang="less" scoped>
    .bg {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background-image: url("./images/bg.jpg");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center top;
        z-index: -1;
        &.shake-bg {
            background-image: url("../../assets/images/shake/bg.jpg");
            background-size: 100% 100%;
        }
    }
    h5.title {
        color:#fcf2d7;
        height: 21px;
        line-height: 21px;
        font-size: 14px;
        text-align: center;
        margin: 0;
        span {
            color:#fcc032;
        }
    }
    .not-start {
        padding-top: 15px;
        padding-left: 20px;
        padding-right: 20px;

        .chicken {
            width: 100%;
            position: relative;
            margin-top: 26px;
            padding-top: 35.87%;
            background: url("./images/chicken.png") no-repeat center;
            background-size: auto 100%;
            .chicken-number {
                position: absolute;
                left: 0;
                width: 100%;
                top: 0;
                height: 100%;
                background-position: center;
                background-repeat: no-repeat;
                background-size: auto 100%;
                &.chicken-1 {
                    background-image: url("./images/1.png");
                }
                &.chicken-2 {
                    background-image: url("./images/2.png");
                }
                &.chicken-3 {
                    background-image: url("./images/3.png");
                }
                &.chicken-4 {
                    background-image: url("./images/4.png");
                }
                &.chicken-5 {
                    background-image: url("./images/5.png");
                }
                &.chicken-6 {
                    background-image: url("./images/6.png");
                }
                &.chicken-7 {
                    background-image: url("./images/7.png");
                }
                &.chicken-8 {
                    background-image: url("./images/8.png");
                }
                &.chicken-9 {
                    background-image: url("./images/9.png");
                }
                &.chicken-10 {
                    background-image: url("./images/10.png");
                }
                &.chicken-11 {
                    background-image: url("./images/11.png");
                }
            }
        }
        h3.name {
            font-size: 20px;
            color: #fcc032;
            text-align: center;
            margin: 10px auto 40px auto;
        }
        p.tip {
            font-size: 15px;
            color: #fcf2d7;
            opacity: 0.3;
            text-align: center;
            margin: 0 0 40px;
        }
        .team {
            font-weight: bold;
            font-size: 12px;
            color:#fcf2d7;
            opacity: 0.3;
            padding: 10px 20px 0;
            border-top: 1px solid rgba(252, 242, 215, 0.1);
            text-indent: 10px;
            margin-bottom: 20px;
        }
    }

    .col-xs-12, .col-xs-4 {
        padding-left: 0;
        padding-right: 0;
    }
    .col-xs-4 {
        padding: 0 5px;
        margin-bottom: 20px;
    }
    .col-end {
        &:nth-child(1) {
            .pic {
                &:before {
                    content: '1';
                }
            }
        }
        &:nth-child(2) {
            .pic {
                &:before {
                    content: '2';
                }
            }
        }
        &:nth-child(3) {
            .pic {
                &:before {
                    content: '3';
                }
            }
        }
    }
    .item {
        .pic {
            width: 100%;
            position: relative;
            padding: 0 24px;
            &:before {
                background: #fcc032;
                width: 19px;
                height: 19px;
                line-height: 19px;
                border-radius: 50%;
                position: absolute;
                left: 17px;
                top: -5px;
                z-index: 9;
                color:#7e1d16;
            }

            .img {
                width: 100%;
                padding-top: 100%;
                border-radius: 50%;
                overflow: hidden;
                position: relative;
                background: #eee url("../../assets/images/iphoto/avatar.png") no-repeat center;
                background-size: 100% 100%;
                img {
                    position: absolute;
                    left: 0;
                    top: 0;
                    max-width: 100%;
                }
            }
        }
        h5 {
            font-size: 12px;
            line-height: 1;
            margin: 7px 0 0;
            color:#fcf2d7;
        }
        p {
            color:#2ab69d;
            font-size: 12px;
            margin: 5px 0 0;
        }
    }

    .shake-icon{
        position: fixed;
        width: 120px;
        height: 120px;
        top: 50%;
        margin-top: -60px;
        left: 50%;
        margin-left: -60px;
        background: url("../../assets/images/shake/icon.png") no-repeat center;
        background-size: 120px 120px;
        &.animated{
            animation-iteration-count: 3;
            -webkit-animation-iteration-count: 3;
        }
    }
    .not-game {
        width: 100%;
        height: 100%;
        .chicken-loading {
            margin: 56px auto 0 auto;
            width: 77.07%;
            padding-top: 55.6%;
            background: url("./images/chicken_loading.png") no-repeat center;
            background-size: auto 100%;

        }
        p {
            font-size: 15px;
            color: #fcf2d7;
            opacity: 0.3;
            text-align: center;
            margin: 35px 0 0;
        }
    }

    .end {
        padding-top: 15px;
        padding-left: 20px;
        padding-right: 20px;
        .over {
            width: 80.27%;
            padding-top: 42.93%;
            margin: 15px auto 30px auto;
            background: url("./images/game-over.png") no-repeat center;
            background-size: auto 100%;
            position: relative;
            .rank {
                position: absolute;
                top: 50%;
                left: 50%;
                width: 20px;
                height: 48px;
                background-repeat: no-repeat;
                background-size: 100% 100%;
                background-position: center;
                margin-left: -3px;
                margin-top: -18px;
                &.rank-1 {
                    background-image: url("./images/big1.png");
                }
                &.rank-2 {
                    background-image: url("./images/big2.png");
                }
                &.rank-3 {
                    background-image: url("./images/big3.png");
                }
                &.rank-4 {
                    background-image: url("./images/big4.png");
                }
                &.rank-5 {
                    background-image: url("./images/big5.png");
                }
                &.rank-6 {
                    background-image: url("./images/big6.png");
                }
                &.rank-7 {
                    background-image: url("./images/big7.png");
                }
                &.rank-8 {
                    background-image: url("./images/big8.png");
                }
                &.rank-9 {
                    background-image: url("./images/big9.png");
                }
                &.rank-10 {
                    width: 42px;
                    margin-left: -18px;
                    background-image: url("./images/big10.png");
                }
                &.rank-11 {
                    width: 42px;
                    margin-left: -18px;
                    background-image: url("./images/big11.png");
                }
            }
        }
    }
</style>
