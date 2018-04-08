<template>
    <div class="col-sm-12">
        <!--<steps></steps>-->
        <div class="i-dot-steps-container">
            <h5 class="i-dot-steps-title text-primary">问卷调查</h5>
            <div class="i-dot-steps-list">
                <div
                    class="i-dot-steps-dot active">
                    <span class="bg-primary "></span>
                </div>
            </div>
        </div>
        <div v-if="viewMode">
            <div class="text-center vote-hint vote-ok">
                <span class="fa fa-check-circle text-primary"></span>
                <h5>您已填写问卷</h5>

                <a @click="goBackQ" class="btn btn-lg btn-primary btn-outline">返回首页</a>
            </div>
        </div>
        <div v-else>
            <the-form :form-list="formList" :cancel-btn="hasRegInfo"></the-form>
        </div>
    </div>
</template>
<script>
    import formUtils from "utils/form"
//    import steps from "../../../register/components/steps"
    import theForm from "./components/questionnaire/_form"
    import { Indicator, Toast } from 'mint-ui';
    import marked from 'marked'

    export default{
        components: {theForm,},
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
                for (let form of this.formList) {
                    if (form.value.settings.openAfterRegClose) {
                        return true
                    }
                }
                return !this.$store.state.steps.reg_close
            },
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
                this.$http.post('register/getOneRegInfo', {
                    name:"问卷调查",
                    child_id: self.child_id
                }).then(function(response) {
                    let ret = response.body

                    if (ret.err == 0) {
                        this.formList = ret.res.formList
                        this.viewMode = ret.res.hasRegInfo
                        this.hasRegInfo = ret.res.hasRegInfo
                        console.log(this.formList)
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
            goBackQ() {
                this.$router.go(-1)
            }
        },
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    .i-dot-steps-title {
        font-weight: 600;
        font-size: 16px;
        letter-spacing: 0px;
        line-height: 16px;
        text-align: center;
        margin-top: 20px;
    }

    .i-dot-steps-list {
        margin: 1rem auto;
        text-align: center;
    }

    .i-dot-steps-dot {
        width: 20px;
        height: 20px;
        border-radius: 100%;
        display: inline-block;

        &.active {
            background: rgba(0, 83, 156, 0.08);
        }

        &.complete,
        &.active {
        }

        span {
            &.default {
                background-color: #ddd;
            }
            width: 4px;
            height: 4px;
            border-radius: 100%;
            display: inline-block;
            margin: 8px;
        }
    }
    .btn{
        margin-bottom: 50px !important;
    }
</style>
<style lang="less" scoped>
    .vote-hint{
        margin-top: 60px;
        h5{
            font-family:PingFangSC-Medium;
            font-size:20px;
            color:#333;
            letter-spacing:0px;
            line-height:20px;
            text-align:center;
            margin: 15px auto;
        }
        p{
            font-size: 14px;
            color: #666;
            line-height: 20px;
            font-family: PingFangSC-Regular;
        }
        .fa{
            font-size: 80px;
        }
        .btn{
            width: 60%;
        }
    }
</style>
