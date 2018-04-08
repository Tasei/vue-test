<template>
    <div>
        <iui-block>
            <iui-title>日程安排</iui-title>
            <table class="table table-bordered">
                <tbody>
                <tr>
                    <th width="75px">日期</th>
                    <th>时间</th>
                    <th width="100px">内容</th>
                    <th width="110px">地点</th>
                </tr>
                <tr>
                    <td rowspan="2">4月7日<br>(周五)</td>
                    <td>09:00-16:00</td>
                    <td>接机报到</td>
                    <td>{{hotelText}}</td>
                </tr>
                <tr>
                    <td>18:58-20:08</td>
                    <td>探界者上市发布会</td>
                    <td>武汉体育中心</td>
                </tr>
                <tr>
                    <td>4月8日<br>(周六)</td>
                    <td>06:00-12:00</td>
                    <td>全体送机</td>
                    <td>{{hotelText}}</td>
                </tr>
                </tbody>

            </table>

            <template v-if="isDealer">
            <h5 class="text-danger">*注意：</h5>
            <p>
                请于3月31日前完成注册，并提前支付房费押金500元/晚。
                房费押金支付完成后，房间预订方可生效，押金将在您入住后的10个工作日内原账号退回。
                在截止日期未完成付款的房间无法保留，另外如您未按照预定信息入住，
                房费押金将不予退回，若您在截止日期后预定酒店，则房费需要您自行承担，敬请谅解！</p>
            </template>

            <h5>*着装要求：</h5>
            <p>商务休闲装</p>
        </iui-block>

        <btn-home></btn-home>
    </div>
</template>
<script>
    import iuiBlock from "../../../components/iui/block.vue"
    import iuiTitle from "../../../components/iui/block_title.vue"
    import btnHome from "../components/btn_home.vue"

    export default{
        components: {
            iuiBlock, iuiTitle, btnHome
        },
        mounted() {
            this.$store.commit('SPIN', false)
        },
        computed: {
            isDealer(){
                return this.user.group.name==='经销商'
            },
            hotelText(){
                switch (this.user.group.name) {
                    case 'A员工':
                        return '武汉世茂希尔顿酒店'
                        break;
                    case 'B员工':
                        return '武汉洲际酒店'
                        break;
                    default:
                        return '武汉洲际酒店/武汉光谷凯悦酒店'
                        break;
                }
            }
        }
    }
</script>
