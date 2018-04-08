<template>
    <div class="login-box" :class="{'login-box-pc': !isMobile}" :style="styleObj">
        <div class="bg" v-if="!isMobile && login_bg_pc" :style="{backgroundImage: 'url('+ login_bg_pc + ')' }"></div>
        <div class="bg" v-if="isMobile && login_bg" :style="{backgroundImage: 'url('+ login_bg + ')' }"></div>
        <div class="holder"></div>
        <div class="m-login-page">
            <h3 class="text-center">登录</h3>
            <div class="m-login-form">

                <input  type="text" class="form-control m-login-code 222"  placeholder="请输入手机号"
                       v-model="invitationCode">

                <i-button type="button" :on-ok="login" class="btn btn-primary btn-lg m-login-btn">
                    {{$t('login.login')}}

                </i-button>
                <div class="form-group">
                    <!--<geely-login v-if="_IS_('geely2017')"></geely-login>
                    <chery-login v-if="_IS_('chery2017')"></chery-login>
                    <cits-login v-if="_IS_('cits2017')"></cits-login>
                    <chevrolet-login v-if="_IS_('chevroletD2UC')"></chevrolet-login>
                    <micechina-login v-if="_IS_('mice2017-1')"></micechina-login>-->
                    <icca-login v-if="_IS_('icca2017')"></icca-login>
                    <citif-login v-if="_IS_('citif2017')"></citif-login>
                    <icesap-login v-if="_IS_('icesap2017')" class="text-center"></icesap-login>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped rel="stylesheet/less">
    @import "../../../assets/style/login.less";
    .m-login-code{
        background: rgba(0,0,0,0.15) !important;
    }
    input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
        color: #fff !important;
    }
</style>
<script>
    import {Toast, MessageBox} from 'mint-ui';
    import iButton from 'iButton'
    export default{
        components: {
            iButton,
        },
        data(){
            return {
                invitationCode: "",
                styleObj: {
                    height: window.innerHeight + 'px',
                    position: 'relative'
                }
            }
        },
        computed: {
            login_bg() {
                try {
                    return this.meeting.settings.register.login_background
                } catch(e) {}

                return ''
            },

            login_bg_pc() {
                try {
                    return this.meeting.settings.register.login_background_pc
                } catch(e) {}

                return ''
            }
        },
        created() {
            if (this.user) {
                this.$router.push({name: "home_index"})
            } else {
                this.$store.commit("SPIN", false)
            }
        },
        methods: {
            login(e) {
                if (!this.invitationCode) {
                    if(this._IS_('oriflame-macau')){
                        Toast('请输入手机号继续注册')
                    }else{
                        Toast('请输入邀请码继续注册')
                    }

                    e.loading = false
                    return false
                }

                this.$http.post('meeting/loginByCode', {
                    'meeting_id': this.meeting.id,
                    'code': this.invitationCode,
                }).then(function (response) {
                    let ret = response.body

                    //temp hard-code

                    if (this._IS_('herbalife2017-2', true)) {
                        this.herbalifeLoginPrompt(ret)
                        return
                    }

                    if (ret.err == 0) {
                        this.$router.push({name: "portal"})
                        return
                    } else {
                        Toast(ret.msg)
                    }
                }).finally(function () {
                    e.loading = false
                })
            },
            herbalifeLoginPrompt(ret) {
                let self = this
                let msg = '本次2016康宝莱（中国）绩优服务商巴厘岛研讨会第二批活动注册已经结束，如有疑问您可联系活动客服电话：021-60950498（客服热线工作时间：即日起-5月31日，每天上午9:30-17:00，双休日及法定节假日除外），或活动邮箱 herbalife0601@citssh.com.cn 谢谢！'
                MessageBox.alert(msg).then(function () {
                    if (ret.err == 0) {
                        self.$router.push({name: "portal"})
                        return
                    } else {
                        Toast(ret.msg)
                    }
                });

            }
        }
    }
</script>
