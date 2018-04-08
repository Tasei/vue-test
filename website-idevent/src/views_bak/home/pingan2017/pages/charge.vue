<template>
    <div>
        <iui-bg></iui-bg>
        <div class="holder"></div>
        <div class="charge-btn" v-if="step==1" :class="zoomOutClass">
            <img :src="require('../images/button.png')" class="img-responsive" @click="fuckingRoll()">
        </div>
        <div class="charge-wheel" v-show="step==2">
            <div class="charge-wheel-bg">
                <progress-bar type="circle" ref="line"
                              class="charge-wheel-circle" :options="options"></progress-bar>
                <div class="charge-wheel-percentage">{{percentage}}%</div>
                <div class="charge-wheel-core" :style="rollStyle"></div>
            </div>
            <img :src="require('../images/button.png')" class="img-responsive" @click="stepUp()"
                 :class="zoomInOutClass">
        </div>
        <div class="charge-success" v-show="step==3">
            <img :src="require('../images/success.png')" class="img-responsive" :class="zoomClass">
        </div>
    </div>
</template>
<script>
    import iuiBg from "../../../components/iui/page_bg.vue"

    import VueProgress from 'vue-progress'
    import Vue from 'vue'

    Vue.use(VueProgress)

    export default {
        components: {iuiBg},
        data() {
            return {
                options: {
                    color: '#66bff7',
                    strokeWidth: 50,
                    duration: 5000,
                },
                step: 1,
                rollStyle: {},
                zoomClass: {},
                zoomOutClass: {},
                zoomInOutClass: {},
                percentage: 0,
            }
        },
        methods: {
            fuckingRoll() {
                this.zoomOutClass = {zoomOut: true}
                setTimeout(() => {
                    this.step = 2
                }, 900)
            },
            stepUp() {
                if (this.percentage < 100) {
                    this.percentage++
                    this.$refs.line.set(this.percentage / 100)
                    this.zoomInOutClass = {zoomInOut: true}
                    setTimeout(() => {
                        this.zoomInOutClass = {}
                    }, 50);
                    this.rollStyle = {transform: "rotate3d(0, 0, 1, " + (this.percentage / 100 * 360) + "deg)"}
                } else {
                    this.step = 3
                }
            }
        },
        watch: {
            step() {
                if (this.step === 3) {
                    this.zoomClass = {zoomIn: true}
                }
            },
        },
        mounted() {
            this.$store.commit('SPIN')
        },
    }
</script>
<style scoped lang="less">
    @keyframes zoomInOut {
        0% {
            transform: scale(1, 1);
        }
        50% {
            transform: scale(0.8, 0.8);
        }
        100% {
            transform: scale(1, 1);
        }
    }

    .zoomInOut {
        animation: zoomInOut 50ms;
    }

    @keyframes zoomIn {
        from {
            transform: scale(0.1, 0.1);
        }
        to {
            transform: scale(1, 1);
        }
    }

    .zoomIn {
        animation: zoomIn 2s;
    }

    @keyframes zoomOut {
        from {
            transform: scale(1, 1);
        }
        to {
            transform: scale(0, 0);
            display: none;
        }
    }

    .zoomOut {
        animation: zoomOut 1s;
    }

    .iui-page-bg {
        background-image: url("../images/bg.jpg");
    }

    .holder {
        width: 100%;
        padding-top: 68%;
    }

    .charge-btn {
        margin: 20px auto;
        width: 62.5%;
    }

    .charge-success {
        text-align: center;
        width: 62.5%;
        margin: 0 auto 0;
    }

    .charge-wheel {
        text-align: center;
        width: 50%;
        margin: 0 auto;

        .charge-wheel-bg {
            background-image: url("../images/wheel-bg.png");
            padding-top: 100%;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            position: relative;
            margin-bottom: 10px;
        }

        .charge-wheel-circle {
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            position: absolute;
        }

        .charge-wheel-percentage {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #fff;
            font-size: 12px;
            position: absolute;
            z-index: 9999;
        }

        .charge-wheel-core {
            top: 5%;
            left: 5%;
            right: 5%;
            bottom: 5%;
            position: absolute;
            background-image: url("../images/wheel.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            z-index: 99;
            animation-duration: 5s;
            animation-timing-function: linear;
        }
    }

</style>
