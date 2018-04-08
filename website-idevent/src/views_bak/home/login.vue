<template>
    <component v-bind:is="currentView"></component>
</template>

<script>
    import codeLogin from './default/code_login.vue'
    import mobileLogin from './default/mobile_login.vue'

    export default{
        components: {
            codeLogin, mobileLogin
        },
        created() {
            //for mg fix
            if(this._IS_('mg2017_media') || this._IS_('mg2017_dealer')) {
                this.$router.push({
                    name: 'pc_login',
                    query: {
                        mid: this.meeting.id
                    }
                })
            }
        },
        computed: {
            currentView() {
                switch (this.meeting.settings.register.is_public) {
                    case "1":
                    case "3":
                        return "mobileLogin"
                    case "0":
                    default:
                        return "codeLogin"

                }
            }
        }
    }
</script>
