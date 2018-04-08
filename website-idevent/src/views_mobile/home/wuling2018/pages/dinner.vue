<template>
    <div>
        <img :src="banner" alt="" style="display: block; margin-bottom: 10px;">
        <div class="page-container">
            <div class="text-block-container">
                <div class="text-content">
                    <p>
                        年会将为您提供精美餐食服务，详细信息您可以查阅下表或点击【我的秘书】查阅您的专属信息。
                    </p>
                    <div>
                        The conference offers exquisite meals. Details could be checked through the following table or clicking【My Assistant】 to access your exclusive information.
                    </div>
                </div>
            </div>
            <div class="tables-container">
                <a :href="img2url"><img :src="img2" alt=""></a>
                <a :href="img1url"><img :src="img1" alt=""></a>
            </div>
            <div style="margin-top: 20px">
                <p>温馨提示：由于与会嘉宾人数较多，请您注意就餐时间错峰进餐，如有服务不周之处，敬请谅解。</p>

                <p>Reminder: As lots of guests are invited, please take meal at different time to reduce waiting time, we apologize for any inconvenience brought to you.</p>
            </div>
            <!-- <div class="text-center" style="margin: 60px 0;">
                <router-link :to="{name:'home_page',query: {page: 'qrcode'}}">
                    <span class="btn ghost">签到二维码</span>
                </router-link>
            </div> -->
        </div>
    </div>
</template>

<script>

    export default {
        name: 'wulingSafe',
        data() {
            return {
                banner: require('../images/notice-banner.jpg'),
                img1: require('../images/DiningShangri-LahHotel_small.jpg'),
                img1url: require('../images/DiningShangri-LahHotel.jpg'),
                img2: require('../images/DiningInternationalConferenceCenterHotel_small.jpg'),
                img2url: require('../images/DiningInternationalConferenceCenterHotel.jpg')
            }
        },
        mounted() {
            document.title = '用餐提醒'
            this.$store.commit('SPIN', false)
        }
    }
</script>

<style lang="less" scoped>
    @import '../style.less';

    .text-content {
        color: #666;
        p {
            margin: 0;
            text-indent: 24px;
        }
    }
    .tables-container {
        margin-top: 10px;
        img {
            display: block;
            width: 100%;
            margin: 5px;
        }
    }
</style>
