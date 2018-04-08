<template>
    <component v-if="currentView" v-bind:is="currentView"></component>
</template>
<script>

    export default {
        computed: {
            currentView() {
                try {
                    return require("./" + this.meeting.alias + "/index.vue")
                } catch (e) {
                    return require("./default/index.vue")
                }

            }
        },
    }
</script>
