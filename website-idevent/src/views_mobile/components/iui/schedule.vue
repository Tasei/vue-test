<template>
    <div class="iui-schedule">
        <div class="step" v-for="p in list">
            <div class="step-title">
                <div class="left">
                    <i class="radius"></i>
                    <span class="text">{{p.title.date}}</span>
                </div>
                <div class="right font-bold" v-html="p.title.title"></div>
                <div style="clear:both"></div>
            </div>
            <div class="step-content">
                <div class="item" v-for="d in p.content">
                    <div class="left">
                        <span class="text text-dark">{{d.date}}</span>
                    </div>
                    <div class="right text-dark">
                        <p class="title" v-html="d.title"></p>
                        <p v-html="d.desc"></p>
                    </div>
                    <div style="clear:both"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            list: Array
        }
    }
</script>
