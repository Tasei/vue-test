<template>
    <component :is="currentView"></component>
</template>
<script>
    import qrcode from "./pages/qrcode"
    import info from "./pages/info"
    import contact from "./pages/contact"
    import schedule from "./pages/schedule"
    import flight from "./pages/flight.vue"
    import weather from "./pages/weather"
    import about from "./pages/about.vue"
    import tips from "./pages/tips.vue"
    import tipsImport from "./pages/tips_import.vue"
    import tipsWeather from "./pages/tips_weather.vue"
    import tipsTimezone from "./pages/tips_timezone.vue"
    import tipsSocket from "./pages/tips_socket.vue"
    import tipsComm from "./pages/tips_comm.vue"
    import tipsShopping from "./pages/tips_shopping.vue"
    import tipsInsurance from "./pages/tips_insurance.vue"
    import tipsExchange from "./pages/tips_exchange.vue"
    import tipsEmergency from "./pages/tips_emergency.vue"
    import infoCulture from "./pages/info_culture.vue"
    import infoTrip from "./pages/info_trip.vue"
    import infoFlight from "./pages/info_flight.vue"
    import infoDinner from "./pages/info_dinner.vue"

    export default{
        components: {
            qrcode, schedule, contact, info, flight, weather, about, tips,tipsImport,
            tipsWeather, tipsTimezone, tipsSocket, tipsComm, tipsShopping, tipsInsurance, tipsExchange, tipsEmergency,
            infoCulture, infoTrip, infoFlight, infoDinner
        },
        computed: {
            currentView(){
                return this.$route.query.page
            }
        }
    }
</script>
