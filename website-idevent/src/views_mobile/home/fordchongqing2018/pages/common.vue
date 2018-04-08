<template>
    <div>
        <common-trader></common-trader>
    </div>
</template>
<script>
    import CommonTrader from "./components/common_trader"

    export default {
        components: {
            CommonTrader
        },
        mounted() {
            this.$store.commit('SPIN', false)
        },
    }
</script>
