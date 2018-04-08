<template>
    <div class="picker">
        <h5>请选择出行时间</h5>
        <select v-model="group" class="form-control">
            <option>--请选择出行时间--</option>
            <option :value="key" v-for="(val, key) in groups">{{val}}</option>
        </select>
        <button @click="confirm" :disabled="disabled" class="btn btn-lg btn-primary">选择</button>

        <p class="help-text" v-if="user.group.name.indexOf('家属') > -1">
            此次年会，公司为雷度家属及经销商家属提供2个前往日提供大家选择。
        </p>
        <p class="help-text" v-else>
            <span v-if="user.group.name=='员工'">此次年会，公司提供2个返程日期供大家选择。如选择1/27返回，需提出年假申请并获得直属上级批准。1/24至1/27日期间产生的住宿及相关费用自理，公司承担返程机票费用。</span>
            <span v-else>此次年会，公司提供2个返程日期供大家选择。如选择1/27返回，需自理1/24至1/27日期间产生的住宿及相关费用，公司承担返程机票费用。</span>
        </p>
    </div>
</template>
<script>
    export default {
        props: {
            groups: Object,
        },
        data() {
            return {
                group: null
            }
        },
        created() {
            this.group = this.$parent.group
        },
        mounted() {
            $(".i-dot-steps-title").html('出行时间选择')
        },
        computed: {
            disabled() {
                return !this.group
            }
        },
        methods: {
            confirm() {
                this.$cookie.set("RADIOMETER_PURCHASE_GROUP", this.group, {expires: '1Y'})
                this.$parent.group = this.group
                this.$parent.step = "goodsList"
                this.$parent.subStep++
            }
        }
    }
</script>
<style scoped lang="less">
    .picker {
        width: 80%;
        display: block;
        margin: 0 auto;
    }

    h5 {
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        margin: 0 0 20px;
    }

    .help-text {
        margin-top: 10px;
    }
</style>
