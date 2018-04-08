<template>
    <div>
        <!--<chery-qrcode v-if="_IS_('chery2017')"></chery-qrcode>-->
        <cpic-qrcode v-if="_IS_('cpic2017')"></cpic-qrcode>
        <qrcode v-else></qrcode>
    </div>
</template>
<script>
    //import qrcode from "./default/qrcode"
    //import cheryQrcode from "./chery2017/qrcode"
    import cpicQrcode from "./cpic2017/qrcode"
    export default{
        components: {
            qrcode,
            //cheryQrcode,
            cpicQrcode
        },
    }
</script>
