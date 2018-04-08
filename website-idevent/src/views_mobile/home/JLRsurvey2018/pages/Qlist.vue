<template>
<div class="qlist">
    <ul class="qlist-wraper">
        <li v-for="item in listObj" class="qlist-item">
            <div @click="goQuestionnaire(item)">
                <a href="javascript:;">
                    <h5>{{item.name}}</h5>
                </a>
            </div>
        </li>
    </ul>
</div>
</template>

<script>
    import {Toast} from "mint-ui"
    export default {
        data(){
            return {
                listObj:[
                    {
                        name:'一、全新捷豹E-PACE',
                        isOpen:'0',
                    },
                    {
                        name:'二、全新一代路虎揽胜极光',
                        isOpen:'0',
                    },
                    {
                        name:'三、L663',
                        isOpen:'0',
                    },
                    {
                        name:'四、I-PACE',
                        isOpen:'0',
                    },
                    {
                        name:'五、X391',
                        isOpen:'0',
                    },
                    {
                        name:'六、揽胜运动版 插电式混合动力车型',
                        isOpen:'0',
                    },
                ]
            }
        },
        created(){
            this.setIsOpenFn()
        },
        mounted(){
            this.$store.commit('SPIN')
        },
        methods:{
            setIsOpenFn(){
                let btnstr = this.meeting.websettings.is_open;
                let btns = btnstr.split(',');
                for(var i=0; i < this.listObj.length; i++){
                    this.listObj[i].isOpen = btns[i]
                }
            },
            goQuestionnaire(obj) {
                if(obj.isOpen !== '1'){
                    Toast('敬请期待');
                    return
                }else{
                    this.$router.push({name:'home_page', query: {page: 'questionnaire'},params:{name:obj.name}})
                }
            },
        }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
.qlist{
    background-color: white;
    padding:10px 20px;
    .qlist-item{
        margin-bottom:20px;
        height:85px;
        text-indent:2em;
        -webkit-background-size: 100% 100% !important;
        background-size: 100% 100% !important;
        div>a{
            color: #fff;
            h5{
                line-height: 85px;
            }
        }
        &:first-child {
            background: url("../images/1.png") 0 0 no-repeat ;
        }
        &:nth-child(2){
            background: url("../images/2.png") 0 0 no-repeat;
        }
        &:nth-child(3){
            background: url("../images/3.png") 0 0 no-repeat;
        }
        &:nth-child(4){
            background: url("../images/4.png") 0 0 no-repeat;
        }
        &:nth-child(5){
            background: url("../images/5.png") 0 0 no-repeat;
        }
        &:nth-child(6){
            background: url("../images/6.png") 0 0 no-repeat;
        }
    }
}
</style>
