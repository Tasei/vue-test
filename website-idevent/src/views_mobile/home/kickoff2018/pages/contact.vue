<template>
    <div class="fd-contact">
        <div class="hotel-contact mb10">
            <h5 class="">雷度联系人：</h5>
            <p>
                <a href="tel:+8615900976979">
                    <i class="fa fa-phone fd-phone"></i>俞颖明  +86 15900976979
                    <i class="fa fa-angle-right fd-right"></i>
                </a>
            </p>
        </div>
        <div class="hotel-contact mb10">
            <h5 class="">旅行社联系人：</h5>
            <p>
                <a href="tel:+8618621938325">
                    <i class="fa fa-phone fd-phone"></i>戎&nbsp;&nbsp;&nbsp;磊  +86 18621938325  酒店事宜
                    <i class="fa fa-angle-right fd-right"></i>
                </a>
            </p>
            <p>
                <a href="tel:+8618602118037">
                    <i class="fa fa-phone fd-phone"></i>焦&nbsp;&nbsp;&nbsp;迪  +86 18602118037  机票事宜
                    <i class="fa fa-angle-right fd-right"></i>
                </a>
            </p>
            <p>
                <a href="tel:+8613761855601">
                    <i class="fa fa-phone fd-phone"></i>俞帅金  +86 13761855601  旅游事宜
                    <i class="fa fa-angle-right fd-right"></i>
                </a>
            </p>
        </div>
        <!--<div class="hotel-contact mb10">-->
            <!--<p class="line-height30"><span class="contact-title">地址:</span>中国 上海市 普陀区 江宁路1306弄7号富丽大厦2507室</p>-->
            <!--<p class="line-height30"><span class="contact-title">邮编:</span>200000</p>-->
            <!--<p class="line-height30"><span class="contact-title">邮箱:</span><a href="mailto:Lizhen@idevent.com ">Lizhen@idevent.com </a></p>-->
        <!--</div>-->
    </div>
</template>
<script>
    export default{
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
            /*margin-bottom: 10px;*/
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
