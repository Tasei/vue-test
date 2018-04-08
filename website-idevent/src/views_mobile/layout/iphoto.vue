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
        <bottom-bar :selected="selected"></bottom-bar>
    </div>
</div>
</template>
<script>
    import iSpinner from '../../../components/spinner'
    //import Wechat from '../../assets/js/wechat'
    import bottomBar from '../iphoto/components/bar'
    export default {
        created() {
            let imgUrl = ''
            try {
                imgUrl = this.meeting.settings.iphoto.homepage_banner
            } catch (err) {
                console.log(err)
            }

            /*
            new Wechat(
                this.meeting.name,
                this.meeting.desc,
                location.origin + '/iphoto?mid=' + this.meeting.id,
                imgUrl ? imgUrl: ''
            )*/
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
            },
            selected() {
                if(this.$route.name == 'iphoto_me') {
                    return 'me'
                } else if(this.$route.name == 'iphoto_schedule' || this.$route.name == 'iphoto_schedule_detail') {
                    return 'schedule'
                } else {
                    return 'home'
                }
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
            iSpinner,bottomBar
        }
    }
</script>
<style lang="less" scoped>
    .wrapper {
        padding-bottom: 64px;
    }
</style>
