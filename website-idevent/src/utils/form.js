import marked from 'marked'
export default {
    getElementName(config, form_id) {
        let name = ''
        if (config.name) {
            name = "data[" + form_id + "][" + config.name + "]"
        } else {
            name = "data[" + form_id + "][" + config.id + "]"
        }

        if (config.type == "checkbox") {
            name = name + "[]"
        }

        return name
    },

    isFlightAutoInput(el_name) {
        const names = [
            'flight_takeoff_datetime', 'flight_takeoff_airport', 'flight_takeoff_terminal', 'flight_takeoff_city',
            'flight_landing_datetime', 'flight_landing_airport', 'flight_landing_terminal', 'flight_landing_city',
        ];
        return names.indexOf(el_name) > -1
    },

    /**
     * 隐藏火车票部分字段,自动补全
     * */
    isTrainAutoInput(el_name) {
        const names = [
            'train_takeoff_datetime', 'train_takeoff_station',
            'train_landing_datetime', 'train_landing_station'
        ]

        return names.includes(el_name)
    },

    isValueItem(el_type) {
        const config = [
            'divider', 'blank', 'heading', 'file_uploader',
            // 'china_id_photo', 'china_visa_hongkong_photo', 'china_visa_photo', 'signature'
        ]
        return config.indexOf(el_type) === -1
    },
    ocrAutoFill(el, value) {
        if (value != "") {
            el.value = value
        }
    },

    getItemText(el) {
        //translate options to text
        if (el.options) {
            let values = [].concat(el.value)
            let texts = []
            for (let option of el.options) {
                if (values.indexOf(option.value) > -1) {
                    texts = texts.concat(option.text)
                }
            }
            return texts.join(",")
        }
        if (el.type == 'paragraph') {
            return marked(el.text, {sanitize: true})
        }
        if (el.type == 'photo_uploader') {
            return '<img src="' + el.attachment.url + '/w375" />';
        }
        return el.value
    },

    isFilledItem(el) {
        if (!this.isValueItem(el.type)) {
            return false
        }

        if (el.type == 'paragraph' && !el.display) {
            return false
        }

        switch (typeof el.value) {
            case 'string':
                return el.value != ""
                break
            case 'array':
                return el.length > 0
                break
            default:
                break
        }

        return true
    },

}
