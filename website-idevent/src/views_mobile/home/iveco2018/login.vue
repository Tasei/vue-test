<template>
    <div>
        <div :class="{'noteHide':noteHide,'noteImg':true}" >
            <img src="./assets/hyxz1216.jpg" alt="" @click="noteHideFn">
            <!--<button class="note-btn btn " @click="noteHideFn">点击进入</button>-->
        </div>
        <div :class="{'noteHide':!noteHide}">
            <mobile-login></mobile-login>
        </div>

    </div>
</template>

<script>
    import mobileLogin from './components/mobile_login.vue'
    export default {
        data (){
            return {
                noteHide:false,
            }
        },
        components:{
            mobileLogin
        },
        mounted() {
            if (this.user) {
                this.$store.commit('SPIN')
                this.isFirstFn();
            }
        },
        methods:{
            noteHideFn(){
                this.noteHide =true;
            },
            isFirstFn(){
                console.log(this.$cookie.get('ivecoWelcome'))

                if(this.$cookie.get('ivecoWelcome')=="ivecoOk"){
                    this.noteHide =true;
                    return
                }else{
                    this.$cookie.set('ivecoWelcome', 'ivecoOk', { expires: '1D' });
                    this.noteHide =false;
                }

            },

        }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
    .noteHide{
        display: none;
    }
    .noteImg{
        position: relative;
    }
</style>
