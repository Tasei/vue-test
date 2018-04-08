<template>
    <i-fixed>
        <div class="lottery" :style="{backgroundImage: 'url('+ bg +')'}">
            <div class="positionStarPause" style="display: none">
                <a v-if="startBtn" href="javascript:;" @click="btnStart" class="btn-start btn btn-primary btn-lg">开始抽奖{{name}}</a>
                <a v-if="stopBtn" href="javascript:;" @click="btnStop" class="btn-start btn btn-primary btn-lg">停止抽奖{{name}}</a>
            </div>
            <div class="content" :style="globalSty">
                <div :style="lotteryColor" :class="{'name-list':true,'one-name':avatar_list.length == 1}" >
                    <div class="nameItem" v-for="item in avatar_list">
                        <span class="name">{{item.user_name}}</span>
                        <!--<span class="department">{{item.form.company}}</span>-->
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
    export default {
        data() {
            return {
                award_list: [],
                avatar_list: [],
                lottery_list: [],
                current: null,
                result: false,
                trans: null,
                end: false,
                awardTime: null,
                startBtn: false,
                stopBtn: false,
                name: '',
                currentSync: false,
                lottery_color: '#ffffff'
            }
        },
        mounted() {
            this.$store.commit('SPIN');
            //绑定键盘事件
            let _this = this;
            let body = document.querySelector('body');
            body.onkeydown = (e) => {
                if (e.keyCode == 13 || e.keyCode == 32) {

                    if (!_this.startBtn && !_this.stopBtn) {
                        this.getCurrentInfo();
                    }

                    if (_this.startBtn) {
                        _this.btnStart();
                        return true;
                    }

                    if (_this.stopBtn) {
                        _this.btnStop();
                        return true;
                    }
                }
                //e.preventDefault();
            }
        },
        computed: {
            globalSty() {
                return {
//                    height: (window.innerHeight - 100) + 'px'
                }
            },
            lotteryColor(){
                return {
                    color:this.lottery_color
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

            if (this.meeting.websettings.lottery_color != '') {
                this.lottery_color = this.meeting.websettings.lottery_color;
            }
        },
        methods: {
            getCurrentInfo() {
                let self = this
                if (self.currentSync) {
                    return true;
                }
                self.currentSync = true;
                this.$http.post('meeting/lottery/getCurrentInfo', {
                    meeting_id: this.meeting.id
                }).then((response) => {
                    self.currentSync = false;
                    if (response.body.err == 0) {
                        let res = response.body.res
                        self.current = res.program
                        self.name = self.current.content;
                        self.lottery_list = _.shuffle(res.list)
                        this.startBtn = true;
                    } else {
                        Toast({message: '抽奖未开始', duration: 500});
                        this.startBtn = false;
                    }
                })
            },
            getLottery() {
                let self = this;
                if (self.currentSync) {
                    return true;
                }
                self.currentSync = true;
                //获取中奖列表
                this.$http.post('meeting/lottery/lottery', {
                    meeting_id: this.meeting.id
                }).then((response) => {
                    self.currentSync = false;
                    if (response.body.err == 0) {
                        self.award_list = response.body.res.list
                        self.stopBtn = true;
                    }
                })
            },
            btnStart() {
                let self = this;
                this.startBtn = false;
                this.awardTime = setInterval(() => {
                    let n = 0;
                    let length = self.lottery_list.length;
                    let tmpArray = [];
                    for (let i = 0; i < self.current.packet_number; i++) {
                        n = Math.floor(Math.random() * length + 1) - 1;
                        tmpArray.push(self.lottery_list[n]);
                    }
                    //显示列表
                    self.avatar_list = tmpArray;
                }, 150);
                this.getLottery();

            },
            btnStop() {
                clearInterval(this.awardTime);
                this.avatar_list = this.award_list;
            },
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
        padding-top: 0.1px;
        position: relative;
        .positionStarPause {
            position: absolute;
            left: 0;
            top: 0;
        }
        .content {
            width: 1200px;
            margin: 300px auto 0;
        }
    }

    @media screen and (max-width: 1366px) {
        .avatar-item {
            margin-top: 20px;
        }
    }

    @media screen and (max-width: 1024px) {
        .content {
            width: 960px !important;
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

    .name-list {
        width: 100%;
        padding: 0 50px;
        font-size: 40px;
        color: #fff;

        display: flex;
        /*justify-content:center;*/
        flex-wrap: wrap;
        .nameItem {
            height: 100px;
            line-height: 2;
            width: 40%;
            flex: 0 0 40%;
            /*text-align: center;*/
            .name {
                display: inline-block;
                width: 100%;
                padding-left:200px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .department {
                width: 67%;
                padding-left: 10px;
                /*color: red;*/
                display: inline-block;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }

    .one-name {
        justify-content: center;
        text-align: center;
    }
</style>
