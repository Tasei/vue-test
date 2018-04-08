<template>
<div :class="{[meeting && meeting.alias]: true}">
    <router-view></router-view>
</div>
</template>
<script>
import '../styles/themes/theme_m_blue.less'
import '../styles/themes/theme_m_green.less'
import '../styles/themes/theme_m_china_red.less'
import '../styles/themes/theme_m_black.less'
import '../styles/themes/theme_m_bumblebee.less'
import '../styles/themes/theme_m_gold.less'
import '../styles/themes/theme_m_tiffany_blue.less'
import '../styles/themes/theme_m_purple.less'
import '../styles/themes/theme_m_navy_blue.less'
import '../styles/themes/theme_m_oriflame.less'
import '../styles/themes/theme_m_soul_red.less'
import vConsole from 'vconsole';

export default {
    beforeUpdate() {
        if (this.$route.query.debug && !this.$debug) {
            this.$debug = new vConsole()
        }
    },
	computed: {
		themeClass(){
			let theme = null
			if (this.meeting && this.meeting.settings.theme) {
				theme = this.meeting.settings.theme.color
			}
			if (!theme) {
				theme = "blue"
			}
            return theme
		}
	},
	updated() {
	    document.body.className = 'theme theme-' + this.themeClass
	},
}
</script>
