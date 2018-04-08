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

    const publicIndexes = [
        'oriflame-macau',
        'icesap2017',
        '100t2017',
        'pingan2017',
        'tbkhj',
        'dasil',
        'cbs6',
    ];
    const publicPages = [
        {
            alias: 'dasil',
            pages: ['userInfo'],
        }
    ]

    export default {
        created() {
            if (this.$route.query.mobile) {
                this.$store.commit('MOBILE', true);
            }
            let isPublic = false;
            for (let alias of publicIndexes) {
                if (this._IS_(alias)) {
                    isPublic = true;
                    break;
                }
            }
            for (let item of publicPages) {
                if (this._IS_(item.alias)) {
                    if (this.route.name === 'home_page' && item.pages.indexOf(this.route.query.page) > -1) {
                        isPublic = true;
                        break;
                    }

                }
            }

            if (!isPublic) {
                this.checkLogin()
            }
        },
        computed: {
            loading() {
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
