<template v-if="user">
    <form method="post"
          id="register-form"
          action="/api/register/saveRegInfo"
           v-if="formList.length > 0">
        <p v-if="user.code.endsWith('#1') || user.code.endsWith('#2')">请填写您的同住人姓名；如您没有同住人，请点击确认</p>
        <p v-else>请填写您的同住人姓名；如您没有同住人，请填写“无”，会务组将随机为您安排人员拼房</p>


        <label for="roomid">
            <span class="text-danger">*</span>
        </label>

        <input  type="text" :name="'data['+formList[0].id+']['+formList[0].value.elements[0].id+']'" v-model="a" id="roomid" class="roomid">


        <div class="register-btn">
            <button
                class="btn btn-primary btn-lg padding-lg"
                :disabled="submitDisabled"
                type="button"
                @click="submit">确认
            </button>
            <button v-if="cancelBtn"
                    class="btn btn-primary btn-lg padding-lg btn-outline"
                    @click="cancelEdit()"
                    type="button">{{$t('cancel')}}
            </button>
        </div>
    </form>
</template>
<script>
    import formUtils from "utils/form"
    import vForm from "./form.vue"
    import {Indicator, Toast} from "mint-ui"
    import Vue from 'vue';

    const bus = new Vue();
    export default {
        components: {vForm},
        data(){
            return {
                a:'',
                formIdr:'',
                rid:'',
                formValid: false,
                formSubmitLoading: false,
                cancelBtn: false,
            }
        },
        computed: {
            child_id() {
                return this.$route.params.child_id
            },
            user() {
                return this.$store.state.user
            },
            bindingArray() {
                let bArray = [];
                for (let form of this.formList) {
                    for (let el of form.value.elements) {
                        if (!!el.options) {

                            for (let option of el.options) {
                                if (!!option.bindForm) {
                                    bArray = bArray.concat(option.bindForm)
                                }
                            }

                        }
                    }
                }
                return bArray;
            },
            bindingActiveArray() {
                let bArray = [];
                for (let form of this.formList) {
                    for (let el of form.value.elements) {
                        if (!!el.options) {
                            for (let option of el.options) {
                                if (!!option.bindForm) {
                                    if (el.value == option.value) {
                                        bArray = bArray.concat(option.bindForm)
                                    }
                                }
                            }
                        }
                    }
                }
                return bArray;
            },

            submitDisabled(){
                return this.formSubmitLoading
            }
        },
        props: {
            formList: Array,
        },
        watch: {
            formSubmitLoading() {
                if (this.formSubmitLoading) {
                    Indicator.open()
                } else {
                    Indicator.close()
                }
            }
        },
        created() {
            console.log(this.user.code.endsWith('#1'))
            let self = this
            bus.$on('errors-changed', function (errors) {
                self.errors.clear();
                if (errors) {
                    errors.forEach(function (e) {
                        self.errors.add(e.field, e.msg, e.rule, e.scope);
                    })
                }
            });
        },
        methods: {
            validateChild() {
                bus.$emit('validate');
            },
            clearChild() {
                bus.$emit('clear');
            },
            isVisible(form) {
                let visible = true
                // console.log(form)
                if (this.bindingArray.indexOf(form.id) > -1) {
                    visible = (this.bindingActiveArray.indexOf(form.id) > -1)
                }

                let closed = this.$store.state.steps.reg_close
                if (form.value.settings.openAfterRegClose) {
                    closed = false
                }

                if (closed) {
                    visible = false
                }

                return visible
            },
            submit(){
                let form = document.getElementById('register-form');
                if(this.user.code.endsWith('#1') || this.user.code.endsWith('#2')) {
                    if(this.a == '') {
                        this.a = '无';
                    }
                }else{
                    if(this.a == '') {
                        Toast('请填写同住人');
                        return;
                    }
                }
                this.formSubmitLoading = true
                let handleError = (function (err) {
                    this.formSubmitLoading = false
                    this.$parent.$emit('submitFormError', this, err);
                }).bind(this);

                let handleFinish = (function (response) {
                    this.formSubmitLoading = false
                    if (response.ok) {
                        this.$parent.$emit('submitSuccess', this, response.body);
                    } else {
                        this.$parent.$emit('submitFailed', this, response.statusText);
                    }
                    this.$parent.$emit('afterFormSubmit', this);
                    this.$router.push({name: "register_complete"})
                }).bind(this);

                setTimeout(()=>{
                    let data = new FormData(form);
                    console.log(form)

                    this.$http.post(form.action, data).then(handleFinish, handleError);
                },500)

            },

            cancelEdit() {
                this.$parent.$emit("cancelEdit")
            },

        }
    }
</script>
<style scoped lang="less">
    .roomid{
        box-shadow: none!important;
        border:1px solid #ddd;
        padding:6px 12px;
        font-size:16px;
        height:40px;
        width:100%;
    }
</style>
