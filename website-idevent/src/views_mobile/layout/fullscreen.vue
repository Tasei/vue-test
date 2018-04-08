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
    <div class="fullscreen-bg" :style="{backgroundImage: 'url(' + background + ')' }"></div>
</div>
</template>
<style>
.fullscreen-bg{
    position: absolute;
    top:  0;
    left:  0;
    bottom: 0;
    right: 0;
    z-index: -1;
    background-color:  #292929;
}
html{
    overflow-y: hidden;
}
.container{
    max-width: 990px;
}
</style>
<script>
    import iSpinner from '../../../components/spinner'
    export default {
        computed: {
            loading () {
                return this.$store.state.spin
            },
            meeting(){
                return this.$store.state.meeting
            },
            background() {
                return '';
                if (this.meeting.settings.wall && this.meeting.settings.wall.background) {
                    return this.meeting.settings.wall.background
                }
                return ''
            }
        },
        components: {
            iSpinner
        }
    }
</script>
