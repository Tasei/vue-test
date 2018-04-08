<template>
    <div>
        <div class="iphoto-no-result text-center" v-if="status==0">
            <div class="icon-holder-new"></div>
            <p class="text-gray">
                拍张照片找自己<br/>听说隔壁老王也在玩
            </p>
            <button v-if="isWechat && isAndroid" class="btn-iphoto btn btn-primary btn-lg" @click="chooseImage">
                <span class="camera">自拍一下</span>
            </button>
            <button v-else class="btn-iphoto btn btn-primary btn-lg">
                <span class="camera">自拍一下</span>
                <input type="file" @change="uploadPhoto" accept="image/png,image/jpeg,image/gif" capture="camera"/>
            </button>

        </div>
        <div class="iphoto-no-result" v-if="status==1">
            <div class="icon-holder-loading"></div>
            <p class="text-center text-gray">
                人脸努力识别中<br/>请稍等...
            </p>
        </div>

        <div class="text-center iphoto-no-result" v-if="status==2">
            <div class="icon-holder"></div>
            <p class="text-gray">
                啥都没找到<br/>再拍一张试试看
            </p>
            <button v-if="isWechat && isAndroid" class="btn-iphoto btn btn-primary btn-lg" @click="chooseImage">
                <span class="camera">再拍一次</span>
            </button>
            <button v-else class="btn-iphoto btn btn-primary btn-lg">
                <span class="camera">再拍一次</span>
                <input type="file" @change="uploadPhoto" accept="image/png,image/jpeg,image/gif" capture="camera"/>
            </button>
        </div>
        <div class="iphoto-no-result" v-if="status==3">
            <div class="icon-holder-loading"></div>
            <p class="text-center text-gray">
                我们正在玩命找您<br/>请稍等…
            </p>
        </div>
        <div class="iphoto-no-result" v-if="status==4">
            <div class="icon-holder"></div>
            <p class="text-center text-gray">
                啊哦，还没有找到您的照片<br/>快去找摄影师哥哥多拍几张照片吧
            </p>
        </div>

        <div v-infinite-scroll="getList"
             infinite-scroll-disabled="loading"
             infinite-scroll-distance="10">
            <photo-grid :list="list" :total="total">太棒了！我看到了可爱的我！</photo-grid>
        </div>
    </div>
