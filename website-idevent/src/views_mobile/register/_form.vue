<template v-if="user">
    <form method="post"
          id="register-form"
          action="/api/register/saveRegInfo"
          @submit.prevent="fireSubmit">

        <template v-for="form in formList" v-if="isVisible(form)">
            <v-form :elements="form.value.elements"
                    :settings="form.value.settings"
                    :form_id="form.id"
                    :form_name="form.name"
                    :group="!!user.group ? user.group.id : ''"
                    :child_id="child_id"
            ></v-form>
        </template>

        <input type="hidden" name="child_id" :value="child_id">

        <div class="register-btn">
            <button
                class="btn btn-primary btn-lg padding-lg"
                :disabled="submitDisabled"
                type="submit">{{$t('save')}}
            </button>
            <button v-if="cancelBtn"
                    class="btn btn-primary btn-lg padding-lg btn-outline"
                    @click="cancelEdit()"
                    type="button">{{$t('cancel')}}
            </button>
        </div>
    </form>
</template>
<script>
    import formUtils from "utils/form"
    import vForm from "components/form.vue"
    import {Indicator, Toast} from "mint-ui"

    import bus from "../../bus/registerForm"

    export default {
        components: {vForm},
        data(){
            return {
                formValid: false,
                formSubmitLoading: false,
                cancelBtn: false,
            }
        },
        computed: {
            child_id() {
                return this.$route.params.child_id
            },
            user() {
                return this.$store.state.user
            },
            bindingArray() {
                let bArray = [];
                for (let form of this.formList) {
                    for (let el of form.value.elements) {
                        if (!!el.options) {

                            for (let option of el.options) {
                                if (!!option.bindForm) {
                                    bArray = bArray.concat(option.bindForm)
                                }
                            }

                        }
                    }
                }
                return bArray;
            },
            bindingActiveArray() {
                let bArray = [];
                for (let form of this.formList) {
                    for (let el of form.value.elements) {
                        if (!!el.options) {
                            for (let option of el.options) {
                                if (!!option.bindForm) {
                                    if (el.value == option.value) {
                                        bArray = bArray.concat(option.bindForm)
                                    }
                                }
                            }
                        }
                    }
                }
                return bArray;
            },

            submitDisabled(){
                return this.formSubmitLoading
            }
        },
        props: {
            formList: Array,
        },
        watch: {
            formSubmitLoading() {
                if (this.formSubmitLoading) {
                    Indicator.open()
                } else {
                    Indicator.close()
                }
            }
        },
        created() {
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

                this.validateChild()
                setTimeout(function () {
                    if (self.errors && self.errors.any()) {
                        Toast({
                            message: self.$t("form.invalid"),
                            position: "bottom",
                        })
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
                        this.$parent.$emit('submitSuccess', this, response.body);
                    } else {
                        this.$parent.$emit('submitFailed', this, response.statusText);
                    }
                    this.$parent.$emit('afterFormSubmit', this);
                }).bind(this);

                let data = new FormData(event.target);
                this.$http.post(event.target.action, data).then(handleFinish, handleError);
            },

            cancelEdit() {
                this.$parent.$emit("cancelEdit")
            }
        }
    }
</script>
