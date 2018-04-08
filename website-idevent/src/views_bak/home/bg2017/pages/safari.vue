<template>
    <div class="safari"></div>
</template>

<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
        },
        mounted() {
            if (this.isWechat) {
                this.$store.commit('SPIN')
            } else if (this.isIOS){
                window.location.href = 'https://itunes.apple.com/cn/app/id1217680703?mt=8'
            } else if (this.isAndroid) {
                window.location.href = 'https://static.idevent.cn/oss/sourcingproject/BG_Sudoku.apk'
            }
        }
    }
</script>
<style lang="less" scoped>
    .safari {
        width: 100%;
        min-height: 100vh;
        background: url("../images/safari.jpg") no-repeat center top;
        background-size: 100% auto;
    }

</style>
