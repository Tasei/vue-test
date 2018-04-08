<template>
    <div>
        <label>
            <span v-if="config.validate.required" class="text-danger">*</span>
            {{config.label}}
            <span v-if="config.value" class="label label-success">{{$t('upload.uploaded')}}</span>
        </label>
        <div v-if="config.text" v-html="mdText(config.text)"></div>
        <div :id="uploader_id">
            <v-simple-uploader
                :mode="config.type"
                :attachment="config.attachment"
                :data="{form_id: formId, input_name: config.name}"
                :text="config.value ? $t('upload.uploadAgain') : (config.placeholder ? config.placeholder : $t('upload.uploadPhoto'))"
            >
            </v-simple-uploader>
            <input type="text" class="fly"
                   v-validate="this.config.validate"
                   :id="config.id"
                   v-model="config.value"
                   :name="elementName">
        </div>
        <p class="help-block">
            {{config.help}}
            <span v-show="errors.has(elementName)" class="form-invalid">{{ errors.first(elementName) }}</span>
        </p>
    </div>
</template>

<script>
    import vSimpleUploader from "components/simpleUploader"
    import formUtils from "utils/form"
    import {Toast, Indicator} from 'mint-ui'
    import formMixin from "mixins/formElements"
    import marked from "marked"

    export default {
        components: {
            vSimpleUploader
        },
        mixins: [formMixin],
        props: {
            config: Object,
            elements: Array,
        },
        computed: {
            uploader_id(){
                return "uploader-" + this.config.id
            },
        },
        created() {
            this.$on('onFileError', function (file, err) {
                Indicator.close()
                Toast(this.$t('upload.failed'))
                console.error(err)
            })

            this.$on('onFileUpload', function (file, response) {
                console.log(file, response)

                if (response.err != 0) {
                    Indicator.close()
                    Toast(this.$t('upload.failed'))
                    return
                }

                Indicator.close()
                Toast(this.$t('upload.success'))
                let self = this
                self.config.value = response.res.attachment.id
                this.$parent.$emit('validate')

                if (response.res.ocr) {
                    let ocr = response.res.ocr
                    switch (self.config.name) {
                        case 'china_id_photo_face':
                        case 'china_id_photo_back':
                            self.fillChinaIdPhoto(ocr)
                            break;
                        case 'china_visa_hongkong_photo_face':
                        case 'china_visa_hongkong_photo_qr':
                            self.fillChinaVisaHongKongPhoto(ocr)
                            break;
                        case 'china_visa_photo_index':
                            self.fillChinaVisaIndexPhoto(ocr)
                            break;
                    }
                }
            })

            this.$on('beforeFileUpload', function (file) {
                Indicator.open(this.$t('upload.uploading'))
            })
        },
        methods: {
            //fillChinaIdPhoto
            fillChinaIdPhoto (ocr) {
                if (ocr.side == 'face') {
                    for (let el of this.elements) {
                        switch (el.name) {
                            case "china_id":
                                formUtils.ocrAutoFill(el, ocr.num)
                                break;
                            case "name":
                                formUtils.ocrAutoFill(el, ocr.name)
                                break;
                            case "gender":
                                formUtils.ocrAutoFill(el, ocr.gender)
                                break;
                            case "birth_date":
                                formUtils.ocrAutoFill(el, ocr.birth)
                                break;
                            default:
                                break;
                        }
                    }
                } else {
                    for (let el of this.elements) {
                        if (el.name == "china_id_valid_date") {
                            formUtils.ocrAutoFill(el, ocr.end_date)
                            break;
                        }
                    }
                }

            },

            //fileChinaVisaHongKongPhoto
            fillChinaVisaHongKongPhoto (ocr) {
                for (let el of this.elements) {
                    switch (el.name) {
                        case "china_visa_hongkong":
                            formUtils.ocrAutoFill(el, ocr.num)
                            break;
                        case "china_visa_hongkong_valid_date_hk":
                            formUtils.ocrAutoFill(el, ocr.valid_date_hk)
                            break;
                        case "china_visa_hongkong_valid_date_ma":
                            formUtils.ocrAutoFill(el, ocr.valid_date_ma)
                            break;
                        case "china_visa_hongkong_type_hk":
                            formUtils.ocrAutoFill(el, ocr.type_hk)
                            break;
                        case "china_visa_hongkong_type_ma":
                            formUtils.ocrAutoFill(el, ocr.type_ma)
                            break;
                        case "china_visa_hongkong_destination":
                            formUtils.ocrAutoFill(el, ocr.destinations)
                            break;
                        default:
                            break;
                    }
                }
            },

            fillChinaVisaIndexPhoto(ocr) {
                for (let el of this.elements) {
                    switch (el.name) {
                        case "name":
                            formUtils.ocrAutoFill(el, ocr.info.name)
                            break;
                        case "gender":
                            formUtils.ocrAutoFill(el, ocr.info.gender)
                            break;
                        case "birth_date":
                            formUtils.ocrAutoFill(el, ocr.info.birth_date)
                            break;
                        case "china_visa":
                            formUtils.ocrAutoFill(el, ocr.info.num)
                            break;
                        case "china_visa_pinyin":
                            formUtils.ocrAutoFill(el, ocr.info.name_eng)
                            break;
                        case "china_visa_valid_date":
                            formUtils.ocrAutoFill(el, ocr.info.valid_date)
                            break;
                        case "china_visa_issue_at":
                            formUtils.ocrAutoFill(el, ocr.info.issue_at)
                            break;
                        case "china_visa_issue_at_pinyin":
                            formUtils.ocrAutoFill(el, ocr.info.issue_at_pinyin)
                            break;
                        case "china_visa_issue_date":
                            formUtils.ocrAutoFill(el, ocr.info.issue_date)
                            break;
                        case "china_visa_birth_place":
                            formUtils.ocrAutoFill(el, ocr.info.birth_place)
                            break;
                        case "china_visa_birth_place_pinyin":
                            formUtils.ocrAutoFill(el, ocr.info.birth_place_pinyin)
                            break;
                        default:
                            break;
                    }
                }
            },
            mdText(text) {
                return marked(text, {sanitize: true})
            }
        }

    }

</script>
