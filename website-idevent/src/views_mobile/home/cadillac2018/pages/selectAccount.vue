<template>
    <div class="select-box">
        <div  class="select-item"  v-for="account in accountArr" v-if="account.show">
            <div class="item-btn" @click="toForm(account.code)" :class="'itemBg'+ codeToName(account.code)">
                {{account.name}} <i class="iuifont iui-icon-right"></i>
            </div>
        </div>

        <btn-home></btn-home>
        <logout></logout>
    </div>
</template>
<script>
    import btnHome from "../components/btn_home.vue"
    import logout from "../../default/components/logout.vue"
    export default {
        data() {
            return {
                accountArr:[
                    {name:'董事长',show:false,code:''},
                    {name:'总经理',show:false,code:''},
                    {name:'销售总监',show:false,code:''},
                    {name:'市场总监',show:false,code:''},
                    {name:'售后总监',show:false,code:''},
                    {name:'店长',show:false,code:''},
                ],

            }
        },
        components:{
            btnHome,logout
        },
        created() {
            if (this.user.parent) {
                this.changeAccount(this.user.parent.code, () => {
                    window.location.reload()
                })
            } else if(this.user.children.length === 0) {
                this.$router.push({name: 'register_form'})
            } else {
                this.$store.commit("SPIN")
            }


            for(let account of this.user.children){
                let codeInde = this.codeToName(account.code);
                if(codeInde!=-1){
                    this.accountArr[codeInde].code = account.code;
                    this.accountArr[codeInde].show = true;
                }
            }
        },
        methods: {
            toForm(code) {
                this.changeAccount(code, () => {
                    this.$router.push({name: 'register_form'})
                })
            },
            codeToName(code) {

                let suffix = code.substr(-2)
                switch (suffix) {
                    case "#1":
                        return 0
                    case "#2":
                        return 1
                    case "#3":
                        return 2
                    case "#4":
                        return 3
                    case "#5":
                        return 4
                    case "#6":
                        return 5
                }
                return -1;
            },
            changeAccount(code, callback) {
                this.$store.commit('SPIN', true)
                this.$http.post('meeting/changeAccount', {
                    code: code
                }).then((response) => {
                    if (response.body.err === 0) {
                        callback && callback()
                    }
                })
            },
            logout(e) {
                let self = this
                this.$http.post('meeting/logout')
                    .then(function(response) {
                        let ret = response.body
                        if (ret.err == 0) {
                            self.$store.commit('USER', null)
                            this.$cookie.delete('WX_AUTH')

                            this.$router.push({name: "portal"})
                            return
                        }
                    })
                    .finally(function(){
                        e.loading = false
                    })
            },
        }
    }
</script>
<style scoped lang="less">
    .select-box{
        padding:20px;
        .select-item{
            height:100px;
            width: 100%;
            /*background-size: 100% 100% !important;*/
            margin-bottom:15px;
            &:last-child {
                margin-bottom:0;;
            }
            .item-btn{
                width:100%;
                height:100%;
                color: #fff;
                font-size:18px;
                font-weight:600;
                text-align: center;
                line-height:100px;
                i{
                    color: rgba(255,255,255,0.7);
                }
            }
            .itemBg0 {
                background: rgb(69,72,75);
            }
            .itemBg1 {
                background: rgb(210,211,214);
            }
            .itemBg2 {
                background: rgb(176,163,95);
            }
            .itemBg3 {
                background-color: rgb(138,21,41);
            }
            .itemBg4 {
                background: rgb(31,61,92);
            }
            .itemBg5 {
                background: rgb(210,211,214);
            }
        }

    }

</style>
