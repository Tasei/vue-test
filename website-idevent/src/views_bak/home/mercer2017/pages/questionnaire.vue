<template>
    <div class="box">
        <div class="title">{{questionnaire.title}}</div>
        <i class="radius" ><em></em></i>
        <div class="explain">
            {{questionnaire.explain}}
            <div>{{questionnaire.scoreInfo}}</div>
        </div>
        <div class="questions">
            <div class="chooseQuestion" v-for="(i,j) in questionnaire.chooseQuestion">
                <div class="chooseQuesTitle" v-if="j=='title'">{{i}}</div>
                <div class="chooseQuesContent"v-for="(item,index) in i" v-if="j=='questions'"><span style="color: red;">*</span>{{item.content}}
                    {{index}}
                    <div class="chooseQuesScore" style="display: flex;justify-content: space-between">
                        <label v-for="k in item.score" class="chooseLabel"><input type="radio" :name="'content'+index" id="chooseRadio"/><span>{{k}}</span></label>
                    </div>
                </div>

            </div>
            <div class="textQuestion" v-for="(i,j) in questionnaire.textQuestion">
                <div class="textQuesTitle" v-if="j=='title'">{{i}}</div>
                <div class="textQuesExplain" v-if="j=='explain'">{{i}}</div>
                <div v-for="item in i" v-if="j=='questions'" class="textQuesContent">{{item.content}}
                    <textarea name="textQuestionaArea" id=""  rows="8" class="textQuestionaArea"></textarea>
                    <!--cols="30"-->
                </div>
            </div>
            <div class="questionSubmit">完成</div>
        </div>
    </div>
</template>
<style scoped lang="less">
    @primary-color: #00549c;
    .box{
        padding:0 15px;
        font-size: 14px;
    }
    .title{
        color: #00549c;
        font-weight: 700;
        font-size: 18px;
        text-align: center;
        margin:20px 0;
    }
    .radius {
        width: 16px;
        height: 16px;
        background: rgba(0,84,156,0.15);
        /*opacity: 0.2;*/
        position: relative;
        display: block;
        border-radius: 50%;
        /*right: 0;*/
        /*top: 50%;*/
        margin:0 auto;
        padding:0.1px;
        margin-top: -9px;
        margin-bottom:15px;
        em{
            width: 5px;
            height: 5px;
            background: @primary-color;
            /*opacity: 1;*/
            position: absolute;
            right: 0;
            top: 0;
            left:0;
            bottom:0;
            display: block;
            border-radius: 50%;
            margin:5px auto;
        }
    }
    .explain{
        div{
            font-size: 13px;
            margin:15px 0;
        }
    }
   .chooseQuesTitle,.textQuesTitle{
       font-weight: bold;
       margin-top: 15px;
       margin-bottom:15px;
    }
    .chooseQuesContent{
        margin-bottom:10px;
    }
    .chooseQuesScore{
        width:90%;
        margin-top:5px;
        line-height:20px;
        height: 20px;
        label{
            height: 100%;
            line-height:20px;

            display: flex;
            align-items:center;
            span{
                margin:5px 0 0 2px;
            }
        }
    }
    .textQuestionaArea{
        width:100%;
    }
    .textQuesContent{
        margin-top:10px;
        color: #bbb;
        font-size: 12px;
    }
    .questionSubmit{
        height: 40px;
        line-height:40px;
        color: #fff;
        background-color: #00549c;
        text-align: center;
        margin:20px 0 10px 0;
    }

</style>
<script>


    export default {
        components: {

        },
        mounted() {
            this.$store.commit('SPIN', false)
        },
        data() {
            return {
                list: [
                    {
                        title: {title: "第一天", date: "17-10-18",class:"bold"}
                    },
                    {
                        title: {title: "签到&早茶", date: "08:30-09:00"}
                    },
                    {
                        title: {title: "欢迎辞", date: "09:00-09:10"}
                    },
                    {
                        title: {title: "茶歇", date: "10:25-10:55"}
                    },
                    {
                        title: {title: "第二天", date: "17-10-19",class:"bold"}
                    },
                    {
                        title: {title: "早茶", date: "08:30-09:00"}
                    },
                    {
                        title: {title: "欢迎辞", date: "09:00-09:05"}
                    },
                    {
                        title: {title: "午餐休息", date: "12:30-13:30"}
                    },
                    {
                        title: {title: "会议总结", date: "17:00-17:10"}
                    },
                ],
                questionnaire: {
                    title: '问卷调查',
                    explain: '综合考虑本次虚拟年会主题诠释、流程内容、直播平台互动等各要素，请完成本次问卷，即可参加红包抽奖。',
                    scoreInfo:'（4分=非常满意，3分=满意，2分=一般，1分=需提升，NA=不适用/无法观察到）',
                    chooseQuestion:{
                        title:'选择题',
                        questions:[
                                {
                                    content:'1.本次年会以直播的形式呈现，你感觉如何？',
                                    score:['4分','3分','2分','1分','NA']
                                },
                                {
                                    content:'2.基于您之前的使用体验，对直播平台的功能设置(菜单设置、互动、界面窗口等)网页设计总体是否满意？',
                                    score:['4分','3分','2分','1分','NA']
                                },
                                {
                                    content:'3.针对网站/手机的加载速度、稳定性及兼容性，您是否满意？',
                                    score:['4分','3分','2分','1分','NA']
                                },
                                {
                                    content:'4.您对会议的前期宣传是否满意？',
                                    score:['4分','3分','2分','1分','NA']
                                },
                                {
                                    content:'5.您对会议的整体流程安排，觉得是否合理？',
                                    score:['4分','3分','2分','1分','NA']
                                },
                                {
                                    content:'6.对演讲者分享“与百姓的故事”的呈现方式，是否满意？',
                                    score:['4分','3分','2分','1分','NA']
                                },
                                {
                                    content:'7.您对会议中的互动形式(留言区、品牌福利、红包派发)是否满意？',
                                    score:['4分','3分','2分','1分','NA']
                                },
                                {
                                    content:'8.本次年会对主题“不忘初心，进无止境”的诠释是否够清晰明确、容易理解？',
                                    score:['4分','3分','2分','1分','NA']
                                },
                                {
                                    content:'9.通过活动的举办，您对主题以及公司文化的理解是否得到了提升，是否满意？',
                                    score:['4分','3分','2分','1分','NA']
                                },
                                {
                                    content:'10.本次您是否达到了您的期望？',
                                    score:['4分','3分','2分','1分','NA']
                                }
                            ],
                    },
                    textQuestion: {
                        title: '开放题:请对我们的活动提出您的建议(非必答)',
                        explain:'吐槽、表扬、无厘头……我们洗耳恭听哦~~',
                        questions: [
                            {
                                content:'1.您觉得本次年会中哪些内容对您印象深刻，影响最大？',
                            },
                            {
                                content:'2.您希望以后此类直播会议中需要提升与进步的地方有哪些？',
                            }
                        ]
                    }

                }
            }
        }
    }
</script>
