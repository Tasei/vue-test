<template>
	<header class="text-center">
		<img :src="img" alt="">
	</header>
</template>

<script>
	
	export default {

		data() {
			return {
				img: require('../images/logo.png')
			}
		}
	}
</script>
<style lang="less" scoped>
	
	header {
		background: #333;
		padding: 20% 0;
		img {
			width: 30%;
		}
	}
</style>