<template>
    <div class="sign-wrapper">
    	<div class="signature">
    		<p class="text">{{txt}}</p>
    		<div class="form-content" v-if="form_id">
                <div class="form-item" v-for="item in elements">
                    <div class="upload-image input-item text-center" v-if=" item.type == 'photo_uploader' && item.label.indexOf('签字') != -1">
                        <label :for="item.id">{{item.label + "："}}</label>
                        <div class="preview" :style="{ backgroundImage: 'url(' + item.value + '?x-oss-process=image/resize,m_fill,w_220,h_100)' }" @click="chooseImage(item.id)">
                            <span v-if="!item.value"><img class="add" :src="camera" alt=""></span>
                            <input type="file" :name="item.name" :id="item.id" ref="input" @change="changeFile(item.id, $event)">
                        </div>
                        <p class="tips">因兼容限制请您只用白纸黑笔签名后拍照上传</p>
                    </div>
                </div>
                <div class="text-center">
                    <button class="formSubmit" @click.stop.prevent="save">提交</button>
                </div>
            </div>
    	</div>
    </div>
</template>

<script>

	import wx from 'weixin-js-sdk';
    import { Toast } from 'mint-ui'
    // import iButton from 'iButton'
	export default {
		name: 'signature',
        components: {
            // iButton
        },
		data() {
			return {
				text: {
					'后': '作为太平洋产险的一名服务保障支持人员，我始终认为只有我更专业，才能为敏捷高效的优质服务保驾护航，让快更快，让好更好。今天我承诺：专业执着，精益求精。',
					'中': '作为太平洋产险的一名保险窗口服务人员，我始终以满足客户需求为最高追求，以乐观积极友好的“温暖”服务，解答客户的每个疑惑，抚平客户的每寸烦恼。',
					'前': '作为太平洋产险的一名保险营销服务人员，我始终将《保险从业人员行为准则》谨记心上，我会全力以赴，用自己的专业和诚信赢得客户满满的信任。'
				},
				camera: require('../images/icon_camera.png'),
				form_id: 0,
                elements: [],
                local_id: '',
                hasRegInfo: false,
                files: [],
                txt: ''
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

                        let positionItem = this.elements.find( item => item.label === '岗位类型' ) || {};
						let type = positionItem.options.find( item => item.value === positionItem.value )['text'] || ''
            			Object.keys(this.text).forEach( (item, idx, arr) => {
		            		if( type.indexOf(item) > 0 ) {
		            			type = this.text[item]
		            			this.txt = type
		            		}
		            	});
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
                                        let formData = new FormData();
                                        formData.append('file', self.dataURItoBlob(localData));
                                        formData.append('form_id', self.form_id)
                                        self.$http.post('register/uploadIdPhoto', formData, {
                                            before(e) {
                                                instance = Toast({ message: '正在上传……', duration: -1 })
                                            }
                                        }).then((response) => {
                                            instance.close()
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
                let self = this;
                let instance;
                self.files = e.target.files;

                if( !self.files.length && !self.isWechat ) return;

                let formData = new FormData();
                formData.append('file', self.files[0]);
                formData.append('form_id', self.form_id);
                self.$http.post('register/uploadIdPhoto', formData, {
                    before(e) {
                        instance = Toast({ message: '正在上传……', duration: -1 })
                    }
                }).then((response) => {
                    instance.close()
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
                    if (el.label.indexOf('签字') !== -1 && el.validate.required && el.value.length < 1) {
                        Toast(el.label + ' 信息填写不完整')
                        // e.loading = false;
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
                        this.$router.push({
                            name: 'home_page',
                            query: {
                                page: 'canvasfont',
                                user: this.user.id
                            }
                        })
                    }
                })

            },

        },
	}
</script>

<style lang="less" scoped>
    .sign-wrapper {
        position: fixed;
        width: 100%;
        height: 100%;
        background: url('../images/submit_bg.png') no-repeat center top;
        background-size: cover;
        &::after {
            content: '';
            position: absolute;
            background-image: url('../images/footer.png');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center bottom;
            display: block;
            width: 100%;
            padding-top: 30%;
            bottom: 0;
            left: 50%;
            transform: translate3d(-50%, 0, 0)
        }
    }
	.signature {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -45%, 0);
        border-radius: 4px;
        width: 86%;
		background-color: #fffad2;
		padding: 25px 15px;
		border: 1px solid #c8caae;
		box-shadow: 2px 2px 10px #c5c433;
		font-size: 16px;
		color: #5a7c93;
		text-align: left;
		.text {
			text-indent: 24px;
			line-height: 28px;
		}
	}
	.upload-image {
		margin-top: 40px;
		label {
			position: relative;
			top: 5px;
			display: inline-block;
			font-weight: bold;
			color: #003e68;
			font-size: 20px;
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
        letter-spacing: 40px;
        font-size: 18px;
        text-indent: 42px;
    }
    .tips {
    	font-size: 10px;
    	color: #8e9d99;
    	margin-top: 10px;
    }
    .preview {
        position: relative;
        background-size: cover;
        width: 80px;
        height: 36px;
        display: inline-block;
        background-color: #4c8fc4;
        border: 1px solid #487aa0;
        border-radius: 4px;
        input {
            display: inline-block;
            outline: 0;
            opacity: 0;
            width: 100%;
            height: 100%;
        }
        .add {
            font-size: 10px;
            position: absolute;
            top: 45%;
            left: 50%;
            transform: translate3d(-50%, -50%, 0);
            color: #668fb0;
            width: 30%;
        }
    }
</style>
