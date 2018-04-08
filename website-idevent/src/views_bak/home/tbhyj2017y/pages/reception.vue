<template>
    <div>
        <div class="fd-common-question">
            <div class="common-invite-code">
                <h4 class="hotel-title font-bold">
                    <i class="fa fa-caret-right fa-lg caret-right" aria-hidden="true"></i>
                    接机安排
                </h4>
                <p>时间：2017年12月06日09:00-24:00</p>
                <p class="text-small">（出机场后会有手举公司LOGO接机牌的广西分公司同事引领至上车点）</p>
                <p class="text-small">火车站联系人</p>
                <p><span>吴卓铮</span>&nbsp;&nbsp;<a href="tel:18978831334‬">18978831334‬</a></p>
                <p class="text-small">飞机场联系人</p>
                <p>
                    <span>09:00-18:30</span>&nbsp;&nbsp;
                    <span>陈斯伦</span>&nbsp;&nbsp;
                    <a href="tel:18275789796‬">18275789796‬‬</a>
                </p>
                <p>
                    <span>18:30-24:00</span>&nbsp;&nbsp;
                    <span>陈海平</span>&nbsp;&nbsp;
                    <a href="tel:13507878167‬">13507878167‬</a>
                </p>
            </div>

            <div class="common-invite-code no-padding">
                <h4 class="hotel-title font-bold">
                    <i class="fa fa-caret-right fa-lg caret-right" aria-hidden="true"></i>
                    送机安排
                </h4>
                <p>12月8日需要送机的领导，请于报到时将返程信息提供给会务组。</p>
                <div class="myBtn">
                        <router-link :to="{name:'home_page',query: {page: 'hotel'}}" class="btn btn-primary btn-outline m-logout-btn hotel">
                        <h5>酒店介绍</h5>
                        </router-link>
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

</style>
