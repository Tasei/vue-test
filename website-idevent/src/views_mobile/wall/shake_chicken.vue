<template>
    <i-fixed :class="bgCls">
        <div class="not-start" v-show="!start && !end">
            <div class="chicken"></div>
            <div class="title"></div>
            <div class="button" @click="btnStart"></div>
            <p>1、请在手机上点击"小鸡快跑"，等待游戏开始</p>
            <p>2、待主持人宣布游戏开始，请大家使劲摇手机</p>
            <div class="copyright">- iDEvent提供技术支持 -</div>
        </div>
        <countdown v-show="countdown >= 0" :number="countdown"></countdown>
        <div class="start animated fadeIn" v-show="start">
            <div class="shadow"></div>
            <div class="countdown">00:{{timer<10 ? '0'+timer:timer}}</div>
            <div class="rank-list animated" :class="{'fadeIn': ranking, 'fadeOut': !ranking}" v-show="ranking">
                <div class="blank"></div>
                <ul>
                    <li v-for="(group, index) of rank_list"><span>{{index + 1}}</span>{{group.name}}</li>
                </ul>
            </div>
            <div class="racing">
                <div class="start-line"></div>
                <div class="bg"></div>

                <div class="content" :class="{'brand': timer<=1}">
                    <div v-for="(group, index) of group_list" class="item">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar"
                                 :aria-valuenow="group.score" aria-valuemin="0"
                                 aria-valuemax="100" :style="{width: group.score + '%'}">
                            </div>
                        </div>
                        <div class="chicken" :style="{left: group.score + '%'}">
                            <div class="running running-1" v-if="group.number == 1"></div>
                            <div class="running running-2" v-if="group.number == 2"></div>
                            <div class="running running-3" v-if="group.number == 3"></div>
                            <div class="running running-4" v-if="group.number == 4"></div>
                            <div class="running running-5" v-if="group.number == 5"></div>
                            <div class="running running-6" v-if="group.number == 6"></div>
                            <div class="running running-7" v-if="group.number == 7"></div>
                            <div class="running running-8" v-if="group.number == 8"></div>
                            <div class="running running-9" v-if="group.number == 9"></div>
                            <div class="running running-10" v-if="group.number == 10"></div>
                            <div class="running running-11" v-if="group.number == 11"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="finish-line animated fadeIn" v-show="timer <= 2"></div>
        </div>
        <div class="end" v-show="!start && end">
            <div class="bg animated" :class="{'fadeIn': end}"></div>
            <div class="stage-chicken clearfix" v-if="rank_list.length >= 3">
                <div class="second">
                    <div class="chicken chicken-1" v-if="rank_list[1].number==1"></div>
                    <div class="chicken chicken-2" v-if="rank_list[1].number==2"></div>
                    <div class="chicken chicken-3" v-if="rank_list[1].number==3"></div>
                    <div class="chicken chicken-4" v-if="rank_list[1].number==4"></div>
                    <div class="chicken chicken-5" v-if="rank_list[1].number==5"></div>
                    <div class="chicken chicken-6" v-if="rank_list[1].number==6"></div>
                    <div class="chicken chicken-7" v-if="rank_list[1].number==7"></div>
                    <div class="chicken chicken-8" v-if="rank_list[1].number==8"></div>
                    <div class="chicken chicken-9" v-if="rank_list[1].number==9"></div>
                    <div class="chicken chicken-10" v-if="rank_list[1].number==10"></div>
                    <div class="chicken chicken-11" v-if="rank_list[1].number==11"></div>
                </div>
                <div class="first">
                    <div class="chicken chicken-1" v-if="rank_list[0].number==1"></div>
                    <div class="chicken chicken-2" v-if="rank_list[0].number==2"></div>
                    <div class="chicken chicken-3" v-if="rank_list[0].number==3"></div>
                    <div class="chicken chicken-4" v-if="rank_list[0].number==4"></div>
                    <div class="chicken chicken-5" v-if="rank_list[0].number==5"></div>
                    <div class="chicken chicken-6" v-if="rank_list[0].number==6"></div>
                    <div class="chicken chicken-7" v-if="rank_list[0].number==7"></div>
                    <div class="chicken chicken-8" v-if="rank_list[0].number==8"></div>
                    <div class="chicken chicken-9" v-if="rank_list[0].number==9"></div>
                    <div class="chicken chicken-10" v-if="rank_list[0].number==10"></div>
                    <div class="chicken chicken-11" v-if="rank_list[0].number==11"></div>
                </div>
                <div class="third">
                    <div class="chicken chicken-1" v-if="rank_list[2].number==1"></div>
                    <div class="chicken chicken-2" v-if="rank_list[2].number==2"></div>
                    <div class="chicken chicken-3" v-if="rank_list[2].number==3"></div>
                    <div class="chicken chicken-4" v-if="rank_list[2].number==4"></div>
                    <div class="chicken chicken-5" v-if="rank_list[2].number==5"></div>
                    <div class="chicken chicken-6" v-if="rank_list[2].number==6"></div>
                    <div class="chicken chicken-7" v-if="rank_list[2].number==7"></div>
                    <div class="chicken chicken-8" v-if="rank_list[2].number==8"></div>
                    <div class="chicken chicken-9" v-if="rank_list[2].number==9"></div>
                    <div class="chicken chicken-10" v-if="rank_list[2].number==10"></div>
                    <div class="chicken chicken-11" v-if="rank_list[2].number==11"></div>
                </div>
            </div>
            <div class="stage"></div>
            <div class="stage-text clearfix" v-if="rank_list.length >= 3">
                <div class="second">
                    {{rank_list[1].name}}
                </div>
                <div class="first">
                    {{rank_list[0].name}}
                </div>
                <div class="third">
                    {{rank_list[2].name}}
                </div>
            </div>
            <!--<div class="game-over"></div>-->
        </div>
    </i-fixed>
