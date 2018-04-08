<template>
    <div class="mt-container">
        <div class="block">
            <div class="title">票务服务热线</div>
            <p>
                <a href="tel:021-60950484">电话：021-60950484</a>
            </p>
            <p>（周一至周五早9:00-下午17:00）</p>
            <br>
            <div class="title">票务服务紧急联系电话</div>
            <div class="sub-title">许女士</div>
            <p>
                <a href="tel:13917396600">电话：13917396600</a>
            </p>
            <p>（热线工作时间外）</p>
        </div>

        <div class="block">
            <div class="title">会务组协调人</div>

            <p>中国区人力资源部</p>

            <p>Alice Tsui</p>
            <p><a href="mailto:Alice-YC.Tsui@aia.com">邮箱: Alice-YC.Tsui@aia.com</a></p>
            <p>分机号：65829</p>

            <p style="margin-top:10px;">Zoe Guo</p>
            <p><a href="mailto:Zoe-Z.Guo@aia.com">邮箱：Zoe-Z.Guo@aia.com</a></p>
            <p>分机号：65152</p>

        </div>
    </div>
</template>
<script>
    export default{
        mounted() {
            this.$store.commit('SPIN')
        }
    }
</script>
<style lang="less" scoped>
    @import "../assets/style";
</style>