</template>
<script>
    import photoGrid from './grid'
    import {Toast, MessageBox, Indicator} from 'mint-ui'
    import wx from 'weixin-js-sdk'
    export default{
        data(){
            return {
                status: 0,//0未拍过照片 1人脸识别中 2人脸未设别 3人脸识别玩命找你, 4人脸识别未找到照片 5 //找到了照片
                list: [],
                page: 1,
                total: 0,
                loading: true,
                tt: null,
                local_id: ''
            }
        },
        mounted() {
            if(this.isWechat) {
                let self = this
                this.$http.post('weixin/auth/ticket', {
                    url: location.href.split('#')[0]
                }).then((response) => {
                    let res = response.body.res
                    wx.config({
                        debug: false,
                        appId: res.app_id,
                        timestamp: res.timestamp,
                        nonceStr:  res.noncestr,
                        signature: res.signature,
                        jsApiList: ['chooseImage', 'previewImage', 'getLocalImgData']
                    })
                    wx.ready(function () {
                        self.getUserAlbum()
                    })
                    wx.error(function(res){
                        console.log(res)
                    })
                })
            } else {
                this.getUserAlbum()
            }
        },
        destroyed () {
            if(this.tt) {
                clearTimeout(this.tt)
            }
        },
        components: {
            photoGrid
        },
        methods: {
            chooseImage() {
                let self = this
                wx.chooseImage({
                    count: 1, // 默认9
                    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                    success: function (res) {
                        if(res.localIds.length > 0) {
                            self.local_id = res.localIds[0]
                            self.uploadPhoto()
                        }

                    }
                });
            },
            getUserAlbum () {
                if (!this.user) {
                    return
                }
                clearTimeout(this.tt)
                //获取照片列表
                this.$http.post('photo/getAlbumByMeetingId', {
                    meeting_id: this.user.meeting_id,
                    invitation_id: this.user.id
                }).then((response) => {
                    if (response.body.err == 0) {
                        let res = response.body.res
                        //找到的照片数量
                        let photo_count = res.photo_count
                        //人脸拍照状态 0 未找过人脸 1 找了但没有找到人脸 2 找到了人脸
                        let detect_status = res.face_detect_status
                        //人脸搜索状态 0 未搜索过人脸 1 找了没找到 2 找到了
                        let search_status = res.face_search_status
                        if(photo_count <= 0) {
                            this.status = 0
                        } else if (photo_count <= 1) {
                            if (detect_status == 0) {
                                this.status = 1
                            } else if(detect_status == 1) {
                                this.status = 2
                            } else if(detect_status ==2) {
                                if(search_status == 0) {
                                    this.status = 3
                                } else if(search_status == 1) {
                                    this.status = 4
                                } else {
                                    this.status = 5
                                }
                            }
                        } else {
                            this.status = 5
                        }
                    }
                }).then(() => {
                    let self = this
                    if(this.status != 5) {
                        this.$store.commit('SPIN')
                    }
                    if(this.status == 1 || this.status == 3) {
                        this.tt = setTimeout(function() {
                            self.getUserAlbum()
                        }, 1000)
                    } else if(this.status == 5) {
                        //获取图片列表
                        this.getList()
                    }
                })

            },

            //会议相册列表
            getList () {
                let self = this
                this.loading = true
                this.$http.post('photo/list', {
                    meeting_id: this.meeting.id,
                    invitation_id: this.user.id,
                    page: this.page,
                    limit: 15,
                }).then((response) => {
                    if (response.body.err == 0) {
                        let ret = response.body.res
                        for(let el of ret.list) {
                            self.list.push(el)
                        }
                        self.total = ret.total
                        self.page = parseInt(self.page) + 1
                        this.$nextTick(() => {
                            if(self.total > self.list.length) {
                                self.loading = false
                            }
                        })
                    }
                }).then((response) => {
                    this.$store.commit('SPIN')
                })
            },
            uploadPhoto(e) {
                let self = this
                MessageBox({
                    title: '提示',
                    message: '确认是自己的大头照哟！<br/><span style="color:red">只有一次</span>机会如果浪费了超可惜的！找到别人就不好玩啦！',
                    showCancelButton: true,
                    cancelButtonText: '重新拍照',
                    confirmButtonText: '知道啦',
                    confirmButtonClass: 'btn btn-primary btn-lg',
                    cancelButtonClass: 'btn btn-default btn-outline btn-lg'
                }).then(action => {
                    if (action=='cancel') {
                        return false
                    }
                    //开始上传
                    Indicator.open('努力上传中...')
                    if (this.isWechat && this.isAndroid) {
                        let formData = {}
                        wx.getLocalImgData({
                            localId: this.local_id, // 图片的localID
                            success: function (res) {
                                formData.meeting_id = self.meeting.id
                                formData.base64_code = res.localData // localData是图片的base64数据，可以用img标签显示
                                self.uploadHttp(formData)
                            }
                        });

                    } else {
                        let formData = new FormData()
                        formData.append('meeting_id', self.meeting.id)
                        formData.append('file', e.target.files[0])
                        self.uploadHttp(formData)
                    }

                })
            },

            uploadHttp(formData) {
                let self = this
                this.$http.post('photo/uploadPhoto', formData).then((response) => {
                    Indicator.close()
                    if (response.body.err == 0) {
                        let instance = Toast('上传成功')
                        setTimeout(function() {
                            instance.close()
                            self.getUserAlbum()
                        }, 1000)
                    } else {
                        Toast('上传失败了，重新上传试试')
                    }
                })
            }
        }
    }
</script>
<style lang="less" scoped>
    .btn {
        position: relative;
    }
    input[type="file"] {
        opacity: 0;
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
        bottom: 0;
        z-index: 1;
    }
</style>
