<template>
    <div class="mt-container">
        <div class="block">
            <div class="title">联系我们</div>
            <p>创新学院小二部</p>

            <div class="sub-title">白桦</div>
            <p>
                <a href="tel:13801863216">手机号：13801863216</a>
            </p>
            <p>
                <a href="tel:021-33962185">固话：021-33962185</a>
            </p>

            <div class="sub-title">戴媛媛</div>
            <p>
                <a href="tel:13564635158">手机号：13564635158</a>
            </p>
            <p>
                <a href="tel:021-33962728">固话：021-33962728</a>
            </p>

            <div class="sub-title">郑林</div>
            <p>
                <a href="tel:15618003992">手机号：15618003992</a>
            </p>
            <p>
                <a href="tel:021-33961890">固话：021-33961890</a>
            </p>

            <div class="sub-title">方璐笛</div>
            <p>
                <a href="tel:18616980183">手机号：18616980183</a>
            </p>
            <p>
                <a href="tel:021-33966113">固话：021-33966113</a>
            </p>

            <div class="sub-title">张若洋</div>
            <p>
                <a href="tel:13918257904">手机号：13918257904</a>
            </p>
            <p>
                <a href="tel:021-33968473">固话：021-33968473</a>
            </p>
        </div>

        <div class="block">
            <div class="title">大巴车联系人</div>

            <div class="sub-title">郭林</div>
            <p>
                <a href="tel:13918257904">手机号：15817459152</a>
            </p>
            <p>
                <a href="tel:021-33968473">固话：021-33962966</a>
            </p>
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
