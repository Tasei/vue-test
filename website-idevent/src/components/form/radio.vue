<template>
    <div>
        <!--radio-->
        <label>
            <span v-if="config.validate.required" class="text-danger">*</span>
            {{config.label}}
        </label>

        <div class="input-container">
            <label class="radio-inline" v-for="option in config.options">
                <input type="radio"
                       :name="elementName"
                       :value="option.value"
                       v-validate="config.validate"
                       v-model="config.value">
                {{ option.text }}</label>
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
    }
</script>
