<template>
<div>
    <common-trader v-if="trader"></common-trader>
    <common-staff v-if="!trader"></common-staff>
</div>
</template>
<script>
import CommonStaff from "./components/common_staff"
import CommonTrader from "./components/common_trader"
export default{
    components: {
        CommonStaff, CommonTrader
    },
    mounted() {
        this.$store.commit('SPIN', false)
    },
    computed: {
        user(){
            return this.$store.state.user
        },
        trader(){
            return ['18','33','38'].indexOf(this.user.group_id) > -1
        }
    },
}    
</script>
