<template>
    <iui-block>
        <h3 class="text-center">鑫星汇证券投资平台峰会</h3>

        <img :src="img1" class="img-responsive"/>

        <div style="text-align: center">
            <p style="font-size:16px;color:rgb(0, 112, 192);"><strong><em>今天</em></strong></p>
            <p><strong><em>世界在不断地更新</em></strong></p>
            <p><strong><em>也在重构我们的认知</em></strong></p>
            <p><strong><em>&nbsp;</em></strong></p>
            <p style="font-size:16px;color:rgb(0, 112, 192);"><strong><em>8月26日，在北京</em></strong></p>
            <p><strong><em>让我们站在多维的视野去感受和分享这份璀璨</em></strong></p>
            <p><strong><em>&nbsp;</em></strong></p>
        </div>

        <p>
            2017年8月26日在北京首都国际机场朗豪酒店将举行主题为&ldquo;智能化服务，集群式共享&rdquo;的平台峰会。本次峰会由北京鑫星伊顿技术服务股份有限公司联合涌金集团、济安金信、岩晏投资共同主办，协办机构包括济安财富以及私募排排网。我们将邀请200余家私募证券投资基金管理公司，与金融证券投资领域的重量级嘉宾一同参与。</p>
        <p>
            北京鑫星伊顿技术服务股份有限公司成立于2012年2月。公司由国内著名的金融软件公司&mdash;&mdash;北京济安金信科技有限公司、具有完整金融服务产业链的涌金集团和岩晏投资咨询（上海）有限公司共同设立。公司一直致力于构建私募证券投资基金管理公司的综合后台，向参与者提供及时、全面的金融信息、标准化兼具个性化的金融顾问式服务。</p>
        <p>&ldquo;中国股市的两种获得合规超额收益的模式，其一是交易成功率，高度依赖操盘手个人的直觉和执着，为金钱而牺牲自我；其二是跨市场套利，高度依赖参与者的智慧与人脉，为财富而乐于分享&rdquo;。鑫星伊顿在综合后台服务提供商的业务基础上，打造一个全新的&ldquo;智能化服务，集群式共享&rdquo;的平台&mdash;&mdash;鑫星汇。</p>

        <img :src="img2" class="img-responsive"/>

        <p>本次峰会我们将与嘉宾和众多投资机构齐聚一堂，共同推进共享经济与共享平台的理念，一同展望证券市场智能决策及价值投资的未来，解决私募证券投资机构的投资及经营难点，快速扩张人脉圈搭建合作平台。</p>
        <p>我们坚信&mdash;&mdash;在中国家庭财富管理的市场上，证券化渐成主角!</p>
        <p>鑫星伊顿三年磨一剑，构建完成智能化服务平台，为中产家庭提供集群式共享投资机会，带领广大投资者及机构客户在证券投资的道路上走向成功。</p>
        <p>星耀鑫星汇，相约北京城!</p>

        <wechat-qr></wechat-qr>

        <btn-home></btn-home>
    </iui-block>
</template>
<script>
    import iuiBlock from "../../../components/iui/block.vue"
    import btnHome from "../../../components/btn_home.vue"
    import wechatQr from "../components/wechat_qr.vue"

    export default {
        components: {btnHome, wechatQr, iuiBlock},
        data() {
            return {
                img1: require('../images/think_1.png'),
                img2: require('../images/think_2.png'),
            }
        },
        mounted() {
            this.$store.commit('SPIN', false)
        },
    }
</script>
