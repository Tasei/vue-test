<template>
    <div>
        <div v-if="vote && vote.is_voted!=1" class="vote">
            <h3>{{vote.title}}<br/><span class="text-primary">(至少选择{{vote.min_choice}}项,最多选择{{vote.max_choice}}项)</span></h3>
            <div class="col-xs-12 clearfix" v-for="options of list">
                <div :class="{'col-xs-4': show_type==0}" v-for="opt of options">
                    <div :class="gridCls" @click="voteSelected(opt)">
                        <div class="pic" :style="{'paddingTop': opt.padding + '%'}">
                            <img v-if="show_type==0" v-lazy="opt.pic + '/b200'" />
                            <img v-else v-lazy="opt.pic + '/w750'" />
                            <div v-if="opt.selected" class="selected bg-primary"></div>
                        </div>
                        <h5 class="text-dark">{{opt.text}}</h5>
                        <p class="text-gray">{{opt.label}}</p>
                    </div>
                </div>
            </div>
            <button @click="voteSubmit" class="btn btn-lg btn-primary">提交</button>
        </div>
        <vote-result :vote="vote" :list="rankList" :total="vote_count" v-else></vote-result>
    </div>
</template>
<script>
    import _chunk from 'lodash/chunk'
    import _collection from 'lodash/collection'
    import voteResult from '../components/vote_result'
    import { Indicator, Toast } from 'mint-ui'
    import cx from 'classnames'
    export default{
        components: {
            voteResult
        },
        data(){
            return{
                vote: null,
                list: [],
                selected: [],
                vote_count: 0,
                rankList: [],
                show_type: 0
            }
        },
        computed: {
            poll_id() {
                return this.$route.query.poll_id
            },
            gridCls() {
                return cx({
                    ['item']: true,
                    ['text-center']: this.show_type == 0,
                    ['item-large']: this.show_type == 1,
                })
            }
        },
        created() {
            this.getDetail()
        },
        methods: {
            voteSelected(opt) {
                this.$nextTick(function() {
                    let pos = this.selected.indexOf(opt.id)
                    if(pos > -1) {
                        this.selected.splice(pos, 1)
                        opt.selected = false
                    } else {
                        if(this.selected.length >= parseInt(this.vote.max_choice)) {
                            return
                        }
                        this.selected.push(opt.id)
                        opt.selected = true
                    }
                })
            },
            getDetail() {
                this.$http.post('interact/poll/getDetailById', {
                    poll_id: this.poll_id
                }).then((response) => {
                    if (response.body.err == 0 && response.body.res) {
                         let ret = response.body.res
                         this.vote = ret
                         this.show_type = ret.show_type
                         let options = JSON.parse(JSON.stringify(ret.options))
                         for(let opt of options) {
                            opt.selected = false
                            opt.vote_count = parseInt(opt.vote_count)
                            if (this.show_type == 1) {
                                opt.padding = 100 * parseInt(opt.attachment.pic_height)/parseInt(opt.attachment.pic_width)
                            } else {
                                opt.padding = 100
                            }
                         }
                         this.vote_count = ret.voted_user_count

                         //如果投过票计算排名
                         if (this.vote.is_voted == 1) {
                             let rankList = _collection.orderBy(options, ['vote_count'], ['desc'])
                             for(let [index, item] of rankList.entries()) {
                                if(index == 0) {
                                    item.rank = 1
                                } else {
                                    let prev = rankList[index - 1]
                                    if(item.vote_count >= prev.vote_count) {
                                        item.rank = prev.rank
                                    } else {
                                        item.rank = parseInt(prev.rank) + 1
                                    }
                                }

                                //添加百分比
                                if(this.vote_count > 0) {
                                    item.percentage = Math.floor((item.vote_count/this.vote_count) * 100)
                                }
                             }

                             this.rankList = rankList
                         }
                         this.list = _chunk(options, 3)
                    }
                }).then(() => {
                    this.$store.commit('SPIN')
                })
            },
            voteSubmit() {
                if(this.selected.length > parseInt(this.vote.max_choice)) {
                    Toast('最多可选择' + this.vote.max_choice + '项')
                    return
                }

                if(this.selected.length < parseInt(this.vote.min_choice)) {
                    Toast('至少选择' + this.vote.min_choice + '项')
                    return
                }

                Indicator.open()
                let self = this
                this.$http.post('interact/poll/batchVote', {
                    option_ids: this.selected
                }).then((response) => {
                    Indicator.close()
                    if(response.body.err == 0) {
                        let instance = Toast('投票成功')
                        setTimeout(() => {
                            self.$store.commit('SPIN', true)
                            self.getDetail()
                        }, 1000)
                    } else {
                        Indicator.close()
                        Toast(response.body.msg)
                    }
                })

            }
        }
    }
</script>
<style lang="less" scoped>
    h3 {
        font-size: 17px;
        color: #333;
        margin: 0 0 20px;
    }
    .vote {
        padding: 25px 20px 40px;
    }
    .col-xs-12, .col-xs-4 {
        padding-left: 0;
        padding-right: 0;
    }
    .col-xs-4 {
        padding: 0 5px;
        margin-bottom: 20px;
    }
    .item {
        .pic {
            width: 100%;
            padding-top: 100%;
            position: relative;
            background: #eee;
            img[lazy=loaded] {
                width: auto;
                height: auto;
                max-width: 100%;
                max-height: 100%;
                -ms-transform: translate(-50%, -50%);
                -webkit-transform: translate(-50%, -50%);
                -moz-transform: translate(-50%, -50%);
                transform: translate(-50%, -50%);
                position: absolute;
                left: 50%;
                top: 50%;
            }
            .selected {
                position: absolute;
                z-index: 2;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                opacity: 0.9;
                background-image: url("../images/selected.png");
                background-position: center;
                background-repeat: no-repeat;
                background-size: 42px 30px;
            }
        }
        h5 {
            font-size: 15px;
            line-height: 1;
            margin: 7px 0 5px 0;
        }
        p {
            margin: 0;
            line-height: 1.16666667;
            font-size: 12px;
        }
    }
    .item-large {
        margin-bottom: 20px;
    }
</style>
