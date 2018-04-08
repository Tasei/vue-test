<template>
    <i-fixed>
        <!---首屏 未开始-->
        <div v-if="step==0" class="bg text-center">
            <div class="logo"></div>
            <div class="content" :style="globalSty">
                <div class="timer text-dark" v-if="timer> 0">00:{{timer<10 ? '0'+timer:timer}}</div>
                <div class="timer text-dark" v-if="!start">{{tips}}</div>
                <div class="item" v-for="let (group, index) in group_list">
                    <div class="progress bg-primary">
                        <div  :class="'chicken chicken-' + (index+1)" :style="{bottom: group.score + '%'}"></div>
                        <div class="progress-bar" :style="{height: group.score + '%'}"></div>
                    </div>
                    <h3 class="text-dark">{{group.name}}</h3>
                </div>
            </div>
        </div>
        <!--倒计时-->
        <!--
        <div class="countdown" v-if="!start">
            <div class="modal"></div>
            <div class="text-tip">{{tips}}</div>
        </div>-->
    </i-fixed>
</template>
<script>
    import iFixed from 'components/fixed'
    import cx from 'classnames'
    let tt_info, tt_rank
    export default{
        data() {
            return {
                step: 0,
                countdown: 5,
                group_list: [],
                tips: '游戏未开始',
                start: false,
                timer: 0
            }
        },
        created() {
            this.getGroupList()
        },

        destroyed() {
            clearInterval(tt_info)
            clearInterval(tt_rank)
        },
        computed: {
            meeting() {
                return this.$store.state.meeting
            },
            globalSty() {
                return {
                    height: (window.innerHeight - 230) + 'px'
                }
            },
        },
        methods: {
            //30s倒计时
            startTimer() {
                this.timer = 30
                let self = this
                let tt = setInterval(() => {
                    self.timer -= 1
                    if(self.timer <=0) {
                        clearInterval(tt)
                        self.start = false
                        self.tips = '此轮游戏已结束'
                    }
                }, 1000)
            },
            getGroupList() {
                let self = this
                this.$http.post('meeting/race/getGroupList', {
                    meeting_id: this.meeting.id
                }).then((response) => {
                    if (response.body.err == 0) {
                        let list = response.body.res.list.slice(1)
                        const arr = []
                        for(let item of list) {
                            item.score = 0
                            if(item.is_default==0) {
                                arr.push(item)
                            }
                        }
                        self.group_list = arr
                    }
                }).then(() => {
                    self.getInfo()
                })
            },

            getInfo() {
                clearInterval(tt_rank)
                clearInterval(tt_info)
                let self = this
                this.$http.post('meeting/race/getCurrentInfo', {
                    meeting_id: this.meeting.id
                }).then((response) => {
                    if(response.body.err == 0) {
                        let res = response.body.res
                        if (res.program) {
                            //开始游戏
                            self.program = res.program
                            if (res.program.process_status == 0) {
                                tt_info = setInterval(() => {
                                    self.getProgramStatus()
                                }, 1000)
                            }

                            //开始获取排名
                            tt_rank = setInterval(() => {
                                self.getGroupRank()
                            }, 1000)
                        }
                    }
                }).then(() => {
                    this.$store.commit('SPIN')
                })
            },

            getProgramStatus() {
                let self = this
                this.$http.post('meeting/race/getProgramStatus', {
                    program_id: this.program.id
                }).then((response) => {
                    if(response.body.err == 0 && response.body.res.process_status==1) {
                        clearInterval(tt_info)
                        self.tips = '开始'
                        setTimeout(() => {
                            self.start = true
                            self.startTimer()
                        },  1000)
                    }
                })
            },
            getGroupRank() {
                if(!this.program) {
                    return;
                }
                let self = this
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

                        for(let item of self.group_list) {
                            if(ret[item.id]) {
                                item.score = (ret[item.id]/max) * 100
                            }
                        }

                    }
                })
            },


        },

        components:{
            iFixed
        }
    }
</script>
<style lang="less" scoped>
    .bg {
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: auto;
        position: relative;
        background-image: url("../../assets/images/crowne/lottery_bg.png");
        padding-top: 210px;
        .content {
            width: auto;
            display: inline-block;
            margin: 0 auto;
            background: #fff;
            position: relative;
            .timer {
                position: absolute;
                height: 60px;
                line-height: 60px;
                left: 0;
                top: -60px;
                background: #fff;
                right: 0;
                font-size: 42px;
                border-bottom: 1px solid #ddd;
            }
            .item {
                display: inline-block;
                width: 150px;
                height: 100%;
                padding: 100px 0 80px 0;
                position: relative;
                .chicken {
                    position: absolute;
                    left: 0;
                    width: 100%;
                    height: 160px;
                    background-size: 80px auto;
                    background-repeat: no-repeat;
                    background-position: center bottom;
                    z-index: 999;
                    &.chicken-1 {
                        background-image: url("../../assets/images/shake/chicken-1.gif");
                    }
                    &.chicken-2 {
                        background-image: url("../../assets/images/shake/chicken-2.gif");
                    }
                    &.chicken-3 {
                        background-image: url("../../assets/images/shake/chicken-3.gif");
                    }
                    &.chicken-4 {
                        background-image: url("../../assets/images/shake/chicken-4.gif");
                    }
                    &.chicken-5 {
                        background-image: url("../../assets/images/shake/chicken-5.gif");
                    }
                    &.chicken-6 {
                        background-image: url("../../assets/images/shake/chicken-6.gif");
                    }
                    &.chicken-7 {
                        background-image: url("../../assets/images/shake/chicken-7.gif");
                    }
                    &.chicken-8 {
                        background-image: url("../../assets/images/shake/chicken-8.gif");
                    }
                }
                .progress {
                    height: 100%;
                    width: 80px;
                    margin: 0 auto;
                    position: relative;
                    background-color: transparent;
                    border: none;
                    box-shadow: none;
                    overflow: visible;
                    .progress-bar {
                        width: 100%;
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        transition: height 1s ease;
                    }
                }
                h3 {
                    left: 0;
                    width: 100%;
                    position: absolute;
                    height: 80px;
                    padding-top: 10px;
                    text-align: center;
                    bottom: 0;
                    border-top: 1px solid #ddd;
                    margin: 0;
                }
            }
        }
    }
    .logo {
        width: 229px;
        height: 20px;
        background: url("../../assets/images/shake/logo.png") no-repeat center;
        background-size: 100% 100%;
        position: absolute;
        left: 50%;
        margin-left: -115px;
        bottom: 40px;
        z-index:0;
    }



    //underway
    .underway {
        padding-top: 160px;
        .track {
            height: 759px;
            width: 100%;
            overflow: hidden;
            position: relative;
            > .way{
                position: absolute;
                left: 0;
                width: 99999px;
                top: 0;
                height: 100%;
                background: url("../../assets/images/shake/way.jpg") repeat-x center;
                background-size: 1850px 100%;
            }
        }
    }

    @keyframes underway {

    }
</style>
