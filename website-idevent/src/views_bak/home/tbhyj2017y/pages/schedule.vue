<template>
    <div>
        <iui-bg></iui-bg>
        <div class="sheduleImg">
            <img src="../images/rc.jpg" alt="">
        </div>
        <!--<div style="margin: 40px">-->
            <!--<div class="iui-schedule">-->
                <!--<div class="step" v-for="p in list">-->
                    <!--<div class="step-title">-->
                        <!--<div class="left ">-->
                            <!--<i class="radius"></i>-->
                            <!--<span class="text left-date">{{p.title.date}}</span>-->
                        <!--</div>-->
                        <!--<div class="right font-bold right-date " v-html="p.title.title"></div>-->
                        <!--<div style="clear:both"></div>-->
                    <!--</div>-->
                    <!--<div class="step-content">-->
                        <!--<div class="item" v-for="d in p.content">-->
                            <!--<div class="left">-->
                                <!--<span class="text text-dark">{{d.date}}</span>-->
                            <!--</div>-->
                            <!--<div class="right text-dark">-->
                                <!--<p :class="{'title':true,'district':d.district}" v-html="d.title"></p>-->
                                <!--<p class="desc" v-html="d.desc"></p>-->
                            <!--</div>-->
                            <!--<div style="clear:both"></div>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->

        <!--<div class="Btnhome">-->
            <!--<btn-home></btn-home>-->
        <!--</div>-->
        <!--<div class="fiedNav">-->
            <!--<div class="bottom-bar-item">-->
                <!--<router-link :to="{name:'home_page',query: {page: 'programList'}}">-->
                    <!--<i class="bar-icon bar-icon-jmd"></i>-->
                    <!--&lt;!&ndash;<small>节目单</small>&ndash;&gt;-->
                <!--</router-link>-->
            <!--</div>-->
            <!--<div class="bottom-bar-item">-->
                <!--<router-link :to="{name:'home_page',query: {page: 'productList'}}">-->
                    <!--<i class="bar-icon bar-icon-cpd"></i>-->
                    <!--&lt;!&ndash;<small>产品清单</small>&ndash;&gt;-->
                <!--</router-link>-->
            <!--</div>-->
        <!--</div>-->
    </div>
</template>
<script>
    import iuiTimeline from "../../../../views_mobile/components/iui/schedule.vue"
    import iuiBg from "../../../../views_mobile/components/iui/page_bg.vue"
    import btnHome from "../components/btn_home.vue"

    export default{
        components: {iuiTimeline, iuiBg, btnHome},
        data(){
            return {
                list: [
                    {
                        title: {date: '2017-12-07', title: '议程'},
                        content: [
                            {date: '08:30-09:30', title: '营运年度工作报告', desc: '发言人：周晓楠 <br/>主持人：刘炳奎'},
                            {date: '09:30-10:10', title: '核保核赔部工作报告', desc: '发言人：盛为 <br/>主持人：刘炳奎'},
                            {date: '10:30-11:10', title: '客户服务部工作报告', desc: '发言人：张雷 <br/>主持人：盛为'},
                            {date: '11:10-11:50', title: '创新应用部工作报告', desc: '发言人：宋威 <br/>主持人：盛为'},
                            {date: '12:00', title: '午餐', desc: ''},
                            {date: '13:30-14:10', title: '营运企划部工作报告', desc: '发言人：刘炳奎 <br/>主持人：宋威'},
                            {date: '14:10-15:30', title: '分公司经验分享', desc: '发言人：深圳、广西、广东、河北 <br/>主持人：宋威'},
                            {date: '15:50-16:30', title: '客户行为白皮书发布', desc: '发言人：朱冬梅 <br/>主持人：张雷'},
                            {date: '16:30-17:00', title: '最美柜员决赛', desc: '发言人：最美柜员 <br/>主持人：张雷'},
                            {date: '16:50-17:20', title: '会议总结', desc: '发言人：周晓楠 <br/>主持人：张雷'},
                            {date: '17:30', title: '晚餐', desc: ''},
                            {date: '18:30-21:00',district:'zhengzhou', title: '郑州营运中心片区会', desc: ''},
                            {date: '', title: '2017年工作回顾及2018年工作规划', desc: '发言人：邹邦虎 <br/>主持人：邹邦虎'},
                            {date: '', title: '作业点评及2018年服务举措', desc: '发言人：刘  志 王笑倩 <br/>主持人：邹邦虎'},
                            {date: '', title: '分公司经验分享', desc: '发言人：山西、河北、豫东、甘肃 <br/>主持人：邹邦虎'},
                            {date: '', title: '沟通交流', desc: '主持人：邹邦虎'},
                            {date: '18:30-21:00',district:'changsha', title: '长沙营运中心片区会', desc: ''},
                            {date: '', title: '2017年工作回顾及2018年工作规划', desc: '发言人：孙建军 <br/>主持人：孙建军'},
                            {date: '', title: '作业点评及2018年服务举措', desc: '发言人：刘洪涌 谭  文 <br/>主持人：孙建军'},
                            {date: '', title: '分公司经验分享', desc: '发言人：海南、安徽、江苏、福建 <br/>主持人：孙建军'},
                            {date: '', title: '沟通交流', desc: '主持人：孙建军'},
                        ]
                    },
                    {
                        title: {date: '2017-12-08', title: ''},
                        content: [
                            {date: '09:00-10:00', title: '新产品发布', desc: ''},
                            {date: '10:30-12:00', title: '海燕奖表彰', desc: '主持人：王亚东 陈风波'},
                            {date: '12:15', title: '午餐', desc: ''},
                            {date: '下午', title: '返程', desc: ''},
                        ]
                    },
                ],
            }
        },
        mounted() {
            this.$store.commit('SPIN', false)
        },
    }
