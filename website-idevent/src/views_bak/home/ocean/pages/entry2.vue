<template>
	<!-- Slider main container -->
    <div class="iui-page-bg" :style="{ backgroundImage: 'url(' + pendingImg + ')' }"></div>

    <!--<div class="wrapper">-->
		<!--<div class="swiper-container" ref="container" v-if="false">-->
		    <!--&lt;!&ndash; Additional required wrapper &ndash;&gt;-->
		    <!--<div class="swiper-wrapper">-->
		        <!--&lt;!&ndash; Slides &ndash;&gt;-->
		        <!--<div class="swiper-slide" :style="{ backgroundImage: 'url(' + home + ')' }">-->
		        <!--</div>-->
		        <!--<div class="swiper-slide" :style="{ backgroundImage: 'url(' + hometo + ')' }">-->
		        	<!--<div class="noop" @click="$router.push({ name: 'register_form2' })"></div>-->
		        <!--</div>-->
		    <!--</div>-->
		<!--</div>-->
	<!--</div>-->
</template>
<script>

//	import 'swiper/dist/css/swiper.css';
//	import Swiper from 'swiper';
	import Wechat from 'assets/js/wechat'

	export default {
		name: 'entry',
		data() {
			return {
			    pendingImg: require('../images/pending.png'),
				// home: require('../images/entry.png'),
				// hometo: require('../images/entryto.png')
			}
		},
		mounted() {
			new Wechat('客户节|我服务我承诺', '我的服务，您体验；我的承诺，您满意！', window.location.href, 'https://static.idevent.cn/oss/meeting/117/pic/4PqeNldC8vWPbeIo.png');
//			this.$nextTick(function() {
//				new Swiper('.swiper-container', {
//			        direction: 'vertical',
//			    });
//			});
			this.$store.commit('SPIN');
		},
	}
</script>

<style lang="less" scoped>

	/*.wrapper {*/
		/*position: fixed;*/
		/*width: 100%;*/
		/*height: 100%;*/
		/*top: 0;*/
		/*left: 0;*/
	/*}*/
    /*.swiper-container {*/
    	/*position: absolute;*/
        /*width: 100%;*/
        /*height: 100%;*/
        /*margin-left: auto;*/
        /*margin-right: auto;*/
    /*}*/
    /*.swiper-slide {*/
        /*text-align: center;*/
        /*font-size: 18px;*/
		/*background: #1467b2;*/
		/*background-size: contain;*/
		/*background-position: center top;*/
		/*background-repeat: no-repeat;*/
		 /*!* Center slide text vertically *!*/
        /*display: -webkit-box;*/
        /*display: -ms-flexbox;*/
        /*display: -webkit-flex;*/
        /*display: flex;*/
        /*-webkit-box-pack: center;*/
        /*-ms-flex-pack: center;*/
        /*-webkit-justify-content: center;*/
        /*justify-content: center;*/
        /*-webkit-box-align: center;*/
        /*-ms-flex-align: center;*/
        /*-webkit-align-items: center;*/
        /*align-items: center;*/
    /*}*/
    /*.noop {*/
		/*position: absolute;*/
		/*top: 60%;*/
		/*background: transparent;*/
		/*width: 100%;*/
		/*margin: 0 auto;*/
		/*z-index: 9;*/
		/*height: 150px;*/
    /*}*/
</style>