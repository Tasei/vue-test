<template>
    <div class="i-radio" @click="updateValue(option)">
        <span class="i-radio-btn" :class="{'selected': selected}"></span>
        <input type="radio"
               :value="option"
               ref="radio"
               v-on:click="updateValue($event.target.value)"/>
        <slot></slot>
    </div>
</template>
<script>
    export default{
        props: {
            option: {
                type: [Number, String, Array, Object],
                default: ''
            },
            name: {
                type: String,
                default: 'radio'
            },
            value: {
                type: [String, Number, Array, Object],
                default: ''
            },
        },

        watch: {
            value() {
                this.checkSelected()
            }
        },
        updated () {
            this.checkSelected()
        },

        mounted () {
            this.checkSelected()
        },

        data () {
            return  {
                selected: false
            }
        },

        methods: {
            updateValue (value) {
                this.$emit('input', value)
                this.checkSelected()
            },
            checkSelected () {
                if (this.option == this.value) {
                    this.selected = true
                } else {
                    this.selected = false
                }
            }
        }
    }
</script>
<style lang="less" scoped>
    @import "../../styles/themes/default/variables";
    .i-radio {
        position: relative;
        display: inline-block;
        height: 24px;
        line-height: 24px;
        padding-left: 20px;
        cursor: pointer;
    }

    input[type="radio"] {
        position: absolute;
        left: 0;
        z-index: 1;
        width: 16px;
        opacity: 0;
        cursor: pointer;
    }

    .i-radio-btn {
        display: inline-block;
        width: 16px;
        height: 16px;
        border: 1px solid #dddddd;
        border-radius: 100%;
        cursor: pointer;
        position: absolute;
        left: 0;
        top: 50%;
        margin-top: -8px;
        &.selected {
            border: 5px solid @brand-primary;
        }
    }
</style>
