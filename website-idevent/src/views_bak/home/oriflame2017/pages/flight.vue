<template>
    <div class="mt-container">
        <div class="block" :class="{opened:opened.hb}">
            <template v-if="hasDepart || hasReturn">
                <div class="title">航班信息</div>
                <p>温馨提示：为了避免您错过国际航班出行，请您仔细检查自己的国内段及国际段机票安排，如出发或者返程时需在口岸城市住宿，请提前自行安排好国内住宿。</p>
                <div class="tour depart" v-if="hasDepart">
                    <div class="type">去程</div>
                    <div class="list">
                        <div class="phase" v-for="p in transitData.Depart" v-if="p.hasData">
                            <div class="date">
                                {{p.Date}}&nbsp;&nbsp;{{p.FromCity}}—{{p.ToCity}}
                            </div>
                            <div class="timeBox">
                                <div class="time start">
                                    {{p.DepartureTime}}
                                    <div class="station">{{p.DepartureAirport}}</div>
                                </div>
                                <div class="duration"></div>
                                <div class="time end">
                                    {{p.ArrivalTime}}
                                    <div class="station">{{p.ArrivalAirport}}</div>
                                    <div class="p">{{p.Duration}}</div>
                                </div>
                            </div>
                            <div class="flightInfo">
                                {{p.Company}} / {{p.Number}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tour return" v-if="hasReturn">
                    <div class="type">回程</div>
                    <div class="list">
                        <div class="phase" v-for="p in transitData.Return" v-if="p.hasData">
                            <div class="date">
                                {{p.Date}}&nbsp;&nbsp;{{p.FromCity}}—{{p.ToCity}}
                            </div>
                            <div class="timeBox">
                                <div class="time start">
                                    {{p.DepartureTime}}
                                    <div class="station">{{p.DepartureAirport}}</div>
                                </div>
                                <div class="duration"></div>
                                <div class="time end">
                                    {{p.ArrivalTime}}
                                    <div class="station">{{p.ArrivalAirport}}</div>
                                    <div class="p">{{p.Duration}}</div>
                                </div>
                            </div>
                            <div class="flightInfo">
                                {{p.Company}} / {{p.Number}}
                            </div>
                        </div>
                    </div>
                </div>
                <a class="display open" @click="toggleContent('hb')">展开全部</a>
                <a class="display close" @click="toggleContent('hb')">收起</a>
            </template>

            <template v-if="!hasDepart && !hasReturn">
                <div class="title">航班信息</div>
                <p>未查询到您的航班信息。</p>
            </template>

        </div>

        <div class="block" :class="{opened:opened.ty}">
            <div class="title">托运行李规定</div>
            <div>
                <p>根据航空公司规定，您可办理托运的行李数量、重量、体积规定如下。如您的托运行李超过航空公司规定的数量，或超过规定的重量、体积，都将根据航空公司的规定被收取一定费用，以下信息供您参考：</p>
                <table>
                    <tr>
                        <td>航空公司</td>
                        <td>航空公司代码</td>
                        <td>可托运行李件数</td>
                        <td>单件行李限重</td>
                    </tr>
                    <tr>
                        <td>阿联酋航空</td>
                        <td>EK</td>
                        <td>1件</td>
                        <td>30KG</td>
                    </tr>
                    <tr>
                        <td>法国航空</td>
                        <td>AF</td>
                        <td>1件</td>
                        <td>23KG</td>
                    </tr>
                    <tr>
                        <td>泰国航空</td>
                        <td>TG</td>
                        <td>1件</td>
                        <td>23KG</td>
                    </tr>
                    <tr>
                        <td>荷兰皇家航空</td>
                        <td>JK</td>
                        <td>1件</td>
                        <td>20KG</td>
                    </tr>
                    <tr>
                        <td>奥地利航空</td>
                        <td>OS</td>
                        <td>1件</td>
                        <td>23KG</td>
                    </tr>
                    <tr>
                        <td>中国国际航空</td>
                        <td>CA</td>
                        <td>1件</td>
                        <td>23KG</td>
                    </tr>
                    <tr>
                        <td>国泰（港龙）航空</td>
                        <td>CX（或KA）</td>
                        <td>1件</td>
                        <td>30KG</td>
                    </tr>
                    <tr>
                        <td>海南航空</td>
                        <td>HU</td>
                        <td>1件</td>
                        <td>23KG</td>
                    </tr>

                    <tr>
                        <td>中国东方航空</td>
                        <td>MU</td>
                        <td>1件</td>
                        <td>23KG</td>
                    </tr>

                    <tr>
                        <td>芬兰航空</td>
                        <td>AY</td>
                        <td>1件</td>
                        <td>23KG</td>
                    </tr>

                    <tr>
                        <td>德国汉莎航空</td>
                        <td>LH</td>
                        <td>1件</td>
                        <td>23KG</td>
                    </tr>
                    <tr>
                        <td>阿提哈德航空</td>
                        <td>EY</td>
                        <td>1件</td>
                        <td>23KG</td>
                    </tr>

                </table>
                <p>
                    温馨提示：<br/>
                    超件行李：如您的托运行李数量超出限额，将被收取一定的超件行李费用。
                    超重行李：如您的单件托运行李重量大于限额，将被收取一定的超重行李费用。
                    超大行李：如您的单件托运行李长、宽、高总和大于限额，将被收取一定的超大行李费用。

                    抵达后，于行李输送带提取托运行李时，请务必留意行李是否损坏或遗失。如有此类情况，应当场凭托运行李凭证在工作人员的协助下向航空公司反馈，取得相关证明文件后方可离开。如您携带任何受管制物品，则必须向海关申报，否则有可能被扣留并检控。

                    * 以上信息仅供参考，具体规定以您搭乘的航空公司公布为准。

                </p>
            </div>
            <a class="display open" @click="toggleContent('ty')">展开全部</a>
            <a class="display close" @click="toggleContent('ty')">收起</a>
        </div>
        <div class="block" :class="{opened:opened.ss}">
            <div class="title">随身行李规定</div>
            <div>
                根据航空公司规定，乘坐经济舱您可以免费携带一件手提行李登机。

                手提行李限重5KG，长、宽、高的总和（包括把手与轮子）不得超过55×35×20CM（包括轮子）.

                任何超过手提行李限额的物品都必须托运，如超过托运行李规定，则需缴纳相应的费用。如机上乘客较多，而客舱内储物空间有限，航空公司有权要求您将手提行李进行托运。

                * 以上信息仅供参考，具体规定以您搭乘的航空公司公布为准。

            </div>
            <a class="display open" @click="toggleContent('ss')">展开全部</a>
            <a class="display close" @click="toggleContent('ss')">收起</a>
        </div>
        <div class="block" :class="{opened:opened.xl}">
            <div class="title">行李注意事项</div>
            <div>
                <p>
                    1. 严禁携带及托运的物品<br/>
                    您乘坐飞机时禁止将枪支（含各种仿真玩具枪、微型发射器及各种类型的攻击性武器）、弹药、军械、警械、爆炸物品、易燃易爆物品、剧毒物品、放射性物品、腐蚀性物品、危险溶液及其他禁运物品带上飞机或夹在行李、货物中托运。凡携带或夹带上述物品的一经查出，立即移交公安机关处理。
                </p>
                <p>2. 不能随身携带，但可托运的物品<br/>
                    除管制刀具以外的如水果刀、剃须刀等生活用刀、手术刀等专业刀具、化妆品，如来不及托运，可以办理相关手续后，在规定时间内由安检部门代为保管。
                </p>
                <p>3.打火机、火柴的规定<br/>
                    禁止旅客随身携带打火机、火柴乘坐民航班机（含国际/地区航班、国内航班），也不可以放在托运行李中托运。贵重或品牌打火机如来不及托运，可寄存安检部门。
                </p>
                <p>4.液态物品<br/>
                    国际地区航班每人可携带100ML（毫升）液态物品乘坐从中国境内机场始发的国际、地区航班的旅客，随身携带的液态物品每件容积不得超过100ML（毫升）。盛放液态物品的容器，应置于最大容积不超过1L（升）的、可重新封口的透明塑料袋中。每位旅客每次仅允许携带一个透明塑料袋，超出部分应交运。
                </p>
                <p>
                    5.限制随身携带的液态物品的种类<br/>
                    1)液体饮品：如矿泉水、茶水、碳酸饮料、牛奶、酸奶、果汁等；<br/>
                    2)洗漱化妆用品：如牙膏、洗发水、沐浴露、润肤露、剃须泡沫；<br/>
                    3)凝胶用品：定型水、啫喱水等；<br/>
                    4)药品：如眼药水、口服或外用药液、喷剂等；<br/>
                    5)液态食品：甜面酱、瓶装罐装罐头等食品；<br/>
                    6)气雾剂：喷雾液
                </p>
                <p>
                    6.锂电池、充电宝携带规定<br/>
                    旅客为个人自用内含锂电池的便携式电子装置（照相机、手机、手提电脑、便携式摄像机等）可作为手提行李携带登机，并且锂电池的额定能量值不得超过100Wh（瓦特小时）。超过100Wh但不超过160Wh的，经航空公司批准后可以装在交运行李或手提行李中的设备上。超过160Wh的锂电池严禁携带。
                    便携式电子装置的备用电池必须单个做好保护以防短路（放入原零售包装或以其他方式将电极绝缘，如在暴露的电极上贴胶带，或将每个电池放入单独的塑料袋或保护盒当中），并且仅能在手提行李中携带。经航空公司批准的100-160Wh的备用锂电池只能携带两个。
                    充电宝必须是旅客个人自用携带，只能在手提行李中携带或随身携带，严禁在托运行李中携带。充电宝额定能量不超过100Wh，无需航空公司批准；额定能量超过100Wh但不超过160Wh，经航空公司批准后方可携带，但每名旅客不得携带超过两个充电宝。
                    严禁携带额定能量超过160Wh的充电宝；严禁携带未标明额定能量同时也未能通过标注的其他参数计算得出额定能量的充电宝。

                </p>

            </div>
            <a class="display open" @click="toggleContent('xl')">展开全部</a>
            <a class="display close" @click="toggleContent('xl')">收起</a>
        </div>
        <div class="block" :class="{opened:opened.italy}">
            <div class="title">意大利海关出入境规定</div>
            <div class="sub-title">一、出入境须知</div>
            <div class="content">
                <p>意大利海关对出入境规定与其他欧盟申根国规定基本一致。根据《申根条约》第五条的规定，非申根国家公民进入意大利必须符合以下条件：</p>
                <p>1.由边境口岸入境；</p>
                <p>2.持有被意大利政府承认的有效护照或具有同等效力的旅行证件(该证件应允许持有人自由返回发证国)；<br/>
                    注：在特殊情况下，意大利政府驻外领事代表机构会向外国人发放仅限进入意大利的通行证。
                </p>
                <p>3.拥有可证实其入境目的及停留条件的文件，证实其拥有足够的资金以确保在意大利停留期间的花费及支付回国或前往第三国的旅费。(己居住在申根国家并取得正式居留的外国人不在此列)；</p>
                <p>4.持有有效入境或过境签证；<br/>
                    (1)已居住在申根国家并取得正式居留的外国人，若停留期不超过3个月可免签证。但如以工作或实习的目的进入意大利，则不享受上述免签待遇。<br/>
                    (2)已取得意大利正式居留的外国人，也免签证。<br/>
                </p>
                <p>5.无不准入境记录；</p>
                <p>6.不被认为威胁到意大利的公共秩序、国家安全和国际关系。</p>
                <p>凡未满足上述条件中任何一条者，即使持有入境或过境签证也将被意大利边防当局拒绝入境。</p>
                <p>贴士：</p>
                <p>意大利政府对拐骗儿童犯罪相当重视，因此若携带未成年儿童入境最好准备好亲属关系公证，若让他人携带则还需准备好委托书，以防海关刁难。</p>
            </div>
            <div class="sub-title">二、海关规定</div>
            <div class="content">
                <p>由非欧盟国家进入意大利或从意大利前往非欧盟国家需遵循以下规定：</p>
                <p>1、有关携带消费品入出境的规定</p>
                <p>【入境】</p>
                <p>
                    进入意大利时，旅客在个人行李中携带的消费品可免关税，但此类物品不得具有贸易进口性质，其总价值不得超过175欧元。15岁以下未成年人携带物品最高限额为90欧元。<br/>
                    另外对某些特定商品(酒类、烟草等)，旅客可携带的免税商品数量限制如下：
                </p>
                <p>1.烟草类：可携带下列四项中的一种<br/>
                    (1)香烟200支<br/>
                    (2)卷烟(每支重量不超过3克的雪茄)100支<br/>
                    (3)雪茄50支<br/>
                    (4)烟草250克
                </p>
                <p>2.酒精饮料类：可携带下列两项中的一种<br/>
                    (1)超过22度的蒸馏、酒精饮料或纯度超过80%的非变性酒精1升<br/>
                    (2)等于或小于22度的蒸馏或酒精饮料、开胃葡萄酒、香槟、烈性葡萄酒2升以及低度葡萄酒2升
                </p>
                <p>3.香水类：香水50克、清新剂250毫升</p>
                <p>4.咖啡类：可携带下列两项中的一种<br/>
                    (1)咖啡500克<br/>
                    (2)咖啡精或浓缩咖啡200克
                </p>
                <p>5.茶类：可携带下列两项中的一种<br/>
                    (1)茶叶100克<br/>
                    (2)茶精40克
                </p>
                <p>上述物品不被计算在175欧元的免税物品中。</p>
                <p>【出境】</p>
                <p>
                    意大利对出境商品无任何价值限制，但应遵守目的地国的有关规定。<br/>
                    凡居住在非欧盟国家旅客在意大利购买的商品享有减免增殖税优惠，但需满足以下条件：
                </p>
                <p>1.商品价格在155欧元以上(含增值税)；</p>
                <p>2.商品仅供个人或家庭使用，并携带在旅客的个人行李中；</p>
                <p>3.商品发票上写明商品的名称、旅客的个人资料及其护照或其他旅行证件的详细情况；</p>
                <p>4.商品在购买之日起三个月内离开欧盟区；</p>
                <p>5.旅客应将申请减免税的商品及发票一并送至欧盟海关出境办公室，该办公室会在发票上加盖海关签证(VISTO DOGANALE)，以证明该商品将出境；</p>
                <p>6.在最终离开欧盟前将加盖海关签证的发票交付专门负责办理减免增值税业务的公司，这些公司将以现金或转帐的形式退还旅客增值税。</p>
                <p>减免增值税的商品不一定由旅客随身携带出境，也可通过航空公司托运至目的地。在这种情况下，运输公司会给旅客开具一份航空运输证明(LTA)。</p>
                <p>办妥托运手续后，海关出境办公室在核实以下情况均属实的条件下，才会加盖海关签证：</p>
                <p>1.航空运输证明与商家开具的发票对商品的描述一致；</p>
                <p>2.商品的寄件人与收件人一致；</p>
                <p>3.航空运输证明与商家开具的发票上注明的旅客本人的身份资料(护照或其他同等效力的证件)一致。</p>
            </div>
            <a class="display open" @click="toggleContent('italy')">展开全部</a>
            <a class="display close" @click="toggleContent('italy')">收起</a>
        </div>
        <div class="block" :class="{opened:opened.china}">
            <div class="title">中国海关出入境规定</div>
            <div class="sub-title">以下为摘要，具体海关出入境规定请见中华人民共和国海关总署网站：www.customs.gov.cn</div>
            <div class="content">
                <p>在海关监管场所，海关设置“申报”通道（又称“红色通道”）和“无申报”通道（又称“绿色通道”）供进出境旅客选择。海关在通道内设置专用申报台供旅客办理有关进出境物品的申报手续。</p>

                <p>
                    下列进境旅客应向海关申报，并将申报单证交由海关办理物品进境手续；
                    携带需经海关征税或限量免税的《旅客进出境行李物品分类表》第二、三类物品（不含免税限量内的烟酒）者；
                    携带人民币现钞6000元以上，或金银及其制品50克以上者；
                    居民旅客携带外币现钞折合1000美元以上者；
                    携带货物、货样以及携带物品超出旅客个人自用行李物品范围者；
                    携带中国检疫法规规定管制的动、植物及其产品以及其它须办理验放手续的物品者。
                </p>
                <p>
                    下列出境旅客应向海关申报，并将申报单证交由海关办理物品出境手续：
                    携带需复带进境的照相机、便携式收录音机、小型摄影机、手提式摄录机、手提式文字处理机等旅行自用物品者；
                    未将应复带出境物品原物带出或携带进境的暂时免税物品未办结海关手续者；
                    携带外币、金银及其制品未取得有关出境许可证是或超出本次进境申报数额者；
                    携带人民币现钞6000元以上者；
                    携带文物者；
                    携带货物、货样者；
                    携带出境物品超出海关规定的限值、限量或其它限制规定范围的；
                    携带中国检疫法规规定管制的动、植物及其产品以及其它须办理验放手续的物品者。
                </p>
                <p>
                    旅客进出境行李物品分类表:
                </p>
                <table style="text-align: center">
                    <tr>
                        <td style="width: 33%;">第一类物品</td>
                        <td style="width: 33%;">第二类物品</td>
                        <td style="width: 34%;">第三类物品</td>
                    </tr>
                    <tr>
                        <td>衣料、衣着、鞋、帽、工艺美术品和价值人民币1000元以下（含1000元）的其它生活用品</td>
                        <td>
                            烟草制品<br/>
                            酒精饮料
                        </td>
                        <td>价值人民币1000元以上，5000元以下（含5000元）的生活用品</td>
                    </tr>
                </table>
                <p>
                    注：<br/>
                    1)	本表所称进境物品价值以海关审定的完税价格为准，出境物品价值以国内法定商业发票所列价格为准；<br/>
                    2)	准许各类旅客携运本表所列物品进出境的具体征、免税限量由中华人民共和国海关总署另行规定；<br/>
                    3)	本表第一、二类列名物品不再按值归类、除另有规定者外，超出本表所列最高限值的物品不视为旅客行李物品。<br/>
                </p>

                <p>
                    免税额度:<br/>
                    进境居民旅客携带在境外获取的个人自用物品，总值在5000元人民币以内（含5000元）的，海关予以免税放行，单一品种限自用、合理数量。另进境旅客可免税携带香烟400支，或雪茄100支，或烟丝500克；以及12度以上酒精饮料限2瓶（1.5升以下）。但国家规定应当征税的20种商品等另按有关规定办理。
                </p>
                <p>
                    中华人民共和国禁止进出境物品表:<br/>
                    1)	禁止进境物品<br/>
                    各种武器、仿真武器、弹药及爆炸物品；
                    伪造的货币及伪造的有价证券；
                    对中国政治、经济、文化、道德有害的印刷品、胶卷、照片、唱片、影片、录音带、录像带、激光视盘、计算机存储介质及其它物品；
                    各种烈性毒药；
                    鸦片、吗啡、海洛英、大麻以及其它能使人成瘾的麻醉品、精神药物；
                    带有危险性病菌、害虫及其它有害生物的动物、植物及其产品；
                    有碍人畜健康的、来自疫区的以及其它能传播疾病的食品、药品或其它物品。<br/>
                    2)	禁止出境物品<br/>
                    列入禁止进境范围的所有物品；
                    内容涉及国家秘密的手稿、印刷品、胶卷、照片、唱片、影片、录音带、录像带、激光视盘、计算机存储介质及其它物品；
                    珍贵文物及其它禁止出境的文体；
                    濒危的和珍贵的动物、植物（均含标本）及其种子和繁殖材料。

                </p>
                <p>
                    中华人民共和国限制进出境物品表:<br/>
                    1)	限制进境物品
                    无线电收发信机、通信保密机；
                    烟、酒；
                    濒危的和珍贵的动物、植物（均含标本）及其种子和繁殖材料；
                    国家货币；
                    海关限制进境的其它物品。<br/>
                    2)	限制出境物品<br/>
                    金银等贵重金属及其制品；
                    国家货币；
                    外币及其有价证券；
                    无线电收发信机、通信保密机；
                    贵重中药材；
                    一般文物；
                    海关限制出境的其它物品。
                </p>
            </div>
            <!--<div class="sub-title">限制出境物品</div>-->
            <!--<div class="content">-->
            <!--<p>１、金银等贵重金属及其制品；</p>-->
            <!--<p>２、国家货币；</p>-->
            <!--<p>３、外币及其有价证券；</p>-->
            <!--<p>４、无线电收发信机、通信保密机；</p>-->
            <!--<p>５、贵重中药材；</p>-->
            <!--<p>６、一般文物；</p>-->
            <!--<p>７、海关限制出境的其它物品。</p>-->
            <!--</div>-->
            <a class="display open" @click="toggleContent('china')">展开全部</a>
            <a class="display close" @click="toggleContent('china')">收起</a>
        </div>
    </div>
