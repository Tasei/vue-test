<template>
   <div class="assistant">
        <div class="qr-wrapper" id="stamp-screen">
            <div class="my-qrcode">
                <div class="my-qrcode-image-wrapper">
                    <img class="my-qrcode-image" src="/api/meeting/showQrcode" >
                </div>
                <p class="name">{{fucker.value}}</p>
                <p class="company">{{company.value}}</p>
            </div>
        </div>
        <div class="wrapper">
            <div class="item-wrapper">
                <div class="title"><span>酒店信息</span><span class="en">Hotel</span></div>
                <div class="item">
                    <span class="key">入住酒店（Hotel）：</span>
                    <span class="value" v-for="item in hotel.name.split('|')">{{item}}</span>
                </div>
                <!--<div class="item">-->
                    <!--<span class="key">房间号（Room No.）：</span>-->
                    <!--<span class="value">{{hotel.room}}</span>-->
                <!--</div>-->
                <div class="item" style="padding-bottom: 0">
                    <span class="key">答谢晚宴桌号（Banquet Table No.）：<span class="dinner-value">{{hotel.dinner}}</span></span>
                    <!--<span class="value">{{hotel.dinner}}</span>-->
                    <a :href="seatImgBig"><img :src="seatImg" alt=""></a>
                </div>
            </div>
            <div class="item-wrapper">
                <div class="title"><span>用餐安排</span><span class="en">Dining</span></div>
                <div class="info-item" v-for="item in list" :key="item.id">
                    <div class="key">{{item.label.indexOf('用餐凭证') > -1 ? '用餐凭证（Meal Voucher）' : item.label}}：</div>
                    <span class="value" v-for="item in item.value.split('|')">{{item}}</span>
                </div>
            </div>
            <div class="special item-wrapper" v-if="hotel.name.indexOf('温德姆') !== -1">
                <div class="title"><span>特别提醒</span><span class="en">Special Reminders</span></div>

                <div class="item">
                    <span><a href="http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D%E5%8E%A6%E9%97%A8%E6%B6%A6%E4%B8%B0%E5%90%89%E7%A5%A5%E6%B8%A9%E5%BE%B7%E5%A7%86%E8%87%B3%E5%B0%8A%E9%85%92%E5%BA%97">厦门润丰吉祥温德姆至尊酒店</a></span><br/>
                    <a>Wyndham Grand Xiamen</a>
                </div>

                <div class="item">
                    <span class="key">地址（Add）：</span>
                    <span class="value">厦门市思明区领事馆路19号</span>
                    <span class="value">Add: No.19 Lingshiguan Road, Siming District, Xiamen</span>
                </div>
                <div class="item" style="padding-bottom: 0">
                    <span class="key">电话（Tel）：</span>
                    <span class="value">0592-3309999</span>
                </div>

            </div>
            <div class="special session item-wrapper" v-if="session.length">
                <div class="title"><span>分会信息</span><span class="en">Branch Sessions</span></div>
                 <div class="info-item" v-for="item in session" :key="item.id">
                    <div style="color: #8a1529;">{{item.name}}</div>
                    <div style="color: #8a1529; margin-bottom: 10px">{{item.name_en}}</div>
                    <div class="key">分会地点（Location of parallel session）</div>
                    <div class="value">{{item.address}}</div>
                     <div class="value">{{item.address_en}}</div>
                    <div class="line" style="margin-top: 10px"></div>
                    <div class="key">分会时间（Time of parallel session）</div>
                    <div class="value">{{item.date}}</div>
                     <div class="value">{{item.date_en}}</div>
                </div>
            </div>
            <div class="item-wrapper">
                <div class="title"><span>各组联系人</span><span class="en">Contact of Conference Committee</span></div>
                <div class="info-item">
                    <a :href="img"><img :src="img" alt=""></a>
                </div>

            </div>

            <i-button :on-ok="logout" v-if="user" class="btn btn-primary btn-outline m-logout-btn text-center">
                <p class="switchbtn">切换用户</p>
                <p class="switchbtn">Switch User</p>
            </i-button>
        </div>
   </div>
</template>

