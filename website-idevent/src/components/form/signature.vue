<template>
    <div>
        <label>
            <span v-if="config.validate.required" class="text-danger">*</span>
            {{config.label}}
            <span v-if="config.value" class="label label-success">已上传</span>
        </label>
        <div class="form-control text-gray" @click="popupStart" style="margin:5px 0;">
            <span v-if="!!!src">点击手写签名</span>
            <img v-else :src="src" style="max-height: 100%"/>
        </div>
        <!--弹层组件-->
        <mt-popup v-model="popupVisible"
                  class="popup-signature"
                  :closeOnClickModal=false
                  position="bottom"
                  popup-transition="popup-fade">
            <span class="mint-datetime-action mint-datetime-cancel" @click="popupVisible = false">取消</span>
            <span class="mint-datetime-action mint-datetime-confirm" @click="confirm">确定</span>
            <div>
                <canvas :id="config.id + '_signature'" :width="width" height="200"></canvas>
            </div>
        </mt-popup>
        <!--隐藏域-->
        <input type="text" class="fly"
               :id="config.id"
               v-model="config.value"
               :name="elementName"
               v-validate="config.validate"/>

        <p class="help-block">
            {{config.help}}
            <span v-show="errors.has(elementName)" class="form-invalid">{{ errors.first(elementName) }}</span>
        </p>
    </div>
</template>
<script>
    import {Indicator, Toast} from "mint-ui"
    import SignaturePad from 'signature_pad'
    import formMixin from "mixins/formElements"

    export default{
        mixins: [formMixin],
        props: {
            elements: Array,
        },
        data () {
            return {
                signaturePad: null,
                width: window.innerWidth - 30,
                popupVisible: false,
                src: this.config.attachment ? this.config.attachment.url : ''
            }
        },
        mounted () {
            let canvas = document.getElementById(this.config.id + "_signature");
//            console.log(canvas)
            this.signaturePad = new SignaturePad(canvas, {
                backgroundColor: "rgb(255,255,255)"
            });
//            console.log(this.signaturePad)
        },
        methods: {
            popupStart () {
                if (!this.popupVisible) {
                    this.popupVisible = true
                }
                if (this.signaturePad) {
                    this.signaturePad.clear()
                }
            },

            confirm () {
                if (this.signaturePad.isEmpty()) {
                    Toast('请填写签名')
                    return false
                }
                let self = this
                let image = this.signaturePad.toDataURL("image/jpeg")
                Indicator.open()
                this.$http.post('register/uploadSignature', {
                    form_id: this.formId,
                    input_name: this.elementName,
                    file_base64: image
                }).then((response) => {
                    Indicator.close()
                    if (response.body.err == 0) {
                        let ret = response.body.res
                        self.config.value = ret.id
                        self.src = image
                        this.popupVisible = false
                    } else {
                        Toast(response.body.msg || '系统错误')
                    }
                })
            },

            preventTouch () {
                event.preventDefault()
                return false
            }

        }
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    textarea[readonly] {
        background-color: #fff;
    }

    .form-control {
        height: 120px;
        line-height: 108px;
        text-align: center;
    }

    .popup-signature {
        width: 100%;
        height: 257px;

        div {
            height: 257px;
            padding: 40px 15px 15px;

            canvas {
                border: 1px solid #eeeeee;
            }

        }
    }
</style>
