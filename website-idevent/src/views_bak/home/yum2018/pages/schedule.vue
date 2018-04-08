<template>
    <div>
        <iui-bg></iui-bg>
        <iui-schedule :list="list"></iui-schedule>
    </div>
</template>
<style scoped lang="less">
    .iui-page-bg {
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
                        title: {title: "全天抵达", date: "03-26"}
                    },
                    {
                        title: {
                            title: "上午：开幕式<br>" +
                            "下午：分品牌会议<br>" +
                            "晚上：颁奖晚宴", date: "03-27"
                        },
                    },
                    {
                        title: {
                            title: "上午：游玩<br>" +
                            "下午：自由活动<br>", date: "03-28"
                        }
                    },
                    {
                        title: {title: "全天返程", date: "03-29"}
                    },
                ]
            }
        }
    }
</script>
