<template>
    <div>
        <div class="home-index">
            <div v-if="banner">
                <img :src="banner" class="img-responsive"/>
            </div>
            <div class="JLRsurvey-box">
                <ul>
                    <li v-for="item in listObj" class="JLRsurvey-list">
                        <div @click="goQuestionnaire(item)">
                            <a href="javascript:;">
                                <h5>{{item.name}}</h5>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
            <!--<bottom-bar></bottom-bar>-->
        </div>
    </div>
</template>
<script>
    import iButton from "iButton"
    import {Toast} from "mint-ui"
    import BottomBar from "./components/bottomBar"

    export default {
        data() {
            return {
                listObj:[
                    {
                        name:'车型调研',
                        isOpen:'0',
                        isPage:'Qlist',
                    },
                    {
                        name:'其他调研',
                        isOpen:'0',
                    },
//                    {
//                        name:'日程',
//                        isOpen:'0',
//                        isPage:'schedule'
//                    },
                ]
            }
        },
        computed: {
            banner() {
                return this.meeting.settings.home ? this.meeting.settings.home.index_banner : '';
            },
        },
        created() {
            this.setIsOpenFn()
        },
        mounted() {
            this.$store.commit('SPIN')
        },
        components: {
            iButton, BottomBar,
        },
        methods:{
            setIsOpenFn(){
                let btnstr = this.meeting.websettings.isOpen;
                let btns = btnstr.split(',');
                for(var i=0; i < this.listObj.length; i++){
                    this.listObj[i].isOpen = btns[i]
                }
            },
            goQuestionnaire(obj) {
                if(obj.isOpen !== '1'){
                    Toast('敬请期待');
                    return
                }else if(obj.isPage){
                    this.$router.push({name:'home_page', query: {page: obj.isPage}})
                }else{
                    this.$router.push({name:'home_page', query: {page: 'questionnaire'},params:{name:obj.name}})
                }
            },
        }
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    @import "../../../assets/style/home/index.less";

    .home-index {
        background-color: #f3f3f3;
        .JLRsurvey-box{
            padding:0 20px;
            .JLRsurvey-list{
                -webkit-border-radius: 5px;
                -moz-border-radius: 5px;
                border-radius: 5px;
                padding:5px 0;
                margin:20px 0;
                &:first-child{
                    background-color: #486c7c;
                }
                &:nth-child(2){
                    background-color: #216093;
                }
                &:last-child{
                    background-color: #268462;
                }
                h5{
                    text-align: center;
                    color: #fff;
                    font-size:20px;
                }
            }
        }
    }
</style>
