<template>
    <div class="seat-box">
        <iui-block>
            <iui-title>
                会议信息
            </iui-title>
            <div v-if="conferenceInfo.length>0">
                <div class="item" v-for="item in conferenceInfo">
                    <h5>{{item.name}}</h5>
                    <p v-if="item.time">时间：{{item.time}}</p>
                    <p>{{item.location}}</p>
                    <img :src="item.imgSrc" alt="">
                </div>
            </div>

            <div v-else>
                暂时未查到您的会议信息
            </div>
            <a v-if="meetingImg" :href="meetingImg"><img :src="meetingImg+ '/w320'" alt=""></a>
            <br/>
            <a v-if="photoImg" :href="photoImg"><img :src="photoImg+'/w320'" alt=""></a>
        </iui-block>
        <iui-block>
            <iui-title>
                用餐信息
            </iui-title>
            <div v-if="mealInfo.length>0">
                <div class="item" v-for="item in mealInfo">
                    <h5>{{item.name}}</h5>
                    <p v-if="item.time">时间：{{item.time}}</p>
                    <p>{{item.location}}</p>
                    <img :src="item.imgSrc" alt="">
                </div>
            </div>

            <div v-else>
                暂时未查到您的用餐信息
            </div>
            <a v-if="dinnerImg" :href="dinnerImg"><img :src="dinnerImg+'/w320'" alt=""></a>
        </iui-block>
    </div>
</template>

<script>
    import iuiBlock from "../../../components/iui/block.vue"
    import iuiTitle from "../../../components/iui/block_title.vue"

    export default {
        data() {
            return {
                conferenceInfo: [
//                    {
//                        name:'主题大会',
//                        time:'2017年12月19日08:30-12:05',
//                        location:'座位：B区',
//                        imgSrc:require('../assets/location.png')
//                    },
//                    {
//                        name:'媒体见面会',
//                        time:'2017年12月19日14:30-15:00',
//                        location:'地点：云亭',
//                        imgSrc:''
//                    },
                ],
                mealInfo: [
//                    {
//                        name:'19日午餐',
//                        time:'12:30-13:30',
//                        location:'地点：怡景西餐厅',
//                        imgSrc:''
//                    },
//                    {
//                        name:'19日晚餐',
//                        time:'18:58-21:00',
//                        location:'桌号：150',
//                        imgSrc:require('../assets/location.png')
//                    },
                ],
                meetingImg: '',
                photoImg: '',
                dinnerImg: '',
            }
        },
        components: {
            iuiBlock, iuiTitle
        },
        created() {
            if (this.meeting.settings.lottery) {
                this.meetingImg = this.meeting.settings.lottery.background;
            }
            if (this.meeting.settings.redpacket) {
                this.photoImg = this.meeting.settings.redpacket.background;
            }
            if (this.meeting.settings.poll) {
                this.dinnerImg = this.meeting.settings.poll.background;
            }

            this.getSeatInfo()
        },
        mounted() {
            this.$store.commit('SPIN')
        },
        methods: {

            getSeatInfo() {
                let self = this;
                this.$http.post("Custom/Iveco2018/getThemeInfo").then((resp) => {
                    let ret = resp.body;
                    let arrParent = ret.res
                    if (ret.err == 0) {
                        self.conferenceInfo = arrParent.conferenceInfo;
                        self.mealInfo = arrParent.mealInfo;
                    }
                })
            },
        }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
    .iui-block-title {
        /*color: #000;*/
        font-weight: 700;
    }

    .item {
        color: #666;
        h5 {
            color: inherit;
            font-weight: 700;
        }
        p {
            color: inherit;
        }
    }
</style>
