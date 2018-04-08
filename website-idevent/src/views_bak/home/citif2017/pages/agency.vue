<template>
    <div class="mt-container lg">
        <div class="block">
            <div class="title">主办单位</div>
            <p>杭州市旅游委员会</p>
            <p>杭州市萧山区人民政府</p>
        </div>
        <div class="block">
            <div class="title">承办单位</div>
            <p>中国会议产业大会组委会</p>
            <p>杭州市商务会展旅游促进中心</p>
            <p>杭州市萧山区旅游局</p>
            <p>杭州市会议与奖励旅游业协会</p>
        </div>
        <div class="block">
            <div class="title">联合承办单位</div>
            <p>北京亿文思咨询有限公司</p>
            <p>杭州国际博览中心</p>
            <p>港中旅国际（杭州）旅行社有限公司</p>
            <p>杭州鑫桥会展有限公司</p>
            <p>杭州伍方会议服务有限公司</p>
            <p>《会议》杂志社</p>
        </div>
        <div class="block">
            <div class="title">支持单位</div>
            <p>国际大会与会议协会（ICCA）</p>
            <p>全球最佳会议城市联盟（BestCitiesGlobalAlliance）</p>
            <p>中国会展经济研究会</p>
            <p>上海会奖精英俱乐部（SMCC）</p>
            <p>玩儿会联盟（Wanerhui）</p>
            <p>会议采购中国委员会（MPC-China）</p>
            <p>中国社团会议专家联盟（CAMA）</p>
            <p>江干区商务（旅游）局</p>
            <p>建德市旅游商务局</p>
            <p>萧山区会展产业联盟</p>
        </div>
        <div class="block">
            <div class="title">特别支持单位</div>
            <div class="sub-title">中国会奖旅游城市联盟及其成员机构</div>
            <p>北京市旅游发展委员会</p>
            <p>上海市旅游局</p>
            <p>天津市旅游局</p>
            <p>西安市旅游局</p>
            <p>成都市博览局</p>
            <p>昆明市旅游发展委员会</p>
            <p>三亚市旅游发展委员会</p>
            <p>南京市旅游委员会</p>
            <p>厦门市旅游局</p>
            <p>大连市旅游局</p>
            <p>桂林市旅游发展委员会</p>
            <p>广州市旅游局</p>
            <p>苏州市旅游局</p>
            <p>青岛市旅游局</p>
            <p>宁波市旅游局</p>
            <p>廊坊市旅游发展委员会</p>
            <p>敦煌市旅游局</p>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
        },
        mounted() {
            this.$store.commit('SPIN')
        }
    }
</script>
<style lang="less" scoped>
    @import "../assets/style";
</style>
