<template>
    <component :is="currentView"></component>
</template>
<script>
    export default {
        computed: {
            currentView() {
                return require("./" + this.meeting.alias + "/pages/" + this.$route.query.page + ".vue")
            }
        }
    }
</script>
