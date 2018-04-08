<template>
    <div class="mt-container">
        <router-link v-for="item in menu" class="link-block" :class="[item.bg]" :to="item.route_to">
            <h5>- {{item.title}} -</h5>
        </router-link>
    </div>
</template>
<script>
    export default{
        created() {
            if (this.$route.query.title) {
                document.title = this.$route.query.title;
            }
        },
        data() {
            return {
                menu: [{
                    bg: 'culture',
                    title: '当地文化习俗',
                    route_to: {name: 'home_page', query: {page: 'infoCulture', mobile: 1}}
                }, {
                    bg: 'trip',
                    title: '中国公民旅游文明行为公约',
                    route_to: {name: 'home_page', query: {page: 'infoTrip', mobile: 1}}
                }, {
                    bg: 'flight',
                    title: '乘坐飞机注意事项',
                    route_to: {name: 'home_page', query: {page: 'infoFlight', mobile: 1}}
                }, {
                    bg: 'dinner',
                    title: '用餐礼仪（自助餐/西餐）',
                    route_to: {name: 'home_page', query: {page: 'infoDinner', mobile: 1}}
                }]
            }
        },
        mounted() {
            this.$store.commit('SPIN');
        }
    }
</script>
<style lang="less" scoped>
    @import "../assets/style.less";
    .link-block {
        display: block;
        margin-bottom: 10px;
        padding-top: 40%;
        position: relative;
        color: #fff !important;
        font-weight:bold;
        background-color: #666;
        background-position: center;
        background-size:cover;
        background-repeat: no-repeat;
        h5 {
            position:absolute;
            top:50%;
            left:0;
            right:0;
            transform: translate(0, -50%);
            text-align: center;
            font-size: 17px;
            margin:0;
        }
        &.culture {
            background-image: url('../assets/bg_clt.png');
        }
        &.trip {
            background-image: url('../assets/bg_trip.png');
        }
        &.flight {
            background-image: url('../assets/bg_fl.png');
        }
        &.dinner {
            background-image: url('../assets/bg_dnn.png');
        }
    }
</style>
