<template>
    <i-fixed>
        <!---首屏 未开始-->
        <div class="bg text-center">
            <div class="logo"></div>
            <div class="content">

                <div class="item" v-for="item in result">
                    <div :class="'avatar avatar-'+item.index" ></div>
                    <h3>{{item.text}}</h3>
                    <h5>{{item.label}}</h5>
                </div>
            </div>
        </div>

    </i-fixed>
</template>
<script>
    import iFixed from 'components/fixed'
    import cx from 'classnames'
    export default{
        data() {
            return {
                result: []
            }
        },
        mounted() {
            this.$store.commit('SPIN')
        },

        created() {
            this.getDetail()
        },

        computed: {
            meeting() {
                return this.$store.state.meeting
            },

        },
        methods: {
            getDetail() {
                let self = this
                this.$http.post('interact/wall/getPolls', {
                    meeting_id: this.meeting.id
                }).then((response) => {
                    if(response.body.err == 0 && response.body.res.list.length > 0) {
                        let ret = response.body.res.list[0]
                        let options = ret.options
                        for(let [index, item] of options.entries()) {
                            item.index = index
                        }

                        options.sort(function(a, b) {
                            return b.vote_count - a.vote_count
                        })

                        self.result = options.slice(0, 2)

                    }
                })
            },

            getMax(options) {
                let max = options[0]
                for(let [item, index] of options) {
                    if(max.vote_count < item.vote_count) {
                        max = item
                    }
                }

                return max
            }
        },



        components:{
            iFixed
        }
    }
</script>
<style lang="less" scoped>
    .bg {
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: cover;
        position: relative;
        background-image: url("../../assets/images/crowne/lottery_bg.png");
        padding-top: 210px;

    }
    .logo {
        width: 229px;
        height: 20px;
        background: url("../../assets/images/shake/logo.png") no-repeat center;
        background-size: 100% 100%;
        position: absolute;
        left: 50%;
        margin-left: -115px;
        bottom: 40px;
        z-index:0;
    }
    .item {
        display: inline-block;
        padding: 0 20px;
        .avatar {
            width: 300px;
            height: 300px;
            margin: 0 auto;
            border: 5px solid #8d0252;
            border-radius: 50%;
            background-size: 300px 300px;
            background-color: #8d0252;
            background-repeat: no-repeat;
            background-position: center;
            &.avatar-0 {
                 background-image: url("../../assets/images/crowne/smile-1.png");
            }
            &.avatar-1 {
                background-image: url("../../assets/images/crowne/smile-2.png");
            }
            &.avatar-2 {
                background-image: url("../../assets/images/crowne/smile-3.png");
            }
            &.avatar-3 {
                background-image: url("../../assets/images/crowne/smile-4.png");
            }
            &.avatar-4 {
                background-image: url("../../assets/images/crowne/smile-5.png");
            }
            &.avatar-5 {
                background-image: url("../../assets/images/crowne/smile-6.png");
            }
            &.avatar-6 {
                background-image: url("../../assets/images/crowne/smile-7.png");
            }
        }
        h3 {
            font-size: 48px;
            font-weight: bold;
            color: #fff;
        }
        h5 {
            font-size: 40px;
            color: #fff;
            font-weight: normal;
        }
    }

</style>
