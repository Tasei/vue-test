<template>
    <div>
        <div class="tab">
            <div class="clearfix">
                <div class="left clearfix" v-for="key of Object.keys(schedule)">
                    <a href="javascript:;" @click="toggleTab(key)" class="tab-item" :class="{'selected': schedule[key].selected}">{{key}}</a>
                </div>
            </div>
            <a href="javascript:;" :class="tabCls" class="tab-bg"></a>
        </div>
        <div class="table animated fadeInRight" v-for="key of Object.keys(schedule)" v-show="schedule[key].selected">
            <div class="table-item clearfix" v-for="p of schedule[key].list">
                <div class="title">{{p.time}}</div>
                <div class="content">
                    <h5>{{p.title}}</h5>
                    <p v-html="p.content"></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import cx from 'classnames'
    export default{
        data(){
            return {
                tab_key: '04-01',
                schedule: {
                    '04-01': {
                        selected: true,
                        list: [{
                            time: '06:30',
                            title: '月星家居集合：迟到一分钟，罚款一百元！敲黑板！划重点！',
                            content: '* 请开车的老司机们提前将油箱加满，公司将在回程当天统一加油； <br/>* '
                        }, {
                            time: '06:45',
                            title: '举行发车仪式',
                            content: ''
                        }, {
                            time: '07:00',
                            title: '驱车前往宜兴水墨田园温泉度假酒店',
                            content: '* 途中经停京沪高速阳澄湖服务区(阳澄湖大道)，参与九宫格游戏，赢取神秘大礼'
                        }, {
                            time: '11:00',
                            title: '抵达酒店进行自助午餐（具体时间以各自车辆到达时间为准）',
                            content: '按要求停车（在A楼指定区域停放车辆，A楼门口会有工作人员指挥停车）<br/>酒店入住签到：A楼大堂 <br/>自助午餐：A楼二层餐厅'
                        }, {
                            time: '13:00',
                            title: '车辆集体照',
                            content: '拍照地点：A楼门口广场（休闲装）'
                        }, {
                            time: '14:30',
                            title: '定妆照拍摄',
                            content: '地点：B楼郁金香厅摄影区'
                        }, {
                            time: '17:00',
                            title: 'Foyer集合',
                            content: '地点：B楼一层大厅，进行年会餐前酒会'
                        }, {
                            time: '17:30',
                            title: '红毯秀',
                            content: '请大家自带主角光环，走红毯！'
                        }, {
                            time: '18:18',
                            title: '晚宴开场',
                            content: ''
                        }, {
                            time: '22:00',
                            title: '晚宴结束',
                            content: '具体时间以实际为准'
                        }]
                    },

                    '04-02': {
                        selected: false,
                        list: [{
                            time: '07:00',
                            title: 'Morning Call',
                            content: '酒店内早餐（A楼一层水墨餐厅），退完房间'
                        }, {
                            time: '07:50',
                            title: '集合',
                            content: '地点：酒店B楼大堂'
                        }, {
                            time: '08:00',
                            title: '出发至大觉寺',
                            content: '出发顺序严格按车号'
                        }, {
                            time: '08:45',
                            title: '游览大觉寺',
                            content: ''
                        }, {
                            time: '09:45',
                            title: '大觉寺停车场集合，出发至根大生态园',
                            content: ''
                        }, {
                            time: '10:30',
                            title: '根大生态园TB活动：煮菜、包饺子',
                            content: '不用你耕田来我施肥，但确是需要你做菜我来吃…'
                        }, {
                            time: '11:30',
                            title: '午餐：享用劳动果实',
                            content: '你们都是用心做菜的好宝宝 :-) '
                        }, {
                            time: '13:00',
                            title: '返程',
                            content: '阳澄湖服务区统一加油，活动圆满结束！'
                        }]
                    }
                }
            }
        },
        computed: {
            tabCls() {
                return cx({
                    ['left-animation']: this.tab_key == '04-01',
                    ['right-animation']: this.tab_key == '04-02'
                })
            }
        },
        mounted() {
            this.$store.commit('SPIN')
        },
        methods: {
            //tab页切换
            toggleTab(key) {
                if(this.schedule[key].selected) {
                    return
                }
                this.schedule[key].selected = true
                for(let index of Object.keys(this.schedule)) {
                    if(index != key) {
                        this.schedule[index].selected = false
                    }
                }
                this.tab_key = key
            },
        }
    }
</script>
<style lang="less" scoped>
    .tab {
        padding: 30px 0 10px;
        position: relative;
        .left{
            width: 50%;
            float: left;
            &:first-child{
                padding-right: 36px;
                a {
                    float: right;
                }
            }
            &:last-child{
                padding-left: 36px;
                a {
                    float: left;
                }
            }
        }
        .tab-item {
            display: inline-block;
            width: 90px;
            height: 40px;
            line-height: 40px;
            font-size: 17px;
            color: #666;
            text-align: center;

            &.selected {
                color: #BC9D5D;
                font-weight: bold;
            }
        }

        .tab-bg {
            display: inline-block;
            width: 90px;
            height: 40px;
            background: url("../images/tab_bg.png") no-repeat center;
            background-size: 100% 100%;
            position: absolute;
            top: 30px;
            z-index: -1;
            &.right-animation {
                left: 50%;
                margin-left: 36px;
                animation: tab-right-animation .5s;
            }
            &.left-animation {
                right: 50%;
                margin-right: 36px;
                animation: tab-left-animation .5s;
            }

        }
    }

    .table {
        padding: 0 30px;
        .table-item {
            text-align: left;
            margin-top: 20px;
            .title {
                float: left;
                width: 40px;
                color: #333;//rgba(255, 255, 255, 0.69);
                font-size: 15px;
                margin: 0;
            }
            .content {
                margin-left: 60px;
                h5 {
                    font-size: 15px;
                    line-height: 17px;
                    font-weight: bold;
                    color: #333;
                    text-align: left;
                    margin: 0 0 5px 0;
                }
                p {
                    color: #666;//rgba(255, 255, 255, 0.5);
                    font-size: 12px;
                    line-height: 14px;
                    margin: 0;
                }
            }
        }
    }

    @keyframes tab-left-animation {
        from {
            margin-right: -126px;
        }
        to {
            margin-right: 36px;
        }

    }
    @keyframes tab-right-animation {
        from {
            margin-left: -126px;
        }
        to {
            margin-left: 36px;
        }

    }
</style>
