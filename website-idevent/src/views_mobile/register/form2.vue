<template>
    <component v-bind:is="currentView"></component>
</template>
<script>
import defaultForm from "../form/form2"
import oriflameForm from "../home/oriflame-macau/form"
import iveco2018Form from "../home/iveco2018/form"
export default{
	components: {defaultForm, oriflameForm,iveco2018Form},
    computed: {
        currentView() {
            if (this._IS_('oriflame-macau')) {
                return 'oriflameForm'
            }
            if (this._IS_('iveco2018')) {
                return 'iveco2018Form'
            }
            return defaultForm;
        }
    }
}
</script>
