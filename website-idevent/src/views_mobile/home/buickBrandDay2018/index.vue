<template>
    <div>
        <div class="home-index">
            <div v-if="banner" class="home-index-banner">
                <img :src="banner" class="img-responsive"/>
            </div>
            <index-menu :list="list"></index-menu>
            <div class="recipetionAlert-wraper" v-if="recipetionAlert && isAgency == '经销商'">
                <div class="recipetionAlert">
                    <i class="menu-icon iuifont iui-icon-close close-icon" @click="recipetionAlertFn"></i>
                    <h5 class="recipetionAlert-title">接机服务</h5>
                    <h5>接机时间：</h5>
                    <p>4月17日,10:00-16:00,每小时一班</p>
                    <h5>接机地点：</h5>
                    <p>上海虹桥国际机场T1航站楼&T2航站楼抵达出口、杭州萧山国际机场抵达出口、嘉兴南站抵达出口、桐乡火车站抵达出口
                    </p>
                    <p>(请留意现场工作人员手举牌指引)</p>
                </div>
            </div>
        </div>
        <bottom-bar></bottom-bar>
    </div>
</template>
<script>
    import iButton from "iButton"
    import {Toast} from "mint-ui"
    import BottomBar from "./components/bottom_bar"
    import IndexMenu from "../../components/iui/index_menu.vue"
    import iuiBlock from "../../components/iui/block.vue"
    import iuiTitle from "../../components/iui/block_title.vue"

    export default{
        data() {
            return {
                recipetionAlert:true,
                isAgency:'',
                list: [
                    {
                        icon: "register",
                        title: "报名注册",
                        desc: "填写个人信息",
                        route_to: {name: 'register_form'}
                    },
                    {
                        icon: "schedule",
                        title: "活动日程",
                        desc: "查看活动具体日程安排",
                        route_to: {name: 'home_page', query: {page: 'schedule'}}
                    },
                    {
                        icon: "venue",
                        title: "活动场地",
                        desc: "查看场地信息和地图",
                        route_to: {name: 'home_page', query: {page: 'venue'}}
                    },
                    {
                        icon: "hotel",
                        title: "酒店介绍",
                        desc: "查看酒店信息",
                        route_to: {name: 'home_hotel'}
                    },
                    {
                        icon: "flight",
                        title: "接送机安排",
                        desc: "查看接送机信息",
                        route_to: {name: 'home_page', query: {page: 'pickup'}}
                    },
                    {
                        icon: "notice",
                        title: "常见问题",
                        desc: "报名注册如遇问题请看这里",
                        route_to: {name: 'home_page', query: {page: 'common'}}
                    },
                    {
                        icon: "message",
                        title: "联系我们",
                        desc: "如需帮助，请联系我们",
                        route_to: {name: 'home_page', query: {page: 'contact'}}
                    },
                ]
            }
        },
        computed: {
            banner(){
                return this.meeting.settings.home?this.meeting.settings.home.index_banner:'';
            },
        },
        components: {
            iButton, BottomBar, IndexMenu,iuiBlock,iuiTitle
        },
        created(){
            this.isAgency = this.user.group.name;
        },
        mounted() {
            this.$store.commit('SPIN', false);
            this.isFirstFn();
        },
        methods:{
            recipetionAlertFn(){
                this.recipetionAlert = false;
            },
            isFirstFn(){
                console.log(this.isAgency)
                if(this.isAgency != '经销商'){
                    this.isAgency = '';
                    return
                }
                console.log(this.$cookie.get('buickWelcome'))

                if(this.$cookie.get('buickWelcome')=="buickOk"){
                    this.recipetionAlert =false;
                    return;
                }else{
                    this.$cookie.set('buickWelcome', 'buickOk', { expires: '10m' });
                    this.recipetionAlert =true;
                    return;
                }

            },
        }
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    @import "../../../assets/style/home/index.less";
</style>
<style lang="less" scoped rel="stylesheet/less">
  .recipetionAlert-wraper{
      position: fixed;
      top:0;
      right:0;
      bottom:0;
      left:0;
      background-color: rgba(0,0,0,0.5);
      .recipetionAlert{
          position: absolute;
          top:50%;
          left:50%;
          transform: translate(-50%,-50%);
          width:80%;

          background: #fff;
          padding:30px;

          -webkit-border-radius: 10px;
          -moz-border-radius: 10px;
          border-radius: 10px;
          .recipetionAlert-title{
              font-size:16px;
              font-weight: 700;
          }
          .close-icon{
              position: absolute;
              right:10px;
              top:5px;
              font-size:30px;
          }
      }
  }
</style>

