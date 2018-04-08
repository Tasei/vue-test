<template>
    <iui-block>
        <iui-title>行李提示</iui-title>

        <component :is="currentView"></component>
    </iui-block>
</template>
<script>
    import iuiBlock from "../../../components/iui/block.vue"
    import iuiTitle from "../../../components/iui/block_title.vue"
    import luggageAA from "./components/luggage_AA.vue"
    import luggageKE from "./components/luggage_KE.vue"
    import luggageCA_B from "./components/luggage_CA_B.vue"
    import luggageCA_E from "./components/luggage_CA_E.vue"
    import luggageMUVX from "./components/luggage_MU_VX.vue"
    import luggageUA from "./components/luggage_UA.vue"
    import luggageDL from "./components/luggage_DL.vue"

    export default{
        data(){
            return {
                flightNo: "",
                flightClass: ""
            }
        },
        components: {iuiBlock, iuiTitle},
        computed: {
            currentView(){
                let pre = this.flightNo.substr(0, 2)
                switch (pre) {
                    case 'KE':
                        return luggageKE
                    case 'AA':
                        return luggageAA
                    case 'CA':
                        if (this.flightClass == '公务舱') {
                            return luggageCA_B
                        } else {
                            return luggageCA_E
                        }
                        return luggageCAUA
                    case 'MU':
                        return luggageMUVX
                    case 'UA':
                        return luggageUA
                    case 'DL':
                        return luggageDL
                }
            }
        },
        created(){
            this.getFlightNo()
        },
        methods: {
            getFlightNo(){
                let self = this
                this.$http.post('register/getRegInfo')
                    .then((response) => {
                        if (response.body.err == 0) {
                            let list = response.body.res.formList[1].value.elements
                            for (let el of list) {
                                if (el.name == 'flight_no') {
                                    self.flightNo = el.value
                                }
                                if (el.name == 'flight_cabin_class') {
                                    self.flightClass = el.value
                                }
                            }
                            this.$store.commit('SPIN')
                        }
                    })
            }
        }
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    @import "../style/page.less";
</style>
