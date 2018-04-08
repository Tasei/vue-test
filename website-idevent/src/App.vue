<template>
    <div id="wrapper">
        <div id="page-wrapper">
            <router-view></router-view>
        </div>
	    <!-- set progressbar -->
	    <vue-progress-bar></vue-progress-bar>	        
    </div>
</template>
<script>
export default {
    mounted() {
        //  [App.vue specific] When App.vue is finish loading finish the progress bar
        this.$Progress.finish()
    },
    created() {
        //  [App.vue specific] When App.vue is first loaded start the progress bar
        this.$Progress.start()
        //  hook the progress bar to start before we move router-view
        this.$router.beforeEach((to, from, next) => {
            if (to.meta.progress !== undefined) {
                let meta = to.meta.progress
                // parse meta tags
                this.$Progress.parseMeta(meta)
            }
            //  start the progress bar
            this.$Progress.start()
            //  continue to next page
            next()
        })
        //  hook the progress bar to finish after we've finished moving router-view
        this.$router.afterEach((to, from) => {
    	    //  finish the progress bar
            this.$Progress.finish()
        })
    },
}
</script>
