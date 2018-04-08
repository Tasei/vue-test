<template>
    <div class="fd-takePicture" v-if="el">
        <div class="paizhao" v-if="!signin">
            <div class="takePicture">
                <div class="form-item">
                    <div class="upload-image input-item">
                        <div class="upAvatar" v-if="attachment"
                             :style="{ backgroundImage: 'url(' + attachment.url + '/b200)' }">
                        </div>
                        <div class="upAvatar" v-else></div>
                        <label v-if="!attachment" class="upAvaBtn btn-outline" @click="chooseImage()">上传头像</label>
                    </div>
                </div>
            </div>
            <div class="resign" v-if="!hasRegInfo">
                <button class="btn btn-primary " @click="save">保存</button>
            </div>
            <div class="resign" v-else>
                <button class="btn btn-primary " @click="signinFn">签到</button>
            </div>
        </div>

        <div class="already" v-if="signin">
            <div class="takePicture">
                <img src="../images/suecess.png" alt="" class="suecess_icon">
                <p class="applaud">已签到</p>
            </div>
            <div class="resign">
                <button class="btn btn-primary " @click="back">返回</button>
            </div>
        </div>
    </div>

</template>

<script>
    import Wechat, {wx} from 'assets/js/wechat'
    import {Toast, MessageBox, Indicator} from 'mint-ui'

    export default {
        data() {
            return {
                signin: false,
                success: '',
                local_id: '',
                form_id: 0,
                files: [],
                attachment: null,
                el: null,
                hasRegInfo: false,
            }
        },
        created() {
            this.getRegInfo();
        },
        methods: {
            getRegInfo() {
                let self = this
                this.$http.post('register/getRegInfo').then(response => {

                    let ret = response.body;
                    if (ret.err === 0 && ret.res != null) {
                        if (ret.res.formList.length > 0) {
                            let form = ret.res.formList[0];
                            self.form_id = form.id;
                            console.log(form.value.elements)
                            self.attachment = form.value.elements[0].attachment
                            self.el = form.value.elements[0]
                            self.hasRegInfo = ret.res.hasRegInfo
                            self.$store.commit('SPIN', false)
                        }
                    } else {
                        Toast(ret.msg);
                    }
                });
            },
            dataURItoBlob(dataURI) {
                let byteString;
                if (dataURI.split(',')[0].indexOf('base64') >= 0) {
                    byteString = atob(dataURI.split(',')[1]);
                } else {
                    byteString = atob(dataURI);
                }

                let ia = new Uint8Array(byteString.length);
                for (let i = 0; i < byteString.length; i++) {
                    ia[i] = byteString.charCodeAt(i);
                }
                return new Blob([ia], {type: 'image/jpg'});
            },
            chooseImage(id) {
                let self = this;
                let instance;
                if (self.isWechat) {
                    event.stopPropagation()
                    event.preventDefault()
                    wx.chooseImage({
                        count: 1, // 默认9
                        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                        success: function (res) {
                            if (res.localIds.length > 0) {
                                self.local_id = res.localIds[0];
                                wx.getLocalImgData({
                                    localId: self.local_id,
                                    success: function (res) {
                                        let localData = res.localData;
                                        let formData = new FormData();
                                        formData.append('file', self.dataURItoBlob(localData));
                                        formData.append('form_id', self.form_id)

                                        self.$http.post('register/uploadIdPhoto', formData, {
                                            before(e) {
                                                instance = Toast({message: '正在上传……', duration: -1})
                                            }
                                        }).then((response) => {
                                            instance.close();
                                            let ret = response.body;
                                            if (ret.err === 0 && ret.res != null) {
                                                console.log(ret.res)
                                                self.attachment = ret.res.attachment
                                                self.el.value = ret.res.attachment.id
                                            } else {
                                                Toast(ret.msg)
                                            }
                                        });

                                    }
                                });
                            }
                        }
                    });

                    return false;

                }

            },
            save() {
                let data = {};
                data[this.form_id] = {};

                let el = this.el
                if (!el.value) {
                    Toast('请上传头像')
                    return false;
                }
                if (el.name) {
                    data[this.form_id][el.name] = el.value
                } else {
                    data[this.form_id][el.id] = el.value
                }
                console.log(data)
                this.$http.post('register/saveRegInfo', {
                    meeting_id: this.meeting.id,
                    data: data
                }).then((response) => {
                    let ret = response.body;
                    if (ret.err === 0) {
                        console.log(ret);
                        this.getRegInfo();
                        Toast('保存成功');
                    }
                })
            },
            signinFn() {
                this.signin = true;
                this.$http.post('custom/haiyan/pushQueue', {
                    invitation_id: this.user.id,
                }).then((response) => {
                    let ret = response.body;
                    if (ret.err === 0) {
                        Toast('签到成功')
                    }
                })
            },
            back() {
                this.$router.push({name: 'home_index'})
            }
        }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
    .fd-takePicture {
        .paizhao {
            .takePicture {
                padding-top: 0.1px;
                padding-bottom: 30px;
                background-image: url(../images/paizhao_bg.png);
                -webkit-background-size: 100% 100%;
                background-size: 100% 100%;
                /*.avatar{*/
                /*width:100px;*/
                /*height:100px;*/
                /*margin:40px auto 30px;*/
                /*display: block;*/
                /*}*/
                .upload-image {
                    text-align: center;
                }
                .upAvatar {
                    width: 100px;
                    height: 100px;
                    margin: 40px auto 30px;
                    font-family: PingFangSC-Medium;
                    font-size: 14px;
                    letter-spacing: 0;
                    line-height: 14px;
                    color: #fff;
                    background-image: url(../images/Path.png);
                    background-size: 100% 100%;
                    display: block;
                    -webkit-border-radius: 50%;
                    -moz-border-radius: 50%;
                    border-radius: 50%;
                }
                .upAvaBtn {
                    padding: 5px 32px;
                    color: #fff;
                    font-size: 14px;
                    margin: 0 auto;
                    -webkit-border-radius: 2px;
                    -moz-border-radius: 2px;
                    border-radius: 2px;

                }
                .btn-outline {
                    border: 1px solid #fff;
                }
            }
            .resign {
                width: 100%;
                padding: 30px;
                button {
                    font-family: PingFangSC-Medium;
                    font-size: 18px;
                    color: #FFFFFF;
                    letter-spacing: 0;
                    line-height: 18px;
                    width: 100%;
                    background: #214C9F;
                    -webkit-border-radius: 2px;
                    -moz-border-radius: 2px;
                    border-radius: 2px;
                    padding: 12px 12px;
                }

            }
        }
        .success {
            .takePicture {
                padding-top: 0.1px;
                padding-bottom: 30px;
                background-image: url(../images/paizhao_bg.png);
                -webkit-background-size: 100% 100%;
                background-size: 100% 100%;
                .suecess_icon {
                    width: 60px;
                    height: 60px;
                    margin: 40px auto 30px;
                    display: block;
                }
                .applaud {
                    font-family: PingFangSC-Medium;
                    font-size: 20px;
                    color: #FFFFFF;
                    letter-spacing: 0;
                    line-height: 20px;
                    text-align: center;
                }
            }
            .resign {
                width: 100%;
                padding: 30px;
                button {
                    font-family: PingFangSC-Medium;
                    font-size: 18px;
                    color: #FFFFFF;
                    letter-spacing: 0;
                    line-height: 18px;
                    width: 100%;
                    background: #214C9F;
                    -webkit-border-radius: 2px;
                    -moz-border-radius: 2px;
                    border-radius: 2px;
                    padding: 12px 12px;
                }

            }
        }
        .already {
            .takePicture {
                padding-top: 0.1px;
                padding-bottom: 30px;
                background-image: url(../images/paizhao_bg.png);
                -webkit-background-size: 100% 100%;
                background-size: 100% 100%;
                .suecess_icon {
                    width: 60px;
                    height: 60px;
                    margin: 40px auto 30px;
                    display: block;
                }
                .applaud {
                    font-family: PingFangSC-Medium;
                    font-size: 20px;
                    color: #FFFFFF;
                    letter-spacing: 0;
                    line-height: 20px;
                    text-align: center;
                }
            }
            .resign {
                width: 100%;
                padding: 30px;
                button {
                    font-family: PingFangSC-Medium;
                    font-size: 18px;
                    color: #FFFFFF;
                    letter-spacing: 0;
                    line-height: 18px;
                    width: 100%;
                    background: #214C9F;
                    -webkit-border-radius: 2px;
                    -moz-border-radius: 2px;
                    border-radius: 2px;
                    padding: 12px 12px;
                }

            }
        }
    }
</style>
