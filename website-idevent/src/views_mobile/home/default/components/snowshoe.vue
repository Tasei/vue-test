<template>
    <div class="snowshoe" v-if="status" :class="{'zoom': animate, 'repeat': status==2, 'fail': status==3}"></div>
</template>
<script>
    import 'src/views_mobile/home/default/components/snowshoe'
    import {Toast} from 'mint-ui'
    export default{
        data(){
            return{
                status: 0,
                animate: false
            }
        },
        mounted() {
            let _this = this
            let stampScreenInitData = {
                "postUrl": "/api/stamp/sign",
                "stampScreenElmId": "stamp-screen",
                "postViaAjax": true, // post via Ajax
                "progressBarOn": true,
                "success": function(response){
                    if (response.err == 0 ) {
                        if (response.res.error == -1) {
                            _this.status = 2
                        } else {
                            _this.status = 1
                        }
                    } else {
                        _this.status = 3;
                        Toast(response.message || '签到失败')
                    }
                    _this.animate = true;
                    setTimeout(() => {
                        _this.animate = false
                    }, 1000)
                },
                "error": function(response){
                    Toast('签到失败')
                }
            }

            $.snowshoe.stampScreen.init(stampScreenInitData, $.snowshoe.client);
        },
        components:{
        }
    }
</script>
<style lang="less" scoped>
    .snowshoe {
        position: absolute;
        width: 128px;
        height: 128px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url("../../../../assets/images/sign/success.png");
        left: 60%;
        top: 70px;
        &.repeat {
            background-image: url("../../../../assets/images/sign/repeat.png");
        }
        &.fail {
            background-image: url("../../../../assets/images/sign/failed.png");
        }
        &.zoom {
            animation: zoomIn 200ms ease-in-out;
        }
    }
    @keyframes zoomIn {
        from {
            left: 20%;
            top: 140px;
            transform: scale(3);
        }
        to {
            left: 60%;
            top: 70px;
            transform: scale(1);
        }
    }
</style>
