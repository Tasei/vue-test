<template>
    <div>
        <div class='clock-wrapper'>
            <div class='clock-border'>
                <div class='clock'>
                    <div class="info-box" v-if="info">{{info}}</div>
                    <ul class='minute-marks'>
                        <li v-for="n in 30" :class="{five:n%5==0}" :style="{transform: 'rotate(' + n*6 + 'deg)'}"></li>
                    </ul>
                    <div class='hour' :style="{transform: 'rotate(' + hourDeg + 'deg)'}">
                        <div class='hand'></div>
                    </div>
                    <div class='minute' :style="{transform: 'rotate(' + minuteDeg + 'deg)'}">
                        <div class='hand'></div>
                    </div>
                    <div class='second' :style="{transform: 'rotate(' + secondDeg + 'deg)'}">
                        <div class='hand'></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
    export default{
        props: {
            hour: {
                type: Number,
                default: 0,
            },
            minute: {
                type: Number,
                default: 0,
            },
            second: {
                type: Number,
                default: 0,
            },
            info: {
                type: String,
                default: '',
            }
        },
        computed: {
            hourDeg() {
                return (this.hour + this.minute / 60) * 30;
            },
            minuteDeg() {
                return (this.minute + this.second / 60) * 6;
            },
            secondDeg() {
                return this.second * 6;
            }
        },
        data(){
            return {
            }
        },

    }
</script>
<style lang="less" scoped>
    .clock-wrapper {
        padding-top:100%;
        position: relative;
    }
    .clock-border {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border: 6px solid #d2d8df;
        border-radius: 50%;
        background-clip: padding-box;
    }
    .clock {
        position: absolute;
        top: 1%;
        bottom: 1%;
        left: 1%;
        right: 1%;
        background-color: #262c33;
        border: 8px solid #373f4a;
        border-radius: 50%;
        background-clip: border-box;
    }
    .info-box {
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translate(-50%, 0);
        padding: 0.2em 0.6em;
        background: #ccc;
        text-align: center;
        font-weight: bold;
        color: #333;
        font-size:0.9em;
    }
    .hour, .minute, .second, .hand {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
    .hand:before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        background-clip: padding-box;
        border-radius: 20%;
    }
    .hour .hand {
        animation: tick 43200s normal infinite steps(3600, end);
    }
    .hour .hand:before {
        top: 18%;
        bottom: 50%;
        width: 5%;
        background-color: #fff;
    }
    .minute .hand {
        animation: tick 3600s normal infinite steps(3600, end);
    }
    .minute .hand:before {
        top: 12%;
        bottom: 50%;
        width: 4%;
        background-color: #fff;
    }
    .second .hand {
        animation: tick 60s normal infinite steps(60, end);
    }
    .second .hand:before {
        top: 10%;
        bottom: 40%;
        width: 3%;
        background-color: #f16b41;
        transform-origin: center 80%;
        animation: tick-second 1s normal infinite steps(30, end);
    }
    .second .hand:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        display: inline-block;
        width: 12%;
        height: 12%;
        border-radius: 50%;
        background-clip: padding-box;
        background-color: #f16b41;
    }
    @keyframes tick-second{
        0% {transform: rotate(0deg); }
        21% {transform: rotate(4deg); }
        26% {transform: rotate(7deg); }
        33% {transform: rotate(4deg); }
        37% {transform: rotate(6deg); }
        100% {transform: rotate(6deg); };
    }
    @keyframes tick{
        0% {transform: rotate(0deg); }
        100% {transform: rotate(360deg); };
    }

    .minute-marks {
        list-style-type: none;
    }
    .minute-marks li {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: block;
    }
    .minute-marks li:before,
    .minute-marks li:after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        width: 2%;
        height: 2%;
        display: block;
        background-color: #d4d5d6;
        border-radius: 100%;
        transform: none;
        -webkit-transform: none;
    }

    .minute-marks li:before {
        top: 2%;
    }
    .minute-marks li:after {
        bottom: 2%;
    }
    .minute-marks li.five:before,
    .minute-marks li.five:after {
        height: 6%;
    }

</style>
