<template>
    <div>
        <div class="iui-list">
            <div class="iui-list-item" v-for="item in list">
                <router-link :to="item.to">
                    <img :src="item.image">
                    <div class="iui-list-item__text">
                        <h5>{{item.title}}</h5>
                        <p>{{item.desc}}</p>
                    </div>
                    <!--<i class="fa fa-angle-right arrow-right"></i>-->
                </router-link>
            </div>
        </div>
        <btn-home style="margin: 20px auto;width: 65%;display: block;"></btn-home>
    </div>
</template>
<style lang="less" scoped>
    .iui-list {
        .iui-list-item {
            img {
                display: block;
                width: 150px;
                height: 150px;
                float: left;
            }
            .iui-list-item__text {
                margin-left: 160px;
                margin-right: 15px;
                height: 150px;

                h5 {
                    line-height: 1.2em;
                    font-size: 16px;
                    margin-top: 0;
                }
                p {
                    color: #999999;
                    line-height: 1.1em;
                    font-size: 12px;
                    height: 7.7em;
                    display: inline-block;
                    overflow: hidden;
                    -webkit-line-clamp: 5;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                }
            }
        }
    }
</style>
<script>
    import btnHome from "../../../components/btn_home.vue"

    export default {
        components: {btnHome},
        data() {
            return {
                list: [
                    {
                        title: "平台融入，共享资源 | 2017鑫星汇证券投资平台峰会总结",
                        desc: '2017鑫星汇证券投资平台峰会于8月26日在北京盛大召开！本次由鑫星伊顿技术服务股份有限公司主办的平台峰会，汇聚了众多嘉宾及私募伙伴共同参与。现场大咖云集、精彩不断，接下来让我们一起回顾一下此次峰会的精彩瞬间。',
                        to: {name: "home_page", query: {page: "articleSummary"}},
                        image: require("../images/list3.jpg")
                    },
                    {
                        title: "鑫星汇平台 | 2017鑫星汇证券投资平台介绍",
                        desc: ' “中国股市的两种获得合规超额收益的模式，其一是交易成功率，高度依赖操盘手个人的直觉和执着，为金钱而牺牲自我；其二是跨市场套利，高度依赖参与者的智慧与人脉，为财富而乐于分享”。鑫星伊顿在综合后台服务提供商的业务基础上，打造一个全新的“智能化服务，集群式共享”的平台——鑫星汇。',
                        to: {name: "home_page", query: {page: "articleThink"}},
                        image: require("../images/list1.jpg")
                    },
                    {
                        title: "嘉宾 | 2017鑫星汇证券投资平台峰会嘉宾介绍",
                        desc: '2017鑫星汇证券投资平台峰会即将于8月26日在京举行，峰会亮点高端：著名经济学家，高端私募圈，智能化投资；权威：金融高新科技企业，金融服务全产业链集团，独立第三方证券投资基金评价机构；理念：智能化综合服务，集群式共享平台，新生代证券投资基金管理人；务实：平台资源共享，金融顾问式服务，解决私募投资管理难点；商机：快速扩大人脉圈，提升投资潜力，分享学术成果。',
                        to: {name: "home_page", query: {page: "articleIntro"}},
                        image: require("../images/list2.jpg")
                    },
                    {
                        title: "峰会须知 | 2017鑫星汇证券投资平台峰会",
                        desc: '峰会地址及交通情况·峰会地点北京首都国际机场朗豪酒店北京首都机场朗豪酒店毗邻首都国际机场三号航站楼，位居优越。有穿梭巴士往返于酒店与三号航站楼之间。',
                        to: {name: "home_page", query: {page: "articleNotice"}},
                        image: require("../images/list2.jpg")
                    },
                ]
            }
        },
        mounted() {
            this.$store.commit('SPIN', false)
        },
    }
</script>
