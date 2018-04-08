<template>
    <div class="mt-schedule">
        <div class="mt-title">6月28日　周三</div>
        <div class="cell">
            <div class="cell__hd">12:00</div>
            <div class="cell__bd">签到及午餐</div>
        </div>
        <div class="cell">
            <div class="cell__hd">14:00</div>
            <div class="cell__bd">团队建设</div>
        </div>
        <div class="cell">
            <div class="cell__hd">17:00</div>
            <div class="cell__bd">休息</div>
        </div>
        <div class="cell">
            <div class="cell__hd">18:00</div>
            <div class="cell__bd">餐前鸡尾酒会</div>
        </div>
        <div class="cell">
            <div class="cell__hd">18:30</div>
            <div class="cell__bd">集体照、颁奖及晚宴</div>
        </div>
        <div class="cell">
            <div class="cell__hd"></div>
            <div class="cell__bd">[ *6月28日团建请着休闲运动装，晚宴请着带有红色元素的休闲运动装。 ]</div>
        </div>

        <div class="mt-title">6月29日　周四</div>
        <div class="cell">
            <div class="cell__hd">08:15</div>
            <div class="cell__bd">开幕及友邦中国首席执行官致辞</div>
        </div>
        <div class="cell">
            <div class="cell__hd">09:00</div>
            <div class="cell__bd">“以客户为中心”外部嘉宾分享一</div>
        </div>
        <div class="cell">
            <div class="cell__hd">10:00</div>
            <div class="cell__bd">茶歇+集体照</div>
        </div>
        <div class="cell">
            <div class="cell__hd">10:30</div>
            <div class="cell__bd">“以客户为中心”外部嘉宾分享二</div>
        </div>
        <div class="cell">
            <div class="cell__hd">11:30</div>
            <div class="cell__bd">友邦中国首席客户官分享</div>
        </div>
        <div class="cell">
            <div class="cell__hd">11:40</div>
            <div class="cell__bd">分组讨论及午餐</div>
        </div>
        <div class="cell">
            <div class="cell__hd">13:40</div>
            <div class="cell__bd">“人才发展”外部嘉宾分享</div>
        </div>
        <div class="cell">
            <div class="cell__hd">14:25</div>
            <div class="cell__bd">友邦集团首席人力资源官分享</div>
        </div>
        <div class="cell">
            <div class="cell__hd">15:00</div>
            <div class="cell__bd">友邦中国首席人力资源官分享</div>
        </div>
        <div class="cell">
            <div class="cell__hd">15:10</div>
            <div class="cell__bd">茶歇</div>
        </div>
        <div class="cell">
            <div class="cell__hd">15:25</div>
            <div class="cell__bd">分组讨论</div>
        </div>
        <div class="cell">
            <div class="cell__hd">16:50</div>
            <div class="cell__bd">总结</div>
        </div>
        <div class="cell">
            <div class="cell__hd"></div>
            <div class="cell__bd">[ *6月29日全天请着商务正装：男士为西装套装（可不打领带）；女士为套装或裙装（需穿着西装外套）]</div>
        </div>

        <!--
        <div class="cell">
            <div class="cell__hd"></div>
            <div class="cell__bd">
                <div class="title"></div>
                <p></p>
            </div>
        </div>-->
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
    .mt-schedule {
        padding: 20px 20px 60px 20px;
        background-image: url("../assets/schedule_bg.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .cell {
        position: relative;
        display: flex;
        .cell__hd {
            color: #333;
            font-size: 14px;
            line-height: 34/28;
            min-width: 75px;
            padding-right: 15px;
        }
        .cell__bd {
            flex: 1;
            .title {
                color: #333;
                font-size: 16px;
                line-height: 34/28;
                font-weight: bold;
            }
            p {
                margin: 5px 0 0;
                line-height: 34/28;
                font-size: 14px;
                &.clear {
                    margin: 0;
                }
                &.text-dark {
                    color: #333!important;
                }
                &.text-gray {
                    font-size: 12px;
                    color: #999;
                }
            }
        }
        margin-bottom: 15px;
    }
    .line {
        height: 1px;
        border-top: 1px solid #bbbbbb;
        margin: 20px 0;
    }
    .mt-title {
        display: block;
        border-radius: 1px;
        line-height: 1;
        color: #fff;
        font-size: 14px;
        padding: 5px 30px;
        text-align: left;
        background: #380a53;
        margin: 25px 0 20px;
        width: 80%;
        &:first-child {
            margin-top: 0;
        }
    }

</style>
