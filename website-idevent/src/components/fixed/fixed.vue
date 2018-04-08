<template>
<div class="fixed">
    <div class="fixed-content">
        <slot></slot>
    </div>
</div>
</template>
<style lang="less" scoped>
    .fixed {
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        >.fixed-content {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: auto;
        }
    }
</style>
