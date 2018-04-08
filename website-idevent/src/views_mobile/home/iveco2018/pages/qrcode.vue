<template>
    <div>
        <qrcode></qrcode>
        <bottom-bar></bottom-bar>
    </div>
</template>
<script>
    import qrcode from "../../default/components/qrcode"
    import BottomBar from "../components/bottomBar";
    export default{
        components: {
            BottomBar,
            qrcode,
        },
    }
</script>
