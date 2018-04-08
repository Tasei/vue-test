<template>
    <div>
        <div v-if="!take" class="poker">
            <div class="content clearfix">
                <div class="col-xs-12 clearfix">
                    <div class="col-xs-4 poker-item" v-for="item of list">
                        <div class="item" @click="toggleFlip(item)">
                            <div v-show="item.open" class="front animated"
                                 :class="{'fadeIn': item.open}"
                                 :style="{backgroundImage: 'url(' + item.src + ')'}"></div>
                            <div class="back animated" :class="{'flipOutY': item.open, 'flipInY': !item.open}"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-btn">
                <div v-if="!start" class="poker-btn not-start">未开始</div>
                <div v-if="start && !loading && !played" @click="btnStart" class="poker-btn start">开始</div>
                <!--<div v-if="start && !loading && played" @click="btnReStart" class="poker-btn start">再玩一把</div>-->
            </div>
            <div v-if="start && loading && !played" class="poker-btn not-start not-starting">正在洗牌...</div>
            <div class="content-rule">
                <h3>游戏规则：</h3>
                <p>1，点击“开始”，开始发5张牌1个红包，停留2s后翻面位置变换，点击“停止”，选择红包的正确位置既有机会中红包；</p>
                <p>2，您共有1次中奖机会, 数量有限, 先到先得</p>
            </div>
            <!--弹出层-->
            <mt-popup class="popup-result" v-model="popup" popup-transition="popup-fade">
                <div class="content-result">
                    <div v-show="result == 1" class="is" :class="tickClass" @click="openRedPacket"></div>
                    <div v-show="result == 2" class="is is-lose" @click="goRecord"></div>
                    <div v-show="result == 3" class="is is-again" @click="btnReStart"></div>
                </div>
            </mt-popup>
        </div>
        <div v-else class="record">
            <div class="record-h">
                <div class="money">
                    <h5>- {{program.subject}} -</h5>
                    <h1 v-if="money > 0">{{money}}
                        <small>元</small>
                    </h1>
                    <h1 v-else>已抢光</h1>
                </div>
            </div>
            <div class="record-list">
                <div class="record-title">红包领取记录</div>
                <table class="table">
                    <tbody>
                    <tr v-for="p of record_list">
                        <td>
                            {{p.invitation.user_name ? p.invitation.user_name : (p.invitation.weixin ? p.invitation.weixin.nickname : '')}}
                        </td>
                        <td>{{p.invitation.group ? p.invitation.group.name : ''}}</td>
                        <td>{{p.money}}</td>
                    </tr>
                    </tbody>
                </table>
                <router-link :to="{name: 'home_index'}" class="poker-btn home">返回首页</router-link>
            </div>
        </div>
    </div>
