<template>
    <div class="iui-bottom-bar">
        <div class="weui-flex">
            <span  v-for="(item, key) in list" class="weui-flex__item iui-bottom-bar__item">
                <router-link v-if="item.route"
                             class="weui-flex__item iui-bottom-bar__item"
                             :to="item.route"
                             :class="{active: isActive(item)}"
                             :id="'item-'+key">
                    <i :class="className(item)"></i>
                    <p class="iui-bottom-bar__label">{{item.title}}</p>
                </router-link>
                <a v-else-if="item.link"
                   class="weui-flex__item iui-bottom-bar__item"
                   :href="item.link"
                   :id="'item-'+key">
                    <i :class="className(item)"></i>
                    <p class="iui-bottom-bar__label">{{item.title}}</p>
                </a>
                <a v-else
                   class="weui-flex__item iui-bottom-bar__item"
                   href="javascript:;"
                   :id="'item-'+key" >
                    <i :class="className(item)"></i>
                    <p class="iui-bottom-bar__label">
                        <i-button :on-ok="logout" v-if="user" class="icca-quit">{{item.title}}</i-button>
                    </p>

                </a>
            </span>
        </div>
    </div>
</template>
<script>
    import bottomBar from "../../../../views_mobile/components/iui/bottom_bar"
    import iButton from "iButton"
import {Toast} from "mint-ui"
    export default{
        components: {
//            bottomBar
            iButton
        },
        data(){
            return {
                list: [
                    {
                        title: "活动资讯",
                        route: {name: "home_index"},
                        icon: "home",
                        icon_active: "home-s",
                    },
                    {
                        title: "报名注册",
                        route: {name: "register_form"},
                        icon: "register",
                        icon_active: "register-s"
                    },
//                    {
//                        title: "退出",
//                        nolink:'true',
////                        route: {name: "home_page", query: {page: 'qrcode'}},
//                        icon: "quit",
//                        icon_active: "user-s"
//                    },
                ]
            }
        },
        created(){
//            console.log(this.user)
        },
        methods: {
            className(item){
                let className = {
                    "iuifont": true,
                }
                if (this.isActive(item)) {
                    let active_name = item.icon_active ? item.icon_active : (item.icon + "-s")
                    className["iui-icon-" + active_name] = true
                } else {
                    className["iui-icon-" + item.icon] = true
                }
                return className
            },
            isActive(item) {
                if(item.route){
//                    console.log(item.route.name == this.$route.name)
                    return item.route.name == this.$route.name
                }else{
                    return false
                }

            },
            waitFn() {
                Toast('敬请期待')
            },
            logout(e) {
                let self = this
                this.$http.post('meeting/logout')
                    .then(function(response) {
                        let ret = response.body
                        if (ret.err == 0) {
                            self.$store.commit('USER', null)
                            this.$cookie.delete('WX_AUTH')

                            this.$router.push({name: "portal"})
                            return
                        }
                    })
                    .finally(function(){
                        e.loading = false
                    })
            },
        },
    }
</script>
<style lang="less" rel="stylesheet/less">
    .iui-bottom-bar {

        div.mint-tabbar {
            .mint-tab-item,.mint-tab-item.is-selected {
                .mint-tab-item-label {
                    color: rgba(255, 255, 255, 1) !important;
                }

                .iuifont {
                    color: rgba(255, 255, 255, 1) !important;
                }
            }
        }


    }
    .icca-quit{
        /*color: #fff;*/
        background-color: transparent;
        padding:0 !important;
        font-size:10px !important;
        line-height: 1 !important;

    }
</style>
