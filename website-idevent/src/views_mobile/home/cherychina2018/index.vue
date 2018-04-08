<template>
    <div>
        <div class="fd-index" v-if="user">
            <div>
                <img :src="banner" class="img-responsive"/>
            </div>
            <div class="list-group">
                <div class="list-group-left">
                    <div class="little">
                        <div class="list-group-item hotel" @click="goRouter({name:'home_page', query: {page: 'hotel'}})">
                        <!-- <div class="list-group-item hotel" @click="nobegin"> -->
                            <i class="iuifont iui-icon-hotel"></i>
                            <a href="javascript:;">
                                <h5>酒店预定</h5>
                            </a>
                        </div>
                        <div class="list-group-item venue" @click="goQuestionnaire">
                            <i class="iuifont iui-icon-venue"></i>
                            <a href="javascript:;">
                                <h5>问卷调查</h5>
                            </a>
                        </div>
                    </div>
                    <div class="big">
                        <div class="list-group-item interact" @click="goInteract">
                            <a href="javascript:;" >
                                <h5>现场互动</h5>
                                <p class="list-details">查看精彩瞬间</p>
                            </a>
                            <i class="iuifont iui-icon-camera"></i>
                        </div>
                    </div>
                    <div class="little">
                        <div class="list-group-item reception" @click="goRouter({name:'home_page', query: {page: 'reception'}})">
                            <i class="iuifont iui-icon-flight"></i>
                            <a href="javascript:;">
                                <h5>接驳安排</h5>
                            </a>
                        </div>
                        <div class="list-group-item schedule" @click="goRouter({name:'home_page', query: {page: 'schedule'}})">
                            <i class="iuifont iui-icon-schedule"></i>
                            <a href="javascript:;">
                                <h5>活动日程</h5>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="list-group-right">
                    <div class="big">
                        <div class="list-group-item register" @click="goRouter({name:'register_form'})">

                            <a href="javascript:;">
                                <h5>报名注册</h5>
                                <p class="list-details">查看报名信息</p>
                            </a>
                            <i class="iuifont iui-icon-register"></i>
                        </div>
                    </div>
                    <div class="little">
                        <div class="list-group-item common" @click="goRouter({name:'home_page', query: {page:'common'}})">
                            <i class="iuifont iui-icon-notice"></i>
                            <a href="javascript:;">
                                <h5>常见问题</h5>
                            </a>
                        </div>
                        <div class="list-group-item qrcode" @click="goRouter({name:'home_page',query:{page:'qrcode'}})">
                            <i class="iuifont iui-icon-iphoto"></i>
                            <a href="javascript:;">
                                <h5>二维码</h5>
                            </a>
                        </div>
                    </div>
                    <div class="middle">
                        <div class="list-group-item contact" @click="goRouter({name:'home_page', query: {page:'contact'}})">
                            <a href="javascript:;">
                                <h5>联系我们</h5>
                                <p class="list-details">查看联系方式</p>
                            </a>
                            <i class="iuifont iui-icon-message"></i>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>
<script>
    import iButton from "iButton"
    import {Toast} from "mint-ui"
    export default{
        data() {
            return {
            }
        },
        computed:{
            banner(){
                return this.meeting.settings.home ? this.meeting.settings.home.index_banner : '';
            }
        },
        created() {
            this.$store.commit('SPIN')
        },
        components: {
            iButton,
        },
        methods:{
            goInteract() {
                let link = this.meeting.websettings.interactlink;
                if(link == 'false'){
                    Toast('敬请期待')
                }else{
                    window.location.href = link;
                }
            },
            goQuestionnaire() {
                let btn = this.meeting.websettings.questionnaire;
                if(btn == 'false'){
                    Toast('敬请期待')
                }else{
                    this.$router.push({name:'home_page', query: {page: 'questionnaire'}})
                }
            },
            goRouter(a) {
                this.$router.push(a)
            }
        }

    }
</script>
<style lang="less" scoped>
    .list-group{
        margin:0;
        padding:2%;
        display:flex;
        justify-content: space-between;
        .list-group-left,.list-group-right{
            width:49%;
            &>div:not(:last-of-type){
                margin-bottom:4%;
            }
            .little{
                display: flex;
                justify-content:space-between;
                &>div{
                    width:48%;
                    text-align: center;
                    padding:4% 0;
                    -webkit-background-size: 100% 100%;
                    background-size: 100% 100%;
                    i {
                        color: #fff;
                        font-size:20px;
                    }
                    a{
                        color: #fff;
                    }
                }
            }
            .big,.middle{
                &>div{
                    display: flex;
                    padding:30% 0;
                    padding-left:10%;
                    -webkit-background-size: 100% 100%;
                    background-size: 100% 100%;
                    i {
                        color: #fff;
                        font-size:40px;
                        vertical-align: middle;
                    }
                    a{
                        color: #fff;
                        h5{
                            font-size:20px;
                            margin-right:15px;
                        }
                        p{
                            color: #ddd;
                        }
                    }
                }
            }
            .middle{
                &>div{
                    padding:3% 0;
                    padding-left:10%;
                    p{
                        margin-bottom:7px;
                    }
                }
            }
        }
    }
    .register{
        background: url("./images/bmzc_bg.png") 0 0 no-repeat;
    }
    .venue{
        background: url("./images/hyxz_bg.png") 0 0 no-repeat;
    }
    .reception{
        background: url("./images/jbap_bg.png") 0 0 no-repeat;
    }
    .schedule{
        background: url("./images/hdrc_bg.png") 0 0 no-repeat;
    }
    .common{
        background: url("./images/cjwt_bg.png") 0 0 no-repeat;
    }
    .qrcode{
        background: url("./images/ewm_bg.png") 0 0 no-repeat;
    }
    .interact{
        background: url("./images/xchd_bg.png") 0 0 no-repeat;
    }
    .hotel{
        background: url("./images/jdjs_bg.png") 0 0 no-repeat;
    }
    .contact{
        background: url("./images/lxwm_bg.png") 0 0 no-repeat;
    }
</style>
