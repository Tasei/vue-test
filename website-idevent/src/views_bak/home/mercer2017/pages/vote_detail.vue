<template>
    <div class="home-index">
        <div v-if="banner">
            <img :src="banner" class="img-responsive"/>
        </div>
        <div>
            <div>
                <h2 class="page-title text-primary">{{title}}</h2>
            </div>
            <div class="vote" v-for="vote in list">
                <h3 class="title" :class="{'text-danger': vote.ok<0}">
                    {{vote.title}}
                </h3>
                <template v-if="vote.is_multi==0">
                    <div class="option radio" v-for="(option, index) in vote.options">
                        <label>
                            <input @change="checkResult(vote)" type="radio" v-model="vote.result" :value="option.id">
                            <template v-if="option.label">{{option.label}}</template>
                            <template v-else>{{index + 1}}. </template>
                            {{option.text}}
                        </label>
                    </div>
                </template>

                <template v-else>
                    <div class="option checkbox" v-for="(option, index) in vote.options">
                        <label>
                            <input @change="checkResult(vote)" type="checkbox" v-model="vote.result" :value="option.id">
                            <template v-if="option.label">{{option.label}}</template>
                            <template v-else>{{index + 1}}. </template>
                            {{option.text}}
                        </label>
                    </div>
                </template>
            </div>
            <i-button class="btn btn-lg btn-primary" :onOk="submit">提交</i-button>
        </div>
    </div>
</template>

