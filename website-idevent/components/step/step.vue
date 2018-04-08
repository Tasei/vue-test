<template>
    <div class="i-step-container">
        <a class="line-default"></a>
        <div class="i-step">
            <div class="step-item" v-for="(option, index) in steps" :class="{'complete': current > index, 'active': current==index}">
                <a class="circle">{{index + 1}}</a>
                <p class="title text-gray font-bold">{{option.title}}</p>
                <p class="content text-gray"><small>{{option.content}}</small></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        steps: Array,
        current: {
            type: Number,
            default: 0
        }
    },
}
</script>
<style lang="less" scoped>
.layer () {
    content: "";
    position: absolute;
    top: 18px;
    z-index: 10;
    height: 4px;
}

@import "../../styles/themes/default/variables";
.i-step-container {
    position: relative;
    margin: 49px 0;
}

.i-step {
    display: table;
    width: 100%;
    position: relative;
    background: transparent;
}

.step-item {
    display: table-cell;
    height: 80px;
    background: transparent;
    position: relative;
    text-align: center;
    padding-top: 40px;
    &:first-child {
        &:after {
            left: 0px;
            width: 50%;
            background: #fff;
            .layer()
        }
    }
    &:last-child {
        &:after {
            content: "";
            position: absolute;
            right: 0px;
            width: 50%!important;
            top: 18px;
            background: #fff;
            z-index: 10;
            height: 4px;
        }
    }
    p {
        margin: 0;
    }
    &.active,
    &.complete {
        .circle {
            background: @brand-primary;
            color: #fff;
            box-shadow: 0px 2px 4px 0px fade(@brand-primary, 20%);
        }
    }
    &.active {
        &:before {
            left: 0;
            width: 50%;
            background: @brand-primary;
            .layer()
        }
        .title {
            color: @brand-primary;
        }
    }
    &.complete {
        &:before {
            left: 0px;
            width: 100%;
            background: @brand-primary;
            .layer()
        }
        .circle {
            background: @brand-primary url("../../src/assets/images/confirm@2x.png") no-repeat center;
            background-size: 16px 12px;
            text-indent: -999999px;
        }
    }
}

.line-default {
    height: 4px;
    width: 100%;
    background: #eeeeee;
    display: inline-block;
    position: absolute;
    left: 0;
    right: 0;
    top: 18px;
    z-index: -1;
}

.circle {
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -18px;
    display: block;
    text-align: center;
    z-index: 15;
    width: 36px;
    height: 36px;
    background: #f3f3f3;
    border-radius: 50%;
    color: #bbb;
    font-size: 18px;
    line-height: 36px;
}
</style>
