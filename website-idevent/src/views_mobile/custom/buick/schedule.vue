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
                    <p class="text-gray">{{d.desc}}</p>
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
                title: {date: '2017-02-17', title: '第一天'},
                content: [{
                    date: '16:00-20:00', title: '接机报到', desc: '地点：各酒店'
                }]
            }, {
                title: {date: '2017-02-18', title: '第二天'},
                content: [{
                    date: '09:00-11:00', title: '接机报到', desc: '地点：各酒店'
                }, {
                    date: '11:30-12:30', title: '自助午餐', desc: '地点：各酒店'
                }, {
                    date: '13:00-17:00', title: '主题大会+颁奖典礼', desc: '地点：国家会展中心NH馆'
                }, {
                    date: '17:00-19:00', title: '会间休息', desc: '地点：各酒店'
                }, {
                    date: '19:00-21:00', title: '主题晚宴', desc: '地点：国家会展中心NH馆'
                },]
            }, {
                title: {date: '2017-02-19', title: '第三天'},
                content: [{
                    date: '06:00-12:00', title: '返程送机', desc: '地点：各酒店'
                }]
            }]
        }
    }
}
</script>
<style lang="less" scoped>
    .col-xs-4, .col-xs-8 {
        padding: 0;
    }
    .bg {
        background: url("../../../assets/images/mobile/shedule_bg.png") center no-repeat;
        background-size: cover;
        padding: 40px 0;
        min-height: 100vh;
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
                background: #00549c;
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
                background: #00549c;
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
                background-color: #00549c;
                color: #fff;
                padding: 0 5px;
                border-radius: 1px;
                position: relative;
                &:before {
                    content: '';
                    width: 0;
                    height: 0;
                    border-top: 3px solid transparent;
                    border-left: 6px solid #00549c;
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
            color: #00549c;
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
                background: #00549c;
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
            content: '';
            width: 4px;
            background: #00549c;
            opacity: 0.1;
            position: absolute;
            display: block;
            left: 119px;
            height: 100%;
            top: 0;
        }
    }
    .step {
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
