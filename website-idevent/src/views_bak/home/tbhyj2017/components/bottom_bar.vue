<template>
    <div class="bottom-bar bg-primary">
        <div class="bottom-bar-item" :class="{active:(active=='home')}">
            <router-link :to="{name:'home_index'}">
                <i class="bar-icon bar-icon-home"></i>
                <small>首页资讯</small>
            </router-link>
        </div>
        <div class="bottom-bar-item" :class="{active:(active=='reg')}">
            <!--<router-link :to="{name:'register_form'}">-->
                <!--<i class="bar-icon bar-icon-reg"></i>-->
                <!--<small>照片墙</small>-->
            <!--</router-link>-->
            <a @click="iPhoto()">
                <i class="bar-icon bar-icon-reg"></i>
                <small>照片墙</small>
            </a>
        </div>
        <div class="bottom-bar-item" :class="{active:(active=='my')}">
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
                Toast('touge提供链接......')
            }
        }
    }
</script>
<style lang="less" scoped>
    .bottom-bar{
        opacity:0.94;
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;

        .bottom-bar-item{
            display: inline-block;
            width: 33.33%;
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
                    background-image: url('../../../../assets/images/mobile/home/bottom_bar/profile_normal.png');
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
                    &.bar-icon-my{
                        background-image: url('../../../../assets/images/mobile/home/bottom_bar/profile_select.png');
                    }
                }
            }
        }
    }
</style>
