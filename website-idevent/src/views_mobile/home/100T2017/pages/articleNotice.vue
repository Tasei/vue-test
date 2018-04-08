<template>
    <iui-block>
        <h3 class="text-center">峰会须知</h3>
        <h4 class="text-center">2017鑫星汇证券投资平台峰会</h4>
        <div class="text-center" style="margin-top: 15px;">
            <h5>距离峰会举行 倒计时</h5>
            <vue-countdown-2 deadline="2017/08/26 13:00" format="%h : %m : %s"></vue-countdown-2>
        </div>

        <p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: Calibri;">&nbsp;</p>
        <p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: Calibri;"><strong>一、峰会地址及交通情况</strong>
        </p>
        <p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: Calibri;">
            ● 峰会地点：北京首都国际机场朗豪酒店</p>
        <p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: Calibri;">&nbsp;&nbsp;&nbsp;
            北京首都机场朗豪酒店毗邻首都国际机场三号航站楼，位居优越。有穿梭巴士往返于酒店与三号航站楼之间。</p>
        <p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: Calibri;">&nbsp;&nbsp;&nbsp;
            酒店拥有各类时尚敞亮的客房及套房，阐释着身处时尚生活的终极定义。五个独具匠心的餐厅和酒吧，足以大大满足人们对美食享受的渴求。广阔的豪华宴会场地，总面积超过2700平米，为成功举办各种规模的活动提供理想的场地。</p>
        <p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: Calibri;">
            ● 峰会茶歇：酒店为参会者准备了精美茶歇，在峰会休息期间，可至外场享受美味茶点</p>
        <p>
            <img :src="require('../images/article/3/1.png')" style="width: 46.5%;display: inline-block;"/>
            <img :src="require('../images/article/3/2.png')" style="width: 53.5%;display: inline-block; float: right;"/>
        </p>
        <p style="text-align: left; margin: 0cm 0cm 0.0001pt; font-size: 10.5pt; font-family: Calibri;" align="left">
            &nbsp;</p>
        <p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: Calibri;">
            ● 交通路线：峰会地址靠近北京首都国际机场T3航站楼</p>
        <p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: Calibri;">
            地铁：东直门或三元桥，搭乘机场快线到T3航站楼后，步行约15分钟。</p>
        <p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: Calibri;">
            机场大巴：坐机场大巴到3号航站楼下车，步行约15分钟。</p>
        <p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: Calibri;">
            公交车： 在东直门/左家庄/三元桥乘坐915支2快车（
            <a title="东直门" href="http://www.baike.com/sowiki/%E4%B8%9C%E7%9B%B4%E9%97%A8?prd=content_doc_search">东直门</a>-
            <a title="马坡花园"
               href="http://www.baike.com/sowiki/%E9%A9%AC%E5%9D%A1%E8%8A%B1%E5%9B%AD?prd=content_doc_search">马坡花园</a>）
            到岗山村站下车，步行约5分钟，马路斜对面即到。坐359路到
            <a title="机场道口"
               href="http://www.baike.com/sowiki/%E6%9C%BA%E5%9C%BA%E9%81%93%E5%8F%A3?prd=content_doc_search">机场道口</a>
            下车，换乘顺22路或640路岗山村站下车，向东步行约5分钟。
        </p>
        <p><img :src="require('../images/article/3/3.png')" class="img-responsive"/></p>
        <p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: Calibri;">&nbsp;</p>
        <p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: Calibri;"><strong>二、峰会会场及时间</strong>
        </p>
        <p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: Calibri;">
            ● 峰会时间：8月26日下午13:00--17:30，13:00开始签到入场</p>
        <p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: Calibri;">
            ● 峰会会场：北京机场朗豪酒店主会场（1楼）</p>
        <p><img :src="require('../images/article/3/4.png')" class="img-responsive"/></p>
        <p><img :src="require('../images/article/3/5.png')" class="img-responsive"/></p>
        <p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: Calibri;"><strong>三、会议报名及签到系统</strong>
        </p>
        <p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: Calibri;">
            ● 关注&ldquo;鑫星伊顿俱乐部&rdquo;官方微信公众号，点击平台峰会，填写报名信息，完成报名并生成签到专属二维码，一人一码入场；</p>
        <p><img :src="require('../images/article/3/6.png')" class="img-responsive"/></p>
        <p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: Calibri;">&nbsp;</p>
        <p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: Calibri;">
            ● 报名后可浏览平台峰会主页面，关注峰会会前、会中、会后的相关报道及信息；</p>
        <p><img :src="require('../images/article/3/7.png')" class="img-responsive"/></p>
        <p style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: Calibri;">
            ● 峰会期间将通过定制相机捕捉参会嘉宾的会场时刻，实时上传至微信公众号，嘉宾可随个人喜好通过微信公众号查看照片并且寻找自己，还可透过社交网站向同行、好友、同事分享活动精彩瞬间；</p>
        <p><img :src="require('../images/article/3/8.png')" class="img-responsive"/></p>
        <p style="text-align: left; margin: 0cm 0cm 0.0001pt; font-size: 10.5pt; font-family: Calibri;" align="left">
            <strong>四、峰会当日天气状况</strong></p>
        <p style="text-align: left; margin: 0cm 0cm 0.0001pt; font-size: 10.5pt; font-family: Calibri;" align="left">
            ● 8月26日周六北京温度18&deg;C至29&deg;C，多云转阵雨，微风，参会者可适当准备雨具。</p>
        <p style="text-align: left; margin: 0cm 0cm 0.0001pt; font-size: 10.5pt; font-family: Calibri;" align="left">
            &nbsp;</p>
        <p style="text-align: left; margin: 0cm 0cm 0.0001pt; font-size: 10.5pt; font-family: Calibri;" align="left">
            &nbsp;</p>

        <wechat-qr></wechat-qr>

        <btn-home></btn-home>
    </iui-block>
</template>
<script>
    import iuiBlock from "../../../components/iui/block.vue"
    import btnHome from "../../../components/btn_home.vue"
    import wechatQr from "../components/wechat_qr.vue"
    import VueCountdown2 from 'vue-countdown-2';

    export default {
        components: {btnHome, wechatQr, iuiBlock, VueCountdown2},
        data() {
            return {
                img1: require('../images/think_1.png'),
                img2: require('../images/think_2.png'),
            }
        },
        mounted() {
            this.$store.commit('SPIN', false)
        },
    }
</script>
