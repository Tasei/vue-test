<template>
    <div class="mt-container">
        <div class="block">
            <div class="title">紧急求助</div>
            <div class="sub-title">中国外事领保热线：<a href="tel:0086-10-12308">0086-10-12308</a></div>
            <div class="sub-title">罗马意大利使领馆<br />中国驻意大利使馆</div>
            <div>
                地址：Via Bruxelles大街 56号<br />
                电话：<a href="tel:0039-06-96524200">0039-06-96524200</a>  <a href="tel:0039-06-96524266">0039-06-96524266</a>（护照办理）<br />
                中国外交部外事领保热线 <a href="tel:12308">12308</a><br />
                办公时间：周一-周四9:00-12:30（节假日休息）<br />
                网址：<a href="http://it.chineseembassy.org/chn/">http://it.chineseembassy.org/chn/</a><br />
                如果你在路上遇到抢劫或者骗取的时候可以拨打报警电话112（警察)或者113（宪兵），在罗马可能会遇到假警察，一般情况警察是不会随便检查你的证件的，如果遇到的话，你也可以拨打报警电话，以验证警察的真假。<br />
                医疗救助 118；火警 115。
            </div>
            <div class="sub-title">希腊游客中心EOT</div>
            <div>
                游客中心的希腊语简称是EOT，意思是希腊旅游组织。在游客中心有免费的雅典信息介绍手册和地图提供给游客。公共设施服务人员都可以用英语沟通，除了英语很多人还会意大利语、法语或者德语。游客中心在雅典机场和宪法广场各设有一个。<br />
                宪法广场游客中心<br />
                地址：Amalias 26A<br />
                工作时间：周一-周五9:00-20:00，周六和周日10:00-15:00<br />
                电话：<a href="tel:0030-210-3310392">0030-210-3310392</a> / <a href="tel:0030-210-3310716">0030-210-3310716</a><br />
                官网：<a href="http://www.athensguidi.org">www.athensguidi.org</a> / <a href="http://www.cityofathens.gr">www.cityofathens.gr</a><br />
                当地紧急求助电话报警：100；火警：199；救护车：166；查号台：131
            </div>
            <div class="sub-title">中国驻土耳其领事馆</div>
            <div>
                地址：Gölgeli Sokak No.34, Gaziosmanpaşa, 06700Ankara, Turkey<br />
                电话（总机）：<a href="tel:0090-312-4360628">0090-312-4360628</a>。<br />
                传真（总机）：<a href="tel:0090-312-4464248">0090-312-4464248</a>。<br />
                电子邮箱：<a href="mailto:chinaemb_tr@mfa.gov.cn">chinaemb_tr@mfa.gov.cn</a>。<br />
                领事咨询专用邮箱：<a href="mailto:consulate_tur@mfa.gov.cn">consulate_tur@mfa.gov.cn</a>。<br />
                中国公民寻求领事保护与协助电话：<a href="tel:0090-5388215530">0090-5388215530</a>。<br />
                中国驻伊斯坦布尔总领馆领事咨询电话：<a href="tel:0090-212-2992188">0090-212-2992188</a>，传真：<a href="tel:0090-212-2992855">0090-212-2992855</a>，领事保护协助电话：<a href="tel:0090-5347322512">0090-5347322512</a>。<br />
                中国驻伊兹密尔总领馆领保协助电话: <a href="tel:0090-5384658296">0090-5384658296</a>。<br />
                中国外交部全球领保与服务应急呼叫中心电话：<a href="tel:0086-10-12308">0086-10-12308</a> 或 <a href="tel:0086-10-59913991">0086-10-59913991</a>。<br />
                土耳其报警电话：155，急救电话：112。
            </div>
            <div class="sub-title">
                <p>温馨提示：<br/>
                    所有的电话都需要根据在当地拨打的方式加上国码、区号等信息
                </p>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data() {
            return {
            }
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