<script>
    import iButton from "iButton"
    import {Toast} from "mint-ui"

    let vList = [
        {
            "id": "13",
            "poll_group_id": "2",
            "show_type": "0",
            "title": "问题一：销售 你觉得以下哪种策略最有利于改善经销商盈利？",
            "subhead": null,
            "is_multi": 0,
            "min_choice": "1",
            "max_choice": "1",
            "is_locked": "0",
            "is_active": "1",
            "attachment": null,
            "voted_user_count": 10,
            "is_voted": 0,
            "pic": "",
            "options": [
                {
                    "id": "42",
                    "label": "",
                    "text": "帮助经销商提升盈利车型（大车型）的比例；",
                    "is_answer": "0",
                    "vote_count": "5",
                    "weight": "0",
                    "pic": "",
                    "attachment": null,
                    "percent": "35.7"
                },
                {
                    "id": "43",
                    "label": null,
                    "text": "出台更加简单、灵活、稳定的商务政策；",
                    "is_answer": "0",
                    "vote_count": "3",
                    "weight": "0",
                    "pic": "",
                    "attachment": null,
                    "percent": "21.4"
                },
                {
                    "id": "44",
                    "label": null,
                    "text": "眼里打击飞车等违规行为，稳定市场秩序；",
                    "is_answer": "0",
                    "vote_count": "4",
                    "weight": "0",
                    "pic": "",
                    "attachment": null,
                    "percent": "28.6"
                },
                {
                    "id": "45",
                    "label": null,
                    "text": "财务流程优化，提升支付效率；",
                    "is_answer": "0",
                    "vote_count": "2",
                    "weight": "0",
                    "pic": "",
                    "attachment": null,
                    "percent": "14.3"
                }
            ]
        },
        {
            "id": "14",
            "poll_group_id": "2",
            "show_type": "0",
            "title": "问题二：销售 你觉得以下哪种策略最有利于改善经销商盈利？",
            "subhead": null,
            "is_multi": "0",
            "min_choice": "1",
            "max_choice": "1",
            "is_locked": "0",
            "is_active": "1",
            "attachment": null,
            "voted_user_count": 10,
            "is_voted": 0,
            "pic": "",
            "options": [
                {
                    "id": "45",
                    "label": "",
                    "text": "帮助经销商提升盈利车型（大车型）的比例；",
                    "is_answer": "0",
                    "vote_count": "5",
                    "weight": "0",
                    "pic": "",
                    "attachment": null,
                    "percent": "35.7"
                },
                {
                    "id": "46",
                    "label": null,
                    "text": "出台更加简单、灵活、稳定的商务政策；",
                    "is_answer": "0",
                    "vote_count": "3",
                    "weight": "0",
                    "pic": "",
                    "attachment": null,
                    "percent": "21.4"
                },
                {
                    "id": "47",
                    "label": null,
                    "text": "眼里打击飞车等违规行为，稳定市场秩序；",
                    "is_answer": "0",
                    "vote_count": "4",
                    "weight": "0",
                    "pic": "",
                    "attachment": null,
                    "percent": "28.6"
                },
                {
                    "id": "48",
                    "label": null,
                    "text": "财务流程优化，提升支付效率；",
                    "is_answer": "0",
                    "vote_count": "2",
                    "weight": "0",
                    "pic": "",
                    "attachment": null,
                    "percent": "14.3"
                },
        ]
        }
    ]


    export default {
        components: {
            iButton,
        },
        data() {
            return {
                title: '话题投票',
                list: [],
            }
        },
        computed: {
            banner() {
                return this.meeting.settings.home ? this.meeting.settings.home.index_banner : '';
            },
            user() {
                return this.$store.state.user
            },
            voteResult() {
                let result = [];
                for (let vote of this.list) {
                    result = result.concat(vote.result)
                }
                console.log("voteResult",result);
                return result
            },
        },
        created() {
            this.$store.commit('SPIN', true)
            this.getPolls();
            if (this.$route.query.title) {
                this.title = this.$route.query.title;
            }
        },
        methods: {
            checkResult(vote) {
                console.log('vote',vote)
                console.log('check!', this.voteResult);

                let result = true

                let votes = [];

                if (!!vote) {
                    votes = [vote]
                } else {
                    votes = this.list
                }
                console.log(votes);
                for (let vote of votes) {
                    if (vote.is_multi == 1) {
                        if (vote.result.length > vote.max_choice) {
                            vote.ok = -1
                            result = false
                        } else if (vote.result.length < vote.min_choice) {
                            vote.ok = -1
                            result = false
                        } else {
                            vote.ok = 1
                        }
                    } else {
                        if (vote.result == 0) {
                            vote.ok = -1
                            result = false
                        } else {
                            vote.ok = 1
                        }
                    }
                }
                return result
            },
            setVoteOK() {
                this.$parent.voteOK = true
                this.$cookie.set("FORD_VOTE_OK_" + this.user.id + "_" + this.group.id, true, {expires: '3D'})
                this.$cookie.set("FORD_VOTED_" + this.user.id, true, {expires: '3D'})
            },
            submit(e) {
                Toast("提交成功");
                e.loading = false;
                console.log("submit",this.voteResult);
                if (!this.voteResult) {
                    Toast("请修正您的投票选择");
                    e.loading = false;
                    return false
                }

                return false
            },
            getPolls() {

                for (let vote of vList) {
                    if (vote.is_multi == 1) {
                        vote.result = []
                    } else {
                        vote.result = 0
                    }
                    vote.ok = 0
                }
                this.list = vList;
                this.$store.commit('SPIN', false)
            },
            focusError() {
                setTimeout(function () {
                    window.scrollTo(0, $("h3.text-danger")[0].offsetTop)
                }, 500)
            },
        }
    }
</script>
<style lang="less" scoped>
    h2.page-title {
        margin: 0 auto 30px 0;
        padding: 30px 0;
        font-size: 17px;
        line-height: 17px;
        text-align: center;
        font-family: PingFangSC-Medium;
        border-bottom: 1px solid #ddd;
    }

    .vote {
        padding: 0px 15px;
        .title {
            font-family: PingFangSC-Medium;
            font-size: 18px;
            color: #444;
            letter-spacing: 0px;
            line-height: 22px;
            text-align: left;
            margin-top: 30px;
            margin-bottom: 0;
            .help {
                font-size: 16px;
                line-height: 22px;
                vertical-align: baseline;
                // color: #999;
            }
        }
        .option {
            margin-top: 20px;
            margin-bottom: 0;
            &:last-child {
                padding-bottom: 30px;
                border-bottom: 1px solid #ddd;
            }
            label {
                font-family: PingFangSC-Regular;
                font-size: 15px;
                line-height: 18px;
                color: #333;
                letter-spacing: 0;
            }
        }
        .help-block {
            font-size: 14px;
        }
    }

    .btn.btn-lg {
        margin-top: 30px;
        margin-bottom: 60px;
    }
</style>