<template>
    <div class="fd-contact">
        <div class="hotel-contact">
            <h5 class="text-dark">客服热线：</h5>
            <div class="item text-dark">倪先生：<a href="tel:021-61425802">021-61425802</a></div>
            <div class="item text-dark">吴小姐：<a href="tel:021-61425830">021-61425830</a></div>

            <div class="item">
                <p>
                工作时间:<br>
                    周一至周五<br>
                09:00 - 12:00<br>
                13:00 - 17:00<br>
                19:00 - 09:00<br>
                </p>
            </div>
        </div>

        <div class="hotel-contact">
            <h5 class="text-dark">联系方式：</h5>
            <div class="item text-dark">地址：<span class="text-gray">上海市静安区长安路1001号长安大厦1号楼912室</span></div>
            <div class="item text-dark">邮编：<span class="text-gray">200070</span></div>
            <div class="item text-dark">邮箱：<span class="text-gray"><a href="mailto:chevrolet@citssh.com.cn">chevrolet@citssh.com.cn</a></span></div>
            <div class="item text-dark">传真：<span class="text-gray"><a href="tel:021-60908350">021-60908350</a></span></div>
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
