<template>
    <div class="partmeet-box">
        <!--<venue-com :info="info"></venue-com>-->
        <div class="mainMeet">
            <div class="title">
                <h4>{{info.title}}</h4>
            </div>
            <div class="location">
                <h5>{{info.address}}</h5>
            </div>
            <div class="detail-location">
                <table class="table table-bordered">
                    <tbody>
                    <tr class="text-b">
                        <td>
                            <p>区域</p>
                        </td>
                        <td>
                            <p>会议名称</p>
                        </td>
                        <td>
                            <p>厅名</p>
                        </td>
                        <td>
                            <p>楼层</p>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <p>全体销售会议</p>

                        </td>
                        <td>
                            <p>簕杜鹃厅</p>
                        </td>
                        <td>
                            <p>5F</p>
                        </td>
                    </tr>
                    <tr><td><p>一区</p></td><td><p>销售会议</p></td><td><p>牡丹厅</p></td><td><p>5F</p></td></tr>
                    <tr><td><p>二区</p></td><td><p>销售会议</p></td><td><p>水仙厅</p></td><td><p>6F</p></td></tr>
                    <tr><td><p>三区</p></td><td><p>销售会议</p></td><td><p>桂花厅</p></td><td><p>6F</p></td></tr>
                    <tr><td><p>四区</p></td><td><p>销售会议</p></td><td><p>玫瑰-3</p></td><td><p>5F</p></td></tr>
                    <tr><td><p>五区</p></td><td><p>销售会议</p></td><td><p>簕杜鹃厅</p></td><td><p>5F</p></td></tr>
                    <tr><td><p>六区</p></td><td><p>销售会议</p></td><td><p>菊花厅</p></td><td><p>5F</p></td></tr>

                    <tr><td colspan="2"><p>全体售后会议</p></td><td><p>茉莉厅</p></td><td><p>6F</p></td></tr>

                    <tr><td><p>一区</p></td><td><p>售后会议</p></td><td><p>玫瑰-1</p></td><td><p>5F</p></td></tr>
                    <tr><td><p>二区</p></td><td><p>售后会议</p></td><td><p>玫瑰-2</p></td><td><p>5F</p></td></tr>
                    <tr><td><p>三区</p></td><td><p>售后会议</p></td><td><p>茉莉厅</p></td><td><p>6F</p></td></tr>
                    <tr><td><p>四区</p></td><td><p>售后会议</p></td><td><p>606B</p></td><td><p>6F</p></td></tr>
                    <tr><td><p>五区</p></td><td><p>售后会议</p></td><td><p>郁金厅</p></td><td><p>6F</p></td></tr>
                    <tr><td><p>六区</p></td><td><p>售后会议</p></td><td><p>608F</p></td><td><p>6F</p></td></tr>


                    </tbody>
                </table>
            </div>
            <div class="mainimg" v-for="item in info.imgArr">
                <a :href="item.imgSrc" v-if="item.imgSrc">
                    <img :src="item.imgSrc" alt="">
                </a>
            </div>
        </div>

    </div>
</template>

<script>
//    import venueCom from "./components/venueComponent.vue"
    export default {
        data() {
            return {
                info:{
                    title:'2018凯迪拉克市场营销年会 ',
                    address:'分会场',
                    imgArr:[
                        {
                            imgSrc:require('../images/part-1.jpg'),
                        },
                    ],
                }
            }
        },
        components:{
//            venueCom,
        },
        mounted() {
            this.$store.commit('SPIN', false)
        },
    }
</script>
<style scoped lang="less" rel="stylesheet/less">
    .detail-location{
        .text-b{
            font-weight:700;
        }
        td {
            vertical-align: middle !important;

            p {
                margin-bottom: 0 !important;
                text-align: center;
            }
        }
    }
</style>

<style scoped lang="less" rel="stylesheet/less">
    .mainMeet{
        padding:0 15px;
        padding-top:0.1px;
        .title{
            margin:20px 0;
        }
        .mainimg{
            margin-bottom: 10px;
        }
    }
</style>

