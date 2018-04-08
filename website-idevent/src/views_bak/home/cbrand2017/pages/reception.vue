<template>
    <div>
        <div class="fd-common-question">
            <div class="common-invite-code">
                <h4 class="hotel-title font-bold">
                    <i class="fa fa-caret-right fa-lg caret-right" aria-hidden="true"></i>
                    接机服务
                </h4>
                <h5 class="text-dark">接机时间：</h5>
                <p>11月16日，09:00-16:00，每小时一班</p>

                <h5 class="text-dark">接机地点：</h5>
                <p>广州白云国际机场</p>
                <p>(请留意现场工作人员手举牌指引)</p>
                <h5 class="text-dark">接机联系人：</h5>
                <p>范先生：<a href="tel:15821478895">15821478895</a></p>
            </div>

            <div class="common-invite-code">
                <h4 class="hotel-title font-bold">
                    <i class="fa fa-caret-right fa-lg caret-right" aria-hidden="true"></i>
                    送机服务
                </h4>
                <h5 class="text-dark">送机时间：</h5>
                <p>11月17日，06:00-12:00，每小时一班</p>

                <h5 class="text-dark">集合点：</h5>
                <p>佛山希尔顿酒店大堂</p>
                <h5 class="text-dark">送机地点：</h5>
                <p>广州白云国际机场</p>
                <h5 class="text-dark">送机联系人：</h5>
                <p>武小姐：<a href="tel:13162585667">13162585667</a></p>
                <h5 class="text-dark">现场联系人：</h5>
                <p>龚先生：<a href="tel:13918486136">13918486136</a></p>

            </div>
            <div class="common-invite-code">
                <h4 class="hotel-title font-bold">
                    <i class="fa fa-caret-right fa-lg caret-right" aria-hidden="true"></i>
                    机场地图
                </h4>
                <p><img :src="receptionPlan" class="img-responsive"></p>
                <p><img :src="receptionMap" class="img-responsive" ></p>
            </div>

        </div>

    </div>
</template>
<script>
export default{
    data(){
        return {
            receptionPlan:require("../images/receptionPlan.png"),
            receptionMap: require("../images/receptionMap.png"),
        }
    },
    mounted() {
        this.$store.commit('SPIN', false)
    }
}
</script>
<style lang="less" scoped rel="stylesheet/less">
    @import "../../../../assets/style/common";
</style>
