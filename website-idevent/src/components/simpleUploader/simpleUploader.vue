<template>
    <label :for="id">
        <div v-if="mode=='photo_uploader'">
            <img v-if="picUrl" :src="picUrl" class="img-responsive"/>
            <div class="preview" v-else
                 :style="{backgroundImage:'url('+placeholderPic+')'}">
            </div>
        </div>
        <a class="btn btn-primary btn-outline" v-else>{{text}}</a>

        <wx-uploader :id="id" :action="action" :data="data"></wx-uploader>
    </label>
</template>
<style scoped lang="less">
    label {
        margin-bottom: 0;
        display: block;
        float: none;
    }

    .preview {
        display: block;
        background-color: #f3f3f3;
        background-size: cover;
        background-position: center center;
        overflow: hidden;
        position: relative;
        width: 100px;
        height: 100px;
    }

    .sample {
        margin-left: 10px;
        padding: 6px 16px;
        background-color: #65c8ef;
        color: #fff;
        position: relative;
        img {
            position: absolute;
            z-index: 50;
            top: 0;
            left: 100%;
            width: auto;
            height: auto;
            max-width: 400px;
            max-height: 400px;
        }
    }
</style>
<script>
    import wxUploader from "./wxUploader.vue"
    import randomstring from "randomstring"

    export default {
        components: {wxUploader},
        props: {
            mode: String,
            cssClass: String,
            text: String,
            action: {
                type: String,
                default: '/api/register/uploadIdPhoto'
            },
            accept: {
                type: String,
                default: 'image/jpg,image/jpeg,image/png,image/bmp,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,application/x-excel,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/msword'
            },
            data: Object,
            attachment: Object,
        },
        computed: {
            placeholderPic() {
                return '//placehold.it/100x100/f3f3f3/?text=%2b';
            },
            picUrl() {
                let url = (this.uploadPic ? this.uploadPic : (this.attachment ? this.attachment.url : ''))
                return url ? (url + '/w320') : ''
            }
        },
        data() {
            return {
                id: 'simple-uploader-' + randomstring.generate(5),
                uploadPic: ''
            }
        },
        created() {
            this.$on('onFileError', () => {
                this.$parent.$emit('onFileError')
            })
            this.$on('onFileUpload', (file, ret) => {
                this.$parent.$emit('onFileUpload', file, ret)

                if (this.mode === 'photo_uploader') {
                    if (ret.err === 0) {
                        this.uploadPic = ret.res.attachment.url
                    }
                }
            })
            this.$on('beforeFileUpload', () => {
                this.$parent.$emit('beforeFileUpload')
            })
            this.$on('afterFileUpload', () => {
                this.$parent.$emit('afterFileUpload')
            })
        }
    }
</script>
