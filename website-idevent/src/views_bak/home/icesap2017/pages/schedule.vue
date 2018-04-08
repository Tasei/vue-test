<template>
    <div class="mt-schedule">
        <template v-for="day in schedule">
            <div class="mt-title">
                {{day.title}}
                <div v-if="day.addr">{{day.addr}}</div>
            </div>
            <div class="info" v-html="day.info"></div>
            <div v-for="item in day.list" class="cell">
                <div class="cell__hd">{{item.time}}</div>
                <div class="cell__bd">
                    <div class="title">{{item.title}}</div>
                    <div class="guest" v-html="item.guest"></div>
                    <div class="content" v-for="r in item.content">
                        <div class="t">{{r.title}}</div>
                        <p v-for="line in r.content" v-html="line"></p>
                        <p class="">{{r.tip}}</p>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
    export default{
        locales: {
            en: {
                schedule: [
                    {//
                        title: 'WEDNESDAY 6 SEPTEMBER – W SHANGHAI - THE BUND',
                        info: 'The Leaders’ Forums will be run by our industry’s leading thought leaders from Client side, Agency side, and Partner/Supplier side. They will be run simultaneously and under Chatham House rules.',
                        list: [
                            {
                                time: '09:00–14:00',
                                title: 'Registration and Coffee',
                            },
                            {
                                time: '14:00–16:00',
                                title: 'Leaders’ Forums',
                                content: [
                                    {
                                        title: 'A: Leaders’ Forum – Corporate Delegates',
                                        content: [
                                            'Moderators:',
                                            'Aileen London, <br />Senior Manager, Global Meeting Services, Oracle',
                                            'Georgie Farmer, <br />Group Manager, Global Travel, Meetings/Events, Microsoft',
                                            'Bert Li, <br />Associate Director of Event Production, Amway China',
                                            'Vivian Chai, <br />Senior Manager, Global Procurement, Lenovo Group',
                                        ],
                                        tip: '* This session is a closed session, only corporate delegates will be admitted.',

                                    },
                                    {
                                        title: 'B: Leaders’ Forum – Agency Delegates',
                                        content: [
                                            'Moderators:',
                                            'Selina Chavry，<br />Global Managing Director, Pacific World',
                                            'David Litteken, <br />Vice President, Asia Pacific Region, BI Worldwide',
                                            'Oscar Cerezales, <br />Chief Operating Officer, Asia Pacific, MCI ',
                                            'Albert Cao, <br />Vice President /Shanghai General Manager, AcrossChina Communication',
                                            'Albert Lee, <br />Executive Director, Overseas BusinessDevelopment, CYTS-Linkage Public Relations Consulting',
                                        ],
                                        tip: '* This session is a closed session, only agency delegates will be admitted.',
                                    },
                                    {
                                        title: 'C: Leaders’ Forum – Partner Delegates',
                                        content: [
                                            'Moderators',
                                            'Carol Chung, <br />Vice President, Global Sales, Greater China, Marriott International',
                                            'Bobby Ong, <br />Vice President, Sales, Distribution, Marketing & Loyalty, AccorHotels',
                                            'Belinda Goh, <br />Vice President, Sales and Marketing, Jin Jiang Premier Hotels',
                                        ],
                                        tip: '* This session is a closed session, only partner delegates will be admitted.',
                                    }
                                ]
                            },
                            {
                                time: '16:00-17:00',
                                title: 'Combined Leaders\' Forums Feedback andSharing Session',
                                guest: 'The Leaders\' Forums will conclude with a joint session where the moderators will bring to the combined group the findings of their sessions and seek agreement by popular vote on an implementation plan or further investigation steps required.',
                            },
                            {
                                time: '18:30–20:30',
                                title: 'Welcome Cocktail Reception',
                                guest: 'Meet and network with some of APACs most prominent agencies, clients and suppliers.',
                            },

                        ]
                    },
                    {
                        title: 'THURSDAY 7 SEPTEMBER – W SHANGHAI – THE BUND',
                        list: [
                            {
                                time: '08:00–09:00',
                                title: 'Registration & Networking',
                            },
                            {
                                time: '09:00–09:05',
                                title: 'M.C. Opening',
                            },
                            {
                                time: '09:05–09:10',
                                title: 'President & Regional VP Welcome',
                                content: [
                                    {
                                        title: '',
                                        content: [
                                            'Nigel Gaunt, President, ICESAP',
                                            'Alicia Yao, Regional Vice President, ICESAP',
                                        ],
                                    }
                                ]
                            },
                            {
                                time: '09:10–09:15',
                                title: 'Opening Welcome',
                                guest: 'Dr. Sun Weijia, Director General, Counsellors’ Office of the StateCouncil',
                            },
                            {
                                time: '09:15–09:20',
                                title: 'Opening Remarks',
                                guest: 'Christian Humbert,General Manager, W Shanghai – The Bund'
                            },
                            {
                                time: '09:20–09:25',
                                title: 'Opening Remarks',
                                guest: 'Albert Guo, President & Director Member – Bravolinks Integrated Marketing, China MICE Committee',
                            },
                            {
                                time: '09:25–10:10',
                                title: 'KeynoteAddress: Make the “Belt and Road” a Route to Global Tourism and MICE Prosperity',
                                guest: 'Dr. Sun Weijia, Director General, Counsellors’Office of the State Council',
                            },
                            {
                                time: '10:10–11:00',
                                title: 'Straight from the Customer - China Market Opportunities',
                                content: [
                                    {
                                        title: 'Panelists:',
                                        content: [
                                            'Vivian Chai,<br />Senior Manager, Global Procurement, Lenovo Group',
                                            'Jason Yin, <br />Director and GeneralManager, Ergo-China Life Insurance',
                                            'Justine Zhou, <br />AssociateDirector, Meeting Services China, Merck',
                                            'Bert Li,<br />Associate Director of Event Production, Amway China'
                                        ],
                                    },
                                    {
                                        title: 'Moderated by:',
                                        content: [
                                            'Julien Delerue, <br />General Manager, 1000Meetings'
                                        ],
                                    },
                                ]
                            },
                            {
                                time: '11:00–11:30',
                                title: 'Networking and Morning Refreshments',
                            },
                            {
                                time: '11:30–12:15',
                                title: 'Data Privacy and Protection Panel Session',
                                guest: 'Isabelle Hajjar, General Counsel, Compliance and Data Privacy Officer, Pivot88<br />Rona Morgan, Managing Director, International Association of Privacy Professionals<br />Geff Brown, Associate General Counsel, Microsoft',
                            },
                            {
                                time: '12:15–12:45',
                                title: 'Skills of the Future – Professional Development Needed Today',
                                content: [
                                    {
                                        title: 'Panelists:',
                                        content: [
                                            'Megan Harris, <br />CorporateTrainer and Head, Sales and Marketing, William Angliss Institute',
                                            'JackYao, <br />Secretary General, CCPITCommercial Sub-council CCOIC Commercial Chamber of Commerce',
                                        ],
                                    },
                                    {
                                        title: '主持人：',
                                        content: [
                                            'Michelle Crowley，<br />Senior Director, Global Strategy,PCMA'
                                        ],
                                    },
                                ]
                            },
                            {
                                time: '12:45–13:50',
                                title: 'Networking Lunch',
                            },
                            {
                                time: '13:45–13:50',
                                title: 'M.C. Remarks',
                            },
                            {
                                time: '13:50–14:30',
                                title: 'Environmental Sustainability – What’s New, What’s Next?',
                                content: [
                                    {
                                        title: 'Panelists:',
                                        content: [
                                            'Sam Stephens, <br />ExecutiveDirector / Chief Executive, Clean the World',
                                            'Alison Taylor, <br />SeniorVice President of Global Sales and Distribution, American Airlines',
                                            'Kevin Teng, <br />Executive Director - Sustainability, Marina Bay Sands',
                                        ],
                                    },
                                    {
                                        title: 'Moderated by:',
                                        content: [
                                            'Robin Lokerman, <br />Group President, MCI',
                                        ],
                                    },
                                ]
                            },
                            {
                                time: '14:30–15:15',
                                title: 'Virtual Reality/Augmented Reality: EnhancingBrand Experience',
                                guest: 'Lars Bratsberg, Industry Leader, Agency, Google',
                            },
                            {
                                time: '15:15–15:45',
                                title: 'Networking & Afternoon Refreshments',
                            },
                            {
                                time: '15:45–16:30',
                                title: 'Keynote Address: The Power of Partnerships',
                                guest: '',
                                content: [
                                    {
                                        title: '',
                                        content: [
                                            'Stephen Ho,Chief Executive Officer, Greater China, MarriottInternational<br />',
                                            'SelinaChavry,Global Managing Director, Pacific World<br />',
                                            'Moderatedby:<br />Sherrif Karamat,Chief Operating Officer, PCMA'
                                        ],
                                    },
                                ],
                            },
                            {
                                time: '16:30–17:00',
                                title: 'Future Focused – What’s To Come',
                                content: [
                                    {
                                        title: '',
                                        content: [
                                            'Oscar Cerezales, <br />ChiefOperating Officer, Asia Pacific, MCI',
                                            'Sherrif Karamat,<br />Chief Operating Officer, PCMA',
                                            'NigelGaunt, <br />President, ICESAP'
                                        ],
                                    },
                                ],
                            },
                            {
                                time: '17:00–19:00',
                                title: 'The Time is Yours!',
                            },
                            {
                                time: '19:00–19:30',
                                title: 'Cocktails and Networking',
                                guest: 'ICESAP welcome all guests to network and relax ahead of the Gala Dinner.',
                            },
                            {
                                time: '19:30–22:30',
                                title: 'Gala Dinner',
                                guest: 'A celebration dinner at the W Shanghai – The Bund. An elegant evening of fine food, great entertainment and a chance to network and celebrate our member fellowship and ICESAP achievements in style. This will be followed by an after-party.',
                            },
                        ]
                    },
                    {
                        title: 'FRIDAY 8 SEPTEMBER – W SHANGHAI – THE BUND',
                        info: 'There will be three practical and educational workshops led by three global agencies.Delegates will be divided into groups and will each be able to attend all three workshops.<br />' +
                        'Innovation Workshop Topics: <br />' +
                        '<div class="info-title">Topic #1 : I Never Thought Of That</div>' +
                        '<strong>Antoine Gouin</strong>, Managing Director, Auditoire Greater China<br />' +
                        'No matter how exceptional the food, breathtaking the performance or inspirational the keynote, it can still be a challenge to make your event a real experience. The workshop aims to explore and look at the event from an experiential perspective. The session will be interactive and case based.<br />' +
                        '<div class="info-title">Topic #2 : Going BeyondThe Event Brief</div>' +
                        'A case of integrated marketing services<br />' +
                        '<strong>Jun Gonzales</strong>, Vice President and Managing Director, GeorgeP. Johnson<br />' +
                        'Everyday, event marketers face the challenge of responding to various event briefs, giving each one a new twist to satisfy the requirements of the clients. However, how much dances, songs, projection mappings, and fireworks can we give to create a so-called “big bang” for our clients? And is this what they really need to create a lasting impression of their brand? <br />' +
                        'In this session, we shall attempt to deconstruct a brief and get into the mind of the brand, find what it needs, what it wants, instead of limiting ourselves to satisfy the owners of the brand. No, we are not going to be introducing another marketing technique as we already have too much of these. Instead, we shall use one specific successful case to demonstrate how much more event marketers can bring life toa brand by tearing apart the client brief, and using existing marketing tools to achieve a maximum effect.' +
                        '<div class="info-title">Topic #3 : ChinaDestination Management Innovation</div>' +
                        '<strong>Erica Hegarty</strong>, Head of Sales, Asia Pacific, Pacific World<br />' +
                        '<strong>Violet Wang</strong>, Destination Manager, Shanghai, Pacific World<br />' +
                        'Sharing the evolution of China DMCs from the past to the present, the workshop will lead the conversation towards the future of destination services in terms of innovation on meetings & event technology,expectations and market trends. The session will share what meeting planner sand delegates coming to China should expect especially when they are not familiar with the destination.<br />',
                        list: [
                            {
                                time: '08:30–09:00',
                                title: 'Registration and Coffee',
                            },
                            {
                                time: '09:00–10:00',
                                title: '3x Innovation workshops – Cycle A',
                            },
                            {
                                time: '10:00–10:15',
                                title: ' Networkingand Refreshments',
                            },
                            {
                                time: '10:15–11:15',
                                title: '3x Innovation workshops – Cycle B',
                            },
                            {
                                time: '11:15–11:30',
                                title: 'Networking and Refreshments',
                            },
                            {
                                time: '11:30–12:30',
                                title: '3x Innovation workshops – Cycle C',
                            },
                            {
                                time: '12:30 onwards',
                                title: 'Onwards  Departures ',
                            },
                        ]
                    }
                ],
            },
            zh: {
                schedule: [
                    {
                        title: '领袖论坛: 2017年9月6日 星期三',
                        addr: '上海外滩w酒店',
                        info: '领袖论坛将分成三个部分，分别由企业、会奖及活动公司、合作伙伴三个不同行业组成的专业嘉宾担任演讲嘉宾。领袖论坛将全程提供同声传译服务。',
                        list: [
                            {
                                time: '09:00–14:00',
                                title: '注册及欢迎茶歇',
                            },
                            {
                                time: '14:00–16:00',
                                title: '领袖论坛',
                                content: [
                                    {
                                        title: 'A: 领袖论坛–企业嘉宾',
                                        content: [
                                            '演讲嘉宾:',
                                            'Aileen London, <br />甲骨文 全球会议服务 高级经理',
                                            'Georgie Farmer, <br />微软 全球差旅及会议活动 团队经理',
                                            'Bert Li, <br />安利（中国） 活动管理 副总监',
                                            '柴杰，<br />联想集团全球采购部高级经理'
                                        ],
                                        tip: '*仅限企业嘉宾参与此论坛。',

                                    },
                                    {
                                        title: 'B: 领袖论坛– 会奖及活动公司嘉宾',
                                        content: [
                                            '演讲嘉宾:',
                                            'Selina Chavry，<br />百事活 全球执行董事',
                                            'David Litteken, <br />毕蔼 亚太区副总裁',
                                            'Oscar Cerezales, <br />迈氏会展服务有限公司亚太区首席运营官',
                                            '曹祖峰，<br />信诺传播副总裁，上海分公司总经理',
                                            '李耀贤，<br />中青旅联科（北京）公关顾问有限公司资深海外业务发展总监'
                                        ],
                                        tip: '*仅限会奖及活动公司嘉宾参与此论坛。',
                                    },
                                    {
                                        title: 'C: 领袖论坛–合作伙伴嘉宾',
                                        content: [
                                            '演讲嘉宾:',
                                            'Carol Chung, <br />万豪国际 大中华区 全球销售 副总裁',
                                            'Bobby Ong, <br />雅高集团 市场、销售及客户忠诚度<br />副总裁',
                                        ],
                                        tip: '*仅限合作伙伴嘉宾参与此论坛。',
                                    }
                                ]
                            },
                            {
                                time: '16:00-17:00',
                                title: '领袖论坛会议成果交流分享',
                                guest: '三个领袖论坛将在此期间召开联合会议，各分论坛的主持人将会就分论坛投票选出的最受欢迎的行业解决方案及未来发展趋势进行整理公布。',
                            },
                            {
                                time: '18:30–20:30',
                                title: '欢迎酒会',
                                guest: '这是与亚太区最重要的会奖及活动公司嘉宾、企业嘉宾和合作伙伴们进行社交活动的重要途径。',
                            },

                        ]
                    },
                    {
                        title: 'ICESAP大会: 2017年9月7日 星期四',
                        addr: '上海外滩W酒店',
                        list: [
                            {
                                time: '08:00–09:00',
                                title: '年会注册',
                            },
                            {
                                time: '09:00–09:05',
                                title: '主持人宣布大会正式开始',
                            },
                            {
                                time: '09:05–09:10',
                                title: '亚太会奖及活动年会 - 主席致开幕词',
                                content: [
                                    {
                                        title: '',
                                        content: [
                                            'Nigel Gaunt, ICESAP主席',
                                            '姚红，ICESAP,区域副主席',
                                        ],
                                    }
                                ]
                            },
                            {
                                time: '09:10–09:15',
                                title: '开幕致词',
                                guest: '孙维佳，国务院参事室国际交流司司长',
                            },
                            {
                                time: '09:15–09:20',
                                title: '开幕致词',
                                guest: 'Christian Humbert, 上海外滩W酒店总经理',
                            },
                            {
                                time: '09:20–09:25',
                                title: '开幕致词',
                                guest: '郭俊华，中国旅行社协会会奖专业委员会主任会员',
                            },
                            {
                                time: '09:25–10:10',
                                title: '主题演讲: 将一带一路打造成旅游和会展活动产业繁荣发展之路',
                                guest: '孙维佳, 国务院参事室国际交流司司长',
                            },
                            {
                                time: '10:10–11:00',
                                title: '中国企业客户分组讨论——中国市场的机遇与挑战(中国客户的视角）',
                                content: [
                                    {
                                        title: '分组论坛嘉宾:',
                                        content: [
                                            '柴杰,<br />联想集团全球采购部高级经理',
                                            'Jason Yin, <br />德华安顾人寿保险有限公司总经理',
                                            'Justine Zhou,<br />默克中国会议服务副总监',
                                            'Bert Li, <br />安利（中国）活动管理副总监'
                                        ],
                                    },
                                    {
                                        title: '主持人：',
                                        content: [
                                            'Julien Delerue,<br />1000Meetings总经理'
                                        ],
                                    },
                                ]
                            },
                            {
                                time: '11:00–11:30',
                                title: '交流茶歇',
                            },
                            {
                                time: '11:30–12:15',
                                title: '数据隐私及保护',
                                guest: 'Isabelle Hajjar, Pivot88总法律顾问、合规及数据隐私保护官<br />Rona Morgan, 国际隐私保护专家协会常务秘书长<br />Geff Brown, 微软副总法律顾问',
                            },
                            {
                                time: '12:15–12:45',
                                title: '专业发展所需的必备技能',
                                content: [
                                    {
                                        title: '分组论坛嘉宾:',
                                        content: [
                                            'Megan Harris, <br />威廉安格力斯学院 企业培训师及市场销售负责人',
                                            '姚歆，<br />中国国际贸易促进委员会商业行业分会秘书长',
                                        ],
                                    },
                                    {
                                        title: '主持人：',
                                        content: [
                                            'Michelle Crowley，<br />PCMA全球战略高级总监'
                                        ],
                                    },
                                ]
                            },
                            {
                                time: '12:45–13:50',
                                title: '交流午餐',
                            },
                            {
                                time: '13:45–13:50',
                                title: '主持人宣布会议开始',
                            },
                            {
                                time: '13:50–14:30',
                                title: '环境的可持续性——未来新的发展趋势',
                                content: [
                                    {
                                        title: '分组论坛嘉宾:',
                                        content: [
                                            'Sam Stephens, <br />净化世界组织（Clean the World）执行董事、首席执行官',
                                            'AlisonTaylor, <br />美国航空，全球销售高级副总裁',
                                            'Kevin Teng, <br />新加坡滨海湾金沙可持续发展常务董事',
                                        ],
                                    },
                                    {
                                        title: '主持人：',
                                        content: [
                                            'Robin Lokerman, <br />MCI集团总裁'
                                        ],
                                    },
                                ]
                            },
                            {
                                time: '14:30–15:15',
                                title: '虚拟现实、增强现实技术: 增强品牌体验',
                                guest: 'Lars Bratsberg, 谷歌, 行业领导',
                            },
                            {
                                time: '15:15–15:45',
                                title: '茶歇',
                            },
                            {
                                time: '15:45–16:30',
                                title: '主题演讲：合作伙伴的力量',
                                content:[
                                    {
                                        title: '',
                                        content: [
                                            'Stephen Ho, 万豪国际大中华区首席执行官<br />',
                                            'Selina Chavry, 百事活全球执行董事 <br />',
                                            '主持人:<br />Sherrif Karamat, PCMA首席运营官'
                                        ],
                                    }
                                ]
                            },
                            {
                                time: '16:30–17:00',
                                title: '关注未来——行业发展趋势',
                                content: [
                                    {
                                        title: '',
                                        content: [
                                            'Oscar Cerezales，<br />MCI亚太区首席运营官，PCMA亚太区顾问委员会成员',
                                            'Sherrif Karamat, <br />PCMA首席运营官',
                                            'Nigel Gaunt，<br />ICESAP主席'
                                        ],
                                    },
                                ],
                            },
                            {
                                time: '17:00–19:00',
                                title: '自由讨论及休息时间',
                            },
                            {
                                time: '19:00–19:30',
                                title: '鸡尾酒会',
                                guest: 'ICESAP邀请所有参会代表参加这一晚宴前的休闲酒会。',
                            },
                            {
                                time: '19:30–22:30',
                                title: '大会晚宴',
                                guest: 'ICESAP年会的正式晚宴将在优雅秀美的外滩W酒店举办，之后还将为意犹未尽的嘉宾提供后续酒会。',
                            },
                        ]
                    },
                    {
                        title: '创新论坛: 2017年9月8日 星期五',
                        addr: '上海外滩W酒店',
                        info: '创新论坛将由三个全球知名的会奖、活动公司为嘉宾们带来不同的培训体验，嘉宾将分为3组，分时段参加三个不同的论坛。<br />' +
                        '创新论坛题目: <br />' +
                        '<div class="info-title">1. 我从未这样想过！– 奥德旺企业营销策划公司</div>' +
                        '<strong>Antoine Gouin</strong>, 奥德旺企业营销策划公司董事总经理<br />' +
                        '<div class="info-title">2. 超越活动本身的活动 – GPJ市场顾问有限公司</div>' +
                        '<strong>Jun Gonzales</strong>, GPJ市场顾问有限公司副总裁、总经理<br />' +
                        '<div class="info-title">3. 中国目的地管理创新 – 百事活会展服务有限公司</div>' +
                        '<strong>Erica Hegarty</strong>, 百事活亚太区销售总经理<br />' +
                        '<strong>Violet Wang</strong>, 百事活上海目的地管理经理',
                        list: [
                            {
                                time: '08:30–09:00',
                                title: '注册及欢迎茶歇',
                            },
                            {
                                time: '09:00–10:00',
                                title: '3个创新论坛– 第一轮',
                            },
                            {
                                time: '10:00–10:15',
                                title: '茶歇',
                            },
                            {
                                time: '10:15–11:15',
                                title: '3个创新论坛– 第二轮',
                            },
                            {
                                time: '11:15–11:30',
                                title: '茶歇',
                            },
                            {
                                time: '11:30–12:30',
                                title: '3个创新论坛– 第三轮',
                            },
                            {
                                time: '12:30 之后',
                                title: '嘉宾离开',
                            },
                        ]
                    }
                ],
            }
        },
        data() {
            return {
                schedule: this.$t('schedule'),
            }
        },
        mounted() {
            this.$store.commit('SPIN')
        }
    }
