<template>
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
                        <p>{{d.desc}}</p>
                        <div v-if="d.children">
                            <div class="child-item" v-for="child in d.children">
                                <p class="title">{{child.title}}</p>
                                <p>{{child.desc}}</p>
                            </div>
                        </div>
                    </div>
                    <div style="clear:both"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        mounted() {
            this.$store.commit('SPIN', false)
        },
        data () {
            return {
                list: [{
                    title: {date: '17-02-16', title: '第一天'},
                    content: [{
                        date: '全日', title: '经销商报到', desc: '各报到酒店'
                    }, {
                        date: '17:00-20:00', title: '自助晚餐', desc: ''
                    }]
                }, {
                    title: {date: '17-02-17', title: '第二天'},
                    content: [{
                        date: '09:00-12:00', title: '主题报告', desc: '杭州洲际酒店主会场'
                    }, {
                        date: '12:00-13:20', title: '自助午餐', desc: '杭州洲际酒店各分餐厅'
                    }, {
                        date: '13:30-17:00', title: '颁奖/经验分享', desc: '杭州洲际酒店主会场',
                    }, {
                        date: '18:30-21:00', title: '答谢宴会', desc: ''
                    }]
                }, {
                    title: {date: '17-02-18', title: '第三天'},
                    content: [{
                        date: '全天', title: '东北营销事业部分组会议', desc: '杭州瑞立江河汇酒店-云江厅', children: [
                            {
                                title: '华北营销事业部分组会议', desc: '杭州东方寓舍·黄龙酒店-水晶厅Ⅰ'
                            }, {
                                title: '华东营销事业部分组会议', desc: '杭州洲际酒店-伦敦厅'
                            }, {
                                title: '华南营销事业部分组会议', desc: '杭州钱江新城万怡酒店-水晶厅'
                            }, {
                                title: '华中营销事业部分组会议', desc: '杭州尊蓝豪华精选酒店-宴会厅Ⅰ'
                            }, {
                                title: '山东营销事业部分组会议', desc: '杭州泛海钓鱼台酒店-云天阁'
                            }, {
                                title: '西北营销事业部分组会议', desc: '杭州钱江新城万豪酒店-会议室3'
                            }, {
                                title: '西南营销事业部分组会议', desc: '杭州洲际酒店上海厅'
                            }, {
                                title: '独立营销大区分组会议-浙江/天津/江苏', desc: '杭州洲际酒店-北京厅'
                            }]
                    }, {
                        date: '12:00-13:20', title: '自助午餐', desc: '杭州洲际酒店各分餐厅'
                    }, {
                        date: '17:00-20:00', title: '自助晚餐', desc: '各住宿酒店'
                    }]
                }, {
                    title: {date: '17-02-19', title: '第四天'},
                    content: [{
                        date: '全天', title: '欢送日', desc: ''
                    }]
                }]
            }
        }
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    @import "../../../assets/style/schedule";
</style>
