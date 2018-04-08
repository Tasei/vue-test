<template>
    <div class="home-hotel">
        <div class="list" v-for="item in list">
            <div class="item" :style="{background:item.bgImg}">
                <router-link v-if="item.routeTo" :to="item.routeTo">
                    {{item.title}}
                </router-link>
                <a v-else  href="javascript:;" @click="waitFn">
                    {{item.title}}
                </a>
            </div>
        </div>

    </div>
</template>
<script>
    import {Toast} from "mint-ui"

    export default {
        data() {
            return {
                list:[
                    {
                        bgImg:'rgb(138,21,41)',
                        title:'主会场信息',
                        routeTo:{name: 'home_page', query: {page: 'mainmeet'}},
                    },
                    {
                        bgImg:'rgb(176,163,95)',
                        title:'分会场信息',
                        routeTo:{name: 'home_page', query: {page: 'partmeet'}},
                    },
                    {
                        bgImg:'rgb(31,61,92)',
                        title:'董事长分会',
                        routeTo:{name: 'home_page', query: {page: 'chairman'}},
                    },
                ]
            }
        },
        components: {
        },
        mounted() {
            this.$store.commit('SPIN')
        },
        methods: {
            waitFn() {
                Toast('敬请期待')
            }
        }

    }
</script>
<style lang="less" scoped>
    .home-hotel {
        background: #f2f2f2;
        min-height: 100vh;
        .list{
            width:100%;
            height:100px;
            margin-bottom:5px;
            .item{
                width:100%;
                height:100%;
                -webkit-background-size: 100% 100%;
                background-size: 100% 100%;
                text-align: center;
                line-height:100px;
                a{
                    display: inline-block;
                    width:100%;
                    height:100%;
                    color: #fff;
                    font-size:18px;
                }
            }
        }
    }
</style>
