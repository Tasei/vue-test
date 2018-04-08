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
                            <p v-html="d.desc" class="text-desc"></p>
                            <div v-for="a in d.link" class="branchLink"><p @click="branchLinkFn(a)">{{a}}</p></div>
                        </div>
                        <div style="clear:both"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="btnDetail-box">
            <Button v-if="btnDetail&&!branchLink" @click="btnDetailFn">详细日程</Button>
            <Button v-if="!btnDetail&&!branchLink" @click="btnDetailFn">返回</Button>
            <Button v-if="branchLink" @click="BtnBranchLink">返回</Button>
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
                schedule: [
                    {
                        title: {title: "第一天", date: "1.22"},
                        content: [
                            {
                                date: '全天',
                                title: '入住'
                            },
                        ]
                    },
                    {
                        title: {title: "第二天", date: "1.23"},
                        content: [
                            {
                                date: '06:00-08:30',
                                title: '早餐'
                            },
                            {
                                date: '08:30-12:00',
                                title: '产品会议(根据产品分组参加)',
                            },
                            {
                                date: '12:00-13:30',
                                title: '午餐',
                            },
                            {
                                date:'13:30-17:00',
                                title:'全体大会'
                            },
                            {
                                date:'18:00-21:00',
                                title:'晚宴–酒店'
                            }
                        ]
                    },
                    {
                        title: {title: "第三天", date: "1.24"},
                        content: [
                            {
                                date: '06:00-08:30 ',
                                title: '早餐及退房'
                            },
                            {
                                date: '08:30-09:00',
                                title: '团建集合'
                            },
                            {
                                date:'09:00-15:00',
                                title:'团建及午餐'
                            },
                            {
                                date:'15:00-15:30 ',
                                title:'返回威斯汀酒店'
                            }
                        ]
                    },
                ],
                detailSchedule:[
                    {
                        title:{title:'第一天',date:'1.22'},
                        content:[
                            {
                                date:'全天',
                                title:'入住'
                            }
                        ]
                    },
                    {
                        title:{title:'第二天',date:'1.23'},
                        content:[
                            {
                                date: '06:00-08:30',
                                title: '早餐'
                            },
                            {
                                date: '08:30-12:00',
                                title: '产品会议(根据产品分组参加)',
                                link:['ABL','AQT','Sampler','TCM','HemoCue']
                            },
                            {
                                date: '12:00-13:30',
                                title: '午餐',
                            },
                            {
                                date:'13:30-17:00',
                                title:'全体大会'
                            },
                            {
                                date:'13:30-14:15 ',
                                title:'Henrik’s Speech',
                                desc:'Henrik Brandborg'
                            },
                            {
                                date:'14:15-14:35 ',
                                title:'Lars’ Speech',
                                desc:'Lars Secher'
                            },
                            {
                                date:'14:35-14:55',
                                title:'Lyn’s Speech',
                                desc:'Lyn Bourke'
                            },
                            {
                                date:'14:55-15:10',
                                title:'茶歇',
                                desc:''
                            },
                            {
                                date:'15:10-16:00 ',
                                title:'2018-2020年市场策略',
                                desc:'Angela Zhang'
                            },
                            {
                                date:'16:00-16:20 ',
                                title:'2018年销售策略',
                                desc:'Kevin Jing'
                            },
                            {
                                date:'16:20-16:40',
                                title:'2017年财务表现',
                                desc:'Vivian Xu'
                            },
                            {
                                date:'16:40-17:00',
                                title:'总结与展望',
                                desc:'Marvin Miao'
                            },
                            {
                                date:'18:00-21:00 ',
                                title:'晚宴',
                                desc:''
                            },

                        ]
                    },
                    {
                        title: {title: "第三天", date: "1.24"},
                        content: [
                            {
                                date: '06:00-08:30 ',
                                title: '早餐及退房'
                            },
                            {
                                date: '08:30-09:00',
                                title: '团建集合'
                            },
                            {
                                date:'09:00-15:00',
                                title:'团建及午餐'
                            },
                            {
                                date:'15:00-15:30 ',
                                title:'返回威斯汀酒店'
                            }
                        ]
                    },
                ],
                ABL:[
                    {
                        title: {title: "产品会议-ABL会议日程安排", date: "1.23"},
                        content: [
                            {
                                date:'09:00-09:45',title:'2017销售回顾 + 2018计划',desc:'Kevin Jing / Yamy Yang'
                            },
                            {
                                date:'09:45-10:30',title:'血气质控和AQM 2018年推广计划',desc:'Howard Zhang'
                            },
                            {
                                date:'10:30-10:40',title:'茶歇',desc:''
                            },
                            {
                                date:'10:40-11:10',title:'血气上量经验分享',desc:'AS'
                            },
                            {
                                date:'11:10-11:40',title:'ABL80 乳酸质量现状',desc:'ND Wang'
                            },
                            {
                                date:'11:40-12:00',title:'以AQURE为核心的销售模式经验分享',desc:'Zhou Decai, Sichuan ABheaLth'
                            },

                        ]
                    },
                ],
                AQT:[
                    {
                        title:{title:'产品会议 - AQT会议日程安排',date:'1.23'},
                        content:[
                            {date:'09:00-09:30',title:'2017销售回顾 + 2018计划 ',desc:'Qun Wang'},
                            {date:'09:30-10:10',title:'PCT 2018年推广方向',desc:'Aaron Zhang'},
                            {date:'10:10-10:30',title:'ITS',desc:'Frank Ying'},
                            {date:'10:30-10:45',title:'茶歇',desc:''},
                            {date:'10:45-11:15',title:'胸痛中心经验分享',desc:'Darwin Zhu'},
                            {date:'11:15-12:00',title:'胸痛中心建设与认证流程解读',desc:'Jeffery Wang'},
                        ]
                    }
                ],
                Sampler:[
                    {
                        title:{title:'产品会议 - Sampler会议日程安排',date:'1.23'},
                        content:[
                            {date:'9:00-10:00',title:'2017年回顾 + 2018年销售策略',desc:'Alex Zong',},
                            {date:'10:00-10:15',title:'茶歇',desc:'',},
                            {date:'10:15-11:15',title:'2017年市场分析 + 2018年市场策略',desc:'Happy  Wan',},
                            {date:'11:15-11:30',title:'业务讨论',desc:'',},
                            {date:'11:30-12:00',title:'总结',desc:'Alex Zong',},
                        ]
                    }
                ],
                TCM:[
                    {
                        title:{title:'产品会议 - TCM会议日程安排',date:'1.23'},
                        content:[
                            {date:'8:30-9:00',title:'2017年回顾 + 2018年展望',desc:'Angela Zhang'},
                            {date:'9:00-9:30',title:'TCM市场情况与成功案例',desc:'Dash Dong'},
                            {date:'9:30-10:00',title:'TCM维修情况',desc:'Jack Chu'},
                            {date:'10:00-10:10',title:'茶歇',desc:''},
                            {date:'10:10-12:00',title:'Value Selling + 销售应用常见问题讨论',desc:'Franz von Wirth'},
                        ]
                    }
                ],
                HemoCue:[
                    {
                        title:{title:'产品会议 - HemoCue会议日程安排',date:'1.23'},
                        content:[
                            {date:'09:00-09:30',title:'HemoCue整体业务回顾',desc:'Evelyn Tan',},
                            {date:'09:30-10:30',title:'血红蛋白检测市场回顾和展望',desc:'Adam Chen',},
                            {date:'10:30-10:45',title:'茶歇',desc:'',},
                            {date:'10:45 -11:30',title:'HemoCue系列售后服务政策和流程介绍',desc:'Brando Yin & Adam Chen',},
                            {date:'11:30-11:45',title:'提问和讨论',desc:'All',},
                            {date:'11:45-12:00',title:'总结',desc:'Evelyn Tan',},
                        ]
                    }
                ]
            }
        },
        created() {
            this.getSchedule()
        },
        mounted() {
            this.$store.commit('SPIN')
        },
        methods:{
            btnDetailFn () {
                this.btnDetail = !this.btnDetail;
                this.getSchedule();
            },
            getSchedule() {
                if(this.btnDetail){
                    this.list = this.schedule;
                }else{
                    this.list = this.detailSchedule
                }
            },
            BtnBranchLink() {
                this.branchLink = !this.branchLink;
                this.list = this.detailSchedule;
            },
            branchLinkFn(a) {
                this.branchLink = !this.branchLink;
                console.log(a)
                if(a == 'ABL'){
                    this.list = this.ABL
                }else if(a == 'AQT'){
                    this.list = this.AQT
                }else if(a == 'Sampler'){
                    this.list = this.Sampler
                }else if(a == 'TCM'){
                    this.list = this.TCM
                }else if(a == 'HemoCue'){
                    this.list = this.HemoCue
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
                background: #00549c;
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
                background: #00549c;
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
                background-color: #1F9BD1;
                color: #fff;
                padding: 0 5px;
                border-radius: 1px;
                position: relative;
                &:before {
                    content: '';
                    width: 0;
                    height: 0;
                    border-top: 3px solid transparent;
                    border-left: 6px solid #1F9BD1;
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
            color: #1F9BD1;
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
                background: #00549c;
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
            background: #00549c;
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
        color: #1F9BD1;
        text-decoration:underline;
        margin-bottom:10px;
    }
    .text-desc{
        color: #999;
    }

    .btnDetail-box{
        padding-bottom: 20px;
        width:100%;
        text-align: center;
        button{
            background: #1F9BD1;
            color: #fff;
            display: inline-block;
            width:100px;
            line-height:40px;
            border:1px solid #1F9BD1;
            -webkit-border-radius: 3px;
            -moz-border-radius: 3px;
            border-radius: 3px;
        }
    }
</style>
