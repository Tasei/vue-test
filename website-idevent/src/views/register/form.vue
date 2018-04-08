<template>
<div class="container">
    <steps></steps>
    <hr>

    <div v-if="viewMode">
        <h4 class="text-dark font-bold">注册信息
            <a href="javascript:void(0);" @click="toggleViewMode(false)" class="pull-right">&lt;返回修改</a>
        </h4>
        <div class="table-responsive">
            <table class="table table-striped">
                <tbody>
                <template v-for="form in formList">
                    <template v-for="el in form.value.elements">
                        <tr v-if="isFilledItem(el)">
                            <td><em>{{el.label}}</em></td>
                            <td><b>{{getItemText(el)}}</b></td>
                        </tr>
                    </template>
                </template>
                </tbody>
            </table>
        </div>
        <div class="register-btn">
            <next-step></next-step>   
        </div>
    </div>

    <div v-else>
        <the-form :form-list="formList" cancel-btn="hasRegInfo"></the-form>
    </div>

</div>    
</template>
<script>
import formUtils from "utils/form"
import nextStep from "components/nextStep"
import steps from "components/steps"
import theForm from "./_form"

export default {
    components: {nextStep, steps, theForm},
    data() {
        return {
            formList: [],
            viewMode: false,
            hasRegInfo: false,
        }
    },
    created() {
        this.getForms()

        this.$on("cancelEdit", function() {
            this.toggleViewMode(true)
        })

        this.$on("submitSuccess", function(){
            this.getForms()
        })
    },
    methods: {
        isFilledItem(el) {
            if (!formUtils.isValueItem(el.type)) {
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
            this.$http.post('register/getRegInfo')
                .then(function(response) {
                    let ret = response.body

                    if (ret.err == 0) {
                        this.formList = ret.res.formList
                        this.viewMode = ret.res.hasRegInfo
                        this.hasRegInfo = ret.res.hasRegInfo

                    } else {
                        // Message.error('获取信息失败, 请稍后刷新页面重试', 10);
                    }
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
            return el.value
        },

    },
}
</script>
