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
                title: {date: '17-01-17', title: '第一天'},
                content: [{
                    date: '', title: '到达', desc: 'Arrive'
                }]
            }, {
                title: {date: '17-01-18', title: '第二天'},
                content: [{
                    date: '09:00-12:00', title: '经销商年会', desc: 'Annual Meeting'
                }, {
                    date: '13:30-17:30', title: '区域分享会/参观工厂', desc: 'Regional Workshop & Factory Sightseeing'
                }, {
                    date: '18:00-21:00', title: '晚宴', desc: 'Gala Dinner'
                },]
            }, {
                title: {date: '17-01-19', title: '第三天'},
                content: [{
                    date: '', title: '送机', desc: 'Departure'
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
