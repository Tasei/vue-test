<template>
    <div>
        <iui-schedule :list="schedule"></iui-schedule>
        <btn-home></btn-home>
    </div>
</template>

<script>
    import iuiSchedule from "../../../components/iui/schedule.vue"
    import btnHome from "../components/btn_home.vue"

    export default {
        components: {
            iuiSchedule, btnHome
        },
        data() {
            return {
                schedule: [
                    {
                        title: {title: "日程", date: "17-12-07"},
                        content: [
                            {
                                date: '08:30-09:00',
                                title: '嘉宾入场'
                            },
                            {
                                date: '09:00-09:10',
                                title: '主持人宣布发布会开始',
                            },
                            {
                                date: '09:10-09:20',
                                title: '招商银行行领导致辞',
                            },
                            {
                                date: '09:20-09:25',
                                title: '发布仪式',
                            },
                            {
                                date: '09:25-10:00',
                                title: '2018中国宏观经济走势',
                                desc: '首席经济学家  丁安华',
                            },
                            {
                                date: '10:00-10:40',
                                title: '招商银行财资管理云CBS6发布',
                                desc: '招行总行产品经理'
                            },
                            {
                                date: '10:40-10:50',
                                title: '茶歇，交流互动',
                            },
                            {
                                date: '10:50-11:30',
                                title: '全球财资管理趋势',
                                desc: '安永大中华区金融行业合伙人 张挺'
                            },
                            {
                                date: '11:30-12:00',
                                title: '案例分享',
                                desc: '摩拜／华谊兄弟'
                            },
                            {
                                date: '12:00-13:30',
                                title: '午餐',
                            },
                        ]
                    },
                ]
            }
        },
        mounted() {
            this.$store.commit('SPIN')
        }
    }
</script>
