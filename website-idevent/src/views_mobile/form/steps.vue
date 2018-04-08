<template>
	<i-step :current="currentIndex" :steps="steps"></i-step>
</template>
<script>
import iStep from 'iDotSteps'
export default {
    components: {
        iStep
    },
    props: {
        currentIndex: Number,
        formsList: Array,
    },
    computed: {
        steps() {
            let steps = [];
            for (let form of this.formsList) {
                steps.push({title: form.name})
            }
            return steps
        },
    },
}
</script>
