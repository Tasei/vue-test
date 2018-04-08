<template>
<div>
    <div class="fd-index">
        <div>
            <img :src="banner" class="img-responsive" />
        </div>
        <div class="content text-dark">
            <p>you will connect with hosted Buyers who want to meet with you, buy from you and network with you!</p>
            <p>在汽车买家和供应商急需高效沟通的推动下，凭着对于中国会议行业的深度了解和广泛的客户资源，打造了自有品牌活动- 汽车展销会。汽车展销会自2014年首次亮相以来，至今已连续成功举办了五届，是为高品质汽车业者量身打造的销售路演活动，成为其获取中国高利润会奖旅游生意的首选销售解决方案。</p>
            <p> 汽车展销会作为针对中国企业奖励旅游和会议的创新性活动，不仅吸引了多样化的展商踊跃参加，如单体酒店、连锁酒店、酒店综合体、游轮、航空公司和目的地营销机构（如旅游局、会展局），还深受寻求更多选择的潜在买家的欢迎（包括目的地管理公司/专业会议组织方、奖励旅游活动公司、企业会议组织公司等）。 汽车展销会每一站充分利用一天时间安排多种互动交流，在短时间内促成了更多高价值生意线索的产生，将展商和买家的利益紧密地联系起来。</p>
            <p class="font-bold"> 汽车展销会具有以下两个突出的特色，才使其成为针对性更强、带来更高附加值，真正的结果导向型活动：</p>

            <p><span class="text-primary font-bold">• 展位有限：</span>仅限50名展商，确保了展商能够最大程度上与带着汽车生意而来的超过200位买家充分交流（北京和上海两站总和）。展商能够通过在展位上介绍情况、幸运抽奖环节以及茶歇和午餐的自由交流获得更高的曝光度。</p>

            <p><span class="text-primary font-bold">• 高质量买家：</span>组织中国特邀买家前往参展已有近10年，深谙遴选合格特邀买家的国际标准。因此， 汽车展销会在选择邀请高品质买家上也有非常严格的要求，是有较强购买力、预算充足、确实有生意机会的重量级买家，可保证来自北京和上海的主要国内及入境会奖买家参与到 汽车展销会当中。</p>
            <p class="font-bold text-primary"> 汽车展销会明显优于国内的汽车行业展览：</p>
            <p>
                a) 一年举办两次（帮助酒店保持触及客户的频率，推动上半年及下半年的市场销售）vs.一年仅一次；<br/>
                b) 北京和上海两站（促成更多本地买家参加）vs. 北京或上海一地举行；<br/>
                c) 决策者/较大影响力买家（高质量买家确保了更多高价值生意线索）vs.普通操作人员；<br/>
                d) 便捷举办场地（一般选择上海人民广场及北京国贸/燕莎商圈的一流会议场地举办，方便买家前往）vs.展览场地偏远；<br/>
                e) 更高投资回报率（仅需30，000元就可与北京上海两地超过200位重要买家会谈）vs.低性价比。
            </p>
            <p>值得一提的是，对于酒店来说，会奖客户对其综合性收入贡献率极大，也是最有吸引力的细分市场。 汽车展销会比起酒店集团的路演或单个酒店销售拜访的成本有效性更高，在两天的时间内集中会见大量的潜在买家获得有价值生意机会，展商收益实现最大化，同时买家也受益颇多，可深入了解多个各具特色的酒店品牌，发现更多更好的选择。</p>
        </div>
        <mt-tabbar class="fixed-bar" :fixed="true">
            <mt-tab-item>
                <router-link :to="{name:'home_page', query: { page: 'buyer_notice', mid:'abc2017-1' }}"><button class="btn btn-lg btn-primary black">买家注册</button></router-link>
            </mt-tab-item>
            <mt-tab-item>
                <router-link :to="{name:'register_form', query:{mid:'abc2017'}}" class="btn btn-lg btn-primary">展商注册</router-link>
            </mt-tab-item>
        </mt-tabbar>
    </div>

</div>
</template>
<script>
import {Toast, Indicator} from "mint-ui"
    export default{
        data() {
            return{
                banner: require('../../../assets/images/mobile/mice/abc_banner.png'),
                list: []
            }
        },
        computed: {
            user() {
                return this.$store.state.user
            },
            meeting() {
                return this.$store.state.meeting
            },
            is_default() {
                return this.user && this.user.group && this.user.group.is_default==1
            }
        },
        created() {
            //this.getGroupList()
        },
        mounted() {
            this.$store.commit('SPIN')
        },
        methods: {
            getGroupList() {
                if (!this.user) {
                    return
                }
                let self = this
                this.$http.post('invitation/group/list', {
                    meeting_id: this.meeting.id
                }).then((response) => {
                    if (response.body.err == 0) {
                        self.list = response.body.res.list.slice(1)
                    }
                }).then(() => {
                    this.$store.commit('SPIN')
                })
            },
            //更新用户组
            updateGroup(group_id) {
                let self = this
                this.$store.commit('SPIN', true)
                this.$http.post('invitation/code/updateGroup', {
                    id: this.user.id,
                    group_id: group_id
                }).then((response) => {
                    if (response.body.err == 0) {
                        self.$router.push({name: 'register_form'})
                    } else {
                        this.$store.commit('SPIN', true)
                        Toast(response.body.msg)
                    }
                })
            },

            logout() {
                let self = this
                Indicator.open()
                this.$http.post('meeting/logout').then(function(response) {
                    let ret = response.body
                    if (ret.err == 0) {
                        self.$store.commit('USER', null)
                        this.$cookie.delete('WX_AUTH')

                        this.$router.push({name: "portal"})
                        return
                    }
                })

            }
        }
    }
</script>
<style lang="less" scoped>
    .fd-index {
        // background-color: #0e1b23;
        background-color: #fff;
        min-height: 100vh;
        overflow: hidden;
        position: relative;
        padding-bottom: 75px;
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
    }

    .fixed-bar {
        bottom: -1px;
        .mint-tab-item{
            padding: 0;
        }
        .btn {
            margin: 0;
            border-radius: 0;
            box-shadow: none;
            border: none;
            &.black {
                background: #000;
                color: #fff;
            }
        }
    }
</style>
