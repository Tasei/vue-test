<template>
    <div class="crowne">
        <div class="music" @click="handleMusic" :class="{'fa-spin': music}"></div>
        <swiper :options="swiperOption" ref="mySwiperA">
            <swiper-slide class="slide-item">
                <div class="holder"></div>
                <div class="item-1"></div>
                <div class="arrow animated fadeInDown infinite ">
                    <i class="icon icon-doubleright"></i>
                </div>
            </swiper-slide>
            <swiper-slide class="slide-item">
                <div class="holder"></div>
                <h3 class="title">致亲爱的员工</h3>
                <p class="content">
                    新的一年又将到来，为了感谢员工朋友们在过去的一年中的辛勤工作，也为了能让大家团聚在一起感受新春的脚步，酒店2017年度员工晚会再此恭迎大家的光临。</p>
                <p class="content">热烈的合唱歌声，精彩的员工节目，新颖的设备支持，更有微笑大使们的倾情表演，今年的年会注定会比以往更加精彩难忘。</p>
                <div class="tip"></div>
                <div class="arrow animated fadeInDown infinite ">
                    <i class="icon icon-doubleright"></i>
                </div>
            </swiper-slide>
            <swiper-slide class="slide-item item-3">
                <div class="holder"></div>
                <h3 class="title">服装要求</h3>
                <div class="clothing"></div>
                <p class="content">同往年一样，今年我们也将推出中国元素主题服装评比，请各位同事穿上最美丽帅气的服装，一起加入我们的员工晚会吧！</p>
                <div class="arrow animated fadeInDown infinite ">
                    <i class="icon icon-doubleright"></i>
                </div>
            </swiper-slide>
            <swiper-slide class="slide-item item-4">
                <div class="holder"></div>
                <div v-if="!hasReg">
                    <h3 class="title">立即报名</h3>
                    <form class="form">
                        <div class="form-group">
                            <select class="form-control" v-model="group_id">
                                <option value="0">选择部门</option>
                                <option v-for="g in groups" :value="g.id" v-if="g.is_default==0">{{g.name}}</option>
                            </select>
                        </div>
                        <div v-if="form && form.value.elements.length > 0">
                            <div class="form-group" v-for="item in form.value.elements">
                                <input type="text" v-model="item.value" class="form-control input-lg" :placeholder="item.placeholder"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <a href="javascript:;" @click="btnSave" class="btn btn-primary btn-block btn-lg">提交</a>
                        </div>
                    </form>
                    <p class="content">为了保证年会的有序进行，今年我们将提前录入各位员工的个人信息以便于当天的抽奖游戏活动，请大家务必使用真实信息，于1月20日前完成填写，每人只有一次录入机会，若重复参与将被取消抽奖资格，如有任何问题欢迎咨询人力资源部，年会我们期待与您不见不散。</p>
                </div>
                <div v-else class="btn-result text-center">
                    <a href="javascript:;" class="icon icon-checkcircleo"></a>
                    <h3 class="text-dark font-bold">您已报名成功</h3>
                    <p>年会我们期待与您不见不散</p>
                </div>
            </swiper-slide>

        </swiper>
    </div>
