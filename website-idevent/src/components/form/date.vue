<template>
    <div>
        <label>
            <span v-if="config.validate.required" class="text-danger">*</span>
            {{config.label}}
        </label>

        <input v-if="readonly"
               style="color:#999;"
               type="text"
               :id="id"
               :name="elementName" readonly="readonly" onfocus="this.blur()" :value="config.startDate"
               class="form-control" />
        <datepicker v-else
                    :id="id"
                    v-model="config.value"
                    :name="elementName"
                    :required="required"
                    :placeholder="config.placeholder"
                    :startDate="startDate"
                    :endDate="endDate"
        ></datepicker>
        <p class="help-block">
            {{config.help}}
            <span v-show="errors.has(elementName)" class="form-invalid">{{ errors.first(elementName) }}</span>
        </p>
    </div>
</template>
<script>
    import formMixin from "mixins/formElements"
    import datepicker from "components/datepicker"

    export default {
        components: {datepicker},
        mixins: [formMixin],
        props: {
            config: Object
        },
        computed: {
            id() {
                return 'datepicker-' + this.config.id
            },
            required() {
                return !!this.config.validate.required
            },
            startDate() {
                return this.config.startDate ? this.config.startDate : '1900-01-01'
            },
            endDate() {
                return this.config.endDate ? this.config.endDate : '2020-12-31'
            },
            readonly() {
                return this.config.startDate && (this.config.startDate === this.config.endDate)
            }
        },
    }
</script>
