<template>
    <div>
        <div class="bg"></div>
        <div class="fd-contact">
            <div class="hotel-contact">
                <h5 class="text-dark">{{$t('hotline')}}：</h5>
                <div class="item text-dark">
                    <p>集团代表/投资人/总部团队：<br/><br/>
                        <a href="tel:021-61425836">
                            <i class="fa fa-phone fd-phone"></i>021-61425836
                        </a>
                    </p>
                    <p>区域团队：<br/><br/>
                        <a href="tel:021-61425830">
                            <i class="fa fa-phone fd-phone"></i>021-61425830
                        </a>
                    </p>
                    <p>东区经销商/南区经销商 ：<br/><br/>
                        <a href="tel:021-61425809">
                            <i class="fa fa-phone fd-phone"></i>021-61425809
                        </a>
                    </p>
                    <p>西区经销商/北区经销商：<br/><br/>
                        <a href="tel:021-61425817">
                            <i class="fa fa-phone fd-phone"></i>021-61425817
                        </a>
                    </p>

                    <h5 class="chery-site">活动现场有任何问题，请拨打以下热线电话：</h5>
                    <p>成都棕榈泉费尔蒙酒店电话：<br/><br/>
                        <a href="tel:18601662650">
                            <i class="fa fa-phone fd-phone"></i>18601662650
                        </a>
                    </p>
                    <p>成都希尔顿酒店电话：<br/><br/>
                        <a href="tel:18601668671">
                            <i class="fa fa-phone fd-phone"></i>18601668671
                        </a>
                    </p>
                    <p>成都首座万豪酒店电话：<br/><br/>
                        <a href="tel:18601603540">
                            <i class="fa fa-phone fd-phone"></i>18601603540
                        </a>
                    </p>
                </div>

            </div>

            <!--<div class="hotel-contact">-->
                <!--<div class="item2 text-dark">{{$t('address')}}：<span class="text-gray">{{$t('address_info')}}</span></div>-->
                <!--<div class="item2 text-dark">{{$t('zip')}}：<span class="text-gray">201103</span></div>-->
            <!--</div>-->
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
        background: url("../../../../assets/images/mobile/shedule_bg.png") top repeat-y;
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

            &>h5 {
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
    .chery-site{
        margin:20px 0;
        font-weight:550;
    }
</style>
