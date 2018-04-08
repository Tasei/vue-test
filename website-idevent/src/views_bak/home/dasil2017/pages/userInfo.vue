<template>
    <div class="page-wrapper">
        <div v-if="userInfo" class="user-info">
            <iui-bg></iui-bg>
            <p class="tips">You can save information by screenshots</p>
            <div class="user-info-data">
                <div class="info-title info-title-name">name</div>
                <div class="info-content">{{userInfo['姓']}}{{userInfo['名']}} {{userInfo['拼音名']}} {{userInfo['拼音姓']}}
                </div>

                <div class="info-title info-title-credentials">credentials</div>
                <div class="info-content">{{userInfo['Prefix']}}</div>

                <div class="info-title info-title-title">title</div>
                <div class="info-content">{{userInfo['公司职务']}}</div>

                <div class="info-title info-title-company">company</div>
                <div class="info-content">{{userInfo['公司名称']}}</div>

                <div class="info-title info-title-company-address">company address</div>
                <div class="info-content">{{userInfo['公司地址']}}</div>

                <div class="info-title info-title-email">email</div>
                <div class="info-content">{{userInfo['电子邮箱']}}</div>

                <div class="info-title info-title-specialty">specialty</div>
                <div class="info-content">{{userInfo['专业']}}</div>

            </div>
            <div class="btn-scan">
                <i-button class="btn btn-block btn-lg btn-default" :on-ok="scanAgain">Scan Again</i-button>
            </div>

        </div>
        <div v-else>
            <iui-bg></iui-bg>
            <div class="holder"></div>
            <div class="btn-scan">
                <i-button class="btn btn-lg btn-primary btn-primary" :on-ok="openScan">Scan</i-button>
                <p class="tips">Scan QR code to obtain guest information</p>
            </div>
        </div>
    </div>
</template>
<script>
    import iuiBg from "../../../components/iui/page_bg.vue"
    import iButton from "iButton"
    import Wechat, {wx} from 'assets/js/wechat'
    import {Indicator, Toast} from 'mint-ui';

    export default {
        components: {
            iuiBg, iButton
        },
        mounted() {
            if (this.isWechat) {
                new Wechat()
            }
            this.$store.commit('SPIN')

//            this.userCode = 2
//            this.getUserInfo()
        },
        data() {
            return {
                userCode: 0,
                userInfo: null
            }
        },
        methods: {
            scanAgain() {
                this.userCode = 0
                this.userInfo = null
                this.openScan()
            },
            openScan(e) {
                let self = this
                wx.scanQRCode({
                    needResult: 1,
                    scanType: ["qrCode"],
                    success(res) {
                        self.userCode = res.resultStr
                        self.getUserInfo()
                    },
                    fail() {
                        Toast('scan failed, please try again')
                    },
                    complete() {
                        e.loading = false
                    }
                })
            },
            getUserInfo() {
                if (!this.userCode) {
                    return
                }
                let self = this
                Indicator.open()
                this.$http.post('meeting/getFormValue', {
                    code: this.userCode,
                    meeting_id: this.meeting.id
                }).then((response) => {
                    let formList = response.body.res.list
                    self.processForm(formList)
                }).finally(() => {
                    Indicator.close()
                })
            },
            processForm(formList) {
                let values = {}
                for (let item of formList) {
                    values[item.label] = item.value
                }
                this.userInfo = values
            },
        }
    }
</script>
<style lang="less" scoped>
    .holder {
        padding-top: 75%;
    }

    .iui-page-bg {
        background-image: url('../images/bg.jpg');
        background-position: top center;
    }

    .page-wrapper {
        padding-bottom: 30px;
    }

    .btn-scan {
        margin: 0 20px 30px;
    }

    .tips {
        margin-top: 20px;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #868b98;
        letter-spacing: 0;
        line-height: 18px;
        text-align: center;
    }

    .user-info {

        .tips {
            color: #fff;
            margin-top: 15px;
            margin-bottom: 15px;
        }
        .iui-page-bg {
            background: #a71e20;
        }
        .user-info-data {
            background: #fff;
            border-radius: 5px;
            padding: 16px 0;
            margin: 0 12px;
        }
        .info-title {
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #a7a7a7;
            line-height: 20px;
            padding: 5px 0;
            text-indent: 40px;
            background-repeat: no-repeat;
            background-position: 16px center;
            background-size: 16px;
        }
        .info-title-name {
            background-image: url("../images/icon_name.png");
        }
        .info-title-credentials {
            background-image: url("../images/icon_zizhi.png");
        }
        .info-title-title {
            background-image: url("../images/icon_zhicheng.png");
        }
        .info-title-company {
            background-image: url("../images/icon_company.png");
        }
        .info-title-company-address {
            background-image: url("../images/icon_address.png");
        }
        .info-title-email {
            background-image: url("../images/icon_email.png");
        }
        .info-title-specialty {
            background-image: url("../images/icon_zhuanye.png");
        }
        .info-content {
            text-indent: 40px;
            margin-bottom: 15px;
            color: #323232;
            font-size: 14px;
            line-height: 20px;
        }
    }
</style>
