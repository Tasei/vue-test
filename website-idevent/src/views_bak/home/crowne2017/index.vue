<template>
<div>
    <div class="fd-index" v-if="user">
        <div>
            <img :src="banner" class="img-responsive" />
        </div>
        <ul class="list-group index-list">
            <li class="list-group-item">
                <i class="index-icon index-icon-photo"></i>
                <router-link :to="{name:'iphoto_index'}">
                    <h5>精彩瞬间</h5>
                    <p class="list-details">查看年会精彩照片</p>
                </router-link>
            </li>
            <li class="list-group-item">
                <i class="index-icon index-icon-lottery"></i>
                <router-link :to="{name:'award_index'}">
                    <h5>微信抽奖</h5>
                    <p class="list-details">抽取幸运奖品</p>
                </router-link>
            </li>
            <li class="list-group-item">
                <i class="index-icon index-icon-shake"></i>
                <router-link :to="{name:'shake_index'}">
                    <h5>摇一摇</h5>
                    <p class="list-details">参加摇一摇互动小游戏</p>
                </router-link>
            </li>

            <li class="list-group-item">
                <i class="index-icon index-icon-vote"></i>
                <router-link :to="{name:'vote_index'}">
                    <h5>微笑大使评选</h5>
                    <p class="list-details">评选两位您心目中的微笑大使</p>
                </router-link>
            </li>
            <li class="list-group-item">
                <i class="index-icon index-icon-red-packet"></i>
                <router-link :to="{name:'red_packet_index'}">
                    <h5>企业红包</h5>
                    <p class="list-details">抢红包了</p>
                </router-link>
            </li>
        </ul>
    </div>

</div>
</template>
<script>
import iButton from "iButton"
import {Toast, MessageBox} from "mint-ui"
    export default{
        data() {
            return{
                banner: require('../../../assets/images/crowne/index_banner.png'),
                list: []
            }
        },
        computed: {
            user() {
                return this.$store.state.user
            }
        },
        created() {
            this.getForms()
        },
        components:{
            iButton
        },
        methods: {
            /**
              * 获取用户注册信息
            */
            getForms() {
                if(!this.user) {
                    return;
                }
                let self = this
                this.$http.post('register/getRegInfo').then(function(response) {
                    let ret = response.body
                    if (ret.err == 0) {
                        if (ret.res.formList.length > 0) {
                            self.form = ret.res.formList[0]
                        }
                        if(!ret.res.hasRegInfo || self.user.group.is_default==1) {
                            MessageBox({
                                title: '提示',
                                message: '您暂未注册报名，请先报名',
                                confirmButtonText: '去报名'
                            }).then((action) => {
                                self.$router.push({name: 'event_crowne_plaza'})
                            })
                        }
                    }
                }).then(() => {
                    this.$store.commit('SPIN', false)
                })
            },
        }
    }
</script>
<style lang="less" scoped>
    .fd-index {
        // background-color: #0e1b23;
        background-color: #8d0252;
        min-height: 100vh;
        overflow: hidden;
        position: relative;

        .index-list {
            margin: 5px 5px 0 5px;
            background: #fff;
            border-radius: 4px;
            margin-bottom: 55px;
            li {
                padding: 12px 10px 12px 64px;
                border: 0;
                overflow: hidden;
                background-repeat: no-repeat;
                background-position: center ;
                background-size: 26px 21px;
                h5 {
                    color: #333;
                    font-size: 17px;
                    line-height: 17px;
                    font-weight: bold;
                    margin: 0;
                    margin-bottom: 7px;
                }
                p {
                    margin: 0;
                }
                .list-details {
                    color: #999;
                    font-size: 12px;
                    line-height: 12px;
                }

                &:after {
                    content: '';
                    position: absolute;
                    left: 62px;
                    bottom: 0;
                    right: 0;
                    top: auto;
                    height: 1px;
                    width: 100%;
                    background-color: #ddd;
                    display: block;
                    z-index: 15;
                    -webkit-transform-origin: 50% 100%;
                    transform-origin: 50% 100%
                }

                &:first-child {
                    border-top-left-radius: 2px;
                    border-top-right-radius: 2px;
                }
                &:last-child {
                    border-bottom-left-radius: 2px;
                    border-bottom-right-radius: 2px;
                    &:after {
                        height: 0!important;
                    }
                }

                .index-icon {
                    position: absolute;
                    display: inline-block;
                    left: 20px;
                    width: 27px;
                    height: 27px;
                    top: 12px;
                    background-size: 100% auto;

                    &.index-icon-photo{
                        background-image: url('../../../assets/images/crowne/pphoto.png');
                    }
                    &.index-icon-lottery{
                        background-image: url('../../../assets/images/crowne/lottery.png');
                    }
                    &.index-icon-shake{
                        background-image: url('../../../assets/images/crowne/shake.png');
                    }
                    &.index-icon-vote{
                        background-image: url('../../../assets/images/crowne/selection.png');
                    }
                    &.index-icon-red-packet{
                        background-image: url('../../../assets/images/crowne/packets.png');
                    }
                }

            }
        }

    }

    @media only screen and (-webkit-min-device-pixel-ratio: 2) {
        li:after {
            -webkit-transform: scaleY(.5);
            transform: scaleY(.5)
        }
    }


</style>
