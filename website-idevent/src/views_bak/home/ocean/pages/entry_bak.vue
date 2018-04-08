<template>
	<div class="wrapper">
		<audio-player src="https://static.idevent.cn/oss/tbkhj/entry_music.mp3"></audio-player>
		<div class="swiper-container" ref="container">
		    <!-- Additional required wrapper -->
		    <div class="swiper-wrapper">
		        <!-- Slides -->
		        <div class="swiper-slide" :style="{ backgroundImage: 'url(' + home + ')' }">
					<div class="arrow bounce"></div>
		        </div>
		        <div class="swiper-slide content" :style="{ backgroundImage: 'url(' + hometo + ')' }">
		        	<div class="arrow bounce"></div>
		        </div>
		        <div class="swiper-slide content" :style="{ backgroundImage: 'url(' + home_bg + ')'}">
		        	<i-form></i-form>
		        </div>
		    </div>
		</div>
	</div>

</template>

<script>

	import 'swiper/dist/css/swiper.css';
	import Swiper from 'swiper';
	import Wechat, { wx } from 'assets/js/wechat'
	import iForm from './form';
	import audioPlayer from "components/audioPlayer"

	export default {
		name: 'entry',
		components: {
			iForm,
			audioPlayer
		},
		data() {
			return {
			    pendingImg: require('../images/pending.png'),
				home: require('../images/entry.png'),
				hometo: require('../images/entryto.png'),
				home_bg: require('../images/home_bg.png'),
			}
		},
		created() {
			this.$cookie.set('__redirect', this.$route.fullPath)
			if(!this.user) {
				this.$router.push({
					name: 'portal'
				})
			}
		},
		mounted() {

			if( this.isWechat ) {
				new Wechat('客户节|我服务我承诺', '我的服务，您体验；我的承诺，您满意！', window.location.href, 'https://static.idevent.cn/oss/meeting/117/pic/4PqeNldC8vWPbeIo.png');
				wx.ready(() => {
	                this.$player.play()
	            })
			}else{
				this.$player.play()
			}
			
			this.$nextTick(function() {
				this.swiper = new Swiper('.swiper-container', {
			        direction: 'vertical',
			    });
			});
			
			this.$store.commit('SPIN');
		},
	}
</script>

<style lang="less" scoped>
	
	.arrow {
	  position: absolute;
	  bottom: 20px;
	  left: 50%;
	  margin-left: -20px;
	  width: 40px;
	  height: 40px;
	  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yOTMuNzUxLDQ1NS44NjhjLTIwLjE4MSwyMC4xNzktNTMuMTY1LDE5LjkxMy03My42NzMtMC41OTVsMCwwYy0yMC41MDgtMjAuNTA4LTIwLjc3My01My40OTMtMC41OTQtNzMuNjcyICBsMTg5Ljk5OS0xOTBjMjAuMTc4LTIwLjE3OCw1My4xNjQtMTkuOTEzLDczLjY3MiwwLjU5NWwwLDBjMjAuNTA4LDIwLjUwOSwyMC43NzIsNTMuNDkyLDAuNTk1LDczLjY3MUwyOTMuNzUxLDQ1NS44Njh6Ii8+DQo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMjIwLjI0OSw0NTUuODY4YzIwLjE4LDIwLjE3OSw1My4xNjQsMTkuOTEzLDczLjY3Mi0wLjU5NWwwLDBjMjAuNTA5LTIwLjUwOCwyMC43NzQtNTMuNDkzLDAuNTk2LTczLjY3MiAgbC0xOTAtMTkwYy0yMC4xNzgtMjAuMTc4LTUzLjE2NC0xOS45MTMtNzMuNjcxLDAuNTk1bDAsMGMtMjAuNTA4LDIwLjUwOS0yMC43NzIsNTMuNDkyLTAuNTk1LDczLjY3MUwyMjAuMjQ5LDQ1NS44Njh6Ii8+DQo8L3N2Zz4=);
	  background-size: contain;
	  z-index: 9
	}

	.bounce {
	  -moz-animation: bounce 2s infinite;
	  -webkit-animation: bounce 2s infinite;
	  animation: bounce 2s infinite;
	}
	.wrapper {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}
    .swiper-container {
    	position: absolute;
        width: 100%;
        height: 100%;
        margin-left: auto;
        margin-right: auto;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
		background: #1467b2;
		background-size: cover;
		background-position: center top;
		background-repeat: no-repeat;
		 /* Center slide text vertically */
        // display: -webkit-box;
        // display: -ms-flexbox;
        // display: -webkit-flex;
        // display: flex;
        // -webkit-box-pack: center;
        // -ms-flex-pack: center;
        // -webkit-justify-content: center;
        // justify-content: center;
        // -webkit-box-align: center;
        // -ms-flex-align: center;
        // -webkit-align-items: center;
        // align-items: center;
    }
    .content {
    	position: relative;
    	&::after {
    		content: '';
    		position: absolute;
    		background-image: url('../images/footer.png');
    		background-size: contain;
    		background-repeat: no-repeat;
    		background-position: center bottom;
    		display: block;
    		width: 100%;
    		padding-top: 30%;
			bottom: 0;
			left: 50%;
			transform: translate3d(-50%, 0, 0);
			z-index: 0
    	}
    }
    .sign {
    	&:after {
    		content: '';
    		position: absolute;
    		background-image: url('../images/footer.png');
    		background-size: contain;
    		background-repeat: no-repeat;
    		background-position: center bottom;
    		display: block;
    		width: 100%;
    		padding-top: 30%;
			bottom: 0;
			left: 50%;
			transform: translate3d(-50%, 0, 0);
			z-index: 0;
    	}
    }
</style>