</template>
<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import {Toast, Indicator} from 'mint-ui'
    import Wechat from '../../assets/js/wechat'
    import { Howl } from 'howler'

    //js
    var sound = new Howl({
        src: [
            'https://static.idevent.cn/oss/sgin/small-music-reallu.mp3',
        ],
        loop: true,
        autoplay: true,
    })
    sound.play()

    export default{
        data(){
            return {
                swiperOption: {
                    autoplay: false,
                    direction : 'vertical',
                },
                music: true,
                hasReg: false,
                form: null,
                groups: [],
                group_id: 0,
                sound: null
            }
        },

        components:{
            swiper, swiperSlide
        },

        computed: {
            meeting() {
                return this.$store.state.meeting
            },
            user () {
                return this.$store.state.user
            }
        },

        created() {
            if (!this.user) {
                return;
            }
            new Wechat(
                '2017上海银星皇冠假日酒店年会',
                '2017上海银星皇冠假日酒店年会',
                'https://m.idevent.cn/event/crowne_plaza?mid=' + this.meeting.id,
                'https:' + require('../../assets/images/crowne/share.jpg')
            )
            this.getForms()

        },
        mounted() {
            this.$store.commit('SPIN')
            sound.play()
        },

        methods: {
            /**
              * 获取用户注册信息
            */
            getForms() {
                let self = this
                this.$http.post('register/getRegInfo').then(function(response) {
                    let ret = response.body
                    if (ret.err == 0) {
                        if (ret.res.formList.length > 0) {
                            self.form = ret.res.formList[0]
                        }
                        console.log(self.form)
                        self.hasReg = ret.res.hasRegInfo && self.user.group.is_default==0
                        if(self.hasReg) {
                            self.$router.push({name: 'home_index'})
                        }
                    }
                }).then(()=> {
                    this.getGroupList()
                }).finally(() => {
                    this.$store.commit('SPIN', false)
                })
            },
            /**
              * 获取用户组列表
            */
             getGroupList() {
                let self = this
                this.$http.post('invitation/group/list', {
                    meeting_id: this.meeting.id
                }).then((response) => {
                    if (response.body.err == 0) {
                        self.groups = response.body.res.list
                    }
                })
            },

            //保存
            btnSave() {
                let self = this
                if (this.group_id == 0) {
                    Toast('请选择部门')
                    return false
                }
                let data = new FormData()
                if(this.form && this.form.value.elements.length > 0) {
                    for(let item of this.form.value.elements) {
                        console.log(item)
                        if(item.value == '') {
                            Toast(item.help)
                            return false
                        }
                        data.append('data['+this.form.id+']['+item.id+']', item.value)
                    }
                }
                Indicator.open()
                this.$http.post('invitation/code/updateGroup', {
                    id: this.user.id,
                    group_id: this.group_id
                }).then((response) => {
                    if (response.body.err == 0) {
                        //继续更新
                        self.$http.post('register/saveRegInfo', data).then((response) => {
                            Indicator.close()
                            if (response.body.err == 0) {
                                self.hasReg = true
                            } else {
                                Toast(response.body.msg)
                            }
                        })
                    } else {
                        Indicator.close()
                        Toast(response.body.msg)
                    }
                })
                event.preventDefault()
                return false
            },

            handleMusic() {
                this.music = !this.music
                if (this.music) {
                    sound.play()
                } else {
                    sound.pause()
                }
            }
        }
    }
</script>
<style lang="less" scoped>
    @img_path: '../../assets/images/crowne';
    .mixBg(@bg) {
        background: url("@{img_path}/@{bg}") no-repeat center top;
        background-size: 100% 100%;
    }
    .crowne {
        height: 100vh;
    }
    .slide-item {
        .mixBg("bg.jpg")
    }
    .item-1 {
        .mixBg("item-1.png");
        padding-top: 107.2%;
    }
    .holder {
        padding-top: 18.8%;
        background: url("@{img_path}/logo.png") no-repeat center;
        background-size: 96px 45px;
        position: relative;
        &:after{
            content: '';
            height: 1px;
            background: url("@{img_path}/line.png") no-repeat center;
            background-size: 250px 1px;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
        }
    }
    .title {
        font-size: 20px;
        color: #fff;
        letter-spacing:2px;
        text-align: center;
        font-weight: bold;
        margin: 20px 0;
    }
    .content {
        font-size: 15px;
        color: #fff;
        line-height: 24px;
        margin: 0 0 20px;
        letter-spacing:0px;
        text-align: left;
        padding: 0 40px;
    }
    .tip {
        .mixBg("item-2.png");
        position: absolute;
        left:  0;
        bottom: 0;
        width: 100%;
        padding-top: 32.4%;
    }
    .clothing {
        .mixBg("item-3.png");
        width: 78.67%;
        padding-top: 68%;
        margin: 0 auto;
        margin-bottom: 20px;
    }
    .item-3 {
        .content {
            padding: 0;
            width: 78.67%;
            margin: 0 auto;
        }
    }
    .form-control {
        height: 44px;
    }

    form {
        padding: 0 40px;
    }
    .item-4{
        .content {
            font-size: 13px;
            line-height: 18px;
            color: rgba(255, 255, 255, 0.69);
        }
    }

    .btn-result {
        width: 100%;
        color: #fff;
        padding-top: 40px;
        .icon {
            position: relative;
            font-size: 70px;
            display: block;
            line-height: 1;
            color: #fff;
        }
        h3 {
            margin: 30px 0 10px 0;
            font-size: 20px;
            line-height: 20px;
            color: #fff;
        }
        p {
            margin: 0;
        }
    }
    .arrow {
        position: absolute;
        width: 20px;
        color: rgba(255,255,255,0.69);
        left: 50%;
        margin-left: -10px;
        bottom: 40px;
        z-index: 100;
        .icon{
            transform: rotate(90deg);
            display: block;
            font-size: 20px;
        }
    }
    .music {
        position: absolute;
        height: 42px;
        width: 42px;
        background: url("@{img_path}/music_icon.png") no-repeat center;
        background-size: 21px 21px;
        right: 10px;
        top: 10px;
        z-index: 100;
    }
</style>
