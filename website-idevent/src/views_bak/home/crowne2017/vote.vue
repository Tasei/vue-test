<template>
    <div style="padding-bottom: 40px;">
        <h3 class="font-bold title text-primary text-center">微笑大使评选</h3>
        <div v-if="!voteOk">
            <div class="vote">
                <h5>请选择<span class="text-primary">2位</span>您心目中的微笑大使</h5>
            </div>
            <div class="content col-xs-12">
                <div class="col-xs-6 item" v-for="option in options">
                    <i-check class="check" :option="option.id" v-model="selected">
                        <div class="item-content">
                            <div class="pic"></div>
                            <h5>{{option.text}}</h5>
                            <p>{{option.label}}</p>
                        </div>
                    </i-check>
                </div>
            </div>
            <div style="padding: 0 20px;clear: both">
                <a @click="btnSave" href="javascript:;" class="btn btn-primary btn-lg btn-block">确认</a>
            </div>
        </div>
        <div v-else class="result text-center">
            <a class="icon icon-checkcircle text-primary"></a>
            <h3 class="text-dark">提交成功</h3>
            <p>微笑大使感谢您的支持～～</p>
            <div style="padding: 0 20px;clear: both">
                <router-link :to="{name: 'home_index'}" class="btn btn-primary btn-lg btn-block">返回首页</router-link>
            </div>
        </div>
    </div>
</template>
<script>
import iCheck from '../../../../components/check'
import {Toast, Indicator} from 'mint-ui'
export default{
	components: {
        iCheck
	},
	data() {
	    return {
	        poll: null,
	        options: [],
	        selected: [],
	        voteOk: false
	    }
	},

	created() {
	    this.getVoteOk()
	    this.getList()
	},
    computed: {
        meeting() {
            return this.$store.state.meeting
        },
        user() {
            return this.$store.state.user
        }
    },
    methods: {
        //获取选项列表
        getList() {
            let self = this
            this.$http.post('interact/poll/getGroups', {
                meeting_id: this.meeting.id
            }).then((response) => {
                if(response.body.err == 0 && response.body.res.list.length > 0) {
                    self.$http.post('interact/poll/getGroupPolls', {
                        meeting_id: self.meeting.id,
                        group_id: response.body.res.list[0].id
                    }).then((res) => {
                        if(res.body.err == 0 && res.body.res.list.length > 0) {
                            self.poll = res.body.res.list[0]
                            self.options = self.poll.options
                            self.$store.commit('SPIN')
                        }
                    })
                }
            })
        },
        setVoteOk() {
			this.voteOk = true
        	this.$cookie.set("VOTE_OK_"+this.user.id, true)
		},
		getVoteOk() {
		    this.voteOk = this.$cookie.get("VOTE_OK_"+this.user.id, false) ? true : false
		},

        btnSave() {
            if(this.selected.length != 2) {
                Toast('请选择2位您心目中的微笑大使')
                return false
            }
            Indicator.open()
            let self = this
            this.$http.post('interact/poll/batchVote', {
                option_ids: self.selected
            }).then((response) => {
                Indicator.close()
                if (response.body.err == 0) {
                    self.setVoteOk()
                } else {
                    Toast(response.body.msg)
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
    .col-xs-12, .col-xs-6{
        padding-left: 0;
        padding-right: 0;
    }
    .vote {
        padding: 0 20px;
        >h5{
            font-size: 16px;
            color: #333;
            line-height: 32px;
        }
    }
    .title {
        font-size: 17px;
        margin: 0 0 30px;
        padding: 30px 0;
        border-bottom: 1px solid #ddd;
    }
    .content{
        padding-left: 10px;
        padding-right: 10px;
        .item:nth-child(1) .pic {
            background: url("../../../assets/images/crowne/smile-1-square.png") no-repeat center;
            background-size: 100% 100%;
        }
        .item:nth-child(2) .pic {
            background: url("../../../assets/images/crowne/smile-2-square.png") no-repeat center;
            background-size: 100% 100%;
        }
        .item:nth-child(3) .pic {
            background: url("../../../assets/images/crowne/smile-3-square.png") no-repeat center;
            background-size: 100% 100%;
        }
        .item:nth-child(4) .pic {
            background: url("../../../assets/images/crowne/smile-4-square.png") no-repeat center;
            background-size: 100% 100%;
        }
        .item:nth-child(5) .pic {
            background: url("../../../assets/images/crowne/smile-5-square.png") no-repeat center;
            background-size: 100% 100%;
        }
        .item:nth-child(6) .pic {
            background: url("../../../assets/images/crowne/smile-6-square.png") no-repeat center;
            background-size: 100% 100%;
        }
        .item:nth-child(7) .pic {
            background: url("../../../assets/images/crowne/smile-7-square.png") no-repeat center;
            background-size: 100% 100%;
        }
    }
    .item {
        padding: 0 10px;
        margin-bottom: 20px;
        .check {
            width: 100%;
        }
    }

    .item-content{
        padding: 0 0 0 10px;
        .pic {
            width: 100%;
            height: 110px;
            background: #ddd;

        }
        h5{
            margin: 10px 0 5px;
        }
        p{
            margin-bottom: 0;
            font-size: 12px;
            color: #999;
        }
    }

    .result {
        .icon {
            font-size: 70px;
            line-height: 1;
            color: #fff;
        }
        h3 {
            margin: 20px 0 10px;
            font-size: 20px;
        }
        p {
            font-size: 15px;
        }
    }
</style>
