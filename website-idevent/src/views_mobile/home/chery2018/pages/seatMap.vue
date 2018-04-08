<template>
    <div v-if="!isCJLR">
        <a :href="seatimg" class="bg" :style="'background-image:url('+seatimg+')'"></a>
        <div class="well">
            <p>{{$t('dinnerTable')}}：<span>{{dinnerTable}}</span></p>
        </div>
    </div>
    <div v-else>
        <a v-for="item in cjlrLinkImgs" :href="item"><img :src="item" alt=""></a>
    </div>
</template>
<style scoped lang="less" rel="stylesheet/less">
    .bg {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .well{
        position: absolute;
        bottom:25px;
        left:0;
        width:100%;
        text-align: center;
        p{
            color: #fff;
            font-size: 20px;
            font-weight: normal;
            span{
                font-weight: bold;
            }
        }
    }
</style>
<script>
    export default{
        data() {
            return {
                dinnerTable: "",
                seatimg:require('../images/seat0.jpg'),
                isCJLR:false,
                cjlrLinkImgs:[],
            }
        },
        locales:{
            en: {
                dinnerTable: "Your Dinner Table"
            },
            zh: {
                dinnerTable: "您的晚宴桌号"
            }
        },
        created() {
            this.$store.commit('SPIN')
            this.getSeats();
            this.getList();
            this.isCJLRFn();
        },
        methods: {
            getSeats(){
                let self = this
                this.$http.post('custom/chery/getSeats').then((response) => {
                    let ret = response.body
                    if (ret.err == 0) {
                        self.dinnerTable = ret.res.dinnerTable
                    }
                }).then(() => {
                    this.$store.commit('SPIN')
                })
            },
            async getList() {
                let { data } = await this.$http.post('meeting/getFormValue', {
                    meeting_id: this.meeting.id,
                    code: this.user.code
                })

                if (data.err === 0 && data.res !== null) {

                    for(let item of data.res.list) {
                        if (item.label.indexOf('座位号') !== -1) {
                            this.dinnerTable = item.value;
                        }
                    }
                }
            },
            isCJLRFn() {
                let groupName = this.user.group.name;
                let cjlrLink = this.meeting.websettings.cjlrLink;
                let cjlrLinkImgs = cjlrLink.split('|')
                if(groupName == "内部员工"){
                    this.isCJLR = true;
                    this.cjlrLinkImgs = cjlrLinkImgs;
                }
            }
        }
    }
</script>
