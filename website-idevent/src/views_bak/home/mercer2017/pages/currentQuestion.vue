<template>
    <div>
        <div class="home-index">
            <div v-if="banner">
                <img :src="banner" class="img-responsive"/>
            </div>
            <div class="currentQuestionTab">
                <a :class="{tabActive:isActive}" @click="tab($event)">热门</a>
                <a :class="{tabActive:!isActive}" @click="tab($event)">最近</a>
            </div>
            <div class="box">
                <div class="question" v-for="(item,index) in list">
                    <div><span class="quesName">{{item.name}}</span><span class="quesTime">{{item.time}}</span></div>
                    <div class="content">{{item.content}}</div>

                    <div class="zan">
                        <span class="zanNum">{{item.num}}</span><i class="zanI fa fa-thumbs-o-up fa-lg"v-bind:class="{ active: item.isClick}" @click="zan(item)"></i>
                    </div>
                </div>
            </div>
            <div class="formAnswer">
                <input class="inputAnswer" type="text" placeholder="写问题..." v-model="content"/>
                <button class="btnAnswer" @click="addItem()">发送</button>
            </div>
        </div>
    </div>
</template>
<script>
    import iButton from "iButton"
    import {Toast} from "mint-ui"

    export default {
        data() {
            return {
                content:'',
                isActive:true,
                list:[
                    {
                        name:"张建国",
                        time:"11:20",
                        content:"请问您对人力成本的看法是怎样的？",
                        num:12,
                        isClick:false
                    },
                    {
                        name:"胡润富",
                        time:"11:20",
                        content:"请问您对人力成本的看法是怎样的？",
                        num:8,
                        isClick:false
                    },
                    {
                        name:"刘仕尧",
                        time:"11:20",
                        content:"请问您对人力成本的看法是怎样的？",
                        num:6,
                        isClick:false
                    },
                    {
                        name:"胡首义",
                        time:"11:20",
                        content:"请问您对人力成本的看法是怎样的？",
                        num:3,
                        isClick:false
                    },
                ]
            }
        },
        computed: {
            banner() {
                return this.meeting.settings.home ? this.meeting.settings.home.index_banner : '';
            }
        },
        mounted() {
            this.$store.commit('SPIN')
        },
        components: {
            iButton
        },
        methods:{
            tab($event){
                console.log($event)
                if($event.target.className == 'tabActive'){
                    return
                }
                this.isActive = !this.isActive;
            },
            getNum:function () {
                var arr = [];
                for(var i = 0;i< this.list.length;i++){
                    arr.push(this.list[i].num)
                }
                console.log(arr)
            },
            zan:function (item) {

                if(item.isClick==false){
                    item.num++;
                    item.isClick=true;
                    console.log(item.num)

                }
                else{
                    item.num--;
                    item.isClick=false;
                    console.log(item.num)
                }
                this.getNum()
            },
            addItem:function () {
//                console.log(this.list);
                var objNew={
                    name:"胡首义",
                    time:"11:20",
                    content:this.content ,
                    num:1,
                    isClick:false
                }
                this.list.push(objNew)
                this.content=''
            }

        }
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    @import "../../../../assets/style/home/index.less";
    .currentQuestionTab,.question,.formAnswer{
        padding:0 15px;
    }
    .currentQuestionTab{
        border-bottom:1px solid #bbb;
        font-size: 15px;
        height: 40px;
        line-height:40px;

        a{
            margin:0 30px 0 10px;
            padding:11px 15px;
            color: #5e5e5e;
            font-weight: bold;
            position: relative;


        }
        .tabActive{
            color: #00b3ee;
            border-bottom:2px solid #00b3ee;
        }
    }

    .home-index {
        background-color: #fff;
        position: relative;
    }
    .box{
        z-index: 9;
        position: relative;
        padding-bottom:67px;
        min-height:380px;
        /*max-height: 380px;*/
        /*background-color: #00b3ee;*/
        overflow-y: scroll;
    }
    .lang {
        margin: 10px 0;
    }
    .zanI{
        font-style: normal;
    }
    .active{
        color:red;
        font-weight: bold;

    }
    .formAnswer{
        border-top:1px solid #eee;
        padding:12px 0;
        display: flex;
        justify-content: space-around;

        background-color: white;
        z-index: 9;

        position: fixed;
        bottom:0;
        left:0;
        right:0;
    }
    .inputAnswer{
        width:75%;
        background-color: #f3f3f3;

        border:1px solid #fff;
        padding:12px 0;
        text-indent: 3em;
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
        border-radius: 20px;

    }
    .btnAnswer{
        background-color: #00b459;
        padding:8px 20px;
        color: white;
        border:none;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
    }
    .question{
        position: relative;
        padding:13px 15px;
        .quesName{
            padding:0;
            padding-right:10px;
            border-right:2px solid #bbb;
            margin-right:10px;
            font-size: 13px;
        }
        .content{
            margin:10px 0;
            font-weight: 700;
            font-size: 13px;
        }
        .zan{
            position: absolute;
            right: 15px;
            top:13px;
            color: #0899dc;
            .zanNum{

                font-size: 14px;
                margin-right:13px;
            }
        }

    }
</style>
