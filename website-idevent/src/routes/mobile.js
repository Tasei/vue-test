export default [
    {
        path: '/',
        name: 'portal',
        // redirect: '/home/index',
        component: resolve => require(['../views_mobile/portal.vue'], resolve),
    },
    {
        path: '/login',
        name: 'login',
        // redirect: '/home/index',
        component: resolve => require(['../views_mobile/home/login.vue'], resolve),
    },
    {
        path: '/home',
        redirect: '/home/index',
        component: resolve => require(['../views_mobile/layout/home.vue'], resolve),
        children: [
            {
                path: 'index',
                name: 'home_index',
                component: resolve => require(['../views_mobile/home/index.vue'], resolve),
            },
            {
                path: 'qrcode',
                name: 'home_qrcode',
                component: resolve => require(['../views_mobile/home/qrcode.vue'], resolve),
            },
            {
                path: 'hotel',
                name: 'home_hotel',
                component: resolve => require(['../views_mobile/home/hotel.vue'], resolve),
            },
            {
                path: 'hotel/detail',
                name: 'home_hotel_detail',
                component: resolve => require(['../views_mobile/home/hotel_detail.vue'], resolve),
            },
            {
                path: 'page',
                name: 'home_page',
                component: resolve => require(['../views_mobile/home/page.vue'], resolve),
            },
        ]
    }, {
        path: '/register',
        component: resolve => require(['../views_mobile/layout/register.vue'], resolve),
        redirect: '/register/login',
        children: [{
            path: 'form',
            name: 'register_form',
            component: resolve => require(['../views_mobile/register/form2.vue'], resolve)
        },
            {
                path: 'usergroup',
                name: 'register_usergroup',
                component: resolve => require(['../views_mobile/register/usergroup.vue'], resolve),
            },
            {
                path: 'form2',
                name: 'register_form2',
                component: resolve => require(['../views_mobile/register/form2.vue'], resolve)
            },
            {
                path: 'form/:child_id',
                name: 'register_form_child',
                component: resolve => require(['../views_mobile/register/form2.vue'], resolve)
            },
            // {
            //     path: 'matchmaking',
            //     name: 'register_buyer',
            //     component: resolve => require(['../views_mobile/register/buyer.vue'], resolve),
            // },
            {
                path: 'hotel',
                name: 'register_hotel',
                component: resolve => require(['../views_mobile/register/hotel.vue'], resolve),
            },
            {
                path: 'activity',
                name: 'register_activity',
                component: resolve => require(['../views_mobile/register/activity.vue'], resolve),
            },
            {
                path: 'activity2',
                name: 'register_activity2',
                component: resolve => require(['../views_mobile/register/activity.vue'], resolve),
            },
            {
                path: 'goods',
                name: 'register_goods',
                component: resolve => require(['../views_mobile/register/goods.vue'], resolve),
            },
            {
                path: 'checkout',
                name: 'register_checkout',
                component: resolve => require(['../views_mobile/register/checkout.vue'], resolve),
            },
            {
                path: 'pay',
                name: 'register_pay',
                component: resolve => require(['../views_mobile/register/pay.vue'], resolve),
            },
            {
                path: 'complete',
                name: 'register_complete',
                component: resolve => require(['../views_mobile/register/complete.vue'], resolve),
            }, {
                path: 'group',
                name: 'register_group',
                component: resolve => require(['../views_mobile/register/group.vue'], resolve)
            }]
    },
    // {
    //     path: '/iphoto',
    //     component: resolve => require(['../views_mobile/layout/iphoto.vue'], resolve),
    //     children: [{
    //         path: '/',
    //         name: 'iphoto_home',
    //         component: resolve => require(['../views_mobile/iphoto/index.vue'], resolve),
    //     }, {
    //         path: 'me',
    //         name: 'iphoto_me',
    //         component: resolve => require(['../views_mobile/iphoto/me.vue'], resolve),
    //     }, {
    //         path: 'contact',
    //         name: 'iphoto_contact',
    //         component: resolve => require(['../views_mobile/iphoto/contact.vue'], resolve),
    //     }, {
    //         path: 'schedule',
    //         name: 'iphoto_schedule',
    //         component: resolve => require(['../views_mobile/iphoto/schedule.vue'], resolve),
    //     }, {
    //         path: 'schedule/:id',
    //         name: 'iphoto_schedule_detail',
    //         component: resolve => require(['../views_mobile/iphoto/schedule_detail.vue'], resolve),
    //     }]
    // },
    // {
    //     path: '/red_packet',
    //     component: resolve => require(['../views_mobile/layout/default.vue'], resolve),
    //     children: [{
    //         path: '/',
    //         name: 'red_packet_index',
    //         component: resolve => require(['../views_mobile/red_packet/index.vue'], resolve),
    //     }, {
    //         path: 'poker',
    //         name: 'red_packet_poker',
    //         component: resolve => require(['../views_mobile/red_packet/poker.vue'], resolve),
    //     }]
    // },
    // {
    //     path: '/award',
    //     component: resolve => require(['../views_mobile/layout/default.vue'], resolve),
    //     children: [{
    //         path: '/',
    //         name: 'award_index',
    //         component: resolve => require(['../views_mobile/award/index.vue'], resolve),
    //     }]
    // },
    // {
    //     path: '/shake',
    //     component: resolve => require(['../views_mobile/layout/default.vue'], resolve),
    //     children: [{
    //         path: '/',
    //         name: 'shake_index',
    //         component: resolve => require(['../views_mobile/shake/index.vue'], resolve),
    //     }, {
    //         path: 'chicken',
    //         name: 'shake_chicken',
    //         component: resolve => require(['../views_mobile/shake/chicken.vue'], resolve),
    //     }]
    // },
// {
//     path: '/custom',
//     component: resolve => require(['../views_mobile/layout/index.vue'], resolve),
//     children: [{
//         path: 'buick/map',
//         name: 'custom_buick_map',
//         component: resolve => require(['../views_mobile/custom/buick/map.vue'], resolve),
//     }, {
//         path: 'buick/schedule',
//         name: 'custom_buick_schedule',
//         component: resolve => require(['../views_mobile/custom/buick/schedule.vue'], resolve),
//     }]
// },
    {
        path: '/wall',
        component: resolve => require(['../views_mobile/layout/wall.vue'], resolve),
        children: [
        //     {
        //     path: 'shake',
        //     name: 'wall_shake',
        //     component: resolve => require(['../views_mobile/wall/shake.vue'], resolve),
        // },
        //     {
        //         path: 'lottery',
        //         name: 'wall_lottery',
        //         component: resolve => require(['../views_mobile/wall/lottery.vue'], resolve)
        //     },
            {
                path: 'lotterynew',
                name: 'wall_lotterynew',
                component: resolve => require(['../views_mobile/wall/lotterynew.vue'], resolve)
            },
            {
                path: 'lotteryflowerAnnual',
                name: 'wall_lotteryflowerAnnual',
                component: resolve => require(['../views_mobile/wall/lotteryflowerAnnual.vue'], resolve)
            },
            {
                path: 'lotteryford2018',
                name: 'wall_lotteryford2018',
                component: resolve => require(['../views_mobile/wall/lotteryford2018.vue'], resolve)
            },
            {
                path: 'lotterypoll',
                name: 'wall_lotterypoll',
                component: resolve => require(['../views_mobile/wall/lotterypoll.vue'], resolve)
            },
        //     {
        //     path: 'vote',
        //     name: 'wall_vote',
        //     component: resolve => require(['../views_mobile/wall/vote.vue'], resolve)
        // }, {
        //     path: 'shake_chicken',
        //     name: 'wall_shake_chicken',
        //     component: resolve => require(['../views_mobile/wall/shake_chicken.vue'], resolve)
        // }
        ]
    },
    // {
    //     path: '/public',
    //     component: resolve => require(['../views_mobile/layout/public.vue'], resolve),
    //     children: [{
    //         path: 'safari',
    //         name: 'public_safari',
    //         component: resolve => require(['../views_mobile/home/bg2017/pages/safari.vue'], resolve),
    //     }]
    // },
    // {
    //     path: '/activity/success',
    //     name: 'activity_success',
    //     component: resolve => require(['../views_bak/home/oculus2017/success.vue'], resolve)
    // },
    // {
    //     path: '/pc',
    //     component: resolve => require(['../views_mobile/layout/pc.vue'], resolve),
    //     children: [
    //         // {
    //         //     path: 'cpic/live',
    //         //     name: 'cpic_live',
    //         //     component: resolve => require(['../views_mobile/home/cpicInnovate/livePC.vue'], resolve)
    //         // },
    //         // {
    //         //     path: 'mg',
    //         //     name: 'pc_mg_home',
    //         //     component: resolve => require(['../views_mobile/pc/mg.vue'], resolve)
    //         // },
    //         // {
    //         //     path: 'mg/entry',
    //         //     name: 'pc_mg_entry',
    //         //     component: resolve => require(['../views_mobile/pc/mg_entry.vue'], resolve)
    //         // },
    //         // {
    //         //     path: 'login',
    //         //     name: 'pc_login',
    //         //     component: resolve => require(['../views_mobile/pc/login.vue'], resolve)
    //         // }
    //     ]
    // }
    ]
