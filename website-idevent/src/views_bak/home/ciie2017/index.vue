<template>
    <div>
        <audio-player src="http://static.idevent.cn/oss/ciie2017/bg2.mp3"></audio-player>
        <swiper :options="swiperOption" ref="mySwiper" :not-next-tick="false" v-if="formList.length > 0">
            <div slot="parallax-bg" class="full-bg" data-swiper-parallax="-30%"
                 data-swiper-parallax-duration="1000"></div>
            <!-- slides -->
            <swiper-slide>
                <img :src="require('./assets/title.png')" class="img-responsive fade-in">
            </swiper-slide>
            <swiper-slide class="slide-1">
                <div class="content">
                    <h2>展会介绍</h2>
                    <h4>Exhibition Introduction</h4>
                    <hr>
                    <table>
                        <tbody>
                        <tr>
                            <th>指导单位：</th>
                            <td>中国旅游协会</td>
                        </tr>
                        <tr>
                            <th>主办单位：</th>
                            <td>上海鄂申文化传媒有限公司</td>
                        </tr>
                        </tbody>
                    </table>
                    <hr class="slash">
                    <p><span class="bold">各位尊敬的展商们：</span>
                        <br>
                        为进一步深入促进中国特色新型城镇化和民俗文化规模产业化持续健康发展。近日在上海市开“2017 年中国民俗文化博览会”， 邀请全国特色重点企业参会，针对性的宣传展示全国各地区的优势资源。</p>
                    <p>我们诚挚的邀请贵公司的美食展商、其他展商(包括特色小镇、非物质 文化遗产、文化旅游、民宿或文化产业企业等相关企业)，衷心期待您的到来！</p>

                    <p class="text-right">上海鄂申文化传媒有限公司</p>
                </div>
            </swiper-slide>
            <swiper-slide class="slide-2">
                <div class="content">
                    <h2>关于我们</h2>
                    <h4>About Us</h4>
                    <hr>
                    <p>
                        中国民俗文化博览会国内唯一性的产学研相结合的主题博览会，区域性优势，以文化部民俗教学基地为主的华东几所高校资源，以上海为中心的长三角地区，引领全国民俗高端旅游群体，集中全国民宿资源，影响力深远，为中国民宿市场活跃而推动。</p>
                    <p>
                        我们的宣传具有广泛性，有100多家媒体现场报道，跟踪采访，呈现活动的民俗盛会。 汇集全产业链的最佳平台，在展会中开拓国内市场，乃至亚洲客源市场的有力平台，汇集全球代表性的民宿，设计建造相关企业与产品衍生、运营机构、连锁加盟、吸引投资机构、民宿相关学术机构参与、民宿创客、政府机构的参与，博览会为其提供展示资源，开拓市场渠道、树立品牌宣传等一站式的解决方案。</p>
                </div>
            </swiper-slide>
            <swiper-slide class="slide-3">
                <div class="content">
                    <h2>展会背景</h2>
                    <h4>Exhibition Background</h4>
                    <hr>
                    <p>民俗开发的文化产业，是针对自然与历史文化遗产、传媒文化、时尚文化而进行的，以乡土社会为主要阵地的民俗文化的一种新型产业。</p>
                    <p>民俗文化产业在全国各地兴起，早已超出传统意义上的展演制销模式以及“文艺搭台，经贸唱戏”的简单框架，初步显现出一定的规模化发展与自觉性追求。</p>
                    <p>我们以此为契机，为特色小镇、民俗开发的文化产业提供一个推广发展平台，进而促进文化产业的进一步发展。 </p>
                </div>
            </swiper-slide>
            <swiper-slide class="slide-4">
                <div class="content">
                    <h2>展会日程</h2>
                    <h4>Exhibition Schedule</h4>
                    <hr>
                    <table>
                        <tbody>
                        <tr>
                            <th>布展期：</th>
                            <td>2017年12月13日~14日</td>
                        </tr>
                        <tr>
                            <th>展览期：</th>
                            <td>2017年12月15日～17日</td>
                        </tr>
                        <tr>
                            <th>撤展期：</th>
                            <td>2017年12月17日</td>
                        </tr>
                        <tr>
                            <th>开幕式：</th>
                            <td>2017年12月15日</td>
                        </tr>
                        </tbody>
                    </table>
                    <img :src="require('./assets/venue-map.png')" class="img-responsive" :class="fade(4)">
                </div>
            </swiper-slide>
            <swiper-slide class="slide-5">
                <div class="content">
                    <h2>展会活动</h2>
                    <h4>Exhibition Activities</h4>
                    <hr>
                    <ul>
                        <li>开幕式</li>
                        <li>展前快讯</li>
                        <li>明日之星中国特色小镇发展暨中国房地产开发转型高峰论坛</li>
                        <li style="margin: 20px 0;" :class="fade(5)">
                            招商推介会：本届博览会活动中的招商推介会是针对各地省市县政府在一定的时间内各自推出特色的招商推介会，为推进各地的招商引资搭建一个平台(共29场)。届时会邀请资本方、大型房地产公司等相关的企业及产业来进行参与，有利于各地方的招商引资。项目路演针对更有效的客户在平台上获取更多的商业信息交流，并且落实项目的资源对接，增加项目落地的实际可操作性。
                        </li>
                        <li>项目路演</li>
                        <li>民俗文化表演</li>
                        <li>美食展示</li>
                        <li>现场评奖</li>
                    </ul>
                </div>
            </swiper-slide>
            <swiper-slide class="slide-6">
                <div class="content">
                    <h2>招展范围</h2>
                    <h4>Exhibition Range</h4>
                    <hr>
                    <ul class="expanded">
                        <li>特色小镇</li>
                        <li>非物质文化遗产、民俗文化</li>
                        <li>文化旅游</li>
                        <li>民宿设计与建造（民宿建筑材料）</li>
                        <li>民宿、民宿旅游与民宿资源（民宿运营）</li>
                        <li>特色饮食</li>
                        <li>手工艺品制作、文创产品</li>
                        <li>高科技 VR.AR 展示</li>
                    </ul>
                </div>
            </swiper-slide>
            <swiper-slide class="slide-7">
                <div class="content">
                    <h2>参展费用</h2>
                    <h4>Participation Fee</h4>
                    <hr>
                    <table>
                        <thead>
                        <tr>
                            <th>展位价格</th>
                            <td>(注：双面开口展位加收 20%）</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th>类型：</th>
                            <td>标准展台(9m²) ；室内光地(30m²)</td>
                        </tr>
                        <tr>
                            <th>国内展商：</th>
                            <td>¥20000/个；¥2200/m²(可面谈)</td>
                        </tr>
                        <tr>
                            <th>外资企业：</th>
                            <td>¥20000/个；¥2200/m² (可面谈)</td>
                        </tr>
                        <tr>
                            <th>美食展位：</th>
                            <td>免费提供展位，采取抽取实际营业额流水的方式收取展位的报酬，抽取展期全部实际营业额的30%作为提供展位报酬。</td>
                        </tr>
                        </tbody>
                    </table>
                    <hr class="slash">
                    <table>
                        <thead>
                        <tr>
                            <th>展位配置</th>
                            <td></td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th>标准展台：</th>
                            <td>中英文楣板、咨询桌1张、折椅2把、射灯2只、电源插座1支、纸篓1个 </td>
                        </tr>
                        <tr>
                            <th>特装光地展台：</th>
                            <td>只提供参展空间，不包展架，展具等任何设施，不含特装管理费、证件费、电源费等场馆收取的费用</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </swiper-slide>
            <swiper-slide class="slide-8">
                <div class="content">
                    <h2>我要参加</h2>
                    <h4>Join In</h4>
                    <hr>

                    <div v-if="hasRegInfo">
                        <div class="text-center">
                            <i class="fa fa-check fa-3x"
                               style="border: 2px solid #fff;border-radius: 50%;padding: 5px;"></i>
                            <h5 style="font-size:22px;">已提交</h5>
                        </div>
                        <hr class="slash">
                        <table>
                            <tbody>
                            <tr v-for="el in formList[0].value.elements">
                                <th>{{el.label}}</th>
                                <td>{{el.value}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <form v-else id="reg-form" onsubmit="return false">
                        <input class="form-control" type="text" :placeholder="el.label"
                               v-for="el in formList[0].value.elements" :name="elementName(el, formList[0].id)"
                               v-validate="el.validate">
                        <button class="btn btn-primary btn-lg" @click.prevent="submitForm" type="button">提交</button>
                    </form>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<style scoped lang="less">
    .fade-in {
        animation: fade 3s linear;
    }

    @keyframes fade {
        0% {
            opacity: 0
        }
        25% {
            opacity: 0
        }
        50% {
            opacity: 0.5
        }
        100% {
            opacity: 1
        }
    }

    .full-bg {
        background-image: url("./assets/full-bg.png");
        background-position: top center;
        background-size: 100% auto;
        padding-top: 262.667%;
        /*z-index: 0;*/
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        z-index: -1;
    }

    .swiper-slide {
        /*background-position: top center;*/
        /*background-size: 100% auto;*/
        /*background-repeat: repeat;*/

        /*-webkit-transform-style: preserve-3d;*/

        &.slide-1 {
            /*background-image: url("./assets/1.png");*/
            background-color: rgba(0, 64, 100, 0.5);
        }
        &.slide-2 {
            /*background-image: url("./assets/2.png");*/
            background-color: rgba(12, 68, 40, 0.5);
        }
        &.slide-3 {
            /*background-image: url("./assets/3.png");*/
            background-color: rgba(91, 21, 7, 0.5);
        }
        &.slide-4 {
            /*background-image: url("./assets/4.png");*/
            background-color: rgba(30, 27, 87, 0.5);
        }
        &.slide-5 {
            /*background-image: url("./assets/5.png");*/
            background-color: rgba(94, 32, 59, 0.5);
        }
        &.slide-6 {
            /*background-image: url("./assets/6.png");*/
            background-color: rgba(24, 63, 103, 0.5);
        }
        &.slide-7 {
            /*background-image: url("./assets/7.png");*/
            background-color: rgba(65, 74, 0, 0.5);
        }
        &.slide-8 {
            /*background-image: url("./assets/8.png");*/
            background-color: rgba(60, 56, 125, 0.5);
        }
    }

    .content {
        .form-control {
            background-color: rgba(0, 0, 0, 0.4);
            margin-top: 20px;
            border: 1px solid rgba(255, 255, 255, 0.50);
            border-radius: 2px;
            color: #fff;
            font-size: 15px;
        }

        input::-webkit-input-placeholder {
            color: rgba(255, 255, 255, 0.50) !important;
            font-size: 15px;
        }

        color: #fff;
        font-family: PingFangSC-Regular;
        padding: 20px;
        font-size: 15px;
        line-height: 1.5em;

        h2 {
            font-size: 30px;
            font-weight: normal;
            margin-top: 10px;
            margin-bottom: 5px;
            font-family: PingFangSC-Medium;
        }
        h4 {
            font-size: 15px;
            margin-top: 0;
            margin-bottom: 0;
            font-weight: normal;
        }
        .bold {
            font-weight: bold;
        }
        p {
            margin: 22px 0;
        }
        img {
            margin: 20px 0;
        }
        hr {
            height: 2px;
            color: #fff;
            margin: 20px 0;
            background: #fff;
            border: 0 none;

            &.slash {
                height: 6px;
                background: url("./assets/hr-slash.png") repeat-x 0 0;
                background-size: 3px;
            }
        }

        ul {
            margin-left: 20px;
            &.expanded {
                line-height: 3em;
            }
            li {
                list-style-position: outside;
                list-style-type: disc;
            }
        }

        table {
            thead {
                th {
                    font-size: 17px;
                    vertical-align: baseline;
                    font-weight: normal;
                    font-family: PingFangSC-Medium;
                }
                td {
                    font-size: 12px;
                    vertical-align: baseline;
                }
            }
            tbody:before {
                content: "-";
                display: block;
                line-height: 0.6em;
                color: transparent;
            }
            tbody {
                th {
                    vertical-align: top;
                    padding-right: 10px;
                    min-width: 90px;
                    font-weight: normal;
                    font-family: PingFangSC-Medium;
                }
                td {
                    vertical-align: top;
                }
            }
        }
    }
</style>
<script>
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import audioPlayer from "components/audioPlayer"
    import formUtils from "utils/form"
    import {Toast} from "mint-ui"
    import wx from "weixin-js-sdk"

    export default {
        components: {
            swiper, swiperSlide, audioPlayer
        },
        name: 'carrousel',
        data() {
            return {
                swiperOption: {
                    parallax: true,
                    direction: 'vertical',
                    grabCursor: false,
                    setWrapperSize: true,
                    autoHeight: true,
                    observeParents: true,
                    keyboardControl: true,
                    mousewheelControl: true,
                    zoomToggle: false,
                    slidesPerView: 1,
                    onSlideChangeStart: (swiper) => {
//                        console.log('onSlideChangeStart', swiper.realIndex)
                        this.realIndex = swiper.realIndex
                    }
                },
                realIndex: 0,
                formList: [],
                hasRegInfo: false,
            }
        },
        created() {
            this.getForms()
        },
        methods: {
            fade(index) {
                return this.realIndex === index ? {"fade-in": true} : {}
            },
            elementName(config, formId) {
                return formUtils.getElementName(config, formId)
            },
            getForms() {
                let self = this
                this.$http.get('register/getRegInfo').then(function (response) {
                    let ret = response.body

                    if (ret.err === 0) {
                        this.formList = ret.res.formList
                        this.hasRegInfo = ret.res.hasRegInfo
                    } else {
                        Toast(ret.msg)
                    }
                }).finally(() => {
                    this.$store.commit('SPIN', false)
                })
            },
            submitForm(event) {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        let formData = new FormData(event.target.form)
                        this.$http.post('register/saveRegInfo', formData).then(({body}) => {
                            if (body.err === 0) {
                                Toast({
                                    message: '提交成功, 感谢您的注册',
                                    position: 'bottom',
                                    duration: 3000
                                })
                                this.getForms()
                            }
                        })
                    }
                }).catch((e) => {
                    Toast({
                        message: '请完善您的表单',
                        position: 'bottom',
                        duration: 3000
                    })
                })
            },
            setWechatShare() {
                if (this.isWechat) {
                    let shareConfig = {
                        title: this.meeting.name, // 分享标题
                        desc: "2017.12.01 - 2017.12.03 中国 上海 光大会展中心", // 分享描述
                        link: window.location.href, // 分享链接
                        imgUrl: "http://static.idevent.cn/oss/ciie2017/share_logo.jpg", // 分享图标
                    }

                    let self = this
                    this.$http.post('weixin/auth/ticket', {
                        url: location.href
                    }).then((response) => {
                        let res = response.body.res
                        wx.config({
                            debug: false,
                            appId: res.app_id,
                            timestamp: res.timestamp,
                            nonceStr: res.noncestr,
                            signature: res.signature,
                            jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
                        })
                        wx.ready(() => {
                            wx.onMenuShareTimeline(shareConfig);
                            wx.onMenuShareAppMessage(shareConfig);

                            this.$player.play()
                        })
                        wx.error(function (res) {
                            console.log(res)
                        })
                    })
                } else {
                    this.$player.play()
                }
            }
        },
        mounted() {
//            this.$refs.mySwiper.swiper.slideTo(8, 300, false)
            this.setWechatShare()
        }
    }
</script>
