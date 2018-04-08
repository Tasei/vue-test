<template>
    <div>
        <div class="fd-common-question">
            <div class="common-invite-code">
                <h4 class="hotel-title font-bold">
                    <i class="fa fa-caret-right fa-lg caret-right" aria-hidden="true"></i>
                    接机安排
                </h4>
               <div class="air-item" v-for="item in airInfo">
                   <h5>{{item.name}}</h5>
                   <p v-html="item.road"></p>

                   <p class="text-small">{{item.attention}}</p>
                   <p>{{item.time}}</p>
                   <p>{{item.person}}<a :href="'tel:'+item.mobile">{{item.mobile}}</a>‬</p>
                   <p>大巴车停放位置图</p>
                   <img :src="item.imgSrc" alt="">
               </div>
            </div>

        </div>

    </div>
</template>
<script>
    import iButton from "iButton"
    export default{
        components: {
            iButton
        },
        data(){
            return {
                airInfo:{
                    meilan:{
                        name:'美兰机场接机',
                        road:'美兰机场班车线路：<br/>美兰机场-------博鳌国宾馆酒店--------东屿岛大酒店-------亚洲论坛大酒店',
                        attention:'如果您选择飞机出行美兰机场到达，组委会将在达到厅举牌迎接，我们将用大巴车送您前往入住酒店。',
                        time:'发车时间：每30分钟发一趟车',
                        person:'机场联系人：翁贤锋 ',
                        mobile:'138 7670 2177',
                        imgSrc:require('../assets/002.png'),

                    },
                    boao:{
                        name:'博鳌机场接机',
                        road:'博鳌机场班车线路：<br/>博鳌机场-------博鳌国宾馆酒店--------东屿岛大酒店-------亚洲论坛大酒店',
                        attention:'如果您选择飞机出行博鳌机场到达，组委会将在     达到厅举牌迎接，我们将用大巴车送您前往入住酒店。',
                        time:'发车时间：每30分钟发一趟车',
                        person:'机场联系人：徐冉 ',
                        mobile:'13637671525',
                        imgSrc:require('../assets/003.png'),

                    },
                    qionghai:{
                        name:'琼海站接站',
                        road:'琼海站班车线路：<br/>琼海动车站-------博鳌国宾馆酒店--------东屿岛大酒店-------亚洲论坛大酒店',
                        attention:'如果您选择普通列车出行，动车将抵达琼海站。组委会将在动车站达到厅举牌迎接，城站人流量较大，请您认准我们举“2018营销商务年会”迎接牌的工作人员，他们将带引您去往大巴车停车处。',
                        time:'发车时间：每60分钟发一趟车',
                        person:'车站联系人：刘佳祺 ',
                        mobile:'18953269192',
                        imgSrc:require('../assets/004.png'),
                    },
                    boaozhan:{
                        name:'博鳌站接站',
                        road:'博鳌站班车线路：<br/>博鳌动车站-------博鳌国宾馆酒店--------东屿岛大酒店-------亚洲论坛大酒店',
                        attention:'如果您选择普通列车出行，动车将抵达博鳌站。组委会将在动车站达到厅举牌迎接，城站人流量较大，请您认准我们举“2018营销商务年会”迎接牌的工作人员，他们将带引您去往大巴车停车处。',
                        time:'发车时间：每60分钟发一趟车',
                        person:'车站联系人：袁俊林 ',
                        mobile:'18308975662',
                        imgSrc:require('../assets/001.png'),
                    },
                }

            }
        },
        mounted() {
            this.$store.commit('SPIN', false)
        }
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    @import "../../../../assets/style/common";
    .fd-common-question{
        background-color: white;
        .common-invite-code{
            padding-bottom:0;
        }
        .no-padding{
            padding-top:0;
        }
    }
    .text-small{
        font-size: 12px;
        color: #B1B1B1;
        line-height: 20px;
    }
    .myBtn{
        padding:0 92px;
        .hotel {
            width:100%;
            margin:0 !important;
            padding-top:10px;
            padding-bottom:10px;
            -webkit-border-radius: 2px;
            -moz-border-radius: 2px;
            border-radius: 2px;
            h5{
                font-size:17px !important;
                font-weight:normal !important;
                margin:0 !important;
            }
        }
    }
    .air-item{
        border-bottom:1px solid;
    }

</style>
