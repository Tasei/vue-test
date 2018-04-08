let dict = {
    en: {
        messages: {
            required: () => 'this field is required',
            email: () => 'illegal email',
        }
    },
    cn: {
        messages: {
            required: () => '此项为必填项目',
            email: () => '邮件格式不正确',
            mobile: () => '手机格式不正确',
            china_visa: () => '护照号码格式不正确',
            china_visa_hongkong: () => '通行证格式不正确',
            china_visa_taiwan: () => '通行证格式不正确',
            china_id: () => '身份证号码格式不正确',
        }
    }
}

export default {
    errorBagName: 'errors', // change if property conflicts.
    fieldsBagName: 'fields',
    delay: 5000,
    locale: 'cn',
    dictionary: dict,
    strict: false, //strict: Fields that have no rules will fail validation unless strict is set to false.
    enableAutoClasses: true,
    classNames: {
        touched: 'form-touched', // the control has been blurred
        untouched: 'form-untouched', // the control hasn't been blurred
        valid: 'form-valid', // model is valid
        invalid: 'form-invalid', // model is invalid
        pristine: 'form-pristine', // control has not been interacted with
        dirty: 'form-dirty' // control has been interacted with
    }
}
