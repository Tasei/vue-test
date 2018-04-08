<template>
    <div class="mt-container">
        <div class="block">
            <div class="title">注意事项</div>

            <div class="sub-title">着装要求:</div>
            <p>28日下午团队建设请着运动休闲装，晚宴请着带有红色元素的运动休闲装。会务组将提供统一T恤及防暑防蚊用品，因天气较闷热潮湿，建议多携带一套换洗衣物。</p>
            <p>29日全天请着商务正装：男士为西装套装（可不打领带）；女士为套装或裙装（需穿着西装外套）</p>

            <div class="sub-title">费用承担:</div>
            <p>大会将承担与会者的以下费用：</p>
            <ul style="list-style:disc;list-style-position:outside;margin-left:20px;">
                <li>往返机票或火车票费用</li>
                <li>6月28日一晚的住宿费（除房费外，其余产生的费用如长途电话，洗衣费等均由个人承担），提前入住或延迟退房，请自行前往酒店前台付款。</li>
                <li>杭州当地将统一安排接送，参会者可报销所在地的机场/火车站往返的费用，报销所需信息将在会后发出。</li>
            </ul>

            <div class="sub-title">最晚退房时间:</div>
            <p>酒店最晚退房时间为中午12:00</p>

            <div class="sub-title">天气:</div>
            <p>杭州6月底多雨、空气较闷热潮湿，请注意携带雨具</p>
        </div>
    </div>
</template>
<script>
    export default{
        mounted() {
            this.$store.commit('SPIN')
        }
    }
</script>
<style lang="less" scoped>
    @import "../assets/style";
</style>
