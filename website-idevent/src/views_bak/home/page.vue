<template>
    <component :is="currentView"></component>
</template>
<script>
    //import chevroletPage from "./chevrolet2017/page"
    //import cheryPage from "./chery2017/page"
    //import geelyPage from "./geely2017/page"
    //import micePage from "./mice2017/page"
    //import nascarPage from "./nascar2017/page"
    import bgPage from "./bg2017/page"
    //import chevroletD2UCPage from "./chevroletD2UC/page"
    //import buickBrandDayPage from "./buick2017/page.vue"
   // import abcPage from "./abc2017/page"
    import iccaPage from "./icca2017/page"

    export default{
        components: {
            //chevroletPage,
            //cheryPage,
            //geelyPage,
            //micePage,
            //nascarPage,
            //bgPage,
            //chevroletD2UCPage,
            //buickBrandDayPage,
            //abcPage,
            iccaPage
        },
        computed: {
            currentView(){
                if (this._IS_('chevrolet2017')) {
                    return chevroletPage
                } else if (this._IS_('chery2017')) {
                    return cheryPage
                } else if (this._IS_('geely2017')) {
                    return geelyPage
                } else if (this._IS_('mice2017')) {
                    return micePage
                } else if (this._IS_('nascar2017')) {
                    return nascarPage
                } else if (this._IS_('bg2017')) {
                    return bgPage
                } else if (this._IS_('chevroletD2UC')) {
                    return chevroletD2UCPage
                } else if (this._IS_('buick2017')) {
                    return buickBrandDayPage
                } else if (this._IS_('abc2017') || this._IS_('abc2017-1')) {
                    return abcPage
                } else if (this._IS_('icca2017')) {
                    return iccaPage
                }
            }
        }
    }
</script>
