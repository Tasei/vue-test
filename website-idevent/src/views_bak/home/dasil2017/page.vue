<template>
    <component :is="currentView"></component>
</template>
<script>
    import userInfo from './pages/userInfo.vue'

    export default{
        components: {
            userInfo
        },
        computed: {
            currentView(){
                return this.$route.query.page
            }
        }
    }
</script>
