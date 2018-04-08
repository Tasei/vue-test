<template>
    <div>
        <ul class="list">
            <li v-for="p of list">
                <router-link :to="{name: 'home_hotel_detail', query:{hotel_id: p.id}}">
                    <div class="img plane-1">
                        <img v-if="p.cover" :src="p.cover.url + '/b200'" />
                    </div>
                    <div class="content">
                        <h3 class="text-dark font-bold">{{p.name}}</h3>
                        <div class="hotel-stars">
                            <span v-for="n in parseInt(p.type)" class="fa fa-star"></span>
                        </div>
                        <p>{{p.address}}</p>
                    </div>
                </router-link>
            </li>
        </ul>
        <!--<div class="location">-->
            <!--<h5>酒店位置分布图</h5>-->
        <!--</div>-->
        <!--<div class="mainimg">-->
            <!--<a :href="img0">-->
                <!--<img :src="img0" alt="">-->
            <!--</a>-->
        <!--</div>-->
    </div>
</template>
<script>
export default{
    data() {
        return {
            img0:require('../images/hotel.png'),
            list: []
        }
    },
    computed: {
        meeting() {
            return this.$store.state.meeting
        }
    },
    created() {
        this.getList()
    },

    methods: {
        getList() {
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
<style lang="less" scoped>
    @size: 62px;
    ul.list{
        padding: 0;
        li {
            position: relative;
            border-bottom: 1px solid #dddddd;
            min-height: @size;
            padding: 20px;
            > a {
                display: block;
                color: #666;
            }
        }
        .img{
            width: @size;
            height: @size;
            background-color: #d8d8d8;
            float: left;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            background-position: center;
        }
        .content {
            margin-left: @size + 10px;
            min-height: @size;
            h3 {
                font-size: 17px;
                margin: 0 0 8px;
                line-height: 1;
                white-space:nowrap;
                overflow:hidden;
                text-overflow:ellipsis;
            }
            p {
                font-size: 13px;
                margin: 0;
            }

            .hotel-stars{
                color: #fbbf3f;
                margin-bottom:5px;
                min-height: 16px;
                span {
                    margin-right: 2px;
                }
            }
        }
    }
    .location{
        padding-left:20px;
        h5{
            font-weight: bold;
            color: #000;
        }
    }
</style>
