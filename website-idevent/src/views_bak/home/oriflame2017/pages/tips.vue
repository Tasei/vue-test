<template>
    <div class="mt-container">
        <router-link v-for="item in menu" class="link-block" :class="[item.bg]" :to="item.route_to">
            <h5>- {{item.title}} -</h5>
        </router-link>
    </div>
</template>
<script>
    export default {
        created() {
            if (this.$route.query.title) {
                document.title = this.$route.query.title;
            }
        },
        data() {
            return {
                menu: [
                    {
                        bg: 'import',
                        title: '重要提醒',
                        route_to: {name: 'home_page', query: {page: 'tipsImport', mobile: 1, title: '重要提醒'}}
                    }, {
                        bg: 'weather',
                        title: '气候与着装',
                        route_to: {name: 'home_page', query: {page: 'tipsWeather', mobile: 1, title: '气候与着装'}}
                    }, {
                        bg: 'timezone',
                        title: '时差',
                        route_to: {name: 'home_page', query: {page: 'tipsTimezone', mobile: 1, title: '时差'}}
                    }, {
                        bg: 'socket',
                        title: '插座/电压',
                        route_to: {name: 'home_page', query: {page: 'tipsSocket', mobile: 1, title: '插座/电压'}}
                    }, {
                        bg: 'comm',
                        title: '通信',
                        route_to: {name: 'home_page', query: {page: 'tipsComm', mobile: 1, title: '通信'}}
                    }, {
                        bg: 'shopping',
                        title: '购物与退税',
                        route_to: {name: 'home_page', query: {page: 'tipsShopping', mobile: 1, title: '购物与退税'}}
                    }, {
                        bg: 'insurance',
                        title: '保险',
                        route_to: {name: 'home_page', query: {page: 'tipsInsurance', mobile: 1, title: '保险'}}
                    }, {
                        bg: 'exchange',
                        title: '货币',
                        route_to: {name: 'home_page', query: {page: 'tipsExchange', mobile: 1, title: '货币'}}
                    }, {
                        bg: 'emergency',
                        title: '紧急求助',
                        route_to: {name: 'home_page', query: {page: 'tipsEmergency', mobile: 1, title: '紧急求助'}}
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
        font-weight: bold;
        background-color: #666;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        h5 {
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            transform: translate(0, -50%);
            text-align: center;
            font-size: 17px;
            margin: 0;
        }
        &.import {
            background-image: url('../assets/bg_import.png');
        }
        &.weather {
            background-image: url('../assets/bg_wth.png');
        }
        &.timezone {
            background-image: url('../assets/bg_tz.png');
        }
        &.socket {
            background-image: url('../assets/bg_sck.png');
        }
        &.comm {
            background-image: url('../assets/bg_comm.png');
        }
        &.shopping {
            background-image: url('../assets/bg_shp.png');
        }
        &.insurance {
            background-image: url('../assets/bg_ins.png');
        }
        &.exchange {
            background-image: url('../assets/bg_exc.png');
        }
        &.emergency {
            background-image: url('../assets/bg_emgc.png');
        }
    }
</style>
