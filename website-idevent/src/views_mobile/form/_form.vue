<template v-if="user">
    <div style="padding-top: 20px">
        <steps v-if="isCloseStep" :currentIndex="currentFormIndex" :formsList="formListFiltered"></steps>
        <form method="post"
              id="register-form"
              action="/api/register/saveRegInfo"
              @submit.prevent="fireSubmit">

            <v-form v-if="form"
                    :showTitle="false"
                    :elements="form.value.elements"
                    :settings="form.value.settings"
                    :form_id="form.id"
                    :form_name="form.name"
                    :group="!!user.group ? user.group.id : ''"
            ></v-form>

            <div class="register-btn">
                <button
                    class="btn btn-primary btn-lg padding-lg"
                    :disabled="submitDisabled"
                    type="submit">{{$t(isLastForm ? 'done' : 'nextStep')}}
                </button>
            </div>
        </form>
    </div>
</template>
<script>
    import vForm from "components/form.vue"
    import steps from "./steps"
    import {Indicator, Toast} from "mint-ui"

    import bus from "../../bus/registerForm"

    export default {
        components: {vForm, steps},
        data() {
            return {
                formValid: false,
                formSubmitLoading: false,
                currentFormIndex: 0,
            }
        },
        computed: {
            child_id() {
                return this.$route.params.child_id
            },
            submitDisabled() {
                return this.formSubmitLoading
            },
            form() {
                return this.formListFiltered[this.currentFormIndex]
            },
            formListFiltered() {
                let filtered = this.formList.filter(this.isFormVisible)
                if (!this.$store.state.steps.reg_close) {
                    return filtered
                }
                return filtered.filter((form) => {
                    return form.value.settings.openAfterRegClose
                })
            },
            isLastForm() {
                return this.currentFormIndex === this.formListFiltered.length - 1
            },
            isCloseStep() {
                return !this._IS_('yumchina2017');
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
        },
        mounted() {
            //Listen on the bus for changers to the child components error bag and merge in/remove errors
            bus.$on('errors-changed', (newErrors, oldErrors) => {
                console.log(newErrors, oldErrors)
                if (newErrors) {
                    newErrors.forEach(error => {
                        if (!this.errors.has(error.field)) {
                            this.errors.add(error.field, error.msg)
                        }
                    })
                }
                if (oldErrors) {
                    oldErrors.forEach(error => {
                        this.errors.remove(error.field)
                    })
                }
            })
        },
        methods: {
            isFormVisible(form) {
                if (form.value.settings.hidden) {
                    return false
                }

                let open = (form.value.settings.applyToAll == '1')
                if (open) {
                    return true
                }

                let idx = form.value.settings.applyToGroups.indexOf(this.user.group_id)

                return idx > -1
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
            fireSubmit(event) {
                let self = this

                this.errors.items = []
                bus.$emit('validate');
                setTimeout(() => {
                    if (!this.errors.any()) {
                        self.submit(event)
                    } else {
                        Toast({
                            message: self.$t("form.invalid"),
                            position: "bottom",
                        })
                    }
                }, 1000)
            },
            submit(event) {
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
                            this.$parent.$emit('submitSuccess', this, response.body);
                        }
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
