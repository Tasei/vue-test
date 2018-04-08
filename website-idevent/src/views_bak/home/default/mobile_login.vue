<template>
    <div>
        <div class="bg"
             v-if="meeting.settings && meeting.settings.register && meeting.settings.register.login_background"
             :style="{backgroundImage: 'url('+meeting.settings.register.login_background + ')' }"></div>
        <div class="holder"></div>

        <form style="padding:20px;">
            <div class="form-group">
                <input class="form-control input-lg"
                       type="tel" pattern="[0-9]*"
                       v-model="mobile"
                       placeholder="请输入手机号"/>
            </div>
            <div class="form-group has-feedback">
                <input class="form-control input-lg"
                       type="number" pattern="[0-9]*"
                       maxlength="6"
                       v-model="code" placeholder="验证码"/>
                <span v-if="timer<=0" @click="getCode" class="text-primary form-control-feedback">获取验证码</span>
                <span v-if="timer>0" class="form-control-feedback text-gray">{{timer}}秒后重试</span>
            </div>
            <div class="form-group has-feedback">
                <i-button :on-ok="login" class="btn btn-primary btn-block btn-lg">登录</i-button>
            </div>
        </form>
    </div>
</template>
<script>
    import {Indicator, Toast} from 'mint-ui'
    import iButton from 'iButton'
    export default {
        components: {
            iButton
        },
        data(){
            // console.log(this.$route)
            // console.log(window.location)
            return {
                mobile: '',
                code: '',
                timer: 0,
            }
        },
        created() {
            if (!this.user) {
                this.$store.commit('SPIN', false)
            }
        },
        computed: {
            meeting () {
                return this.$store.state.meeting
            },
            user () {
                return this.$store.state.user
            }
        },
        methods: {
            getCode () {
                let self = this
                if (!this.checkMobile()) {
                    return false
                }
                Indicator.open()
                this.$http.post('register/code/sendCode', {
                    mobile: this.mobile
                }).then((response) => {
                    Indicator.close()
                    if (response.body.err == 0) {
                        Toast('验证码已发送')
                        self.timer = 60
                        let tt = setInterval(() => {
                            self.timer -= 1
                        }, 1000)
                    } else {
                        Toast(response.body.msg)
                    }
                })

                event.preventDefault()
                event.stopPropagation()
            },

            /**
             *检测手机号是否有效
             */
            checkMobile () {
                let reg = /(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
                if (reg.test(this.mobile)) {
                    return true
                }

                Toast('请输入正确的手机号')
                return false
            },

            /**
             * 登录
             */
            login (e) {
                let self = this
                if (!this.checkMobile()) {
                    e.loading = false
                    return false
                }

                if (!this.code) {
                    e.loading = false
                    Toast('请输入验证码')
                    return false
                }

                this.$http.post('register/code/login', {
                    meeting_id: this.meeting.id,
                    mobile: this.mobile,
                    code: this.code
                }).then((response) => {
                    e.loading = false
                    if (response.body.err == 0) {
                        //触发用户store
                        self.$store.commit('USER', response.body.res)

                        this.$router.push({name: "portal"})

                    } else {
                        Toast(response.body.msg)
                    }
                }, () => {
                    e.loading = false
                })
            }
        }
    }
</script>
<style lang="less" scoped>
    .bg {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background-repeat: no-repeat;
        background-size: 100% auto;
        z-index: -1;
    }
    form {
        position: relative;
    }
    .holder {
        width: 100%;
        padding-top: 61.33%;
    }
    .form-control {
        height: 44px;
    }

    .form-control-feedback {
        width: auto!important;
        height: 44px;
        line-height: 44px;
        right: 15px;
        z-index: 99;
        pointer-events: all;
        font-size: 14px;
    }

    .btn {
        padding: 13px 0!important;
        border-radius: 2px;
    }
</style>
