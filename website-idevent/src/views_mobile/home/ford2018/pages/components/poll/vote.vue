<template>
	<div>
		<div>
			<h2 class="page-title text-primary">{{group.title}}</h2>
		</div>
		<div class="vote" v-for="vote in list">
			<h3 class="title" :class="{'text-danger': vote.ok<0}">
				{{vote.title}}
			</h3>
			<template v-if="vote.is_multi==0">
			<div class="option radio" v-for="(option, index) in vote.options">
				<label>
					<input @change="checkResult(vote)" type="radio" v-model="vote.result" :value="option.id">
					<template v-if="option.label">{{option.label}}</template><template v-else>{{index+1}}. </template>
					{{option.text}}
				</label>
			</div>
			</template>
			<template v-else>
			<div class="option checkbox" v-for="(option, index) in vote.options">
				<label>
					<input @change="checkResult(vote)" type="checkbox" v-model="vote.result" :value="option.id">
					<template v-if="option.label">{{option.label}}</template><template v-else>{{index+1}}. </template>
					{{option.text}}
				</label>
			</div>
			</template>
		</div>
		<i-button class="btn btn-lg btn-primary"
			:onOk="submit">提交</i-button>
	</div>	
</template>
<script>
import iButton from "iButton"
import {Toast} from "mint-ui"

export default{
	components:{
		iButton,
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
		voteResult() {
			let result = []
			for (let vote of this.list) {
				result = result.concat(vote.result)
			}
			return result
		},
	},
	created(){
		this.$store.commit('SPIN', true)
		this.getPolls()
	},
	methods: {
		checkResult(vote) {
			console.log('check!',this.voteResult)
			let result = true

			let votes = [];
			if (!!vote) {
				votes = [vote]
			} else {
				votes = this.list
			}

			for (let vote of votes) {
				if (vote.is_multi == 1) {
					if (vote.result.length > vote.max_choice) {
						vote.ok = -1
						result = false
					} else if (vote.result.length < vote.min_choice) {
						vote.ok = -1
						result = false
					} else {
						vote.ok = 1
					}
				} else {
					if (vote.result == 0) {
						vote.ok = -1
						result = false
					} else {
						vote.ok = 1
					}
				}
			}
			return result
		},
		setVoteOK() {
			this.$parent.voteOK = true
        	this.$cookie.set("FORD_VOTE_OK_"+this.user.id+"_"+this.group.id, true, { expires: '3D' })
        	this.$cookie.set("FORD_VOTED_"+this.user.id, true, { expires: '3D' })
		},
		submit(e) {
			if (!this.checkResult()) {
				Toast("请修正您的投票选择")
				e.loading = false
				this.focusError()
				return false
			}

			let self = this
			this.$http.post('interact/poll/batchVote', {
				option_ids: self.voteResult
			})
			.then((response) => {
				let ret = response.body
                if (ret.err == 0) {
                	self.setVoteOK()
                }
            })
            // .finally(function(){
            // 	//FAKE SUCCESS!!
            // 	//TODO DELETE ME
            // 	e.loading = false
            // 	self.setVoteOK()
            // })
		},
		getPolls() {
			let self = this
			this.$http.post('interact/poll/getGroupPolls', {
				meeting_id: self.meeting.id,
				group_id: self.group.id
			})
			.then((response) => {
				let ret = response.body
                if (ret.err == 0) {
                	
                	for (let vote of ret.res.list) {
                		if (vote.is_multi==1) {
                			vote.result = []
                		} else {
                			vote.result = 0
                		}
                		vote.ok = 0
                	}

                	self.list = ret.res.list

                	this.$store.commit('SPIN', false)
                }
            })
		},
		focusError() {
			setTimeout(function(){
				window.scrollTo(0, $("h3.text-danger")[0].offsetTop)
			}, 500)
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
	.help-block{
		font-size: 14px;
	}
}
.btn.btn-lg {
	margin-top: 30px;
	margin-bottom: 60px;
}
</style>