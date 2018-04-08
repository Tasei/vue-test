<template>
    <div>
        <template v-if="steps.is_over">
            <router-link v-if="nextLink" :to="this.nextLink" :class="appendClass"
                         class="btn btn-primary btn-lg padding-lg" v-show="show_register_order != 'false'">{{$t('viewMyOrder')}}
            </router-link>
            <logout></logout>
        </template>
        <template v-else>

            <router-link v-if="nextLink" :to="this.nextLink" :class="appendClass"
                         class="btn btn-primary btn-lg padding-lg">
                <slot>{{$t('nextStep')}}</slot>
            </router-link>

            <template v-else>
                <router-link v-if="_IS_('yumchina2017')" :to="{name:'red_packet_index'}" :class="appendClass"
                             class="btn btn-primary btn-lg padding-lg">
                    <slot>去领红包</slot>
                </router-link>
                <router-link v-else-if="!_IS_('tbljfh')" :to="this.doneLink" :class="appendClass"
                             class="btn btn-primary btn-lg padding-lg">
                    <slot>{{$t('done')}}</slot>
                </router-link>
                <div v-if="_IS_('chery2018')" v-show="hotelBtn != 'false'">
                    <a class="btn btn-primary btn-outline btn-lg m-logout-btn" @click="goHotelFn">
                        {{$t('hotel-reservation')}}
                    </a>
                </div>
                <logout></logout>
            </template>

        </template>
    </div>
</template>
<script>
    import logout from "../../home/default/components/logout.vue"

    export default {
        data() {
            return {
                show_register_order:'',
                hotelBtn:'',
            }
        },
        locales: {
            en: {
                'hotel-reservation': 'Hotel reservation',
            },
            zh: {
                'hotel-reservation': '酒店预订',
            }
        },
        components: {logout},
        props: {
            appendClass: {type: String, default: ''}
        },
        created(){
            this.hotelBtn = this.meeting.websettings.hotelBtn
            this.show_register_order = this.meeting.websettings.show_register_order;
        },
        computed: {
            steps() {
                return this.$store.state.steps
            },
            nextLink() {
                let skipout = false
                for (let [index, st] of this.steps.list.entries()) {
                    if (skipout) {
                        // console.log(st)
                        return {
                            path: st.path,
                            query: st.query,
                        }
                    }

                    if (st.path == this.$route.path) {
                        // console.log(st.route)
                        skipout = true
                    }
                }
                return null
            },
            doneLink() {
                let link = {name: 'home_index', query: {'done': 1,}};
                if (this.$store.state.mobile) {
                    link.query.mobile = 1;
                }
                return link;
            }
        },
        methods:{
            goHotelFn() {
                if (this.$lang === "en") {
                    window.location.href = 'http://www.shangri-la.com/reservations/booking/en/index.aspx?hid=SHHZ&group_code=CHE210318&check_in=20180321&check_out=20180323'
                } else {
                    window.location.href = 'http://www.shangri-la.com/reservations/booking/sc/index.aspx?hid=SHHZ&group_code=CHE210318&check_in=20180321&check_out=20180323'
                }
            }
        }
    }
</script>
