<template>
    <div class="iui-bottom-bar">
        <div class="weui-flex">
            <span  v-for="(item, key) in list" class="weui-flex__item iui-bottom-bar__item">
                <router-link v-if="item.route"
                             class="weui-flex__item iui-bottom-bar__item"
                    :to="item.route"
                     :class="{active: isActive(item)}"
                      :id="'item-'+key">
                    <i :class="className(item)"></i>
                    <p class="iui-bottom-bar__label">{{item.title}}</p>
                </router-link>
                <a v-else-if="item.link"
                   class="weui-flex__item iui-bottom-bar__item"
                    :href="item.link"
                     :id="'item-'+key">
                    <i :class="className(item)"></i>
                    <p class="iui-bottom-bar__label">{{item.title}}</p>
                </a>
                <a v-else
                   class="weui-flex__item iui-bottom-bar__item"
                   href="javascript:;"
                   :id="'item-'+key" @click="waitFn">
                    <i :class="className(item)"></i>
                    <p class="iui-bottom-bar__label">{{item.title}}</p>
                </a>
            </span>
        </div>
    </div>
</template>
<script>
    import {Toast} from "mint-ui"
    export default{
        props: {
            list: Array,
        },
        methods: {
            className(item){
                let className = {
                    "iuifont": true,
                }
                if (this.isActive(item)) {
                    let active_name = item.icon_active ? item.icon_active : (item.icon + "-s")
                    className["iui-icon-" + active_name] = true
                } else {
                    className["iui-icon-" + item.icon] = true
                }
                return className
            },
            isActive(item) {
                if(item.route){
//                    console.log(item.route.name == this.$route.name)
                    return item.route.name == this.$route.name
                }else{
                    return false
                }

            },
            waitFn() {
                Toast('敬请期待')
            }
        },
    }
</script>
