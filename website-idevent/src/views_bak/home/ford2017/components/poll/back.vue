<template>
	<a @click="goBack" class="btn btn-lg btn-primary btn-outline">返回现场互动</a>
</template>
<script>
export default {
	methods: {
		goBack() {
			this.$store.commit('POLL_GROUP')
		},
	}
}	
</script>
<style lang="less" scoped>
.btn{
	margin-bottom: 50px !important;
}
</style>