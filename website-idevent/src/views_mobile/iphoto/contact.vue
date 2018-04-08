<template>
    <div>
        <h3 class="font-bold" style="padding-left: 10px">联系我们</h3>
        <div class="clearfix"></div>
        <mt-cell title="联系地址" label="中国，上海市普陀区江宁路1306弄7号富丽大厦25楼">
            <i slot="icon" class="icon icon-enviromento"></i>
        </mt-cell>
        <mt-cell title="联系邮箱" label="sales@idevent.cn">
            <i slot="icon" class="icon icon-mail"></i>
        </mt-cell>
        <mt-cell title="联系电话" label="021-61425809">
            <i slot="icon" class="icon icon-phone"></i>
        </mt-cell>
        <!--<mt-cell title="传真" label="+86 21 61426909">-->
        <!--<i slot="icon" class="icon icon-filetext"></i>-->
        <!--</mt-cell>-->
        <mt-cell title="工作时间" label="周一至周五 09:00-17:00">
            <i slot="icon" class="icon icon-clockcircleo"></i>
        </mt-cell>
    </div>
</template>
<script>
export default {
    mounted () {
        this.$store.commit('SPIN')
    }
}
</script>
