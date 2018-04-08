<template>
<div>
	<div class="hotel-enter-panel" @click="setShareMode(1)">
		<h5>我要拼房</h5>
		<p>省钱经济，半价拼房</p>
	</div>
	<div class="hotel-enter-panel blue" @click="setShareMode(0)">
		<h5>我是土豪</h5>
		<p>钱多任性，全价购买</p>
	</div>
</div>
</template>
<script>
export default {
	methods: {
		setShareMode(mode) {
			this.$parent.isShare = !!mode
			this.$parent.step = 'entry'
		}
	}
}
</script>
<style>
</style>