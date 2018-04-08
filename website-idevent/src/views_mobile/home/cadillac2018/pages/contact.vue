<template>
    <div class="fd-contact">
        <div class="hotel-contact">
            <h5 class="text-dark">会务组电话：</h5>
            <div class="item text-dark">林小姐：<a href="tel:021-60950484">021-60950484</a></div>
            <div class="item text-dark">顾小姐：<a href="tel:021-60908348">021-60908348</a></div>
            <div class="item">
                    <p>工作时间:</p>
                    <p>周一至周日</p>
                    <p>09:00 - 12:00</p>
                    <p>13:00 - 17:00</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        mounted() {
            this.$store.commit('SPIN', false)
        },
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    .fd-contact {
        background: #f3f3f3;
        min-height: 100vh;
        .hotel-contact {
            padding: 20px;
            background: #fff;
            margin-bottom: 10px;
            .item {
                  margin: 10px 0 0;
                  font-size: 14px;
                  line-height: 1.4em;
            }

            h5 {
                font-family:PingFang-SC-Medium;
                font-weight: bold;
                font-size: 14px;
                border-bottom: 1px solid #ddd;
                margin: 0;
                padding-bottom: 10px;
                color: #000;
            }
        }

    }

</style>
