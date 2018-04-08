<template>
    <div class="v-spinner" :class="fixClass" v-show="loading">
        <div style="position: relative;width: 100%;height: 100vh;background: #fff">
            <div class="v-bounce v-bounce1" :style="spinnerBasicStyle">
                <div class="v-bounce v-bounce2" :style="spinnerStyle"></div>
                <div class="v-bounce v-bounce3" :style="spinnerStyle"></div>
            </div>
        </div>
    </div>
</template>
<script>
import cx from 'classnames'
export default {
    props: {
        fix: {
            type: [String, Boolean],
            default: false
        },
        loading: {
            type: Boolean,
            default: true
        },
        // color: {
        //     type: String,
        //     default: '#00549c'
        // },
        size: {
            type: Number,
            default: 60
        },
        margin: {
            type: String,
            default: '2px'
        },
        radius: {
            type: String,
            default: '100%'
        }
    },
    data() {
        return {
            spinnerStyle: {
                height: this.size + 'px',
                width: this.size + 'px',
                borderRadius: this.radius,
                opacity: 0.6,
                position: 'absolute',
                // backgroundColor: this.color,
                top: 0,
                left: 0
            }
        }
    },
    computed: {
        spinnerBasicStyle() {
            return {
                height: this.size + 'px',
                width: this.size + 'px',
                position: 'absolute',
                left: '50%',
                top: '50%',
                marginLeft: -(this.size / 2) + 'px',
                marginTop: -(this.size / 2) + 'px',
            }
        },
        fixClass() {
            return cx({
                'fix': this.fix
            })
        }
    }

}
</script>
<style lang="less" scoped>
.fix {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #fff;
}

.v-spinner {
    transition: all ease 111s;
}

.v-spinner .v-bounce2 {
    -webkit-animation: v-bounceStretchDelay 2s 1s infinite ease-in-out;
    animation: v-bounceStretchDelay 2s 1s infinite ease-in-out;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}

.v-spinner .v-bounce3 {
    -webkit-animation: v-bounceStretchDelay 2s 0s infinite ease-in-out;
    animation: v-bounceStretchDelay 2s 0s infinite ease-in-out;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}

@-webkit-keyframes v-bounceStretchDelay {
    0%,
    100% {
        -webkit-transform: scale(0);
        transform: scale(0);
    }
    50% {
        -webkit-transform: scale(1.0);
        transform: scale(1.0);
    }
}

@keyframes v-bounceStretchDelay {
    0%,
    100% {
        -webkit-transform: scale(0);
        transform: scale(0);
    }
    50% {
        -webkit-transform: scale(1.0);
        transform: scale(1.0);
    }
}
</style>
