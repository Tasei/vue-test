<template>
    <div>
        <div class="home-index">
            <div v-if="banner">
                <img :src="banner" class="img-responsive"/>
            </div>
            <lang-menu  class="text-right lang"></lang-menu>
            <index-menu :list="translated"></index-menu>
        </div>

        <bottom-bar></bottom-bar>
    </div>
</template>
<script>
    import iButton from "iButton"
    import {Toast} from "mint-ui"
    import BottomBar from "./components/bottom_bar"
    import IndexMenu from "../../../views_mobile/components/iui/index_menu.vue"
    import LangMenu from './components/login.vue'
    export default{
        locales: {
            en: {
                menus: {
                    iphoto: {
                        title:"Photo Live",
                        desc:"See conference live photos"
                    },
                    info: {
                        title: "Conference Overview",
                        desc: "About ICESAP",
                    },
                    schedule: {
                        title: "Conference Agenda",
                        desc: "See the conference agenda",
                    },
                    venue: {
                        title: "Conference Venue",
                        desc: "Conference site profile",
                    },
                    partner: {
                        title: "Sponsors",
                        desc: "View conference partners and sponsors",
                    },
                    contact: {
                        title: "Contact Us",
                        desc: "If you need any help, please contact us",
                    },
                }
            },
            zh: {
                menus: {
                    iphoto: {
                        title: "照片直播",
                        desc: "查看大会精彩瞬间",
                    },
                    info: {
                        title: "大会介绍",
                        desc: "查看组织机构名录",
                    },
                    schedule: {
                        title: "大会日程",
                        desc: "查看大会议程",
                    },
                    venue: {
                        title: "大会场地",
                        desc: "大会场地简介",
                    },
                    partner: {
                        title: "合作伙伴",
                        desc: "查看合作伙伴",
                    },
                    contact: {
                        title: "联系我们",
                        desc: "如需帮助，请联系我们",
                    },
                }
            }
        },
        data(){
            return {

            }
        },
        computed: {
            banner(){
                return this.meeting.settings.home ? this.meeting.settings.home.index_banner : '';
            },
            translated() {
                return [{
                    icon: "iphoto",
                    title: this.$t('menus.iphoto.title'),
                    desc: this.$t('menus.iphoto.desc'),
                    link: 'https://iphoto.idevent.cn/?mid=44',
                },{
                    icon: "agency",
                    title: this.$t('menus.info.title'),
                    desc: this.$t('menus.info.desc'),
                    route_to: {name: 'home_page', query: {page: 'info'}}
                }, {
                    icon: "schedule",
                    title: this.$t('menus.schedule.title'),
                    desc: this.$t('menus.schedule.desc'),
                    route_to: {name: 'home_page', query: {page: 'schedule'}}
                }, {
                    icon: "hotel",
                    title: this.$t('menus.venue.title'),
                    desc: this.$t('menus.venue.desc'),
                    route_to: {name: 'home_page', query: {page: 'venue'}}
                }, {
                    icon: "brand",
                    title: this.$t('menus.partner.title'),
                    desc: this.$t('menus.partner.desc'),
                    route_to: {name: 'home_page', query: {page: 'partner'}}
                }, {
                    icon: "message",
                    title: this.$t('menus.contact.title'),
                    desc: this.$t('menus.contact.desc'),
                    route_to: {name: 'home_page', query: {page: 'contact'}}
                }];
            }
        },
        mounted() {
            this.$store.commit('SPIN')
        },
        components: {
            iButton, BottomBar, IndexMenu, LangMenu
        }
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    @import "../../../assets/style/home/index.less";
    .home-index {
        background-color: #f3f3f3;
    }
    .lang {
        margin:10px 0;
    }
</style>
