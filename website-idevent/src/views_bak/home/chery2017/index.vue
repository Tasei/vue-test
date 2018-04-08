<template>
    <div>
        <div class="fd-index" v-if="user">
            <div>
                <img :src="banner" class="img-responsive"/>
            </div>
            <ul class="list-group index-list">
                <li class="list-group-item">
                    <i class="index-icon index-icon-calendar"></i>
                    <router-link :to="{name:'home_schedule'}">
                        <h5>{{$t('menus.0.title')}}</h5>
                        <p class="list-details">{{$t('menus.0.desc')}}</p>
                    </router-link>
                </li>
                <li class="list-group-item">
                    <i class="index-icon index-icon-hotel"></i>
                    <router-link :to="{name:'home_page', query: {page: 'hotel'}}">
                        <h5>{{$t('menus.1.title')}}</h5>
                        <p class="list-details">{{$t('menus.1.desc')}}</p>
                    </router-link>
                </li>
                <li class="list-group-item">
                    <i class="index-icon index-icon-question"></i>
                    <router-link :to="{name:'home_common'}">
                        <h5>{{$t('menus.2.title')}}</h5>
                        <p class="list-details">{{$t('menus.2.desc')}}</p>
                    </router-link>
                </li>
                <li class="list-group-item">
                    <i class="index-icon index-icon-reception"></i>
                    <router-link :to="{name:'home_page', query: {page: 'info'}}">
                        <h5>{{$t('menus.3.title')}}</h5>
                        <p class="list-details">{{$t('menus.3.desc')}}</p>
                    </router-link>
                </li>
                <li class="list-group-item">
                    <i class="index-icon index-icon-contact"></i>
                    <router-link :to="{name:'home_contact'}">
                        <h5>{{$t('menus.4.title')}}</h5>
                        <p class="list-details">{{$t('menus.4.desc')}}</p>
                    </router-link>
                </li>
            </ul>

        </div>

        <bottom-bar></bottom-bar>
    </div>
</template>
<script>
    import iButton from "iButton"
    import {Toast} from "mint-ui"
    import BottomBar from "./components/bottom_bar"
    export default{
        data() {
            return {
                banner: require('../../../assets/images/mobile/chery/index_banner.jpg'),
            }
        },
        locales: {
            en: {
                menus: [
                    {
                        title: "Conference Agenda",
                        desc: "View the detailed arrangement of the conference",
                    },
                    {
                        title: "Hotel Introduction",
                        desc: "View the name and address of hotel",
                    },
                    {
                        title: "FAQ",
                        desc: "For any question in application & registration, please click here",
                    },
                    {
                        title: "Sales Information",
                        desc: "View vehicle information and discount for suppliers",
                    },
                    {
                        title: "Contact Us",
                        desc: "Please contact us for any help",
                    },
                ]
            },
            zh: {
                menus: [
                    {
                        title: "会议议程",
                        desc: "查看活动具体会议安排",
                    },
                    {
                        title: "酒店介绍",
                        desc: "查看入住酒店名称、地址",
                    },
                    {
                        title: "常见问题",
                        desc: "报名注册如遇问题请看这里",
                    },
                    {
                        title: "购车信息",
                        desc: "查看车辆信息与供应商购车优惠",
                    },
                    {
                        title: "联系我们",
                        desc: "如需帮助，请联系我们",
                    },
                ]
            }
        },
        created() {
            this.$store.commit('SPIN')
        },
        components: {
            iButton, BottomBar,
        },

    }
</script>
<style lang="less" scoped>
    @import "../../../assets/style/home";

    .list-group-item {
        padding: 15px 10px 15px 64px !important;
    }

    .index-icon {
        top: 15px !important;
    }
</style>
