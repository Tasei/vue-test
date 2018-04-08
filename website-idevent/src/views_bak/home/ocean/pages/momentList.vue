<template>
    <div>
        <div class="momentList">
            <div class="moment-content">
                <div class="moment-tab">
                    <div class="moment-tab-scroll">
                        <a v-for="(i,j) in all_info" @click="momentTab(i.area_parent.id,i.sub_area[0].id)" :class="{'isActive':selected==j,'moment-tab-item':true}" href="javascript:;" >{{i.area_parent.name}}</a>
                    </div>
                </div>
                <div class="moment-subTab" v-for="(i,j) in all_info"  v-if="j==selected">
                    <a v-for="(item,index) in i.sub_area" @click="queryMomentList(j,item.id)" :class="{'isSubActive':provience==item.id,'moment-subTab-item':true}" href="javascript:;" >{{item.name}}</a>
                </div>
                <div class="moment-container">
                    <router-link class="moment-item" v-for="(k,m) in list" :to="{name: 'home_page', query: {page: 'momentDetail',id:m}}">
                        <div class="moment-img">
                            <img :src="k.img_url" alt="" v-if="k.img_url">
                            <img :src="img_url" alt="" v-else>
                        </div>
                        <div class="moment-text">
                            <p class="moment-item-title">{{k.title}}</p>
                            <p class="moment-item-author">{{k.author}}</p>
                        </div>
                    </router-link>
                    <div v-if="list.length==0" class="no-moment-item">亲，没有更多了哟</div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    import iButton from "iButton"
    import {Toast} from "mint-ui"


    export default{
        data() {
            return {
                all_info:{},
                list:{},
                provience:14,
                selected:'a1',
                img_url:require('../images/hanxiu.jpg')
            }
        },
        computed: {
            banner(){
                return this.meeting.settings.home?this.meeting.settings.home.index_banner:'';
            },
        },
        components: {
            iButton
        },
        created() {
            this.queryAllInfo();
            this.queryMomentList('a1',14);
        },
        mounted() {
            this.$store.commit('SPIN', false)
        },
        methods: {
            queryAllInfo() {
                let self = this
                this.$http.post('custom/tbkhj/getMore')
                    .then(function(response) {
                        let ret = response.body
                        if (ret.err == 0) {
                            self.all_info = ret.res.all_info;
                        }
                    })
            },
            momentTab(p,a){
                this.selected=p;
                this.provience=a;
                this.queryMomentList(p,a)
            },
            queryMomentList(p,a) {
                this.provience=a;
                let self = this;
                this.$http.post('custom/tbkhj/getSubAreaList',{pid:p,area_id:a})
                    .then(function(response) {
                        let ret = response.body
                        if (ret.err == 0) {
                            self.list=ret.res.list;
                            console.log(self.list)
                        }
                    })

            },
    }
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    .momentList{
        padding:0 15px;
        width:100%;
        font-size: 16px;
        .moment-content{
            .moment-tab {
                border-bottom: 1px solid #d4d6d7;
                height: 44px;
                line-height: 44px;
                width: 100%;

                .moment-tab-scroll{
                    height: 44px;
                    line-height: 44px;
                    white-space: nowrap;
                    overflow-y: hidden;
                    overflow-x: auto;


                .moment-tab-item {
                    font-size: 14px;
                    color: #323232;
                    margin-right: 17px;
                    padding-bottom: 3px;

                }
            }
                .isActive{
                    border-bottom:2px solid #bc202b;
                }
            }
            .moment-subTab{
                border-bottom:1px solid #d4d6d7;
                padding:0 12px 6px;
                .moment-subTab-item{
                    display: inline-block;
                    vertical-align: middle;
                    margin-right:10px;
                    margin-top:6px;
                    width:70px;
                    height: 28px;
                    line-height: 28px;
                    text-align: center;
                    color:#646464;
                    font-size: 12px;
                    border:1px solid #646464;
                    -webkit-border-radius: 3px;
                    -moz-border-radius: 3px;
                    border-radius: 3px;
                }
                .isSubActive{
                    background:#fff5f5;
                    border:1px solid #df7e84;
                    color:#c14d54;
                }
            }
            .moment-item{
                height:110px;
                padding:12px 0;
                padding-right:9px;
                display: flex;
                .moment-img{
                    width:114px;
                    height:85px;
                    flex-shrink: 0;
                    margin-right:15px;
                    img{
                        width:100%;
                        height:100%;

                    }
                }
                .moment-text{
                    /*width:210px;*/
                    display: flex;
                    flex-direction:column;
                    justify-content: space-between;
                    .moment-item-title{
                        color:#323232;
                        font-size: 14px;
                        margin-bottom: 0;
                        line-height: 22px;
                    }
                    .moment-item-author{
                        color:#949494;
                        font-size: 12px;
                        margin-bottom: 0;
                    }
                }
            }
            .no-moment-item{
                text-align: center;
                color:#646464;
                margin-top:40px;
                font-size: 14px;

            }
        }
    }



</style>

