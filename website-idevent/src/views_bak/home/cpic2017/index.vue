<template>
<div>
    <div class="bg"
         v-if="meeting.settings && meeting.settings.register && meeting.settings.register.login_background"
         :style="{backgroundImage: 'url('+meeting.settings.register.login_background + ')' }"></div>
    <div class="holder"></div>
    <div class="wrapper">
		<router-link :to="{name:'register_form'}" class="btn btn-lg btn-primary">
            报名注册
        </router-link>
        <router-link v-if="hasRegInfo" :to="{name:'home_qrcode'}" class="btn btn-lg btn-primary">
            二维码
        </router-link>
	</div>
</div>
</template>
<style lang="less" scoped>
.bg {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: top;
    z-index: -1;
}
.holder {
    width: 100%;
    padding-top: 61.33%;
}
.wrapper {
	margin: 0 20px;
}
</style>
<script>
import iButton from "iButton"
export default {
	components: {
		iButton
	},
    created() {
        this.getRegInfo();
    },
    data() {
        return {
            hasRegInfo: false
        }
    },
    computed: {
        meeting() {
            return this.$store.state.meeting
        },
        user() {
            return this.$store.state.user
        },
        isDone(){
            return this.$route.query.done
        },
    },
    methods: {
        getRegInfo() {
            let self = this
            this.$http.post('register/getRegInfo').then(function(response) {
                let ret = response.body
                if (ret.err == 0) {
                    this.hasRegInfo = ret.res.hasRegInfo
                }
            }).then(() => {
                this.$store.commit('SPIN', false)
            })
        },
        logout() {
	        let self = this
	        this.$http.post('meeting/logout').then(function(response) {
	            let ret = response.body
	            if (ret.err == 0) {
	                self.$store.commit('USER', null)
	                this.$cookie.delete('WX_AUTH')

	                this.$router.push({name: "portal"})
	                return
	            }
	        })

	    }
    }
}
</script>
