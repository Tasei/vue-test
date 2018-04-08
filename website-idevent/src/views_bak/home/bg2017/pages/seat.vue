<template>
    <div class="seat">
        <h5>- 您的晚宴桌号 -</h5>
        <h3>{{seat_number}}</h3>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                seat_number : ''
            }
        },
        components:{
        },
        created() {
            this.$http.post('register/getFormDataByName', {
                 name: 'seat'
            }).then((response) => {
                if (response.body.err == 0 && response.body.res.length > 0) {
                    this.seat_number = Object.values(response.body.res[0].values)[0]

                }
            }).then(() => {
                this.$store.commit('SPIN')
            })
        },
        mounted() {
            this.$store.commit('SPIN')
        }
    }
</script>
<style lang="less" scoped>
    .seat {
        min-height: 100vh;
        background-image: url("../images/seat_bg.jpg");
        background-repeat: no-repeat;
        background-size: 100% auto;
        background-position: center top;
        padding-top: 10.67%;
        text-align: center;
    }
    h5 {
        font-size: 12px;
        color: #fff;
        line-height: 12px;
        margin: 0 0 10px;
    }
    h3 {
        font-size: 32px;
        line-height: 32px;
        color: #fff;
        margin: 0;
    }
</style>
