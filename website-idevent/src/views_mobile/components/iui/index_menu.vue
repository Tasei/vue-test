<template>
    <div class="iui-index-menu" :class="clsName">
        <div class="item" v-for="item in list">
            <i class="menu-icon" :class="'iuifont iui-icon-'+item.icon"></i>
            <router-link v-if="item.route_to" :to="item.route_to">
                <h5 v-html="item.title"></h5>
                <p class="list-details" v-html="item.desc"></p>
            </router-link>
            <a v-else-if="item.link" :href="item.link" @click="onClick(item)">
                <h5 v-html="item.title"></h5>
                <p class="list-details" v-html="item.desc"></p>
            </a>
            <div v-else>
                <h5 v-html="item.title"></h5>
                <p class="list-details" v-html="item.desc"></p>
            </div>
        </div>
    </div>
</template>
<script>
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
            }
        }
    }
</script>
