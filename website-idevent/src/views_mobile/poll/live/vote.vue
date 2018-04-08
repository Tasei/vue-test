<template>
<div v-if="detail">
	<h2>{{detail.title}}</h2>

	<div v-if="myVote">
		<div v-for="option in detail.options">
			<h5>{{option.text}} <span>({{option.vote_count}})</span> 
			<span class="label label-primary" v-if="option.id==myVote.poll_option_id">您的投票选择</span></h5>
			<div class="progress">
			  <div class="progress-bar progress-bar-striped active" role="progressbar"
			   :style="{width: option.percent+'%'}">
			  </div>
			</div>
		</div>
	</div>
	<div v-else>
		<div class="radio" v-for="option in detail.options">
			<label>
				<input type="radio" v-model="choice" :value="option.id">
				{{option.text}}
			</label>
		</div>
		<i-button class="btn btn-lg btn-primary" :loading="submitLoading" :disabled="!choice" :onOk="vote">提交</i-button>
	</div>
</div>
</template>
<script>
import {Toast} from "mint-ui"
import iButton from "iButton"
export default {
	components: {iButton},
	data() {
		return {
			detail: null,
			myVote: null,
			choice: null,
			submitLoading: false
		}
	},
	created(){
		this.getDetail()
	},
	methods: {
		vote() {
			let self = this

			this.submitLoading = true

			this.$http.post('interact/poll/vote', {
				option_id: self.choice
			})
			.then((response) => {
                if (response.body.err == 0) {
                	this.myVote = response.body.res
                	Toast("投票成功!")
                	// this.getDetail()
                }
            })
            .finally(() => {
            	self.submitLoading = false
            })
		},
		getDetail() {
			let self = this
			this.$http.post('interact/poll/getDetail')
			.then((response) => {
				let ret = response.body
                if (ret.err == 0) {
                	if (!self.detail || (self.detail.id != ret.res.id)) {
                		this.myVote = null
                		this.$store.commit('SPIN', true)
                	}
                	self.detail = ret.res
                	self.getMyVote()
                }
            })
            .finally(() => {
            	setTimeout(self.getDetail, 3000)
            })
		},
		getMyVote() {
			if (this.myVote || (this.myVote === false)) {
				return
			}

			let self = this
			this.$http.post('interact/poll/getMyVote', {
				poll_id: self.detail.id
			})
			.then((response) => {
                if (response.body.err == 0) {
                	self.myVote = response.body.res
                	if (!self.myVote) {
                		self.myVote = false
                	}
                }
            })
            .finally(() => {
            	self.$store.commit('SPIN', false)
            })
		},
	}
}	
</script>