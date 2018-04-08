<template>
<div>
    <h2 class="page-title text-primary">现场投票</h2>

    <ul class="vote-group-list">
    	<li v-for="group in groups" @click="gotoVote(group)">
    		{{group.title}} 
    		<button class="btn btn-xs btn-outline" v-if="group.is_active==0">未开始</button>
			<i class="fa fa-angle-right" aria-hidden="true"></i>
    	</li>
    </ul>
</div>    
</template>
<style lang="less" scoped>
h2.page-title {
    margin: 0 auto;
    padding: 30px 0;
    font-size: 17px;
    line-height: 17px;
    text-align: center;
    font-family: PingFangSC-Medium;
}
ul.vote-group-list{
	margin-left: 0;
	padding-left: 20px;
	
	li{
		font-family:PingFangSC-Regular;
		font-size:15px;
		letter-spacing:0px;
		line-height:15px;
		text-align:left;
		padding: 15px 0;
		border-top: 1px solid #ddd;
		&:last-child{
			border-bottom: 1px solid #ddd;
		}

		a{
			display: block;
			color:#333;
		}

		// .btn{
		// 	font-size: 10px;
		// 	padding: 1px;
		// 	line-height: 12px;
		// }

		.fa{
			float:right;
			margin-right: 15px;
			color:#ccc;
			font-size: 26px;
			margin-top: -6px;
		}

		.btn-xs{
			padding: 1px 2px;
			font-size: 12px;
			line-height: 12px;
			margin-top: -3px;
			color: #999 !important;
			border: 1px solid #999;
			background: transparent;
		}
	}
}
</style>
<script>
import {Toast} from "mint-ui"
export default {
	data() {
		return {
			groups: []
		}
	},
	computed: {
		meeting() {
			return this.$store.state.meeting
		},
	},
    created() {
    	this.getList()
    },
    methods: {
    	gotoVote(group) {	
    		// if (group.is_active == 0) {
    		// 	Toast("投票尚未开始")
    		// 	return
    		// }
			this.$router.push({name:'poll_group_form',query:{group_id:group.id}})
    	},
    	getList(){
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
    	}
    }
}
</script>
