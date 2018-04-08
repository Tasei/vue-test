<template>
<div class="container">
    <div class="row">
        <i-spinner fix v-show="loading"></i-spinner>
        <transition name="custom-animation"
                    enter-active-class="animated fadeIn"
                    leave-active-class="animated fadeOut">
            <div class="wrapper" v-show="!loading">
                <router-view></router-view>
            </div>
        </transition>
    </div>
</div>
</template>
<script>
    import iSpinner from '../../../components/spinner'
    export default {
        computed: {
            loading () {
                return this.$store.state.spin
            },
        },
        components: {
            iSpinner
        }
    }
</script>
