<template>
    <div class="shake">
        <!--未开始-->
        <div v-if="!start">
            <div class="bg"></div>
            <div class="holder"></div>
            <div class="btn-result text-center">
                <a href="javascript:;" class="text-primary icon"></a>
                <h3 class="text-dark font-bold">{{tips}}</h3>
                <p v-if="program">第{{program.subject}}轮</p>
                <p>您所属部门<span class="text-primary">「{{user && user.group && user.group.name}}」</span></p>
                <p>请耐心等待，观看大屏幕开始游戏</p>
                <p>请停留在当前页面等待游戏开始。</p>
                <!--
                <div class="col-xs-12">
                    <router-link :to="{name: 'home_index'}" class="btn btn-primary btn-outline btn-lg btn-block">返回首页</router-link>
                </div>-->
            </div>
        </div>
        <!--摇一摇-->
        <div v-else>
            <div class="bg shake-bg"></div>
            <div class="shake-icon" :class="tadaCls"></div>
        </div>
    </div>
</template>
<script>
    import Shake from 'shake.js'
    import cx from 'classnames'
    let tt_info, tt_status, tt_submit
    export default{
        data(){
            return {
                start: false,
                count : 1000,
                program: null,
                tips: '游戏暂未开始'
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
            this.getInfo()


        },
        destroyed () {
            clearInterval(tt_info)
            clearInterval(tt_submit)
            clearInterval(tt_status)
        },

        computed: {
            user() {
                return this.$store.state.user
            },
            meeting() {
                return this.$store.state.meeting
            },
            tadaCls() {
                return cx({
                    ['animated tada']: this.start
                })
            }
        },

        methods: {
            getInfo() {
                let self = this
                clearInterval(tt_info)
                clearInterval(tt_status)
                clearInterval(tt_submit)
                this.$http.post('meeting/race/getCurrentInfo', {
                    meeting_id: this.meeting.id
                }).then((response) => {
                    if(response.body.err == 0) {
                        let res = response.body.res
                        if (res.program) {
                            //开始游戏
                            self.program = res.program
                            //加入比赛
                            self.joinProgram()
                            if (res.program.process_status == 0) {
                                tt_status = setInterval(() => {
                                    self.getProgramStatus()
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
            joinProgram() {
                this.$http.post('meeting/race/join', {
                    invitation_id: this.user.id,
                    program_id: this.program.id
                })
            },
            submitCount() {
                let self = this
                if(!this.start) {
                    return
                }

                this.$http.post('meeting/race/updateScore', {
                    program_id: this.program.id,
                    group_id: this.user.group.id,
                    invitation_id: this.user.id,
                    score: this.count
                }).then((response) => {
                    if (response.body.err == 0 && response.body.res.process_status == 2) {
                        self.start = false
                        self.tips = '此轮游戏已结束'
                        clearInterval(tt_submit)
                        //self.getInfo()
                    }
                })
            }
        }
    }
</script>
<style lang="less" scoped>
    .bg {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background-image: url("../../assets/images/crowne/crowne_bg.jpg");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center top;
        &.shake-bg {
            background-image: url("../../assets/images/shake/bg.jpg");
            background-size: 100% 100%;
        }
    }
    .holder {
        padding-top: 18.8%;
    }
    .award {
        height: 100vh;
        position: relative;
    }
    .col-xs-12 {
        padding: 0 12px;
        position: relative;
    }
    .btn-result {
        position: relative;
        margin-top: 30px;
        color: #fff;
        .icon {
            display: inline-block;
            background: url("../../assets/images/crowne/smile.png") no-repeat;
            height: 50px;
            width: 50px;
            background-position: center;
            background-size: 100% 100%;

        }
        h3 {
            margin: 20px 0 10px;
            font-size: 20px;
            color: #fff;
        }
        p {
            opacity: 0.8;
            font-size: 15px;
        }

        .btn {
            color: #fff;
            border-color: #fff;
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
</style>
