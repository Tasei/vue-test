<template>
	<footer class="text-center">
		<img :src="img" alt="">
		<a href="mailto:apacrevent@gmail.com">Contact The Organizer</a>
	</footer>
</template>

<script>
	export default {
		data() {
			return {
				img: require('../images/footer.png')
			}
		}
	}
</script>
<style lang="less" scoped>
	
	footer {
		position: relative;
		background: #333;
		padding: 15% 0;
		img {
			width: 45%;
		}
		a {
		    position: absolute;
    		right: 20px;
    		bottom: 10px;
    		color: #eee;
    		font-size: 12px;
    		text-decoration: underline;
		}
	}
</style>