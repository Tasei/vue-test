<template>
    <div>
        <iui-bg></iui-bg>
        <div class="holder"></div>
        <div class="menu clearfix">
            <a class="menu-box" href="https://iphoto.idevent.cn/?mid=40">
                <span class="badge"></span>
                <h5 class="title">活动相册</h5>
            </a>
            <router-link class="menu-box" :to="{name: 'home_page', query: {page: 'charge'}}">
                <span class="badge"></span>
                <h5 class="title">能量加油</h5>
            </router-link>
            <a class="menu-box"
               href="http://xianchang.verydo.cn/app/index.php?i=2&c=entry&rid=132&do=app_qd&m=meepo_xianchang">
                <span class="badge"></span>
                <h5 class="title">现场互动</h5>
            </a>
            <a class="menu-box"
               href="http://xianchang.verydo.cn/app/index.php?i=2&c=entry&rid=132&do=app_redpack&m=meepo_xianchang">
                <span class="badge"></span>
                <h5 class="title">红包雨</h5>
            </a>
        </div>
    </div>
</template>
<script>
    import {Toast} from "mint-ui"
    import iuiBg from "../../components/iui/page_bg.vue"

    export default {
        components: {
            iuiBg
        },
        created() {
            this.$store.commit('SPIN')
        },
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    @import "../../../assets/style/home/index.less";

    .holder {
        padding-top: 64%;
    }

    .menu {
        border-radius: 5px;
        margin: 0 15px;
        padding: 0 15px;

        .menu-box {
            display: inline-block;
            float: left;
            width: 50%;
            box-sizing: border-box;
            text-align: center;

            .badge {
                display: block;
                background-image: url("./images/navy_badge.png");
                background-color: transparent;
                background-size: cover;
                width: 68px;
                height: 90px;
                margin: 0 auto;
            }

            .title {
                font-size: 16px;
                color: #eddda2;
                text-shadow: 1px 1px 1px #000;
            }
        }
    }

    .iui-page-bg {
        background-image: url("./images/bg.jpg");
    }
</style>
