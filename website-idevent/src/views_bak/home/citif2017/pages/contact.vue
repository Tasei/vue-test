<template>
    <div class="mt-container">
        <div class="block">
            <div class="title">联系方式</div>
            <p>2017中国（杭州）会议与奖励旅游产业交易会组委会</p>
        </div>

        <div class="block">
            <div class="title">供应商咨询</div>
            <div class="sub-title">王强</div>
            <p>
                <a href="tel:13681235853">电话：13681235853</a>
            </p>
            <p>
                <a href="mailto:wangqiang@meetingschina.com">电子邮件：wangqiang@meetingschina.com</a>
            </p>
            <div class="sub-title">高明慧</div>
            <p>
                <a href="tel:18518389429">电话：18518389429</a>
            </p>
            <p>
                <a href="mailto:gmh@meetingschina.com">电子邮件：gmh@meetingschina.com</a>
            </p>
        </div>

        <div class="block">
            <div class="title">买家咨询</div>
            <div class="sub-title">吕然</div>
            <p>
                <a href="tel:010-59490832">电话：010-59490832</a>&nbsp;&nbsp;
                <a href="tel:15801605254">15801605254</a>
            </p>

            <div class="sub-title">马晓伟</div>
            <p>
                <a href="tel:010-58449648">电话：010-58449648</a>&nbsp;&nbsp;
                <a href="tel:18600266846">18600266846</a>
            </p>

            <div class="sub-title">邮箱</div>
            <p>
                <a href="mailto:cmic@meetingschina.com">cmic@meetingschina.com</a>
            </p>
        </div>

        <div class="block">
            <div class="title">会务系统咨询</div>
            <div class="sub-title">吴晶晶</div>
            <p>地址：上海市静安区长安路1001号长安大厦1号楼912室</p>
            <p>邮编：200070</p>
            <p><a href="mailto:wujingjing@idevent.cn">邮箱：wujingjing@idevent.cn</a></p>
            <p>座机：<a href="tel:021-61425817">021-61425817</a></p>
            <p>工作时间：周一至周五, 09:00-12:00, 13:00-17:00</p>
        </div>
    </div>
</template>
<script>
    import iuiBlock from "../../../components/iui/block.vue"
    import iuiTitle from "../../../components/iui/block_title.vue"
    export default{
        components:{
            iuiBlock, iuiTitle
        },
        mounted() {
            this.$store.commit('SPIN')
        }
    }
</script>
<style lang="less" scoped>
    @import "../assets/style";
</style>
