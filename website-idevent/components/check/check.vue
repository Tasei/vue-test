<template>
    <div class="i-check" @click="updateValue(option)">
        <span class="i-check-btn" :class="{'selected': selected, 'bg-primary': selected, 'disabled': disabled=='true'}"></span>
        <!--
        <input type="checkbox"
               :value="option" ref="checkbox"
               v-on:click="updateValue($event.target.value)"/>-->
        <slot></slot>
    </div>
</template>
<script>
    export default{
        props: {
            option: {
                type: [Number, String],
                required: true
            },
            name: {
                type: String,
                default: 'radio'
            },
            disabled: {
                type: String,
                default: 'false'
            },
            value: {
                type: Array,
                default: []
            },
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
                //禁止选中
                if (this.disabled == 'true') {
                    return false;
                }

                //处理选中
                let pos = this.value.indexOf(value)
                if (pos === -1) {
                    this.value.push(value)
                } else {
                    this.value.splice(pos, 1)
                }
                this.$emit('input', this.value)
                this.checkSelected()
            },

            checkSelected () {
                if (this.value.includes(this.option)) {
                    this.selected = true
                } else {
                    this.selected = false
                }
            }
        }
    }
</script>
<style lang="less" scoped>
    .i-check {
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

    .i-check-btn {
        display: inline-block;
        width: 18px;
        height: 18px;
        border: 1px solid #dddddd;
        cursor: pointer;
        position: absolute;
        border-radius: 50%;
        left: 0;
        top: 50%;
        margin-top: -9px;
        &.selected {
            background-image: url("../../src/assets/images/confirm@2x.png");
            background-repeat: no-repeat;
            background-size: 16px 12px;
            border: none;
            background-position: 2px 2px;
        }
        &.disabled {
            background-color: #f3f3f3;
        }
    }
</style>
