<template>
    <div class="row register-form">
        <fieldset>
            <div class="col-xs-12" v-if="showTitle">
                <legend>{{form_name}}</legend>
            </div>
            <template v-for="config in elements">
                <div :class="columnClass(config)" v-if="isElementVisible(config)">
                    <div v-if="config.type=='heading'"><h5>{{config.text}}</h5></div>
                    <div v-if="config.type=='paragraph'">
                        <form-paragraph :config="config"></form-paragraph>
                    </div>
                    <div v-if="config.type=='divider'">
                        <hr>
                    </div>
                    <div v-if="config.type=='blank'">&nbsp;</div>

                    <form-input v-if="config.type=='input'" :config="config" :formId="form_id"></form-input>
                    <form-text v-if="config.type=='text'" :config="config" :formId="form_id"></form-text>
                    <form-radio v-if="config.type=='radio'" :config="config" :formId="form_id"></form-radio>
                    <form-checkbox v-if="config.type=='checkbox'" :config="config" :formId="form_id"></form-checkbox>
                    <form-select v-if="config.type=='select'" :config="config" :formId="form_id"></form-select>
                    <form-level-select v-if="config.type=='level_select'" :config="config" :formId="form_id"></form-level-select>


                    <form-date v-if="config.type=='date' || config.type=='datetime'" :config="config" :formId="form_id"></form-date>
                    <form-file-uploader v-if="config.type=='photo_uploader'" :config="config" :formId="form_id" :elements="elements"></form-file-uploader>
                    <form-file-uploader v-if="config.type=='file_uploader'" :config="config" :formId="form_id" :elements="elements"></form-file-uploader>
                    <form-flight-no v-if="config.type=='flight_no'" :config="config" :formId="form_id" :elements="elements"></form-flight-no>
                    <form-train-no v-if="config.type=='train_no'" :config="config" :formId="form_id" :elements="elements"></form-train-no>
                    <form-signature v-if="config.type=='signature'" :config="config" :formId="form_id" :elements="elements"></form-signature>
                </div>
            </template>
        </fieldset>
    </div>
</template>
<script>
    import formUtils from "utils/form"
    import formInput from "components/form/input"
    import formText from "components/form/text"
    import formRadio from "components/form/radio"
    import formCheckbox from "components/form/checkbox"
    import formSelect from "components/form/select"
    import formLevelSelect from "components/form/levelSelect"
    import formDate from "components/form/date"
    import formFileUploader from "components/form/fileUploader"
    import formFlightNo from "components/form/flightNo"
    import formTrainNo from "components/form/trainNo"
    import formSignature from "components/form/signature"
    import formParagraph from "components/form/paragraph"

    import marked from "marked"

    export default {
        components: {
            formInput, formText, formRadio, formCheckbox, formSelect,
            formDate, formFileUploader, formFlightNo, formTrainNo, formSignature,formParagraph,
            formLevelSelect
        },
        props: {
            showTitle: {
                type: Boolean,
                default: false
            },
            elements: Array,
            settings: Object,
            group: [String, Number],
            form_id: [String, Number],
            form_name: String,
            child_id: [String, Number],
        },
        data() {
            return {
                bindingInvisible: {}
            }
        },
        computed: {
            bindingArray() {
                let bArray = [];
                for (let el of this.elements) {
                    if (!!el.options) {
                        for (let op of el.options) {
                            bArray = bArray.concat(op.bind)
                        }
                    }
                }
                return bArray;
            },
            bindingActiveArray() {
                let bArray = [];
                for (let el of this.elements) {
                    if (!!el.options) {
                        for (let option of el.options) {
                            if (el.value instanceof Array) {
                                if (el.value.indexOf(option.value) > -1) {
                                    bArray = bArray.concat(option.bind)
                                }
                            } else {
                                if (el.value == option.value) {
                                    bArray = bArray.concat(option.bind)
                                }
                            }
                        }
                    }
                }
                return bArray;
            },

            isDisabled() {
                if (!this.$store.state.steps.is_over) {
                    return false
                }
                return !!this.settings.lockAfterPay
            }
        },
        methods: {
            mdText(text) {
                return marked(text, {sanitize: true})
            },
            isFormVisible() {
                if (this.settings.hidden) {
                    return false
                }

                if (this.group == 'ALL') {
                    return true
                }

                let open = (this.settings.applyToAll == '1')
                if (open) {
                    return true
                }

                let idx = this.settings.applyToGroups.indexOf(this.group)

                return idx > -1

            },
            isHiddenInput(config) {
                return formUtils.isFlightAutoInput(config.name) || formUtils.isTrainAutoInput(config.name)
            },
            getConfigById(id) {
                for (let el of this.elements) {
                    if (el.id == id) {
                        return el
                    }
                }

                return null
            },
            isElementVisible(config) {
                let visible = true;

                if (!!config.hidden) {
                    return false
                }

                if (config.childVisible == 1) {
                    if (typeof this.child_id == "undefined") {
                        return false
                    }
                }

                if (config.childVisible == 2) {
                    if (this.child_id > 0) {
                        return false
                    }
                }

                if (this.bindingArray.indexOf(config.id) > -1) {
                    visible = false;
                }

                if (this.bindingActiveArray.indexOf(config.id) > -1) {
                    visible = true;
                }

                if (!!this.bindingInvisible[config.id]) {
                    visible = false
                }

                //toggle all binding elements
                let self = this
                if (!!config.options) {
                    for (let option of config.options) {
                        if (!!option.bind) {
                            for (let bind_id of option.bind) {
                                this.bindingInvisible[bind_id] = !visible
                            }
                        }
                    }
                }

                return visible
            },
            columnClass(el) {
                let cols = 0;
                if (el.colWidth == 0) {
                    cols = this.settings.cols
                } else {
                    cols = (el.colWidth == 2) ? 1 : 2
                }
                let self = this
                return {
                    'col-xs-12': true,
                    'col-md-6': cols == 2,
                    'col-md-12': cols == 1,
                    ['register-form-el-' + el.type]: true,
                    'register-form-el': true,
                    'hidden-sm': el.type == 'blank',
                    'hidden-xs': el.type == 'blank',
                    'hidden': self.isHiddenInput(el)
                };
            }
        }
    }
</script>
