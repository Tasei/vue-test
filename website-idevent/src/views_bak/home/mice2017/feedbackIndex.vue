<template>
    <div>
        <div class="fd-index">
            <div>
                <img :src="banner" class="img-responsive"/>
            </div>
            <div class="content text-dark">
                <div v-if="isDone" style="margin-top: 50px;">
                    <span class="fa fa5 fa-check-circle text-primary"></span>
                    <p>感谢您的反馈!</p>
                </div>
                <div v-else>
                    <router-link class="btn btn-lg btn-primary" :to="{name: 'register_form'}">填写调查问卷</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {Toast, Indicator} from "mint-ui"
    export default{
        data() {
            return {
                banner: require('../../../assets/images/mobile/mice/feedback_banner.png'),
            }
        },
        computed: {
            isDone() {
                return this.$route.query.done == '1'
            }
        },
        mounted() {
            this.$store.commit('SPIN')
        },
    }
</script>
<style lang="less" scoped>
    .fd-index {
        // background-color: #0e1b23;
        background-color: #fff;
        min-height: 100vh;
        overflow: hidden;
        position: relative;
        padding-bottom: 75px;
    }

    .content {
        .fa5 {
            font-size: 5em;
        }
        p {
            margin: 10px auto;
        }
        text-align: center;
        font-size: 24px;
        padding: 20px;
    }
</style>
