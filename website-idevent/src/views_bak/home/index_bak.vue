<template>
    <component v-bind:is="currentView"></component>
</template>
<script>
    import fordIndex from "./ford2017/index"
    import ford2018Index from "./ford2018/index"
    import buickIndex from "./buick2017/index"
    //import miceIndex from "./mice2017/index"
    //import miceFeedbackIndex from "./mice2017/feedbackIndex.vue"
    import herbalifeIndex from "./herbalife2017/index"
    //import geelyIndex from "./geely2017/index"
    //    import cheryIndex from "./chery2017/index"
    //import chevroletIndex from "./chevrolet2017/index"
    //import nascarIndex from "./nascar2017/index"
//    import bgIndex from "./bg2017/index"
    //import citsIndex from "./cits2017/index"
    //    import chevroletD2UCIndex from "./chevroletD2UC/index"
    //import buickBrandDayIndex from './buick2017/index.vue'
    //    import oculusIndex from './oculus2017/index'
    //import abcIndex from "./abc2017/index"
    import cpicIndex from "./cpic2017/index"
    import iccaIndex from "./icca2017/index"
    import citifIndex from "./citif2017/index"
    import oriflameIndex from "./oriflame-macau/index"
    import aiaIndex from "./aia2017/index"
    import yumChinaIndex from "./yumchina2017/index"
    import yumFoundersDayIndex from "./yumFoundersDay/index"
    import icesapIndex from "./icesap2017/index"
    import cpicInnovateIndex from "./cpicInnovate/index"
    import oriMobileIndex from "./oriflame2017/index"
    import index100T from "./100T2017/index"
    import chevrolet920Index from "./chevrolet920/index"
//    import yum2018Index from "./yum2018/index"
    import ciieIndex from "./ciie2017/index"
    import pinganEastIndex from "./pingan2017/index"
    import mercer2017Index from "./mercer2017/index"
    import oceanIndex from "./ocean/index"

    import cbrand2017Index from "./cbrand2017/index"
    export default {
        computed: {
            currentView() {
                switch (true) {
                    case this._IS_('ford2017'):
                        return fordIndex
                    case this._IS_('ford2018'):
                        return ford2018Index
                    case this._IS_('ciie2017'):
                        return ciieIndex
                    case this._IS_('yumFoundersDay'):
                        return yumFoundersDayIndex
                    case this._IS_('chevrolet920'):
                        return chevrolet920Index
//                    case this._IS_('bg2017'):
//                        return bgIndex
                    case this._IS_('cpic2017'):
                        return cpicIndex
//                    case this._IS_('icca2017'):
//                        return iccaIndex
                    case this._IS_('citif2017'):
                        return citifIndex
                    case this._IS_('aia2017'):
                        return aiaIndex
                    case this._IS_('icesap2017'):
                        return icesapIndex
                    case this._IS_('cpicInnovate'):
                        return cpicInnovateIndex
                    case this._IS_('100t2017'):
                        return index100T
                    case this._IS_('oriflame-macau'):
                        if (this.$store.state.mobile) {
                            return oriMobileIndex
                        }
                        return oriflameIndex
                    case this._IS_('pingan2017'):
                        return pinganEastIndex
                    case this._IS_('mercer2017'):
                        return mercer2017Index
                    case this._IS_('gl6'):
                        return buickIndex
                    case this._IS_('herbalife2017'):
                    case this._IS_('herbalife2018'):
                        return herbalifeIndex
                    case this._IS_('cbrand2017'):
                        return cbrand2017Index
                    case this._IS_('tbkhj'):
                        return oceanIndex
                    default:
                        return
                }
            }
        },
        created() {
            //for mg fix
            if (this._IS_('mg2017_media') || this._IS_('mg2017_dealer')) {
                this.$router.push({
                    name: 'pc_mg_home',
                    query: {
                        mid: this.meeting.id
                    }
                })
            }

            if(!this.currentView){
                this.$router.push({
                    name: 'register_form',
                    query: {
                        mid: this.meeting.id
                    }
                })
            }
        }
    }
</script>
