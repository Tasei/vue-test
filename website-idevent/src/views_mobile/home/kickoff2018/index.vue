<template>
    <div>
        <div class="home-index">
            <div v-if="banner">
                <img :src="banner" class="img-responsive"/>
            </div>
            <div class="index-menu-kickoff clearFloat">
                <div class="left-kickoff clearFloat">
                    <div class="item lightGreen_bg middle" @click="kickoffgo({name: 'register_form'})">
                        <a>
                            <h5>报名信息</h5>
                            <p class="list-details">查看报名信息</p>
                        </a>
                        <i class="menu-icon iuifont iui-icon-register"></i>
                    </div>
                    <div class="item yellow_bg big" @click="kickoffgo({name: 'home_page', query: {page: 'schedule'}})">
                        <a>
                            <h5>日程安排</h5>
                            <p class="list-details">具体会议安排</p>
                        </a>
                        <i class="menu-icon iuifont iui-icon-schedule"></i>
                    </div>
                    <div class="clearFloat">
                        <div class="item purple_bg little " @click="kickoffgo({name:'home_page',query:{page:'flight'}})">

                            <i class="menu-icon iuifont iui-icon-flight"></i>
                            <a>
                                <h5>航班信息</h5>
                            </a>
                        </div>
                        <div class="item lightGreen_bg little floatRight" @click="kickoffgo({name: 'home_page', query: {page: 'contact'}})">
                            <i class="menu-icon iuifont iui-icon-message"></i>
                            <a>
                                <h5>联系我们</h5>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="right-kickoff clearFloat">
                    <div class="item blue_bg big" @click="kickoffLink">
                        <a>
                            <h5>活动相册</h5>
                            <p class="list-details">查看精彩瞬间</p>
                        </a>
                        <i class="menu-icon iuifont iui-icon-camera"></i>
                    </div>
                    <div class="clearFloat">
                        <div class="item purple_bg little" @click="kickoffgo({name: 'home_page',query:{page:'venue'}})">
                            <i class="menu-icon iuifont iui-icon-hotel"></i>
                            <a>
                                <h5>酒店会场</h5>
                            </a>
                        </div>
                        <div class="item yellow_bg little floatRight" @click="kickoffgointer({name: 'home_page',query:{page:'interact'}})">
                            <i class="menu-icon iuifont iui-icon-venue"></i>
                            <a>
                                <h5>晚宴互动</h5>
                            </a>
                        </div>
                    </div>
                    <div class="item green_bg middle" @click="kickoffgo({name: 'home_page',query:{page:'qrcode'}})">
                        <a>
                            <h5>电子餐券</h5>
                            <p class="list-details">用餐二维码</p>
                        </a>
                        <i class="menu-icon iuifont iui-icon-iphoto"></i>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>
<script>
    import iButton from "iButton"
    import {Toast} from "mint-ui"
    import IndexMenu from "../../components/iui/index_menu"
    import BottomBar from "./components/bottomBar"

    export default {
        data() {
            return {
            }
        },
        computed: {
            banner() {
                return this.meeting.settings.home ? this.meeting.settings.home.index_banner : '';
            },
        },
        mounted() {
            this.$store.commit('SPIN')
        },
        components: {
            iButton, BottomBar, IndexMenu
        },
        methods:{
            begin() {
                Toast('敬请期待')
            },
            kickoffgo(obj) {
                this.$router.push(obj)
            },
            kickoffgointer(obj) {
                console.log(this.meeting.websettings.is_interact_active)
                if(this.meeting.websettings.is_interact_active == 'true'){
                    this.$router.push(obj)
                }else{
                    Toast('敬请期待')
                    return
                }
            },
            kickoffLink() {
//                console.log(this)
//                Toast('敬请期待')
                window.location.href = 'https://iphoto.idevent.cn/?mid=10119'
            }
        }
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    @import "../../../assets/style/home/index.less";

    .home-index {
        background-color: #fff;
        /*background-image: url("./assets/index_bg.png");*/
        background-position: top center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>
<style lang="less" scoped rel="stylesheet/less">
    .index-menu-kickoff{
        width:100%;
        padding:5px;
    }
   .left-kickoff{
       float: left;
       width:49%
   }
    .right-kickoff{
        float: right;
        width:49%
    }
    .left-kickoff>div{
        float: left;
        width:100%;
    }
    .right-kickoff>div{
        float: left;
        width:100%;
    }
    .clearFloat{
        &:after{
            display: block;
            content:'';
            clear:both;
        }
    }
    .item{
        text-align: center;
        color:#fff;
        margin-bottom:6px;
        a{
            display: inline-block;
            vertical-align: middle;

            h5{
                font-size:21px;
                line-height:16px;
                color:#fff;
            }
            p{
                font-size:12px;
                line-height:12px;
                color: #D7F2FF;
            }
        }
        i{
            display: inline-block;
            line-height:40px;
            vertical-align: middle;
            font-size:40px;
            margin-left:8px;
        }
    }
    .lightGreen_bg{
        background-color: #5dd1d7;
    }
    .yellow_bg{
        background: #F19A45;
    }
    .purple_bg{
        background: #9C9BCB;
    }
    .blue_bg{
        background: #49B6E2;
    }
    .green_bg{
        background: #69cd6e;
    }
    .big{
        padding:57px 0px;
        padding-left:17px;
        text-align: left;
    }
    .middle{
        padding:14px 17px;
        text-align: left;
    }
    .little{
        font-size:16px;
        padding:10px 10px;
        width:49%;
        float: left;
        a{
            margin-right:0;
            h5{
                font-size:14px;
                line-height:12px;
                margin:5px 0;
            }
        }
        i{
            font-size:25px;
            display: block;
            vertical-align: middle;
            margin-left:0px;
        }
    }
    .floatRight{
        float: right;
    }
</style>
