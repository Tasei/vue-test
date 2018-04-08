<template>
    <div class="mt-container">
        <div class="block">
            <div class="title">时差</div>
            <div class="content">
                <p>
                    北京位于东八区，意大利位于东一区，土耳其与希腊都位于东二区。
                    欧洲大部分国家（除冰岛）从2017年3月26日凌晨进入夏令时。
                    意大利时间将比北京时间慢6小时，
                    土耳其与希腊时间则会比意大利时间快1小时。<br />
                <p>乘坐游轮期间请根据游轮的提醒及时调整时间，以防耽误您的行程。</p>
                </p>
            </div>
            <div class="title">当前时间</div>
            <div class="clock-box" v-for="t in list">
                <div class="clock-title">{{t.name}}</div>
                <i-clock class="clock-area" :hour="t.hour" :minute="t.minute" :second="t.second" :info="t.ampm"></i-clock>
            </div>
        </div>
    </div>
</template>
<script>
    import iClock from '../components/clock.vue'
    export default{
        created() {
            if (this.$route.query.title) {
                document.title = this.$route.query.title;
            }
        },
        data() {
            return {
                list: []
            }
        },
        components: {
            iClock
        },
        mounted() {
            this.getList();
        },
        methods: {
            getList(){
                let self = this
                this.$http.post('custom/oriflame/getTime').then((response) => {
                    let ret = response.body;
                    if (ret.err == 0) {
                        self.list = ret.res.list;
                    }
                }).then(() => {
                    this.$store.commit('SPIN')
                })
            }
        }
    }
</script>
<style lang="less" scoped>
    @import "../assets/style.less";
    .content {
        margin-bottom: 20px;
    }
    .clock-box {
        margin-bottom: 30px;
        .clock-title {
            text-align: center;
            font-weight: bold;
        }
        .clock-area {
            width: 60%;
            margin: 10px auto;
        }
    }
</style>
