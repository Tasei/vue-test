<template>
    <div class="qr-bg" v-if="user">
        <div class="qr-wrapper">
            <div class="my-qrcode">
                <div class="my-qrcode-image-wrapper">
                    <img class="my-qrcode-image" src="/api/meeting/showQrcode" >
                </div>
                <div class="text">用餐二维码</div>
            </div>
        </div>
        <hr style="border-bottom:1px solid rgba(0.0.0,.1);width: 90%;margin: 15px auto;">
        <table>
            <tbody>
            <tr>
                <th>姓名</th>
                <td v-if="user.user_name">{{user.user_name}}</td>
                <td v-else>{{user.contact.name}}</td>
            </tr>
            <tr>
                <th>手机</th>
                <td v-if="user.mobile">{{user.mobile}}</td>
                <td v-else>{{user.code}}</td>
            </tr>
            <tr>
                <th>用餐安排</th>
                <td v-html="user.remark"></td>
            </tr>
            </tbody>
        </table>

        <i-button :on-ok="logout" v-if="user" class="btn btn-primary btn-outline btn-lg m-logout-btn">
            退出登录
        </i-button>
        <!--<bottom-bar></bottom-bar>-->
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
        color: #000;
        th{
            opacity: 0.4;
            text-align: right;
            vertical-align: top;
            padding-right: 2em;
            width: 40%;
        }
    }
    .btn.m-logout-btn{
        font-family:PingFangSC-Regular;
        font-weight: normal;
        width: 62.5%;
        margin: 60px auto 0;
        display: block;
    }
    .qr-wrapper{
        background: #fff;
        padding: 100px 85px 0;
        position: relative;
    }
    .my-qrcode{
        background: #fff;
        opacity: 0.94;
        border-radius: 2px;
        text-align: center;

        .my-name{
            font-family:PingFang-SC-Medium;
            color: #333;
            font-size: 18px;
            line-height: 24px;
            padding-top: 60px;
            margin-top: 0;
            margin-bottom: 0;
            margin-left: auto;
            margin-right: auto;
            // border-bottom: 1px solid #ddd;
        }

        .my-code{
            font-size: 15px;
            line-height: 20px;
            margin-top: 0;
            margin-bottom: 0;
            margin-left: auto;
            margin-right: auto;
            padding-bottom: 25px;
        }

        .my-qrcode-image-wrapper{
            // padding: 0 20px;
        }
        .my-qrcode-image{
            // border: 1px solid #ccc;
            // padding: 0;
            // margin: 30px auto;
        }
        .my-qrcode-desc{
            // padding-top: 25px;
            margin-top: 10px;
            color: #999;
            font-size: 12px;
        }
        .icon-sign {
            position: absolute;
            width: 64px;
            height: 64px;
            background-position: center;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-image: url("../../../../assets/images/sign.png");
        }
    }
    .btn-outline{
        color:#1F9BD1 !important;
        border-color:#1F9BD1 !important;
    }
    .text{
        margin-top:15px;
    }
</style>
