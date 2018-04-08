<template>
	<div class="content" v-if="config">
		<header class="video">
            <div class="video-wrapper">
                <!--<iframe frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true" :src="config.liveStreamUrl"></iframe>-->
                <iframe frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true" :src="config.liveStreamUrlMobile"></iframe>
            </div>
			<!-- <img :src="startBtn" alt="" class="playBtn" v-show="paused" /> -->
		</header>
		<section class="main">
            <section class="tabs-title">
                热门评论
            </section>
			<section class="tabs-content" @scroll="changeStatus(true, $event)" @touchend="changeStatus(false, $event)">
				<section class="discuss-list">
					<section class="discuss-item" v-for="( item, index ) in list">
						<div class="avatar">
							<img :src="item.invitation.weixin | avatar" alt="">
						</div>
						<div class="discuss-wrapper">
							<section>
								<span class="name">{{ item.invitation.weixin | user }}</span>
								<span class="time">{{ item.updated_at | time }}</span>
							</section>
							<p>{{ item.content }}</p>
						</div>
					</section>
					<!-- <p class="loadmore" v-show="loadmore">正在加载……</p> -->
				</section>
			</section>
		</section>
		<section class="submit" :class="{ abs: abs }" v-if="config.liveCommentOn">
			<section class="message">
				<input placeholder="控制不住我自己，我也要说一说" v-model="message" @focus="foucsInput" @blur="blurInput"/>
			</section>
			<section class="btn" @click="throttle" :class="{ sending: sending, ended: false }">
				<span v-if="sending">发送中……</span>
				<span v-else="">发送</span>
			</section>
		</section>
        <router-link :to="{name:'red_packet_index'}" class="yum-fix" v-if="false">
            <div class="yum-fix-card"></div>
        </router-link>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	export default {
		name: 'live',
		data() {
			return {
				paused: true,
				startBtn: require('../images/play.png'),
				schedule: false,
				discuss: true,
				loadmore: true,
				sending: false,
				message: '',
				timeID: '',
				loadingVideo: true,
				moreMessagetimeID: '',
				abs: false,
				foucsInputTimes: 0,
				curVideo: '',
                messageStartScore: 0,
				list: [],
				type: 1,
				scrollStatus: false,
				config: null,

			}
		},
		created() {

			this.getConfig();

			this.initList();
			setTimeout(this.getList, 1000)

			let _self = this;
		},
		mounted() {
            this.$store.commit('SPIN');
        },
        destroyed() {

        	let _self = this;
        	_self.moreMessagetimeID && clearInterval(_self.moreMessagetimeID);
        },
        filters: {
            avatar(value) {

        		return value ? value.headimgurl : require('../images/item-avatar-3.png')
        	},
        	user(value) {

        		return value ? value.nickname : '游客';
        	},
        	time(value) {

        		let createdTime = new Date(value.replace(/-/g, '/')).getTime();
        		let mins = parseInt( ( new Date().getTime() - createdTime ) / 60000);

        		if (mins > 1440) {
                    return '一天前';
                }
        		if( mins >= 60 ) {
        			return parseInt(mins/60) + '小时前'
        		}
        		if( mins >= 1 && mins < 60 ) {
        			return mins + '分钟前'
        		}
        		if( mins < 1 ) {

        			return '刚刚'
        		}

        	},

        },
        directives: {
        	scrollShow: {
        		componentUpdated(el, binding) {

        			el.scrollTop = 0

        		}
        	},
        },
		methods: {

			foucsInput(e) {
				this.foucsInputTimes++;
				if(this.foucsInputTimes === 1) {
					this.abs = true;
				}

	        },
	        blurInput(e) {
	        	this.abs = false;
	        },
	        changeStatus(status, event) {

	        	let  _self = this;
	        	let time = status ? 0 : 1500;

	        	let timer = setTimeout(function() {
	        		_self.scrollStatus = status;
	        	}, time);

	        },
			initList() {

				let _self = this;

				if(_self.moreMessagetimeID) {
					clearInterval(_self.moreMessagetimeID);
				}
				_self.moreMessagetimeID = setInterval(function() {
					_self.getList();
				}, 5000);
			},
			getList() {

				if( this.scrollStatus ) return;

				this.$http.post('interact/messageboard/getList', {
					meeting_id: this.meeting.id,
                    start_score: this.messageStartScore,
					limit: 100,
				}).then(({data}) => {
                    if( data.err === 0 && data.res !== null ) {
                        if (data.res.list.length > 0) {

                            this.messageStartScore = data.res.list[0]._score;

                            this.list.unshift( ...data.res.list );
                        	this.list = this.list.splice(0, 100);

                        }
                    }
                });
			},
			async getConfig() {

				let { data } = await this.$http.post('custom/yum2017/getConfig');

				if( data.err == 0 && data.res != null ) {

					this.config = data.res
				}
			},
			async createMessage() {

				if( !this.message ) {

					Toast('留言内容不能为空！')
					this.sending = false;
					return;
				}

//				if( this.config.switch.live == 2 ) {
//
//					Toast('直播已结束！');
//					return;
//				}

				let { data } = await this.$http.post('interact/messageboard/create', {

					meeting_id: this.meeting.id,
					invitation_id: this.user.id,
					content: this.message

				});

				if( data.err == 0 && data.res != null ) {

					Toast('发送成功，请等待审核');
					this.message = '';
				} else {

					Toast('操作失败！');
				}

				this.sending = false;

			},
			throttle() {

				let _self = this;
				if(_self.sending) {

					return false;
				}
				clearTimeout(_self.timeID);
				_self.timeID = setTimeout(function() {

					_self.sending = true;
					_self.createMessage();

				}, 100);
			},
		}
	}
