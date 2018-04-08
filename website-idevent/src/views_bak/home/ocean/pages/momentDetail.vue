<template>
    <div class="momentDetail">
        <h5 class="momentTitle">{{detail.title }}</h5>
        <div>
            <span class="momentTime">{{detail.date }}</span>
            <span class="momenNname">{{detail.author }}</span>
        </div>
        <div class="momentContent" v-html="detail.content">{{detail.content}}</div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                id:'',
                detail:{
                    title:'',
                    date:'',
                    author:'',
                    content:{},
                },
            }
        },
        components: {},
        mounted() {
            this.$store.commit('SPIN', false)
        },
        created() {
            this.id = this.$route.query.id;
            this.queryMomentcontent();
        },
        methods: {
            queryMomentcontent() {
                let self = this
                this.$http.post('custom/tbkhj/getArticles',{id:this.id})
                    .then(function(response) {
                        let ret = response.body
                        if (ret.err == 0) {
                            self.detail.title = ret.res.article.title;
                            self.detail.date = ret.res.article.date;
                            self.detail.author = ret.res.article.author;
                            self.detail.content =ret.res.article.content;
                        }
                    })

            },
        }
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    .momentDetail{
        padding:0 15px;
        width:100%;
        font-size: 16px;
        .momentTitle{
            margin-top:20px;
            font-size: 23px;
            color: #000;
        }
        .momentTime{
            font-size: 16px;
            color:#949494;
            margin-right:10px;
        }
        .momenNname{
            color:#617fa6;
        }
        .momentContent{
            padding:10px 0;
            color:#323232;
        }

    }
</style>
