<template>
    <div class="schedule">
        <div class="bg"></div>
        <div class="content">
            <a href="javascript:;">2018年5月8日-9日</a>
            <h3 class="text-dark">2018中国会议与商务旅行论坛暨交易会（CCBTF）</h3>
            <img :src="pic" />
            <p>2018中国会议与商务旅行论坛暨交易会（CCBTF）由上海市旅游局主办，GBTA（全球商务旅行协会）和ICCA（国际大会及会议协会）协办，上海会展有限公司承办，将于2018年5月8日 - 9日在上海国际会议中心举行。</p>
            <p>作为MICE与商旅行业首屈一指的品牌活动，CCBTF已成功举办七届。CCBTF坚持致力于打造高端 MICE 行业交流互动平台，旨在分享国际、国内会议会奖与商务旅游行业的现状与发展趋势，解读全球经济新格局下的重点领域行业变化；引入行业创新理念及科技应用，加强行业交流与提升，搭建业内沟通联络，提供更多业务发展机会。</p>
            <p>
                <a href="javascript:;">CCBTF2018亮点：</a>
                1、由国家旅游局指导，京、沪、苏、浙等七地旅游局/委共同发起的“中国会奖与商务旅游品牌推广协作体”将在大会上成立；<br/>
                2、大咖级演讲嘉宾参加服务体验系列演讲（Travel Experience Design）；<br/>
                3、与会会奖及商务旅行专业人士预计突破600人；<br/>
                4、精彩的行业内市场、技术和管理等案例分享；<br/>
                5、权威的商旅市场报告；<br/>
                6、丰富的线下活动：“城市之夜”、会后考察，助您结识更多的合作伙伴；<br/>
                7、最新板块“浦江峰汇”，为您带来行业的领导者的观察和洞见。<br/>
            </p>
            <div class="line"></div>
            <div class="clearfix">
                <div class="item clearfix">
                    <div class="left">时间</div>
                    <div class="right">
                        <h5>2018年5月8日-9日</h5>
                    </div>
                </div>
                <div class="item clearfix">
                    <div class="left">地点</div>
                    <div class="right">
                        <h5>上海国际会议中心</h5>
                    </div>
                </div>
                <div class="item clearfix">
                    <div class="left">会议注册费</div>
                    <div class="right">
                        <h5>1800元/人（ICCA会员专享），参会代表在沪住宿、交通等自理</h5>
                    </div>
                </div>
                <div class="item clearfix">
                    <div class="left">会议详情及注册请登录</div>
                    <div class="right">
                        <h5 style="margin-top: -3px"><a href="http://www.sh-datastone.cn/ccbtfwq/partake.php?chlink=">www.ccbtf.org</a></h5>
                    </div>
                </div>
            </div>
            <div class="logo"></div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                pic: require("../images/ccbtf.jpg")
            }
        },
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
            margin: 7px 0 10px 0;
            font-size: 20px;
            font-weight: bold;
        }
        >p {
            line-height: 1.6;
        }
        img {
            margin: 10px 0 20px;
        }
        .line {
            background: #dddddd;
            height: 1px;
            margin: 20px 0 10px;
        }
        .item {
            position: relative;
            margin-top: 10px;
            .left {
                width: 87px;
                position: absolute;
                left: 0;
                top: 0;
                font-size: 13px;
                line-height: 1.2;
                color: #666;
            }
            .right {
                margin-left: 87px;
                h5 {
                    color: #333;
                    margin: 0 0 5px;
                    line-height: 1.2;
                    font-size: 13px;
                    a {
                        text-decoration: underline;
                        font-weight: normal;
                    }
                }
                p {
                    margin: 0;
                    font-size: 12px;
                    line-height: 1;
                }
            }
        }
        .logo {
            background: url("../images/logo.png") no-repeat center;
            background-size: 100px 100px;
            height: 100px;
            margin-top: 20px;
        }
    }
</style>
