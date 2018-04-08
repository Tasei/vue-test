<template>
    <div>
        <h3 class="text">现场提问</h3>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
        },

        mounted () {
            this.$store.commit('SPIN', false)
        }
    }
</script>
