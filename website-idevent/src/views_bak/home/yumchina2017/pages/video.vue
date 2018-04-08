<template>
    <div class="content" v-if="videos.length">
		<header class="video" v-if="curVideo">
			<iframe frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true" :src="curVideo.video"></iframe>
		</header>
		<section class="intro" v-if="curVideo">
			<h1>{{ curVideo.title}}</h1>
            <div v-if="curVideo.description">
				<p class="text" :class="{ show: showText }">
					{{ curVideo.description}}
				</p>
				<p class="textmore" @click="show">展开全部</p>
			</div>
		</section>
		<section class="videos-list">
			<h3>相关视频</h3>
			<div class="video-wrapper">
				<div class="videos" v-for=" (item, index) in videos" @click="switchVideo(item, index)">
					<div class="img-wrapper">
						<div class="img" :style="{ 'background-image': 'url(' + item.img + ')'}"></div>
					</div>
					<p class="video-title">{{item.title}}</p>
				</div>
			</div>
		</section>
    </div>
</template>

<script>

	import { Toast } from 'mint-ui';
   	export default {
   		name: 'videos',
		data() {
			return {
				startBtn: require('../images/play.png'),
				showText: false,
                videos: [],
                curVideo: {}
			}
		},
		created() {
			this.getConfig();
			console.log(this.$route.from)
		},
		mounted() {
            this.$store.commit('SPIN');
        },
		methods: {
			async getConfig() {

				let { data } = await this.$http.post('custom/yum2017/getConfig', {
					idx: this.$route.query.idx
				});

				if( data.err == 0 && data.res != null ) {

					console.log(this.$route.from);
					this.videos = data.res.video;
					this.curVideo = this.videos[0];
				}
			},
			show() {
				this.showText = !this.showText;
			},
			switchVideo(item, idx) {
                this.curVideo = this.videos[idx]
			}
		}
   }
</script>

<style lang="less" scoped>

    html {
    	background-color: #ddd;
    }
	.video {
		position: relative;
		width: 100%;
		padding-top: 56.25%;
		background-color: #000;
		iframe {
			position: absolute;
			width: 100%;
			height: 100%;
			bottom: 0;
			top: 0;
			left: 0;
			right: 0;
		}

	}
	.playBtn {
		position: absolute;
		display: inline-block;
		width: 45px;
		left: 50%;
		top: 50%;
		transform: translate3d(-50%, -50%, 0);
	}
	.intro {
		background-color: #fff;
		padding: 15px 20px;
		border-bottom: 20px solid #ddd;
		h1 {
			font-size: 18px;
			font-weight: bold;
			margin: 10px 0 15px;
		}
		.text {
			font-size: 14px;
			color: #666;
			height: 60px;
			overflow: hidden;
			text-align: justify;
			&.show {
				height: auto;
			}
		}
		.textmore {
			text-align: center;
			color: #866F90;
			font-size: 16px;
			margin: 0;
			&::after {
				position: relative;
				content: '';
				display: inline-block;
				width: 0;
				height: 0;
				border: 6px solid #fff;
				border-top: 6px solid #866F90;
				top: 4px;
				left: 4px;
			}
		}
	}
	.videos-list {
		background: #fff;
		padding: 20px;
		margin: 5px 0;
		h3 {
			margin: 0 0 20px;
			font-size: 16px;
			font-weight: bold;
			color: #333;
		}
		.video-wrapper {
			margin: 0 -1%;
		}
		.videos {
			position: relative;
			display: inline-block;
			width: 48%;
			margin: 0 1%;
			.img-wrapper {
				position: relative;
				width: 100%;
				background-color: #ddd;
				padding-top: 56.25%;
				.img {
					position: absolute;
					left: 0;
					top: 0;
					width: 100%;
					height: 100%;
					background-size: cover;
					background-repeat: no-repeat;
					background-position: center center;
					opacity: 1;
				}
			}

			.video-title {
				font-size: 14px;
				color: #333;
				margin-top: 10px;
                width: 90%;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
			}
		}
	}
</style>
