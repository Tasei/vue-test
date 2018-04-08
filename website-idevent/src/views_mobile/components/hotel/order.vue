<template>
    <div v-if="orderDetail">
        <iui-block>
            <iui-title>预订信息</iui-title>
            <table class="table table-detail">
                <tbody>
                <tr>
                    <td>入住日期</td>
                    <td>{{orderDetail.start_date}}</td>
                </tr>
                <tr>
                    <td>离店日期</td>
                    <td>{{orderDetail.end_date}}</td>
                </tr>
                <tr>
                    <td>酒店名称</td>
                    <td>
                        <template>{{orderDetail.hotel_name}}</template>
                    </td>
                </tr>
                <tr>
                    <td>酒店房型</td>
                    <td>
                        {{orderDetail.type_name}}
                        <span v-if="orderDetail.is_share" class="label label-shareable">拼房</span>
                    </td>
                </tr>
                </tbody>
            </table>
        </iui-block>

        <iui-block v-if="orderDetail.room_mate">
            <iui-title>同住人信息</iui-title>
            <table class="table table-detail">
                <tbody>
                <tr>
                    <td>姓名</td>
                    <td>{{orderDetail.room_mate.name}}</td>
                </tr>
                <tr>
                    <td>手机号码</td>
                    <td>{{orderDetail.room_mate.mobile}}</td>
                </tr>
                <tr>
                    <td>电子邮箱</td>
                    <td>{{orderDetail.room_mate.email}}</td>
                </tr>
                </tbody>
            </table>
        </iui-block>
    </div>
</template>
<script>
    import iuiTitle from "../iui/block_title.vue"
    import iuiBlock from "../iui/block.vue"
    export default{
        components: {iuiTitle, iuiBlock},
        props: {
            orderDetail: {
                type: Object,
                default: null
            }
        }
    }
</script>
