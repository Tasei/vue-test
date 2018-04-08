<template>
    <div>
        <iui-bg></iui-bg>
        <div class="iui-schedule">
            <div class="step" v-for="p in list">
                <div class="step-title">
                    <div class="left">
                        <i class="radius" ></i>
                        <span class="text ">{{p.title.date}}</span>
                    </div>
                    <div class="right font-bold " v-html="p.title.title"></div>
                    <div style="clear:both"></div>
                </div>
                <div class="step-content">
                    <div class="item" v-for="d in p.content">
                        <div class="left">
                            <span class="text text-dark">{{d.date}}</span>
                        </div>
                        <div class="right text-dark">
                            <p class="title" v-html="d.title"></p>
                            <p v-html="d.desc"></p>
                        </div>
                        <div style="clear:both"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="less">
    .iui-page-bg {
        background-image: url("../images/schedule_bg.png");
    }
    .iui-schedule >div:first-of-type .step-title .left span.text,.iui-schedule >div:nth-of-type(5) .step-title .left span.text{
        color:white;
        background-color: #0e90d2;
        font-weight: 700;
    }
    .iui-schedule >div:first-of-type .step-title .right,.iui-schedule >div:nth-of-type(5) .step-title .right{
        color: #0e90d2;
        font-weight: 700;
    }
    /**/
    .iui-schedule>div:first-of-type .step-title .left .radius,.iui-schedule>div:nth-of-type(5) .step-title .left .radius,.iui-schedule>div:last-of-type .step-title .left .radius{
        background: deepskyblue;
        opacity:0.2;
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
                        title: {title: "第一天", date: "17-10-18",class:"bold"}
                    },
                    {
                        title: {title: "签到&早茶", date: "08:30-09:00"}
                    },
                    {
                        title: {title: "欢迎辞", date: "09:00-09:10"}
                    },
                    {
                        title: {title: "茶歇", date: "10:25-10:55"}
                    },
                    {
                        title: {title: "第二天", date: "17-10-19",class:"bold"}
                    },
                    {
                        title: {title: "早茶", date: "08:30-09:00"}
                    },
                    {
                        title: {title: "欢迎辞", date: "09:00-09:05"}
                    },
                    {
                        title: {title: "午餐休息", date: "12:30-13:30"}
                    },
                    {
                        title: {title: "会议总结", date: "17:00-17:10"}
                    },
                ]
            }
        }
    }
</script>
