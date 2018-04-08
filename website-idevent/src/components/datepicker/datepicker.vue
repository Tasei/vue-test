<template>
    <div>
        <input
            style="ime-mode:disabled"
            onfocus="this.blur()"
            readonly
            @click="datePicker"
            :required="required"
            :id="getId()"
            size="16"
            :name="name"
            class="form-control"
            v-model="selected"
            :placeholder="placeholder" />
    </div>

</template>
<script>
    import randomstring from "randomstring"
    import 'date-utils'

    export default {
        props: {
            value: {
                type: String,
                default: "",
            },
            name: String,
            required: Boolean,
            placeholder: String,
            id: String,
            disabled: {
                type: Boolean,
                default: false,
            },
            startDate: String,
            endDate: String
        },

        data() {
            return {
                selected: this.value,
                min: this.startDate ? this.startDate : '1900-01-01',
                max: this.endDate ? this.endDate : '2050-01-01'
            }
        },
        created() {
            if (this.value) {
                this.selected = this.value
            }
        },

        computed: {
            lang() {
                return this.$store.state.lang
            }
        },
        watch: {
            selected() {
                this.updateValue(this.selected)
            }
        },

        methods: {
            datePicker() {

                let self = this
                this.$weui.datePicker({
                    start: self.min,
                    end: self.max,
                    // defaultValue: [1991, 6, 9],
                    onConfirm: function(result){
                        console.log(result);
                        self.selected = result[0].value + '-' + result[1].value + '-' + result[2].value
                    },
                    id: self.getId()
                });
            },
            getId() {
                return (this.id ? this.id : "datepicker-" + randomstring.generate(6));
            },
            updateValue(value) {
                this.$emit('input', value)
            },
        },
    }

</script>
