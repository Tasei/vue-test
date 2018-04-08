<template>
    <div>
        <!--
        <mt-navbar class="iphoto-navbar" v-model="selected">
            <mt-tab-item id="1">我的照片</mt-tab-item>
            <mt-tab-item id="2">已购照片</mt-tab-item>
            <mt-tab-item id="3">打印照片</mt-tab-item>
        </mt-navbar>
        -->
        <me-photo></me-photo>
    </div>
</template>
<script>
    import mePhoto from './components/mePhoto'
    export default {
        components: {
            mePhoto
        },
        data() {
            return {
                selected: '1',
            }
        }
    }
</script>
