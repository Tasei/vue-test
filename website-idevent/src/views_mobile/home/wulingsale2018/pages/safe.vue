<template>
    <div class="page-container">
        <div class="text-block-container">
            <div class="text-content">
                <div class="header">
                    <h2>
                        欢迎您来到厦门，参加上汽通用五菱2018年度销售服务年会。为了您的安全及年会的顺利召开，会务组提醒您注意以下安全事项：
                    </h2>
                    <p>
                        Welcome to Xiamen to attend the 2018 SGMW Sales Annual Conference. For your safety and the success of the Annual Conference, the Conference Committee reminds you of the following safety precautions:
                    </p>
                </div>
                <div class="list-item">
                    <h1>一、会场安全</h1>
                    <p class="sub-title">I. Venue Safety</p>
                    <ol>
                        <li>
                            <h2>请查看安全疏散线路指示标志及安全出口；</h2>
                            <p>Please check indication signs of safe evacuation routes and be aware of the emergency exits.</p>
                        </li>
                        <li>
                            <h2>
                                若会场发生特殊紧急情况如停电、火情、拥挤、爆炸等意外事件时，不要惊慌乱跑, 请自觉服从公安民警和现场工作人员疏导和劝解，并注意收听现场广播提示，有序疏散退场；遇有局部人员拥挤时，请保持情绪平稳慢行，如果发生有人倒地，立即停止前进，同时大声警示，防止出现踩踏事故；
                            </h2>
                            <p>
                                In case of any special emergency at the venue, such as power outage, fire, congestion or explosion, please do not panic and run, and please follow the direction of police officers and working staff, listen to broadcast tips, evacuate and leave the venue in order; in case of congestion, please keep calm and slow down. If someone falls on the ground, please stop going forward immediately while giving loud warning to prevent a stampede accident.
                            </p>
                        </li>
                        <li>
                            <h2>
                                请保管好自己随身携带的贵重物品；
                            </h2>
                            <p>
                                Please take care of your personal valuable belongings.
                            </p>
                        </li>
                        <li>
                            <h2>
                                发现无主物、可疑物时不要轻易触动，请及时向现场工作人员报告；
                            </h2>
                            <p>
                                Please do not touch anything unattended or suspicious goods and please report to the working staff in time.
                            </p>
                        </li>
                        <li>
                            <h2>如遇其它紧急状况，请向现场工作人员寻求支持。</h2>
                            <p>
                                In case of any emergency, please look for support from working staff.
                            </p>
                        </li>
                    </ol>
                </div>
                <div class="list-item">
                    <h1>二、出行安全</h1>
                    <p class="sub-title">II. Travel Safety</p>
                    <ol>
                        <li>
                            <h2>行李不要脱离视线，贵重物品随身携带；</h2>
                            <p>Please keep an eye on your personal belongings and carry valuables with yourselves.</p>
                        </li>
                        <li>
                            <h2>熟悉交通工具的紧急逃生办法；</h2>
                            <p>
                                Please familiar with your means of transportation.
                            </p>
                        </li>
                        <li>
                            <h2>禁止酒后驾车、超速行车、无证驾车等交通行为。</h2>
                            <p>Drunk driving, speeding and driving without a license are strictly prohibited.</p>
                        </li>
                    </ol>
                </div>
                <div class="list-item">
                    <h1>三、饮食安全</h1>
                    <p class="sub-title">
                        III. Food Safety
                    </p>
                    <ol>
                        <li>
                            <h2>注意饮食卫生，避免中毒、胃肠道疾病的发生；</h2>
                            <p>Please beware of food hygiene to avoid poisoning and occurrence of gastrointestinal diseases.</p>
                        </li>
                        <li>
                            <h2>会务组准备有常规药品，以备不时之需；</h2>
                            <p>The Conference Committee prepares conventional medications in case of need.</p>
                        </li>
                        <li>
                            <h2>适度饮酒，注意身心健康。</h2>
                            <p>Please drink appropriate amount considering your physical health.</p>
                        </li>
                    </ol>
                </div>
                <div class="list-item">
                    <h1>四、安全疏散通道示意图</h1>
                    <p class="sub-title">
                        Ⅳ.Safety Evacuation Route
                    </p>
                    <p style="padding-top: 20px">
                        <img src="../images/lifeway.png" alt="">
                    </p>
                </div>
                <div class="notice">
                    注：<br/>
                    Note: <br/>
                    <p>年会安全联系人：宿亮 181 7726 7676</p>
                    <p>Safety Contact of Annual Conference: Mr Su Liang
                    <p>Cell phone: 181 7726 7676</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'wulingSafe',
        data() {
            return {}
        },
        mounted() {
            document.title = '安全须知'
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
                font-weight: bold;
            }
            h2 {
                margin-top: 10px;
            }
            .sub-title {
                font-size: 14px;
                font-weight: bold;
                margin-top: 10px;
                color: #333;
            }
        }
        .notice, .notice p {
            // font-size: 12px;
            // line-height: 12px;
            margin-top: 5px;
        }
        .notice {
            margin-top: 20px;
        }
    }
</style>
