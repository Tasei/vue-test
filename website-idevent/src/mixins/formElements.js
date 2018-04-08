import formUtils from "utils/form"
import bus from "../bus/registerForm"

export default {
    props: {
        formId: [String, Number],
        config: Object,
    },
    computed: {
        elementName() {
            return formUtils.getElementName(this.config, this.formId)
        },
    },
    mounted() {
        //Listen on the bus for the parent component running validation
        bus.$on('validate', this.onValidate)
    },
    methods: {
        onValidate() {
            this.$validator.validateAll().then(() => {
                if (this.errors.any()) {
                    console.log(this, this.errors)
                    bus.$emit('errors-changed', this.errors.items)
                }
            });

        },
    },
    beforeDestroy() {
        //When destroying the element remove the listeners on the bus.
        //Useful for dynaically adding and removing child components
        bus.$emit('errors-changed', [], this.errors.items)
        bus.$off('validate', this.onValidate)
    },
}
