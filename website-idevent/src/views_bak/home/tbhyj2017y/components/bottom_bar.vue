<template>
    <div class="bottom-bar bg-primary">
        <div class="bottom-bar-item" :class="{active:(active=='home')}">
            <router-link :to="{name:'home_page',query: {page: 'qrcode'}}">
                <i class="bar-icon index-icon-qrcode"></i>
                <small>餐券</small>
            </router-link>
        </div>
        <!--<div class="bottom-bar-item" :class="{active:(active=='home')}">-->
            <!--<router-link :to="{name:'home_page',query: {page: 'programList'}}">-->
                <!--<i class="bar-icon bar-icon-jmd"></i>-->
                <!--<small>节目单</small>-->
            <!--</router-link>-->
        <!--</div>-->
        <!--<div class="bottom-bar-item" :class="{active:(active=='home')}">-->
            <!--<router-link :to="{name:'home_page',query: {page: 'productList'}}">-->
                <!--<i class="bar-icon bar-icon-cpd"></i>-->
                <!--<small>产品清单</small>-->
            <!--</router-link>-->
        <!--</div>-->
        <div class="bottom-bar-item" :class="{active:(active=='home')}">
            <router-link :to="{name:'home_page', query: {page: 'contact'}}">
                <i class="bar-icon bar-icon-my"></i>
                <small>会务组</small>
            </router-link>
        </div>
    </div>
</template>
<script>
    import {Toast} from "mint-ui"
    export default{
        props:{
            active: {
                type: String,
                default: "home",
            }
        },
        methods:{
            iPhoto(){
                Toast('暂未开放')
            }
        }
    }
</script>
<style lang="less" scoped>
    .bottom-bar{
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 16;

        .bottom-bar-item{
            display: inline-block;
            width: 50%;
            text-align: center;
            float: left;

            .bar-icon{
                width: 24px;
                height: 24px;
                display: block;
                margin: 0 auto 4px;
                background-size: 100% auto;
                &.bar-icon-home{
                    background-image: url('../images/bar_home.png');
                }
                &.bar-icon-reg{
                    background-image: url('../images/bar_zpq.png');
                }
                &.bar-icon-my{
                    background-image: url('../images/hwz.png');
                }
                &.index-icon-qrcode{
                    background-image: url('../images/scan.png');
                }
                &.bar-icon-jmd{
                    background-image: url('../images/icon_jmd.png');
                }
                &.bar-icon-cpd{
                    background-image: url('../images/icon_cpqd.png');
                }
            }

            a{
                display: block;
                height: 50px;
                padding: 7px 0;
                opacity:0.5;
                font-family:PingFangSC-Regular;
                font-size:10px;
                color:#fff;
                letter-spacing:0px;
                line-height:10px;
                text-align:center;
            }

            &.active{
                a{
                    font-family:PingFangSC-Medium;
                    color: #fff;
                    opacity: 1;
                }

                .bar-icon{
                    &.bar-icon-home{
                        background-image: url('../images/bar_home_select.png');
                    }
                    /*&.bar-icon-my{*/
                        /*background-image: url('');*/
                    /*}*/
                    &.index-icon-qrcode{
                        background-image: url('../images/scan.png');
                    }
                    &.bar-icon-jmd{
                        background-image: url('../images/icon_jmd.png');
                    }
                    &.bar-icon-cpd{
                        background-image: url('../images/icon_cpqd.png');
                    }
                }
            }
        }
    }
</style>
