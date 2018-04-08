<template>

    <div class="login-box" :class="{'login-box-pc': !isMobile}" :style="styleObj">
        <div class="bg" v-if="isMobile && login_bg" :style="{backgroundImage: 'url('+ login_bg + ')' }"></div>
        <div class="holder"></div>

        <div class="m-login-page">
            <div class="m-login-form">
                <select class="form-control" v-model="group_id" >
                    <option value="0">* 请选择身份类型</option>
                    <option v-for="g in groups" :value="g.id" v-if="g.is_default==0">{{g.name}}</option>
                </select>
                <i-button type="button" :on-ok="btnSave" class="btn btn-primary btn-lg m-login-btn">
                    提交
                </i-button>
            </div>
        </div>
    </div>


</template>

<style lang="less" scoped rel="stylesheet/less">
    @import "../../assets/style/login.less";
</style>

<script>
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import {Toast, Indicator} from 'mint-ui'
    import iButton from 'iButton'
    export default {
        components: {
            iButton
        },
        data() {
            return {
                styleObj: {
                    height: window.innerHeight + 'px',
                    position: 'relative'
                },
                groups: [],
                group_id: 0,
            }
        },
        computed: {
            login_bg() {
                try {
                    return this.meeting.settings.register.login_background
                } catch(e) {}

                return ''
            },

            login_bg_pc() {
                try {
                    return this.meeting.settings.register.login_background_pc
                } catch(e) {}

                return ''
            }
        },
        mounted() {
            this.$store.commit('SPIN')
        },
        created() {
            this.getGroupList();
        },
        methods: {
            /**
             * 获取用户组列表
             */
            getGroupList() {
                let self = this
                this.$http.post('invitation/group/list', {
                    meeting_id: this.meeting.id
                }).then((response) => {
                    if (response.body.err == 0) {
                        self.groups = response.body.res.list
                    } else {
                        Toast(ret.msg);
                    }
                })
            },

            //保存
            btnSave(e) {
                if (this.group_id == 0) {
                    Toast('请选择一个选项')
                    e.loading = false
                    return false
                }

                Indicator.open()

                this.$http.post('invitation/code/updateGroup', {
                    id: this.user.id,
                    group_id: this.group_id
                }).then((response) => {
                    if (response.body.err == 0) {
                        if (response.body.res.group.is_default == 0) {
                            this.$router.push({name: 'register_form'})
                        }
                    } else {
                        Indicator.close()
                        Toast(response.body.msg)
                    }
                }).finally(() => {
                    Indicator.close()
                    e.loading = false
                    this.$store.commit('SPIN', false)
                })
                event.preventDefault()
                return false
            },

        }
    }
</script>
