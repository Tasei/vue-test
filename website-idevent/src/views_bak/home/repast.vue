<template>
    <div>
        <!--<geely-repast v-if="meeting.alias=='geely2017'"></geely-repast>-->
    </div>
</template>
<script>
//import geelyRepast from "./geely2017/repast"
export default{
	components: {
		//geelyRepast
	},
    computed: {
        meeting() {
            return this.$store.state.meeting
        }
    }
}
</script>
