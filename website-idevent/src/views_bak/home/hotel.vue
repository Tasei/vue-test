<template>
    <div>
        <hotel-list :list="list" v-if="!single"></hotel-list>
        <hotel-detail :id="list[0].id" v-else></hotel-detail>
    </div>
</template>
<script>
    import hotelList from "../components/hotel/list.vue"
    import hotelDetail from "../components/hotel/detail.vue"
    export default{
        components: {hotelList, hotelDetail},
        data() {
            return {
                list: []
            }
        },
        created() {
            this.getList()
        },
        computed: {
            single(){
                return this.list.length == 1
            }
        },
        methods: {
            getList() {
                let self = this
                this.$http.post('hotel/showListByGroup', {
                    limit: this.$route.query.limit
                }).then((response) => {
                    if (response.body.err == 0) {
                        self.list = response.body.res.list
                        this.$store.commit('SPIN')
                    }
                })
            }
        }
    }
</script>
