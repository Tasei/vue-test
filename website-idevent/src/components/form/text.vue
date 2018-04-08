<template>
    <div>
        <!--text-->
        <label :for="config.id">
            <span v-if="config.validate.required" class="text-danger">*</span>
            {{config.label}}
        </label>

        <textarea rows="5" class="form-control"
                  :id="config.id"
                  :placeholder="config.placeholder"
                  :name="elementName"
                  v-validate="config.validate"
                  :maxlength="config.validate.maxLength ? config.validate.maxLength : 1000"
                  v-model="config.value"></textarea>

        <p class="help-block">
            {{config.help}}
            <span v-show="errors.has(elementName)" class="form-invalid">{{ errors.first(elementName) }}</span>
        </p>
    </div>
</template>
<script>
    import formMixin from "mixins/formElements"

    export default {
        mixins: [formMixin]
    }
</script>
