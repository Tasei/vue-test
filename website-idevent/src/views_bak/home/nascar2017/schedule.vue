<template>
    <div>
        <iui-bg></iui-bg>
        <div style="margin: 30px 20px">
            <iui-timeline :list="list"></iui-timeline>
        </div>
    </div>
</template>
<script>
    import iuiTimeline from "../../components/iui/timeline.vue"
    import iuiBg from "../../components/iui/page_bg.vue"
    export default {
        components: {iuiTimeline, iuiBg},
        mounted() {
            this.$store.commit('SPIN', false)
        },
        computed: {
            list() {
                //褚彦杰
                if (this.user.code == '18621589309') {
                    let list = this.list_consumer

                    list[0] = {
                        title: {date: '3月10日', title: '第一天 上海 ✈ 拉斯维加斯'},
                        content: [
                            {time: '10:45', title: '抵达机场'},
                            {time: '10:45-13:45', title: '办理托运手续，候机'},
                            {time: '13:45-15:24', title: '乘机抵达拉斯维加斯'},
                            {time: '15:24-16:30', title: '出关'},
                            {time: '16:30-17:00', title: '驱车前往酒店'},
                            {time: '17:00-17:30', title: '办理入住后休息'},
                        ]
                    }

                    list[6] = {
                        title: {date: '3月16日', title: '第七天 洛杉矶 ✈ 上海'},
                        content: [
                            {time: '09:00-10:00', title: '酒店内享用早饭，办理退房手续'},
                            {time: '10:00-10:45', title: '驱车前往机场'},
                            {time: '10:45-13:45', title: '办理登机手续，候机'},
                            {time: '13:45-18:35+1', title: '乘机抵达上海'},
                        ]
                    }

                    list[7] = {
                        title: {date: '3月16日', title: '第七天 洛杉矶 ✈ 上海'},
                        content: [
                            {time: '18:35', title: '抵达上海'},
                        ]
                    }

                    return list
                }

                //张志宏
                if (this.user.code == '13501816773') {
                    let list = this.list_sh

                    list[0] = {
                        title: {date: '3月11日', title: '第一天 上海 ✈ 拉斯维加斯'},
                        content: [
                            {time: '18:50', title: '抵达机场'},
                            {time: '18:50-21:20', title: '候机'},
                            {time: '21:20-20:24', title: '乘机抵达拉斯维加斯'},
                            {time: '20:21-21:00', title: '出关'},
                            {time: '21:00-21:30', title: '驱车前往酒店'},
                            {time: '21:30-21:45', title: '办理入住后休息'},
                        ]
                    }

                    list[4] = {
                        title: {date: '3月15日', title: '第五天 拉斯维加斯 ✈ 上海'},
                        content: [
                            {time: '11:00-12:00', title: '睡到自然醒，办理退房手续'},
                            {time: '12:00-12:30', title: '驱车前往机场'},
                            {time: '12:30-14:58', title: '办理登机手续，候机'},
                            {time: '14:58-16:35', title: '乘机前往圣何塞机场'},
                        ]
                    }

                    return list.slice(0, 5)
                }

                if (this.user.group.name == 'consumer-staff') {
                    let list = this.list_consumer

                    list[0] = {
                        title: {date: '3月10日', title: '第一天 上海 ✈ 拉斯维加斯'},
                        content: [
                            {time: '10:00', title: '抵达上海浦东机场'},
                            {time: '10:00-13:00', title: '办理登机手续，候机'},
                            {time: '13:00-14:15', title: '乘机抵达拉斯维加斯'},
                            {time: '14:15-15:00', title: '提取行李，出关'},
                            {time: '15:00-15:30', title: '驱车前往酒店'},
                            {time: '15:30-19:00', title: '办理入住后休息'},
                            {time: '19:00-19:30', title: '前往餐厅'},
                            {time: '19:30-20:30', title: '享用晚餐'},
                            {time: '20:30-21:00', title: '返回酒店后休息'},
                        ]
                    }

                    list[6] = {
                        title: {date: '3月16日', title: '第七天 洛杉矶 ✈ 上海'},
                        content: [
                            {time: '07:30-08:30', title: '酒店叫早，享用早餐，办理退房手续'},
                            {time: '08:30-09:30', title: '驱车前往机场'},
                            {time: '19:30-12:30', title: '办理登机手续，候机'},
                            {time: '12:30-17:30+1', title: '乘机返回上海'},
                        ]
                    }

                    list[7] = {
                        title: {date: '3月17日', title: '第八天 抵达上海'},
                        content: [
                            {time: '17:30', title: '抵达上海'},
                        ]
                    }

                    return list
                }


                switch (this.user.group.name) {
                    case "m-bj":
                    case "m-bj-staff":
                        return this.list_bj;
                    case "m-sh":
                    case "m-sh-staff":
                        return this.list_sh;
                    case "consumer":
                    default:
                        return this.list_consumer;
                }
            },
            list_bj(){
                let list = this.list_sh
                list[0] = {
                    title: {date: '3月11日', title: '第一天 北京 ✈ 拉斯维加斯'},
                    content: [
                        {time: '18:00-19:00', title: '出关'},
                        {time: '19:00-19:30', title: '前往酒店'},
                        {time: '19:30-20:00', title: '办理入住手续'},
                        {time: '20:00-', title: '酒店内休息，调整时差'},
                    ]
                }
                list[4] = {
                    title: {date: '3月15日', title: '第五天 拉斯维加斯 ✈ 洛杉矶'},
                    content: [
                        {time: '07:00-08:00', title: '酒店叫早，使用早餐'},
                        {time: '08:00-11:00', title: 'Bellagio酒店出发，自驾前往洛杉矶'},
                        {time: '11:00-12:00', title: '中途使用午餐'},
                        {time: '12:00-15:00', title: '继续自驾前往约书亚树国家公园'},
                        {time: '15:00-17:00', title: '约书亚树国家公园拍摄'},
                        {time: '17:00-19:00', title: '前往餐厅'},
                        {time: '19:00-20:00', title: '使用晚餐'},
                        {time: '20:00-20:30', title: '驱车前往机场, 候机'},
                    ]
                }
                list[5] = {
                    title: {date: '3月16日', title: '第六天 洛杉矶 ✈ 北京'},
                    content: [
                        {time: '01:40-05:30+1', title: '乘机返回北京'},
                    ]
                }
                list[6] = {
                    title: {date: '3月17日', title: '第七天 航班抵达北京'},
                    content: []
                }
                return list
            }
        },
        data () {
            return {
                list_consumer: [
                    {
                        title: {date: '3月10日', title: '第一天 上海 ✈ 拉斯维加斯'},
                        content: [
                            {time: '15:00', title: '上海浦东机场集合'},
                            {time: '15:00-18:00', title: '办理登机手续及托运行李'},
                            {time: '18:08-19:08', title: '抵达拉斯维加斯，专员接机'},
                            {time: '19:08-19:30', title: '前往餐厅'},
                            {time: '19:30-20:30', title: '晚餐'},
                            {time: '20:30-21:00', title: '前往酒店入住'},
                            {time: '21:00-21:15', title: '入住手续, 酒店休息'},
                        ]
                    },
                    {
                        title: {date: '3月11日', title: '第二天 拉斯维加斯'},
                        content: [
                            {time: '07:30-08:30', title: '酒店叫早，使用早餐'},
                            {time: '08:30-16:00', title: '城市观光'},
                            {time: '16:00-18:30', title: '前往餐厅晚餐'},
                            {time: '18:30-19:00', title: '晚餐'},
                            {time: '19:00-19:30', title: '返回酒店休息'},
                        ]
                    }, {
                        title: {date: '3月12日', title: '第三天 拉斯维加斯'},
                        content: [
                            {time: '07:30-08:30', title: '酒店叫早，使用早餐'},
                            {time: '08:30-09:00', title: 'Bellagio酒店出发，前往Nascar比赛现场'},
                            {time: '09:00-11:30', title: '参观比赛场地'},
                            {time: '11:30-11:50', title: '午餐'},
                            {time: '11:50-16:00', title: '观看比赛'},
                            {time: '16:00-16:30', title: '返回酒店'},
                            {time: '16:30-17:15', title: '酒店休息'},
                            {time: '17:15-17:30', title: '驱车前往餐厅'},
                            {time: '17:30-18:30', title: '晚餐'},
                            {time: '18:30-18:45', title: '酒店休息'},
                        ]
                    },
                    {
                        title: {date: '3月13日', title: '第四天 拉斯维加斯'},
                        content: [
                            {time: '07:30-08:30', title: '酒店叫早，使用早餐'},
                            {time: '08:30-09:30', title: 'Bellagio酒店出发，前往Spring Mountain'},
                            {time: '09:30-09:45', title: '欢迎仪式'},
                            {time: '09:45-11:15', title: 'Spring Mountain培训'},
                            {time: '11:15-11:30', title: '前往餐厅'},
                            {time: '11:30-12:00', title: '午餐'},
                            {time: '12:00-16:30', title: 'Spring Mountain培训'},
                            {time: '16:30-17:30', title: '返回拉斯维加斯'},
                            {time: '17:30-17:45', title: '前往餐厅'},
                            {time: '17:45-18:45', title: '晚餐'},
                            {time: '18:45-19:00', title: '返回酒店休息'},
                        ]
                    },
                    {
                        title: {date: '3月14日', title: '第五天 拉斯维加斯'},
                        content: [
                            {time: '07:30-08:30', title: '酒店叫早，使用早餐'},
                            {time: '08:30-09:30', title: 'Bellagio酒店出发，前往Spring Mountain'},
                            {time: '09:45-13:15', title: 'Spring Mountain培训'},
                            {time: '13:15-13:45', title: '午餐'},
                            {time: '13:45-17:00', title: 'Spring Mountain培训'},
                            {time: '17:00-18:00', title: '返回拉斯维加斯'},
                            {time: '18:00-19:00', title: '晚餐'},
                            {time: '19:00-19:15', title: '返回酒店休息'},
                        ]
                    },
                    {
                        title: {date: '3月15日', title: '第六天 拉斯维加斯 - 洛杉矶'},
                        content: [
                            {time: '07:00-08:00', title: '酒店叫早，使用早餐'},
                            {time: '08:00-11:00', title: 'Bellagio酒店出发，前往洛杉矶'},
                            {time: '11:00-12:00', title: '中途使用午餐'},
                            {time: '12:00-14:00', title: '继续前往洛杉矶'},
                            {time: '14:00-17:30', title: '洛杉矶市区观光'},
                            {time: '17:30-18:30', title: '享用晚餐'},
                            {time: '18:30-19:00', title: '返回酒店休息'},
                        ]
                    },
                    {
                        title: {date: '3月16日', title: '第七天 洛杉矶 ✈ 上海'},
                        content: [
                            {time: '06:45-07:45', title: '酒店叫早，使用早餐，退房'},
                            {time: '07:45-10:45', title: '酒店出发，前往洛杉矶机场'},
                            {time: '10:45-15:55+1', title: '返回中国'},
                        ]
                    },
                    {
                        title: {date: '3月17日', title: '第八天 抵达上海'},
                        content: [
                            {time: '15:55-16:00', title: '抵达上海'},
                        ]
                    },
                ],
                list_sh: [
                    {
                        title: {date: '3月11日', title: '第一天 上海 ✈ 拉斯维加斯'},
                        content: [
                            {time: '15:10-16:10', title: '出关'},
                            {time: '16:10-16:30', title: '前往酒店'},
                            {time: '16:30-19:00', title: '办理入住，酒店房间内休息'},
                            {time: '19:00-20:00', title: '享用晚餐'},
                            {time: '20:00-20:30', title: '返回酒店'},
                        ]
                    },
                    {
                        title: {date: '3月12日', title: '第二天 拉斯维加斯'},
                        content: [
                            {time: '08:00-09:30', title: 'Bellagio酒店出发，前往Nascar赛场'},
                            {time: '09:30-10:00', title: '抵达，观看儿童慈善机构赛道行走'},
                            {time: '10:00-10:15', title: 'Neon Garage 入口的车手采访'},
                            {time: '10:15-10:45', title: '参观 Neon Garage'},
                            {time: '10:45-11:15', title: 'Neon Garage 自由参观'},
                            {time: '11:15-12:00', title: 'Pit Road上参观'},
                            {time: '12:00-12:30', title: 'Vegas Clubhouse – 午餐'},
                            {time: '12:30-16:00', title: '观看MENCS 考伯特400 (267 圈, 400.5 英里)'},
                            {time: '16:00-16:30', title: '返回酒店'},
                            {time: '16:30-17:30', title: '酒店休息'},
                            {time: '17:30-18:30', title: '晚餐'},
                            {time: '18:30-21:00', title: 'Outlets 购物'},
                            {time: '21:00-21:15', title: '返回酒店'},
                        ]
                    }, {
                        title: {date: '3月13日', title: '第三天 拉斯维加斯'},
                        content: [
                            {time: '07:30-08:30', title: '酒店叫早，使用早餐'},
                            {time: '08:30-09:30', title: 'Bellagio酒店出发，前往Spring Mountain'},
                            {time: '09:30-09:45', title: '欢迎'},
                            {time: '09:45-11:15', title: '雪佛兰全系产品介绍'},
                            {time: '11:15-11:30', title: '前往餐厅'},
                            {time: '11:30-12:00', title: 'Spring Mountain内午餐'},
                            {time: '12:00-12:20', title: '安全讲解，头盔佩带'},
                            {time: '12:20-16:30', title: 'Spring Mountain跑道试驾'},
                            {time: '16:30-17:30', title: '返回拉斯维加斯'},
                            {time: '17:30-17:45', title: '前往餐厅'},
                            {time: '17:45-19:00', title: '晚餐'},
                            {time: '19:00-21:00', title: '夜游拉斯维加斯'},
                            {time: '21:00-21:30', title: '返回酒店休息'},
                        ]
                    },
                    {
                        title: {date: '3月14日', title: '第四天 拉斯维加斯'},
                        content: [
                            {time: '07:30-08:30', title: '酒店叫早，使用早餐'},
                            {time: '08:30-09:30', title: 'Bellagio酒店出发，前往Spring Mountain'},
                            {time: '09:45-13:15', title: '驾驶培训练习'},
                            {time: '13:15-13:45', title: 'Spring Mountain內自助餐午餐'},
                            {time: '13:45-15:00', title: '驾驶培训练习'},
                            {time: '15:00-18:00', title: '驱车前往Red Rock Canyon，进行拍摄'},
                            {time: '18:00-19:00', title: '前往拉斯维加斯'},
                            {time: '19:00-20:00', title: '使用晚餐'},
                            {time: '20:00-20:30', title: '返回酒店休息'},
                        ]
                    },
                    {
                        title: {date: '3月15日', title: '第五天 拉斯维加斯 ✈ 上海'},
                        content: [
                            {time: '07:00-08:00', title: '酒店叫早，使用早餐'},
                            {time: '08:00-11:00', title: 'Bellagio酒店出发，自驾前往洛杉矶'},
                            {time: '11:00-12:00', title: '中途使用午餐'},
                            {time: '12:00-15:00', title: '继续自驾前往约书亚树国家公园'},
                            {time: '15:00-17:00', title: '约书亚树国家公园拍摄'},
                            {time: '17:00-19:00', title: '前往餐厅'},
                            {time: '19:00-20:00', title: '使用晚餐'},
                            {time: '20:00-20:30', title: '驱车前往机场'},
                            {time: '20:30-23:30', title: '候机'},
                            {time: '23:30-09:45+2', title: '乘机返回上海'},
                        ]
                    },
                    {
                        title: {date: '3月16日', title: '第六天 飞机上'},
                        content: []
                    },
                    {
                        title: {date: '3月17日', title: '第七天 航班抵达上海'},
                        content: []
                    },
                ],
            }
        }
    }
</script>
