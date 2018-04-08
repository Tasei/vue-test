<template>
    <div class="home-flight">
        <div class="flight-title">
            <span class="label label-primary">{{info.label}}</span>
            {{info.flight_takeoff_date}}
            {{info.flight_takeoff_city}}—{{info.flight_landing_city}}
        </div>
        <div class="flight-panel">
            <div class="route">
                <span class="time">{{info.flight_takeoff_datetime}}</span>
                <span class="airport">{{info.flight_takeoff_airport}} {{info.flight_takeoff_terminal}}</span>
            </div>
            <div class="route">
                <span class="time">{{info.flight_landing_datetime}}</span>
                <span class="airport">{{info.flight_landing_airport}} {{info.flight_landing_terminal}}</span>
            </div>
            <div class="route-arrow">
            </div>
        </div>
        <div class="airline">
            {{company}} {{info.flight_no}} {{info.flight_cabin_class}}
        </div>
    </div>
</template>
<script>
    export default{
        props: {
            info: Object
        },
        computed: {
            company(){
                switch (this.info.flight_no.substr(0, 2)) {
                    case 'KE':
                        return '大韩航空'
                    case 'AA':
                        return '美国航空'
                    case 'CA':
                        return '中国国际航空'
                    case 'UA':
                        return '美国联合航空'
                    case 'DL':
                        return '达美航空'
                    default:
                        return ''
                }
            }
        }
    }
</script>

