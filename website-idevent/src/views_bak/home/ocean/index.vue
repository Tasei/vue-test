<template>
    <div>
        <div class="home-index">
            <div class="qrCodeShow" v-show="qrCodeShow">
                <div class="qrCodeWrap">
                    <div class="qrCodeTitle">
                        <img :src="weixin" alt="">
                        <span>微信扫一扫</span>
                    </div>
                    <img :src="close" alt="" class="qrCodeClose" @click="saoyisao()">
                    <div class="qrCodeContainer">
                        <img :src="qrCode" alt="" class="qrCodeImg" >
                        <div class="qrCodeFoot">
                            <img :src="shape" alt="">
                            <span>手机打开微信<br/>扫二维码查看</span>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="banner" class="home-index-banner">
                <img :src="banner" class="img-responsive"/>
            </div>
            <div class="activities">
                <div class="activities-title">
                    <span class="line left"></span>
                        精彩活动
                    <span class="line right"></span>
                </div>
                <div class="activities-desc" v-html="activitiesDesc"></div>
                <div class="activities-item-wrap">
                    <div class="activities-item-box" v-for="item in activitiesLo">
                        <a v-if="item.link&&!isWechat" href="" @click.prevent="saoyisao(item.qrimg)" class="activities-item">
                            <img :src="item.background" alt="">
                        </a>
                        <a v-else-if="item.link&&isWechat" :href="item.link" class="activities-item">
                            <img :src="item.background" alt="">
                        </a>
                        <router-link v-else-if="item.route_to" :to="item.route_to" class="activities-item">
                            <img :src="item.background" alt="">
                        </router-link>
                        <a  href="javascript:;" v-else-if="!item.link&&!item.route_to"class="activities-item"@click="onClick(item.complete)">
                            <img :src="item.background" alt="">
                        </a >
                    </div>
                </div>
            </div>
            <div class="moment">
                <div class="moment-title">
                    <span class="line left"></span>
                    精彩瞬间
                    <span class="line right"></span>
                </div>
                <div class="moment-content">
                    <div class="moment-tab">
                        <div class="moment-tab-scroll">
                            <a href="javascript:;" :class="{'isActive':selected=='all','moment-tab-item':true}" @click="momentTab('all')">全部</a>
                            <a v-for="(i,j) in areas" @click="momentTab(i.id)" :class="{'isActive':selected==i.id,'moment-tab-item':true}" href="javascript:;" >{{i.name}}</a>
                        </div>

                    </div>
                    <div class="moment-container">
                        <router-link class="moment-item" v-for="(k,m) in active" :to="{name: 'home_page', query: {page: 'momentDetail',id:m}}">
                            <img v-if="k.img_url" :src="k.img_url" alt="" >
                            <img v-else :src="img_url" alt="" >
                            <p style="-webkit-box-orient: vertical;">{{k.title}}</p>
                        </router-link>
                    </div>
                    <router-link class="momentMore" :to="{name: 'home_page', query: {page: 'momentList'}}">查看更多精彩</router-link>
                </div>

            </div>
        </div>

    </div>
