<template>
    <div>
        <div class="weui-flex">
            <div class="weui-flex__item" v-if="checkVisible('通用')">
                <div class="placeholder" @click="gotoForm('s')" >S</div>
            </div>
            <div class="weui-flex__item" v-if="checkVisible('别克')">
                <div class="placeholder" @click="gotoForm('b')" >B</div>
            </div>
            <div class="weui-flex__item" v-if="checkVisible('雪佛兰')">
                <div class="placeholder" @click="gotoForm('c')" >C</div>
            </div>
        </div>
        <router-link class="btn btn-lg btn-outline btn-primary" :to="{name:'home_page', query:{page:'form'}}">修改个人信息
        </router-link>
        <btn-logout></btn-logout>
    </div>

</template>
<script>
    import btnLogout from "../../components/btn_logout.vue"
    export default {
        components: {btnLogout},
        data() {
            return {
                formList: [],
                hasRegInfo: false,
                options: []
            }
        },
        created() {
            this.getForms()
        },
        methods: {
            checkVisible(type) {
                return this.options.indexOf(type) > -1
            },
            getForms() {
                let self = this
                this.$http.post('register/getRegInfo').then((response) => {
                    let ret = response.body

                    if (ret.err === 0) {
                        self.formList = ret.res.formList
                        let hasRegInfo = !!self.formList[0].value.elements[0].value
                        if (!hasRegInfo) {
                            self.$router.push({name: "home_page", query: {page: "form"}})
                            return
                        }

                        self.options = self.formList[0].value.elements[3].value
                        self.$store.commit('SPIN', false)
                    }
                })
            },
            gotoForm(type) {
                this.$router.push({
                    name: "home_page", query: {
                        page: 'form',
                        type: type
                    }
                })
            }
        }
    }
</script>
<style scoped lang="less">
    .placeholder {
        text-align: center;
        padding: 30px;
        font-size: 36px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }
</style>
