<template>
<div class="container">
	<div class="row">
	    <i-spinner fix v-show="loading"></i-spinner>
	    <transition name="custom-animation"
	                enter-active-class="animated fadeIn"
	                leave-active-class="animated fadeOut">
	        <div class="wrapper" v-show="!loading" v-if="user">
	            <router-view></router-view>
	        </div>
	    </transition>
    </div>
</div>
</template>
<script>
import iSpinner from '../../../components/spinner'
export default {
	created() {
		this.checkLogin()
		this.getSteps()
	},
	computed: {
        loading () {
            return this.$store.state.spin
        },
        meeting(){
        	return this.$store.state.meeting
        },
        user(){
        	return this.$store.state.user
        }
    },
	methods: {
		checkLogin() {
			if (!this.user) {
				this.$cookie.set('__redirect', this.$route.fullPath)
	            this.$router.push({
	                name: 'portal',
	                query: {
	                    mid: this.meeting.id
	                }
	            })
			}
		},
		getSteps() {
			this.$http.post('meeting/getStepList')
				.then(function(response) {
	                let ret = response.body
	                if (ret.err != 0) {
	                    return
	                }

	                if (ret.res) {
	                    this.$store.commit('STEPS', ret.res)
	                }
	            })
		},
	},
	components: {
	    iSpinner
	}
}
</script>
<style scoped>
.wrapper {
    padding-bottom: 40px;
}
</style>
