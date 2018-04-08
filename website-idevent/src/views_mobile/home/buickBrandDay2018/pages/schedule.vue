<template>
    <div>
        <iui-bg></iui-bg>
        <div style="margin: 40px">
            <div class="iui-schedule">
                <div class="step" v-for="p in list">
                    <div class="step-title">
                        <div class="left ">
                            <i class="radius"></i>
                            <span class="text left-date">{{p.title.date}}</span>
                        </div>
                        <div class="right font-bold right-date " v-html="p.title.title"></div>
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
            <div class="text-yaoqiu">●<span class="caution">着装要求：</span>深色商务正装，配别克胸针、领带、丝巾。</div>
            <div >●请于<span class="caution">2018年4月12日</span>前完成注册和预订，并提前支付房费预付款。房费预付款支付完成后，房间预订方可生效。在截止日期未完成付款的房间无法保留，敬请谅解！
            </div>
        </div>

        <btn-home></btn-home>
    </div>
</template>
<script>
    import iuiTimeline from "../../../components/iui/schedule.vue"
    import iuiBg from "../../../components/iui/page_bg.vue"
    import btnHome from "../components/btn_home.vue"

    export default{
        components: {iuiTimeline, iuiBg, btnHome},
        data(){
            return {
                list: [
                    {
                        title: {date: '2018-04-17', title: '第一天 周二'},
                        content: [
                            {date: '10:00-16:00', title: '接机报到', desc: '各酒店'},
                            {date: '17:00-18:00', title: '晚餐', desc: '各酒店&乌镇西栅景区'},
                            {date: '18:00-19:00', title: '抵达会场', desc: '乌镇互联网国际会展中心'},
                            {date: '19:30-21:00', title: '2018别克品牌日', desc: '乌镇互联网国际会展中心'},
                            {date: '21:00以后', title: '返回酒店', desc: '各酒店'},
                        ]
                    },
                    {
                        title: {date: '2018-04-18', title: '第二天 周三'},
                        content: [
                            {date: '06:30-09:00', title: '自助早餐', desc: '各酒店'},
                            {date: '06:00-14:00', title: '返程送机', desc: '各酒店'},
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
<style lang="less" scoped>
    @brand-primary: #00549c;
    .iui-schedule {
        margin: 30px auto;
        color: #333;

        .left {
            width: 130px;
            float: left;
        }

        .right {
            margin-left: 130px;
        }

        .step-title {
            padding-bottom: 40px;
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
                    background: @brand-primary;
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
                    background: @brand-primary;
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
                    padding: 0 5px;
                    border-radius: 1px;
                    position: relative;

                }
            }
            .right {
                font-size: 15px;
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
                    background: @brand-primary;
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
                background: @brand-primary;
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
                .step-title{
                    margin-bottom: 0;
                    padding-bottom: 40px;
                }
                .step-content {
                    .item:last-child:after {
                        top: 0;
                        height: 8px;
                    }
                }
            }
        }
    }


    .caution{
        color:red;
        font-weight: bold;
        font-size:15px;
    }

    .left-date{
        color:white;
        background-color: #0e90d2;
        font-weight: 700;
    }
    .right-date{
        color: #0e90d2;
        font-weight: 700;
    }

.text-yaoqiu{
    /*font-size:12px;*/
}
</style>
