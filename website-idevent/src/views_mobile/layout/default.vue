<template>
<div class="container">
    <div class="row">
        <i-spinner fix v-show="loading"></i-spinner>
        <transition name="custom-animation"
                    enter-active-class="animated fadeIn"
                    leave-active-class="animated fadeOut">
            <div class="wrapper" v-show="!loading">
                <router-view></router-view>
            </div>
        </transition>
    </div>
</div>
</template>
<script>

    import iSpinner from '../../../components/spinner'
    export default {
        created() {
            this.checkLogin()
        },
        computed: {
            loading () {
                return this.$store.state.spin
            },
            meeting() {
                return this.$store.state.meeting
            },
            user() {
                return this.$store.state.user
            }
        },

        methods: {
            checkLogin() {
                if (!this.user) {
                    this.$cookie.set('__redirect', this.$route.fullPath)
                    this.$router.push({
                        name: 'portal',
                        query: {
                            mid: this.meeting.id
                        }
                    })
                }
            },
        },
        components: {
            iSpinner
        }
    }
</script>
