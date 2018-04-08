/**
 * Created by peter on 16/12/18.
 */
import wx from 'weixin-js-sdk'
import Vue from 'vue';
import UAParser from 'ua-parser-js'
import config from "./wechatShare.config"

const os = new UAParser().getOS()

let initialized = false

class Wechat {
    init(store, route) {
        if (initialized && os.name === 'iOS') {
            return
        }
        initialized = true
        let url = window.location.protocol + "//" + window.location.hostname + route.fullPath
        console.log('wx init:', url)

        Vue.http.post('weixin/auth/ticket', {
            url: url
        }).then((response) => {
            if (response.body.err == 0) {
                let res = response.body.res
                wx.config({
                    debug: process.env.NODE_ENV === 'development',
                    appId: res.app_id,
                    timestamp: res.timestamp,
                    nonceStr: res.noncestr,
                    signature: res.signature,
                    jsApiList: [
                        'checkJsApi',
                        'chooseImage',
                        'scanQRCode',
                        'previewImage',
                        'getLocalImgData',
                        'onMenuShareTimeline',
                        'onMenuShareAppMessage',
                        'onMenuShareQQ',
                        'onMenuShareWeibo',
                        'onMenuShareQZone']
                })

                let shareConfig = config[store.state.meeting.alias]
                if (shareConfig) {
                    wx.ready(function () {
                        shareConfig.url = window.location.protocol + "//" + window.location.hostname + '/home/index?mid=' + store.state.meeting.id
                        wx.onMenuShareTimeline(shareConfig);
                        wx.onMenuShareAppMessage(shareConfig);
                        wx.onMenuShareQQ(shareConfig);
                        wx.onMenuShareWeibo(shareConfig);
                        wx.onMenuShareQZone(shareConfig);
                    })
                }
            }
        })
    }
}

export {wx};
export default Wechat;
