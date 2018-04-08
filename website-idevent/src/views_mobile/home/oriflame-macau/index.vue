<template>
    <i-fixed class="oriflame">
        <div class="nav">
            <div class="logo">
                <img src="./images/logo.gif" />
            </div>
            <ul>
                <li><a href="javascript:;" @click="scrollTo('schedule')">日程安排</a></li>
                <li><a href="javascript:;" @click="scrollTo('visa')">签证须知</a></li>
                <li><a href="javascript:;" @click="scrollTo('tips')">常见问题</a></li>
                <li><a href="javascript:;" @click="scrollTo('contact')">联系我们</a></li>
                <li><a href="javascript:;" @click="goForm">注册报名</a></li>
            </ul>
        </div>
        <div class="banner">
            <img v-if="!banner" src="./images/banner.jpg" />
            <img v-if="banner" :src="banner" />
        </div>
        <div class="main">
            <div class="block" id="schedule">
                <div class="title">日程安排</div>
                <div class="body">
                    <ul class="schedule">
                        <li class="date">
                            <div class="l"></div>
                            <div class="r">
                                <div class="box">
                                    09/22<br />
                                    意大利·罗马
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="time l">08:00</div>
                            <div class="r">罗马城市观光(第一批次)</div>
                        </li>
                        <li>
                            <div class="time l">13:30-17:30</div>
                            <div class="r">登船</div>
                        </li>
                        <li>
                            <div class="time l">18:00</div>
                            <div class="r">启航派对</div>
                        </li>
                        <li>
                            <div class="time l">19:00</div>
                            <div class="r">启航</div>
                        </li>
                        <li class="date">
                            <div class="l">
                                <div class="box">
                                    09/23<br />
                                    海上
                                </div>
                            </div>
                            <div class="r"></div>
                        </li>
                        <li>
                            <div class="l">海上巡弋</div>
                            <div class="time r">全天</div>
                        </li>
                        <li class="date">
                            <div class="l"></div>
                            <div class="r">
                                <div class="box">
                                    09/24<br />
                                    希腊·米克诺斯岛
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="time l">13:00</div>
                            <div class="r">抵达米克诺斯岛</div>
                        </li>
                        <li>
                            <div class="time l">23:00</div>
                            <div class="r">离港</div>
                        </li>
                        <li class="date">
                            <div class="l">
                                <div class="box">
                                    09/25<br />
                                    土耳其·以弗所
                                </div>
                            </div>
                            <div class="r"></div>
                        </li>
                        <li>
                            <div class="l">抵达以弗所</div>
                            <div class="time r">06:00</div>
                        </li>
                        <li>
                            <div class="l">岛上自由观光</div>
                            <div class="time r">07:00-16:00</div>
                        </li>
                        <li>
                            <div class="l">离港</div>
                            <div class="time r">17:00</div>
                        </li>
                        <li class="date">
                            <div class="l"></div>
                            <div class="r">
                                <div class="box">
                                    09/26<br />
                                    希腊·雅典
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="time l">06:00</div>
                            <div class="r">抵达雅典</div>
                        </li>
                        <li>
                            <div class="time l">09:00</div>
                            <div class="r">全球大会</div>
                        </li>
                        <li>
                            <div class="time l">17:00</div>
                            <div class="r">自由城市观光</div>
                        </li>
                        <!--
                        <li>
                            <div class="time l">22:00</div>
                            <div class="r">顶级甲板派对</div>
                        </li>
                        -->
                        <li class="date">
                            <div class="l">
                                <div class="box">
                                    09/27<br />
                                    海上
                                </div>
                            </div>
                            <div class="r"></div>
                        </li>
                        <li>
                            <div class="l">海上巡弋</div>
                            <div class="time r">全天</div>
                        </li>
                        <li class="date">
                            <div class="l"></div>
                            <div class="r">
                                <div class="box">
                                    09/28<br />
                                    海上
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="time l">全天</div>
                            <div class="r">海上巡弋</div>
                        </li>
                        <li class="date">
                            <div class="l">
                                <div class="box">
                                    09/29<br />
                                    意大利·罗马
                                </div>
                            </div>
                            <div class="r"></div>
                        </li>
                        <li>
                            <div class="l">返回罗马</div>
                            <div class="time r">05:00</div>
                        </li>
                        <li>
                            <div class="l">罗马城市观光(第二批次)</div>
                            <div class="time r">08:00</div>
                        </li>
                    </ul>
                    <div class="photo">
                        <div class="item">
                            <img src="./images/photo_1.jpg" />
                            <div class="intro">邮轮</div>
                        </div>
                        <div class="item">
                            <img src="./images/photo_2.jpg" />
                            <div class="intro">米克诺斯岛</div>
                        </div>
                        <div class="item">
                            <img src="./images/photo_3.jpg" />
                            <div class="intro">以弗所</div>
                        </div>
                        <div class="item">
                            <img src="./images/photo_4.jpg" />
                            <div class="intro">雅典</div>
                        </div>
                        <div class="item">
                            <img src="./images/photo_5.jpg" />
                            <div class="intro">罗马</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="block grey" id="visa">
                <div class="title">办理希腊申根签证所需材料</div>
                <div class="body">
                    <ol class="tip blue">
                        <li>此次签证为自费项目，服务费为990元/人，签证产生的所有费用均请自行承担。</li>
                        <li>您可选择由公司推荐代理机构办理，亦可自行办理。无论选择何种途径，请务必申请欧洲申根多次入境签证。</li>
                        <li>如您选择由公司推荐代理机构办理签证文件递交和录入指纹地为上海市。</li>
                    </ol>
                    <dl>
                        <dt>中国大陆因私护照</dt>
                        <dd>
                            需同时满足以下4点：<br />
                            <ol>
                                <li>至少还有6个月或以上有效期，即有效期在2018年4月1日之后；</li>
                                <li>如果有旧护照一并提供原件；</li>
                                <li>至少留有2页空白签证页，不含备注页；</li>
                                <li>旧版护照，请在护照末页签名，未成年人可由父母代签名（不可用铅笔）；</li>
                            </ol>
                            <p><a class="blue" href="javascript:;" @click="view('https://static.idevent.cn/oss/meeting/86/pic/4Nl7TKqkeQbXuM3a.jpeg')">查看护照示例图</a></p>
                        </dd>
                        <dt>照片</dt>
                        <dd>
                            <p>近6个月内的2寸(3.5cmx4.5cm)白底免冠彩照2张（不能露齿、不能佩戴眼镜、需要露耳），背面需要用铅笔写上本人姓名。</p>
                            <p><a class="blue" href="javascript:;" @click="view('https://static.idevent.cn/oss/meeting/86/pic/4Nl84kriUOZBbf2i.jpeg')">查看照片示例图</a></p>
                        </dd>
                        <dt>身份证复印件</dt>
                        <dd>提供正反面复印件（复印在一张纸上）；</dd>
                        <dt>户口簿整本复印件</dt>
                        <dd>
                            <ol>
                                <li>整本复印件（连续复印至第一页空白页）；</li>
                                <li>集体户口提供集体户口页复印件或送签时仍在有效期内的户籍证明原件</li>
                            </ol>
                        </dd>
                        <dt>资产证明</dt>
                        <dd>本人名下，银行打印近6个月收入流水对账单并加盖银行红章（余额大于人民币五千元整）；</dd>
                        <dt>在校证明（学生提供）</dt>
                        <dd>
                            <ol>
                                <li>在校证明根据模板提供；</li>
                                <li>在读学校组织机构代码证复印件并盖章；</li>
                                <li>学生需将出生证明公证及认证，并且需同时提供中英文版公证书及认证书；</li>
                                <li><a class="blue" href="http://static.idevent.cn/oss/oriflame/%E9%99%84%E4%BB%B6%E4%B8%89%EF%BC%9A%E5%9C%A8%E6%A0%A1%E8%AF%81%E6%98%8E%E6%A8%A1%E6%9D%BF.doc">在校证明模板下载</a></li>
                            </ol>
                        </dd>
                    </dl>
                    <dl class="info">
                        <dt>希腊签证中心注意事项</dt>
                        <dd>
                            <ol>
                                <li>按照希腊签证中心规定，请大家进入签证中心后务必安静就坐，配合内部工作人员的指示安排。切忌出现不耐烦、大声喧哗、当众接听手机等行为。这很有可能影响到您的出签率。</li>
                                <li>录入指纹当日请务必提前抵达上海签证中心，若您迟到或逾期未抵达将会影响您本人出签证的日期，从而影响到整个出行行程。</li>
                                <li>如果您是从其他城市来到上海办理签证手续的，请您务必将回程票的时间买得晚些或者等到办理完毕再买票。因为希腊中心的申请人很多，花费时间可能比较长。请您做好准备! （整个流程2-3小时，实际以当天为准）</li>
                                <li>当您进入希腊签中心后，就尽量不要经常离开走动。如果您有需要暂时离开的话，请您先通知陪同送签人员。</li>
                                <li>如有任何其他情况或疑问，请及时询问陪同送签人员。</li>
                            </ol>
                        </dd>
                        <dt>办理签证材料邮寄地址</dt>
                        <dd>
                            所有选择公司推荐代理机构办理签证的人员请将相关送签材料在截止日期（6月23日前）快递至以下地址；<br />
                            快递地址：上海市闵行区绍虹路99号虹桥天地5号楼5楼<br />
                            收件人：<br />
                            宝狮旅行社 - 孔隼（顾问及其携带人员） 021-23151714<br />
                            宝狮旅行社 - 徐文杰（欧瑞莲员工） 021-23151758
                        </dd>
                    </dl>
                </div>
            </div>
            <div class="block" id="tips">
                <div class="title">常见问题</div>
                <div class="body">
                    <dl>
                        <dt>邀请码</dt>
                        <dd>
                            <dl class="info">
                                <dt class="small">1. 如何获得邀请码？</dt>
                                <dd>您的邀请码将通过短信发送（移动号码:10657109060586000；联通号码：13052145852）的形式提供给您或您指定的联系人手机上，请妥善保管邀请码。</dd>
                                <dt class="small">2. 如果忘记或未收到邀请码怎么办？</dt>
                                <dd>请及时致电会务组客服，取得邀请码。吕小姐：021-61425830，工作时间：周一至周五，09:00-12:00／13:00-17:00。</dd>
                            </dl>
                        </dd>
                        <dt>注册和修改</dt>
                        <dd>
                            <dl class="info">
                                <dt class="small">1. 报名参加此次会议的最后期限？</dt>
                                <dd>报名参加此次会议的最后期限为2017年06月15日15:00（星期四），此日后提交的任何信息系统将自动设定为无效信息。</dd>
                                <dt class="small">2. 是否可以修改或更新已注册信息？</dt>
                                <dd>注册完成后，您仍可随时输入您的邀请验证码再次登录在线注册网页，进行相关信息修改或更新；但请在注册网页关闭前登录，此日后修改或更新的任何信息无效。</dd>
                            </dl>
                        </dd>
                        <dt>签证</dt>
                        <dd>
                            <dl class="info">
                                <dt class="small">1. 如您选择自行办理签证，公司将提供何种支持材料？</dt>
                                <dd>如您选择自行办理，公司将为您提供两份证明材料，1、欧瑞莲公司邀请函；2、游轮公司行程表。</dd>
                            </dl>
                        </dd>
                    </dl>
                </div>
            </div>
            <div class="block grey" id="contact">
                <div class="title">联系我们</div>
                <div class="body">
                    <div class="col-2">
                        <dl>
                            <dt>注册客服</dt>
                            <dd class="dg">
                                <strong>客服热线：</strong>021-61425830；021-61425817<br />
                                <strong>地址：</strong>上海市普陀区江宁路1306弄7号楼2507<br />
                                <strong>邮编：</strong>200070<br />
                                <strong>传真：</strong>021-61426908<br />
                                <strong>邮箱：</strong><a class="underline" href="mailto:registration@citssh.com.cn">registration@citssh.com.cn</a><br />
                                <strong>工作时间：</strong>周一至周五：09:00-12:00 / 13:00-17:00
                            </dd>
                        </dl>
                    </div>
                    <div class="col-2">
                        <dl>
                            <dt>签证客服</dt>
                            <dd class="dg">
                                <strong>客服热线：</strong>021-23151714；021-23151774；021-23151758<br />
                                <strong>地址：</strong>上海市闵行区绍虹路99号虹桥天地5号楼5楼<br />
                                <strong>邮编：</strong>201100<br />
                                <strong>传真：</strong>021-61138331<br />
                                <strong>邮箱：</strong><a class="underline" href="mailto:jackykong@liontravel.com">jackykong@liontravel.com</a><br />
                                <strong>工作时间：</strong>周一至周五：09:00-12:00 / 13:00-17:00
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <strong>技术支持</strong>&nbsp;&nbsp;上海楷泰信息科技有限公司
        </div>
        <div v-if="viewPic" class="picView" @click="view()">
            <div class="ctn">
                <img :src="viewPic" />
            </div>
        </div>
    </i-fixed>
