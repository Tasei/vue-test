<template>
	<section class="login-wrapper">
		<i-header></i-header>
		<div class="login">
			<h1>Step Into Oculus Shanghai - Open House April 2017</h1>
			<div class="login-area">
				<label for="code">Please enter your registered mail address</label>
				<input type="text" v-model="code" id="code">
			</div>
			<div class="text-center">
				<i-button type="button" :on-ok="login" class="loginBtn">
                    Login
                </i-button>
			</div>
		</div>
		<i-footer></i-footer>
	</section>
</template>

<script>

	import iHeader from './components/header'
	import iFooter from './components/footer'
    import iButton from 'iButton'
    import { Toast } from 'mint-ui'

	export default {
		data() {
			return {
				code: ''
			}
		},
		components: {
			iHeader,
			iFooter,
			iButton
		},
		created() {
            this.$store.commit('LANG', 'en');
            if (this.user) {
                this.$router.push({name: "home_index"})
            } else {
                this.$store.commit("SPIN", false)
            }
        },
		methods: {
			login(e) {

				if(this.code.length) {

					this.$http.post('meeting/loginByCode', {

	                    meeting_id: this.meeting.id,
	                    code: this.code

	                }).then( response => {

	                	let ret = response.body;

	                    if (ret.err == 0) {
	                        this.$router.push({name: "register_form"})
	                        return
	                    } else {
	                        Toast(ret.msg)
	                    }

	                }).finally(function () {
	                    e.loading = false
	                })
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.login-wrapper {
		max-width: 640px;
		width: 100%;
		margin: 0 auto;
	}
	.login {
		padding: 45px 35px;
		h1 {
			color: #333;
			text-align: center;
			font-size: 22px;
			width: 85%;
			margin: 0 auto;
			line-height: 30px;
		}
		.loginBtn {
			border: 0 none;
			text-align: center;
			background: #999;
			padding: 10px 30px;
			color: #fff;
			outline: none;
		}
	}
	.login-area {
		text-align: center;
		margin: 80px 0;
		label {
			font-size: 14px;
			font-weight: normal;
		}
		input {
			text-align: center;
			display: inline-block;
			width: 90%;
			outline: none;
			border: 0 none;
			border-bottom: 1px solid #ddd;
			padding: 10px 5px;
		}
	}
</style>
