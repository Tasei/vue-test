<template>
    <div>
        <div class="fd-index">
            <div class="banner">
                <!--<img :src="banner" class="img-responsive"/>-->
                <h4>MICE China Expo 2017春季场 <br>专业买家注册指南</h4>
            </div>

            <div class="content text-dark">
                <h5 class="font-bold">专业买家要求：</h5>
                <p>1、 填写特邀买家注册系统，注册成为MICE China EXPO 2017春季场特邀买家。</p>
                <p>2、 在50名展商中，选择不少于15名展商预约洽谈，每个展商洽谈时间10分钟。</p>
                <p>3、 依据系统预约展商及时间，按照生成页面顺序进行洽谈。</p>
                <p>4、 每完成1个洽谈，在微信预约系统中回复提示信息，提交后方可进入下一个洽谈环节。</p>
                <p>5、 活动当天，凭注册微信到现场领取个人唯一身份识别的特邀买家胸卡，不可外借。</p>
                <p>6、 会议需全程佩戴胸卡，着商务休闲装，携带50张以上名片。</p>

                <h5 class="font-bold">专业买家利益：</h5>
                <p>1、获得与50位来自各个酒店集团或单体酒店的展商面对面洽谈机会，掌握一手场地资源。</p>
                <p>
                    2、免费享用高品质5星级奢华酒店主题午餐及茶歇。
                    <img :src="images._2" class="img-responsive" style="max-width: 60%">
                </p>
                <p>3、免费获得“特邀买家手册”一本，获取最全资料信息。</p>
                <p>4、每名买家均可参与5星级酒店住宿体验券抽奖活动。</p>
                <p>
                    5、洽谈超过15位展商可参与每站2只国际顶级品牌RIMOWA登机箱抽奖活动。
                    <img :src="images._5" class="img-responsive" style="max-width: 50%">
                </p>
                <p>
                    6、洽谈超过15位展商可参与每站4套意大利RCR水晶酒杯套装抽奖活动。
                    <img :src="images._6" class="img-responsive" style="max-width: 40%">
                </p>
                <p>
                    7、洽谈超过15位展商可每人可获得精美洋酒一瓶。
                    <img :src="images._7" class="img-responsive" style="max-width: 70%">
                </p>

            </div>
        </div>

        <router-link class="btn btn-primary btn-lg fixed" :to="{name:'register_form'}">进入注册</router-link>
    </div>
</template>
<script>
    import {Toast, Indicator} from "mint-ui"
    export default{
        data() {
            return {
                images: {
                    "_2": require('../../../../assets/images/mobile/mice/2.jpg'),
                    "_5": require('../../../../assets/images/mobile/mice/5.jpg'),
                    "_6": require('../../../../assets/images/mobile/mice/6.png'),
                    "_7": require('../../../../assets/images/mobile/mice/7.jpg'),
                }
            }
        },
        mounted(){
            this.$store.commit('SPIN')
        }
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    .fd-index {
        // background-color: #0e1b23;
        background-color: #fff;
        min-height: 100vh;
        overflow: hidden;
        position: relative;
        padding-bottom: 75px;
    }

    .banner {
        background-image: url('../../../../assets/images/mobile/mice/index_banner.jpg');
        background-position: top;
        background-size: contain;
        padding-top: 61.3333%;
        position: relative;

        h4 {
            line-height: 1.2em;
            background-color: rgba(0, 0, 0, 0.7);
            display: block;
            position: absolute;
            bottom: 0;
            right: 0;
            left: 0;
            color: #fff;
            padding: 10px;
        }
    }

    .content {
        padding: 0 20px;
        h1 {
            font-size: 30px;
            margin: 20px 0;
            line-height: 1;
        }
        .line-block {
            height: 5px;
            width: 25px;
            display: inline-block;
            margin-bottom: 18px;
        }
        .img-responsive {
            margin: 5px auto;
        }
        p {
            font-size: 12px;
        }
    }

    .fixed {
        bottom: -1px;
        position: fixed;

        &.btn {
            border-radius: 0;
        }
    }
</style>
