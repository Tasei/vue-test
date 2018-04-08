<template>
    <div class="mt-container">
        <div class="home-hotel">
            <ul class="list-group hotel-contact">
                <li class="list-group-item">
                    欧瑞莲400热线电话：
                </li>
                <li class="list-group-item">
                    <a href="tel:4009213300">
                        <i class="fa fa-phone text-primary"></i>4009213300
                        <i class="fa fa-angle-right arrow-right"></i>
                    </a>
                </li>
            </ul>
        </div>

        <div class="home-hotel">
            <ul class="list-group hotel-contact">
                <li class="list-group-item">
                    微信系统技术支持：
                </li>
                <li class="list-group-item">
                    <a href="tel:021-61425830">
                        <i class="fa fa-phone text-primary"></i>021-61425830
                        <i class="fa fa-angle-right arrow-right"></i>
                    </a>
                </li>
            </ul>
        </div>

        <div class="block">
            <p><span>工作时间：</span>周一至周五：09:00-12:00 / 13:00-17:00</p>
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