</template>
<script>
    import iButton from "iButton"
    import {Toast} from "mint-ui"
    import Wechat, { wx } from 'assets/js/wechat'
    export default{
        data() {
            return {
                activitiesLo:[
                    {
                        background:require('./images/see.png'),
                        link:'http://wxcd.cpic.com.cn/mic/ihandy_fore/registerYXH/keyToJsp.action?key=zhiqingrt',
                        qrimg:require('./images/1.png'),
                    },
                    {
                        background:require('./images/love.png'),
                        link:'http://cpicyshkfj.energytrust.com.cn',
                        qrimg:require('./images/2.png'),
                    },
                    {
                        background:require('./images/service.png'),
//                        link:'https://m.idevent.cn/home/page?page=entry&mid=tbkhj',
//                        qrimg:require('./images/3.png'),
                        complete:true,
                    },
                    {
                        background:require('./images/story.png'),
//                        route_to:{name: 'home_page', query: {page: 'momentList1',num:15}}
                    },
                    {
                        background:require('./images/client.jpg'),
//                        link:'',
                    },
                    {
                        background:require('./images/define.png'),
                        link:'http://yunxi.tv/livestream/b6c8e760738d462a9e080ed2d816e2c5?utm_source=backend_scan&utm_medium=wechat&utm_campaign=yunxi&from=groupmessage&isappinstalled=0&code=081zaNRo0XeGxo1IMITo0j5ZRo0zaNRf&state=1507733684',
                        qrimg:require('./images/6.png'),
                    },
                    {
                        background:require('./images/pay.png'),
                        link:'http://b.eqxiu.com/s/O0yQPssv',
                        qrimg:require('./images/7.png'),
                    },
                    {
                        background:require('./images/special.png'),
                        link:'http://b.eqxiu.com/s/m5Mf2WQL',
                        qrimg:require('./images/8.png'),
                    },

                ],
                selected:'all',
                areas:{},
                moment:{},
                active:{},
                img_url:require('./images/hanxiu.jpg'),
                weixin:require('./images/weixin.png'),
                close:require('./images/close.png'),
                qrCode:require('./images/qrCode.png'),
                shape:require('./images/shape.png'),
                activitiesDesc:'',
                qrCodeShow:false
            }
        },
        computed: {
            banner(){
                return this.meeting.settings.home?this.meeting.settings.home.index_banner:'';
            },
        },
        components: {
            iButton
        },
        created() {
            this.queryMoment();
        },
        mounted() {
            new Wechat('客户节|从心定义，如你所愿', '太平洋产险首届客户节', window.location.href, 'https://static.idevent.cn/oss/meeting/117/pic/4PqeNldC8vWPbeIo.png');
            this.$store.commit('SPIN', false)
        },
        methods: {
            queryMoment() {
                let self = this
                this.$http.post('custom/tbkhj/getHomeInfo')
                    .then(function(response) {
                        let ret = response.body
                        if (ret.err == 0) {
                            self.areas = ret.res.articles.areas;
                            self.moment =ret.res.articles.list;
                            self.momentTab('all');
                            self.activities=ret.res.img_box;
                            self.activitiesDesc=ret.res.desc
                            for(var item in ret.res.img_box){
                                if(ret.res.img_box[item].background!=''){
                                    this.activitiesLo[item].background=ret.res.img_box[item].background;
                                }
                            }
                        }
                    })
            },
            momentTab(id){
                this.selected=id;
                if(id=='all'){
                    let active={};
                    let count=0;
                    for(let i in this.moment){
                        for(let j in this.moment[i]){
                            count++;
                            if(count>4){
                                break
                            }
                            active[j]=this.moment[i][j];
                        }
                    }
                    this.active=active;
                }else{
                    id='p'+id;
                    this.active=this.moment[id];
                }

            },
            onClick(a){
                if(a){
                    Toast('已圆满完成')
                }else{
                    Toast('敬请期待')
                }
            },
            saoyisao(item){
                this.qrCode=item;
                this.qrCodeShow=!this.qrCodeShow;
            },

        }
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    @import "../../../assets/style/home/index.less";
    .activities{
        background-color: white;
        padding:0 15px;
        .activities-title{
            text-align: center;
            font-size: 16px;
            color:#323232;
            line-height: 42px;
        }
        .activities-desc{
            font-size: 12px;
            text-align: center;
            color: #949494;
        }
        .activities-item-wrap{
            width:100%;
            min-height:270px;
            margin-top: 10px;
            display: flex;
            flex-wrap: wrap;
            justify-content:space-between;
            .activities-item-box{
                width:48%;
                .activities-item{
                    display: block;
                    width:100%;
                    margin-bottom:10px;
                }
            }

        }

    }
    .moment {
        background-color: white;
        padding: 0 15px;
        .moment-title {
            text-align: center;
            font-size: 16px;
            line-height: 42px;
            color:#323232;
        }

        .moment-content{
            .moment-tab{
                width:100%;
                height:38px;
                line-height: 38px;
                .moment-tab-scroll{
                    height:38px;
                    line-height: 38px;
                    white-space: nowrap;
                    overflow-y: hidden;
                    overflow-x: auto;

                    .moment-tab-item{
                        padding-bottom:5px;
                        margin-right:20px;
                        color: #646464;
                        font-size: 14px;
                    }
                }
                .isActive{
                    border-bottom:2px solid #bc202b;
                }
            }
            .moment-container{
                margin-top:10px;
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                /*max-height: 348px;*/
                overflow: hidden;
                .moment-item{
                    display: block;
                    width:48%;
                    img{
                        width:100%;
                        /*height: 120px;*/
                    }
                    p{
                        width:100%;
                        /*height:44px;*/
                        display: -webkit-box;
                        -webkit-line-clamp:2;
                        overflow: hidden;
                        text-overflow: ellipsis;

                        color:#323232;
                        font-size: 14px;
                        line-height: 22px;
                        text-align: center;
                        padding:3px 15px;
                    }
                }
            }
            .momentMore{
                display: block;
                padding:10px 0 10px;
                color: #bc202b;
                font-size: 14px;
                font-weight: 700;
                text-align: center;
            }
        }

    }

    .line {
        display: inline-block;

        border: 1px solid #333;
        width: 30px;
        height: 0;
        /*position: relative;*/
    }
    .left{
        margin: 22px 8px 5px 0px;
    }
    .right{
        margin: 22px 0px 5px 8px ;
    }
.qrCodeShow{
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    left: 0;
    top:0;
    right:0;
    bottom:0;
    .qrCodeWrap{
        width:400px;
        height:430px;
        position: absolute;
        left:50%;
        top:50%;
        padding:0 84px;
        margin-top:-215px;
        margin-left:-200px;
        background-color: white;
        box-shadow:0 0 11px 1px;
        .qrCodeTitle{
            text-align: center;
            margin-top:52px;
            img{
                width:25px;
                height:20px;
                vertical-align: top;
                margin-top: 10px;;
            }
            span{
                font-size: 28px;
            }
        }
        .qrCodeClose{
            width: 12px;
            height:12px;
            position: absolute;
            top:20px;
            right:20px;
        }
        .qrCodeContainer{
            width:230px;
            height:250px;
            border:1px solid #e6eaeb;
            margin-top:26px;
            .qrCodeImg{
                width:156px;
                height:156px;
                margin:25px 37px 15px;
            }
            .qrCodeFoot{
                text-align: center;
                img{
                    width:32px;
                    height:32px;
                    vertical-align: top;
                }
                span{
                    font-size: 12px;
                    display: inline-block;
                }
            }
        }
    }
}

</style>