</template>

<script>
import iFixed from 'components/fixed'
import cx from 'classnames'
import countdown from './components/countdown'
import Message from '../../../components/message'
import _collection from 'lodash/collection'
export default{
    data(){
        return{
            start: false,
            end: false,
            countdown: -1,
            group_list: [],
            timer: 30,
            program: null,
            rank_list: [],
        }
    },
    computed: {
        bgCls() {
            return cx({
                ['not-start-bg']: !this.start,
                ['start-bg']: this.start
            })
        }
    },
    created() {
        this.getGroupList()
    },
    mounted() {
        this.$store.commit('SPIN')
    },
    components:{
        iFixed, countdown
    },
    methods: {
        //开始游戏
        btnStart() {
            let _this = this
            if(!_this.program) {
                Message.info('游戏未创建')
                return false
            }
            _this.countdown = 5
            let tt = setInterval(() => {
                _this.countdown -= 1
                if (_this.countdown == 0) {
                    _this.startRace()
                }
                if (_this.countdown < 0) {
                    //通知开始
                    //倒计时结束
                    _this.start = true
                    _this.ranking = true
                    clearInterval(tt)
                    //开始游戏倒计时
                    _this.startTimer()
                }
            }, 1000)
        },
        //开始30s倒计时
        startTimer() {
            let _this = this
            _this.timer = 30
            clearInterval(tt_rank)
            let tt_rank = setInterval(() => {
                _this.getGroupRank()
            }, 1000)
            //开始倒计时
            let tt = setInterval(() => {
                _this.timer -= 1
                if (_this.timer <= 1) {
                    _this.ranking = false
                }
                if(_this.timer < 0) {
                    clearInterval(tt)
                    clearInterval(tt_rank)
                    _this.start = false
                    _this.end = true
                }
            }, 1000)
        },
        //开始游戏
        startRace() {
            this.$http.post('meeting/race/startRace', {
                id: this.program.id
            })
        },
        //获取用户组列表
        getGroupList() {
            this.$http.post('meeting/race/getGroupList', {
                meeting_id: this.meeting.id
            }).then((response) => {
                if (response.body.err == 0) {
                    const list = response.body.res.list
                    const arr = []
                    let number = 1
                    for(let item of list) {
                        item.score = 0;//Math.floor(Math.random() * 100)
                        if(item.is_default==0) {
                            item.number = number
                            arr.push(item)
                            number += 1
                        }
                    }
                   this.group_list = arr

                }
            }).then(() => {
                this.getCurrentInfo()
            })
        },
        getCurrentInfo() {
            let self = this
            this.$http.post('meeting/race/getCurrentInfo', {
                meeting_id: this.meeting.id
            }).then((response) => {
                if(response.body.err == 0) {
                    let res = response.body.res
                    if (res.program) {
                        self.program = res.program
                    }
                }
            }).then(() => {
                this.$store.commit('SPIN')
            })
        },

        //获取排名
        getGroupRank() {
            this.$http.post('meeting/race/getGroupRanking', {
                program_id: this.program.id
            }).then((response) => {
                if(response.body.err == 0 && response.body.res.list) {
                    let ret = response.body.res.list
                    if(ret.length == 0) {
                        return
                    }

                    //获取最大值
                    let scores = Object.values(ret)
                    let max = scores[0]
                    for(let score of scores) {
                        if(max < score) {
                            max = score
                        }
                    }

                    if(max<=0) {
                        return;
                    }

                    for(let item of this.group_list) {
                        if(ret[item.id]) {
                            item.score = (ret[item.id]/max) * 100
                        }
                    }
                    let rankList = _collection.orderBy(this.group_list, ['score'], ['desc'])
                    this.rank_list = rankList

                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
    //未开始
    .not-start-bg {
        background: url("./images/chicken/unstart_bg.jpg") no-repeat center;
        background-size: cover;
    }
    .not-start {
        padding-top: 85px;
        .chicken {
            margin: 0px auto;
            width: 746px;
            height: 188px;
            background: url("./images/chicken/not_start_chicken.png") no-repeat center;
            background-size: 100% 100%;
        }
        .title {
            margin: -22px auto 0 auto;
            width: 828px;
            height: 261px;
            background: url("./images/chicken/not_start_title.png") no-repeat center;
            background-size: 100% 100%;
        }
        .button {
            margin: 140px auto 55px auto;
            width: 400px;
            height: 88px;
            background: url("./images/chicken/not_start_btn_normal.png") no-repeat center;
            background-size: 100% 100%;
            cursor: pointer;
            &:hover {
                background: url("./images/chicken/not_start_btn_hover.png") no-repeat center;
            }
        }
        p {
            text-align: center;
            font-size: 30px;
            line-height: 30px;
            margin: 0 0 20px;
        }
        .copyright {
            position: absolute;
            width: 100%;
            text-align: center;
            font-size: 20px;
            bottom: 38px;
            left: 0;
        }
    }

    //开始
    .start-bg {
        background: url("./images/chicken/start_bg.jpg") no-repeat center;
        background-size: cover;
    }
    .start {
        position: relative;
        padding-top: 200px;
        width: 100%;
        height: 100%;
        overflow: hidden;
        .countdown {
            position: absolute;
            left: 0;
            width: 100%;
            font-size: 80px;
            color: #fff;
            text-align: center;
            top: 0;
            z-index: 1;
        }
        .rank-list {
            position: absolute;
            right: 10px;
            top: 10px;
            background: rgba(0, 0, 0, 0.5);
            padding-bottom: 26px;
            min-width: 400px;
            z-index: 99999;
            .blank {
                height: 60px;
                background: #ffffff url("./images/chicken/ranking.png") no-repeat center;
                background-size: 178px 33px;

            }
            li {
                width: 100%;
                padding: 0 20px;
                margin-top: 26px;
                font-size: 24px;
                line-height: 30px;
                height: 30px;
                color: #fff;
                span {
                    display: inline-block;
                    width: 30px;
                    height: 30px;
                    margin-right: 10px;
                    border-radius: 50%;
                    text-align: center;
                }
                &:nth-child(1) {
                    span {
                        color: #B65E1C;
                        background-image: linear-gradient(-141deg, #FAD961 8%, #D97D49 95%);
                    }
                }
                &:nth-child(2) {
                    span {
                        color: #666;
                        background-image: linear-gradient(-146deg, #DBE3E4 0%, #91A3A6 100%);
                    }
                }
                &:nth-child(3) {
                    span {
                        color: #8d5f0c;
                        background-image: linear-gradient(-138deg, #E8D390 0%, #CEA042 61%, #CC973C 95%);
                    }
                }
            }
        }
        .shadow {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: url("./images/chicken/start_shadow.png") no-repeat center;
            background-size: cover;
            z-index: 100;
        }
        .racing {
            width: 100%;
            height: 759px;
            position: relative;
            .start-line {
                position: absolute;
                left: -316px;
                top: 15px;
                bottom: 15px;
                width: 30px;
                background: url("./images/chicken/start_line.png") no-repeat center;
                background-size: 100% 100%;
                animation: racing-start-line 2s linear;
            }
            .bg {
                position: absolute;
                z-index: -1;
                left: 0;
                width: 100000px;
                top: 0;
                height: 100%;
                background: url('./images/chicken/racing.jpg') repeat center;
                background-size: auto 100%;
                animation: racing 120s linear;
            }
            .content {
                display: flex;
                flex-direction: column;
                flex: 1;
                height: 100%;
                width: 80%;
                padding: 15px 173px 15px 110px;
                transition: width 1s linear;
                &.brand {
                    width: 100%!important;
                }
                .item {
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    flex: 1;
                    position: relative;
                    .progress {
                        width: 100%;
                        height: 100%;
                        background-color: transparent!important;
                        box-shadow: none!important;
                        .progress-bar {
                            background-color: transparent!important;
                            box-shadow: none!important;
                        }
                    }
                    .chicken {
                        position: absolute;
                        left: 0;
                        top: 0;
                        top: -100%;
                        height: 200%;
                        width: 268px;
                        background: url("./images/chicken/chicken_running.gif") no-repeat left center;
                        background-size: auto 100%;
                        z-index: 9999;
                        .running {
                            position: absolute;
                            left: 0;
                            top: 0;
                            width: 100%;
                            height: 100%;
                            background-size: auto 100%;
                            background-position: left center;
                            background-repeat: no-repeat;
                            &.running-1 {
                                background-image: url("./images/chicken/running-1.png");
                            }
                            &.running-2 {
                                background-image: url("./images/chicken/running-2.png");
                            }
                            &.running-3 {
                                background-image: url("./images/chicken/running-3.png");
                            }
                            &.running-4 {
                                background-image: url("./images/chicken/running-4.png");
                            }
                            &.running-5 {
                                background-image: url("./images/chicken/running-5.png");
                            }
                            &.running-6 {
                                background-image: url("./images/chicken/running-6.png");
                            }
                            &.running-7 {
                                background-image: url("./images/chicken/running-7.png");
                            }
                            &.running-8 {
                                background-image: url("./images/chicken/running-8.png");
                            }
                            &.running-9 {
                                background-image: url("./images/chicken/running-9.png");
                            }
                            &.running-10 {
                                background-image: url("./images/chicken/running-10.png");
                            }
                            &.running-11 {
                                background-image: url("./images/chicken/running-11.png");
                            }
                        }
                    }
                }
            }
        }
        .finish-line {
            position: absolute;
            width: 173px;
            height: 100%;
            top: 0;
            right: 0;
            background: url("./images/chicken/finish_line.png") no-repeat center;
            background-size: cover;
        }
    }

    //end

    .end {
        width: 100%;
        height: 100%;
        padding-top: 200px;
        .bg {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            background: url("./images/chicken/suipian.png") no-repeat center;
            background-size: cover;
            &.animated {
                animation-duration: 2s;
            }
        }
        .stage-chicken {
            width: 880px;
            padding: 0 94px 0 80px;
            margin: 0 auto -30px auto;
            >div {
                display: inline-block;
            }
            .second {
                width: 220px;
                margin-bottom: -60px;
                .chicken {
                    padding-top: 114.29%;
                    &.chicken-1 {
                        background-image: url("//static.idevent.cn/oss/chicken/second/1.gif");
                    }
                    &.chicken-2 {
                        background-image: url("//static.idevent.cn/oss/chicken/second/2.gif");
                    }
                    &.chicken-3 {
                        background-image: url("//static.idevent.cn/oss/chicken/second/3.gif");
                    }
                    &.chicken-4 {
                        background-image: url("//static.idevent.cn/oss/chicken/second/4.gif");
                    }
                    &.chicken-5 {
                        background-image: url("//static.idevent.cn/oss/chicken/second/5.gif");
                    }
                    &.chicken-6 {
                        background-image: url("//static.idevent.cn/oss/chicken/second/6.gif");
                    }
                    &.chicken-7 {
                        background-image: url("//static.idevent.cn/oss/chicken/second/7.gif");
                    }
                    &.chicken-8 {
                        background-image: url("//static.idevent.cn/oss/chicken/second/8.gif");
                    }
                    &.chicken-9 {
                        background-image: url("//static.idevent.cn/oss/chicken/second/9.gif");
                    }
                    &.chicken-10 {
                        background-image: url("//static.idevent.cn/oss/chicken/second/10.gif");
                    }
                    &.chicken-11 {
                        background-image: url("//static.idevent.cn/oss/chicken/second/11.gif");
                    }



                }
            }
            .first {
                width: 278px;
                .chicken {
                    padding-top: 115.29%;
                    background-position: 40px center;
                    &.chicken-1 {
                        background-image: url("//static.idevent.cn/oss/chicken/first/1.gif");
                    }
                    &.chicken-2 {
                        background-image: url("//static.idevent.cn/oss/chicken/first/2.gif");
                    }
                    &.chicken-3 {
                        background-image: url("//static.idevent.cn/oss/chicken/first/3.gif");
                    }
                    &.chicken-4 {
                        background-image: url("//static.idevent.cn/oss/chicken/first/4.gif");
                    }
                    &.chicken-5 {
                        background-image: url("//static.idevent.cn/oss/chicken/first/5.gif");
                    }
                    &.chicken-6 {
                        background-image: url("//static.idevent.cn/oss/chicken/first/6.gif");
                    }
                    &.chicken-7 {
                        background-image: url("//static.idevent.cn/oss/chicken/first/7.gif");
                    }
                    &.chicken-8 {
                        background-image: url("//static.idevent.cn/oss/chicken/first/8.gif");
                    }
                    &.chicken-9 {
                        background-image: url("//static.idevent.cn/oss/chicken/first/9.gif");
                    }
                    &.chicken-10 {
                        background-image: url("//static.idevent.cn/oss/chicken/first/10.gif");
                    }
                    &.chicken-11 {
                        background-image: url("//static.idevent.cn/oss/chicken/first/11.gif");
                    }
                }
            }
            .third {
                width: 200px;
                margin-bottom: -65px;
                .chicken {
                    padding-top: 114.29%;
                    &.chicken-1 {
                        background-image: url("//static.idevent.cn/oss/chicken/third/1.gif");
                    }
                    &.chicken-2 {
                        background-image: url("//static.idevent.cn/oss/chicken/third/2.gif");
                    }
                    &.chicken-3 {
                        background-image: url("//static.idevent.cn/oss/chicken/third/3.gif");
                    }
                    &.chicken-4 {
                        background-image: url("//static.idevent.cn/oss/chicken/third/4.gif");
                    }
                    &.chicken-5 {
                        background-image: url("//static.idevent.cn/oss/chicken/third/5.gif");
                    }
                    &.chicken-6 {
                        background-image: url("//static.idevent.cn/oss/chicken/third/6.gif");
                    }
                    &.chicken-7 {
                        background-image: url("//static.idevent.cn/oss/chicken/third/7.gif");
                    }
                    &.chicken-8 {
                        background-image: url("//static.idevent.cn/oss/chicken/third/8.gif");
                    }
                    &.chicken-9 {
                        background-image: url("//static.idevent.cn/oss/chicken/third/9.gif");
                    }
                    &.chicken-10 {
                        background-image: url("//static.idevent.cn/oss/chicken/third/10.gif");
                    }
                    &.chicken-11 {
                        background-image: url("//static.idevent.cn/oss/chicken/third/11.gif");
                    }
                }
            }
            .chicken {
                width: 100%;
                background-repeat: no-repeat;
                background-position: center bottom;
                background-size: 100% auto;
            }
        }
        .stage {
            margin: 0 auto;
            width: 867px;
            height: 440px;
            background: url("./images/chicken/stage.png") no-repeat center;
            background-size: cover;
        }
        .stage-text {
            width: 880px;
            padding: 0 94px 0 80px;
            margin: -240px auto 0px auto;
            >div {
                display: inline-block;
                text-align: center;
                font-size: 30px;
                float: left;
            }
            .second {
                width: 220px;
                color: #87e3d2;
                padding-top: 10px;
                padding-left: 25px;
            }
            .first {
                width: 278px;
                color: #ffae9b;
                padding-top: 60px;
                padding-left: 25px;
            }
            .third {
                width: 200px;
                color: #a4adf1;
                padding-right: 20px;

            }

        }
        .game-over {
            margin: 80px auto 0 auto;
            width: 380px;
            height: 43px;
            background: url("./images/chicken/game-over.png") no-repeat center;
            background-size: 100% 100%;
        }
    }
    //动画
    //跑道移动
    @keyframes racing {
        from {
            transform: translateX(0);
        }

        to {
            transform: translateX(-100000px);
        }
    }
    @keyframes racing-start-line {
        from {
           left: 110px;
        }

        to {
            left: -316px;
        }

    }
</style>