</template>
<script>
import iFixed from 'components/fixed'
export default {
    computed: {
        banner(){
            return this.meeting.settings && this.meeting.settings.home && this.meeting.settings.home.index_banner ? this.meeting.settings.home.index_banner : '';
        },
    },
    data(){
        return{
            viewPic: '',
        }
    },
    components: {
        iFixed
    },
    methods: {
        goForm() {
            this.$router.push({
                name: 'register_form2',
                query: {
                    mid: this.meeting.id
                }
            })
        },
        scrollTo(id) {
            $('.fixed-content').animate({
                scrollTop: $("#" + id).offset().top
            }, 500);
        },
        view(url) {
            this.viewPic = url;
        }
    },
    mounted() {
        this.$store.commit('SPIN')
    }
}
</script>
<style lang="less" scoped>
    @import "../../../assets/style/home/index.less";
    @import "./style/oriflame.less";
    .nav {
        height: 120px;
        .logo {
            float: left;
            padding: 30px 120px;
        }
        ul {
            float: left;
            margin: 0;
            line-height: 120px;
            font-size: 14px;
            li {
                float: left;
                margin: 0 2em;
                a {
                    color: @ori-fontGrey;
                    &:hover {
                        color: @ori-fontBase;
                    }
                }
            }
        }
    }
    .banner {
        position: relative;
        img {
            width: 100%;
        }
        .regBtn {
            position: absolute;
            right: 0;
            bottom: 26px;
            width: 240px;
            background: @ori-green;
            color: #fff;
            text-align: center;
            padding: 16px 26px;
            font-size: 30px;
            cursor: pointer;
            &:hover {
                color: #fff;
                background: @ori-greenDeep;
            }
            .time {
                font-size: 12px;
                margin-top: 6px;
            }
        }
    }
    .main {
        .block {
            padding: 80px 16%;
            .title {
                font-size: 36px;
                font-weight: 600;
                margin-bottom: 40px;
            }
            .schedule {
                float: left;
                width: 50%;
            }
            .photo {
                float: right;
                .item {
                    margin-bottom: 40px;
                    .intro {
                        text-align: right;
                        line-height: 250%;
                    }
                }
            }
            .col-2 {
                float: left;
                width: 50%;
                @media (max-width: 480px) {
                    width: 100%;
                }
            }
            &.grey {
                background: #f9f9f9;
            }
            &::after {
                content: '';
                display:block;
                clear: both;
            }
        }
    }
    .schedule {
        min-width:320px;
        font-size:12px;
        li {
            line-height: 24px;
            clear: both;
            position:relative;
            .l {
                display: inline-block;
                width: 50%;
                text-align: right;
                padding-right: 28px;
            }
            .r {
                display:inline-block;
                padding-left: 24px;
            }
            .time {
                color: @ori-fontGrey;
            }
            &::before {
                content: '';
                display: block;
                width: 6px;
                height: 6px;
                background-color: #fff;
                border: 1px solid @ori-green;
                border-radius: 50%;
                position: absolute;
                left: 50%;
                top: 50%;
                margin-left: -2px;
                margin-top: -2px;
                z-index:1;
             }
            &::after {
                content: '';
                display: block;
                width: 0;
                border: 1px solid #f3f3f3;
                position: absolute;
                left: 50%;
                top: 0;
                bottom: 0;
                z-index: 0;
            }
            &:first-child {
                &::after {
                     top: 50%;
                }
                &.date .box {
                     margin-top: 0;
                }
            }
            &:last-child {
                &::after {
                     bottom: 50%;
                }
            }
            &.date {
                .box {
                    margin: 24px 0 12px 0;
                    background-color: @ori-green;
                    padding: 6px;
                    border-radius: 2px;
                    text-align: center;
                    line-height: 18px;
                    color:#fff;
                    float:right;
                    min-width: 120px;
                }
                &::before {
                    width: 8px;
                    height: 8px;
                    margin-left: -3px;
                    margin-top: -3px;
                    background-color: @ori-green;
                }
            }
        }
    }
    .alert {
        color: #f00000 !important;
    }
    .picView {
        position: fixed;
        z-index: 50;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.6);
        cursor: pointer;
        .ctn {
            position: absolute;
            top: 20%;
            left: 20%;
            right: 20%;
            bottom: 20%;
            text-align:center;
            img {
                max-width: 100%;
                max-height: 100%;
            }
        }
    }
</style>
