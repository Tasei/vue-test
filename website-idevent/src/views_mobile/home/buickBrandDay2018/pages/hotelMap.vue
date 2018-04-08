<template>
    <iui-block>
        <iui-title >酒店位置</iui-title>
        <p><img :src="hotelLoc" class="img-responsive" @click="viewImg(hotelLoc)"></p>
        <!--<p><img :src="hotelTable" class="img-responsive" @click="viewImg(hotelTable)"></p>-->

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
            this.$store.commit('SPIN');
            this.test();
        },
        data(){
                return {
                    hotelLoc: '',
                    hotelTable: '',
                }

        },
        methods: {
            viewImg(src){
                window.location.href = src
            },
            test(){
                console.log(this.user.group.name=='经销商');//判断是经销商用户还是sgm用户
                if(this.user.group.name=='经销商'){
                    this.hotelLoc= require("../images/hotel_j.png")
                    this.hotelTable= require("../images/jingxiaoshang_hotel_table2.png")
                }else{
                    this.hotelLoc= require("../images/hotel_y.png")
                    this.hotelTable= require("../images/sgm_hotel_table1.png")
                }
            }
        }
    }
</script>
