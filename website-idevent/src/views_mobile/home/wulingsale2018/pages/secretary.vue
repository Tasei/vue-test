<template>
    <div class="page-container">
        <div class="text-block-container">
            <div class="text-content">
               <p style="margin: 0">尊敬的嘉宾：</p>
               <p style="margin: 0">Dear Guests：</p>
               <div class="indent">
                   欢迎您参加上汽通用五菱汽车股份有限公司 2018 年度经销商年会！为保证会议廉洁高效地召开，共建全价值链廉洁诚信体系。希望您花费 5 分钟时间阅读以下材料并完成 SGMW 廉洁诚信体系建设调查问卷。
               </div>
               <div class="indent">
                   Welcome to the 2018 SGMW Annual Service Supplier Conference! In order to guarantee that the Conference is honestly and efficiently convened and to create a whole-value-chain honesty and integrity system, please take 5 mins in reading the following materials and completing SGMW honesty and integrity system construction survey.
               </div>
            </div>
            <div class="text-content">
                <ul>
                    <li>
                        <router-link :to="{name:'home_page',query: {page: 'xuzhi'}}" class="fucka">
                            <h3>经销商年会廉洁诚信参会须知</h3>
                            <p>Notice of Participation in Honesty and Integrity in Annual Supplier Conference.</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{name:'home_page',query: {page: 'xieyi'}}" class="fucka">
                            <h3>经销商及服务商廉洁诚信协议</h3>
                            <p>Agreement of Honesty and Integrity of Service Supplier</p>
                        </router-link>
                    </li>
                    <li>
                        <a class="fuckc" href="https://www.wjx.cn/jq/21014171.aspx">
                            <h3>点击此处进行问卷调查</h3>
                            <p>Click here to participate in the survey</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'wulingSafe',
        data() {
            return {}
        },
        mounted() {
            document.title = '廉洁参会'
            this.$store.commit('SPIN', false)
        }
    }
</script>

<style lang="less" scoped>
    @import '../style.less';

    .text-content {
        margin-top: 20px;
    }
    .indent {
        text-indent: 24px;
        margin: 5px 0;
    }
    h3 {
        margin-top: 5px;
        margin-bottom: 5px;
        p {
            margin-top: 5px;
        }
    }
    li {
        padding: 0 20px;
        border: 1px solid #ddd;
        margin: 20px 0;
        border-radius: 3px;
    }
    li a {
        padding: 10px;
        padding-left: 40px;
        display: block;
    }
    .fucka {

        background: url('../images/icon_pdf.png') no-repeat left center;
        background-size: 35px auto;
    }
    .fuckc {
        background: url('../images/icon_question.png') no-repeat left center;
        background-size: 35px auto;
    }
</style>
