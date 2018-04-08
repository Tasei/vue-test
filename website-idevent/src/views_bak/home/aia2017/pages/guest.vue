<template>
    <div class="mt-container">
        <div class="block" :style="opened[1] ? {height:'auto'} : {}">
            <div class="title">演讲主题：“制造让客户难忘的体验”- 腾讯的“用户体验至上”文化与微信的产品观</div>
            <div class="sub-title">演讲嘉宾：腾讯微信行业总监王琼女士</div>
            <hr />
            <div class="sub-title"><small>嘉宾介绍：</small></div>
            <p class="imp">三大互联网巨头之一的腾讯公司，2017年第一季度总收入为人民币495.52亿元，比去年同期增长55%;旗下的微信月活跃账户达9.38亿，同比增长23%。腾讯能在激烈竞争中屹立并持续领先，得益于公司一直在居安思危；一直在不断地打败昨天的自己；一直通过创新满足用户需求。</p>
            <p>王琼女士是腾讯旗下的微信行业总监，主要负责推动微信企业号与政府、组织和企业的连接，使其成为企业新商业模式的催化剂，让共享经济形态加速新商业创新，从而提升企业的竞争力，最终为客户提供更有价值的服务。王琼女士在腾讯公司有多年丰富的实践经验，她直接向微信团队的负责人张小龙先生汇报，并凭借对不同行业互联网+应用的深度了解，为CEO马化腾提供了不少珍贵的一手案例。</p>
            <a v-if="!opened[1]" class="show" @click="showContent(1)">查看全部</a>
        </div>
        <div class="block" :style="opened[2] ? {height:'auto'} : {}">
            <div class="title">演讲主题：“大规模定制”- 互联网下红领集团的商业模式创新</div>
            <div class="sub-title">演讲嘉宾：红领集团副总裁/秘书长李金柱先生</div>
            <hr />
            <div class="sub-title"><small>嘉宾介绍：</small></div>
            <p class="imp">被中央电视台新闻联播节目连续两次报导的一家民营服装生产企业——红领集团，利用大数据和先进的客户资源管理系统，以消费者个性化定制需求为驱动，把传统行业做到卓尔不群的服装o2o，以150%的年利润增长率震惊着整个服装业，吸引了海尔、联想、阿里巴巴等知名企业纷纷派高管前去参观学习。</p>
            <p>李金柱先生是红领集团副总裁以及中国互联网工业联盟、青岛互联网工业联合会秘书长。李金柱先生在红领工作了10多年，参与、见证了红领“打造数据驱动智能工厂和C2M跨境直销模式，形成互联网+工业全程彻底解决方案”的探索、试验和落地过程。目前，李金柱先生主要负责互联网工业、红领酷特智能模式的培训、推广和项目落地工作。</p>
            <a v-if="!opened[2]" class="show" @click="showContent(2)">查看全部</a>
        </div>
        <div class="block" :style="opened[3] ? {height:'auto'} : {}">
            <div class="title">演讲主题：“激活人才”, 打造世界一流的领导者</div>
            <div class="sub-title">演讲嘉宾：IBM全球业务咨询服务大中国区副总裁兼资深合伙人赵亮先生</div>
            <hr />
            <div class="sub-title"><small>嘉宾介绍：</small></div>
            <p class="imp">在全球化和互联经济的趋势下，中国企业面临着创新业务模式、提升管理模式、建立核心竞争力等巨大挑战。作为全球最大的咨询服务机构，IBM全球业务咨询服务广泛地服务于国内外客户及各行业企业，在企业战略、领导力发展、推进企业创新和转型方面积累了大量实践经验，同时凭借在大数据、云计算、移动、社交等创新技术领域的深刻洞察和丰富实践经验，更好地帮助企业迎接新互联网时代的挑战。</p>
            <p>赵亮先生现任IBM大中华区全球咨询服务金融行业总经理，管理1200人以上金融行业咨询服务团队，同时兼任IBM咨询服务部中国银行现代转型工程负责人，关注于针对企业级应用创新和数字化方案的提供，同时负责金融机构转型及创新方案的规划和实施。</p>
            <p>赵亮先生拥有超过20年在北美，亚太和中国行业的工作经验，在企业级架构、产品研发和应用创新等领域拥有丰富的经验。赵亮先生同时在北美和中国拥有多年的人员管理和教学经验，在IBM担任咨询服务资深导师，专注于企业人才流失和管理、领导力开发等问题的研究，在北美更有过长达6年的IT教学经验，曾应邀在北大光华和北大国际MBA/EMBA进行过企业转型宣讲。</p>
            <a v-if="!opened[3]" class="show" @click="showContent(3)">查看全部</a>
        </div>
    </div>
</template>
<script>
    export default{
        mounted() {
            this.$store.commit('SPIN')
        },
        data() {
            return {
                opened: {
                    1: false,
                    2: false,
                    3: false
                },
            }
        },
        methods: {
            showContent(n) {
                this.opened[n] = true;
            }
        }
    }
</script>
<style lang="less" scoped>
    @import "../assets/style";
    .block {
        position: relative;
        height: 360px;
        overflow: hidden;
        hr {
            margin: 15px 0;
        }
        p {
            margin-bottom: 1.2em;
            line-height: 150%;
            color: #999;
            &.imp {
                color: #2a2a2a;
            }
        }
        .title {
            text-indent: 0;
            line-height: 150%;
            &:before {
                display: none;
            }
        }
        .sub-title {
            color: #666;
            line-height: 150%;
            font-weight: normal;
            margin: 10px 0
        }
        .show {
            display: block;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 80px;
            background-image: linear-gradient(0deg, #FFFFFF 0%, #FFFFFF 30%, rgba(255,255,255,0.00) 100%);
            padding-top: 40px;
            text-align: center;
            color: #5E3B74 !important;
            &:after {
                content: '';
                display: inline-block;
                width: 0;
                height: 0;
                left: 0;
                border-left: 4px solid transparent;
                border-right: 4px solid transparent;
                border-top: 6px solid #5E3B74;
                transform: translateY(-30%);
                margin-left: 5px;
            }
        }

    }
</style>
