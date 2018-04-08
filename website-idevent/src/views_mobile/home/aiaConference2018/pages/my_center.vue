<template>
    <div class="qr-bg" v-if="user">
        <div class="qr-wrapper">
            <div class="my-qrcode">
                <div class="my-qrcode-image-wrapper">
                    <img class="my-qrcode-image" src="/api/meeting/showQrcode" >
                </div>
                <div class="text">
                    <p v-if="user.user_name">{{user.user_name}}</p>
                    <p v-else>{{user.contact.name}}</p>
                </div>
                <div class="text mg-top-none">
                    <p v-if="user.mobile">{{user.mobile}}</p>
                    <p v-else>{{user.code}}</p>
                </div>
            </div>
        </div>
        <div class="select-btn">
            <a v-for="bt in btnList">{{bt.text}}</a>
        </div>
        <p class="tip">
            请长按二维码保存，于“漫步西贡”活动中出示保存的二维码完成打卡任务
        </p>
        <h4>会务组联系方式</h4>
        <table>
            <tbody>
                <tr>
                    <th>周衢：</th>
                    <td>13651814323</td>
                </tr>
            </tbody>
        </table>
        <i-button :on-ok="logout" v-if="user" class="btn btn-primary btn-outline btn-lg m-logout-btn" style="color: #ED5977;border-color: #ED5977;margin-top: 50px;width: 60%;margin-left: 20%;">
            退出登录
        </i-button>
        <!-- <bottom-bar></bottom-bar> -->
    </div>
</template>
<script>
    import BottomBar from "../components/bottomBar";
    import iButton from "iButton"
    // import snowshoe from './snowshoe.vue'
    export default {
        components: {
            iButton, BottomBar
            // snowshoe
        },
        data(){
            return{
                btnList: [
                    {text: '酒店入住签到'},
                    {text: '用餐签到'},
                    {text: '活动打卡'},
                ]
            }
        },
        created() {
            console.log(this.user)
            if (this.user) {
                this.$store.commit("SPIN", false)
            }else {
                this.$parent.$parent.checkLogin()
            }
        },
        methods: {
            logout(e) {
                let self = this
                this.$http.post('meeting/logout')
                    .then(function(response) {
                        let ret = response.body
                        if (ret.err == 0) {
                            self.$store.commit('USER', null)
                            this.$cookie.delete('WX_AUTH')

                            this.$router.push({name: "portal"})
                            return
                        }
                    })
                    .finally(function(){
                        e.loading = false
                    })
            },
        }
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    table{
        width: 80%;
        margin: 0 auto;
        color: #333;
        font-size: 16px;
        th{
            opacity: 0.99;
            text-align: right;
            vertical-align: top;
            width: 40%;
            font-weight: normal;
            color: #333;
        }
    }

    .qr-wrapper{
        background: #fff;
        padding: 47px 85px 0;
        position: relative;
    }
    .my-qrcode{
        background: #fff;
        opacity: 0.94;
        border-radius: 2px;
        text-align: center;
        .text{
            margin-top:15px;
            font-size: 16px;
            p{
                margin: 0;
            }
        }
        .mg-top-none{
            margin-top: 0;
        }
    }
    .select-btn{
        text-align: center;
        font-size: 0;
        margin-top: 25px;
        a{
            display: inline-block;
            background-color: #ED5977;
            color: #fff;
            font-size: 12px;
            padding: 3px 8px;
            margin-right: 10px;
        }
    }
    .tip{
        text-align: center;
        color: #999;
        opacity: .8;
        font-size: 12px;
        padding: 25px 55px;
        margin-bottom: 30px;
    }
        
    h4{
        text-align: center;
        font-size: 16px;
        // margin-top: 120px;
        margin-bottom: 15px;
        color: #000;
        font-weight: bold;
    }
    .lout{
        color: #ED5977;
    }
        
</style>
