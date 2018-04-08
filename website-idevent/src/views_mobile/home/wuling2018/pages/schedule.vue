<template>
<div class="bg">
    <img :src="banner" alt="" style="display: block; margin-bottom: 10px;" class="banner">
    <div class="step" v-for="p in list">
        <div class="step-content">
            <div class="item" v-for="d in p.content">
                <div class="left">
                    <span class="text text-dark">{{d.date}}</span>
                </div>
                <div class="right text-dark">
                    <p class="title">{{d.title}}</p>
                    <p>{{d.desc}}</p>
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
        document.title = '会议议程'
        this.$store.commit('SPIN', false)
    },
    data () {
        return {
            banner: require('../images/banner_hyyc.jpg'),
            list: [
                {
                    title: {date: '', title: ''},
                    content: [{
                        date: '09:00-09:30', title: '嘉宾入场',desc:'Entry Of Guests'
                    },
                        {
                            date: '09:30-09:40', title: '执行副总经理戴伟睿先生致欢迎词',desc:'Speech by Executive Vice President Mr. Devereux'
                        },
                        {
                            date: '09:40-10:20', title: '采购中心高级总监胡健斌先生作采购工作报告',desc:'Purchasing Presentation by P&SCM Senior Director Mr. Hu'
                        },
                        {
                            date: '10:20-10:45', title: '获奖供应商颁奖',desc:'Award Presentation'
                        },
                        {
                            date: '10:45-10:55', title: '供应商代表发言',desc:'Speech by Supplier Representatives'
                        },
                        {
                             date: '10:55-11:15', title: '党委书记、副总经理姚佐平先生作廉洁报告',desc:'Integrity Presentation by Party Secretary&Vice President Mr. Yao'
                        },
                        {
                            date: '11:15-12:00', title: '总经理沈阳先生讲话',desc:'Speech by President Mr. Shen'
                        },
                        {
                            date: '12:00', title: '会议结束', desc: 'End of the Conference'
                        },
                    ]
                }
            ]
        }
    }
}
</script>
<style lang="less" scoped>
    .col-xs-4, .col-xs-8 {
        padding: 0;
    }
    .bg {
        background-color: #fff;
        background-size: cover;
        min-height: 100vh;
        .banner {
            display: block;
            margin-bottom: 20px
        }
    }
    .left {
        width: 130px;
        float: left;
    }

    .right {
        margin-left: 130px;
    }
    .step-title {
        padding-bottom: 30px;
        position: relative;
        .left {
            height: 19px;
            line-height: 19px;
            text-align: right;
            padding-right: 27px;
            position: relative;
            &:before {
                content: '';
                width: 10px;
                height: 10px;
                background: #a1382e;
                opacity: 0.6;
                position: absolute;
                display: block;
                border-radius: 50%;
                right: 4px;
                top: 50%;
                margin-top: -5px;
            }

            .radius {
                width: 18px;
                height: 18px;
                background: #a1382e;
                opacity: 0.15;
                position: absolute;
                display: block;
                border-radius: 50%;
                right: 0;
                top: 50%;
                margin-top: -9px;
            }
            span.text {
                display: inline-block;
                background-color: #a1382e;
                color: #fff;
                padding: 0 5px;
                border-radius: 1px;
                position: relative;
                &:before {
                    content: '';
                    width: 0;
                    height: 0;
                    border-top: 3px solid transparent;
                    border-left: 6px solid #a1382e;
                    border-bottom: 3px solid transparent;
                    position: absolute;
                    right: -6px;
                    top: 50%;
                    margin-top: -4px;
                }
            }
        }
        .right {
            font-size: 15px;
            color: #a1382e;
            line-height: 19px;
            padding-left: 15px;
        }
    }

    .step-content {
        .item {
            padding-bottom: 30px;
            position: relative;
        }
        .left {
            height: 15px;
            line-height: 15px;
            text-align: right;
            padding-right: 27px;
            position: relative;
            &:before {
                content: '';
                width: 8px;
                height: 8px;
                background: #a1382e;
                opacity: 0.4;
                position: absolute;
                display: block;
                border-radius: 50%;
                right: 5px;
                top: 50%;
                margin-top: -4px;
            }
            span.text {
                display: inline-block;
            }
        }
        .right {
            font-size: 13px;
            padding-left: 15px;
            p {
                margin-bottom: 5px;
                line-height: 1;
            }
            p.title {
                font-size: 15px;
            }
        }
    }

    .item, .step-title {
        &:after {
            content: '';
            width: 4px;
            background: #a1382e;
            opacity: 0.1;
            position: absolute;
            display: block;
            left: 119px;
            height: 100%;
            top: 0;
        }
    }
    .step {
        margin-top: 40px;
        &:first-child {
            .step-title:after {
                top: 7px
            }
        }
        &:last-child {
            .step-content {
                .item:last-child:after {
                    top: 0;
                    height: 8px;
                }
            }
        }
    }
</style>
