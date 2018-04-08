<template>
    <div>
        <div class="fd-common-question">
            <mt-navbar class="geely-navbar" v-model="selected">
                <mt-tab-item  id="1">2月16日接机/站</mt-tab-item>
                <mt-tab-item  id="2">2月17/18日穿梭接驳</mt-tab-item>
                <mt-tab-item  id="3">2月19日送机/站</mt-tab-item>
            </mt-navbar>

            <!-- tab-container -->
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                    <div class="common-invite-code">
                        <h4 class="hotel-title font-bold">
                            <i class="fa fa-caret-right fa-lg caret-right" aria-hidden="true"></i>
                            机场接机
                        </h4>
                        <h5 class="text-gray">接机地点</h5>
                        <p class="text-dark">如果您选择飞机出行，组委会将在<span class="text-primary">T1航站楼到达厅</span>和<span class="text-primary">T3航站楼到达出口12号门</span>举牌迎接，我们将用大巴车送您前往入住酒店。</p>

                        <h5 class="text-gray">发车时间</h5>
                        <p class="text-dark">09:00—22:00  每一小时发一趟车，<br>其中高峰期（14:00—18:00），每半小时发一趟车</p>

                        <h5 class="text-gray">接机联系人</h5>
                        <p class="text-dark">马应章：<a href="tel:13819161376">13819161376</a></p>

                        <h5 class="text-gray">大巴车停放位置</h5>
                        <p class="row">
                            <img :src="map_1" />
                        </p>
                    </div>

                    <div class="common-invite-code">
                        <h4 class="hotel-title font-bold">
                            <i class="fa fa-caret-right fa-lg caret-right" aria-hidden="true"></i>
                            东站接站
                        </h4>
                        <h5 class="text-gray">接机地点</h5>
                        <p class="text-dark">如果您选择动车出行，动车将抵达杭州东站。组委会将在<span class="text-primary">动车站到达厅</span>举牌迎接，动车站出站口较多，请您认准我们举“2017年吉利商务年会”迎接牌的工作人员，他们将带引您去往大巴车停车处。</p>

                        <h5 class="text-gray">发车时间</h5>
                        <p class="text-dark">09:00—21:00  每一小时发一趟车，<br>其中高峰期（14:00—18:00），每45分钟发一趟车</p>

                        <h5 class="text-gray">东站联系人</h5>
                        <p class="text-dark"> 张谢华：<a href="tel:13305711392">13305711392</a></p>

                        <h5 class="text-gray">大巴车停放位置</h5>
                        <p class="row">
                            <img :src="map_2" />
                        </p>
                    </div>

                    <div class="common-invite-code">
                        <h4 class="hotel-title font-bold">
                            <i class="fa fa-caret-right fa-lg caret-right" aria-hidden="true"></i>
                            城站接站
                        </h4>
                        <h5 class="text-gray">接机地点</h5>
                        <p class="text-dark">如果您选择普通列车出行，列车将抵达杭州城站。组委会将在<span class="text-primary">车站到达厅</span>举牌迎接，城站人流量较大，请您认准我们举“2017年吉利商务年会”迎接牌的工作人员，他们将带引您去往大巴车停车处。</p>

                        <h5 class="text-gray">发车时间</h5>
                        <p class="text-dark">09:00—18:00 每一小时发一趟车</p>

                        <h5 class="text-gray">城站联系人</h5>
                        <p class="text-dark">胡佳州：<a href="tel:13511330306">13511330306</a></p>

                        <h5 class="text-gray">大巴车停放位置</h5>
                        <p class="row">
                            <img :src="map_3" />
                        </p>
                    </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <div class="common-invite-code">
                        <h4 class="hotel-title font-bold">
                            <i class="fa fa-caret-right fa-lg caret-right" aria-hidden="true"></i>
                            入住酒店 → 主会场
                        </h4>
                        <h5 class="text-primary">2017/02/17 上午</h5>
                        <p class="text-dark">
                            1. 吉利组委会将向嘉宾统一提供由入住酒店至主论坛会议地点的大巴接送服务。<br>
                            2. 为了能准时抵达主论坛完成安检并准时参会，请您务必按规定的时间到酒店大巴发车处等候，我们会根据路程的远近，设置发车时间，温馨提示各位务必携带参会证，并正装出席。
                        </p>
                        <h5 class="text-gray">（附：各酒店大巴出发时间表）</h5>

                        <table class="table table-bordered text-center">
                            <thead>
                            <tr>
                                <td colspan="3">2月17日 上午</td>
                            </tr>
                            <tr>
                                <td width="50px">发车时间</td>
                                <td>接驳信息</td>
                                <td width="50px">备注</td>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>08:00<br>08:10</td>
                                    <td>尊蓝钱江豪华精选酒店-洲际酒店</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>08:00<br>08:20</td>
                                    <td>瑞立江河汇酒店-洲际酒店</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>08:00<br>08:20</td>
                                    <td>东方寓舍·黄龙酒店-洲际酒店</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>08:00<br>08:20</td>
                                    <td>钱江新城万豪酒店-洲际酒店</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>08:00<br>08:20</td>
                                    <td>钱江新城万怡酒店-洲际酒店</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>泛海钓鱼台酒店-洲际酒店</td>
                                    <td>步行前往</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="common-invite-code">
                        <h4 class="hotel-title font-bold">
                            <i class="fa fa-caret-right fa-lg caret-right" aria-hidden="true"></i>
                            主会场 → 入住酒店
                        </h4>
                        <h5 class="text-primary">2017/02/17 晚上</h5>
                        <p class="text-dark">
                            1. 吉利组委会将向嘉宾统一提供由主会场至个住宿酒店的送车服务。<br>
                            2. 为了避免拥堵，我们将在洲际酒店同时设两个上车点，分别为大堂及杭州厅。请各位嘉宾按规定，听从现场工作人员疏导指引前往上车点上车。
                        </p>
                        <h5 class="text-gray">（附：各酒店大巴出发时间表）</h5>

                        <table class="table table-bordered text-center">
                            <thead>
                            <tr>
                                <td colspan="3">2月17日 晚上</td>
                            </tr>
                            <tr>
                                <td width="50px">发车时间</td>
                                <td>接驳信息</td>
                                <td width="50px">备注</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td rowspan="5">20:30<br>21:00</td>
                                <td>洲际酒店-尊蓝钱江豪华精选酒店</td>
                                <td rowspan="5" width="150px">
                                    行车线路一、洲际酒店大堂--杭州东方寓舍·黄龙酒店--杭州钱江新城万怡酒店--杭州尊蓝钱江豪华精选酒店<br>
                                    行车线路二、洲际酒店杭州厅外广场--杭州钱江新城万豪酒店--杭州瑞立江河汇酒店</td>
                            </tr>
                            <tr>
                                <td>洲际酒店-瑞立江河汇酒店</td>
                            </tr>
                            <tr>
                                <td>洲际酒店-东方寓舍·黄龙酒店</td>
                            </tr>
                            <tr>
                                <td>洲际酒店-钱江新城万豪酒店</td>
                            </tr>
                            <tr>
                                <td>洲际酒店-钱江新城万怡酒店</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>洲际酒店-泛海钓鱼台酒店</td>
                                <td>步行前往</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="common-invite-code">
                        <h4 class="hotel-title font-bold">
                            <i class="fa fa-caret-right fa-lg caret-right" aria-hidden="true"></i>
                            入住酒店 → 分会场
                        </h4>
                        <h5 class="text-primary">2017/02/18</h5>
                        <p class="text-dark">
                            1. 吉利组委会将向嘉宾统一提供由入住酒店至分会场的大巴接送服务。<br>
                            2. 为了能准时抵达分会场参会，请您务必按规定的时间到酒店大巴发车处等候，我们会根据路程的远近，设置发车时间，温馨提示各位务必携带参会证，并正装出席。
                        </p>
                        <h5 class="text-gray">（附：各酒店大巴出发时间表）</h5>

                        <table class="table table-bordered text-center">
                            <thead>
                            <tr>
                                <td colspan="3">2月18日 上午</td>
                            </tr>
                            <tr>
                                <td width="50px">发车时间</td>
                                <td>接驳信息</td>
                                <td width="50px">备注</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td rowspan="4">08:20<br>08:30</td>
                                <td>瑞立江河汇酒店-洲际酒店</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>钱江万豪酒店-洲际酒店</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>洲际酒店-万豪、黄龙、瑞立江河汇酒店</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>洲际酒店-万怡、尊蓝酒店</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>洲际酒店-泛海钓鱼台酒店</td>
                                <td>步行前往</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>泛海钓鱼台酒店--洲际酒店</td>
                                <td>步行前往</td>
                            </tr>
                            </tbody>
                        </table>

                        <table class="table table-bordered text-center">
                            <thead>
                            <tr>
                                <td colspan="3">2月18日 下午</td>
                            </tr>
                            <tr>
                                <td width="50px">发车时间</td>
                                <td>接驳信息</td>
                                <td width="50px">备注</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td rowspan="6">16:30</td>
                                <td>洲际酒店-瑞立江河汇酒店</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>洲际酒店-钱江万豪酒店</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>万豪、黄龙、瑞立江河汇酒店-洲际酒店</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>万怡、尊蓝酒店-洲际酒店</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>泛海钓鱼台酒店-洲际酒店</td>
                                <td>步行前往</td>
                            </tr>
                            <tr>
                                <td>洲际酒店-泛海钓鱼台酒店</td>
                                <td>步行前往</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                </mt-tab-container-item>
                <mt-tab-container-item id="3">
                    <div class="common-invite-code">
                        <h4 class="hotel-title font-bold">
                            <i class="fa fa-caret-right fa-lg caret-right" aria-hidden="true"></i>
                            入住酒店 → 机场、车站
                        </h4>
                        <h5 class="text-primary">2017/02/19</h5>
                        <p class="text-dark">
                            1. 吉利组委会将向嘉宾统一提供由入住酒店至机场、车站的大巴送机服务。<br>
                            2. 为了能准时抵达目的地，请您务必按规定的时间到酒店大巴发车处等候，我们会根据路程的远近，设置发车时间，温馨提示各位务必携带检查携带好所有物品。
                        </p>
                        <h5 class="text-gray">（附：各酒店大巴出发时间表）</h5>

                        <table class="table">
                            <thead>
                            <tr>
                                <td colspan="2"><h5 class="text-primary">至萧山机场</h5></td>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td width="160px">瑞立江河汇酒店-杭州萧山机场</td>
                                    <td>07:00、08:00、08:30、09:30、10:30、12:00、13:00，建议提前2.5-3小时出发</td>
                                </tr>
                                <tr>
                                    <td>东方寓舍·黄龙酒店-杭州萧山机场</td>
                                    <td>07:15、08:15、08:45、09:45、10:45、12:15、13:15，建议提前2.5-3小时出发</td>
                                </tr>
                                <tr>
                                    <td>钱江新城万豪酒店-杭州萧山机场</td>
                                    <td>07:00、08:30、09:00、10:00、11:00、12:30、13:30，建议提前2.5-3小时出发</td>
                                </tr>
                                <tr>
                                    <td>洲际酒店-杭州萧山机场</td>
                                    <td>07:15、08:45、09:15、10:15、11:15、12:45、13:45，建议提前2.5-3小时出发</td>
                                </tr>
                                <tr>
                                    <td>泛海钓鱼台酒店-杭州萧山机场</td>
                                    <td>07:30、09:00、09:30、10:30、11:30、13:00、14：00，建议提前2.5-3小时出发</td>
                                </tr>
                                <tr>
                                    <td>钱江新城万怡酒店-杭州萧山机场</td>
                                    <td>07:00、08:30、10:00、11:30、13:00，建议提前2.5-3小时出发</td>
                                </tr>
                                <tr>
                                    <td>尊蓝钱江豪华精选酒店-杭州萧山机场</td>
                                    <td>07:15、08:45、10:15、11:45、13:15，建议提前2.5-3小时出发</td>
                                </tr>
                            </tbody>
                        </table>

                        <table class="table">
                            <thead>
                            <tr>
                                <td colspan="2"><h5 class="text-primary">至杭州火车东站</h5></td>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td width="160px">瑞立江河汇酒店-杭州火车东站</td>
                                    <td>07:00、09:00、11:00、13:00，请提前预订车票，建议提前1.5小时出发</td>
                                </tr>
                                <tr>
                                    <td>东方寓舍·黄龙酒店-杭州火车东站</td>
                                    <td>07:15、09:15、11:15、13:15，请提前预订车票，建议提前1.5小时出发</td>
                                </tr>
                                <tr>
                                    <td>钱江新城万豪酒店-杭州火车东站</td>
                                    <td>07:30、09:30、11:30、13:30，请提前预订车票，建议提前1.5小时出发</td>
                                </tr>
                                <tr>
                                    <td>洲际酒店-杭州火车东站</td>
                                    <td>07:00、09:00、11:00、13:00，请提前预订车票，建议提前1.5小时出发</td>
                                </tr>
                                <tr>
                                    <td>泛海钓鱼台酒店-杭州火车东站</td>
                                    <td>07:10、09:10、11:10、13:10，请提前预订车票，建议提前1.5小时出发</td>
                                </tr>
                                <tr>
                                    <td>钱江新城万怡酒店-杭州火车东站</td>
                                    <td>07:20、09:20、11:20、13:20，请提前预订车票，建议提前1.5小时出发</td>
                                </tr>
                                <tr>
                                    <td>尊蓝钱江豪华精选酒店-杭州火车东站</td>
                                    <td>07:30、09:30、11:30、13:30，请提前预订车票，建议提前1.5小时出发</td>
                                </tr>
                            </tbody>
                        </table>

                        <table class="table">
                            <thead>
                            <tr>
                                <td colspan="3"><h5 class="text-primary">至杭州火车城站</h5></td>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td width="160px">尊蓝钱江豪华精选酒店-杭州火车城站</td>
                                    <td>08:00、11:00，请提前预订车票，建议提前1.5小时出发</td>
                                </tr>
                                <tr>
                                    <td>钱江新城万怡酒店-杭州火车城站</td>
                                    <td>08:10、11:10，请提前预订车票，建议提前1.5小时出发</td>
                                </tr>
                                <tr>
                                    <td>泛海钓鱼台酒店-杭州火车城站</td>
                                    <td>08:20、11:20，请提前预订车票，建议提前1.5小时出发</td>
                                </tr>
                                <tr>
                                    <td>洲际酒店-杭州火车城站</td>
                                    <td>08:30、11:30，请提前预订车票，建议提前1.5小时出发</td>
                                </tr>
                                <tr>
                                    <td>钱江新城万豪酒店-杭州火车城站</td>
                                    <td>08:00、11:00，请提前预订车票，建议提前1.5小时出发</td>
                                </tr>
                                <tr>
                                    <td>东方寓舍·黄龙酒店-杭州火车城站</td>
                                    <td>08:15、11:15，请提前预订车票，建议提前1.5小时出发</td>
                                </tr>
                                <tr>
                                    <td>瑞立江河汇酒店-杭州火车城站</td>
                                    <td>08:30、11:30，请提前预订车票，建议提前1.5小时出发</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>

    </div>
</template>
<script>
export default{
    data() {
        return {
            selected: '1',
            map_1: require('../../../assets/images/mobile/geely/map_1.jpg'),
            map_2: require('../../../assets/images/mobile/geely/map_2.jpg'),
            map_3: require('../../../assets/images/mobile/geely/map_3.jpg'),
        }
    },
    computed: {
        meeting() {
            return this.$store.state.meeting
        }
    },
    mounted() {
        this.$store.commit('SPIN')
    },
}
</script>
<style lang="less" scoped rel="stylesheet/less">
    @import "../../../assets/style/common";
    .geely-navbar {
        margin-bottom: 10px;
    }

    .table{
        td{
            vertical-align: middle !important;
        }
    }

    .common-invite-code {
        h5 {
            margin: 15px 0 5px 0;
        }

        p{
            margin-bottom: 0;
        }

    }
</style>
