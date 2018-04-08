<template>
    <div>
        <div class="home-index">
            <div v-if="banner">
                <img :src="banner" class="img-responsive"/>
            </div>
            <div class="index-menu-kickoff clearFloat">
                <div class="left-kickoff clearFloat">
                    <div class="item lightGreen_bg middle" @click="kickoffgo({name: 'home_page', query: {page: 'schedule'}})">
                        <a>
                            <h5>日程安排</h5>
                            <p class="list-details">查看日程信息</p>
                        </a>
                        <i class="menu-icon iuifont iui-icon-schedule"></i>
                    </div>
                    <div class="item yellow_bg big" @click="kickoffLink">
                        <a>
                            <h5>活动相册</h5>
                            <p class="list-details">查看精彩瞬间</p>
                        </a>
                        <i class="menu-icon iuifont iui-icon-camera"></i>
                    </div>
                    <div class="item purple_bg middle" @click="kickoffgo({name: 'home_page', query: {page: 'my_center'}})">
                        <a>
                            <h5>我的中心</h5>
                            <p class="list-details">查看个人信息</p>
                        </a>
                        <i class="menu-icon iuifont iui-icon-register"></i>
                    </div>
                </div>
                <div class="right-kickoff clearFloat">
                    <div class="item blue_bg big" @click="kickoffgo({name: 'home_page',query:{page:'venue'}})">
                        <a>
                            <h5>酒店介绍</h5>
                            <p class="list-details">酒店及会场信息</p>
                        </a>
                        <i class="menu-icon iuifont iui-icon-hotel"></i>
                    </div>
                    <div class="item green_bg big" @click="kickoffgo({name: 'home_page',query:{page:'interact'}})">
                        <a>
                            <h5>活动任务</h5>
                            <p class="list-details">查看具体任务</p>
                        </a>
                        <i class="menu-icon iuifont iui-icon-venue"></i>
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
                // console.log(this.meeting.websettings.is_interact_active)
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
                window.location.href = 'https://iphoto.idevent.cn/?mid=10170'
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
        border-radius: 5px;
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
                color: #fff;
                opacity: 0.7;
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
        background-color: #E2C18C;
    }
    .yellow_bg{
        background: #DC6379;
    }
    .purple_bg{
        background: #DAD279;
    }
    .blue_bg{
        background: #E096BA;
    }
    .green_bg{
        background: #7BB4DF;
    }
    .big{
        padding:57px 0px;
        padding-left:17px;
        text-align: left;
    }
    .middle{
        padding:12.5px 17px;
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
