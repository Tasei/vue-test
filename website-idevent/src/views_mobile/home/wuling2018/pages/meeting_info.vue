<template>
<div class="bg">
    <img :src="banner" alt="" style="display: block; margin-bottom: 30px;">
    <div class="step" v-for="p in list" :key="p.id">
        <div class="step-title">
            <div class="left">
                <i class="radius"></i>
                <span class="text">{{p.title.date}}</span>
            </div>
            <div class="right font-bold">{{p.title.title}}</div>
            <div style="clear:both"></div>
        </div>
        <div class="step-content">
            <div class="item" v-for="d in p.content" :key="d.id">
                <div class="left">
                    <span class="text text-dark">{{d.date}}</span>
                </div>
                <div class="right text-dark">
                    <p class="title">{{d.title}} <span>{{d.en_title}}</span></p>
                    <div class="ads" v-for="hotel in d.desc">
                        <p>{{hotel.title}}</p>
                        <p>{{hotel.en_title}}</p>
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
        document.title = '年会日程'
        this.$store.commit('SPIN', false)
    },
    data () {
        return {
            banner: require('../images/dahui-banner.jpg'),
            list: [
                {
                    title: {date: '3月14日', title: 'Mar 14'},
                    content: [
                        {
                            date: '09:00-24:00', title: '嘉宾报到', en_title: 'Check-in', desc: [
                            { title: '厦门国际会议中心酒店', en_title: 'International Conference Center Hotel Xiamen'}, {
                                title: '厦门香格里拉大酒店',
                                en_title: 'Shangri-la Hotel Xiamen'
                            }]
                        },
                    ]
                },
                {
                    title: {date: '3月15日', title: 'Mar 15'},
                    content: [
                       {
                            date: '09:30-12:00', title: '供应商年会', en_title: 'Supplier Conference', desc: [
                            { title: '厦门国际会议中心酒店', en_title: '二楼国际宴会厅'}, {
                                title: '2F International Multi-function Hall',
                                en_title: 'International Conference Center Hotel'
                            }]
                        },
                        {
                            date: '18:30-20:30', title: '答谢晚宴', en_title: 'Banquet', desc: [
                            { title: '厦门国际会议中心酒店', en_title: '二楼国际宴会厅'}, {
                                title: '2F International Multi-function Hall',
                                en_title: 'International Conference Center Hotel'
                            }]
                        },
                    ]
                },
                {
                    title: { date: '3月16日', title: 'Mar 16'},
                    content: [
                        {
                            date: '08:00-12:00', title: '嘉宾返程', en_title: 'Return', desc: []
                        }
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
        padding: 40px 0;
        padding-top: 0;
        min-height: 100vh;
    }
    .left {
        width: 130px;
        float: left;
    }
    .ads {
        color: #bdbdbd;
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