</script>
<style lang="less" scoped>
    .sheduleImg{
        width:100%;
    }
    @brand-primary: #00549c;
    .iui-schedule {
        margin: 30px auto;
        color: #333;

        .left {
            width: 130px;
            float: left;
        }

        .right {
            margin-left: 130px;
        }

        .step-title {
            padding-bottom: 40px;
            position: relative;
            .left {
                height: 19px;
                line-height: 19px;
                text-align: right;
                padding-right: 27px;
                position: relative;
                &:before {
                    content: '';
                    width: 10px;
                    height: 10px;
                    background: @brand-primary;
                    opacity: 0.6;
                    position: absolute;
                    display: block;
                    border-radius: 50%;
                    right: 4px;
                    top: 50%;
                    margin-top: -5px;
                }

                .radius {
                    width: 18px;
                    height: 18px;
                    background: @brand-primary;
                    opacity: 0.15;
                    position: absolute;
                    display: block;
                    border-radius: 50%;
                    right: 0;
                    top: 50%;
                    margin-top: -9px;
                }
                span.text {
                    display: inline-block;
                    padding: 0 5px;
                    border-radius: 1px;
                    position: relative;

                }
            }
            .right {
                font-size: 15px;
                line-height: 19px;
                padding-left: 15px;
            }
        }

        .step-content {
            .item {
                padding-bottom: 30px;
                position: relative;
            }
            .left {
                height: 15px;
                line-height: 15px;
                text-align: right;
                padding-right: 27px;
                position: relative;
                &:before {
                    content: '';
                    width: 8px;
                    height: 8px;
                    background: @brand-primary;
                    opacity: 0.4;
                    position: absolute;
                    display: block;
                    border-radius: 50%;
                    right: 5px;
                    top: 50%;
                    margin-top: -4px;
                }
                span.text {
                    display: inline-block;
                }
            }
            .right {
                font-size: 13px;
                padding-left: 15px;
                p {
                    margin-bottom: 5px;
                    line-height: 1;
                }
                p.title {
                    font-size: 15px;
                }
            }
        }

        .item, .step-title {
            &:after {
                content: '';
                width: 4px;
                background: @brand-primary;
                opacity: 0.1;
                position: absolute;
                display: block;
                left: 119px;
                height: 100%;
                top: 0;
            }
        }

        .step {
            &:first-child {
                .step-title:after {
                    top: 7px
                }
            }
            &:last-child {
                .step-title{
                    margin-bottom: 0;
                    padding-bottom: 40px;
                }
                .step-content {
                    .item:last-child:after {
                        top: 0;
                        height: 8px;
                    }
                }
            }
        }
    }


    .caution{
        color:red;
        font-weight: bold;
        font-size:15px;
    }

    .left-date{
        color:white;
        background-color: #00549C;
    }
    .right-date{
        color: #00549C;
        font-weight: 700;
    }

    .text-yaoqiu{
        /*font-size:12px;*/
    }
    .iui-page-bg{
        background-image: none;
    }
    .Btnhome{
        a{
            margin:0 !important;
        }
    }
    .district{
        color: @brand-primary;
    }
    .desc{
        font-size: 12px;
        color: #999;
    }
    .fiedNav{
        position: fixed;
        bottom:40px;
        right:20px;
    }
    .bottom-bar-item{
        width:40px;
        height:40px;
        border:1px solid #ddd;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        margin-bottom:10px;
        .bar-icon{
            width: 100%;
            height: 100%;
            display: block;
            margin: 0 auto 4px;
            background-size: 100% auto;
            &.bar-icon-jmd{
                background-image: url('../images/jiemuHei.png');
            }
            &.bar-icon-cpd{
                background-image: url('../images/chanpin.png');
            }
        }
    }
</style>
