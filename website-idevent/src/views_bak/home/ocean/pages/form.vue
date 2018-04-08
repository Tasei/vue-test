<template>
	<div class="form-container">
        <div class="form-content" v-if="form_id">
            <h1 class="title">填写信息</h1>
            <div class="form-item" v-for="item in elements">
                <div class="input-item" v-if=" item.type == 'input' ">
                    <input type="text"
                            :id="item.id"
                            :name="item.name"
                            :placeholder="item.label"
                            v-model="item.value"
                            required="item.validate.required"
                            autocomplete="off"
                    >
                </div>
                <div class="input-item" v-if=" item.type == 'select' ">
                    <select :name="item.name" :id="item.id" v-model="item.value" :class="{ index50: item.label === '岗位类型', index90: item.label === '所属分公司' }">
                        <option value="">{{item.label}}</option>
                        <option :value="option.value" v-for="option in item.options">{{option.text}}</option>
                    </select>
                </div>
                <div class="upload-image input-item" v-if=" item.type == 'photo_uploader' && item.label.indexOf('工作照') != -1">
                    <label :for="item.id">{{item.label}}</label>
                    <div class="preview" :style="{ backgroundImage: 'url(' + item.value + '/b200)' }" @click="chooseImage(item.id)">
                        <span class="add" v-if="!item.value">+</span>
                        <input type="file" :name="item.name" :id="item.id" ref="input" @change="changeFile(item.id, $event)">
                    </div>
                </div>
            </div>
            <div class="text-center">
                <button class="formSubmit" @touchstart.prevent.stop="save">我要承诺</button>
            </div>
        </div>
    </div>
</template>