</script>
<style lang="less" scoped>
    .mt-schedule {
        padding: 20px 20px 60px 20px;
        font-size:14px;
        color: #000;
    }
    .cell {
        position: relative;
        display: flex;
        .cell__hd {
            /*
            color: #666;
            font-size: 14px;
            */
            line-height: 34/28;
            width: 8em;
        }
        .cell__bd {
            flex: 1;
            .title {
                /*
                color: #333;
                font-size: 14px;
                */
                line-height: 34/28;
                font-weight: 500;
            }
            .guest {
                /*
                font-size: 12px;
                color: #666;
                */
            }
            .content {
                margin-top: 10px;
                /*
                font-size: 12px;
                */
                .t {
                    margin: 12px 0 6px 0;
                    font-weight: 600;
                }
            }
            p {
                margin: 0 0 6px 0;
                &.clear {
                    margin: 0;
                }
                &.text-dark {
                    /*
                    color: #333!important;
                    */
                }
                &.text-gray {
                    /*
                    font-size: 12px;
                    color: #999;
                    */
                }
            }
        }
        margin-bottom: 15px;
    }
    .mt-title {
        display: block;
        border-radius: 1px;
        line-height: 150%;
        color: #fff;
        font-size: 14px;
        padding: 3px 11px;
        text-align: left;
        background: #006CB7;
        margin: 25px 0 10px;
        font-weight:bold;
        &:first-child {
            margin-top: 0;
        }
    }
    .info {
        /*
        font-size:12px;
        color: #999;
        */
        margin: 10px 0;
    }

</style>
<style lang="less">
    .info-title {
        color: #006CB7;
        font-size: 14px;
        font-weight: bold;
        margin: 5px 0;
    }
</style>