<script>

    import iButton from "iButton"

    export default {
        name: 'asistant',
        components: {
            iButton,
        },
        data() {
            return {
                list: [],
                company: '',
                fucker: '',
                session: [],
                hotel: {
                    name: '',
                    room: '',
                    dinner: ''
                },
                img: require('../images/hwz_pic.jpg'),
                seatImg:require('../images/BanquetTable_small.jpg'),
                seatImgBig:require('../images/BanquetTable.jpg')
            }
        },
        created() {
            this.getList()
        },
        mounted() {
            document.title = '我的秘书'
            this.$store.commit('SPIN', false)
        },
        methods: {
            async getList() {
                let { data } = await this.$http.post('meeting/getFormValue', {
                    meeting_id: this.meeting.id,
                    code: this.user.code
                })

                if (data.err === 0 && data.res !== null) {

                    for(let item of data.res.list) {
                        if (item.label.indexOf('姓名') !== -1) {
                            this.fucker = item;
                        }
                        if (item.label.indexOf('公司名') !== -1) {
                            this.company = item;
                        }
                        if (item.label.indexOf('房号') !== -1) {
                            this.hotel.room = item.value
                        }
                        if (item.label.indexOf('答谢晚宴桌号') !== -1) {
                            this.hotel.dinner = item.value
                        }
                        if (item.label.indexOf('入住酒店') !== -1) {
                            this.hotel.name = item.value
                        }
                        if (item.label.indexOf('日') !== -1){

                            this.list.push(item)
                        }
                        if (item.label.indexOf('零部件多式联运推进交流会') !== -1 || item.label.indexOf('“跨十工程”动员会') !== -1) {
                            if (item.value && item.value.indexOf('参会')) {
                                const list = item.value.split('|');
                                const confrenceName = item.label.split('|')
                                const data = {
                                    name: confrenceName[0],
                                    name_en:confrenceName[1],
                                    date: list[0],
                                    date_en: list[1],
                                    address: list[2],
                                    address_en: list[3]
                                }
                                this.session.push(data)
                            }
                        }
                    }
                }
            },
            logout(e) {
                let self = this
                this.$http.post('meeting/logout')
                    .then(function(response) {
                        let ret = response.body
                        if (ret.err == 0) {
                            self.$store.commit('USER', null)
                            this.$cookie.delete('WX_AUTH')

                            this.$router.push({name: "portal"})
                            return
                        }
                    })
                    .finally(function(){
                        e.loading = false
                    })
            },
        }
    }
</script>

<style lang="less" scoped>
.dinner-value{
    color: #333;
}
    .switchbtn {
        font-size: 10px;
        margin: 0;
    }
    .btn {
        display: block;
        padding: 5px 0;
        width: 65%;
        margin: 0 auto;
    }
    .wrapper {
        border-radius: 3px;
        text-align: left;
        margin-top: 30px;
        .title {
            background: #8a1529;
            font-size: 14px;
            color: #fff;
            margin: 10px 0;
            padding: 5px 20px
        }
        .item {
            padding-bottom: 10px;
            margin: 10px 20px;
            border-bottom: 1px solid #ddd;
            &:last-child {
                border: 0 none;
            }
        }
        .key {
            color: #8a1529;
            display: block;
            margin-bottom: 5px;
        }
        .value {
            display: block;
            color: #333
        }
        .btn {
            margin-top: 50px;
        }

    }
    .info-item {
        padding: 10px 0;
        margin: 10px 20px;

        &:nth-child(odd) {
            border-bottom: 1px solid #ddd;
            padding-top: 0;
            margin-top: 0
        }
        &:nth-child(even) {
            padding-bottom: 0;
            // margin-bottom: 10
            margin-top: 0;
            padding-top: 0
        }
        &:last-child {
            border: 0 none
        }
    }
    .assistant {
        padding: 30px 0;
    }
    .qr-wrapper{
        background: #fff;
        padding: 0 85px;
        position: relative;
    }
    .my-qrcode{
        background: #fff;
        opacity: 0.94;
        border-radius: 2px;
        text-align: center;

        .my-qrcode-image-wrapper{
            padding: 0 20px;
        }
        .my-qrcode-image{
            border: 1px solid #ccc;
            padding: 0;
            margin: 30px auto;
        }
        .name {
            font-size: 16px;
            font-weight: bold;
            color: #333;
            margin: 0;
        }

    }
    .en {
        color: #fff;
        margin-left: 5px;
        font-size: 14px;
    }
    .special
        .key {
            color: #999;
        }
    .session {
        .info-item {
            border-bottom: 1px solid #ddd;
            padding-bottom: 10px;
            &:last-child {
                border: 0 none
            }
        }
    }
</style>
