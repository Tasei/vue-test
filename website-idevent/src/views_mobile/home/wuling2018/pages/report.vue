<template>
    <div>
        <a class="report-item" v-for="item in itemList" :href="item"><img :src="item" alt=""></a>
    </div>
</template>

<script>
    export default {
        name: 'fuckerone',
        data() {
            return {
                itemList:{
                    img1: require('../images/HonestyandIntegrityReport01.jpg'),
                    img2: require('../images/HonestyandIntegrityReport02.jpg'),
                    img3: require('../images/HonestyandIntegrityReport03.jpg'),
                    img4: require('../images/HonestyandIntegrityReport04.jpg'),
                    img5: require('../images/HonestyandIntegrityReport05.jpg'),
                    img6: require('../images/HonestyandIntegrityReport06.jpg'),
                    img7: require('../images/HonestyandIntegrityReport07.jpg'),
                    img8: require('../images/HonestyandIntegrityReport08.jpg'),
                    img9: require('../images/HonestyandIntegrityReport09.jpg'),
                    img10: require('../images/HonestyandIntegrityReport10.jpg'),
                }
            }

        },
        mounted() {
            document.title = '廉洁诚信报告'
            this.$store.commit('SPIN', false)
        }
    }
</script>

<style lang="less" scoped>
    img{
        width: 100%;
    }
    .report-item {
        width: 100%;
        display: block;
        margin-bottom:5px;

    }
    .report-item:last-child{
        margin-bottom:50px;
    }
</style>