</template>
<script>
    import formUtils from "utils/form"
    import {Indicator, Toast} from 'mint-ui';

    export default {
        data() {
            return {
                transitData: {
                    Depart: [
                        {hasData: false},
                        {hasData: false},
                        {hasData: false},
                        {hasData: false}
                    ],
                    Return: [
                        {hasData: false},
                        {hasData: false},
                        {hasData: false},
                        {hasData: false}
                    ],
                },
                opened: {
                    hb: false,
                    ty: false,
                    ss: false,
                    xl: false,
                    italy: false,
                    china: false,
                }
            }
        },
        created() {
            if (this.$route.query.title) {
                document.title = this.$route.query.title;
            }
            this.getTransitInfo();
        },
        computed: {
            hasDepart() {
                for (let i of this.transitData.Depart) {
                    console.log(i.hasData);
                    if (i.hasData) {
                        return true;
                    }
                }
            },
            hasReturn() {
                for (let i of this.transitData.Return) {
                    if (i.hasData) {
                        return true;
                    }
                }
            }
        },
        methods: {
            checkLogin() {
                if (!this.user) {
                    this.$cookie.set('__redirect', this.$route.fullPath)
                    this.$router.push({
                        name: 'portal',
                        query: {
                            mid: this.meeting.id
                        }
                    })
                }
            },
            getTransitInfo() {
                this.checkLogin();
                let self = this;
                this.$http.post('register/getRegInfo', {
                    child_id: self.child_id
                }).then(function (response) {
                    let ret = response.body;
                    if (ret.err == 0 && ret.res.formList) {
                        for (let form of ret.res.formList) {
                            if (form.name == 'Transit') {
                                for (let ele of form.value.elements) {

                                    let labelArr = ele.label.split('_');
                                    let type = labelArr[0];
                                    let index = parseInt(labelArr[1]) - 1;
                                    let key = labelArr[2];
                                    if (this.transitData[type] && this.transitData[type][index]) {
                                        let v = this.getItemText(ele);
                                        this.transitData[type][index][key] = v;
                                        if (v) {
                                            this.transitData[type][index].hasData = true;
                                        }
                                    }
                                }
                                console.log(this.transitData);
                                break;
                            }
                        }
                    } else {
                        Toast(ret.msg);
                    }
                }).finally(() => {
                    this.$store.commit('SPIN', false)
                })
            },
            getItemText(el) {
                //translate options to text
                if (el.options) {
                    let values = [].concat(el.value);
                    let texts = []
                    for (let option of el.options) {
                        if (values.indexOf(option.value) > -1) {
                            texts = texts.concat(option.text)
                        }
                    }
                    return texts.join(",");
                }
                if (el.type == 'paragraph') {
                    return marked(el.text, {sanitize: true})
                }
                if (el.type == 'photo_uploader') {
                    return '<img src="' + el.attachment.url + '" />';
                }
                return el.value
            },
            toggleContent(n) {
                this.opened[n] = !this.opened[n];
            },
        }
    }
