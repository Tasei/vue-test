//样式加载
import 'assets/style/www.less'

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from "vue-resource";
import VueCookie from "vue-cookie";
import store from "../vuex/store";
import VueProgressBar from 'vue-progressbar'

// const options = {
//   color: '#bffaf3',
//   failedColor: '#874b4b',
//   thickness: '5px',
//   transition: {
//     speed: '0.2s',
//     opacity: '0.6s'
//   },
//   autoRevert: true,
//   location: 'left',
//   inverse: false
// }

Vue.use(VueProgressBar)

import routes from '../routes/www'
import App from '../App'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueCookie)

//配置
{
    Vue.http.options.root = '/api'
    Vue.config.warnExpressionErrors = false
}

const router = new VueRouter({
    linkActiveClass: 'active',
    routes: routes
})

router.beforeEach((to, from, next) => {
    // console.log(to)
    let meeting_id = to.query.mid
    if (meeting_id) {
        VueCookie.set('WWW_REG_MID', meeting_id)
    } else {
        meeting_id = VueCookie.get('WWW_REG_MID', '')
    }

    Vue.http.post('meeting/get', {id: meeting_id})
        .then((response) => {
            let ret = response.body
            if (ret.err != 0) {
                return
            }
            store.commit('MEETING', ret.res)

            Vue.http.get('meeting/getUser', {
                meeting_id: meeting_id
            }).then(function (response) {
                    let ret = response.body
                    if (ret.err == 0 && ret.res) {
                        store.commit('USER', ret.res)
                        if (to.name == "register_login") {
                            router.push({name: "register_form"})
                            return
                        } else {
                            next()
                        }
                    } else {
                        if (to.name != "register_login") {
                            router.push({name: "register_login"})
                            return
                        } else {
                            next()
                        }
                    }
                })
        })
})


App.store = store

/* eslint-disable no-new */
const app = new Vue({
	el: '#app',
    router: router,
    template: '<App/>',
    components: {
        App
    }
})
