<template>
    <div class="iui-list">
        <div class="iui-list-item" v-for="item in list">
            <router-link :to="item.to">
                {{item.title}}
                <i class="fa fa-angle-right arrow-right"></i>
            </router-link>
        </div>
    </div>
</template>
<script>
    export default{
        props: {
            list: Array
        }
    }
</script>
