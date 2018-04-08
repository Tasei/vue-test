<template>
    <div>
        <div class="alert-mask animated" :class="showSty"></div>
        <div class="i-alert animated" :class="showSty" :style="{'marginTop': top}">
            <div class="relative">
                <i @click="btnClose" class="icon icon-close" v-if="close"></i>
                <div class="content clearfix">
                    <i :class="iconSty"></i>
                    <h5 v-if="!!title" class="font-bold text-dark">{{title}}</h5>
                    <p v-if="!!content"><small>{{content}}</small></p>
                </div>
                <div class="button" :class="posSty">
                    <i-button :on-ok="btnOk" v-if="!!okText" class="btn btn-primary btn-sm btn-outline">{{okText}}</i-button>
                    <button v-if="!!closeText" @click="btnClose" class="btn btn-default btn-sm btn-outline">{{closeText}}</button>
                </div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
    import cx from 'classnames'
    import iButton from '../button'
    export default{
        components: {iButton},
        props: {
            type: {
                type: String,
                default: ''
            },
            title: {
                type: String,
                default: '温馨提示'
            },

            content: {
                type: String,
                default: ''
            },

            duration: {
                type: Number,
                default: 0
            },
            okText: {
                type: [String, Boolean],
                default: '确定'
            },

            onOk: {
                type: Function,//确定按钮
                default: () => {}
            },

            onClose: {
                type: Function,//关闭,
                default: () => {}
            },

            closeText: {
                type: [String, Boolean],
                default: '知道了'
            },

            position: {
                type: String,
                default: 'right'
            },

            loading: {
                type: Boolean,
                default: false
            },

            close: {
                type: Boolean,
                default: true
            }
        },

        data () {
            return {
                show: true,
                top: 0
            }
        },
        computed : {
            iconSty () {
                return cx({
                    ['text-info icon icon-infocirlceo']: this.type == 'info',
                    ['text-success icon icon-smileo']: this.type == 'success',
                    ['text-default icon icon-frowno']: this.type == 'error',
                    ['text-warning icon icon-infocirlceo']: this.type == 'warning',
                    ['text-primary fa fa-spinner fa-2x fa-pulse fa-fw loading']: this.loading
                })
            },

            showSty () {
                return cx({
                    // ['fadeIn']: this.show,
                    ['show']: this.show,
                    ['hide']: !this.show,
                    ['fadeOut']: !this.show,
                    ['text-center']: this.loading
                })
            },

            posSty () {
                return cx({
                    ['text-right']: this.position == 'right',
                    ['text-left']: this.position == 'left',
                    ['text-center']: this.position == 'center'
                })
            }
        },

        mounted () {
            this.top = -$('.i-alert').height()/2 + 'px'
            if (this.duration > 0) {
                let self = this
                setTimeout(function() {
                    self.btnClose()
                }, this.duration * 1000)
            }
        },

        methods: {
            btnClose () {
                this.show = false
                //关闭之后回调
                this.onClose()
            },

            btnOk (e) {
                this.onOk(e)
            }
        }
    }
</script>
<style lang="less" scoped>
    @media(max-width: 600px) {
        .i-alert {
            width: 300px;
            margin-left: -150px;
        }
    }
    @media(min-width: 601px) {
        .i-alert {
            width: 440px;
            margin-left: -220px;
        }
    }
    .i-alert {
        position: fixed;
        left: 50%;
        z-index: 19890510;
        box-shadow:0px 0px 6px 0px rgba(0,0,0,0.04);
        background: #fff;
        top: 38.2%;

        .relative {
            position: relative;
            padding: 20px 20px 20px 20px;
            .content {
                .icon {
                    display: inline-block;
                    width: 40px;
                    height: 40px;
                    float: left;
                    line-height: 1;
                    font-size: 40px;
                    margin-right: 14px;
                    &.loading {
                        display: block;
                        float: none;
                        margin: 0 auto;
                    }
                }
                h5 {
                    font-size: 16px;
                    margin-top: 0;
                    margin-bottom: 4px;
                }

                p {
                    margin: 0;
                }
            }

            .btn {
                padding-left: 25px;
                padding-right: 25px;
                margin-top: 40px;
            }
        }
        .icon-close {
            font-size: 18px;
            cursor: pointer;
            position: absolute;
            top: 3px;
            right: 3px;
            text-align: center;
            line-height: 1;
        }
    }

    .alert-mask {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 19890509;
        background: rgba(0, 0, 0, 0.3);
    }

    .show {
        display: block;
    }
</style>
