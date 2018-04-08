<template>
    <div>
        <iui-bg></iui-bg>
        <div style="margin: 40px">
            <iui-timeline :list="list"></iui-timeline>
        </div>

        <btn-home></btn-home>
    </div>
</template>
<script>
    import iuiTimeline from "../../../components/iui/timeline.vue"
    import iuiBg from "../../../components/iui/page_bg.vue"
    import btnHome from "../components/btn_home.vue"

    export default{
        components: {iuiTimeline, iuiBg, btnHome},
        data(){
            return {
                list: [
                    {
                        title: {date: '2017-04-18', title: '第一天 周二'},
                        content: [
                            {time: '10:00-17:00', title: '接机报到', desc: '各酒店'},
                            {time: '17:00-18:40', title: '自助晚餐', desc: '各酒店'},
                            {time: '20:10-21:10', title: '别克品牌日活动', desc: '上海港国际客运码头'},
                        ]
                    },
                    {
                        title: {date: '2017-04-19', title: '第二天 周三'},
                        content: [
                            {time: '06:00-14:00', title: '返程送机', desc: '各酒店'},
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
