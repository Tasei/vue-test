<template>
    <div>
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
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped rel="stylesheet/less">
    @import "../../assets/style/home/login.less";
</style>
<script>
    import {Toast, MessageBox} from 'mint-ui';
    import iButton from 'iButton'

    export default{
        components: {
            iButton
        },
        data(){
            return {
                invitationCode: ""
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
        }
    }
</script>
