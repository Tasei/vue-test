<template>
    <div></div>
</template>
<script>
    export default {
        created() {
            this.weixinAuth()
        },
        computed: {
            meeting() {
                return this.$store.state.meeting
            },
            user() {
                return this.$store.state.user
            },
        },
        methods: {
            weixinAuth() {

                let redirect = this.$cookie.get('__redirect')
                let wx_auth = this.$route.query.WX_AUTH

                if (wx_auth != '1') {
                    let ua = navigator.userAgent.toLowerCase()

                    if (ua.indexOf('micromessenger') > -1) {

                        if (this.meeting.settings.register.is_public == '2') {
                            window.location.href = '/api/weixin/login/request?meeting_id=' + this.meeting.id
                        } else {
                            window.location.href = '/api/weixin/auth/request?meeting_id=' + this.meeting.id
                        }

                        return
                    }
                }

                if (redirect == "/" || redirect == "" || !redirect) {
                    redirect = "/home/index"
                }

                console.log('redirect', redirect)

                if (this.user) {
                    console.log(this.user)
                    this.$cookie.delete('__redirect')
                    this.$router.push({
                        path: redirect
                    })
                } else {
                    console.log('llll')
                    console.log(this.user)
                    this.$router.push({
                        name: 'login'
                    })
                }

            },
        }
    }
</script>
