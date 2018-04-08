//样式加载
import 'assets/style/mobile.less'
import 'mint-ui/lib/style.css'
import Vue from 'vue'
import MintUI from 'mint-ui'
import VueRouter from 'vue-router'
import VueResource from "vue-resource";
import VueCookie from "vue-cookie";
import store from "../vuex/store";
import UAParser from 'ua-parser-js'

import 'weui'
import weui from 'weui.js'
Vue.prototype.$weui = weui;
Vue.prototype.$debug = false;
import VueHead from 'vue-head'

import VueI18n from 'vue-i18n'

Vue.use(MintUI)
Vue.use(VueHead)
Vue.use(VueI18n)

import routes from '../routes/mobile'
import App from '../AppM'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueCookie)

import locales from '../locales/global'
Vue.config.lang = (VueCookie.get('LANG') ? VueCookie.get('LANG') : 'zh')
Vue.config.fallbackLang = 'zh'
// console.log(locales)
// set locales
Object.keys(locales).forEach(function (lang) {
    Vue.locale(lang, locales[lang])
})

import VeeValidate from 'vee-validate';
import config from "../validator/config"
config.locale = (Vue.config.lang == 'en' ? 'en' : 'cn')
import "../validator/custom"
Vue.use(VeeValidate, config);

//配置
{
    Vue.http.options.root = '/api'
    Vue.config.warnExpressionErrors = false
    //日志
}

import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'
if (process.env.NODE_ENV == 'production') {
    Raven
        .config('https://a6ab7486e34a499088fc0a5e997c0db9@sentry.io/135838')
        .addPlugin(RavenVue, Vue)
        .install()
}

// console.log(process.env.NODE_ENV)
const router = new VueRouter({
    mode: (process.env.NODE_ENV == 'development') ? "hash" : "history",
    base: '/',
    linkActiveClass: '',
    routes: routes
})

import {Toast} from "mint-ui"
Vue.http.interceptors.push((request, next) => {
    next((response) => {
        if (!store.state.ignore_network_err) {
            if (response.status >= 400 || !response.body) {
                Toast({
                    message: '请求失败! 请检查您的网络',
                    position: 'bottom',
                    duration: 6000
                });
                Raven.captureMessage("http response error:" + response.status + " " + response.statusText + " " + response.body)
            }
        }
        return response
    })
})

window.setDocumentTitle = function (title) {
    document.title = title;

    let ua = navigator.userAgent.toLowerCase()

    if (ua.indexOf('micromessenger') > -1) {
        if (/ip(hone|od|ad)/i.test(ua)) {
            let i = document.createElement('iframe');
            i.src = '/favicon.png?' + Math.random();
            i.style.display = 'none';
            i.onload = function () {
                setTimeout(function () {
                    i.remove();
                }, 100)
            }
            document.body.appendChild(i);
        }
    }
}

App.store = store

import Wechat, { wx } from 'assets/js/wechat'
const WechatSDK = new Wechat();
router.afterEach((to, from) => {
    WechatSDK.init(store, to)
})

router.beforeEach((to, from, next) => {

    let meeting_id = to.query.mid

    if (meeting_id) {
        VueCookie.set('WWW_REG_MID', meeting_id)
    } else {
        meeting_id = VueCookie.get('WWW_REG_MID', '')
    }

    if (!to.query.mid) {
        next({
            name: to.name,
            params: to.params,
            query: Object.assign(to.query, {
                mid: meeting_id
            })
        })
        return
    }

    // console.log(to)
    store.commit('SPIN', true)

    //请求meeting
    Vue.http.post('meeting/get', {
        id: meeting_id
    }).then((response) => {
        let ret = response.body
        if (ret.err != 0) {
            return
        }
        window.setDocumentTitle(ret.res.name)
        store.commit('MEETING', ret.res)

        //init user
        Vue.http.post('meeting/getUser', {
            meeting_id: meeting_id,
        }).then(function (response) {
            let ret = response.body

            if (ret.err != 0) {
                return
            }
            store.commit('USER', ret.res)

            next()
        })
        //end init user
    })
})

const os = new UAParser().getOS()
// console.log(os)
Vue.mixin({
    computed: {
        meeting() {
            return store.state.meeting
        },
        user() {
            return store.state.user
        },
        isAndroid() {
            return os && os.name == 'Android'
        },
        isIOS() {
            return os && os.name == 'iOS'
        },
        isMobile() {
            return this.isAndroid || this.isIOS
        },
        isWechat() {
            let ua = navigator.userAgent.toLowerCase()
            if (ua.indexOf('micromessenger') > -1) {
                return true
            } else {
                return false
            }
        }
    },
    methods: {
        _IS_(alias, exact) {
            if (!alias) {
                return !this.meeting.alias
            }
            if (!!exact) {
                return this.meeting.alias == alias
            } else {
                return this.meeting.alias && this.meeting.alias.startsWith(alias)
            }
        },


    }
})

/* eslint-disable no-new */
const app = new Vue({
    el: '#app',
    router: router,
    template: '<App/>',
    components: {
        App
    }
})
