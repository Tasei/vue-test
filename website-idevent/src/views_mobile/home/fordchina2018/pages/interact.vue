<template>
<div class="interact-wrapper">
	<template v-if="pollGroup">
		<poll-form></poll-form>
	</template>

	<template v-else>
	<h2 class="page-title text-primary">现场互动</h2>

	<div class="interact-banners">

		<div class="interact-banner"
			v-for="group in groups"
			:class="{pending: group.is_active==0, over: group.is_active==-1}"
			@click="gotoVote(group)">
			<div class="btn-wrapper">
				<button class="btn btn-outline btn-primary" v-if="group.is_active==0">未开始</button>

				<template v-if="group.is_active==-1">
					<button class="btn btn-outline" v-if="group.show_answers==1">查看答案</button>
					<button class="btn btn-outline" v-else>查看结果</button>
				</template>
			</div>
		</div>
        <!--<div class="interact-banner interact-draw " @click="gotoDraw()">-->
            <!--<div class="btn-wrapper">-->

            <!--</div>-->
        <!--</div>-->
		<!--<div class="interact-banner interact-draw " @click="goQuestionnaire()">-->
			<!--<div class="btn-wrapper">-->

			<!--</div>-->
		<!--</div>-->
	</div>
	</template>
</div>
</template>
<script>
import {MessageBox,Toast} from "mint-ui"
import PollForm from "./components/poll_form"
export default {
	components: {
		PollForm
	},
	data(){
		return {
			groups: [],
			loop: true,
		}
	},
	computed: {
		meeting() {
			return this.$store.state.meeting
		},
		pollGroup() {
			return this.$store.state.poll_group
		},
		user() {
			return this.$store.state.user
		}
	},
	created(){
	    console.log(this)
		this.getGroups()
	},
	destroyed(){
		this.loop = false
	},
	methods: {
	    goQuestionnaire() {
            this.$router.push({name: 'home_page',query:{page:'questionnaire'}})
        },
		gotoDraw(){
//            Toast('敬请期待')
            this.$router.push({name: 'home_page',query:{page:'luck'}})
		},
		gotoVote(group) {
			this.$store.commit('POLL_GROUP', group)
		},
		getGroups() {
			let self = this
			this.$http.post('interact/poll/getGroups', {
				meeting_id: self.meeting.id
			})
			.then((response) => {
				let ret = response.body
	            if (ret.err == 0) {
	            	self.groups = ret.res.list
	            	this.$store.commit('SPIN', false)
	            }
	        })
	        // .finally(()=> {
	        // 	if (self.loop) {
	        // 		setTimeout(self.getGroups, 3000)
	        // 	}
	        // })
		}
	}
}
</script>
<style lang="less" scoped>
.interact-wrapper{
	margin: 0 20px;
}
h2.page-title {
    margin: 0 auto 30px;
    padding: 30px 0;
    font-size: 17px;
    line-height: 17px;
    text-align: center;
    font-family: PingFangSC-Medium;
    border-bottom: 1px solid #ddd;
}
.interact-banner{
	position: relative;
	margin-bottom: 16px;
	width: 100%;
	border-radius: 2px;
	background-size: 100% 100%;

	.btn-wrapper{
		display: none;
		border: 2px solid #00549c;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		padding: 2px;
		.btn{
			border: 1px solid #00549c;
			border: 0.5px solid #00549c;
			font-family:PingFangSC-Regular;
			font-size:17px;
			padding: 6px;
			color:#00549c;
			letter-spacing:0px;
			line-height:17px;
			text-align:center;
		}
	}

	&:nth-child(1) {
        background-image: url("../images/00.jpg");
	}
	&:nth-child(2) {
        background-image: url("../images/01.jpg");
	}
	/*&:last-child {*/
        /*background-image: url("../images/02.jpg");*/
	/*}*/

	&:before{
		border-radius: 2px;
		content: "";
		display: block;
		padding-top: 42%;
		top: 0;
		left: 0;
		right: 0;
	}

	&.pending{
		&:before{
			background-color: #fff;
			opacity: 0.8;
		}
		.btn-wrapper{
			display: inline-block;
		}
	}
	&.over{
		&:before{
			background-color: #000;
			opacity: 0.6;
		}
		.btn-wrapper{
			display: inline-block;
			border: 2px solid #fff;
			.btn {
				border: 1px solid #fff;
				border: 0.5px solid #fff;
				font-family:PingFangSC-Medium;
				color:#fff;
			}
		}
	}
}
</style>
