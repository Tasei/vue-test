<template>
    <div>
        <input type="text" v-if="isWxUpload" :id="id" v-on:click="chooseImage">
        <input type="file" v-else
               :accept="accept"
               :id="id"
               v-on:change="fileInputChange">
    </div>
</template>
<style scoped>
    input {
        display: none;
    }
</style>
<script>
    import Wechat, {wx} from 'assets/js/wechat'

    export default {
        props: {
            accept: String,
            multiple: String,
            data: Object,
            id: String,
            action: String,
        },
        data() {
            return {
                localId: '',
                myFile: null
            }
        },
        created() {
        },
        computed: {
            isWxUpload() {
                return this.isWechat && this.isAndroid
            }
        },
        methods: {
            fileInputChange(e) {
                // get the group of files assigned to this field
                this.myFile = e.target.files[0];
                this.$parent.$emit('onFileChange', this.myFile);
                this.fileUpload(e)
            },
            chooseImage() {
                let self = this
                wx.chooseImage({
                    count: 1, // 默认9
                    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                    success(res) {
                        if (res.localIds.length > 0) {
                            self.localId = res.localIds[0]

                            let formData = self.data
                            wx.getLocalImgData({
                                localId: self.localId, // 图片的localID
                                success(res) {
                                    console.log(res)
                                    formData.base64_image = res.localData // localData是图片的base64数据，可以用img标签显示
                                    self.uploadHttp(formData)
                                },
                            });
                        }
                    }
                });
            },
            fileUpload(e) {
                let formData = new FormData()
                for (let k in this.data) {
                    formData.append(k, this.data[k])
                }

                formData.append('file', this.myFile)
                this.uploadHttp(formData)
            },
            uploadHttp(formData, e) {
                this.$parent.$emit('beforeFileUpload', this.myFile);

                this.$http.post(this.action, formData).then((response) => {
                    let ret = response.body
                    this.$parent.$emit('onFileUpload', this.myFile, ret);
                }, (response) => {
                    this.$parent.$emit('onFileError', this.myFile, response);
                }).then(() => {
                    this.$parent.$emit('afterFileUpload', this.myFile);
                    if (e) {
                        e.target.value = '';
                    }
                })
            }
        }
    }
</script>
