<template>
    <div class="container">
        <iui-page-bg></iui-page-bg>
        <template v-for="info in flightList">
            <flight :info="info"></flight>
        </template>
    </div>
</template>
<script>
    import flight from "../../../components/flight.vue"
    import iuiPageBg from "../../../components/iui/page_bg.vue"
    export default{
        components: {flight, iuiPageBg},
        mounted() {
            this.$store.commit('SPIN', false)
        },
        data(){
            return {
                flightList: []
            }
        },
        created(){
            this.getFlightInfo()
        },
        methods: {
            getFlightInfo() {
                let self = this
                this.$http.post('register/getRegInfo')
                    .then((response) => {
                        if (response.body.err == 0) {
                            let formList = response.body.res.formList

                            for (let form of formList) {
                                if (form.name.indexOf('航班') > -1) {
                                    if (form.value.elements[0].value == ""){
                                        continue
                                    }

                                    let flight = {
                                        label: form.name.substr(0, 2)
                                    }
                                    for (let el of form.value.elements) {
                                        flight[el.name] = el.value
                                    }

                                    self.flightList.push(flight)
                                }
                            }
                            this.$store.commit('SPIN')
                        }
                    })
            }
        }
    }
</script>
