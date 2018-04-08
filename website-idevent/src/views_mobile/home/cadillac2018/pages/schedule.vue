<template>
    <div>
        <!--<iui-bg></iui-bg>-->
        <iui-schedule :list="list"></iui-schedule>
        <div class="text-attention">
            <p>*着装要求：出席2月3日各项会议、晚宴、请着凯迪拉克标准正装</p>
            <p>*注意：请于2018年1月21日前18:00前完成注册。</p>
        </div>
    </div>
</template>
<style scoped lang="less">
    .iui-page-bg {
    }
    .iui-schedule{
        margin-bottom: 0;
    }
    .text-attention{
        padding:0 10px;
        p{
            color: #8A1529;
            font-weight:700;
        }
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
                        title: {title: "周五", date: "2月2日"},
                        content:[
                            {
                                title:'签到/酒店入住',
                                date:'全天',
                                desc:"深圳宝安机场/深圳北站"
                            }
                        ]

                    },
                    {
                        title: {title: "周六", date: "2月3日"},
                        content:[
                            {
                                title:'会议签到',
                                date:'09:00',
                                desc:"深圳会展中心1层5号厅"
                            },
                            {
                                title:'市场营销大会',
                                date:'09:00-11:30',
                                desc:"深圳会展中心1层5号厅"
                            },
                            {
                                title:'自助午餐',
                                date:'11:30-13:00',
                                desc:"深圳会展中心5层"
                            },{
                                title:'区域分组会议',
                                date:'13:00-16:30',
                                desc:"深圳会展中心5层/6层"
                            },{
                                title:'董事长分会',
                                date:'13:30-16:30',
                                desc:"深圳东海朗廷酒店 24层星愿廷I"
                            },{
                                title:'颁奖晚宴',
                                date:'18:00-20:30',
                                desc:"深圳会展中心1层5号厅"
                            },
                        ]
                    },
                    {
                        title: {title: "周日", date: "2月4日"},
                        content:[
                            {
                                title:'返程送机',
                                date:'06:00-12:00',
                                desc:"各酒店大堂"
                            }
                        ]

                    },
                ]
            }
        }
    }
</script>
