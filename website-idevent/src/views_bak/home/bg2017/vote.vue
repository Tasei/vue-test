<template>
    <div class="vote-list">
        <div v-for="v of list">
            <router-link  class="item" v-if="v.is_active==1" :style="{backgroundImage: 'url(' + v.pic + ')'}" :to="{name: 'home_page', query: {page: 'vote', 'poll_id': v.id}}">
                <div class="content">
                    <!--
                    <div class="title">{{v.title}}</div>
                    <div class="arrow">进入投票<span></span></div>
                    -->
                </div>
            </router-link>
            <div v-else @click="btnZan" class="item" :style="{backgroundImage: 'url(' + v.pic + ')'}">
                <div class="shadow"></div>
                <div class="content">
                    <!--
                    <div class="title">{{v.title}}</div>
                    <div class="arrow">进入投票<span></span></div>
                    -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { Toast } from 'mint-ui'
    export default{
        data(){
            return{
                list: []
            }
        },
        computed: {
            vote_id() {
                return this.$route.query.vote_id
            }
        },
        created() {
            this.getList()
        },
        methods: {
            getList() {
                this.$http.post('interact/poll/getGroupPolls', {
                    meeting_id: this.meeting.id,
                    group_id: this.vote_id
                }).then((response) => {
                    if(response.body.err == 0) {
                        this.list = response.body.res.list
                    }
                }).then(() => {
                    this.$store.commit('SPIN')
                })
            },
            btnZan() {
                Toast('暂未开放投票')
            }
        }
    }
</script>
<style lang="less" scoped>
    .vote-list {
        padding: 20px;
        .item {
            display: block;
            position: relative;
            //padding: 27px;
            text-align: center;
            background-color: #333;
            color: #fff;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            width: 100%;
            margin: 0 auto 15px auto;
            padding-top: 29.85%;
        }
        .title {
            font-size: 24px;
            line-height: 24px;
            color: #fff;
            margin-bottom: 7px;
        }
        .arrow {
            display: inline-block;
            font-size: 15px;
            line-height: 15px;
            background-size: 15px;
            position: relative;
            span {
                display: inline-block;
                width: 15px;
                height: 15px;
                position: absolute;
                background: url("./images/arrow.png") no-repeat center;
                background-size: 15px;
                right: -20px;
                top: 0;
            }
        }
    }

    .shadow {
        position: absolute;
        left:  -10px;
        top: -10px;
        bottom: -10px;
        right: -10px;
        background: #ffffff;
        opacity: 0.92;
        z-index: 1;
        .content {
            display: table;
            height: 100%;
            width: 100%;
            p {
                margin: 0;
                vertical-align: middle;
                display: table-cell;
                color: #333;
                text-align: center;
                position: relative;
                span {
                    position: relative;
                    &:before {
                        content: '';
                        position: absolute;
                        left: -34px;
                        top: 0;
                        bottom: 0;
                        width: 27px;
                        background: url("./images/line.png") no-repeat center;
                        background-size: 27px 3px;
                    }
                    &:after{
                        content: '';
                        position: absolute;
                        right: -34px;
                        top: 0;
                        bottom: 0;
                        width: 27px;
                        background: url("./images/line.png") no-repeat center;
                        background-size: 27px 3px;
                        transform: rotate(180deg);
                    }
                }
            }
        }
    }
</style>
