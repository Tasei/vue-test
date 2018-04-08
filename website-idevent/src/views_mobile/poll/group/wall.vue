<template>
<div class="wall-body">
	<div class="vote" v-if="mode==1">
		<div class="result" v-for="vote in list">
			<table class="results">
				<tbody>
				<tr class="option" v-for="(option, index) in vote.options">
					<th>
						<template v-if="option.label">{{option.label}}</template><template v-else>{{index+1}}. </template>	
					</th>
					<td>
						<div class="progress">
						  	<div class="progress-bar" :style="{width: option.percent * 0.8+'%'}">
							</div>
							<span class="percent">{{option.percent}}%</span>
						</div>
					</td>
				</tr>
				</tbody>
			</table>
			<div class="divider"></div>
		</div>
	</div>
	<swiper :options="swiperOption" ref="mySwiper" v-else>
		<swiper-slide v-for="vote in list">

			<div class="vote">
				<h3 class="title" :class="titleClass(vote.title)">{{index+1}}. {{vote.title}}</h3>

				<div class="options">
					<div class="option" v-for="(option, index) in vote.options">
						<h4 class="option-title">
							<template v-if="option.label">{{option.label}}</template><template v-else>{{index+1}}. </template>	
							{{option.text}}
						</h4>
						<div class="progress" v-if="mode==2">
						  	<div class="progress-bar" :style="{width: option.percent * 0.8+'%'}">
							</div>
							<span class="percent">{{option.percent}}%</span>
						</div>
					</div>
				</div>
			</div>

		</swiper-slide>
	</swiper>
</div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
	components: {
		swiper, swiperSlide,
	},
	data() {
		let self = this
		return {
			list: [],
			swiperOption: {
				notNextTick: true,
				direction : 'horizontal',
				keyboardControl: true,
				loop: true,
				initialSlide: 1,
				onTransitionStart(swiper) {
		          // console.log(swiper)
		          self.$store.commit('SPIN', false)
		        },
			}
		}
	},
	created() {
		this.$store.commit('IGNORE_NETWORK_ERR')
		this.getList()
	},
	destoryed() {
		this.$store.commit('IGNORE_NETWORK_ERR', false)
	},
	computed: {
		meeting() {
			return this.$store.state.meeting
		},
		mode(){
			//0 只显示题目
			//1 只显示结果
			//2 显示题目和结果
			return this.$route.query.mode;
		},
	},
	methods: {
		titleClass(title) {
			// console.log(title.length)
			return {
				'sm': title.length > 12
			}
		},
		getList() {
			let self = this
			this.$http.post('interact/wall/getPolls', {
				meeting_id: this.meeting.id
			})
			.then((response) => {
				let ret = response.body
                if (ret.err == 0) {
                	self.list = ret.res.list
                	if (self.mode == 1){
                		self.$store.commit('SPIN', false)
                	}
                }
            })
            .finally(() => {
            	setTimeout(self.getList, 2000)
            })
		},
	},
}
</script>
<style lang="less" scoped>
.wall-body{
	margin-top: 60px;
	font-family:PingFangSC-Medium;
	color:#fff;
}

.result{
	&:last-child{
		.divider{
			display: none;
		}
	}

	.divider{
		border-bottom: 4px solid rgba(255,255,255,0.2);
		margin: 20px 0;
	}

	table.results{
		width: 100%;
		text-align: left;
		tr{
			height: 80px;
		}
		th{
			font-family:PingFangSC-Medium;
			font-size:56px;
			color:#fff;
			letter-spacing:0px;
			text-align:left;
			width: 70px;
			font-weight: normal;
		}

		td{
			vertical-align: middle;
			.progress {
				margin: 0;
				.percent{
					color: #fff;
				}
			}
		}
	}
}

.vote{
	.title{
		font-size:76px;
		line-height: 84px;
		margin-bottom: 0px;
		margin-top: 0;
		padding:0;
		&.sm{
			font-size: 60px;
			line-height: 68px;
		}
	}
	.option{
		margin-bottom: 60px;
	}
	.option-title{
		font-family:PingFangSC-Regular;
		font-size:56px;
		line-height: 60px;
		margin-bottom: 10px;
		margin-top: 60px;
		vertical-align: middle;
	}
	.progress{
		background-color: transparent;
		box-shadow: none;
		height: 30px;
		
		.progress-bar{
			min-width: 2%;
			height: 30px;
			border-radius: 100px;
			background-color: #fff;
			opacity: 0.69;
		}
	}
	.percent{
		font-family:PingFangSC-Regular;
		color: #00b459;
		font-size:36px;
		line-height: 30px;
		margin-left: 20px;
	}
}
</style>