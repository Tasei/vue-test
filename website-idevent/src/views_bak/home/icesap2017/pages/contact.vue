<template>
    <div class="mt-container">
        <div class="block">
            <div class="title">{{$t('contact.title')}}</div>
            <template v-for="p in contact_list">
                <div class="sub-title">{{p.name}}</div>
                <p>{{p.position}}</p>
                <p>{{p.company}}</p>
                <p v-if="p.tel">{{$t('contact.tel')}}:
                    <a :href="'tel:'+p.tel">{{p.tel_show}}</a>
                </p>
                <p v-if="p.email">{{$t('contact.email')}}:
                    <a :href="'mailto:'+p.email">{{p.email}}</a>
                </p>
            </template>
        </div>
    </div>
</template>
<script>
    export default{
        mounted() {
            this.$store.commit('SPIN')
        },
        data() {
            return {
                contact_list: this.$t('contact.list'),
            }
        },
        locales: {
            en: {
                contact: {
                    title: 'Contact Us',
                    tel: 'Tel',
                    email: 'Email',
                    list: [{
                        name: "Philip Pang",
                        position: "Marketing and Membership Manager",
                        company: "Incentive, Conference and Event Society Asia Pacific",
                        tel_show: "+65 9362 5553",
                        tel: "+6593625553",
                        email: "philip.pang@icesap.org"
                    }],
                }
            },
            zh: {
                contact: {
                    title: '联系我们',
                    tel: '电话',
                    email: '电子邮件',
                    list: [{
                        name: "贾紫薇",
                        position: "高级经理",
                        company: "博悦咨询（北京）有限公司",
                        tel_show: "+86 134 3917 0856",
                        tel: "+8613439170856",
                        email: "olivia.jia@ime-consulting.com.cn"
                    }, {
                        name: "彭伟荣",
                        position: "会员推广经理",
                        company: "ICESAP",
                        tel_show: "+65 9362 5553",
                        tel: "+6593625553",
                        email: "philip.pang@icesap.org"
                    }, {
                        name: "王以香",
                        position: "技术支持",
                        company: "上海楷泰信息科技有限公司",
                        tel_show: "021-61425817",
                        tel: "02161425817",
                    }
                    ],
                }
            }
        },
    }
</script>
<style lang="less" scoped>
    @import "../assets/style";
    .block {
        .sub-title {
            font-size: 1.1em;
        }
    }
</style>
