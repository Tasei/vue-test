<template>
    <div class="fd-contact">
        <div class="hotel-contact mb10">
            <h5><i class="fa fa-phone"></i>客服热线：</h5>
            <p>
东区/中区经销商 : <a href="tel:021-61425836">021-61425836</a> <br>
北区/东北区经销商: <a href="tel:021-61425817">021-61425817</a> <br>
南区/西区经销商 : <a href="tel:021-61425830">021-61425830</a> <br>
长安福特内部员工：<a href="tel:021-61425802">021-61425802</a>
            </p>
            <p>工作时间：周一至周五，09:00-17:00</p>
            <p>邮箱：<span><a href="mailto:ford@idevent.cn">ford@idevent.cn</a></span></p>
        </div>
    </div>
</template>
<script>
    export default{
        computed: {
            meeting(){
                return this.$store.state.meeting
            }
        },
        mounted() {
            this.$store.commit('SPIN', false)
        },
    }
</script>
<style lang="less" scoped>
    .fd-contact {
        .mb10 {
            h5{
                font-family:PingFang-SC-Medium;
                font-weight: bold;
                font-size: 14px;
            }
            p {
                margin-bottom: 10px;
                &:first-child {
                    border-bottom: 1px solid #ddd;
                    padding-bottom: 10px;
                }
                &:last-child {
                    margin-bottom: 0px;
                }
            }
            margin-bottom: 10px;
        }
        background: #f3f3f3;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        .hotel-contact {
            padding: 20px 15px;
            background: #fff;
            p {
                margin-bottom: 15px;
            }
            .fa{
                width: 15px;
                // margin-right: 10px;
            }
        }

        .contact-address{
            .fa{
                width: 15px;
                margin-right: 5px;
            }
        }

    }

</style>
