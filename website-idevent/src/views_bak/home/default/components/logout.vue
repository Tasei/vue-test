<template>
    <i-button :on-ok="logout" v-if="user" class="btn btn-primary btn-outline btn-lg m-logout-btn">
        {{$t('login.logout')}}
    </i-button>
</template>
<script>
    import iButton from "iButton"
    export default {
        components:{
            iButton
        },
        methods: {
            logout(e) {
                let self = this
                this.$http.post('meeting/logout')
                    .then(function (response) {
                        let ret = response.body
                        if (ret.err == 0) {
                            self.$store.commit('USER', null)
                            this.$cookie.delete('WX_AUTH')

                            this.$router.push({name: "portal"})
                            return
                        }
                    })
                    .finally(function () {
                        e.loading = false
                    })
            },
        }
    }
</script>

