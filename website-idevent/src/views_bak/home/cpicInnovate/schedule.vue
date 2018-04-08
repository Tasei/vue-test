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
                    title: {date: '7月28日', title: '第一天（陆家嘴42楼会议室）'},
                    content: [{
                        date: '07:30-08:30', title: '学员统一出发至陆家嘴', desc: '全体学员'
                    }, {
                        date: '08:30-09:00', title: '签到、入场', desc: '全体'
                    }, {
                        date: '09:00-09:05', title: '暖场视频', desc: '全体'
                    }, {
                        date: '09:05-09:10', title: '成立大会开场', desc: '主持人开场'
                    }, {
                        date: '09:10-09:20', title: '创新学院院长致辞', desc: '曾义副总经理'
                    }, {
                        date: '09:20-09:30', title: '启动仪式', desc: '院长、特邀嘉宾'
                    }, {
                        date: '09:30-09:35', title: '顾董寄语视频', desc: ''
                    }, {
                        date: '09:35-10:00', title: '主题发言', desc: '徐建国总监'
                    }, {
                        date: '10:00-10:20', title: '高峰论坛', desc: '徐文虎'
                    }, {
                        date: '10:20-10:30', title: '茶歇', desc: '全体'
                    }, {
                        date: '10:30-11:30', title: '高峰论坛', desc: '刘玉亭、母小海、出离'
                    }, {
                        date: '11:30-12:00', title: '产险各条线代表寄语及问答', desc: '嘉宾部门领导'
                    }, {
                        date: '12:00-13:30', title: '午餐', desc: ''
                    }, {
                        date: '13:30-17:00', title: '集中培训（BAT专家授课）', desc: 'BAT专家、学员'
                    }]
                }, {
                    title: {date: '7月29日', title: '第二天（宜山路719号11楼培训教室）'},
                    content: [{
                        date: '09:00-12:00', title: '集中培训（项目培训）', desc: '创新发展中心产品经理、学员'
                    }, {
                        date: '13:30-16:00', title: '分组讨论', desc: '相关领导、创新发展中心产品经理、学员'
                    }, {
                        date: '16:10', title: '颁发学员证书', desc: '相关领导、创新发展中心产品经理、学员'
                    }]
                }]
            }
        }
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    @import "../../../assets/style/schedule";
    .step-title {
        padding-bottom: 20px;
    }
    .step-content {
        .item {
            padding-bottom: 15px;
            &:last-child {
                padding-bottom: 43px;
            }
        }
        .right {
            p.title {
                color: #333;
                font-size: 14px;
            }
            p {
                color: #999;
                font-size: 12px;
            }
        }
    }
    .bg {
        background: #fff;
    }
</style>
