<template>
    <div>
        <img :src="banner" alt="" style="display: block; margin-bottom: 10px;">
        <div class="page-container">
            <div class="text-block-container">
                <div class="text-content">
                    <ul>
                        <li>
                            <a class="fucka" @click="goreport">
                                <h3>廉洁诚信报告</h3>
                                <p>Honesty and Integrity Report</p>
                            </a>
                        </li>
                        <li>
                            <a class="fucka" target="_blank" href="https://file0b5e65b04b93.iamh5.cn/v3/idea/e7PC2aKM?nid=7330680&wxid=oZwt-wEcZV14cy_JCcgbxqUX2KFk&latestUser=1&suid=ohAJ7wbXOapYHj4uKLCdE2p81_DE&from=singlemessage">
                                <h3>慈善专刊</h3>
                                <p>Charity Column</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- <div class="text-center" style="margin: 60px 0;">
                <router-link :to="{name:'home_page',query: {page: 'qrcode'}}">
                    <span class="btn ghost">签到二维码</span>
                </router-link>
            </div> -->
        </div>
    </div>
</template>

<script>
    import {Toast} from "mint-ui"
    export default {
        name: 'wulingSafe',
        data() {
            return {
                banner: require('../images/banner_wjzl.jpg'),
            }
        },
        methods:{
            goreport() {
                let link = this.meeting.websettings.reportLink;
                if(link == 'false'){
                    Toast('敬请期待')
                }else{
                    this.$router.push({name:'home_page',query: {page: 'report'}})
                }
            }

        },
        mounted() {
            document.title = '文件资料'
            this.$store.commit('SPIN', false)
        }
    }
</script>

<style lang="less" scoped>
    @import '../style.less';

    .text-content {
        margin-top: 20px;
    }
    .indent {
        text-indent: 24px;
        margin: 5px 0;
    }
    h3 {
        margin-top: 5px;
        margin-bottom: 5px;
        p {
            margin-top: 5px;
        }
    }
    li {
        padding: 0 20px;
        border: 1px solid #ddd;
        margin: 20px 0;
        border-radius: 3px;
    }
    li a {
        padding: 10px;
        padding-left: 40px;
        display: block;
    }
    .fucka {

        background: url('../images/icon_pdf.png') no-repeat left center;
        background-size: 35px auto;
    }
    .fuckc {
        background: url('../images/icon_question.png') no-repeat left center;
        background-size: 35px auto;
    }
</style>

