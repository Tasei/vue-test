<template>
    <div>
        <div class="fd-common-question">
            <div class="common-invite-code">
                <h4 class="hotel-title font-bold">
                    <i class="fa fa-caret-right fa-lg caret-right" aria-hidden="true"></i>
                    接机服务
                </h4>

                <h5 class="text-dark">接机时间：</h5>
                <p class="text-primary">2018年4月8日，11:00-22:00 每小时一班，准点发车</p>
                <p>重庆江北机场T2/T3-重庆悦来温德姆酒店-重庆保利皇冠酒店</p>
                <p class="text-primary">2018年4月9日，10:00-12:00 每小时一班，准点发车</p>
                <p>重庆江北机场T2/T3-重庆威灵顿酒店-重庆华宇温德姆至尊豪廷酒店</p>

            </div>

            <div class="common-invite-code">
                <h4 class="hotel-title font-bold">
                    <i class="fa fa-caret-right fa-lg caret-right" aria-hidden="true"></i>
                    活动接驳
                </h4>

                <h5 class="text-dark">接机时间：</h5>
                <p class="text-primary">2018年4月9日，13:40-15:00 人满发车</p>
                <p>重庆华宇温德姆至尊豪廷酒店 - 重庆国际博览中心N1馆</p>
                <p class="text-primary">2018年4月9日，13:50-15:10 人满发车</p>
                <p>重庆悦来温德姆酒店 - 重庆国际博览中心N1馆</p>
                <p>重庆威灵顿酒店 - 重庆国际博览中心N1馆</p>
                <p>重庆保利皇冠酒店 - 重庆国际博览中心N1馆</p>
                <p class="text-primary">2018年4月9日，17:30-18;30 人满发车</p>
                <p>重庆国际博览中心N1馆 - 重庆悦来温德姆酒店</p>
                <p>重庆国际博览中心N1馆 - 重庆保利皇冠酒店</p>
                <p>重庆国际博览中心N1馆 - 重庆威灵顿酒店</p>
                <p>重庆国际博览中心N1馆 - 重庆华宇温德姆至尊豪廷酒店</p>
            </div>

            <div class="common-invite-code">
                <h4 class="hotel-title font-bold">
                    <i class="fa fa-caret-right fa-lg caret-right" aria-hidden="true"></i>
                    送机服务
                </h4>

                <h5 class="text-dark">送机时间：</h5>
                <p class="text-primary">2018年4月10日，17:30-18;30 每小时一班，准点发车</p>
                <p>重庆华宇温德姆至尊豪廷酒店 - 重庆江北机场T2/T3</p>
                <p>重庆悦来温德姆酒店 - 重庆江北机场T2/T3</p>
                <p>重庆威灵顿酒店 - 重庆江北机场T2/T3</p>
                <p>重庆保利皇冠酒店 - 重庆江北机场T2/T3</p>
                <!--<h5 class="text-dark">送机线路：</h5>-->
                <!--<p>中国西部国际博览城-成都机场（T1/T2航站楼）/成都东站</p>-->

                <!--<h5 class="text-dark">送机时间：</h5>-->
                <!--<p>2018年3月9日，16:00-20:00</p>-->
                <!--<p>每半时正点1班</p>-->

                <!--<h5 class="text-dark">送机线路：</h5>-->
                <!--<p>成都棕榈泉费尔蒙酒店-成都机场（T1/T2航站楼）/成都东站</p>-->
            </div>
        </div>

    </div>
</template>
<script>
export default{
    data(){
        return {

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
