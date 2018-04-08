<template>
<div>
	<div class="text-center vote-hint vote-ok">
		<span class="fa fa-check-circle text-primary"></span>
		<h5>感谢您的参与</h5>
	</div>

	<div class="vote" v-for="vote in list">
		<h3 class="title" :class="{'text-danger': vote.ok<0}">
			{{vote.title}}
		</h3>
		<template v-for="(option, index) in vote.options">
		<div class="answer" v-if="option.is_answer==1">
			正确答案：<template v-if="option.label">{{option.label}}</template><template v-else>{{index+1}}. </template>
			{{option.text}}
		</div>
		</template>
	</div>

	<back></back>
</div>	
</template>
<script>
import back from "./back"
export default {
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
	.answer{
		font-family:PingFangSC-Regular;
		font-size:15px;
		color:#00b459;
		letter-spacing:0px;
		text-align:left;
		line-height: 30px;
	}
}

.vote-hint{
	margin-top: 60px;
	border-bottom: 1px solid #ddd;
	h5{
		font-family:PingFangSC-Medium;
		font-size:20px;
		color:#333;
		letter-spacing:0px;
		line-height:20px;
		text-align:center;
		margin: 15px auto 30px;
	}
	p{
		font-size: 14px;
		color: #666;
		line-height: 20px;
		font-family: PingFangSC-Regular;
	}
	.fa{
		font-size: 80px;
	}
	
}
</style>