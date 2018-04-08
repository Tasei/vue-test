<template>
    <component v-bind:is="currentView"></component>
</template>

<script>
    import codeLogin from './default/components/code_login.vue'
    import mobileLogin from './default/components/mobile_login.vue'

    export default {
        computed: {
            currentView() {
                try {
                    return require("./" + this.meeting.alias + "/login.vue")
                } catch (e) {
                    console.log('fallback to default login')
                    //no override
                }

                let isPublic = 0;
                if (this.meeting.settings.register) {
                    isPublic = this.meeting.settings.register.is_public;
                }
                switch (isPublic) {
                    case "1":
                    case "3":
                    case "4":
                        return mobileLogin
                    case "0":
                    default:
                        return codeLogin

                }
            }
        }
    }
</script>
