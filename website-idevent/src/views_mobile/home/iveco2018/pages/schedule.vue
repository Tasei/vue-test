<template>
    <div>
        <iui-schedule :list="schedule"></iui-schedule>
        <div class="btnDetail-box">
            <Button @click="btnDetailFn" v-if="btnDetail">详细日程</Button>
            <Button @click="btnDetailFn" v-if="!btnDetail">返回</Button>
        </div>

    </div>
</template>

<script>
    import iuiSchedule from "../../../components/iui/schedule.vue"

    export default {
        components: {iuiSchedule},
        data() {
            return {
                btnDetail:true,
                schedule: [
                    {
                        title: {title: "第一天", date: "17-12-17"},
                        content: [
                            {
                                date: '09:00-18:00',
                                title: '客户报到'
                            }
                        ]
                    },
                    {
                        title: {title: "第二天", date: "17-12-18"},
                        content: [
                            {
                                date: '09:00-22:00',
                                title: '嘉宾报到'
                            },
                            {
                                date: '09:30-11:30',
                                title: '新时代中国重卡行业变革与趋势-高峰论坛',
                            },
                            {
                                date: '13:30-16:30',
                                title: '主题活动',
                            },
                            {
                                date: '18:30-20:00',
                                title: '互联网梦想卡车首发',
                            },
                        ]
                    },
                    {
                        title: {title: "第三天", date: "17-12-19"},
                        content: [
                            {
                                date: '08:30-12:05',
                                title: '主题大会'
                            },
                            {
                                date: '12:05-12:10',
                                title: '合影'
                            },
                            {
                                date: '14:00-18:00',
                                title: '营销分会'
                            },
                            {
                                date: '18:00-21:00',
                                title: '颁奖晚宴'
                            },
                        ]
                    }
                ],

                scheduleTheme:[
                    {
                        title: {title: "第一天", date: "17-12-18"},
                        content: [
                            {
                                date: '09:00-22:00',
                                title: '嘉宾报到'
                            },
                            {
                                date:'17:00-21:00',
                                title:'晚餐'
                            }
                        ]
                    },
                    {
                        title: {title: "第二天", date: "17-12-19"},
                        content: [
                            {
                                date: '08:30-12:05',
                                title: '主题大会'
                            },
                            {
                                date:'12:05-12:10',
                                title:'合影'
                            },
                            {
                                date:'13:30-17:30',
                                title:'营销分会'
                            },
                            {
                                date:'18:18-21:00',
                                title:'颁奖晚宴'
                            },
                        ]
                    },
                    {
                        title: {title: "第三天", date: "17-12-20"},
                        content: [
                            {
                                date: '11:00',
                                title: '返程',
//                                desc:'11:00前'
                            },
                        ]
                    },
                ],
                scheduleThemeDetail: [
                    {
                        title: {title: "第一天", date: "17-12-18"},
                        content: [
                            {
                                date: '09:00-22:00',
                                title: '嘉宾报到',
                                desc:'酒店大厅'
                            },
                        ]
                    },
                    {
                        title: {title: "第二天", date: "17-12-19"},
                        content: [
                            {
                                date: '06:30-08:30',
                                title: '早餐',
                                desc:'酒店西餐厅'
                            },
                            {
                                date: '08:30-12:05',
                                title: '主题大会',
                                desc:'亚洲论坛国际会议中心'
                            },
                            {
                                date: '12:05-12:10',
                                title: '合影',
                                desc:'南广场台阶'
                            },
                            {
                                date: '12:10-12:30',
                                title: '参观展车',
                                desc:'南广场'
                            },
                            {
                                date: '12:30-13:30',
                                title: '工作午餐',
                                desc:'怡景西餐厅/聚贤阁'
                            },
                            {
                                date: '13:00-14:00',
                                title: '媒体见面会',
                                desc:'云亭'
                            },
                            {
                                date: '13:30-17:30',
                                title: '经销商分会',
                                desc:'东屿岛酒店万泉厅'
                            },
                            {
                                date: '13:30-17:30',
                                title: '服务商分会',
                                desc:'东屿多功能AB厅'
                            },
                            {
                                date: '13:30-17:30',
                                title: '专用、委改分会',
                                desc:'东屿岛酒店海景会议室'
                            },
                            {
                                date: '13:30-17:30',
                                title: '配件中心库分会',
                                desc:'会议中心孔雀1'
                            },
                            {
                                date: '13:30-17:30',
                                title: '国际业务分会',
                                desc:'会议中心孔雀2'
                            },
                            {
                                date: '18:00-18:18',
                                title: '嘉宾入场',
                                desc:'亚洲论坛国际会议中心'
                            },
                            {
                                date: '18:18-18:58',
                                title: '颁奖盛典',
                                desc:'亚洲论坛国际会议中心'
                            },
                            {
                                date: '18:58-21:00',title: '晚宴',desc:'亚洲论坛国际会议中心'
                            },
                        ]
                    },
                    {
                        title: {title: "第三天", date: "17-12-20"},
                        content: [
                            {
                                date: '11:00',title: '返程',desc:'亚洲论坛国际会议中心'
                            }
                        ]
                    },
                ],

                scheduleInternet:[
                    {
                        title: {title: "第一天", date: "17-12-18"},
                        content: [
                            {
                                date: '09:00-22:00',
                                title: '嘉宾报到'
                            },
                            {
                                date: '17:30-18:30',
                                title: '自助晚餐'
                            },
                            {
                                date: '18:30-20:00 ',
                                title: '互联网梦想卡车首发'
                            },
                        ]
                    },
                    {
                        title: {title: "第二天", date: "17-12-19"},
                        content: [
                            {
                                date: '08:30-12:05',
                                title: '主题大会'
                            },
                            {
                                date: '12:05-12:10',
                                title: '合影'
                            },
                            {
                                date: '13:30-17:30',
                                title: '营销分会'
                            },
                            {
                                date: '18:18-21:00',
                                title: '颁奖晚宴'
                            },
                        ]
                    },
                    {
                        title: {title: "第三天", date: "17-12-20"},
                        content: [
                            {
                                date: '11:00',
                                title: '返程',
//                                desc:'12:00前'
                            },
                        ]
                    },
                ],
                scheduleInternetDetail: [
                    {
                        title: {title: "第一天", date: "17-12-18"},
                        content: [
                            {
                                date: '09:00-22:00',
                                title: '嘉宾报到',
                                desc: '酒店大厅'
                            },
                            {
                                date: '18:30-20:00',
                                title: '互联网梦想卡车首发',
                                desc: '博鳌万泉河边 '
                            },
                        ]
                    },
                    {
                        title: {title: "第二天", date: "17-12-19"},
                        content: [
                            {
                                date: '06:30-08:30',
                                title: '早餐',
                                desc: '酒店西餐厅 '

                            },
                            {
                                date: '08：30-12：05',title: '主题大会',desc:'亚洲论坛国际会议中心'

                            },
                            {
                                date: '12:05-12:10',
                                title: '合影',
                                desc:'南广场台阶'
                            },
                            {
                                date: '12：10-12：30',title: '参观展车',desc:'南广场'

                            },
                            {
                                date: '12：30-13：30',title: '工作午餐',desc:'怡景西餐厅/聚贤阁'

                            },
                            {
                                date: '13:00-14:00',
                                title: '媒体见面会',
                                desc: '云亭',
                            },
                            {
                                date: '13：30-17：30',title: '经销商分会',desc:'东屿岛酒店万泉厅'

                            },
                            {
                                date: '13：30-17：30',title: '服务商分会',desc:'东屿多功能AB厅'

                            },
                            {
                                date: '13：30-17：30',title: '专用、委改分会',desc:'东屿岛酒店海景会议室'

                            },
                            {
                                date: '13：30-17：30',title: '配件中心库分会',desc:'会议中心孔雀1'

                            },
                            {
                                date: '13：30-17：00',title: '国际业务分会',desc:'会议中心孔雀2'
                            },
                            {
                                date: '18:00-18:18',
                                title: '嘉宾入场',
                                desc: '亚洲论坛国际会议中心',
                            },
                            {
                                date: '18:18-18:58',title: '颁奖盛典',desc:''
                            },
                            {
                                date: '18:58-21:00',title: '晚宴',desc:''

                            },
                        ]
                    },
                    {
                        title: {title: "第三天", date: "17-12-20"},
                        content: [
                            {
                                date: '11:00',
                                title: '返程',
                            }
                        ]
                    }
                ],

                scheduleCustom:[
                    {
                        title: {title: "第一天", date: "17-12-17"},
                        content: [
                            {
                                date: '09:00-18:00',
                                title: '客户报到'
                            }
                        ]
                    },
                    {
                        title: {title: "第二天", date: "17-12-18"},
                        content: [
                            {
                                date: '09:30-11:30',
                                title: '新时代中国重卡行业变革与趋势——高峰论坛'
                            },
                            {
                                date: '12:00-13:00',
                                title: '午餐'
                            },
                            {
                                date: '13:30-16:30',
                                title: '玉带滩及大通试驾'
                            },
                            {
                                date: '17:00-18:30',
                                title: '晚餐'
                            },
                            {
                                date: '18:30-20:00 ',
                                title: '互联网梦想卡车首发'
                            },
                        ]
                    },
                    {
                        title: {title: "第三天", date: "17-12-19"},
                        content: [
                            {
                                date: '09:00-20:00',
                                title: '红岩品质之旅'
                            }
                        ]
                    },
                    {
                        title: {title: "第四天", date: "17-12-20"},
                        content: [
                            {
                                date: '11:00',
                                title: '返程',
//                                desc:'11:00'
                            }
                        ]
                    },
                ],
                scheduleCustomDetail: [
                    {
                        title: {title: "第一天", date: "17-12-17"},
                        content: [
                            {
                                date: '19:30-21:00',
                                title: '欢迎晚宴',
                                desc:''
                            }
                        ]
                    },
                    {
                        title: {title: "第二天", date: "17-12-18"},
                        content: [
                            {
                                date: '06:30-09:00',
                                title: '自助早餐',
                                desc:'2楼西餐厅'
                            },
                            {
                                date: '09:38-11:38',
                                title: '新时代中国重卡行业变革与趋势<br/>高峰论坛 ',
                                desc:'东屿岛酒店万泉厅 '
                            },
                            {
                                date: '13:30-16:30',
                                title: '玉带滩 ',
                                desc:'博鳌万泉河出海口 '
                            },
                            {
                                date: '',
                                title: '大通试乘试驾  ',
                                desc:'亚论酒店高尔夫场地  '
                            },
                            {
                                date: '17:00-18:30',
                                title: '自助晚餐 ',
                                desc:'西餐厅  '
                            },
                            {
                                date: '18:30-20:00 ',
                                title: '互联网重卡发布 ',
                                desc:'博鳌会议中心万泉河边   '
                            },
                        ]
                    },
                    {
                        title: {title: "第三天", date: "17-12-19"},
                        content: [
                            {
                                date: '09:00-12:00',
                                title: '博鳌—三亚',
                                desc:'转场'
                            },
                            {
                                date: '12:30-14:00',
                                title: '午餐',
                                desc:'槟榔谷长桌宴'
                            },
                            {
                                date: '14:00-14:50',
                                title: '前往码头',
                                desc:'转场'
                            },
                            {
                                date: '14:50-18:00',
                                title: '帆船出海竞赛',
                                desc:''
                            },
                            {
                                date: '18:00-18:30',
                                title: '前往餐厅',
                                desc:'转场'
                            },
                            {
                                date: '18:30-20:00',
                                title: '海景晚餐',
                                desc:'四海渔港餐厅'
                            },
                            {
                                date: '20:00-22:30 ',
                                title: '三亚宋城千古情景区 ',
                                desc:''
                            },
                            {
                                date: '23:00 ',
                                title: '住宿',
                                desc:''
                            },
                        ]
                    },
                    {
                        title: {title: "第四天", date: "17-12-20"},
                        content: [
                            {
                                date: '06:30-09:00',
                                title: '早餐',
                                desc:'海棠湾红树林度假酒店'
                            },
                            {
                                date: '09:00-11:00',
                                title: '自由活动',
                                desc:'海棠湾红树林度假酒店'
                            },
                            {
                                date: '11:00',
                                title: '返程',
                                desc:'海棠湾红树林度假酒店'
                            },
                        ]
                    },
                ],
            }
        },
        created(){
            this.getUserSchedule()
        },
        mounted() {
            this.$store.commit('SPIN')
        },
        methods:{
            getUserSchedule(){
                console.log(this.user.group.name)
                let groupName = this.user.group.name;
                if(groupName.indexOf('主题大会') != -1){
                    if(this.btnDetail){
                        this.schedule = this.scheduleTheme
                    }else{
                        this.schedule = this.scheduleThemeDetail;
                    }
                    console.log('主题大会success')
                }
                if(groupName.indexOf('互联网重卡发布') != -1){
                    if(this.btnDetail){
                        this.schedule = this.scheduleInternet
                    }else{
                        this.schedule = this.scheduleInternetDetail;
                    }
                    console.log('互联网success')
                }
                if(groupName.indexOf('核心客户论坛') != -1){
                    if(this.btnDetail){
                        this.schedule = this.scheduleCustom;
                    }else{
                        this.schedule = this.scheduleCustomDetail;
                    }
                    console.log('核心客户success')
                }
            },
            btnDetailFn(){
                this.btnDetail = !this.btnDetail;
                this.getUserSchedule()
            }
        }
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    .btnDetail-box{
        padding-bottom: 20px;
        width:100%;
        text-align: center;
       button{
           background: #00549c;
           color: #fff;
           display: inline-block;
           width:100px;
           line-height:40px;
           border:1px solid #00549c;
           -webkit-border-radius: 3px;
           -moz-border-radius: 3px;
           border-radius: 3px;
       }
    }
</style>
