import {Validator} from 'vee-validate';

Validator.extend('mobile', {
    getMessage() {
        return 'incorrect mobile number format'
    },
    // validate: value => /^[0-9\+\-\*\s]{11,20}$/.test(value)
    validate: value => /^1[3|4|5|6|7|8][0-9]\d{4,8}$/.test(value)
});
Validator.extend('china_visa', {
    getMessage() {
        return 'incorrect visa number format'
    },
    validate: value => /^[a-zA-Z0-9]{5,17}$/.test(value)
});
Validator.extend('china_visa_hongkong', {
    getMessage() {
        return 'incorrect visa number format'
    },
    validate: value => /^[HMhmC]{1}([0-9]{10}|[0-9]{8})$/.test(value)
});
Validator.extend('china_visa_taiwan', {
    getMessage() {
        return 'incorrect visa number format'
    },
    validate: value => /^[0-9]{8,10}$/.test(value)
});
Validator.extend('china_id', {
    getMessage() {
        return 'incorrect ID number format'
    },
    validate: value => {
        let isIDCard1 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
        let isIDCard2 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}[0-9Xx]$/;

        return (isIDCard1.test(value)) || (isIDCard2.test(value));
    }
});
