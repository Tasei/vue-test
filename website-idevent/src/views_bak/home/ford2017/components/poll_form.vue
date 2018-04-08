<template>
<div v-if="pollGroup">
	<poll-hint v-if="status=='not_active'" :status="status"></poll-hint>
	<template v-if="status=='vote_success'">
		<poll-answers v-if="pollGroup.display_answers==1"></poll-answers>
		<poll-hint v-else :status="status"></poll-hint>
	</template>
	<poll-vote v-if="status==''"></poll-vote>
	<poll-result v-if="status=='poll_over'"></poll-result>
</div>
</template>
<script>
import PollHint from "./poll/hint"
import PollVote from "./poll/vote"
import PollResult from "./poll/result"
import PollAnswers from "./poll/answers"

export default {
	components: {
		PollHint, PollVote, PollResult, PollAnswers,
	},	
	data(){
		return {
			voteOK: false
		}
	},
	created() {
		
	},
	destroyed() {
		this.$store.commit('POLL_GROUP', null)
	},
	computed: {
		pollGroup() {
			return this.$store.state.poll_group
		},
		user() {
			return this.$store.state.user
		},
		status() {
			if (this.voteOK) {
				return "vote_success"
			}
			
			if (this.pollGroup.is_active == 0) {
				return 'not_active'
			}
			if (this.pollGroup.is_active == -1) {
				return 'poll_over'
			}
			if (this.pollGroup.is_active == 1) {
				let voteOK = this.$cookie.get("FORD_VOTE_OK_"+this.user.id+"_"+this.pollGroup.id)
				if (voteOK) {
					return 'vote_success'
				}
			}
			
			return ''
		}
	},
}	
</script>
<style lang="less" scoped>
</style>