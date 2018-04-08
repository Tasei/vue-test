<template>
    <div class="mt-container">
        <div class="block">
            <div class="title">插座/电压</div>
            <div>
                <p>游轮舱房中您需要使用欧标或美标转换插头（示例如下）为您的移动设备充电，建议您可携带1-2个万能转换插头。请注意游轮上不允许携带拖线板，电水壶等电器。</p>

                <table>
                    <tr>
                        <td><img src="../assets/socket1.png" /></td>
                        <td><img src="../assets/socket2.png" /></td>
                    </tr>
                    <tr>
                        <td>双脚圆形（欧标）</td>
                        <td>三角圆形（美标）</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        created() {
            if (this.$route.query.title) {
                document.title = this.$route.query.title;
            }
        },
        data() {
            return {
            }
        },
        mounted() {
            this.$store.commit('SPIN');
        }
    }
</script>
<style lang="less" scoped>
    @import "../assets/style.less";
    .block {
        table {
            border: 0;
            td {
                border: 0;
                text-align:center;
                padding: 0;
            }
        }
    }
</style>
