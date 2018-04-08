<template>
    <div class="mt-container">
        <div class="block">
            <div class="title">通信</div>
            <div>
                出行期间，无论是需要与亲友分享所见所闻，还是与公司员工时刻保持沟通，都建议您提前开通手机国际漫游功能。开通方式请咨询各运营商客服热线，漫游资费可参考下表。
            </div>
            <div class="sub-title">漫游资费（仅供参考）：</div>
            <div>
                <table>
                    <tr>
                        <td>城市</td>
                        <td>运营商</td>
                        <td>电话</td>
                        <td>短信</td>
                        <td>流量</td>
                    </tr>
                    <!--意大利-->
                    <tr>
                        <td rowspan="3">意大利</td>
                        <td>移动</td>
                        <td>3元/分钟</td>
                        <td>0.4元/条</td>
                        <td>9元 / 3MB</td>
                    </tr>
                    <tr>
                        <td>联通</td>
                        <td>2.86元/分钟</td>
                        <td>1.26元/条</td>
                        <td>50元 / 100MB</td>
                    </tr>
                    <tr>
                        <td>电信</td>
                        <td>3元/分钟</td>
                        <td>0.4元/条</td>
                        <td>1元 / 1MB</td>
                    </tr>

                    <!--土耳其-->
                    <tr>
                        <td rowspan="3">土耳其</td>
                        <td>移动</td>
                        <td>3元/分钟</td>
                        <td>0.4元/条</td>
                        <td>9元 / 3MB</td>
                    </tr>
                    <tr>
                        <td>联通</td>
                        <td>3元/分钟</td>
                        <td>1.26元/条</td>
                        <td>50元 / 100MB</td>
                    </tr>
                    <tr>
                        <td>电信</td>
                        <td>3元/分钟</td>
                        <td>0.7元/条</td>
                        <td>2元 / 1MB</td>
                    </tr>

                    <!--希腊-->
                    <tr>
                        <td rowspan="3">希腊</td>
                        <td>移动</td>
                        <td>3元/分钟</td>
                        <td>0.4元/条</td>
                        <td>6元 / 3MB</td>
                    </tr>
                    <tr>
                        <td>联通</td>
                        <td>3元/分钟</td>
                        <td>0.4元/条</td>
                        <td>1元 / 1MB</td>
                    </tr>
                    <tr>
                        <td>电信</td>
                        <td>3元/分钟</td>
                        <td>0.4元/条</td>
                        <td>1元 / 1MB</td>
                    </tr>


                </table>
            </div>
            <div class="sub-title">温馨提示：</div>
            <div>
                <p> 1.公海上使用的是海事卫星网络，费用昂贵，建议关闭手机语音/移动数据漫游功能</p>
                <p>2.本次研讨会已为所有经销商特别购买Wi-Fi套餐，您可放心使用。请注意：因为网络限制的关系，每个套餐同一时间仅限一台设备登陆，您可以用以浏览网页，请使用微信等聊天工具与亲友联络，但只能发送文字信息，不支持语音和视频。如出现网络信号差，或者无网络的情况，您可以断开网络连接稍后重试</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        created() {
            if (this.$route.query.title) {
                document.title = this.$route.query.title;
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
