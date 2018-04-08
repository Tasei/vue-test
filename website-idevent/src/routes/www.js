export default [{
    path: '/',
    component: resolve => require(['../views/Hello.vue'], resolve)
}, {
    path: '/register',
    component: resolve => require(['../views/layout/register.vue'], resolve),
    redirect: '/register/form',
    children: [{
        path: 'form',
        name: 'register_form',
        component: resolve => require(['../views/register/form.vue'], resolve)
    }, {
        path: 'activity',
        name: 'register_activity',
        component: resolve => require(['../views/register/activity.vue'], resolve),
    }, {
        path: 'restaurant',
        name: 'register_restaurant',
        component: resolve => require(['../views/register/restaurant.vue'], resolve),
    }, {
        path: 'flight',
        name: 'register_flight',
        component: resolve => require(['../views/register/flight.vue'], resolve),
    }, {
        path: 'hotel',
        name: 'register_hotel',
        component: resolve => require(['../views/register/hotel.vue'], resolve),
    }, {
        path: 'complete',
        name: 'register_receipt',
        component: resolve => require(['../views/register/complete.vue'], resolve),
    }, {
        path: 'pay',
        name: 'register_pay',
        component: resolve => require(['../views/register/pay.vue'], resolve),
    }, {
        path: 'order',
        name: 'register_checkout',
        component: resolve => require(['../views/register/order.vue'], resolve),
    }, {
        path: 'pay/redirect',
        name: 'register_pay_redirect',
        component: resolve => require(['../views/register/pay_redirect.vue'], resolve),
    }, {
        path: 'pay/success',
        name: 'register_pay_success',
        component: resolve => require(['../views/register/pay_success.vue'], resolve),
    }]
}, {
    path: '/register/login',
    name: 'register_login',
    component: resolve => require(['../views/register/login.vue'], resolve),
}]
