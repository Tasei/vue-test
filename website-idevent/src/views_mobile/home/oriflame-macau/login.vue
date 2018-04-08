<template>
    <i-fixed class="oriflame login" :style="bg ? {backgroundImage: 'url('+ bg + ')' } : {}">
        <div class="box">
            <div class="content">
                <div class="logo">
                    <img src="./images/logo.gif" />
                </div>
                <div class="title">注册</div>
                <input type="text" class="form-control m-login-code center" placeholder="输入您的手机号" v-model="invitationCode">
                <i-button type="button" :on-ok="login" class="btn-primary btn-lg m-login-btn">登录</i-button>
            </div>
        </div>
    </i-fixed>
</template>
<script>
import {Toast} from 'mint-ui';
import iFixed from 'components/fixed'
import iButton from 'iButton'
export default {
    computed: {
        bg(){
            if (this.meeting.settings && this.meeting.settings.register && this.meeting.settings.register.login_background_pc) {
                return this.meeting.settings.register.login_background_pc;
            } else if(this.meeting.settings && this.meeting.settings.register && this.meeting.settings.register.login_background) {
                return this.meeting.settings.register.login_background;
            } else {
                return '';
            }
        },
    },
    data(){
        return{
            invitationCode: "",
        }
    },
    components: {
        iFixed, iButton
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
    },
    mounted() {
        this.$store.commit('SPIN')
    }
}
</script>
<style lang="less" scoped>
    @import "../../../assets/style/home/index.less";
    @import "./style/oriflame.less";
    .box {
        background: @ori-green;
        position: absolute;
        left: 50%;
        top: 50%;
        width: 400px;
        height: 300px;
        margin-top: -150px;
        margin-left: -200px;
        .content {
            height: 100%;
            margin-top: 5px;
            border: 1px solid #989898;
            border-top: 0;
            background: #fff;
            padding: 40px;
            text-align: center;
            .logo {
                width: 80px;
                margin: 10px auto;
            }
            .title {
                font-size: 20px;
                font-weight: 600;
                margin-bottom: 30px;
            }
        }
    }
    .login {
        background-position: top center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>
