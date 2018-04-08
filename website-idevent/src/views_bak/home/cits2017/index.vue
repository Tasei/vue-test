<template>
<div>
    <div class="bg"
         v-if="meeting.settings && meeting.settings.register && meeting.settings.register.login_background"
         :style="{backgroundImage: 'url('+meeting.settings.register.login_background + ')' }"></div>
    <div class="holder"></div>
    <div class="wrapper">
        <h3 class="text-center">{{user.user_name}}</h3>
        <h5 class="text-center text-gray">{{user.mobile}}</h5>
		<i-button class="btn btn-lg btn-default" :onOk="logout">退出登录</i-button>
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
    padding-top: 54%;
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
    mounted() {
        this.$store.commit('SPIN', false)
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
        }
    },
    methods: {
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
