<template>
    <iui-block>
        <iui-title>酒店位置</iui-title>
        <p><img :src="hotelLoc" class="img-responsive" @click="viewImg(hotelLoc)"></p>
        <p><img :src="hotelTable" class="img-responsive" @click="viewImg(hotelTable)"></p>

        <btn-home></btn-home>
    </iui-block>
</template>
<script>
    import iuiBlock from "../../../components/iui/block.vue"
    import iuiTitle from "../../../components/iui/block_title.vue"
    import btnHome from "../components/btn_home.vue"
    export default{
        components: {
            iuiTitle, iuiBlock, btnHome
        },
        created() {
            this.$store.commit('SPIN')
        },
        data(){
            return {
                hotelLoc: require("../images/hotel_location.png"),
                hotelTable: require("../images/hotel_table.jpg"),
            }
        },
        methods: {
            viewImg(src){
                window.location.href = src
            }
        }
    }
</script>
