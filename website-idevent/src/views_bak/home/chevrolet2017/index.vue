<template>
    <div>
        <div class="fd-index" v-if="user">
            <div>
                <img :src="banner" class="img-responsive"/>
            </div>
            <ul class="list-group index-list">
                <li class="list-group-item">
                    <i class="index-icon index-icon-calendar"></i>
                    <router-link :to="{name:'home_schedule'}">
                        <h5>日程安排</h5>
                        <p class="list-details">查看活动具体日程安排</p>
                    </router-link>
                </li>
                <!--<li class="list-group-item">-->
                <!--<i class="index-icon index-icon-venue"></i>-->
                <!--<router-link :to="{name:'home_venue'}">-->
                <!--<h5>会场介绍</h5>-->
                <!--<p class="list-details">查看国家会展中心NH馆信息</p>-->
                <!--</router-link>-->
                <!--</li>-->
                <li class="list-group-item" v-if="list.length==1">
                    <i class="index-icon index-icon-hotel"></i>
                    <router-link :to="{name:'home_hotel_detail', query: {hotel_id: list[0].id}}">
                        <h5>酒店介绍</h5>
                        <p class="list-details">查看酒店信息</p>
                    </router-link>
                </li>
                <li v-else class="list-group-item">
                    <i class="index-icon index-icon-hotel"></i>
                    <router-link :to="{name:'home_hotel'}">
                        <h5>酒店介绍</h5>
                        <p class="list-details">查看酒店信息</p>
                    </router-link>
                </li>

                <li class="list-group-item">
                    <i class="index-icon index-icon-reception"></i>
                    <router-link :to="{name:'home_reception'}">
                        <h5>接送机安排</h5>
                        <p class="list-details">查看接送机/站信息</p>
                    </router-link>
                </li>
                <li class="list-group-item">
                    <i class="index-icon index-icon-question"></i>
                    <router-link :to="{name:'home_common'}">
                        <h5>常见问题</h5>
                        <p class="list-details">报名注册如遇问题请看这里</p>
                    </router-link>
                </li>
                <li class="list-group-item">
                    <i class="index-icon index-icon-contact"></i>
                    <router-link :to="{name:'home_contact'}">
                        <h5>联系我们</h5>
                        <p class="list-details">如需帮助，请联系我们</p>
                    </router-link>
                </li>
            </ul>

        </div>

        <bottom-bar></bottom-bar>
    </div>
</template>
<script>
    import iButton from "iButton"
    import {Toast} from "mint-ui"
    import BottomBar from "./components/bottom_bar"
    export default{
        data() {
            return {
                banner: require('../../../assets/images/mobile/chevrolet/index_banner.jpg'),
                list: []
            }
        },
        computed: {
            user() {
                return this.$store.state.user
            }
        },
        created() {
            this.getHotelList()
        },
        components: {
            iButton, BottomBar,
        },
        methods: {
            getHotelList() {
                let self = this
                this.$http.post('hotel/showListByGroup').then((response) => {
                    if (response.body.err == 0) {
                        self.list = response.body.res.list
                    }
                }).then(() => {
                    this.$store.commit('SPIN')
                })
            }
        }
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    .fd-index {
        background-color: #ddd;
        min-height: 100vh;
        overflow: hidden;
        position: relative;

        .index-list {
            margin: 5px 5px 0 5px;
            background: #fff;
            border-radius: 4px;
            margin-bottom: 55px;
            li {
                padding: 12px 10px 12px 64px;
                border: 0;
                overflow: hidden;
                background-repeat: no-repeat;
                background-position: center;
                background-size: 26px 21px;
                h5 {
                    color: #333;
                    font-size: 17px;
                    line-height: 17px;
                    font-weight: bold;
                    margin: 0;
                    margin-bottom: 7px;
                }
                p {
                    margin: 0;
                }
                .list-details {
                    color: #999;
                    font-size: 12px;
                    line-height: 12px;
                }

                &:after {
                    content: '';
                    position: absolute;
                    left: 62px;
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

                &:first-child {
                    border-top-left-radius: 2px;
                    border-top-right-radius: 2px;
                }
                &:last-child {
                    border-bottom-left-radius: 2px;
                    border-bottom-right-radius: 2px;
                    &:after {
                        height: 0 !important;
                    }
                }

                .index-icon {
                    position: absolute;
                    display: inline-block;
                    left: 20px;
                    width: 27px;
                    height: 27px;
                    top: 12px;
                    background-size: 100% auto;

                    &.index-icon-interact {
                        background-image: url('../../../assets/images/mobile/home/menu/interact.png');
                    }
                    &.index-icon-hotel {
                        background-image: url('../../../assets/images/mobile/home/menu/hotel.png');
                    }
                    &.index-icon-iphoto {
                        background-image: url('../../../assets/images/mobile/home/menu/iphoto.png');
                    }
                    &.index-icon-calendar {
                        background-image: url('../../../assets/images/mobile/home/menu/calendar.png');
                    }
                    &.index-icon-question {
                        background-image: url('../../../assets/images/mobile/home/menu/question.png');
                    }
                    &.index-icon-contact {
                        background-image: url('../../../assets/images/mobile/home/menu/contact.png');
                    }
                    &.index-icon-venue {
                        background-image: url('../../../assets/images/mobile/home/menu/venue.png');
                    }
                    &.index-icon-reception {
                        background-image: url('../../../assets/images/mobile/home/menu/shuttle.png');
                    }
                }

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
