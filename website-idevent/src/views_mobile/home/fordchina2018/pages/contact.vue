<template>
    <div class="fd-contact">
        <div class="hotel-contact mb10">
            <h5 class="">福特中国区域联系人：</h5>
            <p>北区、东北区联系人<br/>
                <a href="tel:18668207800">
                    <i class="fa fa-phone fd-phone"></i>王玮 销售部 18668207800
                    <i class="fa fa-angle-right fd-right"></i>
                </a>
            </p>
            <p>东区联系人：<br/>
                <a href="tel:15921220152">
                    <i class="fa fa-phone fd-phone"></i>黄婧华  销售部 15921220152
                    <i class="fa fa-angle-right fd-right"></i>
                </a>
            </p>
            <p>西区联系人：<br/>
                <a href="tel:15800338400">
                    <i class="fa fa-phone fd-phone"></i>丁雄波  销售部  15800338400
                    <i class="fa fa-angle-right fd-right"></i>
                </a>
            </p>
            <p>中区、南区联系人：<br/>
                <a href="href:13971378617">
                    <i class="fa fa-phone fd-phone"></i>阮超  销售部 13971378617
                    <i class="fa fa-angle-right fd-right"></i>
                </a>
            </p>
        </div>
        <div class="hotel-contact mb10">
            <h5 class="">会务组：：</h5>
            <p>签到负责人：
                <a href="tel:13918486136">
                    <i class="fa fa-phone fd-phone"></i>龚杰  13918486136
                    <i class="fa fa-angle-right fd-right"></i>
                </a>
            </p>
            <p>紧急联系人：
                <a href="tel:13764159780">
                    <i class="fa fa-phone fd-phone"></i>孔玲玉 13764159780
                    <i class="fa fa-angle-right fd-right"></i>
                </a>
            </p>
        </div>

        <div class="hotel-contact mb10">
            <p class="line-height30"><span class="contact-title">工作时间:</span>周一至周五 09:00-18:00</p>
            <p class="line-height30"><span class="contact-title">邮箱:</span><a href="mailto:ford@idevent.cn">ford@idevent.cn</a></p>
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
                border-bottom: 1px #ddd solid;
                padding-bottom:10px;
                margin:0;
            }
            p {
                margin-bottom: 0px;
                line-height: 40px;
                color: #2A2A2A;;
                .fd-phone{
                    color: #2D96CD;
                    margin-right: 3px;
                }
                .fd-right{
                    float: right;
                    color: #ccc;
                    line-height: 40px;
                }
                a{
                    color: #333;
                }
                .contact-title{
                    color: #000;
                    margin-right:5px;
                }
            }
            margin-bottom: 10px;
            .line-height30{
                line-height:20px;
                margin-bottom:10px;
            }

        }
        background: #f3f3f3;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        .hotel-contact {
            padding: 20px 20px 0;
            background: #fff;
            .fa{
                width: 15px;
                // margin-right: 10px;
            }
            &:last-child{
                padding-bottom: 10px;
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
