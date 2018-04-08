<template>
    <div>
        <img :src="banner" alt="" style="display: block;">
        <div class="page-container">
            <div class="text-block-container">
                <div class="text-content">
                    <div class="list-item">
                        <h1>一、交通</h1>
                        <p>I. Transportation</p>
                        <p class="sub-title">大会为您提供了接机、送机、酒店间穿梭巴士服务；如果您是乘坐飞机以外的交通工具请您自行前往酒店，您可以在【酒店信息】页面内获取您入住酒店的导航信息。</p>
                        <p class="en">
                            The Conference provides you commute service including airport pick-up and drop-off, and shuttle buses between different hotels. If you choose transportation other than air plane, please arrange your own transportation. You can find hotel related information in the 【Hotel 】page.
                        </p>
                        <ol>
                            <li>
                                <h2>接机服务（厦门高崎机场 → 入住酒店）：</h2>
                                <p class="en">Pickup service (Xiamen Gaoqi International Airport → check-in hotel)</p>
                                <div class="items">
                                    <p>接机地点：厦门高崎机场T3/T4航站楼</p>
                                    <p class="en">Area of pickup: Xiamen Gaoqi International Airport T3/T4 Terminal Building</p>
                                    <p>服务时间：3月12日</p>
                                    <p>T3  09:00-00:00（每小时一班）</p>
                                    <p>T4  09:30-23:30（每小时一班）</p>
                                    <p class="en">Service Time:March 12</p>
                                    <p class="en">T3  09:00-00:00   an hour/per</p>
                                    <p class="en">T4  09:30-23:30   an hour/per</p>
                                    <p>行程线路：</p>
                                    <p>厦门高崎机场T3航站楼 →佰翔五通酒店→国际会议中心酒店 →润丰吉祥温德姆至尊酒店</p>
                                    <p>厦门高崎机场T4航站楼 →佰翔五通酒店→国际会议中心酒店 →润丰吉祥温德姆至尊酒店</p>
                                    <p class="en">Traffic route: </p>
                                    <p class="en">Gaoqi International Airport T3 Terminal→ Xiamen Wutong Fliport Hotel→ International Conference Center Hotel→Wyndham Grand Xiamen</p>
                                    <p class="en">Gaoqi International Airport T4 Terminal →Xiamen Wutong Fliport Hotel→ International Conference Center Hotel→Wyndham Grand Xiamen</p>
                                </div>
                            </li>
                            <li>
                                <h2>
                                    穿梭巴士服务（佰翔五通酒店↔国际会议中心酒店）
                                </h2>
                                <p class="en">Shuttle Service (Xiamen Wutong Fliport Hotel ↔ International Conference Center Hotel)</p>
                                <div>
                                    <span>服务时间：3月13日08:15至20:30，详细发车时间见附表</span>
                                    <p class="en">Service time: 08:15-20:30 March 13. See the annexed table for specific departure time.</p>
                                    <a :href="img1url"><img :src="img1" alt=""></a>
                                </div>
                            </li>
                            <li>
                                <h2>
                                    送机服务（入住酒店 → 厦门高崎机场）：
                                </h2>
                                <p>Drop-off service (Hotel → Xiamen Gaoqi Airport)</p>
                                <div class="items">
                                    <p>送机候车处：酒店大堂</p>
                                    <p class="en">Drop-off assembly area: Hotel lobby</p>
                                    <p>服务时间：3月14日</p>
                                    <p class="en">Service time: March 14</p>
                                    <p>国际会议中心酒店：05:00-13:00</p>
                                    <p class="en">Xiamen International Conference Center Hotel: 05:00-13:00</p>
                                    <p>润丰吉祥温德姆至尊酒店：05:05-13:05</p>
                                    <p class="en">WyndhamGrand Xiamen: 05:05-13:05</p>
                                    <p>佰翔五通酒店：05:20-13:20</p>
                                    <p class="en">Xiamen Wutong Fliport Hotell:05:20-13:20</p>
                                    <p>行程线路：国际会议中心酒店→润丰吉祥温德姆至尊酒店→佰翔五通酒店→厦门高崎机场T3/T4航站楼</p>
                                    <p class="en">Traffic route: International Conference Center Hotel→ Wyndham Grand Xiamen →Xiamen Wutong Fliport Hotel→Gaoqi International Airport T3 /T4 Terminal</p>
                                </div>
                            </li>
                        </ol>
                    </div>
                    <div class="list-item">
                        <h1>二、天气</h1>
                        <p class="en">II. Weather</p>
                        <p class="sub-title text-left">
                            <a href="http://www.weather.com.cn/weather/101230201.shtml" style="display: block; text-align: left; margin: 0; width: 100%; text-align: left; position: relative; left: -18px;"><img :src="weather" alt=""></a>
                        </p>
                    </div>
                    <div class="list-item">
                        <h1>三、实用信息</h1>
                        <p class="en">III. Useful Information</p>
                        <p class="sub-title">
                            “一城如花半倚石，万点青山拥海来”，欢迎各位嘉宾来到美丽的海滨城市—厦门，为了您在与会期间更加便利出行，我们特地为您收集了以下信息，以供参考。
                        </p>
                        <p class="en">Welcome to the beautiful coastal city--Xiamen. To facilitate a convenience travel, we hereby collect the following information for your reference.</p>
                        <a :href="img2url"><img :src="img2" alt=""></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'traffic',
        data() {
            return {
                weather: require('../images/weather_pic.png'),
                banner: require('../images/weather-banner.jpg'),
                img1: require('../images/Transportation.ShuttleService_small.jpg'),
                img1url: require('../images/Transportation.ShuttleService.jpg'),
                img2: require('../images/jt_2_small.jpg'),
                img2url: require('../images/jt_2_big.jpg'),
            }
        },
        mounted() {
            document.title = '交通和天气'
            this.$store.commit('SPIN', false)
        }
    }
</script>

<style lang="less" scoped>
    @import '../style.less';

    .text-block-container {
        text-align: justify;
        color: #666;
        h1, h2, h3, p {
            font-size: 14px;
            line-height: 18px;
            margin-bottom: 3px;
        }
        .header {
            h2, p {
                text-indent: 24px
            }
        }
        ol, li{
            margin: 0;
            padding: 0;

        }
        ol {
            margin-left: 15px;
        }
        .list-item {
            h1{
                color: #333;
                font-size: 16px;
                font-weight: bold;
            }
            h2 {
                margin-top: 10px;
                font-weight: bold;
                color: #666;
            }
            img {
                width: 100%;
                height: auto;
                margin: 10px 0
            }
            .sub-title {
                text-indent: 18px;
                font-size: 14px;
                font-weight: bold;
                margin-top: 10px;
                color: #333;
            }
        }
        .notice, .notice p {
            font-size: 12px;
            line-height: 12px;
            margin-top: 5px;
        }
        .notice {
            margin-top: 20px;
        }
        .en {
            color: #999;
        }
    }
</style>
