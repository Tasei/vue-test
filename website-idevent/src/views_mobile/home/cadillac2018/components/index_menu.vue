<template>
    <div class="iui-index-menu" :class="clsName">
        <div class="item" v-for="item in list">
            <i class="menu-icon" :class="'iuifont iui-icon-'+item.icon"></i>
            <router-link v-if="item.route_to" :to="item.route_to">
                <h5 class="list-titles" v-html="item.title"></h5>
                <p class="list-details" v-html="item.desc"></p>
            </router-link>
            <a v-else-if="item.link" :href="item.link" @click="onClick(item)">
                <h5 class="list-titles" v-html="item.title"></h5>
                <p class="list-details" v-html="item.desc"></p>
            </a>
            <div v-else  @click="waitFn">
                <h5 class="list-titles" v-html="item.title"></h5>
                <p class="list-details" v-html="item.desc"></p>
            </div>
        </div>
    </div>
</template>
<script>
    import {Toast} from "mint-ui"
    export default{
        props: {
            'list': Array,
            clsName: String
        },
        methods: {
            onClick(item) {
                if (item.onClick) {
                    return item.onClick()
                }
            },
            waitFn() {
                Toast('敬请期待')
            }
        }
    }
</script>
<style scoped lang="less">
    .iui-index-menu .item h5{
        line-height: 29px;
    }
</style>
