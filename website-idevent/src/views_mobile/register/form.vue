<template>
<div class="col-sm-12">
	<steps></steps>

	<div v-if="viewMode">
        <div>
            <table class="table table-striped">
                <tbody>
                <template v-for="form in formList">
                    <template v-if="!form.value.settings.hidden" v-for="el in form.value.elements">
                        <tr v-if="isFilledItem(el)">
                            <td width="30%">{{filterLabel(el.label)}}</td>
                            <td class="font-bold" v-if="el.type=='paragraph'" v-html="getItemText(el)"></td>
                            <td class="font-bold" v-else v-text="getItemText(el)"></td>
                        </tr>
                    </template>
                </template>
                </tbody>
            </table>
        </div>

        <!--
        <div v-if="_IS_('aia2017')"
            style="margin-top:20px;padding: 15px 20px; text-align: center;border:1px solid #380a53;">
            <a href="http://pro.wenjuan.com/t/nyyE" style="font-size: 16px;" class="text-primary">
                同时请完成此次友邦领导力峰会调研问卷<br>点击此处参加调研
            </a>
        </div>
        -->

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
                @click="toggleViewMode(false)">{{$t('editInfo')}}</a>
            <next-step v-else></next-step>
        </div>
    </div>
    <div v-else>
        <the-form :form-list="formList" :cancel-btn="hasRegInfo"></the-form>
    </div>
</div>
</template>
<script>
import formUtils from "utils/form"
import steps from "./components/steps"
import nextStep from "./components/nextStep"
import theForm from "./_form"
import { Indicator, Toast } from 'mint-ui';
import marked from 'marked'

export default{
	components: {nextStep, steps, theForm},
    data() {
        return {
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
            if (this._IS_('aia2017') || this._IS_('oriflame-macau')){
                return false;
            }
            for (let form of this.formList) {
                if (form.value.settings.openAfterRegClose) {
                    return true
                }
            }
            return !this.$store.state.steps.reg_close
        },
        successShowQrcode() {
            let show_qrcode = 0;
            console.log(this.meeting.settings.register);
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
        '$route' (to, from) {
          // 对路由变化作出响应...
          this.getForms()
        }
    },

    created() {
        this.getConfig()
        this.$on("cancelEdit", function() {
            this.toggleViewMode(true)
        })

        this.$on("submitSuccess", function(){
            this.getForms()
        })

        this.$on("submitFailed", function(res){
            Toast(res.msg)
        })

        this.getForms()
    },
	methods: {
        getConfig() {

            if(!this.meeting.settings.modules){
                return false;
            }
            let preGroupId = this.meeting.settings.modules.user_group_pre
            if (this.user.group.is_default == 1 && preGroupId == 1) {
                this.$router.push({name: 'register_usergroup'})
            }
        },
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
            return el.value
        },

    },
}
</script>
