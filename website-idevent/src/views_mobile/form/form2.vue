<template>
    <div class="col-sm-12">
        <div v-if="viewMode">
            <middleware v-if="isMiddleware"></middleware>
            <div v-else>
                <steps></steps>
                <div v-if="_IS_('cherychina2018')"
                     style="text-align: center;">
                    <span>
                        （请各位记得去【酒店介绍】模块完成酒店预订。）
                        </span>
                </div>
                <div>
                    <table class="table table-striped">
                        <tbody>
                        <template v-for="form in formList">
                            <template v-for="el in form.value.elements" v-if="!form.value.settings.hidden">
                                <tr v-if="isFilledItem(el)">
                                    <td width="30%">{{filterLabel(el.label)}}</td>
                                    <td class="font-bold" v-html="getItemText(el)"></td>
                                </tr>
                            </template>
                        </template>
                        </tbody>
                    </table>
                </div>
                <div v-if="successShowQrcode" style="text-align: center;width: 100%;margin-top: 25px">
                    <h5 class="hotel-products-nav-title" style="text-align: left;margin-top: 10px">注册状态</h5>
                    <p style="margin-top: 15px">
                        注册成功
                    </p>
                    <p>
                        请截屏保存二维码，活动期间扫码入场
                    </p>
                    <div class="my-qrcode-image-wrapper">
                        <img class="my-qrcode-image" src="/api/meeting/showQrcode" style="width: 60%">
                    </div>
                </div>

                <div class="register-btn">
                    <a href="javascript:void(0);"
                       class="btn btn-lg btn-default btn-outline"
                       v-if="isEditable"
                       @click="toggleViewMode(false)" v-show="show_register_edit != 'false'">{{$t('editInfo')}}</a>
                    <next-step></next-step>

                </div>

            </div>
        </div>
        <div v-else>
            <the-form :form-list="formList" :cancel-btn="hasRegInfo"></the-form>
        </div>
    </div>
</template>
<script>
    import formUtils from "utils/form"
    import steps from "../register/components/steps"
    import nextStep from "../register/components/nextStep"
    import theForm from "./_form"
    import {Indicator, Toast} from 'mint-ui';
    import middleware from './middleware'

    export default {
        components: {nextStep, steps, theForm, middleware},
        data() {
            return {
                show_register_edit:'',
                formList: [],
                viewMode: false,
                hasRegInfo: false,
            }
        },

        computed: {
            child_id() {
                return this.$route.params.child_id
            },
            isOver() {
                return this.$store.state.steps.is_over
            },
            isEditable() {
                for (let form of this.formList) {
                    if (form.value.settings.openAfterRegClose) {
                        return true
                    }
                }
                return !this.$store.state.steps.reg_close
            },
            isMiddleware() {
                let list = ['yumchina2017', 'yumFoundersDay']
                return list.indexOf(this.meeting.alias) > -1
            },
            successShowQrcode() {
                let show_qrcode = 0;
                if (this.meeting.settings.register) {
                    show_qrcode = this.meeting.settings.register.success_show_qrcode
                }
                if (show_qrcode == 1) {
                    return true;
                }

                return false

            }

        },
        watch: {
            '$route'(to, from) {
                // 对路由变化作出响应...
                this.getForms()
            }
        },

        created() {
            this.show_register_edit = this.meeting.websettings.show_register_edit;
            let preGroupId = this.meeting.settings.modules.user_group_pre
            if (this.user.group.is_default == 1 && preGroupId == 1) {
                this.$router.push({name: 'register_usergroup'})
                return
            }

            this.$on("cancelEdit", function () {
                this.toggleViewMode(true)
            })

            this.$on("submitSuccess", function () {
                this.getForms()
            })

            this.$on("submitFailed", function (res) {
                Toast(res.msg)
            })

            this.getForms()
        },
        methods: {
            filterLabel(label) {
                return label.startsWith('#') ? '' : label
            },
            isFilledItem(el) {
                if (!formUtils.isValueItem(el.type)) {
                    return false
                }
                if (el.type == 'paragraph' && !el.display) {
                    return false
                }

                switch (typeof el.value) {
                    case 'string':
                        return el.value != ""
                        break
                    case 'array':
                        return el.length > 0
                        break
                    default:
                        break
                }

                return true
            },

            getForms() {
                let self = this
                this.$http.post('register/getRegInfo', {
                    child_id: self.child_id
                }).then(function (response) {
                    let ret = response.body

                    if (ret.err == 0) {
                        this.formList = ret.res.formList
                        this.viewMode = ret.res.hasRegInfo
                        this.hasRegInfo = ret.res.hasRegInfo
                    } else {
                        Toast(ret.msg);
                    }
                }).finally(() => {
                    this.$store.commit('SPIN', false)
                })
            },
            toggleViewMode(is) {
                this.viewMode = is
            },
            getItemText(el) {
                return formUtils.getItemText(el)
            },

        },
    }
</script>
