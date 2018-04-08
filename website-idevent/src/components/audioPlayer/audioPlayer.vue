<template>
    <div class="audio-player" :class="rollingClass" @click="pp()">
        <audio :src="src" id="v-audio-player"></audio>
    </div>
</template>
<style scoped>
    .audio-player {
        width: 32px;
        height: 32px;
        display: block;
        position: fixed;
        top: 20px;
        right: 20px;
        background-image: url("./player.png");
        background-position: center center;
        background-size: 100% 100%;
        z-index: 9999;
    }

    .rolling {
        animation: rolling 8s linear infinite;
    }

    @keyframes rolling {
        0% {

        }
        50% {
            transform: rotate(180deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }


</style>
<script>
    export default {
        props: {
            src: String
        },
        computed: {
            rollingClass() {
                return this.playing ? {"rolling": true} : {}
            }
        },
        methods: {
            pp() {
                if (this.playing) {
                    this.player.pause()
                } else {
                    this.player.play()
                }
                this.playing = !this.playing
            }
        },
        data() {
            return {
                player: null,
                playing: true,
            }
        },
        mounted() {
            this.player = document.getElementById("v-audio-player")

            this.$parent.$player = this.player
        }
    }
</script>

