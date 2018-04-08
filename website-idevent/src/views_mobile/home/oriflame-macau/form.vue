<template>
    <i-fixed class="oriflame">
        <div class="header">
            <img src="./images/logo.gif" />
        </div>
        <div class="form-body">
            <div>
                <form method="post"
                      id="register-form"
                      action="/api/register/saveRegInfo"
                      @submit.prevent="fireSubmit">
                    <steps v-if="viewMode"></steps>
                    <steps v-if="!viewMode" :currentIndex="currentFormIndex" :formsList="formListFiltered"></steps>
                    <div class="form-tip"><span v-if="formTip">{{formTip}}</span></div>
                    <div class="main">
                        <table v-if="viewMode" class="table table-striped">
                            <tbody>
                            <template v-for="form in formList" v-if="form.id!=179">
                                <template v-for="el in form.value.elements">
                                    <tr v-if="isFilledItem(el)">
                                        <td width="30%">{{filterLabel(el.label)}}</td>
                                        <td class="font-bold" v-if="el.type=='paragraph' || el.type=='photo_uploader'" v-html="getItemText(el)"></td>
                                        <td class="font-bold" v-else v-text="getItemText(el)"></td>
                                    </tr>
                                </template>
                            </template>
                            </tbody>
                        </table>
                        <div v-if="!viewMode">
                            <v-form v-if="form"
                                    :showTitle="false"
                                    :elements="form.value.elements"
                                    :settings="form.value.settings"
                                    :form_id="form.id"
                                    :form_name="form.name"
                                    :group="!!user.group ? user.group.id : ''"
                            ></v-form>
                        </div>
                    </div>
                    <div class="register-btn">
                        <a v-if="viewMode && isEditable" href="javascript:void(0);"
                           class="btn btn-lg btn-default btn-outline"
                           @click="toggleViewMode(false)">{{$t('editInfo')}}</a>
                        <next-step v-if="viewMode"></next-step>
                        <button v-if="!viewMode"
                            class="btn btn-primary btn-lg padding-lg"
                            :disabled="submitDisabled"
                            type="submit">{{$t(isLastForm ? 'done' : 'nextStep')}}
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div class="form-footer">
            欧瑞莲化妆品(中国)有限公司版权所有©<br />
            <small>联系我们：<a href="mailto:registration@citssh.com.cn">registration@citssh.com.cn</a></small>
        </div>
    </i-fixed>
</template>
<script>
import iFixed from 'components/fixed'
import formUtils from "utils/form"
import steps from "./components/steps"
import nextStep from "../../register/components/nextStep"
import vForm from "components/form.vue"
import { Indicator, Toast } from 'mint-ui';
import marked from 'marked'
import bus from "../../../bus/registerForm"
export default {
    components: {
        iFixed, nextStep, steps, vForm
    },
    data() {
        return {
            formList: [],
            viewMode: false,
            hasRegInfo: false,
            formValid: false,
            formSubmitLoading: false,
            currentFormIndex: 0,
            formTip: ''
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
        submitDisabled(){
            return this.formSubmitLoading
        },
        form() {
            return this.formListFiltered[this.currentFormIndex]
        },
        formListFiltered() {
            return this.formList.filter(this.isFormVisible)
        },
        isLastForm() {
            return this.currentFormIndex === this.formListFiltered.length - 1
        }
    },
    watch: {
        formSubmitLoading() {
            if (this.formSubmitLoading) {
                Indicator.open()
            } else {
                Indicator.close()
            }
        },
        '$route' (to, from) {
            // 对路由变化作出响应...
            this.getForms()
        }
    },
    created() {
        this.$on("cancelEdit", function() {
            this.toggleViewMode(true)
        })

        this.$on("submitSuccess", function(){
            Toast('信息已提交，注册成功！');
            this.getForms()
            this.currentFormIndex = 0;

        })

        this.$on("submitFailed", function(res){
            Toast(res.msg)
        })

        this.getForms()


        let self = this
        bus.$on('errors-changed', function (errors) {
            self.errors.clear();
            if (errors) {
                errors.forEach(function (e) {
                    self.errors.add(e.field, e.msg, e.rule, e.scope);
                })
            }
        });
    },
    methods: {
        filterLabel(label){
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
            }).then(function(response) {
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
            //translate options to text
            if (el.options) {
                let values = [].concat(el.value)
                let texts = []
                for (let option of el.options) {
                    if (values.indexOf(option.value) > -1) {
                        texts = texts.concat(option.text)
                    }
                }
                return texts.join(",")
            }
            if (el.type == 'paragraph') {
                return marked(el.text, {sanitize: true})
            }
            if (el.type == 'photo_uploader') {
                return '<img src="'+el.attachment.url+'" />';
            }
            return el.value
        },


        isFormVisible(form) {
            if (form.value.settings.hidden) {
                return false
            }

            let open = (form.value.settings.applyToAll == '1')
            if (open) {
                return true
            }

            let idx = form.value.settings.applyToGroups.indexOf(this.user.group)

            return idx > -1
        },

        validateChild() {
            bus.$emit('validate');
        },
        clearChild() {
            bus.$emit('clear');
        },
        isVisible(form) {
            let visible = true
            // console.log(form)
            if (this.bindingArray.indexOf(form.id) > -1) {
                visible = (this.bindingActiveArray.indexOf(form.id) > -1)
            }

            let closed = this.$store.state.steps.reg_close
            if (form.value.settings.openAfterRegClose) {
                closed = false
            }

            if (closed) {
                visible = false
            }

            return visible
        },
        fireSubmit(event){
            let self = this
            self.formTip = '';
            this.validateChild()
            setTimeout(function () {
                if (self.errors && self.errors.any()) {
                    self.formTip = self.$t("form.invalid");
                    return
                }
                self.submit(event)
            }, 500)
        },
        submit(event){
            this.formSubmitLoading = true
            let handleError = (function (err) {
                this.formSubmitLoading = false
                this.$parent.$emit('submitFormError', this, err);
            }).bind(this);

            let handleFinish = (function (response) {
                this.formSubmitLoading = false
                if (response.ok) {

                    if (!this.isLastForm) {
                        this.currentFormIndex++
                    } else {
                        this.$emit('submitSuccess', this, response.body);
                    }
                } else {
                    this.$emit('submitFailed', this, response.statusText);
                }
            }).bind(this);

            let data = new FormData(event.target);
            this.$http.post(event.target.action, data).then(handleFinish, handleError);
        },

        cancelEdit() {
            this.$emit("cancelEdit")
        }

    },
}
</script>
<style lang="less">
    @import "./style/oriflame.less";
</style>
<style lang="less" >
    @import "../../../assets/style/home/index.less";
    .header {
        background-color: #fff;
        padding: 30px;
        text-align: center;
        border-bottom: 2px solid #e3e3e3;
    }
    .form-body {
        background-color: #f1f1f1;
        padding: 40px 10%;
        .form-tip {
            height: 40px;
            text-align:center;
            span {
                color: #f00000;
                line-height: 18px;
                &::before {
                     display: inline-block;
                     content: '!';
                     color: #fff;
                     background-color: #f00000;
                     border-radius: 50%;
                     width: 18px;
                     height: 18px;
                     line-height: 18px;
                     margin-right: 6px;
                 }
            }

        }
        .main {
            background-color: #fff;
            padding: 40px 10%;
        }
    }
    .register-btn {
        margin: 20px 0 60px 0;
    }
</style>
