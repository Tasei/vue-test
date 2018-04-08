<template>
    <div class="schedule-box">
        <div class="bg">
            <div class="step" v-for="p in list">
                <div class="step-title">
                    <div class="left">
                        <i class="radius"></i>
                        <span class="text">{{p.title.date}}</span>
                    </div>
                    <div class="right font-bold">{{p.title.title}}</div>
                    <div style="clear:both"></div>
                </div>
                <div class="step-content">
                    <div class="item" v-for="d in p.content">
                        <div class="left">
                            <span class="text text-dark">{{d.date}}</span>
                        </div>
                        <div class="right text-dark">
                            <p class="title">{{d.title}}</p>
                            <ul v-for="guest in d.guests" class="branchLink"><li>{{guest}}</li></ul>
                        </div>
                        <div style="clear:both"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hotel-introduce-content">
            <h4 v-if="user.group.name == '媒体2'||user.group.name == '媒体1'">【2018友邦中国新闻发布会】动线图</h4>
            <img src="../assets/MEDIA_AM.jpg" alt="" v-if="user.group.name == '媒体2'||user.group.name == '媒体1'">
            <h4 v-if="user.group.name == '媒体2'">【小组采访、专访】动线图</h4>
            <img src="../assets/MEDIA_PM.jpg" alt="" v-if="user.group.name == '媒体2'">
            <h4 v-if="user.group.name == 'VIP'">【2018友邦中国新闻发布会】动线图</h4>
            <img src="../assets/VIP_AM.jpg" alt="" v-if="user.group.name == 'VIP'">
            <h4 v-if="user.group.name == 'VIP'">【小组采访、专访】动线图</h4>
            <img src="../assets/VIP_PM.jpg" alt="" v-if="user.group.name == 'VIP'">
        </div>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                btnDetail:true,
                branchLink:false,
                list:[],
                detailSchedule0:[//媒体2group_id:260
                    {
                        title: {title: "到达胡志明市", date: "4月18日"},
                    },
                    {
                        title:{title:'2018友邦中国新闻发布会',date:'4月19日上午'},
                        content:[
                            {
                                date: '9:30-10:00',
                                title: '媒体签到'
                            },
                            {
                                date: '10:00-10:05',
                                title: '开场',
                                link:['ABL','AQT','Sampler','TCM','HemoCue']
                            },
                            {
                                date: '10:05-11:05',
                                title: '嘉宾主题演讲',
                                guests:['友邦中国首席执行官','友邦中国首席业务执行官','友邦中国首席多远渠道官','友邦中国首席客户官']
                            },
                            {
                                date:'11:05-11:40',
                                title:'媒体问答'
                            },
                            {
                                date:'11:40-11:50',
                                title:'结束退场',
                                desc:'Henrik Brandborg'
                            },
                            {
                                date:'11:50-13:30',
                                title:'酒店午餐',
                            },
                        ]
                    },
                    {
                        title:{title:'小组采访、专访',date:'4月19日下午'},
                        content:[
                            {
                                date:'13:45-14:00',
                                title:'媒体签到',
                            },
                            {
                                date:'14:00-14:05',
                                title:'开场',
                            },
                            {
                                date:'14:05-15:35',
                                title:'媒体群访',
                            },
                            {
                                date:'15:35-15:45',
                                title:'结束退场',
                            },
                        ]
                    },
                    {
                        title: {title: "欢迎晚宴", date: "4月19日晚上"},
                    },
                    {
                        title: {title: "参观友邦越南", date: "4月20日"},
                    },
                    {
                        title: {title: "离开胡志明市返程", date: "4月21日"},
                    },
                ],
                detailSchedule1:[//媒体1（领导）group_id:261
                    {
                        title: {title: "到达胡志明市", date: "4月18日"},
                    },
                    {
                        title:{title:'2018友邦中国新闻发布会',date:'4月19日上午'},
                        content:[
                            {
                                date: '9:30-10:00',
                                title: '媒体签到'
                            },
                            {
                                date: '10:00-10:05',
                                title: '开场',
                                link:['ABL','AQT','Sampler','TCM','HemoCue']
                            },
                            {
                                date: '10:05-11:05',
                                title: '嘉宾主题演讲',
                                guests:['友邦中国首席执行官','友邦中国首席业务执行官','友邦中国首席多远渠道官','友邦中国首席客户官']
                            },
                            {
                                date:'11:05-11:40',
                                title:'媒体问答'
                            },
                            {
                                date:'11:40-11:50',
                                title:'结束退场',
                                desc:'Henrik Brandborg'
                            },
                            {
                                date:'11:50-13:30',
                                title:'酒店午餐',
                            },
                        ]
                    },
                    {
                        title: {title: "欢迎晚宴", date: "4月19日晚上"},
                    },
                    {
                        title: {title: "参观友邦越南", date: "4月20日"},
                    },
                    {
                        title: {title: "离开胡志明市返程", date: "4月21日"},
                    },
                ],
                detailSchedule2:[//VIPgroup_id:262
                    {
                        title: {title: "到达胡志明市", date: "4月18日"},
                    },
                    {
                        title:{title:'2018友邦中国新闻发布会',date:'4月19日上午'},
                    },
                    {
                        title: {title: "欢迎晚宴", date: "4月19日晚上"},
                    },
                    {
                        title: {title: "参观友邦越南", date: "4月20日"},
                    },
                    {
                        title: {title: "离开胡志明市返程", date: "4月21日"},
                    },
                ],
            }
        },
        created() {
            this.getSchedule();
        },
        mounted() {
            this.$store.commit('SPIN')
        },
        methods:{
            getSchedule() {
                console.log(this.user);
                if (this.user.group.name == "媒体2") {
                    this.list = this.detailSchedule0;
                }else if (this.user.group.name == "媒体1") {
                    this.list = this.detailSchedule1;
                }else if (this.user.group.name == "VIP") {
                    this.list = this.detailSchedule2;
                }
            },
        }
    }
</script>
<style lang="less" scoped>
    .col-xs-4, .col-xs-8 {
        padding: 0;
    }
    .bg {
        padding: 40px 0;
        padding-bottom:0;
        /*min-height: 100vh;*/
    }
    .left {
        width: 130px;
        float: left;
    }

    .right {
        margin-left: 130px;
    }
    .step-title {
        padding-bottom: 30px;
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
                background: #E7BEBE;
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
                background: #E7BEBE;
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
                background-color: #DC6379;
                color: #fff;
                padding: 0 5px;
                border-radius: 1px;
                position: relative;
                &:before {
                    content: '';
                    width: 0;
                    height: 0;
                    border-top: 3px solid transparent;
                    border-left: 6px solid #DC6379;
                    border-bottom: 3px solid transparent;
                    position: absolute;
                    right: -6px;
                    top: 50%;
                    margin-top: -4px;
                }
            }
        }
        .right {
            font-size: 15px;
            color: #DC6379;
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
                background: #E7BEBE;
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
            background: #ACACAC;
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
            .step-content {
                .item:last-child:after {
                    top: 0;
                    height: 8px;
                }
            }
        }
    }
    .branchLink{
        margin-bottom: 0;
        li{
            padding: 5px 0 0 10px;

        }
        
    }
    .hotel-introduce-content{
        text-align: center;
    }
</style>
