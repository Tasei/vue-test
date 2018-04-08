<template>
    <div>
        <!--radio-->
        <label class="cheryTitle">
            <span v-if="config.validate.required" class="text-danger">*</span>
            {{config.label}}
        </label>

        <div class="input-container">
            <label class="radio-inline" v-for="option in config.options">
                <input type="radio"
                       :name="elementName"
                       :value="option.value"
                       v-validate="config.validate"
                       v-model="config.value" class="cheryRadio">
                <span class="cheryText">{{ option.text }}</span>
            </label>
        </div>
        <p class="help-block">
            {{config.help}}
            <span v-show="errors.has(elementName)" class="form-invalid">{{ errors.first(elementName) }}</span>
        </p>
    </div>
</template>
<script>
    import formMixin from "mixins/formElements"

    export default {
        mixins: [formMixin],
    }
</script>
<style scoped lang="less">
    .cheryTitle{
        color: #666;
    }
    .input-container{
        .radio-inline{
            margin-right:0 !important;
            padding:0;
            text-align: center;
            width:25px;
            height:25px !important;
            margin-bottom:0 !important;
            position: relative;
            &:last-child{
                .cheryRadio{
                    border-right:1px solid #ddd;
                }
            }
            .cheryRadio{
                position: absolute;
                left:0;
                top:0;
                width:25px;
                height:25px;
                margin-top:0;
                margin-left:0px;
                border:1px solid #ddd;
                border-right:0;
                -webkit-border-radius: 0;
                -moz-border-radius: 0;
                border-radius: 0;
            }
            .cheryText{
                width:25px;
                height:25px;
                text-align: center;
                color: #999;
                position: absolute;
                top:0;
                left:0;
            }
        }
    }
    .theme-blue input[type='radio']:checked:before, .theme-blue input[type='checkbox']:checked:before {
        border:1px solid #00549c;
        background: #00549c;
        color: #fff;
        content:'';
        vertical-align: top;
        font-size: 15px;
        line-height: 24px;
        width: 25px;
        height: 25px;
    }
    .theme-blue input[type='radio']:checked+span{
        color: #fff;
    }
</style>
