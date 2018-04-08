<template>
    <button class="btn" @click.prevent="btnClick" :class="{'disabled': loading}">
        <i class="fa fa-spinner fa-pulse fa-fw" v-if="loading"></i>
        <slot></slot>
    </button>
</template>
<script>
    export default{
        props: {
            onOk: {
                type:Function,
                default: () => {}
            },
        },
        data () {
            return {
                loading: false
            }
        },
        methods:{
            btnClick () {
                this.loading = true
                this.onOk(this)
            }
        }
    }
</script>
