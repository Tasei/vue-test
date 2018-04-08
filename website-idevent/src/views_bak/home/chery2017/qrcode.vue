<template>
<div class="qr-bg" v-if="user">
    <div class="qr-wrapper">
		<div class="my-qrcode">
			<h3 class="my-name text-primary">
				{{user.contact.name}}
			</h3>
			<h4 class="my-code text-primary">
				{{user.code}}
			</h4>
			<div class="my-qrcode-image-wrapper">
			<img class="my-qrcode-image" src="/api/meeting/showQrcode" >
			</div>
			<p class="my-qrcode-desc">{{$t('help')}}</p>
		</div>

	    <i-button :on-ok="logout" v-if="user" class="btn btn-primary btn-outline btn-lg m-logout-btn">
	        {{$t('login.logout')}}
	    </i-button>
	</div>
    <bottom-bar :active="'my'"></bottom-bar>
</div>
</template>
<script>
import iButton from "iButton"
import BottomBar from "./components/bottom_bar"
	export default {
		components: {
			BottomBar, iButton,
		},
        locales: {
		    en: {
		        help: "Show this QrCode to sign in"
            },
            zh: {
		        help: "扫一扫上面的二维码即可签到参会"
            }
        },
		created() {
			this.$store.commit("SPIN", false)
		},
        methods: {
            logout(e) {
                let self = this
                this.$http.post('meeting/logout')
                    .then(function(response) {
                        let ret = response.body
                        if (ret.err == 0) {
                            self.$store.commit('USER', null)
                            this.$cookie.delete('WX_AUTH')

                            this.$router.push({name: "portal"})
                            return
                        }
                    })
                    .finally(function(){
                        e.loading = false
                    })
            },
        }
	}
</script>
<style lang="less" scoped>
    .btn.m-logout-btn{
        font-family:PingFangSC-Regular;
        font-weight: normal;
        margin-top: 60px;
    }
	// .qr-bg {
	// 	padding: 30px 20px;
	// 	// background-color: rgba(0,0,0,0.9);
	// 	background-color: #fff;
	// 	min-height: 100vh;
	// 	position: relative;
	// 	// background-image: url('../../assets/images/mobile/qr-bg@2x.png');
	// 	// background-repeat: no-repeat;
	// 	// background-size: contain;
	// }
	// h2{
	// 	font-family:PingFangSC-Medium;
	// 	font-size:  18px;
	// 	text-align: center;
	// 	color: #fff;
	// 	margin-top: 0;
	// 	margin-bottom: 30px;
	// }
	.qr-wrapper{
		padding: 0 85px;
	}
	.my-qrcode{
		background: #fff;
		opacity: 0.94;
		border-radius: 2px;
		text-align: center;

		.my-name{
			font-family:PingFang-SC-Medium;
			color: #333;
			font-size: 18px;
			line-height: 24px;
			padding-top: 60px;
			margin-top: 0;
			margin-bottom: 0;
			margin-left: auto;
			margin-right: auto;
			// border-bottom: 1px solid #ddd;
		}

		.my-code{
			font-size: 15px;
			line-height: 20px;
			margin-top: 0;
			margin-bottom: 0;
			margin-left: auto;
			margin-right: auto;
			padding-bottom: 25px;
		}

		.my-qrcode-image-wrapper{
			// padding: 0 20px;
		}
		.my-qrcode-image{
			// border: 1px solid #ccc;
			// padding: 0;
			// margin: 30px auto;
		}
		.my-qrcode-desc{
			// padding-top: 25px;
			margin-top: 10px;
			color: #999;
			font-size: 12px;
		}
	}
</style>
