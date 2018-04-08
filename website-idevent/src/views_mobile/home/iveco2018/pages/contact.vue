<template>
    <div>
        <iui-block class="contact-box">
            <iui-title>会务客服热线：</iui-title>
            <p v-for="item in contacts1">{{item[0]}}&nbsp;&nbsp;{{item[1]}}：<a :href="'tel:'+item[2]">{{item[2]}}</a></p>
            <hr style="margin:20px 0;">
            <iui-title>接待客服热线：</iui-title>
            <p v-for="item in contacts2">{{item[0]}}&nbsp;&nbsp;{{item[1]}}：<a :href="'tel:'+item[2]">{{item[2]}}</a></p>
        </iui-block>
        <btn-home></btn-home>

    </div>
</template>
<script>
    import iuiBlock from "../../../components/iui/block.vue"
    import iuiTitle from "../../../components/iui/block_title.vue"
    import btnHome from "../components/btn_home.vue"

    export default {
        components: {iuiBlock, iuiTitle, btnHome},
        mounted() {
            this.$store.commit('SPIN', false)
        },
        data() {
            return {
                contacts1: [
                    ['会务负责','陈诗博', '15215044657'],
                    ['餐饮','马波', '13996073386'],
                    ['车辆调度','马敏', '13500331225'],
                    ['接待总负责','卢芳', '13883998725'],
                    ['博鳌会议中心酒店会务负责人','任巧琴', '18523077358'],
                    ['东屿岛酒店会务负责人','张文渝', '18584563317'],
                    ['博鳌国宾馆会务负责人','佘军', '13983938973']
                ],
                contacts2: [
                    ['媒体接待','钟睿', '18502308410'],
                    ['经销商接待','韩廷刚', '13996334911'],
                    ['服务商接待','孙军', '15808000902'],
                    ['专用、委改接待','龚必强', '13996073006'],
                    ['国际业务接待','陈浩', '15808000708'],
                    ['金融机构接待','曹睿', '13983693238'],
                    ['配套厂商接待','李亮', '15808000717'],
                    ['职能部室接待','朱玲', '13883168708'],
                ]
            }
        }
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    .contact-box{
        padding-bottom:50px ;
    }
</style>


