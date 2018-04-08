<template>
    <div>
        <!--input-->
        <label :for="config.id">
            <span v-if="config.validate.required" class="text-danger">*</span>
            {{config.label}}
        </label>

        <input v-if="config.name=='mobile'"
               type="tel" pattern="[0-9]*" class="form-control"
               :id="config.id"
               :placeholder="config.placeholder"
               :name="elementName"
               :maxlength="20"
               v-validate="config.validate"
               v-model="config.value">
        <input v-else
               type="text" class="form-control"
               :id="config.id"
               :placeholder="config.placeholder"
               :name="elementName"
               :maxlength="config.validate.maxLength ? config.validate.maxLength : 1000"
               v-validate="config.validate"
               v-model="config.value">

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
