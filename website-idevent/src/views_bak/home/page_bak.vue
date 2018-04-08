<template>
    <component :is="currentView"></component>
</template>
<script>
    //import chevroletPage from "./chevrolet2017/page"
    //import cheryPage from "./chery2017/page"
    //import geelyPage from "./geely2017/page"
    //import micePage from "./mice2017/page"
    //import nascarPage from "./nascar2017/page"
//    import bgPage from "./bg2017/page"
    //import chevroletD2UCPage from "./chevroletD2UC/page"
    import buick2017Page from "./buick2017/page.vue"
    // import abcPage from "./abc2017/page"
//    import iccaPage from "../../views/home/icca2017/page"
    import citifPage from "./citif2017/page"
    import yumchinaPage from "./yumchina2017/page"
    import yumFoundersDayPage from "./yumFoundersDay/page"
    import aiaPage from "./aia2017/page"
    import oriflamePage from "./oriflame-macau/page"
    import icesapPage from "./icesap2017/page"
    import cpicInnvoatePage from "./cpicInnovate/page"
    import oriMobilePage from "./oriflame2017/page"
    import page100T from "./100T2017/page"
    import chevrolet920Page from "./chevrolet920/page"
//    import yum2018Page from "./yum2018/page"
    import pinganPage from "./pingan2017/page"
    import mercer2017Index from "./mercer2017/page"
    import oceanPage from "./ocean/page"
    import dasilPage from "./dasil2017/page"
    import cbrand2017Page from "./cbrand2017/page"
    import ford2018Page from "./ford2018/page"
    export default {
        computed: {
            currentView() {
                switch (true) {
                    case this._IS_('yumFoundersDay'):
                        return yumFoundersDayPage
                    case this._IS_('ford2018'):
                        return ford2018Page
                    case this._IS_('chevrolet920'):
                        return chevrolet920Page
                    case this._IS_('100t2017'):
                        return page100T
//                    case this._IS_('bg2017'):
//                        return bgPage
//                    case this._IS_('icca2017'):
//                        return iccaPage
                    case this._IS_('citif2017'):
                        return citifPage
                    case this._IS_('yumchina2017'):
                        return yumchinaPage
                    case this._IS_('aia2017'):
                        return aiaPage
                    case this._IS_('oriflame-macau'):
                        if (this.$store.state.mobile) {
                            return oriMobilePage
                        }
                        return oriflamePage
                    case this._IS_('icesap2017'):
                        return icesapPage
                    case this._IS_('cpicInnovate'):
                        return cpicInnvoatePage
                    case this._IS_('pingan2017'):
                        return pinganPage
                    case this._IS_('mercer2017'):
                        return mercer2017Index
                    case this._IS_('gl6'):
                        return buick2017Page
                    case this._IS_('tbkhj'):
                        return oceanPage
                    case this._IS_('dasil'):
                        return dasilPage
                    case this._IS_('cbrand2017'):
                        return cbrand2017Page
                    default:
                        return
                }
            }
        }
    }
</script>
