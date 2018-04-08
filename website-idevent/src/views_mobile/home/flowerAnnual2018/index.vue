<template>
<div class="index-box">
    <div class="name-list">
        <div class="nameItem" v-for="item in nameList">
            <span class="name">{{item.name}}</span>
            <span class="department">{{item.department}}</span>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        data(){
            return {
                nameList:[
                    {
                        name:'孙丽丽',
                        department:'产品部'
                    },
                    {
                        name:'王花花',
                        department:'技术部'
                    },
                    {
                        name:'马云',
                        department:'人力资源部'
                    },
                    {
                        name:'孙丽丽',
                        department:'产品部'
                    },
                    {
                        name:'王花花',
                        department:'技术部'
                    },
                    {
                        name:'马云',
                        department:'人力资源部'
                    },
                    {
                        name:'孙丽丽',
                        department:'产品部'
                    },
                    {
                        name:'王花花',
                        department:'技术部'
                    },
                    {
                        name:'马云',
                        department:'人力资源部'
                    },
                    {
                        name:'刘花花',
                        department:'人力资源部'
                    },
                ],
            }
        },
        mounted() {
            this.$store.commit('SPIN')
        },
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
    .container{
        width: 100%;
    }
    .index-box{
        width:100%;
        background: url("./images/bg1.jpg") 0 0 no-repeat;
        background-size: 100% 100%;
    }
.nameItem{
    font-size: 50px;
    color: #655d5d;
}
</style>
