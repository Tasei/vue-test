<template>
    <div class="mt-container">
        <div class="city-title">
            <h3 v-for="c in titleCities">{{c.name}}</h3>
        </div>
        <mt-swipe class="weather" :auto="0" @change="cityChange">
            <mt-swipe-item v-for="city in list">
                <div class="box" :style="{backgroundImage: 'url('+city.pic+')'}">
                    <div class="inner">
                        <div class="main">
                            <div class="current">
                                <div class="t">{{city.current.temperature}}°C</div>
                                <div class="w">
                                    <i class="wIcon" :style="{backgroundImage: 'url('+city.current.weather_show.icon+')'}"></i>
                                    <span>{{city.current.weather_show.name}}</span>
                                    <span class="a">空气质量：{{city.current.air}}</span>
                                </div>
                            </div>
                            <ul class="list">
                                <li v-for="date in city.dates">
                                    <div>{{date.name}} {{date.date}}</div>
                                    <div><i class="wIcon" :style="{backgroundImage: 'url('+date.weather_show.icon+')'}"></i>{{date.weather_show.name}}</div>
                                    <div>{{date.temperature}}°C</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                list: [],
                current: 0
            }
        },
        created() {
            if (this.$route.query.title) {
                document.title = this.$route.query.title;
            }
        },
        mounted() {
            this.getList();
        },
        computed: {
            titleCities() {
                let cities = [];
                if (this.list.length) {
                    let prev = this.current > 0 ? this.current - 1 : this.list.length -1;
                    let next = this.current < this.list.length -1 ? this.current + 1 : 0;
                    cities.push(this.list[prev]);
                    cities.push(this.list[this.current]);
                    cities.push(this.list[next]);
                }
                return cities;
            }
        },
        methods: {
            getList(){
                let self = this
                this.$http.post('custom/oriflame/getWeather').then((response) => {
                    let ret = response.body;
                    if (ret.err == 0) {
                        self.list = ret.res.list;
                    }
                }).then(() => {
                    this.$store.commit('SPIN')
                })
            },
            cityChange(index) {
                this.current = index;
            }
        }
    }
</script>
<style lang="less" scoped>
    @import "../assets/style.less";
    .mt-container {
        padding: 0;
    }
    .city-title {
        position: fixed;
        top: 18px;
        left: 0;
        right: 0;
        z-index: 100;
        color: #fff;
        display: flex;
        justify-content: center;
        h3 {
            flex: 1;
            margin: 0 10px;
            font-size:20px;
            text-align: center;
            &:first-child, &:last-child{
                flex-grow: 0.8;
                font-size: 15px;
                opacity:0.5;
                margin-top: 4px;
            }
            &:first-child {
                text-align: right;
            }
            &:last-child {
                 text-align: left;
            }
        }
    }
    .weather {
        height: 100vh;
        .box {
            width: 100%;
            height: 100%;
            background-size: cover;
            position: relative;
            &::before {
                content: '';
                display:block;
                height: 78px;
                pointer-events: none;
                background-image: -webkit-gradient(linear, left 0%, left 100%, from(rgba(0,0,0,0.4)), to(rgba(0,0,0,0)));
                background-image: -webkit-linear-gradient(top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%);
                background-image: -moz-linear-gradient(top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%);
                background-image: linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%);
            }
            &::after {
                content: '';
                display:block;
                position: absolute;
                bottom: 0;
                height: 20vh;
                left:0;
                right:0;
                pointer-events: none;
                background-image: -webkit-gradient(linear, left 100%, left 0%, from(rgba(0,0,0,0.6)), to(rgba(0,0,0,0)));
                background-image: -webkit-linear-gradient(bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%);
                background-image: -moz-linear-gradient(bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%);
                background-image: linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%);
            }
            .inner{
                position:absolute;
                top: 0;
                bottom:0;
                left: 0;
                right: 0;
                overflow-y: scroll;
                .main {
                    padding: 56vh 20px 40px 20px;
                    background-image: -webkit-gradient(linear, left 100%, left 0%, from(rgba(0,0,0,0.8)), to(rgba(0,0,0,0)));
                    background-image: -webkit-linear-gradient(bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
                    background-image: -moz-linear-gradient(bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
                    background-image: linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
                    min-height: 100vh;
                    color: #fff;
                }
            }
        }
        .current {
            .t {
                font-family: 'PingFangSC-Ultralight', "Microsoft YaHei", "\5FAE\8F6F\96C5\9ED1", Arial, sans-serif;
                font-size: 60px;
                font-weight: 100;
                letter-spacing: -5px;
                line-height: 60px;
            }
            .w {
                font-size:17px;
                line-height: 50px;
                .a {
                    float:right;
                }
                .wIcon {
                    width: 24px;
                    height: 24px;
                    transform: translate(0, 5px);
                }
            }
        }
        .list {
            border-top: 1px solid rgba(255,255,255, 0.2);
            padding: 20px 0 0 0;
            font-weight: 100;
            li {
                font-size: 15px;
                line-height: 200%;
                display: flex;
                div {
                    flex: 1;
                    text-align: left;
                    &:first-child{
                        flex-grow: 1.2;
                        margin-right: 10px;
                    }
                    &:last-child{
                        flex-grow: 0.8;
                        text-align: right;
                    }
                }
            }
        }
        .wIcon {
            display: inline-block;
            width: 1em;
            height: 1em;
            background-size: cover;
            background-repeat: no-repeat;
            transform: translate(0, 0.1em);
            margin-right: 0.2em;
        }
    }
</style>
<style lang="less">
    .weather {
        .mint-swipe-indicators {
            top: 42px;
            bottom: auto;
        }
        .mint-swipe-indicator {
            width: 6px;
            height: 6px;
            opacity: 0.4;
            background: #fff;
            &.is-active {
                opacity:1;
             }
        }
    }
</style>
