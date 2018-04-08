<template>
    <div class="mt-container">
        <div class="block">
            <div class="title">气候与着装</div>
            <div>
                <table>
                    <tr>
                        <td></td>
                        <td>历史平均最低气温</td>
                        <td>历史平均最高气温</td>
                    </tr>
                    <tr>
                        <td>意大利</td>
                        <td>16℃</td>
                        <td>26℃</td>
                    </tr>
                    <tr>
                        <td>希腊</td>
                        <td>16℃</td>
                        <td>28℃</td>
                    </tr>
                    <tr>
                        <td>土耳其</td>
                        <td>15℃</td>
                        <td>27℃</td>
                    </tr>
                </table>
                <p>
                    温馨提示：<br />
                    白天建议穿建议穿棉麻面料的衬衫、薄长裙、薄T恤等清凉透气的衣服<br />
                    夜间建议穿套装、夹衣、风衣、休闲装、夹克衫、西装、薄毛衣等保暖衣服
                </p>
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
</style>
