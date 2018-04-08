<template>
    <div class="row">
        <div class="col-md-6 col-xs-12">
            <!--select-->
            <label :for="id1">
                <span v-if="config.validate.required" class="text-danger">*</span>
                {{config.label}}
            </label>

            <div>
                <select
                    @change="clear"
                    class="form-control"
                    v-model="config.value1"
                    :id="id1"
                    v-validate="config.validate"
                    :name="elementName1">
                    <option v-for="option in options1"
                            :value="option">
                        {{ option }}
                    </option>
                </select>
            </div>

            <p class="help-block">
                {{config.help}}
                <span v-show="errors.has(elementName1)" class="form-invalid">{{ errors.first(elementName1) }}</span>
            </p>
        </div>

        <div class="col-md-6 col-xs-12">
            <!--select-->
            <label :for="id2">
                <span v-if="config.validate.required" class="text-danger">*</span>
                {{config.label2}}
            </label>

            <div>
                <select class="form-control"
                        v-model="config.value2"
                        :id="id2"
                        v-validate="config.validate"
                        :name="elementName2">
                    <option v-for="option in options2"
                            :value="option">
                        {{ option }}
                    </option>
                </select>
            </div>

            <p class="help-block">
                {{config.help2}}
                <span v-show="errors.has(elementName2)" class="form-invalid">{{ errors.first(elementName2) }}</span>
            </p>
        </div>
    </div>

</template>
<script>
    import formMixin from "mixins/formElements"

    export default {
        mixins: [formMixin],
        methods: {
            clear() {
                this.config.value2 = ''
            }
        },
        computed: {
            elementName1() {
                return "data[" + this.formId + "][" + this.config.id + "-1]"
            },
            elementName2() {
                return "data[" + this.formId + "][" + this.config.id + "-2]"
            },
            options(){
                return [{
                    text: "-- " + this.$t("plsChoose") + " --",
                    value: null
                }].concat(this.config.options)
            },
            id1() {
                return this.config.id + "-1"
            },
            id2() {
                return this.config.id + "-2"
            },
            options1() {
                let options = [];
                for (let op in this.config.levelSelectOptions) {
                    options.push(op)
                }
                return options
            },
            options2() {
                if (!this.config.value1) {
                    return []
                }
                return this.config.levelSelectOptions[this.config.value1]
            },
        }
    }
</script>
