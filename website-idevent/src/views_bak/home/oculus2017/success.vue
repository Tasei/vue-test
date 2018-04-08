<template>
	<section class="final">
		<i-header></i-header>
		<section class="content">
			<h1 class="text-center">Thank You for Your Confirmation</h1>
			<section class="text-center">
				<p>if you need One-Way Transfer, our Committee Team will contact you shortly for the transfer arrangement.</p> 
				<p>We look forward to seeing you.</p>
			</section>
		</section>
	</section>
</template>

<script>

	import iHeader from './components/header';

	export default {
		data() {
			return {

			}
		},
		components: {
			iHeader
		}
	}
</script>

<style lang="less" scoped>
	.final {
		max-width: 640px;
		width: 100%;
		margin: 0 auto;
	}
	.content {
		padding: 0 30px;
		margin: 50px 0;
		h1 {
			font-size: 20px;
			color: #333;
			margin-bottom: 20px;
		}
	}
</style>