<template>
    <div class="mt-container">
        <div class="block">
            <div class="title">货币</div>
            <div>
                <p>
                    因为在欧洲当地购物需要支付欧元现金，在游轮上消费需要美金，因此请您务必在出行前准备一定的外币现金，并携带好您登记信息时使用的信用卡（仅限印有VISA、MASTER或者JCB标志的信用卡），并且适当准备一些小额钞票。按照我国外汇管理的相关规定，每天持本人身份证最多提取5000美元等值的外币，欧元现金最好在出发前事先在国内银行换好，也可以在当地大银行，机场或者酒店办理兑换。
                </p>
                <p>信用卡图示：</p>
                <p>
                <div style="text-align: center;float: left;width: 33%">
                    <img src="../assets/visa.png">
                        VISA
                </div>
                <div style="text-align: center;float: left;width: 33%">
                    <img src="../assets/mastercard.png">
                    MASTER
                </div>
                <div style="text-align: center;width: 33%;float: left;">
                    <img src="../assets/jcbcards.png" >
                    JCB
                </div>
                </p>
                <p >美元相关介绍如下：</p>
                <p>欧元币值：5欧元，10欧元，20欧元，50欧元，100欧元，200欧元，500欧元。<br/>
                    硬币：1分，2分，5分，10分，20分，50分，1元，2元</p>
                <p style="text-align: center">
                    <img src="../assets/euro.png" alt="欧元图示">
                </p>
                <p>美元币值：1美元、2美元、5美元、10美元、20美元、50美元、100美元，<br/>
                    硬币：1美分、2美分、5美分、10美分、20美分、25美分、50美分、1美元。</p>
                <p style="text-align: center">
                    <img src="../assets/us-zhibi.png" alt="美元币值" style="width: 49%"><br/>
                    <img src="../assets/us-yingbi.png" alt="美元银币" style="width: 49%">
                </p>
                <p>兑换步骤如下：</p>
                <p>
                    1、去柜台上面申请兑换外币，如果数量巨大的话需要提前预约。<br/>
                    2、填写兑换单，按照上面的指示填写信息。<br/>
                    3、去柜台办理相关手续，审核信息后签字。
                </p>
                <p>常见的查询汇率的方式主要有以下几种：</p>
                <p>
                    1、在期货外汇软件上附带外汇行情走势。<br/>
                    2、各大财经网站上也有外汇报价。<br/>
                    3、通过手机的自带的外汇查询工具也可以查询汇率情况。
                </p>
                <p>中国银行换外汇必须遵守国家外汇兑换年度额度：</p>
                <p>
                    1、中国居民每人每年外汇兑换额度是年度总额为等值五万美金，在五万美金个人换汇额度内换外汇时，凭借个人真实身份证明到银行就可以了；<br/>
                    2、超过五万美金时，需要提供相应的证明材料经过外汇局审批后换外汇。<br/>
                    注：五万美金为参考标准，也就是说兑换的欧元折算成美元的价值。<br/>
                </p>
                <p>货币兑换（仅供参考）</p>
                <p>
                    1人民币 = 0.1272欧元<br/>
                    1欧元 = 7.8639人民币
                </p>
                <p>
                    1人民币=0.1505美元<br/>
                    1美元=6.6465人民币
                </p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        created() {
            if (this.$route.query.title) {
                document.title = this.$route.query.title;
            }
        },
        mounted() {
            this.$store.commit('SPIN');
        }
    }
</script>
<style lang="less" scoped>
    @import "../assets/style.less";
</style>
