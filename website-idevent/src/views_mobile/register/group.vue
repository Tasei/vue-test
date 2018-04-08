<template>
    <div class="group">
        <mt-picker :slots="slots" value-key="name" :visible-item-count="3" @change="onValuesChange"></mt-picker>
        <i-button :on-ok="updateGroup" class="btn btn-primary btn-lg btn-block">确认</i-button>
    </div>
</template>
<script>
    import iButton from 'iButton'
    import { Toast, Indicator } from 'mint-ui'
    export default{
        components: {
            iButton
        },
        data() {
            return {
                group_id: 0,
                slots: [{
                    flex: 1,
                    values: []
                }]
            }
        },
        mounted() {
            this.getGroupList()
        },
        computed: {
            meeting () {
                return this.$store.state.meeting
            },

            user () {
                return this.$store.state.user
            }
        },
        methods: {
            onValuesChange(picker, values) {
                this.group_id = values[0].id
            },
            getGroupList() {
                let self = this
                this.$http.post('invitation/group/list', {
                    meeting_id: this.meeting.id
                }).then((response) => {
                    if (response.body.err == 0) {
                        self.slots[0].values = response.body.res.list
                    }
                }).then(() => {
                    this.$store.commit('SPIN')
                })
            },

            //更新用户组
            updateGroup(e) {
                if (!this.group_id) {
                    Toast('请选择用户组')
                    e.loading = false
                    return
                }

                this.$http.post('invitation/code/updateGroup', {
                    id: this.user.id,
                    group_id: this.group_id
                }).then((response) => {
                    if (response.body.err == 0) {
                        //TODO
                    } else {
                        Toast(response.body.msg)
                    }
                }).then(() => {
                    e.loading = false
                })
            }
        }
    }
</script>
<style lang="less" scoped>
    .group {
        padding: 40px 20px;
    }
</style>
