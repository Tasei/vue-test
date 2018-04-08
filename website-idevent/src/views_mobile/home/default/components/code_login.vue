<template>
    <div>
        <!--<chevrolet-login v-if="_IS_('chevrolet2017')"></chevrolet-login>
        <oculus-login v-if="_IS_('oculus2017')"></oculus-login>-->
        <default-login></default-login>
    </div>
</template>

<script>
    import defaultLogin from './login'
    //import chevroletLogin from '../chevrolet2017/login'
   //import oculusLogin from '../oculus2017/login'

    export default{
        components: {
            defaultLogin//, chevroletLogin, oculusLogin
        },
    }
</script>
