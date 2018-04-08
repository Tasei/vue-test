<template>
    <i-fixed class="bg">
        <div class="pc-login clearfix">
            <div class="left" v-bind:style="banner_img"></div>
            <div class="right">
                <div class="logo"></div>
                <h1 v-if="isDealer">
                    2017 MG&MAXUS
                    <div>First Joint Dealers’Conference</div>
                </h1>
                <h1 v-else>2017 MG&MAXUS
                    <div>Overseas Media Test Drive</div>
                </h1>
                <form>
                    <div class="code">
                        <div class="form-group">
                            <input class="form-control" v-model="code" placeholder="Please Enter Invitation Code"/>
                        </div>
                        <button type="submit" class="btn btn-primary" @click="loginByCode">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </i-fixed>
</template>
<script>
    import iFixed from 'components/fixed'
    import {Indicator, Toast} from 'mint-ui'
    export default{
        data(){
            return {
                code: ''
            }
        },
        mounted() {
            this.$store.commit('SPIN')
        },
        components: {
            iFixed
        },
        computed: {
            isDealer(){
                return this.meeting.alias == 'mg2017_dealer'
            },
            banner_img(){
                if (this.isDealer) {
                    return {
                        'background-image': 'url(' + require("./images/dealer_kv.jpg") + ')'
                    }
                } else {
                    return {
                        'background-image': 'url(' + require("./images/media_kv.jpg") + ')'
                    }
                }
            },
        },
        methods: {
            loginByCode() {
                if (!this.code) {
                    Toast('Please Enter Invitation Code')
                    return false
                }
                Indicator.open()
                this.$http.post('meeting/loginByCode', {
                    'meeting_id': this.meeting.id,
                    'code': this.code,
                }).then(function (response) {
                    let ret = response.body
                    Indicator.close()
                    if (ret.err == 0) {
                        let redirect = this.$cookie.get('__redirect')
                        if (redirect == "/" || redirect == "" || !redirect) {
                            redirect = "pc_mg_home"
                        }
                        console.log(redirect)
                        this.$router.push({path: redirect})
                        return
                    } else {
                        Toast(ret.msg)
                    }
                })
                event.preventDefault()
                return false
            }
        }
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    @img_path: './images';
    .pc-login {
        width: 990px;
        height: 360px;
        position: absolute;
        left: 50%;
        margin-left: -495px;
        top: 50%;
        margin-top: -180px;
        .left, .right {
            float: left;
            display: inline-block;
        }
        .left {
            width: 630px;
            height: 100%;
            background-repeat: no-repeat;
            background-size: 100% 100%;
        }
        .right {
            width: 330px;
            height: 100%;
            background: #ffffff;
            border: 1px solid #dddddd;
            box-shadow: 0px 2px 4px 0px rgba(119, 119, 119, 0.50);
            position: relative;
            padding: 40px 0px 40px 30px;
            .logo {
                width: 150px;
                height: 48px;
                background: url("@{img_path}/logo.png") no-repeat center;
                background-size: 100% 100%;
                margin-bottom: 20px;
            }
            h1 {
                display: block;
                width: 100%;
                font-size: 24px;
                line-height: 30px;
                color: #000;
                font-weight: bold;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 2;
                margin: 0;
                div {
                    font-size: 20px;
                }
            }
            .code {
                position: absolute;
                left: 30px;
                right: 40px;
                bottom: 40px;
                .form-control {
                    width: 100%;
                    border-width: 0 0 1px !important;
                }
                .btn {
                    width: 90px;
                }
            }
        }
    }

    .bg {
        background-size: cover;
    }
</style>
