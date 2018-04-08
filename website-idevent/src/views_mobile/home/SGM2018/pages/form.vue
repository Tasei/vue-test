<template>
    <div class="col-sm-12">
        <div v-if="viewMode">
            <div>
                <table class="table table-striped">
                    <tbody>
                    <template v-for="form in formList">
                        <template v-for="el in form.value.elements">
                            <tr v-if="isFilledItem(el)">
                                <td width="30%">{{filterLabel(el.label)}}</td>
                                <td class="font-bold" v-html="getItemText(el)"></td>
                            </tr>
                        </template>
                    </template>
                    </tbody>
                </table>
            </div>
            <div class="register-btn">
                <a href="javascript:void(0);"
                   class="btn btn-lg btn-default btn-outline"
                   v-if="isEditable"
                   @click="toggleViewMode(false)">{{$t('editInfo')}}</a>

                <router-link class="btn btn-lg btn-success" :to="{name:'home_page', query: {page: 'hotel', type: type}}" v-if="type">选择酒店</router-link>
                <router-link class="btn btn-lg btn-success" :to="{name:'home_index'}" v-else>继续</router-link>
            </div>
        </div>
        <div v-else>
            <the-form :form-list="formList" :cancel-btn="hasRegInfo"></the-form>
        </div>
    </div>
</template>
<script>
    import formUtils from "utils/form"
    import theForm from "../../../form/_form"
    import {Indicator, Toast} from 'mint-ui';

    export default {
        components: {theForm},
        data() {
            return {
                formList: [],
                viewMode: false,
                hasRegInfo: false,
            }
        },
        computed: {
            type() {
                return this.$route.query.type
            },
            index() {
                switch (this.type) {
                    case 's':
                        return 1;
                    case 'b':
                        return 2;
                    case 'c':
                        return 3;
                    default:
                        return 0;
                }
            },
            isOver() {
                return this.$store.state.steps.is_over
            },
            isEditable() {
                for (let form of this.formList) {
                    if (form.value.settings.openAfterRegClose) {
                        return true
                    }
                }
                return !this.$store.state.steps.reg_close
            },
        },
        watch: {
            '$route'(to, from) {
                // 对路由变化作出响应...
                this.getForms()
            }
        },
        created() {
            this.$on("cancelEdit", function () {
                this.toggleViewMode(true)
            })

            this.$on("submitSuccess", function () {
                this.getForms()
            })

            this.$on("submitFailed", function (res) {
                Toast(res.msg)
            })

            this.getForms()
        },
        methods: {
            filterLabel(label) {
                return label.startsWith('#') ? '' : label
            },
            isFilledItem(el) {
                if (!formUtils.isValueItem(el.type)) {
                    return false
                }
                if (el.type == 'paragraph' && !el.display) {
                    return false
                }

                switch (typeof el.value) {
                    case 'string':
                        return el.value != ""
                        break
                    case 'array':
                        return el.length > 0
                        break
                    default:
                        break
                }

                return true
            },

            getForms() {
                let self = this
                this.$http.post('register/getRegInfo')
                    .then((response) => {
                        let ret = response.body

                        if (ret.err == 0) {
                            self.formList = [ret.res.formList[self.index]]

                            self.hasRegInfo = self.viewMode = !!self.formList[0].value.elements[0].value

                        } else {
                            Toast(ret.msg);
                        }
                    }).finally(() => {
                    self.$store.commit('SPIN', false)
                })
            },
            toggleViewMode(is) {
                this.viewMode = is
            },
            getItemText(el) {
                return formUtils.getItemText(el)
            }
        },
    }
</script>
