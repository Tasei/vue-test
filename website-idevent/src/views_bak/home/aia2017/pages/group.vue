<template>
    <div class="mt-container">
        <div class="block">
            <div class="title">分组信息</div>
            <div class="sub-title">会议期间我的分组安排为：</div>
            <template v-for="el in groupInfo">
                <template v-if="isFilledItem(el)">
                    <p>{{filterLabel(el.label)}}：{{getItemText(el)}}</p>
                </template>
            </template>
        </div>
    </div>
</template>
<script>
    import formUtils from "utils/form"
    import { Indicator, Toast } from 'mint-ui';
    export default{
        data() {
            return {
                groupInfo: [],
            }
        },
        created() {
            this.getGroupInfo()
        },
        methods: {
            getGroupInfo() {
                let self = this
                this.$http.post('register/getRegInfo', {
                    child_id: self.child_id
                }).then(function(response) {
                    let ret = response.body

                    if (ret.err == 0 && ret.res.formList) {
                        for (let form of ret.res.formList){
                            if (form.name == '分组信息'){
                                this.groupInfo = form.value.elements;
                                break;
                            }
                        }
                    } else {
                        Toast(ret.msg);
                    }
                }).finally(() => {
                    this.$store.commit('SPIN', false)
                })
            },
            filterLabel(label){
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
            getItemText(el) {
                //translate options to text
                if (el.options) {
                    let values = [].concat(el.value)
                    let texts = []
                    for (let option of el.options) {
                        if (values.indexOf(option.value) > -1) {
                            texts = texts.concat(option.text)
                        }
                    }
                    return texts.join(",")
                }
                if (el.type == 'paragraph') {
                    return marked(el.text, {sanitize: true})
                }
                if (el.type == 'photo_uploader') {
                    return '<img src="'+el.attachment.url+'" />';
                }
                return el.value
            },
        }
    }
</script>
<style lang="less" scoped>
    @import "../assets/style";
    .block {
        .sub-title {
            margin-bottom: 10px;
        }
        p {
            color: #333;
        }
    }
</style>
