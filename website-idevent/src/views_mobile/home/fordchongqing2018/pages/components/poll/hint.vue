<template>
<div>
	<div class="text-center vote-hint vote-not-active" v-if="status=='not_active'">
		<span class="fa fa-exclamation-circle text-secondary"></span>
		<h5>投票尚未开始</h5>
		<back></back>
	</div>

	<div class="text-center vote-hint vote-ok" v-if="status=='vote_success'">
		<span class="fa fa-check-circle text-primary"></span>
		<h5>投票成功</h5>
		<p>投票结果将会在结束后显示</p>

		<back></back>
	</div>
</div>
</template>
<script>
import back from "./back"
export default {
	props: {
		status: String
	},
	components: {
		back
	}
}
</script>
<style lang="less" scoped>
.vote-hint{
	margin-top: 60px;
	h5{
		font-family:PingFangSC-Medium;
		font-size:20px;
		color:#333;
		letter-spacing:0px;
		line-height:20px;
		text-align:center;
		margin: 15px auto;
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
	.btn{
		width: 60%;
	}
}	
</style>