<template>
<div class="luck-box">
    <div class="bg">
    </div>
    <div class="six-cards">
        <div class="card" :style="{backgroundImage: `url(${card.cardBg})`}" v-for="(card,index) in cardList" @click="goScratch(index, card, $event)">
        </div>
    </div>
    <div class="gameRules">
        <h5>游戏规则</h5>
        <p>开始发牌共计6张牌，选择任意三张牌进行刮奖，中奖信息展示在卡牌背面。</p>
    </div>
    <div class="scratch" v-show="scratch">
        <div class="scratch-box">
            <i class="iuifont iui-icon-close close" @click.stop.prevent="close"></i>
           <div class="scratch-img">
               <div id="award"class="award" :style="{backgroundImage: `url(${imgBg})`}"></div>
               <canvas id="mask"class="mask" width="340" height="230" @touchmove.stop.prevent="getLuckFn(context, canvas, $event)"></canvas>
           </div>
            <div class="scratch-count">你还有 <span class="scratch-num">{{2-count}}</span> 次机会</div>
        </div>
    </div>

</div>

</template>

<script>
    import { Toast } from 'mint-ui'
    export default {
        data() {
            return {
                scratch:false,
                cardArr:[
                    {
                        imgSrc:require('../images/noluck.png'),
                        imgSrcBg:require('../images/noluck_bg.png'),
                    },
                    {
                        imgSrc:require('../images/cash.png'),
                        imgSrcBg:require('../images/cash_bg.png')
                    },
                    {
                        imgSrc:require('../images/noluck.png'),
                        imgSrcBg:require('../images/noluck_bg.png')
                    },
                    {
                        imgSrc:require('../images/secret.png'),
                        imgSrcBg:require('../images/secret_bg.png')
                    },
                    {
                        imgSrc:require('../images/noluck.png'),
                        imgSrcBg:require('../images/noluck_bg.png')
                    },
                    {
                        imgSrc:require('../images/noluck.png'),
                        imgSrcBg:require('../images/noluck_bg.png')
                    },
                ],
                imgBg:'',
                context: null,
                canvas: null,
                count:0,
                isClose:false,
                curIdx: 0,
                maskBg: null
            }
        },
        computed: {
            cardList() {
                return this.cardArr.map(card => {
                    card.cardBg = require('../images/card_bg.png')
                    return card
                })
            }
        },
        created() {
            this.getCurrentInfo()
            this.initCards(this.cardArr)
        },
        mounted() {
            this.$store.commit('SPIN');
        },
        methods:{
            initCards(arr) {
                for (let i = arr.length - 1; i > 0; i--) {
                    let j = Math.floor(Math.random() * (i + 1));
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
                return arr;
            },
            goScratch(index,card, event) {
                if (this.count > 2) {
                    Toast('你的抽奖机会已用完')
                    return
                }
                this.curIdx = index
                this.imgBg = card.imgSrc
                this.isClose = false;

                const canvas = this.canvas = document.getElementById('mask');
                const context = this.context = canvas.getContext("2d");
                context.globalCompositeOperation = 'source-over';
                if (!this.maskBg) {
                    this.maskBg = new Image();
                    console.dir(this.maskBg)

                    this.maskBg.crossOrigin = 'anonymous';
                    this.maskBg.src=require("../images/gray.png");

                    this.maskBg.onload = () =>{
                        context.drawImage(this.maskBg, 19, 17, 302, 196)
                    }
                }

                context.drawImage(this.maskBg, 19, 17, 302, 196)
                this.scratch = !this.scratch;
            },
            getLuckFn(context, canvas, event) {

                context.globalCompositeOperation = 'destination-out';
                var touch = event.touches[0]; //获取触摸的第一个点

                context.beginPath(); //开始路径的绘制
                context.arc(touch.pageX, touch.pageY - 230, 25, 0, Math.PI * 2); //在所触摸处绘制圆形，半径为20像素

                context.closePath(); //结束路径绘制
                context.fillStyle="#000000"; //随意设置一种绘制颜色
                context.fill(); //填充该颜色

                var imgData = context.getImageData(0, 0, 340, 230); //获取画布中的所有像素

                var data = imgData.data; //得到像素的字节数据
                var length = data.length; //获取该数据的长度
                var transparent = 0
                for (let i = 0; i < length; i += 4) { //循环遍历每一个像素
                    var alpha = data[i + 3]; //获取每个像素的透明度数值

                    if (alpha < 10) //当透明度小于10时，认为它已经被擦除，transparent数值加1
                        transparent++;
                }
//                console.log(transparent)
                var percentage = transparent / (length / 4); //计算透明像素在所有像素点中所占比例
                if (percentage > 0.7){ //当比例大于80%时，显示刮奖结束字样
                    console.log("刮奖结束！");
                    context.beginPath(); //开始路径的绘制
                    context.fillRect(0,0,340,230);
                    context.closePath(); //结束路径绘制
                    context.fillStyle="#BDC3C7"; //随意设置一种绘制颜色
                    context.fill(); //填充该颜色
                    this.isClose = true; //必须刮奖，才能关闭，不然不让关闭
                }
            },
            close() {
                if(this.isClose){
                    let curCard = this.cardList[this.curIdx]
                    this.scratch = !this.scratch;
                    curCard.cardBg = curCard.imgSrcBg
                    this.count++
                    console.log(this.count)
                }else{
                    return
                }
            },
            // 获取当前红包状态
            getCurrentInfo() {
                if (!this.user) {
                    return
                }

                let self = this
                this.$http.post('meeting/redpacket/getCurrentInfo', {
                    meeting_id: this.meeting.id,
                    type: 1
                }).then((response) => {
                    if (response.body.err == 0) {
                        let res = response.body.res
                        this.program = res.program
                        if (res.program && res.program.process_status == 1) {
                            this.start = true
                        }
                        if (res.detail) {
                            this.take = true
                            this.money = res.detail.money
                        }
                    }
                }).then(() => {
                    if (this.take) {
                        this.getRecordList()
                    } else {
                        this.$store.commit('SPIN')
                    }
                    /*
                    if (!this.program) {
                        setTimeout(() => {
                            self.getCurrentInfo()
                        }, 1000)
                    }*/
                })
            },
        }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
.luck-box{
    padding-top:0.1px;
    .bg{
        background: url("../images/red_packet.png") 0 0 no-repeat;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
        position: absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        z-index: -1;
    }
    .six-cards{
        width:100%;
        height:300px;
        /*background-color: #fff;*/
        margin-top:225px;
        padding:0 20px;
        display: flex;
        flex-wrap: wrap;;
        justify-content: space-between;
        align-items: center;
        .card{
            width:103px;
            height:136px;
            border:1px solid;
            /*background: url("../images/card_bg.png") 0 0 no-repeat;*/
            -webkit-background-size: 100% 100%;
            background-size: 100% 100%;
        }
    }
    .gameRules{
        color: #fff;
        padding:0 20px;
        h5{
            font-size:20px;
            margin:0;
            padding:10px 0;
            border-bottom:1px solid #666;
        }
        p{
            font-size:12px;
            margin-top:10px;
        }
    }
    .scratch{
        position: fixed;
        top:0;
        bottom:0;
        left:0;
        right:0;
        background-color: rgba(0,0,0,0.8);
        .scratch-box{
            width:340px;
            height:280px;
            position: absolute;
            top:50%;
            left:50%;
            transform: translate(-50%,-50%);
            /*background-color:#ddd;*/
            i{
                color: #fff;
                font-size: 30px;
                position: absolute;
                right:0;
                top:0px;
                &::after{
                    content: '';
                    width: 3px;
                    height:20px;
                    background: #fff;
                    display: block;
                    position: absolute;
                    top: 38px;
                    right:13px;
                }
            }
            .scratch-img{
                position: absolute;
                bottom:0;
                width:100%;
                height:230px;
                /*border:1px solid;*/
                .award{
                    width: 100%;
                    height: 100%;
                    background: url("../images/noluck.png");
                    background-size: 100% 100%;
                }
                .mask{
                    position: absolute;
                    top: 0;
                    left: 0;
                }
            }
            .scratch-count{
                color: #fff;
                font-size:16px;
                position: absolute;
                bottom:-40px;
                left:50%;
                transform: translate(-50%,0);
                .scratch-num{
                    color: #F8F614;
                }
            }
        }
    }
}

</style>
