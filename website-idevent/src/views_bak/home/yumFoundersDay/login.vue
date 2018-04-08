<template>
    <div class="login-box">
        <div class="bg" :style="{backgroundImage: 'url('+ bg + ')' }"></div>
        <div class="holder"></div>
        <div class="m-login-page">
            <div class="m-login-form">
                <input type="text" class="form-control m-login-code center" placeholder="请输入员工工号"
                       v-model="invitationCode">
                <p></p>
                <input type="text" class="form-control m-login-code center" placeholder="请输入您的姓名"
                       v-model="name">
                <i-button type="button" :on-ok="login" class="btn-primary btn-lg m-login-btn">确认</i-button>
            </div>

        </div>
    </div>
</template>
<script>
    import {Toast} from 'mint-ui';
    import iButton from 'iButton'

    export default {
        computed: {
            bg() {
                return require('./images/login_bg.png');
            },
        },
        data() {
            return {
                showMobileForm: false,
                invitationCode: "",
                name: "",
                mobile: ""
            }
        },
        components: {
            iButton
        },
        methods: {
            login(e) {
                if (!this.invitationCode) {
                    Toast('请输入员工工号')
                    e.loading = false
                    return false
                }
                if (!this.name) {
                    Toast('请输入您的姓名')
                    e.loading = false
                    return false
                }

                this.$http.post('meeting/loginByCode', {
                    'meeting_id': this.meeting.id,
                    'code': this.invitationCode,
                }).then((response) => {
                    let ret = response.body
                    if (ret.err === 0) {
                        this.$http.post('invitation/code/updateCodeInfo', {
                            'name': this.name,
                        }).then((response) => {
                            let ret = response.body
                            if (ret.err === 0) {
                                this.$router.push({name: "portal"})
                            } else {
                                Toast(ret.msg)
                            }
                        }).finally(() => {
                            e.loading = false
                        })
                    } else {
                        Toast(ret.msg)
                    }
                }).finally(() => {
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
    @import "../../../assets/style/home/login";

    .m-login-code {
        background-color: rgba(0, 0, 0, .1) !important;
    }

    .m-login-btn {
        background-color: #cc1018 !important;
    }

    .holder {
        padding-top: 68%;
    }
</style>
