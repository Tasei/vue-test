<template>
    <div class="bg">
        <div class="placeholder"></div>
        <div class="">
            <a @click="popStart" class="red_btn" :class="btnCls" href="javascript:;"></a>
            <p v-if="history.length <= 0" class="text-red text-center" style="font-size: 12px;margin-top: 31px">
                不忘初心<br/>进无止境
            </p>
            <div v-else>
                <p class="text-red text-center" style="font-size:10px;margin-top: 10px;">我的红包领取记录</p>
                <p v-for="p in history" class="text-red text-center amount"><small>¥</small>{{p.money}}</p>
            </div>
        </div>
        <mt-popup class="mt-popup-packet" popup-transition="popup-fade" v-model="popupVisible" position="top">
            <div class="packet-result">
                <a class="text-packet" href="javascript:;"><small>¥</small>{{take_money}}</a>
            </div>
            <div class="packet-result-blank">
                <h3 class="text-packet font-bold">恭喜你</h3>
                <p class="text-dark"><span class="text-packet">¥{{take_money}}</span> 红包已放入你口袋</p>
                <a href="javascript:;" @click="btnReload" class="btn btn-info">确定</a>
            </div>
        </mt-popup>
    </div>
</template>
<script>
    import cx from 'classnames'
    import {Indicator, Toast} from 'mint-ui'
    export default{
        data(){
            return{
                popupVisible: false,
                process_status: 0,
                program_id: 0,
                history: [],
                is_take: 1,
                take_money: 0
            }
        },
        created () {
            this.getInfo()
        },
        computed: {
            meeting () {
                return this.$store.state.meeting
            },
            user () {
                return this.$store.state.user
            },
            btnCls () {
                return cx({
                    ['start']: this.process_status==1 && this.is_take==0,
                    ['unstart']: this.process_status!=1 || this.is_take==1
                })
            }
        },

        methods: {
            btnReload () {
                window.location.reload()
            },
            popStart () {
                if (this.process_status != 1 || this.is_take == 1) {
                    return false
                }
                let self = this
                Indicator.open();
                this.$http.post('meeting/redpacket/shakeIt', {
                    program_id: this.program_id
                }).then((response) => {
                    Indicator.close()
                    if (response.body.err == 0) {
                        if (response.body.res) {
                            self.take_money = response.body.res.money
                            self.popupVisible = true
                        } else {
                            Toast('您来晚了，红包已抢光')
                            self.process_status = 2
                        }
                    } else {
                        Toast(response.body.msg || '系统错误')
                    }
                })
            },

            //获取当前红包状态
            getInfo() {
                if (!this.user) {
                    return
                }

                let self = this
                this.$http.post('meeting/redpacket/getCurrentInfo', {
                    meeting_id: this.user.meeting_id,
                    type: 2
                }).then((response) => {
                    if (response.body.err == 0) {
                        let res = response.body.res
                        if (res.program) {
                            self.process_status = res.program.process_status
                            self.program_id = res.program.id
                        }
                        self.history = res.history.list
                        if (res.detail) {
                            self.is_take = 1
                        } else {
                            self.is_take = 0
                        }
                    }
                }).then(() => {
                    this.$store.commit('SPIN')
                })
            }
        }
    }
</script>
<style lang="less" scoped>
    p {
        margin: 0;
    }
    .text-red {
        color: #c94c00;
    }
    .text-packet {
        color:#c8242f;
    }
    .placeholder {
        padding-top: 80.27%;
        //padding-top: 88.8%;
    }
    .amount {
        font-size: 20px;
        small {
            font-size: 12px;
        }
    }
    .bg {
        height: 100vh;
        background-image: url("./images/hongbao_bg.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .red_btn {
        margin: 0 auto;
        display: block;
        text-align: center;
        width: 77px;
        height: 77px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        &.unstart {
            background-image: url("../../assets/images/red_packet_unstart.png");
        }
        &.start {
            background-image: url("../../assets/images/red_packet_start.png");
        }
    }

    .mt-popup-packet {
        height: 100%;
        width: 100%;
        background-color: transparent;
        padding: 0 42px;
    }
    .packet-result {
        padding-top: 106.53%;
        background: url("../../assets/images/hongbao_bg2.png") no-repeat;
        background-size: 100% 100%;
        position: relative;
        a {
            display: block;
            position: absolute;
            text-align: center;
            font-size: 45px;
            top: 60.87%;
            width: 100%;
            small {
                font-size: 17px;
            }
        }
    }
    .packet-result-blank {
        background: #fff;
        text-align: center;
        padding: 25px 0;
        h3 {
            font-size: 25px;
            margin: 0;
            margin-bottom: 15px;
        }
        p {
            font-size: 15px;
            margin-bottom: 30px;
        }
        .btn {
            width: 131px;
            background:#ffaf2c;
            height: 39px;
            font-size: 17px;
            &:hover, &:active {
                border-color: transparent;
            }
        }
    }
</style>
