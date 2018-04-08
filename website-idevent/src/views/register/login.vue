<template>
    <div class="register">
        <div class="bg"></div>
        <div class="left-bg">
        </div>
        <div class="right-form">
            <a href="javascript:;" class="logo"></a>
            <h1>{{meeting.name}}</h1>
            <p>{{meeting.start_time.substr(0, 10)}} - {{meeting.end_time.substr(0, 10)}}</p>
            <br/>
            <br/>
            
            <div class="form-group">
                <input type="text" class="form-control form-border-none" placeholder="请输入邀请码" v-model="invitationCode">
            </div>
            <i-button type="button" :on-ok="login" class="btn btn-primary btn-lg padding-lg">登录</i-button>
            
            <span v-if="error" class="text-danger">{{error}}</span>
        </div>
    </div>
</template>
<script>
import iButton from '../../../components/button'
import Message from '../../../components/message'
export default {
    components: {
        iButton
    },
    data() {
        return {
            invitationCode: "",
            error: ""
        }
    },
    computed: {
        meeting() {
            return this.$store.state.meeting
        }
    },
    methods: {
        login(e) {
            if (!this.invitationCode) {
                Message.error('请填写邀请码以继续注册')
                e.loading = false
                return false
            }

            this.$http.post('meeting/loginByCode', {
                'meeting_id': this.meeting.id,
                'code': this.invitationCode,
            }).then(function(response) {
                let ret = response.body
                if (ret.err == 0) {
                    this.$router.push({
                        name: "home_index"
                    })
                } else {
                    Message.error(ret.msg)
                    e.loading = false
                }

            })
        },
        clearError() {
            this.error = ""
        }
    }
}
</script>
<style lang="less" scoped>
.register {
    position: fixed;
    z-index: 1;
    left: 50%;
    top: 50%;
    margin-left: -450px;
    margin-top: -180px;
    width: 960px;
    height: 360px;
    > div {
        float: left;
        height: 100%;
        background: #fff;
    }
    .left-bg {
        width: 600px;
        background: url("../../assets/images/fort_bg.png") no-repeat center;
    }
    .right-form {
        width: 360px;
        border: 1px solid #dddddd;
        box-shadow: 0px 2px 4px 0px rgba(119, 119, 119, 0.50);
        padding: 0 30px;
    }
}

.logo {
    width: 95px;
    height: 36px;
    display: inline-block;
    background: url("../../assets/images/logo_ford@2x.png") no-repeat center;
    background-size: 95px 36px;
    margin-top: 40px;
}

h1 {
    font-size: 28px;
    color: #000000;
    letter-spacing: 0px;
    line-height: 30px;
    text-align: left;
}

p {
    font-size: 18px;
    color: #444444;
    letter-spacing: 0px;
    line-height: 18px;
    text-align: left;
}

.bg {
    position: fixed;
    z-index: -1;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: url("../../assets/images/bg.png") no-repeat center!important;
    background-size: cover;
}
</style>
