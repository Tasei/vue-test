<template>
    <div class="fd-common-question">
        <div class="common-invite-code">
            <h4 class="hotel-title font-bold">
                <i class="fa fa-caret-right fa-lg caret-right" aria-hidden="true"></i>
                日程安排
            </h4>

            <table class="table table-bordered">
                <tbody>
                <tr>
                    <td>
                        <p>日期</p>
                    </td>
                    <td>
                        <p>时间</p>
                    </td>
                    <td>
                        <p>内容</p>
                    </td>
                    <td>
                        <p>地点</p>
                    </td>
                </tr>
                <tr>
                    <td rowspan="6">
                        <p>11月</p>
                        <p>16日</p>
                        <p>周四</p>
                    </td>
                    <td>
                        <p>09:00-16:00</p>
                    </td>
                    <td>
                        <p>接机<br/>报到</p>
                    </td>
                    <td>
                        <p>广州白云机场－</p>
                        <p>佛山希尔顿酒店</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>15:00-16:00</p>
                    </td>
                    <td>
                        <p>下午<br/>茶点<br/>安排</p>
                    </td>
                    <td>
                        <p>佛山希尔顿酒店－</p>
                        <p>2楼“开”西餐厅</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>16:20-16:50</p>
                    </td>
                    <td>
                        <p>前往</p>
                        <p>会场</p>
                    </td>
                    <td>
                        <p>佛山希尔顿酒店－</p>
                        <p>潭州国际会展中心</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>17:28-19:20</p>
                    </td>
                    <td>
                        <p>品牌</p>
                        <p>之夜</p>
                        <p>活动</p>
                    </td>
                    <td>
                        <p>潭州国际会展中心</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>19:20-21:00</p>
                    </td>
                    <td>
                        <p>欢迎</p>
                        <p>晚宴</p>
                    </td>
                    <td>
                        <p>太子酒家</p>
                        <p>(顺德区裕和路</p>
                        <p>(依云水岸楼盘对面))</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>21:00-21:30</p>
                    </td>
                    <td>
                        <p>返回</p>
                        <p>酒店</p>
                    </td>
                    <td>
                        <p>太子酒家－</p>
                        <p>佛山希尔顿酒店</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>11月</p>
                        <p>17日</p>
                        <p>周五</p>
                    </td>
                    <td>
                        <p>06:00-12:00</p>
                    </td>
                    <td>
                        <p>返程</p>
                        <p>送机</p>
                    </td>
                    <td>
                        <p>佛山希尔顿酒店-</p>
                        <p>广州白云机场</p>
                    </td>
                </tr>
                </tbody>
            </table>


            <h5 class="text-dark">“梦创•新动线”2017年雪佛兰品牌夜主场地：</h5>
            <p>潭州国际会展中心（广东省佛山市顺德区北滘镇工展路1号）</p>

            <h5 class="text-dark">着装要求：</h5>
            <p>商务休闲装</p>
            <h5 class="text-dark">佛山希尔顿酒店地址：</h5>
            <p>禅城区岭南大道北127号近魁奇路地铁站 / 祖庙商圈</p>
            <p>（备注：11月16日16:20－16:50在佛山希尔顿酒店大堂将会有接驳大巴安排各位前往主会场）</p>
        </div>
    </div>
</template>
<script>
    export default {
        mounted() {
            this.$store.commit('SPIN', false)
        },
        data () {
            return {

            }
        }
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    @import "../../../../assets/style/common";
    .fd-common-question{
        background-color: white;
    }
    td {
        vertical-align: middle !important;

        p {
            margin-bottom: 0 !important;
        }
    }
    .text-dark-red{
        color: #f00;
    }
</style>
