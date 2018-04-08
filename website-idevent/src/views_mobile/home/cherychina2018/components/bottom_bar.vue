<template>
<div class="bottom-bar bg-primary">
	<div class="bottom-bar-item" :class="{active:(active=='home')}">
	    <router-link :to="{name:'home_index'}">
	        <i class="bar-icon bar-icon-home"></i>
	        <small>{{$t('bottomBar.home')}}</small>
	    </router-link>
    </div>
	<div class="bottom-bar-item" :class="{active:(active=='reg')}">
	    <router-link :to="{name:'register_form'}">
	        <i class="bar-icon bar-icon-reg"></i>
	        <small>{{$t('bottomBar.signUp')}}</small>
	    </router-link>
    </div>
	<div class="bottom-bar-item" :class="{active:(active=='my')}">
	    <router-link :to="{name:'home_page',query:{page:'qrcode'}}">
	        <i class="bar-icon bar-icon-my"></i>
	        <small>{{$t('bottomBar.qrCode')}}</small>
	    </router-link>
    </div>
</div>
</template>
<script>
export default{
	props:{
		active: {
			type: String,
			default: "home",
		}
	}
}
</script>
<style lang="less" scoped rel="stylesheet/less">
.bottom-bar{
    opacity:0.94;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    background-image: url("../images/tab_bg.jpg");


    .bottom-bar-item{
		display: inline-block;
		width: 33.33%;
		text-align: center;
		float: left;

		.bar-icon{
			width: 24px;
			height: 24px;
			display: block;
			margin: 0 auto 4px;
			background-size: 100% auto;
			&.bar-icon-home{
				background-image: url('../../../../assets/images/mobile/chery/home_normal.png');
			}
			&.bar-icon-reg{
				background-image: url('../../../../assets/images/mobile/chery/register_normal.png');
			}
			&.bar-icon-my{
				background-image: url('../../../../assets/images/mobile/chery/profile_normal.png');
			}
		}

		a{
	    	display: block;
	    	height: 50px;
	    	padding: 7px 0;
			opacity:0.5;
			font-family:PingFangSC-Regular;
			font-size:10px;
			color:#fff;
			letter-spacing:0px;
			line-height:10px;
			text-align:center;
	    }

		&.active{
			a{
				font-family:PingFangSC-Medium;
				color: #fff;
				opacity: 1;
			}

			.bar-icon{
				&.bar-icon-home{
					background-image: url('../../../../assets/images/mobile/chery/home_select.png');
				}
				&.bar-icon-reg{
					background-image: url('../../../../assets/images/mobile/chery/register_select.png');
				}
				&.bar-icon-my{
					background-image: url('../../../../assets/images/mobile/chery/profile_select.png');
				}
			}
		}
    }
}
</style>
