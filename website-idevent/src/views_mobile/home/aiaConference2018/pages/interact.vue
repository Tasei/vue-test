<template>
<div class="interact-wrapper">
	<div class="interact">
		<div class="question" v-if="!subBtn" v-for="interactList in list" :style="{ 'background-image': 'url(' + interactList.pic + ')' }">
            <div class="date">{{interactList.title}}</div>
            <h3>{{interactList.question}}</h3>
            <div class="options" v-for="option in interactList.options">
                <span>{{option.A}}</span><span>{{option.B}}</span>
            </div>
            <!-- <p>{{interactList.title}}</p> -->
            <button @click="submitOption(1)" class="optionsA"></button>
            <button @click="submitOption(2)" class="optionsB"></button>
        </div>
        <div class="result-con" v-if="subBtn" v-for="re in result">
            <div v-for="succes in re.success" v-if="optionsResult">
                <h3>{{succes.con}}</h3>
                <div class="result-img">
                    <img :src="succes.img" alt="">
                </div>
            </div>
            <div v-for="err in re.error" v-if="!optionsResult">
                <h3>{{err.con}}</h3>
                <div class="result-img">
                    <img :src="err.img" alt="">
                </div>
            </div>
            <div class="topic">{{re.question}}</div>
            <div class="answer" v-for="option in re.options">正确答案：{{option.B}}</div>
            <div class="explanation-img">
                <img src="../assets/p_explain.png" alt="">
            </div>
            <div class="explanation">
                <p>{{re.explanation}}</p>
            </div>
        </div>
	</div>
