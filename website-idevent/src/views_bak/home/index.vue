<template>
    <component v-bind:is="currentView"></component>
</template>
<script>
    //import fordIndex from "./ford2017/index"
    //import buickIndex from "./buick2017/index"
    //import miceIndex from "./mice2017/index"
    //import miceFeedbackIndex from "./mice2017/feedbackIndex.vue"
    import herbalifeIndex from "./herbalife2017/index"
    //import geelyIndex from "./geely2017/index"
    //import cheryIndex from "./chery2017/index"
    //import chevroletIndex from "./chevrolet2017/index"
    //import nascarIndex from "./nascar2017/index"
    //import bgIndex from "./bg2017/index"
    //import citsIndex from "./cits2017/index"
    //import chevroletD2UCIndex from "./chevroletD2UC/index"
    //import buickBrandDayIndex from './buick2017/index.vue'
    //import oculusIndex from './oculus2017/index'
    //import abcIndex from "./abc2017/index"
    import cpicIndex from "./cpic2017/index"
    import iccaIndex from "./icca2017/index"
    export default {
        components: {
            //fordIndex,
            //buickIndex,
            //miceIndex,
            //miceFeedbackIndex,
            herbalifeIndex,
            //geelyIndex,
            //cheryIndex,
            //chevroletIndex,
            //nascarIndex,
            //bgIndex,
            //citsIndex,
            //chevroletD2UCIndex,
            //buickBrandDayIndex,
            //oculusIndex,
            //abcIndex,
            cpicIndex,
            iccaIndex
        },
        computed: {
            currentView(){
                if (this._IS_('herbalife2017')) {
                    return 'herbalifeIndex'
                } else if (this._IS_('ford2017')) {
                    return 'fordIndex'
                } else if (this._IS_('buick2017')) {
                    return 'buickIndex'
                } else if (this._IS_('mice2017')) {
                    return 'miceIndex'
                } else if (this._IS_('geely2017')) {
                    return 'geelyIndex'
                } else if (this._IS_('chery2017')) {
                    return 'cheryIndex'
                } else if (this._IS_('chevrolet2017')) {
                    return 'chevroletIndex'
                } else if (this._IS_('nascar2017')) {
                    return 'nascarIndex'
                } else if (this._IS_('bg2017')) {
                    return 'bgIndex'
                } else if (this._IS_('cits2017')) {
                    return 'citsIndex'
                } else if (this._IS_('chevroletD2UC')) {
                    return 'chevroletD2UCIndex'
                } else if (this._IS_('buick2017')) {
                    return 'buickBrandDayIndex'
                }else if(this._IS_('oculus2017')) {
                    return 'oculusIndex'
                } else if (this._IS_('abc2017')) {
                    return 'abcIndex'
                } else if (this._IS_('cpic2017')) {
                    return 'cpicIndex'
                } else if (this._IS_('icca2017')) {
                    return 'iccaIndex'
                } else if (this._IS_('micechina2017-3')) {
                    return 'miceFeedbackIndex'
                }
            }
        },
        created() {
            //for mg fix
            if(this._IS_('mg2017_media') || this._IS_('mg2017_dealer')) {
                this.$router.push({
                    name: 'pc_mg_home',
                    query: {
                        mid: this.meeting.id
                    }
                })
            }
	    }
    }
</script>