<script>

	import wx from 'weixin-js-sdk';
    import { Toast } from 'mint-ui'
    import iButton from 'iButton'
    export default {
        name: 'form',
        components: {
            iButton
        },
        data() {
            return {
                form_id: 0,
                elements: [],
                local_id: '',
                hasRegInfo: false,
                files: [],
            }
        },
        created() {

            this.$http.post('register/getRegInfo').then(response => {

                let ret = response.body;
                if (ret.err == 0 && ret.res != null) {
                    this.$store.commit('SPIN');

                    if (ret.res.formList.length > 0) {
                        let form = ret.res.formList[0];
                        this.form_id = form.id;
                        this.elements = form.value.elements;
                        this.hasRegInfo = ret.res.hasRegInfo;
                    }
                }else {
                    Toast(ret.msg);
                }
            });
        },
        mounted() {
            this.initWX();
        },
        methods: {
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
                return new Blob([ia], { type: 'image/jpg' });
            },
        	initWX() {
        		this.$http.post('weixin/auth/ticket', {
	                url: this.isIOS ? this.$cookie.get('wxurl') : window.location.href
	            }).then((response) => {
	                let res = response.data.res
	                wx.config({
	                    debug: process.env.NODE_ENV === 'development',
	                    appId: res.app_id,
	                    timestamp: res.timestamp,
	                    nonceStr:  res.noncestr,
	                    signature: res.signature,
	                    jsApiList: ['chooseImage', 'previewImage', 'getLocalImgData', 'getLocalImgData', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone']
	                });

	            })
        	},
        	chooseImage(id) {
                let self = this;
                let instance;
                if( self.isWechat ) {
                    event.stopPropagation()
                    event.preventDefault()
                    wx.chooseImage({
                        count: 1, // 默认9
                        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                        success: function (res) {
                            if(res.localIds.length > 0) {
                                self.local_id = res.localIds[0];
                                wx.getLocalImgData({
                                    localId: self.local_id,
                                    success: function (res) {
                                        let localData = res.localData;
                                        console.log(localData)
                                        let formData = new FormData();
                                        formData.append('file', self.dataURItoBlob(localData));
                                        formData.append('form_id', self.form_id)
                                        self.$http.post('register/uploadIdPhoto', formData, {
                                            before(e) {
                                                instance = Toast({ message: '正在上传……', duration: -1 })
                                            }
                                        }).then((response) => {
                                            instance.close();
                                            let ret = response.body;
                                            if(ret.err === 0 && ret.res != null) {
                                                self.elements.forEach( item => {
                                                    if( item.id === id && item.type === "photo_uploader" ) {
                                                        item.value = ret.res.attachment.url
                                                    }
                                                })
                                            }else{
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
            changeFile(id, e) {

                let instance;
                let self = this;
                self.files = e.target.files;

                if( !self.files.length && !self.isWechat ) return;

                let formData = new FormData();
                formData.append('file', self.files[0]);
                formData.append('form_id', self.form_id)

                self.$http.post('register/uploadIdPhoto', formData, {
                    before(e) {
                        instance = Toast({ message: '正在上传……', duration: -1 })
                    }
                }).then((response) => {
                    instance.close();

                    let ret = response.body;
                    if(ret.err === 0 && ret.res != null) {

                        self.elements.forEach( item => {
                            if( item.id === id && item.type === "photo_uploader" ) {
                                item.value = ret.res.attachment.url
                            }
                        })
                    }else{
                        Toast(ret.msg)
                    }
                });

            },
            save(e) {

                let data = {};
                data[this.form_id] = {};

                for (let el of this.elements) {
                    if (el.label.indexOf('签字') === -1 && el.validate.required && ( el.value.length < 1 || el.value === el.label) ){
                        Toast(el.label + ' 信息填写不完整')
                        e.loading = false;
                        return false;
                    }
                    if (el.name) {
                        data[this.form_id][el.name] = el.value
                    } else {
                        data[this.form_id][el.id] = el.value
                    }
                }

                this.$http.post('register/saveRegInfo', {
                    meeting_id: this.meeting.id,
                    data: data
                }).then( (response) => {
                    let ret = response.body;
                    if( ret.err == 0 ) {
                        // e.loading = false;
                        this.$router.push({
                            name: 'home_page',
                            query: {
                                page: 'sign',
                            }
                        })
                    }
                })

            },

        },
    }
</script>

<style lang="less" scoped>

    .form-container {
        background-color: rgba(255, 255, 255, .75);
        border-radius: 4px;
        width: 86%;
        padding: 0 20px;
        position: absolute;
        z-index: 999;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        .title {
            color: #1467b2;
            font: 28px "Microsoft Yahei", sans-serif;
            text-align: center;
            font-weight: bold;
            letter-spacing: 5px;
            margin: 15px 0;
        }
        .input-item {
            width: 100%;
            margin-bottom: 12px;
        }
        label {
            color: #92a8bd;
            font-size: 16px;
            display: inline-block;
            text-align: center;
        }
        select, input {
            border: 0 none;
            border: 1px solid #8b897d;
            background: #fff;
            padding: 5px 10px;
            display: inline-block;
            outline: 0;
            border-radius: 4px;
            width: 100%;
            color: #92a8bd;
            /*text-align: center;*/
            font-weight: bold;
            text-align: left;
        }
        option {
            /*text-align: center;*/
            text-align: left;
        }
        .upload-image {
            border-radius: 4px;
            background-color: #fff;
            padding: 5px 10px;
            border: 1px solid #8b897d;
            text-align: center;
            label {
                vertical-align: top;
                display: block;

            }
        }
        .preview {
            position: relative;
            background-size: cover;
            width: 100px;
            height: 100px;
            display: inline-block;
            background-color: #ddd;
            border: 1px solid #084169;
            input {
                display: inline-block;
                outline: 0;
                opacity: 0;
                width: 100%;
                height: 100%;
            }
            .add {
                font-size: 30px;
                font-weight: bold;
                position: absolute;
                top: 45%;
                left: 50%;
                color: #eee;
                transform: translate3d(-50%, -50%, 0);
                color: #668fb0;
            }
        }
        .formSubmit {
            cursor: pointer;
            margin-top: 10px;
            outline: 0;
            width: 80%;
            background: #488ec4;
            color: #fff;
            padding: 10px;
            border: 1px solid #487aa0;
            border-radius: 4px;
            margin-bottom: 20px;
            font-weight: bold;
            letter-spacing: 5px;
        }
        .index90 {
            /*text-indent: 44%;*/
        }
        .index50 {
            /*text-indent: 30%;*/
        }
    }
</style>
