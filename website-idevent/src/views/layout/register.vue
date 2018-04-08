<template>
    <div>
        <nav>
            <div class="container">
                <div class="logo"></div>
                <ul class="pull-left">
                    <li>
                        <a href="javascript:void(0);">邀请码：{{user.code}} {{user.contact.name}}
                        <i class="dropdown-icon" :class="{'rotate180': dropdown}" @click="toggleDropdown"></i></a>
                        <ul v-if="mainAccount" class="dropdown" :class="{'in': dropdown}">
                            <li v-for="item in mainAccount.children">
                                <a @click="switchAccount(item.code)">
                                    <span class="text-primary" v-if="item.code==user.code">*</span>
                                    {{item.code}} {{item.contact.name}}
                                </a>
                            </li>
                            <li>
                                <a @click="switchAccount(mainAccount.code)">
                                    <span class="text-primary" v-if="mainAccount.code==user.code">*</span>
                                    {{mainAccount.code}} {{mainAccount.contact.name}}
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul class="pull-right">
                    <li>
                        <a href="javascript:void(0);" @click="logout">退出登录</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    data() {
            return {
                dropdown: false,
                mainAccount: null,
            }
    },
    computed: {
        user() {
            return this.$store.state.user
        },
        meeting() {
            return this.$store.state.meeting
        }
    },

    created() {
        let self = this
        this.$http.post('meeting/getStepList', {
            meeting_id: this.meeting.id
        }).then(function(response) {
            let ret = response.body
            if (ret.err == 0) {
                self.$store.commit('STEPS', ret.res)
            }
        })

        if (self.user.parent) {
            this.$http.post('meeting/loginByCode', {
                'meeting_id': self.meeting.id,
                'code': self.user.parent.code,
            }).then(function(response) {
                let ret = response.body
                if (ret.err == 0) {
                    self.mainAccount = ret.res
                }
            })
        } else {
            this.mainAccount = this.user
        }
    },

    methods: {
        toggleDropdown() {
            this.dropdown = !this.dropdown
            event.stopPropagation()
            event.preventDefault()
        },
        logout() {
            this.$http.post('meeting/logout')
                .then(function(response) {
                    let ret = response.body
                    if (ret.err == 0) {
                        // this.$store.commit('USER', null)
                        // this.$router.push({
                        //         name: "register_login"
                        //     })
                        window.location.reload()
                    }
                })
        },
        switchAccount(code) {
            if (code == "" || code == this.user.code) {
                return
            }
            this.$http.post('meeting/changeAccount', {code: code})
                .then(function (response) {
                    let ret = response.body
                    if (ret.err == 0) {
                        this.$store.commit('USER', ret.res)
                        this.$router.push({
                            name: "register_login"
                        })
                        window.location.reload()
                    }
                })
        },
    },  
}
</script>
<style lang="less" scoped>
nav {
    height: 100px;
    border-bottom: 1px solid #eee;
    padding: 29px 0;
}

.container {
    width: 960px;
    margin: 0 auto;
    padding: 0;
    padding-bottom: 120px;
    .dropdown {
        display: none;
        background: #ffffff;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12), 0px 0px 6px 0px rgba(0, 0, 0, 0.04);
        border-radius: 0px 0px 2px 2px;
        padding: 0;
        &.in {
            display: block;
        }
        li {
            border-bottom: 1px solid #eeeeee;
            padding: 0 14px;
            &:last-child {
                border: none;
            }
            &:hover {
                background: #f9f9f9;
                cursor: pointer;
            }
            a {
                color: #666;
                display: inline-block;
                width: 100%;
            }
        }
    }
}

.logo {
    background: url("../../assets/images/logo_ford@2x.png") no-repeat center;
    height: 42px;
    width: 110px;
    background-size: 110px 42px;
    display: inline-block;
    float: left;
}

.container > ul > li {
    float: left;
    height: 42px;
    line-height: 42px;
    position: relative;
    > a {
        color: #666;
        display: inline-block;
        .dropdown-icon {
            height: 42px;
            float: right;
        }
    }
}

ul.dropdown{
    z-index: 9999;
}
</style>
