<template>
    <div class="i-dot-steps-container">
        <span v-show="showRemark" class="user-remark">{{remark}}</span>
        <h5 class="i-dot-steps-title text-primary">{{currentTitle}}</h5>
        <div class="i-dot-steps-list">
            <div v-for="(option, index) in steps"
                 class="i-dot-steps-dot" :class="{'complete': current > index, 'active': current==index}">
                <span :class="{'bg-primary': current >= index, 'default': current < index}"></span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                showRemark: false,
                remark: '',
            }
        },
        props: {
            steps: Array,
            current: {
                type: Number,
                default: 0
            }
        },
        computed: {
            currentTitle() {
                if (!!this.steps[this.current]) {
                    if (this.meeting.id == '153') {
                        if (this.steps[this.current].title == '携带人信息' || this.steps[this.current].title == '线下支付') {
                            this.showRemark = true;
                        } else {
                            this.showRemark = false;
                        }
                    }
                    return this.steps[this.current].title
                }
                return "";
            }
        }, created() {
            this.remark = this.user.remark;
        }
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    .i-dot-steps-title {
        font-weight: 600;
        font-size: 16px;
        letter-spacing: 0px;
        line-height: 16px;
        text-align: center;
        margin-top: 20px;
    }

    .i-dot-steps-list {
        margin: 1rem auto;
        text-align: center;
    }

    .i-dot-steps-dot {
        width: 20px;
        height: 20px;
        border-radius: 100%;
        display: inline-block;

        &.active {
            background: rgba(0, 83, 156, 0.08);
        }

        &.complete,
        &.active {
        }

        span {
            &.default {
                background-color: #ddd;
            }
            width: 4px;
            height: 4px;
            border-radius: 100%;
            display: inline-block;
            margin: 8px;
        }
    }

    .user-remark {
        background-image: url("../../src/assets/images/prompt.png");
        background-repeat: no-repeat;
        background-size: 16px 16px;
        background-position: 0px 2px;
        line-height: 20px;
        font-size: 14px;
        display: inline-block;
        padding-left: 20px;
        margin-top: 15px;
        color: #E20707;
    }
</style>