</div>
</template>
<script>
import {MessageBox,Toast} from "mint-ui"
//import PollForm from "./components/poll_form"
export default {
	data(){
		return {
            subBtn: false,
            optionsResult: true,
            list:[],
            result: [],
			interactiveList1: [
                {
                    date: '1',
                    question: '运动饮料平时可以经常喝吗？',
                    options: [
                        {
                            A: 'A.可以',
                            B: 'B.不可以',
                        }
                    ],
                    title: '饮食',
                    pic:require('../assets/bg_food.png'),
                },
                
            ],
            result1: [
                {
                    success: [
                        {
                            con: '恭喜你，答对了！',
                            img:require('../assets/icon_correct.png'),
                        }
                    ],
                    error: [
                        {
                            con: '很遗憾，答错了！',
                            img:require('../assets/icon_error.png'),
                        }
                    ],
                    question: '运动饮料平时可以经常喝吗？',
                    options: [
                        {
                            A: 'A.可以',
                            B: 'B.不可以',
                        }
                    ],
                    explanation: '运动饮料是针对运动时能量消耗、机体内环境改变而研制的一种保健饮品。不进行运动时，机体并没有能量消耗，也没有水分和电解质的丢失，这时喝运动饮料有可能打破体内原有离子平衡，例如钠离子的额外补充可能导致正常人血压升高。',
                },
            ],
            interactiveList2: [
                {
                    date: '2',
                    question: '减肥就要告别糖吗？',
                    options: [
                        {
                            A: 'A.是的',
                            B: 'B.不是',
                        }
                    ],
                    title: '饮食',
                    pic:require('../assets/bg_food.png'),
                },
            ],
            result2: [
                {
                    success: [
                        {
                            con: '恭喜你，答对了！',
                            img:require('../assets/icon_correct.png'),
                        }
                    ],
                    error: [
                        {
                            con: '很遗憾，答错了！',
                            img:require('../assets/icon_error.png'),
                        }
                    ],
                    question: '减肥就要告别糖吗？',
                    options: [
                        {
                            A: 'A.是的',
                            B: 'B.不是',
                        }
                    ],
                    explanation: '营养专家指出，人体每天的糖摄入量只要合乎标准，就会完全被人体分解、吸收，不会积存，容易积存造成肥胖的其实还是脂肪。',
                },
            ],
            interactiveList3: [
                {
                    date: '3',
                    question: '冬季运动宜用嘴呼吸以增加换气，这种说法对吗？',
                    options: [
                        {
                            A: 'A.对',
                            B: 'B.错',
                        }
                    ],
                    title: '运动',
                    pic:require('../assets/bg_sport.png'),
                },
            ],
            result3: [
                {
                    success: [
                        {
                            con: '恭喜你，答对了！',
                            img:require('../assets/icon_correct.png'),
                        }
                    ],
                    error: [
                        {
                            con: '很遗憾，答错了！',
                            img:require('../assets/icon_error.png'),
                        }
                    ],
                    question: '冬季运动宜用嘴呼吸以增加换气，这种说法对吗？',
                    options: [
                        {
                            A: 'A.对',
                            B: 'B.错',
                        }
                    ],
                    explanation: '冬季气候寒冷，在运动过程中若完全张大口呼吸，人体将吸入大量的冷空气，对呼吸、消化等器官产生不良刺激，会诱发和加重呼吸和消化等器官方面的疾病。因此冬季运动时最好用鼻呼吸。',
                },
            ],
            interactiveList4: [
                {
                    date: '4',
                    question: '能口服用药就不要注射用药，对不对？',
                    options: [
                        {
                            A: 'A.对',
                            B: 'B.错',
                        }
                    ],
                    title: '疾病预防',
                    pic:require('../assets/bg_disease.png'),
                },
            ],
            result4: [
                {
                    success: [
                        {
                            con: '很遗憾，答错了！',
                            img:require('../assets/icon_error.png'),
                        }
                    ],
                    error: [
                        {
                            con: '恭喜你，答对了！',
                            img:require('../assets/icon_correct.png'),
                        }
                    ],
                    question: '能口服用药就不要注射用药，对不对？',
                    options: [
                        {
                            A: 'B.错',
                            B: 'A.对',
                        }
                    ],
                    explanation: '虽然用针剂注射可以使药物更快进入血液，但注射本身也常常引起一些不良反应，如注射局部发炎、血管刺激性等。口服给药简便、安全，副作用也较少。特别适用于一些疗程长的慢性病，建议选择口服给药。',
                },
            ],
		}
	},
    created() {
        this.getInteractive();
    },
    mounted() {
        this.$store.commit('SPIN')
    },
	methods: {
        /*kickoffLink(a) {
            window.location.href = a;
        },
        kickoffRouteTo(a){
            this.$router.push(a)
        },*/
        getInteractive() {
            this.list = this.interactiveList3;
            this.result = this.result3;

            //18号-21号分别显示当日问题
            /*if (new Date().getDate() == 18) {
                this.list = this.interactiveList1;
                this.result = this.result1;
            }else if (new Date().getDate() == 19) {
                this.list = this.interactiveList2;
                this.result = this.result2;
            }else if (new Date().getDate() == 20) {
                this.list = this.interactiveList3;
                this.result = this.result3;
            }else if (new Date().getDate() == 21) {
                this.list = this.interactiveList4;
                this.result = this.result4;
            }else{
                Toast('敬请期待');
                return
            }*/
        },
        submitOption(opt) {
            // localStorage.setItem();
            if (opt == 1) {
                this.optionsResult = false;
                console.log("点击了A");
                
            }else if (opt == 2) {
                this.optionsResult = true;
                console.log("点击了B");
            };
            this.subBtn = true;
            this.getInteractive();
        },
	}
}
</script>
<style lang="less" scoped>
    .interact{
        height: 100vh;
        background-color: #452017;
        position: relative;
        .question{
            width: 262px;
            height: 440px;
            padding: 30px;
            position: absolute;
            left: 50%;
            top: 50%;
            margin-left: -131px;
            margin-top: -220px;
            // background: url("../assets/bg_food.png");
            -webkit-background-size: 100% 100%;
            background-size: 100% 100%;
            color: #fff;
            .date{
                text-align: center;
            }
            h3{
                line-height: 40px;
                margin-top: 10px;
                margin-bottom: 50px;
                font-size: 21px;
            }
            .options{
                font-size: 18px;
                span{
                    padding-right: 25px;
                }
            }
            p{
                text-align: center;
                position: absolute;
                left: 31vw;
                top: 36vh;
            }
            .optionsA{
                outline: none;
                border: none;
                position: absolute;
                left: 16px;
                bottom: 30px;
                width: 100px;
                height: 100px;
                background: url("../assets/A.png");
                -webkit-background-size: 100% 100%;
                background-size: 100% 100%;
            }
            .optionsB{
                outline: none;
                border: none;
                position: absolute;
                right: 16px;
                bottom: 30px;
                width: 100px;
                height: 100px;
                background: url("../assets/B.png");
                -webkit-background-size: 100% 100%;
                background-size: 100% 100%;
            }
        }
        .result-con{
            width: 262px;
            height: 440px;
            padding: 30px;
            position: absolute;
            left: 50%;
            top: 50%;
            margin-left: -131px;
            margin-top: -220px;
            background: url("../assets/bg_answer.png");
            -webkit-background-size: 100% 100%;
            background-size: 100% 100%;
            .date{
                color: #999;
                text-align: center;
            }
            h3{
                color: #333;
                line-height: 30px;
                margin-top: 0;
                margin-bottom: 20px;
                font-size: 21px;
                text-align: center;
            }
            .result-img{
                text-align: center;
                img{
                    width: 60px;
                }
            }
            .explanation-img{
                margin-top: 10px;
            }
            .topic{
                margin-top: 10px;
            }
            .answer{
                margin-top: 5px;
            }
            .explanation{
                margin-top: 10px;
                font-size: 12px;
                color: #999;
                letter-spacing: 0;
            }
        }
    }
    
</style>
