<template>
    <div>
        <iui-bg></iui-bg>
        <iui-schedule :list="list"></iui-schedule>
    </div>
</template>
<style scoped lang="less">
    .iui-page-bg {
        background-image: url("../images/schedule_bg.png");
    }
</style>
<script>
    import iuiBg from "../../../components/iui/page_bg.vue"
    import iuiSchedule from "../../../components/iui/schedule.vue"

    export default {
        components: {
            iuiBg, iuiSchedule
        },
        mounted() {
            this.$store.commit('SPIN', false)
        },
        data() {
            return {
                list: [
                    {
                        title: {title: "签到", date: "13:00-13:30"}
                    },
                    {
                        title: {title: "开场", date: "13:30-13:40"}
                    },
                    {
                        title: {title: "《大数据时代的价值投资》", date: "13:40-14:20"}
                    },
                    {
                        title: {title: "《智能化鑫星汇平台》", date: "14:40-15:10"}
                    },
                    {
                        title: {title: "茶歇", date: "15:10-15:30"}
                    },
                    {
                        title: {title: "主题演讲《平台型组织的共享资源》", date: "15:30-16:30"}
                    },
                    {
                        title: {title: "圆桌论坛《价值投资与投资价值》", date: "16:30-17:00"}
                    },
                    {
                        title: {title: "现场咨询与报名", date: "17:00-17:30"}
                    },
                ]
            }
        }
    }
</script>
