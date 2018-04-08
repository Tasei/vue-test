<template>
    <div class="bg">
        <div class="word-bar">
            <div class="team" :class="{'active':barSwitch}" @click="barSwitch = !barSwitch">
                团队奖
            </div>
            <div class="person" :class="{'active':!barSwitch}" @click="barSwitch = !barSwitch">
                个人奖
            </div>
        </div>
        <div class="word-item">
            <div class="team-word" v-if="barSwitch">
                <img :src="teamImg" alt="">
            </div>
            <div class="person-word" v-else>
                <a class="person-word-item"  :href="item.detail" v-for="item in personImgList">
                    <img :src="item.avatar" alt="">
                </a>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                barSwitch:true,
                teamImg:require('../assets/td_cont.png'),
                personImgList:[
                    {
                       avatar:require('../assets/gr_cont_01.png') ,
                    },
                    {
                        avatar:require('../assets/gr_cont_02.png') ,
                        detail:require('../assets/best_xq.png')
                    },
                    {
                        avatar:require('../assets/gr_cont_03.png') ,
                    },
                ]
            }
        },
        created() {

        },
        mounted() {
            this.$store.commit('SPIN')
        },
        methods:{

        }
    }
</script>
<style lang="less" scoped>
    .bg {
        min-height: 730vh;
        background: url("../assets/ygjx_bg.jpg");
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
        padding-top:0.1px;
        .word-bar{
            margin: 0 auto;
            margin-top:35vh;
            margin-bottom:30px;
            padding:0 45px;
            width:100%;
            display: flex;
            justify-content:space-around;
            div{
                color: #908462;
                font-size:17px;
                padding-bottom:5px;
            }
            .active{
                color: #D6C289;
                border-bottom:2px solid;
            }
        }
        .word-item{
            .person-word{
                .person-word-item{
                    display: inline-block;
                    width:100%;

                }
            }
        }
    }

</style>
