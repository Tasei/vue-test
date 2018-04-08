<template>
    <div>
        <div class="fd-common-question">
            <div class="common-invite-code">
                <h4 class="hotel-title font-bold">
                    <i class="fa fa-caret-right fa-lg caret-right" aria-hidden="true"></i>
                    接机服务
                </h4>
                <h5 class="text-dark">接机时间：</h5>
                <p>2月27日，10:00-22:00，每小时一班</p>

                <h5 class="text-dark">接机地点：</h5>
                <p>上海浦东国际机场、上海虹桥国际机场、上海虹桥火车站</p>
                <p>(请留意现场工作人员手举牌指引)</p>
            </div>

            <div class="common-invite-code">
                <h4 class="hotel-title font-bold">
                    <i class="fa fa-caret-right fa-lg caret-right" aria-hidden="true"></i>
                    送机服务
                </h4>
                <h5 class="text-dark">送机时间：</h5>
                <p>3月1日，6-12点每小时一班</p>
                <p>14/16/17/18点各一班</p>

                <h5 class="text-dark">集合点：</h5>
                <p>各酒店大堂</p>
                <h5 class="text-dark">送机地点：</h5>
                <p>上海浦东国际机场、上海虹桥国际机场、上海虹桥火车站</p>
            </div>

            <div class="common-invite-code">
                <h4 class="hotel-title font-bold">
                    <i class="fa fa-caret-right fa-lg caret-right" aria-hidden="true"></i>
                    机场地图
                </h4>
                <p>
                    <router-link :to="{name: 'home_page', query: {page: 'map', hash: 'map_pvg_t1'}}">上海浦东国际机场T1航站楼机场地图</router-link>
                <p>
                    <router-link :to="{name: 'home_page', query: {page: 'map', hash: 'map_pvg_t2'}}">上海浦东国际机场T2航站楼机场地图</router-link>
                <p>
                    <router-link :to="{name: 'home_page', query: {page: 'map', hash: 'map_sha_t2'}}">上海虹桥国际机场T2航站楼机场地图</router-link>
                </p>
            </div>

        </div>

    </div>
</template>
<script>
export default{
    mounted() {
        this.$store.commit('SPIN', false)
    }
}
</script>
<style lang="less" scoped rel="stylesheet/less">
    @import "../../../assets/style/common";
</style>
