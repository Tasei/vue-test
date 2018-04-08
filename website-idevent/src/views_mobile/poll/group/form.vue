<template>
<div v-if="group">
	<div class="col-sm-12 col-lg-12">
		<h2 class="page-title text-primary">{{group.title}}</h2>
	</div>

	<template v-if="!started">
	<div class="col-sm-12 col-lg-12 text-center">
		<span class="fa fa-exclamation-circle fa-5 text-secondary"></span>
		<p style="margin-top: 20px;">没有进行中的投票</p>

		<router-link :to="{name:'poll_group_index'}" class="btn btn-lg btn-primary">返回</router-link>
	</div>
	</template>

	<template v-else>
	<div class="col-sm-12 col-lg-12 text-center" v-if="voteOK">
		<span class="fa fa-check-circle fa-5 text-primary"></span>
		<p style="margin-top: 20px;">您已经成功投票</p>

		<router-link :to="{name:'poll_group_index'}" class="btn btn-lg btn-primary">返回</router-link>
	</div>
	<div class="col-sm-12 col-lg-12" v-else>
		<div class="vote" v-for="(vote, index) in list">
			<h3 class="title" :class="{'text-danger': vote.ok<0}">
				{{index+1}}. {{vote.title}}
				<span class="help text-primary"><template v-if="vote.is_multi==0">[单选]</template><template v-else>[多选]</template></span>
			</h3>
			<template v-if="vote.is_multi==0">
			<div class="option radio" v-for="option in vote.options">
				<label>
					<input @change="checkResult(vote)" type="radio" v-model="vote.result" :value="option.id">
					{{option.text}}
				</label>
			</div>
			</template>
			<template v-else>
			<p class="help-block">最少{{vote.min_choice}}项, 最多{{vote.max_choice}}项</p>
			<div class="option checkbox" v-for="option in vote.options">
				<label>
					<input @change="checkResult(vote)" type="checkbox" v-model="vote.result" :value="option.id">
					{{option.text}}
				</label>
			</div>
			</template>
		</div>
		<i-button class="btn btn-lg btn-primary"
			:onOk="submit">提交</i-button>
	</div>
	</template>
</div>
</template>
<script>
import iButton from "iButton"
import {Toast} from "mint-ui"
export default {
	components: {
		iButton, Toast,
	},
	data() {
		return {
			list: [],
			voteOK: false,
			started: false,
			group: null,
		}
	},
	created() {
		this.$store.commit('IGNORE_NETWORK_ERR')
		this.judge()
	},
	destoryed() {
		this.$store.commit('IGNORE_NETWORK_ERR', false)
	},
	computed: {
		meeting() {
			return this.$store.state.meeting
		},
		group_id() {
			return this.$route.query.group_id
		},
		user(){
			return this.$store.state.user
		},
		voteResult() {
			let result = []
			for (let vote of this.list) {
				result = result.concat(vote.result)
			}
			return result
		}
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
			this.voteOK = true
        	this.$cookie.set("VOTE_OK_"+this.user.id+"_"+this.group_id, true)
		},
		judge() {
			this.voteOK = this.$cookie.get("VOTE_OK_"+this.user.id+"_"+this.group_id)
			this.getGroup()
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
            .finally(function(){
            	//FAKE SUCCESS!!
            	//TODO DELETE ME
            	e.loading = false
            	self.setVoteOK()
            })
		},
		getGroup(){
			let self = this

			this.$http.post('interact/poll/getGroup', {
				group_id: self.group_id				
			})
			.then((response)=>{
				let ret = response.body
                if (ret.err == 0) {
                	self.group = ret.res
                	this.started = (self.group.is_active == 1)

                	if (!this.started) {
                		this.$store.commit('SPIN', false)
                		return
                	}
                	this.getPolls()
                }
			})
		},
		getPolls() {
			let self = this
			this.$http.post('interact/poll/getGroupPolls', {
				meeting_id: self.meeting.id,
				group_id: self.group_id
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
.fa-5{
	font-size: 5em;
}
</style>