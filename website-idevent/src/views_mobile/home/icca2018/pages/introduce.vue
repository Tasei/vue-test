<template>
    <div class="contact">
        <div class="bg"></div>
        <iui-block>
            <iui-title>ICCA中国委员会简介</iui-title>
            <p>
                国家委员会（Country Committee）是某个会员国的自愿组织，ICCA在全球一共有9个国家委员会：澳大利亚、中国、德国、巴西、马来西亚、泰国、印度、意大利及墨西哥。<br/>
                <br/>
                为进一步推进中国会议市场发展，吸引招徕更多的国际大会和协会会议来中国举办，上海市旅游局联手北京市旅游发展委员会以及内地其他ICCA会员单位，于2010年9月21日成立ICCA中国委员会，并设规划工作组，负责委员会工作目标的具体执行。ICCA中国委员会的成立是中国会议旅游业发展的一个里程碑，标志着中国会议旅游业界有了一个专门的组织和一个专业的团队。<br/>
                <br/>
                中国内地目前一共有54家成员单位，内地会员城市为北京、上海、杭州、深圳、广州、扬州、苏州、重庆、成都、海口、厦门、南京、西安、宁波、三亚、青岛、珠海、郑州及长沙。<br/>
            </p>
        </iui-block>
        <!--
        <iui-block>
            <iui-title>ICCA中国委员会成员</iui-title>
            <div class="member text-center clearfix">
                <h5> ICCA China-P.R. Committee</h5>
                <div class="col-xs-12 clearfix">
                    <div class="col-xs-6">
                        <div class="avatar clair"></div>
                        <h3>Chair</h3>
                        <h5>Mrs. Wang Yue</h5>
                        <p>Beijing Municipal Commission of Tourism Development</p>
                    </div>
                    <div class="col-xs-6">
                        <div class="avatar deputy_chair"></div>
                        <h3>Deputy Chair</h3>
                        <h5>Ms. Connie Cheng</h5>
                        <p>Shanghai Municipal Tourism Administration</p>
                    </div>
                </div>
            </div>
            <div class="line"></div>
            <div class="member text-center clearfix">
                <h5>ICCA China Committee Working Group</h5>
                <div class="col-xs-12 clearfix">
                    <div class="col-xs-6">
                        <div class="avatar patrick"></div>
                        <h5>Patrick Chen</h5>
                        <p>SMTA Shanghai</p>
                    </div>
                    <div class="col-xs-6">
                        <div class="avatar ren"></div>
                        <h5>Ren Jianghao</h5>
                        <p>Beijing Municipal Commission of Tourism Development</p>
                    </div>
                </div>
                <div class="col-xs-12 clearfix">
                    <div class="col-xs-6">
                        <div class="avatar liu"></div>
                        <h5>Liu Haiying</h5>
                        <p>China National Convention Center (CNCC)</p>
                    </div>
                    <div class="col-xs-6">
                        <div class="avatar david"></div>
                        <h5>David Zhong</h5>
                        <p>MICE China</p>
                    </div>
                </div>
                <div class="col-xs-12 clearfix">
                    <div class="col-xs-6">
                        <div class="avatar frankie"></div>
                        <h5>Frankie Gao</h5>
                        <p>MCI Shanghai</p>
                    </div>
                    <div class="col-xs-6">
                        <div class="avatar maria"></div>
                        <h5>Maria Zheng</h5>
                        <p>Shanghai China Travel International</p>
                    </div>
                </div>
            </div>
        </iui-block>
        -->
    </div>
</template>
<script>
    import iuiBlock from "../../../../views_mobile/components/iui/block.vue"
    import iuiTitle from "../../../../views_mobile/components/iui/block_title.vue"
    export default{
        components: {iuiBlock, iuiTitle},
        mounted() {
            this.$store.commit('SPIN', false)
        },
    }
</script>
<style lang="less" scoped>
    .contact {
        background: #f2f2f2;
        min-height: 100vh;
    }
    .bg {
        position: fixed;
        left: 0;
        top:0;
        right: 0;
        bottom: 0;
        background: #f2f2f2;
        z-index: -1;
    }
    .member {
        h5 {
            font-size: 13px;
            line-height: 1;
            margin: 20px 0;
        }
        .col-xs-12 {
            padding-left: 0;
            padding-right: 0;
            margin-bottom: 20px;
        }
        .col-xs-6 {
            padding-left: 5px;
            padding-right: 5px;
            .avatar {
                display: inline-block;
                width: 80px;
                height: 80px;
                background-size: 100% 100%;
                background-position: center;
                background-repeat: no-repeat;
                &.clair {
                    background-image: url("../images/chair.png");
                }
                &.deputy_chair {
                    background-image: url("../images/deputy_chair.png");
                }
                &.patrick {
                    background-image: url("../images/patrick.png");
                }
                &.ren {
                    background-image: url("../images/ren.png");
                }
                &.liu {
                    background-image: url("../images/liu.png");
                }
                &.david {
                    background-image: url("../images/david.png");
                }
                &.frankie {
                    background-image: url("../images/franckie.png");
                }
                &.maria {
                    background-image: url("../images/maria.png");
                }
            }
            h3 {
                font-size: 15px;
                line-height: 1;
                color: #333;
                font-weight: bold;
                margin: 10px 0 0;
            }
            h5 {
                font-size: 13px;
                line-height: 1;
                color: #333;
                font-weight: bold;
                margin: 10px 0 0;
            }
            p {
                font-size: 12px;
                line-height: 1.08333;
                margin: 5px 0 0;
            }
        }
    }
    .line {
        background: #dddddd;
        height: 1px;
        margin: 0;
    }
</style>
