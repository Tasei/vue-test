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
                <div class="item">
                    <span class="key">房间号（Room No.）：</span>
                    <span class="value">{{hotel.room}}</span>
                </div>
                <div class="item" style="padding-bottom: 0">
                    <span class="key">答谢晚宴桌号（Banquet Table No.）：</span>
                    <!--<span class="value">{{hotel.dinner}}</span>-->
                    <a :href="seatImgbig"><img :src="seatImg" alt=""></a>
                </div>
            </div>
            <div class="item-wrapper">
                <div class="title"><span>用餐安排</span><span class="en">Dining</span></div>
                <div class="info-item" v-for="item in list" :key="item.id">
                    <div class="key">{{item.label.indexOf('用餐凭证') > -1 ? '用餐凭证（Meal Voucher）' : item.label}}：</div>
                    <span class="value" v-for="item in item.value.split('|')">{{item}}</span>
                </div>
            </div>
            <div class="special session item-wrapper" v-if="session.length">
                <div class="title"><span>特别提醒</span><span class="en">Branch Sessions</span></div>
                 <div class="info-item" v-for="item in session" :key="item.id">
                    <div style="color: #8a1529; margin-bottom: 10px">{{item.name}}</div>
                     <div style="color: #8a1529; margin-bottom: 10px" v-if="wulingEnName != ''">{{wulingEnName}}</div>
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
                <div class="title"><span>会务组联系人</span><span class="en">Contact of Conference Committee</span></div>
                <div class="info-item" v-for="item in contactList">
                    <span class="key">{{item.position}}</span>
                    <span class="key">{{item.position_en}}</span>
                    <a class="value" :href="'tel:'+item.tel">{{item.name}}：{{item.tel}}</a>
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
                seatImgbig:require('../images/BanquetTable.jpg'),
                wulingEnName:'',
                contactList:[
                    {
                        position:'会务总体协调',
                        position_en:'Conference Coordination',
                        name:'顾 雁',
                        tel:'18289743366'
                    },
                    {
                        position:'国际会议中心酒店总协调',
                        position_en:'International Conference Center Hotel Coordination',
                        name:'欧毓娇',
                        tel:'18876002121'
                    },
                    {
                        position:'润丰吉祥温德姆至尊酒店',
                        position_en:'Wyndham Grand Xiamen',
                        name:'曾湘桃',
                        tel:'13876399712'
                    },
                    {
                        position:'佰翔五通酒店总协调',
                        position_en:'Wutong Fliport Hotel, Xiamen',
                        name:'黄云杏',
                        tel:'13379930328'
                    },
                    {
                        position:'会议交通协调',
                        position_en:'Transportation Coordination',
                        name:'张力强',
                        tel:'13876012298'
                    },
                    {
                        position:'会议用餐协调',
                        position_en:'Dining Coordination',
                        name:'余 洋',
                        tel:'13637543880'
                    },
                    {
                        position:'安全联系人',
                        position_en:'Safety Contact',
                        name:'党月明',
                        tel:'13178948943'
                    },
                ]
            }
        },
        created() {
            this.getList()
            this.wulingEnName = this.meeting.websettings.wulingEnName;
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
                        if (item.label.indexOf('宝骏530案例分享') !== -1) {
                            if (item.value) {
                                const list = item.value.split('|')
                                const data = {
                                    name: item.label,
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
