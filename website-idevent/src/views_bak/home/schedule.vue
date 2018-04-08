<template>
    <component :is="currentView"></component>
</template>
<script>
    //import fordSchedule from "./ford2017/schedule"
    //import buickSchedule from "./buick2017/schedule"
    //import geelySchedule from "./geely2017/schedule"
    //import cherySchedule from "./chery2017/schedule"
    //import chevroletSchedule from "./chevrolet2017/schedule"
    //import nascarSchedule from "./nascar2017/schedule"
    export default{
        components: {
            //fordSchedule,
            //buickSchedule,
            //geelySchedule,
            //cherySchedule,
            //chevroletSchedule,
            //nascarSchedule
        },
        computed: {
            currentView(){
                if (this._IS_('ford2017')) {
                    return 'fordSchedule'
                } else if (this._IS_('buick2017')) {
                    return 'buickSchedule'
                } else if (this._IS_('geely2017')) {
                    return 'geelySchedule'
                } else if (this._IS_('chery2017')) {
                    return 'cherySchedule'
                } else if (this._IS_('chevrolet2017')) {
                    return 'chevroletSchedule'
                } else if (this._IS_('nascar2017')) {
                    return 'nascarSchedule'
                }
            }
        }
    }
</script>