</template>
<script>
    import _ from 'lodash'
    import {Indicator, Toast} from 'mint-ui'
    import pokers from './components/pokers'

    let tt;
    let tt1, tt2, tt3;
    export default {
        data() {
            return {
                popup: false,
                list: [],
                result: 0,//1 猜中红包 2 猜中红包但是抢光了 3 游戏失败
                program: null,
                start: false,
                played: false,
                loading: false,
                take: false,
                money: 0,
                record_list: []
            }
        },
        computed: {
            poker() {
                return pokers[this.meeting.alias] ? pokers[this.meeting.alias] : pokers['default']
            },
            RedPacket() {
                switch (this.meeting.alias) {
                    case 'chevrolet920':
                        return 'chevrolet920_redpacket'
                        break
                    case 'yumchina2017':
                    case 'yumFoundersDay':
                        return 'RedPacketYumChina'
                        break
                    default:
                        return 'RedPacket'
                        break
                }
            },
            tickClass() {
                switch (this.meeting.alias) {
                    case 'chevrolet920':
                        return 'is-tick__chevrolet'
                    case 'yumchina2017':
                    case 'yumFoundersDay':
                        return 'is-tick__yum'
                    default:
                        return 'is-tick__default'
                }
            }
        },

        destroyed() {
            clearInterval(tt)
            clearTimeout(tt1)
            clearTimeout(tt2)
            clearTimeout(tt3)
        },

        created() {
            //初始化卡牌
            this.init()
            this.getCurrentInfo()

        },

        methods: {
            init() {
                let arr = _.sampleSize(this.poker, 5)
                arr.push(this.RedPacket)
                let temp = []
                _.forEach(arr, (value) => {
                    temp.push({
                        open: false,
                        is: value == this.RedPacket,
                        src: '//static.idevent.cn/oss/sourcingproject/joker/' + value + '.png'
                    })
                })
                this.list = _.shuffle(temp)
            },
            //响应点击事件
            toggleFlip(item) {
                if (this.loading || !this.start || !this.played) {
                    return
                }
                item.open = true
                tt1 = setTimeout(() => {
                    if (item.is) {
                        this.result = 1
                    } else {
                        this.result = 3
                    }
                    this.popup = true
                }, 1500)
            },
            btnReStart() {
                const elements = document.getElementsByClassName('poker-item')
                _.forEach(elements, (node, index) => {
                    let dx = 0
                    let dy = 0
                    node.style.transform = node.style.WebkitTransform = 'translate(' + dx + 'px, ' + dy + 'px)'
                })
                this.btnStart()
            },
            btnStart() {
                let _this = this
                this.played = false
                this.loading = true
                this.popup = false
                for (let el of this.list) {
                    el.open = true
                }

                tt2 = setTimeout(() => {
                    for (let el of _this.list) {
                        el.open = false
                    }
                    tt3 = setTimeout(() => {
                        _this.getElementPosition()
                        _this.toggleTransition()
                        let count = 0
                        tt = setInterval(() => {
                            if (count >= 2) {
                                _this.loading = false
                                _this.played = true
                                clearInterval(tt)
                                return
                            }
                            _this.toggleTransition()
                            count += 1
                        }, 1000)
                    }, 1000)
                }, 3000)

            },
            toggleTransition() {
                //获取原始位置
                const temp = _.shuffle(this.list)
                for (let [index, el] of temp.entries()) {
                    this.list[el.key].newPos = this.list[index].oldPos
                }
                const elements = document.getElementsByClassName('poker-item')
                _.forEach(elements, (node, index) => {
                    let item = this.list[index]
                    let dx = item.newPos.left - item.oldPos.left
                    let dy = item.newPos.top - item.oldPos.top
                    node.style.transform = node.style.WebkitTransform = 'translate(' + dx + 'px, ' + dy + 'px)'
                })
            },


            getElementPosition() {
                let _this = this
                const elements = document.getElementsByClassName('poker-item')
                _.forEach(elements, (node, index) => {
                    _this.list[index].key = index
                    _this.list[index].oldPos = node.getBoundingClientRect()
                })
            },

            //获取当前红包状态
            getCurrentInfo() {
                if (!this.user) {
                    return
                }

                let self = this
                this.$http.post('meeting/redpacket/getCurrentInfo', {
                    meeting_id: this.meeting.id,
                    type: 1
                }).then((response) => {
                    if (response.body.err == 0) {
                        let res = response.body.res
                        this.program = res.program
                        if (res.program && res.program.process_status == 1) {
                            this.start = true
                        }
                        if (res.detail) {
                            this.take = true
                            this.money = res.detail.money
                        }
                    }
                }).then(() => {
                    if (this.take) {
                        this.getRecordList()
                    } else {
                        this.$store.commit('SPIN')
                    }
                    /*
                    if (!this.program) {
                        setTimeout(() => {
                            self.getCurrentInfo()
                        }, 1000)
                    }*/
                })
            },
            //打开红包
            openRedPacket() {
                Indicator.open()
                this.$http.post('meeting/redpacket/shakeIt', {
                    program_id: this.program.id
                }).then((response) => {
                    if (response.body.err == 0) {
                        if (response.body.res) {
                            //抢到红包
                            this.money = response.body.res.money
                            this.getRecordList()
                        } else {
                            Indicator.close()
                            this.result = 2
                        }
                    } else {
                        Indicator.close()
                        Toast(response.body.msg || '系统错误')
                    }
                })
            },

            goRecord() {
                this.getRecordList()
            },

            getRecordList() {
                this.$http.post('meeting/redpacket/getDetailList', {
                    program_id: this.program.id,
                    type: 1,
                    limit: 100
                }).then((response) => {
                    Indicator.close()
                    if (response.body.err == 0) {
                        this.take = true
                        this.record_list = response.body.res.list
                        //this.goRecord()
                    }
                }).then(() => {
                    this.$store.commit('SPIN')
                })
            }

        }
    }
