<template>
    <div>
        <div class="fd-common-question">
            <div class="common-invite-code">
                <h4 class="hotel-title font-bold">
                    <i class="fa fa-caret-right fa-lg caret-right" aria-hidden="true"></i>
                    接机服务
                </h4>

                <h5 class="text-dark">接机时间：</h5>
                <p>2018年3月7日，11:00-22:00</p>
                <p>2018年3月8日，08:00-14:00</p>

                <h5 class="text-dark">接机地点：</h5>
                <p>成都（T1/T2）航站楼/成都东站（西广场出口），每半小时一班</p>

                <h5 class="text-dark">抵达地班车线路：</h5>
                <p>一：成都机场/成都东站-成都希尔顿酒店，车程大约30分钟</p>
                <p>二：成都机场/成都东站-成都棕榈泉费尔蒙酒店，车程30分钟</p>
                <p>三：成都机场/成都东站-成都首座万豪酒店，车程24分钟</p>
                <p>四：成都机场/成都东站-中国西部国际博览城，车程50分钟</p>
            </div>

            <div class="common-invite-code">
                <h4 class="hotel-title font-bold">
                    <i class="fa fa-caret-right fa-lg caret-right" aria-hidden="true"></i>
                    摆渡服务
                </h4>

                <h5 class="text-dark">3月8日摆渡服务：</h5>
                <p>各酒店-中国西部国际博览城-各酒店</p>
                <p>成都机场/成都东站-中国西部国际博览城-各酒店</p>

                <h5 class="text-dark">3月9日摆渡服务：</h5>
                <p>各酒店-中国西部国际博览城-成都机场/成都东站</p>
                <p>各酒店-中国西部国际博览城-成都棕榈泉费尔蒙酒店-成都机场/成都东站</p>
            </div>

            <div class="common-invite-code">
                <h4 class="hotel-title font-bold">
                    <i class="fa fa-caret-right fa-lg caret-right" aria-hidden="true"></i>
                    送机服务
                </h4>

                <h5 class="text-dark">送机时间：</h5>
                <p>2018年3月9日，18:00-20:00</p>
                <p>每半时正点1班</p>

                <h5 class="text-dark">送机线路：</h5>
                <p>中国西部国际博览城-成都机场（T1/T2航站楼）/成都东站</p>

                <h5 class="text-dark">送机时间：</h5>
                <p>2018年3月9日，16:00-20:00</p>
                <p>每半时正点1班</p>

                <h5 class="text-dark">送机线路：</h5>
                <p>成都棕榈泉费尔蒙酒店-成都机场（T1/T2航站楼）/成都东站</p>
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
