<template>
    <div style="position: relative; padding: 30px 20px;">
        <div class="bg">
        </div>

        <div v-if="$lang=='en'">
            <table>
                <thead>
                <tr>
                    <td colspan="2">DAY 1</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td width="30%">10:00-20:00</td>
                    <td>Check In</td>
                </tr>
                <tr>
                    <th></th>
                    <td><p class="help-block">Lobby</p></td>
                </tr>
                </tbody>
            </table>

            <table>
                <thead>
                <tr>
                    <td colspan="2">Day 2</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td width="30%">09:00-12:00</td>
                    <td>Commerce Session/Quality Session</td>
                </tr>
                <tr>
                    <td></td>
                    <td><p class="subtitle">(For Production Supplier Guests)</p></td>
                </tr>
                <tr>
                    <td></td>
                    <td><p class="help-block">MeiLan ballroom/Tanshan Grand Ballroom</p></td>
                </tr>

                <tr>
                    <td>12:00-13:00</td>
                    <td>Lunch</td>
                </tr>
                <tr>
                    <td></td>
                    <td><p class="help-block">Auditorium/TanShan Grand Ballroom</p></td>
                </tr>

                <tr>
                    <td>13:00-13:10</td>
                    <td>Welcome & Opening Speech</td>
                </tr>
                <tr>
                    <td></td>
                    <td><p class="help-block">TaiShan Grand Ballroom</p></td>
                </tr>

                <tr>
                    <td>13:10-13:40</td>
                    <td>Chery Jaguar Land Rover Business Update</td>
                </tr>
                <tr>
                    <td></td>
                    <td><p class="help-block">TaiShan Grand Ballroom</p></td>
                </tr>

                <tr>
                    <td>13:40-13:55</td>
                    <td>Product Plan Summary</td>
                </tr>
                <tr>
                    <td></td>
                    <td><p class="help-block">TaiShan Grand Ballroom</p></td>
                </tr>

                <tr>
                    <td>13:55-14:10</td>
                    <td>Production Plan & Requirement</td>
                </tr>
                <tr>
                    <td></td>
                    <td><p class="help-block">TaiShan Grand Ballroom</p></td>
                </tr>

                <tr>
                    <td>14:10-14:20</td>
                    <td>Changshu Government Speech</td>
                </tr>
                <tr>
                    <td></td>
                    <td><p class="help-block">TaiShan Grand Ballroom</p></td>
                </tr>

                <tr>
                    <td>14:20-14:40</td>
                    <td>Tea Break</td>
                </tr>
                <tr>
                    <td></td>
                    <td><p class="help-block">TaiShan Grand Ballroom</p></td>
                </tr>

                <tr>
                    <td>14:40-14:55</td>
                    <td>Quality Performance & Requirement</td>
                </tr>
                <tr>
                    <td></td>
                    <td><p class="help-block">TaiShan Grand Ballroom</p></td>
                </tr>

                <tr>
                    <td>14:55-15:25</td>
                    <td>Purchasing 2016 Achievements & 2017 Key Actions</td>
                </tr>
                <tr>
                    <td></td>
                    <td><p class="help-block">TaiShan Grand Ballroom</p></td>
                </tr>

                <tr>
                    <td>15:25-15:45</td>
                    <td>Supplier Excellence Award</td>
                </tr>
                <tr>
                    <td></td>
                    <td><p class="help-block">TaiShan Grand Ballroom</p></td>
                </tr>

                <tr>
                    <td>15:45-16:00</td>
                    <td>Q & A</td>
                </tr>
                <tr>
                    <td></td>
                    <td><p class="help-block">TaiShan Grand Ballroom</p></td>
                </tr>

                <tr>
                    <td>16:00-17:00</td>
                    <td>Rest</td>
                </tr>
                <tr>
                    <td></td>
                    <td><p class="help-block">Hotel</p></td>
                </tr>

                <tr>
                    <td>17:00-20:00</td>
                    <td>Dinner</td>
                </tr>
                <tr>
                    <td></td>
                    <td><p class="help-block">TaiShan Grand Ballroom</p></td>
                </tr>

                </tbody>
            </table>

            <table>
                <thead>
                <tr>
                    <td colspan="2">Day 3</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td width="30%">10:00-20:00</td>
                    <td>Checkout</td>
                </tr>
                <tr>
                    <th></th>
                    <td><p class="help-block">Lobby</p></td>
                </tr>
                </tbody>
            </table>
        </div>
        <div v-else>


            <table>
                <thead>
                <tr>
                    <td colspan="2">第一天</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td width="30%">10:00-20:00</td>
                    <td>签到</td>
                </tr>
                <tr>
                    <th></th>
                    <td><p class="help-block">酒店大堂</p></td>
                </tr>
                </tbody>
            </table>

            <table>
                <thead>
                <tr>
                    <td colspan="2">第二天</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td width="30%">09:00-12:00</td>
                    <td>商务分会/质量分会</td>
                </tr>
                <tr>
                    <td></td>
                    <td><p class="subtitle">(生产供应商受邀人员参加)</p></td>
                </tr>
                <tr>
                    <td></td>
                    <td><p class="help-block">美兰厅/泰山厅</p></td>
                </tr>

                <tr>
                    <td>12:00-13:00</td>
                    <td>午餐</td>
                </tr>
                <tr>
                    <td></td>
                    <td><p class="help-block">演讲厅/泰山厅</p></td>
                </tr>

                <tr>
                    <td>13:00-13:10</td>
                    <td>致欢迎词</td>
                </tr>
                <tr>
                    <td></td>
                    <td><p class="help-block">泰山厅</p></td>
                </tr>

                <tr>
                    <td>13:10-13:40</td>
                    <td>奇瑞捷豹路虎公司业务发展介绍</td>
                </tr>
                <tr>
                    <td></td>
                    <td><p class="help-block">泰山厅</p></td>
                </tr>

                <tr>
                    <td>13:40-13:55</td>
                    <td>产品规划介绍</td>
                </tr>
                <tr>
                    <td></td>
                    <td><p class="help-block">泰山厅</p></td>
                </tr>

                <tr>
                    <td>13:55-14:10</td>
                    <td>生产制造规划及要求</td>
                </tr>
                <tr>
                    <td></td>
                    <td><p class="help-block">泰山厅</p></td>
                </tr>

                <tr>
                    <td>14:10-14:20</td>
                    <td>常熟市政府致辞</td>
                </tr>
                <tr>
                    <td></td>
                    <td><p class="help-block">泰山厅</p></td>
                </tr>

                <tr>
                    <td>14:20-14:40</td>
                    <td>茶歇</td>
                </tr>
                <tr>
                    <td></td>
                    <td><p class="help-block">泰山厅</p></td>
                </tr>

                <tr>
                    <td>14:40-14:55</td>
                    <td>质量绩效及要求</td>
                </tr>
                <tr>
                    <td></td>
                    <td><p class="help-block">泰山厅</p></td>
                </tr>

                <tr>
                    <td>14:55-15:25</td>
                    <td>采购部2016工作总结及2017工作展望</td>
                </tr>
                <tr>
                    <td></td>
                    <td><p class="help-block">泰山厅</p></td>
                </tr>

                <tr>
                    <td>15:25-15:45</td>
                    <td>优秀供应商颁奖</td>
                </tr>
                <tr>
                    <td></td>
                    <td><p class="help-block">泰山厅</p></td>
                </tr>

                <tr>
                    <td>15:45-16:00</td>
                    <td>问答环节</td>
                </tr>
                <tr>
                    <td></td>
                    <td><p class="help-block">泰山厅</p></td>
                </tr>

                <tr>
                    <td>16:00-17:00</td>
                    <td>休息</td>
                </tr>
                <tr>
                    <td></td>
                    <td><p class="help-block">酒店</p></td>
                </tr>

                <tr>
                    <td>17:00-20:00</td>
                    <td>晚宴</td>
                </tr>
                <tr>
                    <td></td>
                    <td><p class="help-block">泰山厅</p></td>
                </tr>

                </tbody>
            </table>

            <table>
                <thead>
                <tr>
                    <td colspan="2">第三天</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td width="30%">10:00-20:00</td>
                    <td>返程</td>
                </tr>
                <tr>
                    <th></th>
                    <td><p class="help-block">酒店大堂</p></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    export default {
        mounted() {
            this.$store.commit('SPIN', false)
        }
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    .bg {
        background-image: url("../../../assets/images/mobile/chery/shedule_bg.png");
        background-position: bottom;
        background-size: 100%;
        background-repeat: no-repeat;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
    }

    .help-block {
        font-size: 12px;
        font-family: PingFangSC-Regular;
        color: #666;
    }

    p {
        margin-top: 0 !important;
    }

    .subtitle {
        font-size: 12px;
        margin-bottom: 5px;
    }

    table {
        width: 100%;
        color: #333;
        margin-bottom: 20px;
        thead {
            td {
                font-size: 17px;
                font-family: PingFangSC-Semibold;
            }
        }
        td {
            font-size: 14px;
            vertical-align: text-bottom;
        }
    }
</style>
