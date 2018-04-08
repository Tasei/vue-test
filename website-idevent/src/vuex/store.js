/**
 * Created by peter on 16/9/13.
 */
import Vue from "vue";
import Vuex from "vuex";
import Cookie from "vue-cookie";

Vue.use(Vuex)
Vue.use(Cookie)

export default new Vuex.Store({
    state: {
        user: null,
        lang: Cookie.get('LANG', 'zh'),
        meeting: null,
        steps: {
            is_over: false,
            list: []
        },
        spin: true,
        ignore_network_err: false,
        poll_group: null,
        mobile: Cookie.get('isMobileVersion', false),
    },
    mutations: {
        //用户
        USER(state, user) {
            state.user = user
        },
        //语言设置
        LANG(state, lang = 'zh') {
            state.lang = lang
            Vue.config.lang = lang
            Vue.cookie.set('LANG', lang, {expires: '1Y'})
        },
        //会议信息
        MEETING(state, meeting) {
            state.meeting = meeting
        },
        //步骤
        STEPS(state, steps) {
            state.steps = steps
        },
        //动画效果
        SPIN(state, spin = false) {
            state.spin = !!spin
        },
        //忽略网络错误
        IGNORE_NETWORK_ERR(state, ignore = true) {
            state.ignore_network_err = !!ignore
        },
        //投票组
        POLL_GROUP(state, group = null) {
            state.poll_group = group
        },
        //是否手机版（欧瑞莲二期专用）
        MOBILE(state, isMobile = false) {
            state.mobile = isMobile;
            if (isMobile) {
                Vue.cookie.set('isMobileVersion', isMobile, 1)
            } else {
                Vue.cookie.delete('isMobileVersion')
            }
        }
    },
})
