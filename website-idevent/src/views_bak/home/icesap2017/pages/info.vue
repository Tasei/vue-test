<template>
    <div class="mt-container">
        <div class="block" v-for="item in info">
            <div class="img"><img :src="item.pic" /></div>
            <div v-if="item.title" class="title">{{item.title}}</div>
            <div class="date">{{item.date}}</div>
            <div class="content" v-html="item.content"></div>
        </div>
    </div>
</template>
<script>
    export default{
        locales: {
            en: {
                info: [
                    {
                        title: '4th Annual Incentive, Conference & Event Society Asia Pacific (ICESAP) Conference',
                        date: '2017/09/06 – 09/08',
                        content: 'The 4th annual Incentive, Conference & EventSociety Asia Pacific (ICESAP) conference attracts high-value corporate clients, agency leaders and many of our industry partners including hotel and venue companies & destination marketers to discuss the latest trends and challenges influencing the Incentive, Conference & Event business acrossAsia Pacific.',
                        pic: require("../assets/conference.png"),
                    },
                    {
                        title: 'Incentive, Conference & Event Society Asia Pacific (ICESAP)',
                        content: 'The Incentive, Conference & Event Society Asia Pacific -or ICESAP for short - is a dynamic professional membership based peak body for those working with or in the Incentive, Conference & Event industry acrossAsia Pacific. Members include those from the corporate sector who are customers, those working in agencies, and those working in supply of goods and services in the industry. Alongside hosting an Annual Conference, ICESAP will deliver distance learning and networking events for members across all the major markets in Asia Pacific.',
                        pic: require("../assets/icesap.png"),
                    }
                ],
            },
            zh: {
                info: [
                    {
                        title: '亚太会奖及活动年会',
                        date: '2017年9月6日 – 9月8日',
                        content: '汇集领先的企业买家，会展活动公司， 酒店，旅游局，旅游公司和行业供应商， 共同讨论面临的最新挑战，分享专业见解和 影响亚太地区会奖活动产业的新产品。',
                        pic: require("../assets/conference.png"),
                    },
                    {
                        title: '',
                        content: 'ICESAP 是一个专门为会奖与商务活动专业人士成立的学会。ICESAP的会员均来自亚太地区，包括终端企业（企业会员）、会奖与活动公司（会奖及活动公司会员）以及在会奖与商务活动行业中提供产品或服务的供应商（供应商会员）。除了举办年度大会，ICESAP 在亚太地区为会员提供教育、职业发展、跨职能学习和商业社交网络的交流平台。除此之外，ICESAP也在主要城市定期举办会员交流活动。ICESAP还将在2017年推出会奖及活动公司认证方案，以区分符合标准和行为准则的会奖及活动公司。',
                        pic: require("../assets/icesap.png"),
                    }
                ],
            }
        },
        data() {
            return {
                info: this.$t('info'),
            }
        },
        mounted() {
            this.$store.commit('SPIN')
        }
    }
</script>
<style lang="less" scoped>
    @import "../assets/style";
    .block {
        .img {
            margin-bottom: 14px;
            img {
                width: 100%;
            }
        }
        .date {
            color: #999;
            font-size: 12px;
            margin: 10px 0;
        }
        .content {
            line-height: 150%;
        }
    }
</style>