</script>

<style lang="less" scoped>

    .yum-fix{
        position: fixed;
        right: 15px;
        bottom: 90px;
        .yum-fix-card{
            display: block;
            width: 50px;
            height: 60px;
            background-image: url('../images/live-redpacket.png');
            background-size: 100% auto;
            background-repeat:no-repeat;
        }
    }

	@keyframes text
	{
		from {
			transform: translate3d(0, 0, 0);
		}
		to {
			transform: translate3d(-1000px, 0, 0);
		}
	}

	iframe {
		width: 100%;
		height: 100%;
	}
	.content {
		position: fixed;
		display: flex;
		flex-direction: column;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		margin: auto;
		background-color: #fff;
		.loadmore {
			position: absolute;
			width: 100%;
			bottom: 0;
			text-align: center;
			font-size: 12px;
			color: #999;
			background-color: #fff;
		}
		.video {
			position: relative;
			width: 100%;
			padding-top: 56.25%;
            background-color: #000;
            .loading-video {
            	position: absolute;
            	width: 100%;
            	top: 0;
            	left: 0;
            	bottom: 0;
            	right: 0;
            	background-color: #ddd;
            	span {
            		display: inline-block;
            		position: absolute;
            		left: 50%;
            		top: 50%;
            		transform: translate3d(-50%, -50%, 0);
            	}
            }
			.video-wrapper {
                position: absolute;
                top: 0;
                width: 100%;
                height: 100%;
                video, iframe {
                    width: 100%;
                    height: 100%;
                    position: absolute;
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
		}
		.main {
			position: absolute;
			width: 100%;
            margin-top: 56.25%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 50px;

            .tabs-title{
                font-size: 14px;
                line-height:14px;
                font-family:PingFangHK-Medium;
                color: #333;
                border-bottom:2px solid #bd2937;
                display: inline-block;
                margin: 10px 15px;
                padding: 5px 0;
            }

			.tabs-content {
				padding: 0 15px;
				overflow-x: hidden;
				overflow-y: scroll;
				-webkit-overflow-scrolling: touch;
				position: absolute;
				width: 100%;
                height: 100%;

				.discuss-list {
					margin: 10px 0 100px;
					.discuss-item {
						display: flex;
						margin: 10px 0;
						.avatar {
							flex: 2;
							img {
								width: 40px;
								height: 40px;
								border-radius: 40px;
							}

						}
						.discuss-wrapper {
							flex: 12;
							section {
								margin-bottom: 4px;
								color: #999;
							}
							.name {
								font-size: 14px;
							}
							.time {
								font-size: 12px;
							}
							p {
								color: #333;
								font-size: 14px;
								text-align: justify;
								word-break: break-all;
								word-wrap: break-word;
							}
						}
					}
				}
				.schedule {
					padding: 20px 0;
					.list {
						display: flex;
						span {
							margin: 6px 0;
							flex: 3;
							color: #999;
							&.ml8 {
								margin-left: 8px!important;
							}
							&:first-child {
								font-size: 16px;
								line-height: 24px;
							}
							&:last-child {
								flex: 5;
								color: #333;
								margin-left: 20px;
							}
						}

                        .cell__hd {

                            font-family: Consolas, Monaco, monospace;
                        }
					}
				}
			}
		}
		.submit {
			position: fixed;
			width: 100%;
			bottom: 0;
			left: 0;
			display: flex;
			height: 50px;
			&.abs {
				margin-bottom: 70px;
			}
			.message {
				flex: 3;
				height: 100%;
				background-color: #f3f3f3;
				padding: 8px;
				input {
					display: inline-block;
					width: 100%;
					height: 100%;
					border: 0 none;
					padding: 0 10px;
					outline: none;
				}
			}
			.btn {
				flex: 1;
				height: 100%;
				padding: 0;
				background-color: #c91018;
				font-size: 16px;
				line-height: 50px;
				font-weight: bold;
				color: #fff;
				&.sending {
					background-color: #c7a5d6;
				}
				&.ended {
					background-color: #ddd;
				}
			}
		}
	}

</style>
