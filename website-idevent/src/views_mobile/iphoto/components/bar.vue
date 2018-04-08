<template>
    <div class="iphoto-bar">
        <mt-tabbar fixed v-model="current">
            <mt-tab-item id="home">
                <span slot="icon" :class="homeCls"></span>
                首页
            </mt-tab-item>
            <mt-tab-item id="schedule">
                <span slot="icon" :class="scheduleCls"></span>
                行程相册
            </mt-tab-item>
            <mt-tab-item id="me">
                <span slot="icon" :class="meCls"></span>
                <div>
                我的相册
                </div>
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
    import cx from 'classnames'
    export default{
        props: {
            selected: {
                type: String,
                default: 'home'
            }
        },
        created() {
            this.current = this.selected
        },
        data() {
            return {
                current: 'home'
            }
        },
        watch: {
            current() {
                if(this.current == this.selected) {
                    return
                }
                this.$router.push({
                    name: 'iphoto_' + this.current
                })
            },
            selected() {
                this.current = this.selected
            }
        },
        computed: {
            isHome() {
                return this.selected == 'home' || this.current == 'home'
            },
            isSchedule() {
                return this.selected == 'schedule' || this.current == 'schedule'
            },
            isMe() {
                return this.selected == 'me' || this.current == 'me'
            },
            homeCls() {
                return cx({
                    ['iuifont']: true,
                    ['iui-icon-home']: !this.isHome,
                    ['iui-icon-home-s']: this.isHome,
                })
            },
            scheduleCls() {
                return cx({
                    ['iuifont']: true,
                    ['iui-icon-pic']: !this.isSchedule,
                    ['iui-icon-pic-s']: this.isSchedule,
                })
            },

            meCls() {
                return cx({
                    ['iuifont']: true,
                    ['iui-icon-user']: !this.isMe,
                    ['iui-icon-user-s']: this.isMe,
                })
            }
        },
        methods: {
            goUrl(name) {
                this.$router.push({
                    name: name,
                    query: {
                        mid: this.meeting.id
                    }
                })
            }
        }
    }
</script>
