<template>

</template>
<script>
    export default {
        created() {
            if (this.user) {
                this.$router.push({name: "register_form"})
            }
        }
    }
</script>
