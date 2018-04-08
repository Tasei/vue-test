<template>
<div class="mainMeet">
    <div class="title">
        <h4>{{info.title}}</h4>
    </div>
    <div class="location">
        <h5>{{info.address}}</h5>
    </div>
    <div class="mainimg" v-for="item in info.imgArr">
        <a :href="item.imgSrc" v-if="item.imgSrc">
            <img :src="item.imgSrc" alt="">
        </a>
    </div>
</div>
</template>

<script>
    export default {
        props:{
            info:{
                title:String,
                address:String,
                imgArr:Array,
            }
        },
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
.mainMeet{
    padding:0 15px;
    padding-top:0.1px;
    .title{
        margin:20px 0;
    }
    .mainimg{
        margin-bottom: 10px;
    }
}
</style>