</script>
<style lang="less" scoped>
    @import "../assets/style.less";

    @ori-green80: rgba(128, 167, 0, 0.8);
    @ori-green50: rgba(128, 167, 0, 0.5);
    @ori-green20: rgba(128, 167, 0, 0.2);
    @ori-blue: #3B8BD4;
    @ori-blue80: rgba(59, 139, 212, 0.8);
    @ori-blue50: rgba(59, 139, 212, 0.5);
    @ori-blue20: rgba(59, 139, 212, 0.2);

    .mt-container {
        color: #333;
    }

    .type {
        background-image: url("../assets/flight_go.png");
        background-position: left center;
        background-size: contain;
        background-repeat: no-repeat;
        height: 24px;
        line-height: 24px;
        padding-left: 30px;
        font-size: 16px;
        color: @ori-green;
        margin-bottom: -10px;
    }

    .date {
        padding: 25px 24px 10px 24px;
        position: relative;
        color: #666;
        &:before {
            content: '';
            display: block;
            position: absolute;
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background-color: @ori-green;
            left: 11px;
            top: 64%;
            transform: translate(-50%, -50%);
        }
        &:after {
            content: '';
            display: block;
            position: absolute;
            top: -5px;
            bottom: 0;
            left: 10px;
            border-right: 2px dotted @ori-green50;
            opacity: 0.5;
            margin-top: 4px;
        }
    }

    .timeBox {
        padding: 18px 6%;
        border: 1px solid @ori-green20;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        .start, .duration, .end {
            float: left;
            width: 38%;
        }
        .duration {
            width: 24%;
            padding: 4px 0;
            background: url('../assets/arrow.png') right bottom no-repeat;
            background-size: contain;
            margin-top: 12px;
        }
        .time {
            font-size: 32px;
            text-align: center;
            position: relative;
            .station {
                font-size: 12px;
                margin-top: 5px;
                color: #666;
            }
            .p {
                position: absolute;
                top: -10px;
                right: -6px;
                font-size: 12px;
                color: #999;
            }
        }
        &:after {
            content: '';
            display: block;
            clear: both;
        }
    }

    .flightInfo {
        background-color: @ori-green80;
        color: #fff;
        opacity: 0.8;
        padding: 12px 15px;
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;
    }

    .tour {
        margin-bottom: 30px;
        .phase {
            &:first-child {
                .date {
                    &:after {
                        top: 64%;
                    }
                }
            }
        }
        &.return {
            .type {
                color: @ori-blue;
                background-image: url("../assets/flight_back.png");
            }
            .date {
                &:before {
                    background-color: @ori-blue;
                }
                &:after {
                    border-right: 2px dotted @ori-blue50;
                }
            }
            .timeBox {
                border: 1px solid @ori-blue20;
            }
            .flightInfo {
                background-color: @ori-blue80;
            }
        }
    }

    .block {
        position: relative;
        height: 280px;
        overflow: hidden;
        .display {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 80px;
            background-image: linear-gradient(0deg, #FFFFFF 0%, #FFFFFF 30%, rgba(255, 255, 255, 0.00) 100%);
            padding-top: 40px;
            text-align: center;
            &.open {
                display: block;
            }
            &.close {
                display: none;
            }
        }
        &.opened {
            height: auto;
            padding-bottom: 3em;
            .display {
                &.open {
                    display: none;
                }
                &.close {
                    display: block;
                }
            }
        }
    }

</style>
