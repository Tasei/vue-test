<template>
    <div>
        <div class="bg"></div>
        <div class="well">
            <h5><span class="fa fa-play"></span>{{$t('dinnerTable')}}</h5>
            <p>{{dinnerTable}}</p>
        </div>
    </div>
</template>
<style scoped lang="less" rel="stylesheet/less">
    .bg {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #f3f3f3;
        z-index: -1;
    }

    .well {
        padding: 20px;
        margin-bottom: 10px;
        background: #fff;
        h5 {
            font-family: PingFangSC-Regular;
            font-size: 17px;
            color: #666;
            line-height: 24px;

            .fa {
                font-size: 10px;
                line-height: 10px;
                vertical-align: middle;
                margin-right: 0.75em;
                margin-top: -4px;
                color: #2d96cd;
            }
        }
        p {
            position: relative;
            font-family: PingFangSC-Regular;
            font-size: 48px;
            margin-left: 10px;
            color: #333;
        }
        a {
            font-size: 14px;
            line-height: 24px;
            position: absolute;
            right: 0;
            bottom: 0;
        }
    }
</style>
<script>
    export default{
        data() {
            return {
                dinnerTable: "",
            }
        },
        locales:{
            en: {
                dinnerTable: "Dinner Table"
            },
            zh: {
                dinnerTable: "晚宴座位号"
            }
        },
        created() {
            this.getSeats()
        },
        methods: {
            getSeats(){
                this.$store.commit('SPIN')
                let self = this
                this.$http.post('custom/chery/getSeats').then((response) => {
                    let ret = response.body
                    if (ret.err == 0) {
                        self.dinnerTable = ret.res.dinnerTable
                    }
                }).then(() => {
                    this.$store.commit('SPIN')
                })
            }
        }
    }
</script>
