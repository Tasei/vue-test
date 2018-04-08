<template>
    <div>
        <div class="bg"></div>
        <div class="fd-contact">
            <div class="hotel-contact">
                <h5 class="text-dark">{{$t('hotline')}}：</h5>
                <div class="item text-dark">
                    <a href="tel:021-61425836">021-61425836</a>
                    |
                    <a href="tel:021-61425817">021-61425817</a></div>
            </div>

            <div class="hotel-contact">
                <div class="item2 text-dark">{{$t('address')}}：<span class="text-gray">{{$t('address_info')}}</span></div>
                <div class="item2 text-dark">{{$t('zip')}}：<span class="text-gray">201103</span></div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        mounted() {
            this.$store.commit('SPIN', false)
        },
        locales: {
            en: {
                hotline: "Customer service hotline",
                address: "Address",
                address_info:"26/F, GIFC II No.1438 Hongqiao Road, Changning District, Shanghai, China",
                zip: "Postal code",
                email: "Email",
            },
            zh: {
                hotline: "客服热线",
                address: "地址",
                address_info:"中国上海市长宁区虹桥路1438号古北国际财富中心二期26层",
                zip: "邮编",
                email: "邮箱",
            }
        }
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    .bg {
        background: url("../../../assets/images/mobile/shedule_bg.png") top repeat-y;
        background-size: 100% auto;
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom: 0;
        z-index: -1;
    }

    .fd-contact {
        background: transparent;
        min-height: 100vh;
        .hotel-contact {
            padding: 20px;
            background: #fff;
            margin-bottom: 10px;
            .item {
                margin: 15px 0 0;
                font-size: 14px;
                line-height: 1;
            }
            .item2 {
                margin: 15px 0 0;
                line-height: 20px;
                &:first-child {
                    margin-top: 0;
                }
                &:last-child {
                    margin-bottom: 0;
                }
            }

            h5 {
                font-family: PingFang-SC-Medium;
                font-weight: bold;
                font-size: 14px;
                border-bottom: 1px solid #ddd;
                margin: 0;
                padding-bottom: 10px;
                color: #000;
            }
        }

        .contact-address {
            .fa {
                width: 15px;
                margin-right: 5px;
            }
        }

    }

</style>
