<template>
	<div>
		<div>
			<h2 class="page-title text-primary">{{group.title}}</h2>
		</div>
		<div class="vote" v-for="vote in list">
			<h3 class="title" :class="{'text-danger': vote.ok<0}">
				{{vote.title}}
			</h3>
			
			<div v-for="(option, index) in vote.options">
				<div class="option">
					<template v-if="option.label">{{option.label}}</template><template v-else>{{index+1}}. </template>
					{{option.text}}
				</div>
				<div class="progress">
				  	<div class="progress-bar" :style="{width: option.percent * 0.8+'%'}">
					</div>
					<span class="percent">{{option.percent}}%</span>
				</div>
			</div>

		</div>
		<back></back>
	</div>	
</template>
<script>
import back from "./back"
export default{
	components: {
		back
	},	
	data() {
		return {
			list: [],
		}
	},	
	computed:{
		meeting() {
			return this.$store.state.meeting
		},
		group() {
			return this.$store.state.poll_group
		},
		user() {
			return this.$store.state.user
		},
	},
	created(){
		this.$store.commit('SPIN', true)
		this.getPolls()
	},
	methods: {
		getPolls() {
			let self = this
			this.$http.post('interact/poll/getGroupPolls', {
				meeting_id: self.meeting.id,
				group_id: self.group.id
			})
			.then((response) => {
				let ret = response.body
                if (ret.err == 0) {
                	self.list = ret.res.list

                	this.$store.commit('SPIN', false)
                }
            })
		},		
	}
}	
</script>
<style lang="less" scoped>
h2.page-title {
	margin: 0 auto 30px 0;
	padding: 30px 0;
	font-size: 17px;
	line-height: 17px;
	text-align: center;
	font-family: PingFangSC-Medium;
	border-bottom: 1px solid #ddd;
}
.vote{
	.title{
		font-family:PingFangSC-Medium;
		font-size:18px;
		color:#444;
		letter-spacing:0px;
		line-height:22px;
		text-align:left;
		margin-top: 30px;
		margin-bottom: 0;
		.help{
			font-size: 16px;
			line-height: 22px;
			vertical-align: baseline;
			// color: #999;
		}
	}
	.option{
		margin-top: 20px;
		margin-bottom: 0;
		&:last-child {
			padding-bottom: 30px;
			border-bottom: 1px solid #ddd;
		}
		label{
			font-family: PingFangSC-Regular;
			font-size: 15px;
			line-height: 18px;
			color: #333;
			letter-spacing: 0;
		}
	}
	.progress{
		margin-top: 5px;
		background-color: transparent;
		box-shadow: none;
		.progress-bar{
			min-width: 5%;
			border-radius: 10px;
			opacity: 0.69;
		}
		.percent{
			font-family:PingFangSC-Regular;
			font-size: 14px;
			line-height: 20px;
			margin-left: 10px;
		}

	}
}
</style>