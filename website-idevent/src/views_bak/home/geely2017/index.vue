<template>
<div>
    <div class="fd-index" v-if="user">
        <div>
            <img :src="banner" class="img-responsive" />
        </div>
        <ul class="list-group index-list">
            <li class="list-group-item" v-if="iPhoto_open">
                <i class="index-icon index-icon-iphoto"></i>
                <router-link :to="{name:'iphoto_index'}">
                    <h5>精彩瞬间</h5>
                    <p class="list-details">查看大会精彩照片</p>
                </router-link>
            </li>
            <li class="list-group-item">
                <i class="index-icon index-icon-register"></i>
                <router-link :to="{name:'register_form'}">
                    <h5>我的信息</h5>
                    <p class="list-details">参会信息查看和修改</p>
                </router-link>
            </li>
            <li class="list-group-item">
                <i class="index-icon index-icon-calendar"></i>
                <router-link :to="{name:'home_schedule'}">
                    <h5>活动日程</h5>
                    <p class="list-details">查看活动具体日程安排</p>
                </router-link>
            </li>
            <li class="list-group-item" v-if="hotel_id">
                <i class="index-icon index-icon-hotel"></i>
                <router-link :to="{name:'home_hotel_detail', query: {hotel_id: hotel_id}}">
                    <h5>我的酒店</h5>
                    <p class="list-details">查看入住酒店名称、地址</p>
                </router-link>
            </li>
            <li class="list-group-item">
                <i class="index-icon index-icon-repast"></i>
                <router-link :to="{name:'home_repast'}">
                    <h5>用餐安排</h5>
                    <p class="list-details">展示我的餐厅分配信息</p>
                </router-link>
            </li>

            <li class="list-group-item">
                <i class="index-icon index-icon-seat"></i>
                <router-link :to="{name:'home_page', query:{'page': 'seatMap'}}">
                    <h5>我的座位号</h5>
                    <p class="list-details">查看大会和晚宴座位安排</p>
                </router-link>
            </li>

            <li class="list-group-item">
                <i class="index-icon index-icon-reception"></i>
                <router-link :to="{name:'home_reception'}">
                    <h5>接驳安排</h5>
                    <p class="list-details">展示所有接驳信息</p>
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
            return{
                banner: require('../../../assets/images/mobile/geely/index_banner.png'),
                hotel_id: 0,
                iPhoto_open: false,
            }
        },
        computed: {
            user() {
                return this.$store.state.user
            }
        },
        created() {
            this.getHotelId()
        },
        components:{
            iButton, BottomBar,
        },
        methods: {
            getHotelId() {
                let self = this
                this.$http.post('custom/geely/getHotelId').then((response) => {
                    let ret = response.body
                    if (ret.err == 0) {
                        self.hotel_id = ret.res.hotel_id
                        self.iPhoto_open = ret.res.iPhoto
                    }
                }).then(() => {
                    this.$store.commit('SPIN')
                })
            }
        }
    }
</script>
<style lang="less" scoped>
@import "../../../assets/style/home";


</style>
