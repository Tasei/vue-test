<template>
    <div class="guest">
        <div class="guest-box clearfix" v-for="p of list">
            <div class="guest__avatar">
                <img :src="'https://static.idevent.cn/oss/sourcingproject/guest/' + p.avatar + '/b400'" />
            </div>
            <div class="guest__content">
                <h3>{{p.name}}</h3>
                <!--<h5>董事长兼CEO</h5>-->
                <p>{{p.desc}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                list: [{
                    name: '徐文虎',
                    desc: '现任复旦大学保险系教授、保险研究所所长、保险研究中心主任、中国保险学会常务理事、中国金融学会常务理事、上海保险学会副会长。国务院学位办保险专业硕士指导委员会委员。',
                    avatar: 'guest_1.jpg'
                }, {
                    name: '刘玉亭',
                    desc: '百度地图事业部副总经理、长地万方总经理',
                    avatar: 'guest_7.jpg'
                }, {
                    name: '母小海',
                    desc: '腾讯企业产品部销售副总裁',
                    avatar: 'guest_3.jpg'
                }, {
                    name: '出离',
                    desc: '蚂蚁金服保险事业群车险负责人',
                    avatar: 'guest_2.jpg'
                }]
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
    .guest {
        padding: 20px;
    }

    .guest-box {
        position: relative;
        min-height: 60px;
        margin-bottom: 27px;
        .guest__avatar {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            position: absolute;
            left: 0;
            top: 0;
            background-color: #ddd;
            overflow: hidden;
        }
        .guest__content {
            margin-left: 75px;
            h3 {
                font-size: 16px;
                line-height: 1;
                margin: 0 0 6px;
                color: #333;
                font-weight: bold;
            }
            h5 {
                font-size: 14px;
                line-height: 1;
                margin: 0 0 4px;
                color: #333;
            }
            p {
                font-size: 14px;
                color: #999;
                line-height: 40/28;
                margin: 0;
            }
        }
    }
</style>
