<template>
    <i-fixed>
        <!--header-->
        <div class="header">
            <div class="max clearfix">
                <div class="logo"></div>
                <ul>
                    <li><a href="javascript:;" @click="scrollTo('invitation')">Invitation</a></li>
                    <li><a href="javascript:;" @click="scrollTo('company-profile')">Company Profile</a></li>
                    <li><a href="javascript:;" @click="scrollTo('schedule')">Schedule</a></li>
                    <li><a href="javascript:;" @click="scrollTo('hotel')">Hotel</a></li>
                    <li><a href="javascript:;" @click="scrollTo('weather')">Weather</a></li>
                    <li><a href="javascript:;" @click="scrollTo('pick-up')">Pick-up Service</a></li>
                    <li><a href="javascript:;" @click="scrollTo('faq')">FAQ</a></li>
                    <li><a href="javascript:;" @click="scrollTo('contact')">Contact</a></li>
                </ul>
            </div>
        </div><!--header-->

        <!--bannder-->
        <div class="banner">
            <img :src="banner_img" class="img-responsive">
            <router-link class="btn btn-primary btn-lg btn-register font-arial" :to="{name: 'register_form'}">Register
            </router-link>
        </div>
        <!--invitation-->
        <div class="invitation" id="invitation">
            <div class="max">
                <img :src="invitation_img" class="img_responsive">
            </div>
        </div><!--invitation-->

        <!--company profile-->
        <div class="company-profile" id="company-profile">
            <div class="company-profile-bg"></div>
            <div class="max">
                <h1 class="title">Company Profile</h1>
                <div class="content">
                    <h5 class="title">
                        上海汽车集团股份有限公司简介<br/>
                        SAIC Motor Corporation Limited Company Profile
                    </h5>
                    <p>
                        上海汽车集团股份有限公司（简称”上汽集团”，股票代码为600104）是国内A股市场最大的汽车上市公司，总股本达到110亿股。目前，上汽集团主要业务涵盖整车(包括乘用车、商用车)、零部件(包括发动机、变速箱、动力传动、底盘、内外饰、电子电器等)的研发、生产、销售，物流、车载信息、二手车等汽车服务贸易业务，以及汽车金融业务。
                         上汽集团所属主要整车企业包括乘用车公司、上汽大通、上汽大众、上汽通用、上汽通用五菱、南京依维柯、上汽依维柯红岩、上海申沃等。
                         2015年，上汽集团整车销量达到590.2万辆，同比增长5.0%，继续保持国内汽车市场领先优势，并以2015年度1066.8亿美元的合并销售收入，第十二次入选《财富》杂志世界500强，排名第46位，比上一年上升了14位。</p>
                    <p>SAIC Motor Corporation Limited (SAIC Motor) is the largest auto company on China’s A-share market
                        (Stock Code: 600104), and has a total equity of 11 billion shares.
                        SAIC Motor’s business covers the research, production and vehicle sales of both passenger cars
                        and commercial vehicles. It also covers components including engines, gearboxes, powertrains,
                        chassis, interior and exterior and miscellaneous electronic components, and logistics, vehicle
                        telematics, second-hand vehicle transactions and auto finance services.</p>
                    <p>SAIC's affiliated vehicle companies include Morris Garages, SAIC MAXUS, SAIC Volkswagen, SAIC-GM,
                        Shanghai General Motors Wuling (SGMW), NAVECO, SAIC-IVECO Hongyan and Shanghai Sunwin Bus Corp
                        (SUNWIN).</p>
                    <p>SAIC Motor's car sales hit 5.902 million units in 2015, up 5 percent on the previous year and
                        further consolidating its leading position in the domestic auto market. In 2015, the company
                        climbed 14 places to rank 46th on the annual Fortune Global 500 list, thanks to its $106.68
                        billion in revenues. It marked the 12th time that the company had made it onto the list of the
                        world's most powerful companies.</p>
                </div>

                <div class="content">
                    <h5 class="title">
                        上海汽车国际商贸有限公司简介<br/>
                        SAIC Motor International Co., Ltd Company Profile
                    </h5>
                    <p>
                        上善若水，润物无声。公司注册成立于2014年10月1日，是上海汽车集团股份有限公司下属唯一一家专注于国际商贸的全资子公司，注册资本9.99亿元人民币，公司为业内外企业提供专业的国际贸易、跨国投资与商务咨询服务。</p>
                    <p>
                        汽笛声响，战舰起航。公司坐落于东方巴黎，东海之滨的上海自由贸易试验区内，毗邻世界级港口洋山深水港，10万平米的土地，5万平米的现代化运营总部，集独特优势于一身。为每一位准备长风破浪的客户，提供如履平地般地一流服务。</p>
                    <p>
                        国际化、全球化是公司未来的发展方向，秉承上汽集团跨国经营的重大战略，公司已在中东地区、南美地区设立分公司，并陆续开设上汽澳大利亚公司、上汽马来西亚公司、上汽伊朗办事处、上汽哥伦比亚办事处、上汽南非办事处、上汽俄罗斯办事处、迪拜区域备件分拨中心等，通过这些公司、办事处、备件中心实现海外网络布局，服务上汽全球整车销售、咨询、售后、备件供应。未来五年之内将持续在全球市场进行广泛布局，实现全球化发展，计划2020年实现营业收入400亿元人民币。</p>
                    <p>
                        际地蟠天，构建全球营销、全球贸易、全球投资三大服务平台，公司客户遍布欧美、东南亚、拉美及中东地区，为全球许多知名整车企业、零部件企业提供配套增值服务。开拓进取，求实创新，将公司打造成为国内领先、国际一流的综合服务提供商。</p>
                    <p>SAIC Motor International Co., Ltd was established on Oct 1st 2014 with a registered capital of
                        430 million yuan. The company is the only fully-owned subsidiary of SAIC Motor Corporation
                        Limited that concentrating on international business and trade, supply professional service
                        including international trading, multinational investment and business consultancy for internal
                        and external enterprises.</p>
                    <p>SAIC Motor International is located inside the China (Shanghai) Pilot Free Trade Zone, next to
                        the world class harbor-Yangshan Deep Water Port. The main business includes import and export
                        for technology and goods, business consultation, domestic trade, sales of vehicles and parts,
                        agency for international freight, warehousing service, and container packing service, industrial
                        investment and investment consultation. </p>
                    <p>Internationalization and globalization is the company’s future development direction. In
                        accordance with the multinational operation strategy of SAIC Group, SAIC Motor International has
                        set up branch companies in Middle East and South America area, and will set up SAIC Australia,
                        SAIC Malaysia, SAIC Representative Office in Iran, Colombia, South Africa, Russia, Dubai
                        regional spare parts distribution centers etc. gradually, through these companies, offices,
                        spare parts distribution centers achieve overseas network layout, which will service SAIC global
                        vehicle sales, consulting, aftersales, supply of spare parts etc. SAIC will keep constant
                        geographical layout in global market in the coming five years to realize global development. Our
                        target is to archive business revenue of 40 billion yuan by the end of 2020.</p>
                    <p>We are aiming to establish three service platforms of global marketing, global trading and global
                        investment to supply supporting and value added service for world famous automotive and spare
                        part companies in Europe, Southeast Asia, Latin America and Middle East area. </p>
                </div>

                <div class="content">
                    <h5 class="title">
                        上汽大通汽车有限公司简介<br/>
                        Brief Introduction of SAIC MAXUS Automotive Co., Ltd
                    </h5>
                    <p>
                        上汽大通汽车有限公司（以下简称“上汽大通”），是上海汽车集团股份有限公司全资子公司。公司成立于2011年3月21日，坐落在上海市杨浦区军工路2500号，注册资金23.5亿元人民币，下设无锡申联专用汽车有限公司为上汽大通全资子公司。</p>
                    <p>公司现拥有上汽大通MAXUS和LDV两大品牌，设有无锡生产基地，主要生产V80和G10两大平台产品，2017年，无锡基地将共线生产皮卡和SUV产品，年产能将达到20万台规模。</p>
                    <p>
                        作为上汽集团旗下的国际汽车品牌，上汽大通MAXUS连续4年销量快速增长，产品以国宾级品质，多次服务于APEC等国际级高端会务活动。海外市场方面，公司在马来西亚、泰国设立组装厂及合资销售公司，产品覆盖全球40多个国家和地区,包括英国、爱尔兰、澳大利亚、新西兰等。</p>
                    <p>
                        上汽大通以“创新驱动,转型发展”为工作方向，以“大通速度”打破行业边界，形成宽体轻客、MPV和SUV及皮卡的产品型谱组合，传统发动机和新能源汽车两翼并举的技术路线。同时，公司还将通过智能化大规模产品定制，再造业务流程，创新业务模式，成为客户驱动的全新业态的车企，满足客户多元化的需求，引领未来的汽车生活。</p>
                    <p>SAIC MAXUS Automotive Co., Ltd (hereinafter referred to as “SAIC MAXUS”) is a wholly-owned
                        subsidiary of SAIC Motor Corporation Limited. Established on March 21, 2011, it is located at
                        2500 Jungong Road, Yangpu District in Shanghai. With a registered capital of 2.35 billion RMB,
                        it has a subsidiary company - Wuxi Shenlian Special Purpose Vehicle Co., Ltd..</p>
                    <p>The company currently owns two brands MAXUS and LDV. The Wuxi production base mainly produces V80
                        and G10. By 2017, Wuxi production base is expected to reach an annual output of 200,000 pick-up
                        truck and SUV products with the same production line.</p>
                    <p>As an international auto brand under SAIC Motor, SAIC MAXUS has achieved rapid growth in sales in
                        four consecutive years and has served many high-end international conferences such as APEC with
                        its state guest level quality. In terms of overseas market, it has set up assembly plants and
                        joint venture sales companies in Malaysia and Thailand. SAIC MAXUS products covers more than 40
                        countries and regions across the globe including UK, Ireland, Australia, New Zealand, etc.</p>
                    <p>With an orientation on “Innovation-driven Transformation and Development” SAIC MAXUS breaks
                        industry boundaries with “MAXUS speed”, forming a product portfolio that includes wide-bodied
                        light passenger vehicle, MPV, SUV and pick-up trucks and take on a technological road of
                        developing both traditional engine and new energy vehicle. Meanwhile, with smart and customized
                        mass production, it will re-establish business work flows and innovate its business mode to
                        become a brand new carmaker driven by customers, satisfying dynamic demands of customers and
                        leading the future of auto life. </p>
                </div>
            </div>
        </div><!--company profile-->

        <!--schedule-->
        <div class="schedule" id="schedule">
            <div class="max" v-if="isDealer">
                <h1 class="title">Schedule</h1>
                <p class="tip">* Please finish your registration before March <template v-if="isDealer">30th</template><template v-else>20th</template>.
                <!--<p class="tip">* Dress code: dark business suits, ties, scarves.</p>-->
                <div class="schedule-item clearfix">
                    <div class="step">
                        <div class="step-title clearfix">
                            <div class="left"></div>
                            <div class="right">
                                <span class="text pull-left">
                                    <small>Sunday</small>
                                    <small>2017/04/20</small>
                                </span>
                            </div>
                        </div>
                        <div class="step-content clearfix">
                            <div class="left text-right text-gray">Whole Day</div>
                            <div class="right text-left text-dark">Shanghai Airport Pick up & Hotel Check in<br>MG &
                                MAXUS Light test ride at the hotel
                            </div>
                        </div>
                        <div class="step-title clearfix">
                            <div class="left">
                                <span class="text pull-right">
                                    <small>Monday</small>
                                    <small>2017/04/21</small>
                                </span>
                            </div>
                            <div class="right"></div>
                        </div>
                        <div class="step-content clearfix">
                            <div class="left text-right text-dark">Regional meeting</div>
                            <div class="right text-left text-gray">Morning</div>
                        </div>
                        <div class="step-content clearfix">
                            <div class="left text-right text-dark">
                                MG&MAXUS Overseas Dealer Conference<br/>
                                <span style="color:red">dark business suits, ties, scarves</span>
                            </div>
                            <div class="right text-left text-gray">Afternoon</div>
                        </div>
                        <div class="step-content clearfix">
                            <div class="left text-right text-dark">Banquet
                            </div>
                            <div class="right text-left text-gray">Evening</div>
                        </div>
                        <div class="step-title clearfix">
                            <div class="left"></div>
                            <div class="right">
                                <span class="text pull-left">
                                    <small>Tuesday</small>
                                    <small>2017/04/22</small>
                                </span>
                            </div>
                        </div>
                        <div class="step-content clearfix">
                            <div class="left text-right text-gray">Daytime</div>
                            <div class="right text-left text-dark">Shanghai Auto Show Visiting</div>
                        </div>
                        <div class="step-content clearfix">
                            <div class="left text-right text-gray">Later Afternoon</div>
                            <div class="right text-left text-dark">Drop off</div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="max" v-else>
                <h1 class="title">Schedule</h1>
                <p class="tip">* Please finish your registration before March 20th.
                <div class="schedule-item clearfix">
                    <div class="step">
                        <div class="step-title clearfix">
                            <div class="left"></div>
                            <div class="right">
                                <span class="text pull-left">
                                    <small>Sunday</small>
                                    <small>2017/04/16</small>
                                </span>
                            </div>
                        </div>
                        <div class="step-content clearfix">
                            <div class="left text-right text-gray">Whole Day</div>
                            <div class="right text-left text-dark">Shanghai Airport Pick up & Hotel Check in</div>
                        </div>
                        <div class="step-title clearfix">
                            <div class="left">
                                <span class="text pull-right">
                                    <small>Monday</small>
                                    <small>2017/04/17</small>
                                </span>
                            </div>
                            <div class="right"></div>
                        </div>
                        <div class="step-content clearfix">
                            <div class="left text-right text-dark">SMPV R&D Center Visiting</div>
                            <div class="right text-left text-gray">Morning</div>
                        </div>
                        <div class="step-content clearfix">
                            <div class="left text-right text-dark">MAXUS Wuxi Factory Visiting<br>Move to Anhui Guangde
                                Proving Ground
                            </div>
                            <div class="right text-left text-gray">Afternoon</div>
                        </div>
                        <div class="step-title clearfix">
                            <div class="left"></div>
                            <div class="right">
                                <span class="text pull-left">
                                    <small>Tuesday</small>
                                    <small>2017/04/18</small>
                                </span>
                            </div>
                        </div>
                        <div class="step-content clearfix">
                            <div class="left text-right text-gray">Daytime</div>
                            <div class="right text-left text-dark">MG & MAXUS Test Driving</div>
                        </div>
                        <div class="step-content clearfix">
                            <div class="left text-right text-gray">Later Afternoon</div>
                            <div class="right text-left text-dark">Move to Shanghai</div>
                        </div>
                        <div class="step-title clearfix">
                            <div class="left">
                                <span class="text pull-right">
                                    <small>Wednesday</small>
                                    <small>2017/04/19</small>
                                </span>
                            </div>
                            <div class="right"></div>
                        </div>
                        <div class="step-content clearfix">
                            <div class="left text-right text-dark">MG & MAXUS Press Conference at Shanghai Auto Show
                            </div>
                            <div class="right text-left text-gray">Morning</div>
                        </div>
                        <div class="step-content clearfix">
                            <div class="left text-right text-dark">SAIC Executives Interview</div>
                            <div class="right text-left text-gray">Afternoon</div>
                        </div>
                        <div class="step-content clearfix">
                            <div class="left text-right text-dark">Drop off</div>
                            <div class="right text-left text-gray">Later Afternoon</div>
                        </div>

                    </div>
                </div>
            </div>
        </div><!--schedule-->

        <!--hotel-->
        <div class="hotel mg-hotel" id="hotel">
            <div class="max">
                <h1 class="title">Hotel</h1>
                <div class="content clearfix" v-for="(hotel, index) of hotelList">
                    <div class="left">
                        <h5>{{hotel.name_en}}</h5>
                        <div class="text">
                            TEL: {{hotel.phone}}<br/>
                            ADDR: {{hotel.address}}<br/>
                            <template v-if="hotelList.length>1">
                                DATE: {{index==0 ? '2017/04/16': (index==1 ? '2017/04/17' : '2017/04/18')}}
                            </template>
                        </div>
                        <div class="text" v-html="hotel.introduce"></div>
                    </div>
                    <div class="right">
                        <div v-if="hotel.cover" class="pic">
                            <img :src="hotel.cover.url"/>
                        </div>
                    </div>
                </div>
            </div>
        </div><!--hotel-->

        <!--weather-->
        <div class="weather" id="weather">
            <div class="max">
                <h1 class="title">Weather</h1>
                <div class="pic"></div>
            </div>
        </div><!--weather-->

        <!--pick-up-->
        <div class="pick-up" id="pick-up">
            <div class="max">
                <h1 class="title">PickUp Service</h1>
                <div class="content clearfix">
                    <div class="item">
                        <div class="pic pic-1"></div>
                        <p>Shanghai Pudong International Airport T1 Terminal</p>
                    </div>
                    <div class="item">
                        <div class="pic pic-2"></div>
                        <p>Shanghai Pudong International Airport T2 Terminal</p>
                    </div>
                    <div class="item">
                        <div class="pic pic-3"></div>
                        <p>Shanghai Hongqiao International Airport T2 terminal</p>
                    </div>
                </div>
                <div class="tip">
                    <h5>PickUp Service</h5>
                    <p>
                        Pick up time: <template v-if="isDealer">20/04/2017</template><template v-else>16/04/2017</template>, 10:00-24:00, Each hour all has a bus service<br/>
                        Pick up location: Shanghai Pudong International Airport, Shanghai Hongqiao International Airport<br/>
                        (Please note the sign in staff's hand at the airport)
                    </p>
                </div>
                <div class="tip">
                    <h5>Delivery Service</h5>
                    <p>
                        Delivery time: <template v-if="isDealer">22/04/2017</template><template v-else>19/04/2017</template>, time has not been decided.<br/>
                        Assembly point: hotel lobby, Auto Show<br/>
                        Delivery location: Shanghai Pudong International Airport, Shanghai Hongqiao International<br/>
                    </p>
                </div>
            </div>
        </div><!--pick-up-->

        <div class="faq" id="faq">
            <div class="max">
                <h1 class="title">FAQ</h1>
                <div class="content">
                    <div class="clearfix" v-if="isDealer">
                        <div class="left">
                            <h3>Invitation Code</h3>
                            <div class="item">
                                <h5>How to get the invitation code?</h5>
                                <p>Your invitation code will send to you or your contact by email in March 13th,2017.
                                    Please keep it in safe.</p>
                            </div>
                            <div class="item">
                                <h5>If I forgot my invitation code?</h5>
                                <p>Please call or send email to SAIC overseas customer service business group in time in
                                    order to get the invitation code.</p>
                            </div>
                            <div class="item">
                                <p><a href="mailto:contactus@saicservice.com">contactus@saicservice.com</a></p>
                            </div>
                        </div>
                        <div class="right">
                            <h3>Registration and Modification</h3>
                            <div class="item">
                                <h5>The deadline for registration?</h5>
                                <p>The deadline for this meeting’s registration is March 27th,2017. Any day after the
                                    submission day will automatically set as invalid information by the information
                                    system.</p>
                            </div>
                            <div class="item">
                                <h5>Whether can modify or update the registered information?</h5>
                                <p>After “Save&Preview” step, you can still enter your invitation code at any time to
                                    log on to the online registration page to modify or update your relative
                                    information. Pay attention, you must log on to the registration page before March
                                    27th, 2017. Any day after the close day will automatically set as invalid
                                    information by the information system.</p>
                            </div>
                            <div class="item">
                                <h5>Flight condition?</h5>
                                <p>We have checked the flight information when the registration begin. Please fill in
                                    other registration information and upload the home page of your passport.</p>
                            </div>
                        </div>
                    </div>
                    <div class="clearfix" v-else>
                        <div class="left">
                            <h3>Invitation Code</h3>
                            <div class="item">
                                <h5>How to get the invitation code??</h5>
                                <p>Your invitation code will send to you or your contact by email in March 13th,2017.
                                    Please keep it in safe.</p>
                            </div>
                            <div class="item">
                                <h5>If I forgot my invitation code?</h5>
                                <p>Please call or send email to SAIC overseas customer service business group in time in
                                    order to get the invitation code.</p>
                            </div>
                            <div class="item">
                                <p><a href="mailto:contactus@saicservice.com">contactus@saicservice.com</a></p>
                            </div>
                        </div>
                        <div class="right">
                            <h3>Registration and Modification</h3>
                            <div class="item">
                                <h5>The deadline for registration?</h5>
                                <p>The deadline for this meeting’s registration is March 27th,2017. Any day after the
                                    submission day will automatically set as invalid information by the information
                                    system.</p>
                            </div>
                            <div class="item">
                                <h5>Whether can modify or update the registered information?</h5>
                                <p>After “Save&Preview” step, you can still enter your invitation code at any time to
                                    log on to the online registration page to modify or update your relative
                                    information. Pay attention, you must log on to the registration page before March
                                    27th, 2017. Any day after the close day will automatically set as invalid
                                    information by the information system.</p>
                            </div>
                            <div class="item">
                                <h5>Whether can have online registration when the flight isn’t booked?</h5>
                                <p>If you haven’t booked your flight when the registration begin, you can fill in other
                                    registration information first and then send us the relevant flight information
                                    before March 27th, 2017.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div><!--faq-->
        <div class="contact" id="contact">
            <div class="max">
                <h1 class="title">Contact</h1>
                <div class="content clearfix">
                    <div class="left">
                        <div class="item">
                            <span>Customer service phone</span>
                            <span>Mr.Ni <a href="tel:+86-021-61425802">+86-21-61425802</a></span>
                        </div>
                        <div class="item">
                            <span>Working hours(Beijing Time)</span>
                            <span>Monday-Friday
                            09:00-12:00
                            13:00-17:00
                            </span>
                        </div>
                        <div class="item">
                            <span>Fax</span>
                            <span>+86-21-60908350</span>
                        </div>
                    </div>
                    <div class="right">
                        <div class="item">
                            <span>Address</span>
                            <span>Room #912, Changan building #1, #1001 Changan Road, Jingan District, Shanghai, China</span>
                        </div>
                        <div class="item">
                            <span>Postcode</span>
                            <span>200070</span>
                        </div>
                        <div class="item">
                            <span>Email</span>
                            <span><a href="mailto:contactus@saicservice.com">contactus@saicservice.com</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div><!--faq-->

        <div class="footer">
            <span>Powered By</span><a target="_blank" href="https://www.idevent.cn">iDEvent.cn 2017</a>
        </div>
    </i-fixed>
</template>
<script>
    import iFixed from 'components/fixed'
    export default{
        data(){
            return {
                hotelList: []
            }
        },
        components: {
            iFixed
        },
        computed: {
            isDealer(){
                return this.meeting.alias == 'mg2017_dealer'
            },
            banner_img(){
                if (this.isDealer) {
                    return require("./images/dealer_kv.jpg")
                } else {
                    return require("./images/media_kv.jpg")
                }
            },
            invitation_img(){
                if (this.isDealer) {
                    return require("./images/invitation_dealer.png")
                } else {
                    return require("./images/invitation_media.png")
                }
            }
        },
        created() {
            this.$store.commit('LANG', 'en')
            this.checkLogin()
            this.getHotelList()
        },
        methods: {
            checkLogin() {
                if (!this.user) {
                    this.$cookie.set('__redirect', this.$route.fullPath)
                    this.$router.push({
                        name: 'pc_login',
                        query: {
                            mid: this.meeting.id
                        }
                    })
                }
            },

            getHotelList() {
                let self = this
                this.$http.post('hotel/showListByGroup').then((response) => {
                    if (response.body.err == 0) {
                        self.hotelList = response.body.res.list
                    }
                }).then(() => {
                    this.$store.commit('SPIN')
                })
            },
            scrollTo(id) {
                $('.fixed-content').animate({
                    scrollTop: $("#" + id).offset().top
                }, 500);
            }
        }
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    .mg-hotel {
        .text {
            span, ol, a, ul, li, p {
                color: #ffffff !important;
                font-size: 12px !important;
            }
        }
    }

    @img_path: './images';
    .max {
        max-width: 1200px;
        min-width: 990px;
        width: 990px;
        margin: 0 auto;
        position: relative;
    }

    /** header **/
    .header {
        background-color: #fff;
        .max {
            padding: 60px 0;
        }
        .logo {
            position: absolute;
            left: 0;
            top: 50%;
            width: 150px;
            height: 48px;
            background: url("@{img_path}/logo.png") no-repeat center;
            background-size: 100% 100%;
            margin-top: -24px;
        }
        ul {
            float: right;
            margin-bottom: 0;
        }
        li {
            float: left;
            margin-left: 23px;
            a {
                color: #999;
                font-size: 12px;
            }
        }
        .btn {
            position: absolute;
            right: 0;
            width: 80px;
            top: 50%;
            margin-top: -23px;
            font-size: 12px;
        }
    }

    /**banner**/
    .banner {
        //padding-top: 42%;
        //height: 504px;
        background: #eeeeee no-repeat center;
        background-size: 100% 100%;
        min-width: 990px;
        position: relative;

        .btn-register {
            position: absolute;
            left: 80%;
            bottom: 20%;
            width: 200px;
            margin-left: -100px;
            padding: 28px !important;
            font-size: 28px;
        }
    }

    /**invitation**/
    .invitation {
        background-color: #fff;
        background: url("./images/invitation_bg.jpg");
        background-position: center center;
        padding: 72px 0;
    }

    /**company profile**/
    .company-profile {
        background-color: rgba(48, 63, 80, 0.9);
        position: relative;

        .company-profile-bg {
            background: url("./images/company_profile_bg.jpg");
            background-position: center center;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
        }

        padding: 100px 0 180px 0;
        .max {
            width: 990px;
        }
        h1.title {
            font-size: 40px;
            color: #ffffff;
            margin: 0 0 104px;
        }
        .content {
            margin-bottom: 50px;
            h5.title {
                font-size: 14px;
                color: #fff;
                margin: 0 0 20px;
                line-height: 20px;
            }
            p {
                margin: 0;
                color: rgba(255, 255, 255, 0.6);
                font-size: 12px;
                line-height: 18px;
            }
        }
    }

    /**schedule**/
    .schedule {
        padding: 144px 0 220px 0;
        background-color: #F2F8FF;
        background-image: url("./images/schedule_bg.jpg");
        background-position: center center;
        .max {
            width: 990px;
        }
        h1.title {
            font-size: 40px;
            color: #333;
            margin: 0 0 44px;
            font-weight: bold;
        }
        p.tip {
            font-size: 12px;
            color: #666;
        }
        .step {
            position: relative;
            width: 65%;
            float: right;
            &:before {
                content: '';
                position: absolute;
                left: 50%;
                background-color: #dddddd;
                top: 18px;
                bottom: 24px;
                width: 2px;
                margin-left: -1px;
            }
            .left, .right {
                width: 50%;
                position: relative;
            }
            .left {
                padding-right: 26px;
                float: left;
            }
            .right {
                padding-left: 26px;
                float: right;
            }
            .step-title {
                margin-bottom: 30px;
                position: relative;
                &:before {
                    content: '';
                    position: absolute;
                    width: 8px;
                    height: 8px;
                    background-color: #303F50;
                    border-radius: 50%;
                    top: 50%;
                    left: 50%;
                    margin-left: -4px;
                    margin-top: -4px;
                }
                span.text {
                    display: inline-block;
                    background-color: #303F50;
                    border-radius: 2px;
                    padding: 8px 16px;
                    small {
                        display: block;
                        color: #ffffff;
                        &:last-child {
                            opacity: 0.8;
                        }
                    }
                }
            }
            .step-content {
                font-size: 12px;
                position: relative;
                margin-bottom: 20px;
                &:before {
                    content: '';
                    width: 4px;
                    height: 4px;
                    background-color: #fff;
                    border: 1px solid #303F50;
                    border-radius: 50%;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    margin-left: -2px;
                    margin-top: -2px;
                }
            }
        }

    }

    /**hotel**/
    .hotel {
        background-color: #303F50;
        background-image: url("./images/hotel_bg.jpg");
        background-position: center center;
        padding: 150px 0px 130px;
        .max {
            width: 990px;
        }
        h1.title {
            font-size: 40px;
            color: #ffffff;
            margin-bottom: 90px;
        }
        .content {
            margin-bottom: 70px;
            .left, .right {
                display: inline-block;
                float: left;
            }
            .left {
                width: 50.71%;
                padding-right: 84px;
                h5 {
                    color: #fff;
                    font-size: 18px;
                    margin: 0 0 20px;
                }
                .text {
                    p {
                        color: #ffffff !important;
                        font-size: 12px !important;
                        margin: 0 !important;
                    }
                    font-size: 12px;
                    color: #ffffff;
                    margin-top: 24px;
                    &.gray {
                        opacity: 0.6;
                        margin-top: 18px;
                    }
                }
            }
            .right {
                width: 49.29%;
                .pic {
                    padding-top: 59.02%;
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                    background-position: center;
                    position: relative;
                    overflow: hidden;
                    img {
                        position: absolute;
                        left: 0;
                        top: 0;
                        max-width: 100%;
                    }
                    &.hotel_1 {
                        background-image: url("@{img_path}/hotel_1.png");
                    }
                    &.hotel_2 {
                        background-image: url("@{img_path}/hotel_2.png");
                    }
                    &.hotel_3 {
                        background-image: url("@{img_path}/hotel_3.png");
                    }
                }
            }
        }
    }

    /**weather**/
    .weather {
        background-image: url("./images/weather_bg.jpg");
        background-position: center center;
        padding: 144px 0 216px;
        .max {
            width: 990px;
        }
        h1.title {
            font-size: 40px;
            color: #333333;
            font-weight: bold;
            margin: 0 0 104px;
        }
        .pic {
            width: 990px;
            height: 596px;
            background: url("@{img_path}/weather.png") no-repeat center;
            background-size: 100% 100%;
        }
    }

    /**pick-up**/
    .pick-up {
        background-color: #f2f8ff;
        background-image: url("./images/pickup_bg.jpg");
        background-position: center;
        padding: 144px 0 192px;
        .max {
            width: 990px;
        }
        h1.title {
            font-size: 40px;
            color: #333333;
            font-weight: bold;
            margin: 0 0 102px;
        }
        .content {
            margin-left: -45px;
            margin-bottom: 64px;
            .item {
                display: inline-block;
                float: left;
                width: 300px;
                margin-left: 45px;
                .pic {
                    padding-top: 100%;
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    background-position: center;
                    &.pic-1 {
                        background-image: url("@{img_path}/pudong_t1.jpg");
                    }
                    &.pic-2 {
                        background-image: url("@{img_path}/pudong_t2.jpg");
                    }
                    &.pic-3 {
                        background-image: url("@{img_path}/hongqiao_t2.jpg");
                    }
                }
                p {
                    font-size: 12px;
                    color: #999;
                    margin: 14px 0 0;
                }
            }
        }
        .tip {
            margin-top: 42px;
            color: #333;
            text-align: right;
            h5 {
                font-size: 18px;
                margin: 0 0 12px;
            }
            p {
                margin: 0;
                font-size: 12px;
            }
        }
    }

    /**faq**/
    .faq {
        background-color: #303f50;
        background-image: url("./images/faq_bg.jpg");
        background-position: center center;
        padding: 80px 0 105px;
        max-height: 1080px;
        overflow: hidden;
        .max {
            width: 990px;
        }
        h1.title {
            font-size: 40px;
            color: #ffffff;
            font-weight: bold;
            margin: 0 0 102px;
        }
        .content {
            &:before {
                content: '';
                position: absolute;
                left: 50%;
                width: 2px;
                background-color: #979797;
                opacity: 0.3;
                top: 0;
                bottom: 0;
                margin-left: -1px;
            }
            position: relative;
            .left, .right {
                display: inline-block;
                float: left;
                width: 50%;
            }
            .left {
                padding-right: 88px;
            }
            .right {
                padding-left: 88px;
            }
            h3 {
                font-size: 18px;
                color: #ffffff;
                margin: 0 0 54px;
            }
            .item {
                font-size: 12px;
                margin-top: 32px;
                color: #ffffff;
                h5 {
                    margin: 0 0 4px;
                    font-size: 12px;
                }
                a, p {
                    line-height: 18px;
                    opacity: 0.6;
                    color: #fff;
                }
            }

        }
    }

    /**contact**/
    .contact {
        background-color: #f2f8ff;
        background-image: url("./images/contact_bg.jpg");
        background-position: center;
        background-repeat: no-repeat;
        padding: 144px 0 180px;
        .max {
            width: 990px;
        }
        h1.title {
            font-size: 40px;
            color: #333;
            font-weight: bold;
            margin: 0 0 102px;
        }
        .content {
            position: relative;
            margin-top: -24px;
            .left, .right {
                display: inline-block;
                float: left;
            }
            .left {
                width: 42.22%;
                .item {
                    span:first-child {
                        width: 48px;
                    }
                }
            }
            .right {
                .item {
                    span:first-child {
                        width: 24px;
                    }
                }
            }
            .item {
                margin-top: 24px;
                span {
                    font-size: 12px;
                }
                span:first-child {
                    color: #333;
                    margin-right: 18px;
                }
                span:last-child {
                    color: #666;
                }
            }

        }
    }

    .footer {
        font-size: 12px;
        text-align: center;
        padding: 42px 0 92px;
        border-top: 1px solid rgba(48, 63, 80, 0.2);
        span {
            color: #666;
            margin-right: 0.5em;
        }
        a {
            color: #999;
        }
    }

    .font-arial {
        font-family: Arial!important;
    }

</style>