</script>
<style lang="less" scoped>
    .col-xs-12, .col-xs-4 {
        padding-left: 0;
        padding-right: 0;
        position: relative;
    }

    .poker {
        padding-top: 54.4%;
        min-height: 100vh;
        background: #4c3a3a url("./images/bg.jpg") no-repeat center top;
        background-size: 100% auto;
    }

    .content {
        position: relative;
        padding: 0 31px;
        .col-xs-4 {
            padding: 5px;
            transition: transform .5s cubic-bezier(.55, 0, .1, 1);
        }
    }

    .item {
        padding-top: 146.28%;
        background: transparent;
        position: relative;
        > div {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-position: center;
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }
        .front {
            z-index: 99;
            animation-delay: 1s;
            animation-duration: .5s;
        }
        .back {
            background-image: url("./images/Joker_Bg.png");
            animation-duration: 1s;
            z-index: 100;
        }
    }

    .poker-btn {
        display: block;
        height: 44px;
        line-height: 44px;
        text-align: center;
        border-radius: 15px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: center;
        font-size: 17px;
        color: #f8ecd2;
        &.not-start {
            background-image: url("./images/not-start-btn.png");
        }
        &.not-starting {
            position: fixed;
            z-index: 999;
            left: 31px;
            top: 50%;
            right: 31px;
            margin-top: -22px;
        }
        &.start {
            background-image: url("./images/start-btn.png");
        }
        &.home {
            color: #c24732;
            margin-top: 20px;
            background-image: url("./images/again-btn.png");
        }
    }

    .content-btn {
        padding: 15px 25px 20px;
    }

    .content-rule {
        color: #f8e7cb;
        padding: 0 20px 50px;
        h3 {
            margin: 0 0 10px;
            padding-bottom: 10px;
            border-bottom: 1px solid rgba(248, 231, 203, 0.4);
            font-size: 12px;
            line-height: 1;
        }
        p {
            margin: 0;
            font-size: 12px;
        }
    }

    .popup-result {
        background: transparent;
        width: 100%;
        height: 100%;
        .content-result {
            position: relative;
            width: 100%;
            padding-top: 29.73%;
            .is {
                margin: 0 auto;
                position: relative;
                background-size: 100% 100%;
                background-repeat: no-repeat;
                background-position: center;
                width: 74.67%;
                padding-top: 101.33%;
            }
            .is-tick__default {
                background-image: url("./images/is-tick__default.png");
            }

            .is-tick__chevrolet {
                background-image: url("./images/is-tick__chevrolet.png");
            }

            .is-tick__yum {
                background-image: url("./images/is-tick__yum.png");
            }
            .is-again {
                padding-top: 75.47%;
                background-image: url("./images/is-again.png");
            }
            .is-lose {
                padding-top: 75.47%;
                background-image: url("./images/is-lose.png");
            }
        }
    }

    //记录
    .record {
        min-height: 100vh;
        background-image: url("./images/record-bg.png");
        background-repeat: repeat-y;
        background-position: center top;
        background-size: 100% auto;
        padding-bottom: 40px;
        .record-h {
            padding-top: 48.27%;
            background: url("./images/record-h.png") no-repeat center;
            background-size: 100% 100%;
            position: relative;
            .money {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                text-align: center;
                color: #f5cf95;
                h5 {
                    margin: 30px 0 20px;
                    font-size: 15px;
                }
                h1 {
                    font-size: 60px;
                    margin: 0;
                    small {
                        font-size: 15px;
                        color: #f5cf95;
                        margin-left: 10px;
                    }
                }
            }
        }
        .record-list {
            padding: 0 30px;
            .record-title {
                font-size: 11px;
                color: #f5cf95;
                padding-bottom: 10px;
                border-bottom: 1px solid rgba(248, 236, 210, 0.5);
                margin: 19px 0 9px 0;
            }
            .table {
                width: 100%;
                td {
                    color: #f5cf95;
                    font-size: 15px;
                    border: none !important;
                    line-height: 1;
                    padding: 11px 0;
                }
                tr {
                    td {
                        &:last-child {
                            text-align: right;
                        }
                    }
                }
            }
        }
    }
</style>
