<template>
    <div>
        <div class="no-hotel" v-if="!hotelInfo">
            <span class="fa fa-info-circle fa-5 text-default"></span>
            <p style="margin-top: 20px;">您没有预定酒店信息</p>
        </div>

        <div class="fd-hotel" v-else>
            <div v-if="hotelInfo">
                <div class="hotel-banner" v-if="hotelInfo.cover">
                    <img :src="hotelInfo.cover.url+'/w750'"/>
                </div>
                <ul class="list-group hotel-contact">
                    <li class="list-group-item hotel-name">{{hotelInfo.name}}</li>
                    <li class="list-group-item" v-if="hotelInfo.phone">
                        <a :href="'tel:'+hotelInfo.phone">
                            <i class="fa fa-phone"></i>Tel: {{hotelInfo.phone}}
                        <i class="fa fa-angle-right arrow-right"></i>
                        </a>
                    </li>
                    <li class="list-group-item" v-if="hotelInfo.address">
                        <a
                            :href="'http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D'+ hotelInfo.address +' '+hotelInfo.name">
                            <i class="fa fa-map-marker"></i>{{hotelInfo.address}}
                    <i class="fa fa-angle-right arrow-right"></i>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="hotel-info hotel-introduce"
                 v-if="hotelInfo && hotelInfo.introduce">
                <h5 class="hotel-title"><i class="fa fa-caret-right fa-lg caret-right" aria-hidden="true"></i>酒店简介</h5>
                <div class="hotel-introduce-content" v-html="hotelInfo.introduce"></div>
            </div>


            <div class="hotel-info" v-if="detail && detail.hotel_details">
                <h5 class="hotel-title"><i class="fa fa-caret-right fa-lg caret-right" aria-hidden="true"></i>预订信息</h5>
                <table class="table table-detail">
                    <tbody>
                    <tr>
                        <td>入住日期</td>
                        <td>{{detail.hotel_details.start_date}}</td>
                    </tr>
                    <tr>
                        <td>离店日期</td>
                        <td>{{detail.hotel_details.end_date}}</td>
                    </tr>
                    <tr>
                        <td>酒店名称</td>
                        <!-- <td>{{detail.hotel_details.hotel_name}}</td> -->
                        <td>
                            <template v-if="hotelInfo">{{hotelInfo.name}}</template>
                        </td>
                    </tr>
                    <tr>
                        <td>酒店房型</td>
                        <td>
                            {{detail.hotel_details.type_name}}
                        <span v-if="detail.hotel_details.is_share" class="label label-shareable">拼房</span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div class="hotel-info" v-if="isPrivateShare">
                <h5 class="hotel-title"><i class="fa fa-caret-right fa-lg caret-right" aria-hidden="true"></i>同住人信息</h5>
                <table class="table table-detail">
                    <tbody>
                    <tr>
                        <td>姓名</td>
                        <td>{{detail.hotel_details.room_mate.name}}</td>
                    </tr>
                    <tr>
                        <td>手机号码</td>
                        <td>{{detail.hotel_details.room_mate.mobile}}</td>
                    </tr>
                    <tr>
                        <td>电子邮箱</td>
                        <td>{{detail.hotel_details.room_mate.email}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <btn-home></btn-home>
    </div>
</template>
<script>
    import btnHome from "../components/btn_home.vue"
    export default{
        components: {
            btnHome
        },
        data() {
            return {
                detail: null,
                hotelInfo: null,
            }
        },
        created() {
            this.getDetail()
        },
        computed: {
            isPrivateShare() {
                if (this.detail && this.detail.hotel_details) {
                    return this.detail.hotel_details.is_share && this.detail.hotel_details.private && this.detail.hotel_details.room_mate
                }
                return false
            },
        },
        methods: {
            getDetail () {
                let self = this

                this.$http.post('order/detail').then((response) => {
                    let ret = response.body;
                    if (ret.err === 0) {
                        self.detail = ret.res;

                        if (!self.detail || !self.detail.hotel_details) {
                            this.$store.commit('SPIN', false);
                            return
                        }

                        this.$http.post('register/getFieldByLabel', {
                            form_name: 'hotel',
                            field_label: 'name',
                        }).then((response) => {
                            let hotelId = self.detail.hotel_details.hotel_id;

                            if (response.body.err === 0) {
                                let name = response.body.res.value;

                                if (name === '武汉光谷凯越') {
                                    hotelId = 45
                                } else if (name === '武汉洲际酒店') {
                                    hotelId = 43
                                }
                            }

                            self.$http.post('hotel/getById', {
                                id: hotelId
                            }).then((response) => {
                                let ret = response.body;
                                if (ret.err === 0) {
                                    self.hotelInfo = ret.res;
                                    self.$store.commit('SPIN', false)
                                }
                            })

                        })

                    }
                })
            },
        }
    }
</script>
<style lang="less" scoped>
    .no-hotel {
        .fa-5 {
            font-size: 5em;
        }
        text-align: center;
        margin: 80px 20px 0;
    }

    table.table-detail {
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 5px;
        margin-right: 5px;
        font-size: 14px;
        td {
            border-bottom: 0 none;
            padding: 5px 0 !important;
            &:first-child {
                color: #777;
                width: 150px;
            }
        }
    }

    .fd-hotel {
        background: #f3f3f3;

        .hotel-banner {
            img {
                width: 100%;
                height: auto;
            }
        }

        .hotel-contact {
            margin: 0;
            margin-bottom: 0;
            padding: 0;
            li {
                margin: 0;
                padding: 0;
                border: 0 none;
                padding: 15px 0 15px 15px;
                line-height: 20px;
                vertical-align: middle;
                a {
                    display: block;
                    color: #333;
                    font-size: 14px;
                    .fa {
                        font-size: 16px;
                        color: rgba(0, 84, 156, .5);
                        padding-right: 6px;
                    }
                    .arrow-right {
                        float: right;
                        padding-right: 15px;
                        color: #ccc;
                        font-size: 18px;
                    }

                }
            }
            .hotel-name {
                color: #333;
                font-size: 22px;
                span {
                    font-size: 16px;
                }
            }
            li:first-child {
                padding: 19px 0 19px 15px;
            }
            li:after {
                content: '';
                position: absolute;
                left: 15px;
                bottom: 0;
                right: 0;
                top: auto;
                height: 1px;
                width: 100%;
                background-color: #ddd;
                display: block;
                z-index: 15;
                -webkit-transform-origin: 50% 100%;
                transform-origin: 50% 100%
            }
        }
        .hotel-info {
            position: relative;
            padding: 15px 15px;
            background: #fff;
            margin-top: 10px;

            &:last-child {
                margin-bottom: 20px;
            }

            .hotel-title {
                color: #333;
                font-size: 17px;
                .caret-right {
                    padding-right: 7px;
                    color: #00549C;
                    font-size: 1em;
                    vertical-align: -5%;
                }
            }
            p {
                color: rgba(102, 102, 102, 0.98);
                line-height: 20px;
                font-size: 14px;
                padding-bottom: 10px;
            }
            a.more {
                padding: 20px;
                margin: auto;
                display: block;
                font-size: 15px;
                text-align: center;
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                background: transparent;
                background: linear-gradient(top, transparent 0%, rgba(255, 255, 255, 0.7) 40%, rgba(255, 255, 255, 1) 100%);
                background: -webkit-linear-gradient(top, transparent 0%, rgba(255, 255, 255, 0.7) 40%, rgba(255, 255, 255, 1) 100%);
            }
        }
    }

    @media only screen and (-webkit-min-device-pixel-ratio: 2) {
        li:after {
            -webkit-transform: scaleY(.5);
            transform: scaleY(.5)
        }
    }

</style>
