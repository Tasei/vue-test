<template>
    <div class="mt-container">
        <div class="home-hotel">
            <ul class="list-group hotel-contact">
                <li class="list-group-item">
                    客服热线：
                </li>
                <li class="list-group-item">
                    <a href="tel:021-61425830">
                        <i class="fa fa-phone text-primary"></i>021-61425830
                        <i class="fa fa-angle-right arrow-right"></i>
                    </a>
                </li>
                <li class="list-group-item">
                    <a href="tel:021-61425830">
                        <i class="fa fa-phone text-primary"></i>021-61425830
                        <i class="fa fa-angle-right arrow-right"></i>
                    </a>
                </li>
            </ul>
        </div>

        <!--<div class="home-hotel">-->
            <!--<ul class="list-group hotel-contact">-->
                <!--<li class="list-group-item">-->
                    <!--微信系统技术支持：-->
                <!--</li>-->
                <!--<li class="list-group-item">-->
                    <!--<a href="tel:021-61425830">-->
                        <!--<i class="fa fa-phone text-primary"></i>021-61425830-->
                        <!--<i class="fa fa-angle-right arrow-right"></i>-->
                    <!--</a>-->
                <!--</li>-->
            <!--</ul>-->
        <!--</div>-->

        <div class="block">
            <p><span>地址：</span>中国 上海市 普陀区 江宁路1306弄7号富丽大厦2507室</p>
            <p><span>邮编：</span>200070</p>
            <p><span>传真：</span>021-61426908</p>
            <p><span>邮箱：</span>registration@citssh.com.cn</p>
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
            }
        },
    }
</script>
<style lang="less" scoped>
    @import "../assets/style";
    .block {
        p {
            color: #666;
            span {
                color: #000;
            }
            a {
                color: inherit;
            }
        }
    }
    .home-hotel {
        padding: 10px 0;
    }
    .hotel-contact {
        li.list-group-item {
            padding: 12px 0 12px 20px !important;
            &:last-child {
                &:after {
                     height: 0;
                 }
            }
        }

    }
</style>
