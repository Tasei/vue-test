<template>
    <ajax-form method="post"
           id="register-form"
           action="register/saveRegInfo"
           :allow_submit="formValid">

        <template v-for="form in formList">
            <v-form :elements="form.value.elements"
                    :settings="form.value.settings"
                    :form_id="form.id"
                    :form_name="form.name"
                    :group="!!user.group ? user.group.id : ''"
                    ></v-form>
        </template>

        <div class="register-btn">
            <button
                class="btn btn-primary btn-lg padding-lg"
                :disabled="formSubmitLoading"
                type="submit">保存</button>
            <button v-if="cancelBtn"
                class="btn btn-primary btn-lg padding-lg btn-outline"
                @click="cancelEdit()"
                type="button">取消</button>
        </div>
    </ajax-form>
</template>
<script>
import "vendor/validator/jquery.validate.min.js"
import "vendor/validator/messages_zh.js"
import validatorConfig from "vendor/validator/config.js"

import formUtils from "utils/form"
import vForm from "components/form.vue"
import ajaxForm from "components/ajaxForm"
export default {
    components: {vForm, ajaxForm},
    data(){
        return {
            formValid: false,
            formSubmitLoading: false,
            validator: null,
            cancelBtn: false,
        }
    },
    computed: {
        user() {
            return this.$store.state.user
        }
    },
    props: {
        formList: Array,
    },
    mounted() {
        this.setupValidator()
    },
    watch: {
        formList() {
            this.setupValidator()
        }
    },
    created() {
        this.$on('beforeFormSubmit', function (el) {
            this.formSubmitLoading = true
            let is_valid = this.validator.form()
            this.formValid = is_valid

            if (!is_valid) {
                this.formSubmitLoading = false
                return false
            }
        })

        this.$on('afterFormSubmit', function (el) {
            this.formSubmitLoading = false
        })

        this.$on('onFormComplete', function (el, res) {
            if (res.err == 0) {
                this.$parent.$emit('submitSuccess', res)
            } else {
                this.$parent.$emit('submitFailed', res)
            }
        })

        this.$on('onFormError', function (el, err) {
            // handle errors
            console.log('onFormError', el, err)
            this.$parent.$emit('formError', err)
        })
    },
    methods: {
        setupValidator() {
            if (this.formList.length == 0) {
                return;
            }

            let form_rules = {};
            for (let form of this.formList) {
                for (let el of form.value.elements) {
                    if (!!el.validate) {
                        form_rules[formUtils.getElementName(el, form.id)] = el.validate
                    }
                }
            }
            //console.log(form_rules)
            validatorConfig.init(this.$lang)
            this.validator = $("#register-form").validate({
                rules: form_rules,
            });

            console.log(form_rules, this.validator.form())
        },

        cancelEdit() {
            this.$parent.$emit("cancelEdit")
        }
    }
}
</script>
