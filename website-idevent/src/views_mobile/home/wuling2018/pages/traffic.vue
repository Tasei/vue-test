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
                            The Conference provides you commute service including airport pick-up and drop-off, and shuttle buses between different hotels. If you choose transportation other than air plane, please arrange your own transportation. You can find hotel related Useful Information in the 【Hotel 】page.
                        </p>
                        <ol>
                            <li>
                                <h2>接机服务（厦门高崎机场 → 入住酒店）：</h2>
                                <p>接机地点：厦门高崎机场T3/T4航站楼</p>
                                <p>服务时间：3月14日 09:00-23:30</p>
                                <p>行程线路：厦门高崎机场T3航站楼 → T4航站楼 → 香格里拉大酒店 → 国际会议中心酒店</p>

                                <div class="items">
                                    <p class="en">Pickup Service (Gaoqi International Airport → check-in hotel)</p>
                                    <p class="en">Area of Pickup:Gaoqi International Airport T3/T4 Terminal </p>

                                    <p class="en">Service Time: March 14, 09:00-23:30</p>

                                    <p class="en">Traffic Route:Gaoqi International Airport T3 Terminal→ T4 Terminal→ Shangri-La Hotel →International Conference Center Hotel</p>
                                </div>
                            </li>
                            <li>
                                <h2>
                                    穿梭巴士服务（香格里拉大酒店 ↔ 国际会议中心酒店）
                                </h2>
                                <span>服务时间：3月15日8:50至20:30，详细发车时间见附表</span>

                                <div>
                                     <p class="en">Shuttle Service (Shangri-La Hotel ↔ International Conference Center Hotel)</p>
                                    <p class="en">Service Time: March 15,8:50-20:30. See the annexed table for specific departure time.</p>
                                    <a :href="img1url"><img :src="img1" alt=""></a>
                                </div>
                            </li>
                            <li>
                                <h2>
                                    送机服务（入住酒店 → 厦门高崎机场）：
                                </h2>
                                <p>送机候车处：酒店大堂</p>
                                <p>服务时间：3月16日</p>
                                <p>国际会议中心酒店：05:00-12:00</p>
                                <p>香格里拉大酒店：05:20-12:20</p>
                                <p>行程线路：国际会议中心酒店 → 香格里拉大酒店 →
                                    厦门高崎机场T3航站楼 → T4航站楼</p>

                                <div class="items">
                                    <p class="en">Drop-off Service   (Hotel → Gaoqi Airport)</p>
                                    <p class="en">Drop-off Assembly Area: Hotel Lobby</p>

                                    <p class="en">Service Time: March 16</p>

                                    <p class="en">International Conference Center Hotel: 05:00-12:00</p>

                                    <p class="en">Shangri-La Hotel: 05:20-12:20</p>

                                    <p class="en">Traffic Route:International Conference Center Hotel → Shangri-La Hotel →Gaoqi International Airport T3 Terminal→ T4 Terminal</p>
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
                        <p class="en">Welcome to the beautiful coastal city--Xiamen. To facilitate a convenience travel, we hereby collect the following Useful Information for your reference.</p>
                        <a :href="img2url"><img :src="img2" alt=""></a>
                        <a :href="img3url"><img :src="img3" alt=""></a>
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
                img1: require('../images/jt_1_small.jpg'),
                img1url: require('../images/jt_1_big.jpg'),
                img2: require('../images/jt_2_small.jpg'),
                img2url: require('../images/jt_2_big.jpg'),
                img3: require('../images/jt_3_small.jpg'),
                img3url: require('../images/jt_3_big.jpg')
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
            h1, {
                color: #333;
                font-size: 16px;
                // font-weight: bold;
            }
            h2 {
                margin-top: 10px;
                // font-weight: bold;
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
                // font-weight: bold;
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
