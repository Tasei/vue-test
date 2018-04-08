<template>
    <div class="award">
        <div class="bg"></div>
        <div class="holder"></div>
        <div class="btn-result text-center">
            <a href="javascript:;" class="text-primary icon"></a>
            <h3 class="text-dark font-bold">您已进入抽奖池</h3>
            <p>幸运奖品等着您呐～～</p>
            <div class="col-xs-12">
                <router-link :to="{name: 'home_index'}" class="btn btn-primary btn-outline btn-lg btn-block">返回首页</router-link>
            </div>
        </div>
    </div>
</template>
<script>
    import iButton from 'iButton'
    import Cookie from 'vue-cookie'
    export default{
        data(){
            let sign = Cookie.get('sign_award', false)
            return {
                sign: sign
            }
        },
        computed: {
            meeting () {
                return this.$store.state.meeting
            },
            user () {
                return this.$store.state.user
            },
            cover () {
                try {
                    return this.meeting.settings.register.login_background;
                } catch(e) {
                    return ''
                }
            }
        },
        created () {
            if (!this.user) {
                return
            }
        },
        mounted () {
            this.$store.commit('SPIN')
        },
        methods: {
            btnSign () {
                Cookie.set('sign_award', true)
                this.sign = true
            }
        },
        components:{
            iButton
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
        background: url("../../assets/images/crowne/crowne_bg.jpg") no-repeat;
        background-size: 100% 100%;
        background-position: center top;
    }
    .holder {
        padding-top: 18.8%;
    }
    .award {
        height: 100vh;
        position: relative;
    }
    .col-xs-12 {
        padding: 0 12px;
        position: relative;
    }
    .btn-result {
        position: relative;
        margin-top: 30px;
        color: #fff;
        .icon {
            display: inline-block;
            background: url("../../assets/images/crowne/smile.png") no-repeat;
            height: 50px;
            width: 50px;
            background-position: center;
            background-size: 100% 100%;

        }
        h3 {
            margin: 20px 0 10px;
            font-size: 20px;
            color: #fff;
        }
        p {
            opacity: 0.8;
            font-size: 15px;
            margin-bottom: 40px;
        }

        .btn {
            color: #fff;
            border-color: #fff;
        }
    }
</style>
