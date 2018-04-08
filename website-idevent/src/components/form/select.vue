<template>
    <div>
        <!--select-->
        <label :for="config.id">
            <span v-if="config.validate.required" class="text-danger">*</span>
            {{config.label}}
        </label>

        <div>
            <select class="form-control"
                    v-model="config.value"
                    :id="config.id"
                    v-validate="config.validate"
                    :name="elementName">
                <option v-for="option in options"
                        :value="option.value">
                    {{ option.text }}
                </option>
            </select>
        </div>

        <p class="help-block">
            {{config.help}}
            <span v-show="errors.has(elementName)" class="form-invalid">{{ errors.first(elementName) }}</span>
        </p>
    </div>
</template>
<script>
    import formMixin from "mixins/formElements"

    export default {
        mixins: [formMixin],
        computed: {
            options(){
                return [{
                    text: "-- " + this.$t("plsChoose") + " --",
                    value: null
                }].concat(this.config.options)
            }
        }
    }
</script>
