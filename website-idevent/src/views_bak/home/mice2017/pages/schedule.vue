<template>
    <div>
        <mt-navbar v-model="active" :fixed="true">
            <mt-tab-item id="tab-2">上海站</mt-tab-item>
        </mt-navbar>
        <div style="margin-top: 50px;">
            <mt-tab-container v-model="active">
                <mt-tab-container-item id="tab-2">
                    <mc-schedule type="2"></mc-schedule>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>
<script>
    import mcSchedule from '../components/schedule.vue'
    export default{
        components: {mcSchedule},
        data() {
            return {
                active: 'tab-2',
            }
        },
        created() {
            this.$store.commit('SPIN', false)
        },
    }
</script>
