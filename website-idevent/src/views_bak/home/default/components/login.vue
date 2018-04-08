<template>
    <div :style="styleObj">
        <div class="bg"
             v-if="meeting.settings && meeting.settings.register && meeting.settings.register.login_background"
             :style="{backgroundImage: 'url('+meeting.settings.register.login_background + ')' }"></div>
        <div class="holder"></div>
        <div class="m-login-page">
            <div class="m-login-form">
                <input type="text" class="form-control m-login-code" :placeholder="$t('login.code_placeholder')"
                       v-model="invitationCode">
                <i-button type="button" :on-ok="login" class="btn btn-primary btn-lg m-login-btn">
                    {{$t('login.login')}}

                </i-button>
                <div class="form-group">
                    <geely-login v-if="_IS_('geely2017')"></geely-login>
                    <chery-login v-if="_IS_('chery2017')"></chery-login>
                    <cits-login v-if="_IS_('cits2017')"></cits-login>
                    <chevrolet-login v-if="_IS_('chevroletD2UC')"></chevrolet-login>
                    <micechina-login v-if="_IS_('mice2017-1')"></micechina-login>
                    <icca-login v-if="_IS_('icca2017')"></icca-login>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped rel="stylesheet/less">
    @import "../../../../assets/style/login.less";
</style>
<script>
    import {Toast, MessageBox} from 'mint-ui';
    import iButton from 'iButton'
    import geelyLogin from '../../geely2017/components/login'
    import cheryLogin from '../../chery2017/components/login'
    import chevroletLogin from '../../chevroletD2UC/components/login'
    import citsLogin from '../../cits2017/login'
    import micechinaLogin from '../../mice2017/components/login.vue'
    import iccaLogin from '../../icca2017/components/login.vue'

    export default{
        components: {
            iButton, geelyLogin, cheryLogin, citsLogin, chevroletLogin, micechinaLogin, iccaLogin
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
                    Toast('请输入邀请码继续注册')
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
