<template>
    <div class="login-box" :class="{'login-box-pc': !isMobile}" :style="styleObj">
        <div class="bg" v-if="!isMobile && login_bg_pc" :style="{backgroundImage: 'url('+ login_bg_pc + ')' }"></div>
        <div class="bg" v-if="isMobile && login_bg" :style="{backgroundImage: 'url('+ login_bg + ')' }"></div>
        <div class="holder"></div>
        <div class="m-login-page">
            <h3 class="text-center">登录</h3>
            <div class="m-login-form">

                <input v-if="_IS_('oriflame-macau')" type="text" class="form-control m-login-code 111" placeholder="请输入手机号"
                       v-model="invitationCode">

                <input v-else type="text" class="form-control m-login-code"
                       :placeholder="$t('login.code_placeholder')"
                       v-model="invitationCode">

                <i-button type="button" :on-ok="login" class="btn btn-primary btn-lg m-login-btn">
                    {{$t('login.login')}}

                </i-button>
                <div class="form-group"></div>
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
