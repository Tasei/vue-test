<template>
	<div class="content" v-if="config">
		<header class="video">
            <div class="video-wrapper">
                <div v-if="config.switch.live == 1">
                    <video v-if="type == 1 && !config.switch.videoFucked" :src="config.live.streamUrl" preload controls playsinline></video>
                    <iframe v-else frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true" :src="stream[1].src"></iframe>
                </div>
                <div v-else>
                    <iframe frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true" :src="config.live.playbackUrl"></iframe>
                </div>
            </div>
			<!-- <img :src="startBtn" alt="" class="playBtn" v-show="paused" /> -->
		</header>
		<section class="main">
			<section class="award-content">
				<div class="awards" :class="{awardsFull:config.switch.live != 1 || config.switch.videoFucked}">
					<div class="awards-wrapper" :class="{ scroll: awardsList }">
						<p v-for="item in awards">恭喜工号{{item.code}}{{item.name}}获奖</p>
					</div>
				</div>
				<div class="video-stream-change" v-if="config.switch.live == 1 && !config.switch.videoFucked">
					<span v-for="item in stream" :class="{ active: item.active }" @click="changeStream(item)">
						{{item.name}}
					</span>
				</div>
			</section>
			<section class="tabs">
				<h3 :class="{ active: discuss }" data-tab="discuss" @click="switchTab">热门评论</h3>
				<h3 :class="{ active: schedule }" data-tab="schedule" @click="switchTab">演讲日程</h3>
			</section>
			<section class="tabs-content" @scroll="changeStatus(true, $event)" @touchend="changeStatus(false, $event)">
				<section class="discuss-list" v-show="discuss">
					<section class="discuss-item" v-for="( item, index ) in list">
						<div class="avator">
							<img :src="item.invitation.weixin | avator" alt="">
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
				<section class="schedule" v-if="schedule">
					<section class="list">
						<span class="cell__hd">09:30-10:00</span>
						<span>进入直播室（暖场互动）</span>
					</section>
					<section class="list">
						<span class="cell__hd">10:00-10:05</span>
						<span>开场</span>
					</section>
					<section class="list">
						<span class="cell__hd">10:05-10:20</span>
						<span>CEO讲话</span>
					</section>
                    <section class="list">
                        <span class="cell__hd">10:20-11:10</span>
                        <span class="ml8">《百胜演说家》主题演讲</span>
                    </section>
                    <section class="list">
                        <span class="cell__hd">11:10-11:15</span>
                        <span>主持人结语</span>
                    </section>
				</section>
			</section>
		</section>
		<section class="submit" v-if="discuss && config.switch.live != 2" :class="{ abs: abs }">
			<section class="message">
				<input placeholder="控制不住我自己，我也要说一说" v-model="message" @focus="foucsInput" @blur="blurInput"/>
			</section>
			<section class="btn" @click="throttle" :class="{ sending: sending, ended: config.switch.live == 2 }">
				<span v-if="sending">发送中……</span>
				<span v-else="">发送</span>
			</section>
		</section>
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
                awardsList: false,
				list: [],
				type: 1,
				awards: [],
				scrollStatus: false,
				stream: [{
					type: 1,
					name: '线路一',
					active: false,
				},{
					type: 2,
					name: '线路二',
					src: 'http://mudu.tv/?a=index&c=show&id=55390&type=mobile',
					active: false
				}],
				config: null,
                awardPage: 1,

			}
		},
		created() {

			this.getConfig();

			this.initList();
			setTimeout(this.getList, 1000)
			setTimeout(this.getAwardList, 1000)

			let _self = this;
			_self.type = _self.$cookie.get('stream') || 1;
			this.stream.forEach( (item) => {

				if( item.type == _self.type ) {
					item.active = true;
				}

			})

		},
		mounted() {
            this.$store.commit('SPIN');

            this.awardsList = true;

            let _self = this;
            let timer = setInterval(function() {
                _self.awardPage++
            	_self.getAwardList();
            }, 60000);

        },
        destroyed() {

        	let _self = this;
        	_self.moreMessagetimeID && clearInterval(_self.moreMessagetimeID);
        },
        filters: {
        	avator(value) {

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
			changeStream(item) {

				this.$cookie.set('stream', item.type, { expires: '1M' });
				window.location.reload();

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
            getAwardList() {

				this.$http.post('meeting/lottery/getDetailNames', {
					meeting_id: this.meeting.id,
                    limit: 30,
                    page: this.awardPage
				}).then(({data}) => {
                    if( data.err == 0 && data.res != null ) {
                        this.awards = data.res.list;
                    }
                });
			},
			async createMessage() {

				if( !this.message ) {

					Toast('留言内容不能为空！')
					this.sending = false;
					return;
				}

				if( this.config.switch.live == 2 ) {

					Toast('直播已结束！');
					return;
				}

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
			switchTab(e) {
				this.discuss = e.target.dataset.tab == 'discuss';
				this.schedule = e.target.dataset.tab == 'schedule'
			},
		}
	}
</script>

<style lang="less" scoped>


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

			.award-content {
                height: 48px;
				width: 100%;
				background: #ddd url("../images/gift.png") no-repeat 5px center;
				background-size: 20px;
				font-size: 14px;
				color: #666;
				padding: 8px 5px 8px 30px;
				overflow: hidden;
				clear: both;
				.awards {
					float: left;
					width: 55%;
					white-space: nowrap;
					overflow: hidden;
					line-height: 32px;
					.awards-wrapper {
						animation: text 60s infinite linear;
					}
					p {
						display: inline-block;
						margin: 0 20px 0 0;
					}
				}
                .awardsFull{
                    width: 96% !important;
                }
				.video-stream-change {
					float: right;
					width: 40%;
					text-align: right;
					span {
						display: inline-block;
						border: 1px solid #999;
						padding: 4px;
						margin-right: 10px;
						&:last-child {
							margin-right: 0;
						}
						&.active {
							border-color: #a07daf;
							color: #a07daf;
						}
					}

				}
			}
			.tabs {
				display: flex;
				border-bottom: 1px solid #ddd;
				align-items: center;
				justify-content: center;
				background-color: #fff;
				h3 {
					position: relative;
					flex: 1;
					padding: 15px 0;
					font-size: 18px;
					margin: 0;
					text-align: center;
					&.active {
						color: #A07DAF;
						&::after {
							content: '';
							display: block;
							position: absolute;
							width: 50%;
							height: 4px;
							border-radius: 2px;
							background-color: #A07DAF;
							bottom: 0;
							left: 50%;
							transform: translate3d(-50%, 0, 0);
						}
					}
				}
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
					margin: 20px 0 100px;
					.discuss-item {
						display: flex;
						margin: 10px 0;
						.avator {
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
				background-color: #A07DAF;
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
