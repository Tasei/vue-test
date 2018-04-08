<template>
<div>
	<!-- <p>oculus index</p> -->
	<!-- <router-link :to="{ name: 'register_activity' }">register</router-link> -->
</div>
</template>

<script>
	
	export default {
		data() {
			return {
				msg: ''
			}
		},
		created(){
			this.$store.commit('LANG', 'en');
            this.$router.push({ name: 'register_activity' })
        },
	}
</script>

<style lang="less" scoped>
	
</style>