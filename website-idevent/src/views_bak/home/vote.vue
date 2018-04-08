<template>
    <component v-bind:is="currentView"></component>
</template>
<script>
    //import bgVote from "./bg2017/vote"
    export default{
        computed: {
            currentView(){
                if (this._IS_('bg2017')) {
                    return 'bgVote'
                }
            }
        },
        components:{
            //bgVote
        }
    }
</script>
