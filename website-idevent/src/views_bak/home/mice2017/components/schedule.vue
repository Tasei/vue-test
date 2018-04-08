<template>
    <div>
        <div style="margin:10px;">
            <span class="text-primary" style="font-size:28px;">{{visitedCount.visited}}</span> / {{visitedCount.total}}
            <template v-if="showRewardStatus">
                <button class="btn btn-default pull-right" v-if="isRewardConfirmed">已领取</button>
                <button class="btn btn-primary pull-right" @click="confirmReward" v-else-if="visitedCount.visited>=15">
                    领奖
                </button>
                <button class="btn btn-primary pull-right" disabled v-else>领奖</button>
            </template>
        </div>
        <p class="bg-info" style="padding: 10px;">
            上午对洽时间 9:30 ~ 12:30<br>
            午餐时间: 12:30 ~ 13:30<br>
            下午对洽时间 13:30 ~ 17:00
        </p>

        <mt-cell v-for="n in scheduleList" :title="'[ '+n.time+' ] '+(isExhibitor?n.visitor:n.exhibitor)"
                 :label="isExhibitor?(n.c_name+' '+n.c_pos):''">
            <template v-if="isExhibitor">
                <button class="btn btn-sm btn-primary" v-if="n.visited==0" @click="confirmVisited(n.id)">确认</button>
                <span v-if="n.visited==1" class="label label-default">已完成</span>
            </template>
            <template v-if="!isExhibitor">
                <span v-if="n.visited==0" class="label label-default">未完成</span>
                <span v-if="n.visited==1" class="label label-primary">已完成</span>
            </template>
        </mt-cell>
    </div>
</template>
<script>
    import {Toast, Indicator, MessageBox} from "mint-ui"

    export default{
        props: {
            type: String
        },
        data() {
            return {
                scheduleList: [],
                isRewardConfirmed: false,
                showRewardStatus: false
            }
        },
        created() {
            if (!this.isExhibitor) {
                this.getRewardStatus()
            }
            this.getList()
        },
        computed: {
            isExhibitor() {
                return this.meeting.alias === 'mice2017'
            },
            visitedCount() {
                let visited = 0
                let total = 0
                for (let n of this.scheduleList) {
                    if (n.visited == 1) {
                        visited++
                    }
                    total++
                }
                return {
                    total,
                    visited
                }
            },
        },
        methods: {
            confirmReward() {
                MessageBox.confirm('确认已领取奖品?').then(action => {
                    this.confirmRewardSubmit()
                })
            },

            confirmRewardSubmit() {
                this.$http.post('register/saveFieldByLabel', {
                    'form_name': '领奖',
                    'field_label': '是否领奖',
                    'field_value': 'Y'
                }).then((response) => {
                    if (response.body.err === 0) {
                        this.isRewardConfirmed = true
                    }
                })
            },

            confirmVisited(id) {
                MessageBox.confirm('确认洽谈完成?').then(action => {
                    this.confirmVisitedSubmit(id)
                })
            },

            confirmVisitedSubmit(id) {
                Indicator.open()
                this.$http.post('micechina/exhibitor/updateVisited', {
                    schedule_id: id
                }).then((response) => {
                    let ret = response.body
                    if (ret.err === 0) {
                        this.getList()
                    }
                    Indicator.close()
                })
            },
            getRewardStatus() {
                this.$http.post('register/getFieldByLabel', {
                    'form_name': '领奖',
                    'field_label': '是否领奖'+this.type
                }).then((response) => {
                    if (response.body.err === 0) {
                        this.isRewardConfirmed = (response.body.res.value === 'Y')
                        this.showRewardStatus = true
                    }
                })
            },

            getList() {
                let url = this.isExhibitor ? 'micechina/exhibitor/show' : 'micechina/visitor/show'

                this.$http.post(url, {
                    type: this.type
                }).then((response) => {
                    if (response.body.err === 0) {
                        this.scheduleList = response.body.res.schedule_list
                    }
                })
            },
        }

    }
</script>
