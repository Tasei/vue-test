<template>
    <div class="fd-contact">
        <div class="hotel-contact mb10">
            <h5 class="">酒店联系人：</h5>
            <p>东区/中区  厦门佰翔五通酒店<br/>
                <a href="tel:13981726196">
                    <i class="fa fa-phone fd-phone"></i>卿澄 13981726196
                    <i class="fa fa-angle-right fd-right"></i>
                </a>
            </p>
            <p>北区/东北区  厦门日航酒店<br/>
                <a href="tel:18628017060">
                    <i class="fa fa-phone fd-phone"></i>陈诗吟 18628017060
                    <i class="fa fa-angle-right fd-right"></i>
                </a>
            </p>
            <p>南区 厦门国际会议中心酒店<br/>
                <a href="tel:18328406521">
                    <i class="fa fa-phone fd-phone"></i>尹婵 18328406521
                    <i class="fa fa-angle-right fd-right"></i>
                </a>
            </p>
            <p>西区 厦门润丰吉祥温德姆至尊酒店<br/>
                <a href="href:15228849120">
                    <i class="fa fa-phone fd-phone"></i>刘启慧 15228849120
                    <i class="fa fa-angle-right fd-right"></i>
                </a>
            </p>
        </div>
        <div class="hotel-contact mb10">
            <h5 class="">接机安排：</h5>
            <p>厦门高崎机场 09:00-00:00,每隔15分钟发车</p>
            <p>接机联系人:<br/>
                <a href="href:18108272657">
                    <i class="fa fa-phone fd-phone"></i>李海龙 18108272657
                    <i class="fa fa-angle-right fd-right"></i>
                </a><br/>
                <a href="href:13689600450">
                    <i class="fa fa-phone fd-phone"></i>张天虎 13689600450
                    <i class="fa fa-angle-right fd-right"></i>
                </a>
            </p>
        </div>
        <div class="hotel-contact mb10">
            <h5 class="">客服热线：</h5>
            <p>东区/中区
                <a href="tel:021-61425817">
                    <i class="fa fa-phone fd-phone"></i>021-61425817
                    <i class="fa fa-angle-right fd-right"></i>
                </a>
            </p>
            <p>北区/东北区
                <a href="tel:021-61425809">
                    <i class="fa fa-phone fd-phone"></i>021-61425809
                    <i class="fa fa-angle-right fd-right"></i>
                </a>
            </p>
            <p>南区/西区
                <a href="tel:021-61425836">
                    <i class="fa fa-phone fd-phone"></i>021-61425836
                    <i class="fa fa-angle-right fd-right"></i>
                </a>
            </p>
            <p>CAF内部人员
                <a href="href:021-61425830">
                    <i class="fa fa-phone fd-phone"></i>021-61425830
                    <i class="fa fa-angle-right fd-right"></i>
                </a>
            </p>
        </div>

        <div class="hotel-contact mb10">
            <p class="line-height30"><span class="contact-title">工作时间:</span>周一至周五 09:00-18:00<br/>(元旦期间正常工作)</p>
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
