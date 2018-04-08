<template>
    <div>
        <div class="fd-common-question">
            <div class="common-invite-code">
                <h4 class="hotel-title font-bold">
                    <i class="fa fa-caret-right fa-lg caret-right" aria-hidden="true"></i>
                    接机服务
                </h4>
                <h5 class="text-dark">深圳宝安国际机场</h5>

                <h5 class="text-dark">集合地点：</h5>
                <p>深圳保安国际机场国内到达出口处</p>
                <p>(请留意工作人员手举牌指引)</p>

                <h5 class="text-dark">接机时间：</h5>
                <p>2018年02月02日  10:00-21:00</p>
                <p>(每小时1班，深圳宝安国际机场-各酒店)</p>
                <!--<hr>-->
                <h5 class="text-dark">深圳北站</h5>

                <h5 class="text-dark">集合地点：</h5>
                <p>B1B2出站口西广场</p>
                <p>(请留意工作人员手举牌指引)</p>

                <h5 class="text-dark">接机时间：</h5>
                <p>2018年02月02日  10:00-21:00</p>
                <p>(每小时1班，深圳北站-各酒店)</p>

            </div>

            <div class="common-invite-code">
                <h4 class="hotel-title font-bold">
                    <i class="fa fa-caret-right fa-lg caret-right" aria-hidden="true"></i>
                    送机服务
                </h4>

                <h5 class="text-dark">深圳宝安国际机场</h5>

                <h5 class="text-dark">集合地点：</h5>
                <p>各住宿酒店大堂集合</p>

                <h5 class="text-dark">送机时间：</h5>
                <p>2018年02月04日   07:00-12:00</p>
                <p>(每小时1班，各酒店-深圳宝安国际机场)</p>
                <!--<hr>-->
                <h5 class="text-dark">深圳北站</h5>

                <h5 class="text-dark">集合地点：</h5>
                <p>各住宿酒店大堂集合</p>

                <h5 class="text-dark">送机时间：</h5>
                <p>2018年02月04日   07:00-12:00</p>
                <p>(每小时1班，各酒店-深圳北站)</p>

            </div>
            <div class="airImg">
                <h5>深圳宝安国际机场平面图</h5>
                <a :href="airImg">
                    <img :src="airImg" alt="">
                </a>
            </div>
            <div class="trainImg">
                <h5>深圳北站平面图</h5>
                <a :href="trainImg">
                    <img :src="trainImg" alt="">
                </a>
            </div>
        </div>

    </div>
</template>
<script>
export default{
    data(){
        return {
            airImg:require('../images/air1.png'),
            trainImg:require('../images/train1.jpg')
        }
    },
    mounted() {
        this.$store.commit('SPIN', false)
    }
}
</script>
<style lang="less" scoped rel="stylesheet/less">
    @import "../../../../assets/style/common";
    .airImg,.trainImg{
        background-color: #fff;
        padding:0 15px;
        padding-top:0.1px;
        h5{
            font-family: PingFang-SC-Medium;
            font-weight:bold;
            color: #333;
        }
    }

</style>
