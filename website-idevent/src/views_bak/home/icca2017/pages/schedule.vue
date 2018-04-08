<template>
    <div class="schedule">
        <div class="bg"></div>
        <div class="content">
            <a href="javascript:;">时间：2017年5月8日</a>
            <a href="javascript:;">地点：上海国际会议中心</a>
            <h3 class="text-dark">ICCA交流会（3楼3CD会议室）</h3>
            <div class="clearfix">
                <div class="item clearfix">
                    <div class="left">15:30-16:00</div>
                    <div class="right">
                        <h5>注册签到</h5>
                        <p>需出示注册时的邀请码</p>
                    </div>
                </div>
                <div class="item clearfix">
                    <div class="left">16:00-16:05</div>
                    <div class="right">
                        <h5>主持人致欢迎词介绍来宾</h5>
                    </div>
                </div>
                <div class="item clearfix">
                    <div class="left">16:05-16:10</div>
                    <div class="right">
                        <h5>Noor致欢迎词</h5>
                    </div>
                </div>
                <div class="item clearfix">
                    <div class="left">16:10-16:30</div>
                    <div class="right">
                        <h5>Martin致辞，分享ICCA数据和战略方向</h5>
                    </div>
                </div>
                <div class="item clearfix">
                    <div class="left">16:30-16:45</div>
                    <div class="right">
                        <h5>上海市旅游局分享</h5>
                        <p>2013ICCA年会后的工作重点及上海会议行业的发展</p>
                    </div>
                </div>
                <div class="item clearfix">
                    <div class="left">16:45-17:30</div>
                    <div class="right">
                        <h5>ICCA中国会员分享</h5>
                        <p>加入ICCA后对业务的促进作用及参加ICCA活动的感想</p>
                    </div>
                </div>
            </div>
            <div class="clearfix">
                <div class="item clearfix">
                    <div class="left">17:30-18:00</div>
                    <div class="right">
                        <h5>自由交流</h5>
                        <p>中国会议产业的现状、机遇和挑战</p>
                    </div>
                </div>
                <br/>
                <h3 class="text-dark">ICCA交流酒会及MICE青年才俊培训学校学员授证仪式（7楼明珠厅）</h3>
                <div class="item clearfix">
                    <div class="left">18:00-18:30</div>
                    <div class="right">
                        <h5>签到</h5>
                    </div>
                </div>
                <div class="item clearfix">
                    <div class="left">18:30-18:40</div>
                    <div class="right">
                        <h5>上海市旅游局相关负责人致辞</h5>
                    </div>
                </div>
                <div class="item clearfix">
                    <div class="left">18:40-18:50</div>
                    <div class="right">
                        <h5>学员授证仪式</h5>
                    </div>
                </div>
                <div class="item clearfix">
                    <div class="left">18:50-19:00</div>
                    <div class="right">
                        <h5>学员合影</h5>
                    </div>
                </div>
                <div class="item clearfix">
                    <div class="left">19:00-20:30</div>
                    <div class="right">
                        <h5>自由交流及用餐</h5>
                    </div>
                </div>
                <br/>
                <p class="tip">注：参加MICE青年才俊培训学校的学员来自全国各地的旅行社、会展公司、旅游局、会展场地，及技术公司等</p>
                <router-link class="btn btn-primary btn-block btn-lg" :to="{name: 'register_form'}">报名注册</router-link>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        mounted() {
            this.$store.commit('SPIN', false)
        },
    }
</script>
<style lang="less" scoped>
    .bg {
        position: fixed;
        left: 0;
        top:0;
        right: 0;
        bottom: 0;
        background: #f2f2f2;
        z-index: -1;
    }

    .content {
        background: #fff;
        padding: 30px 20px 40px 20px;
        a {
            display: block;
            font-size: 15px;
            font-weight: bold;
        }
        h3 {
            margin: 7px 0 0 0;
            font-size: 20px;
            font-weight: bold;
            display: inline-block;
            line-height: 1.15;
            span {
                display: inline-block;
                font-size: 10px;
                color: #21AA57;
                border: 1px solid #21aa57;
                text-align: center;
                padding: 2px 3px;
                margin-left: 5px;
                float: right;
            }
        }
        .item {
            position: relative;
            margin-top: 20px;
            .left {
                width: 87px;
                position: absolute;
                left: 0;
                top: 0;
                font-size: 15px;
                line-height: 1.2;
                color: #333;
            }
            .right {
                margin-left: 84px;
                padding-left: 13px;
                h5 {
                    color: #333;
                    margin: 0 0 5px;
                    line-height: 1.2;
                    font-size: 15px;
                }
                p {
                    margin: 0;
                    font-size: 12px;
                    line-height: 1;
                }
            }
        }
    }
    p.tip {
        font-size: 12px;
        color: #666;
    }
</style>
