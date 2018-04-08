<template>
	<i-step :current="currentIndex" :steps="steps.list"></i-step>
</template>
<script>
import iStep from 'iDotSteps'
export default {
    components: {
        iStep
    },
    computed: {
        steps() {
            console.log(this.$store.state.steps)
            console.log(this.$route.path)
            return this.$store.state.steps
        },
        currentIndex() {
            let idx = 0
            for (let st of this.steps.list) {
                if (st.path == this.$route.path) {
                    return idx
                }
                idx++
            }

            return 0
        }
    },
}
</script>
