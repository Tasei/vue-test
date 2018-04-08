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
                    img1: require('../images/HonestyandIntegrityEnhanceWinWinPartnership1.jpg'),
                    img2: require('../images/HonestyandIntegrityEnhanceWinWinPartnership2.jpg'),
                    img3: require('../images/HonestyandIntegrityEnhanceWinWinPartnership3.jpg'),
                    img4: require('../images/HonestyandIntegrityEnhanceWinWinPartnership4.jpg'),
                    img5: require('../images/HonestyandIntegrityEnhanceWinWinPartnership5.jpg'),
                    img6: require('../images/HonestyandIntegrityEnhanceWinWinPartnership6.jpg'),
                    img7: require('../images/HonestyandIntegrityEnhanceWinWinPartnership7.jpg'),
                    img8: require('../images/HonestyandIntegrityEnhanceWinWinPartnership8.jpg'),
                    img9: require('../images/HonestyandIntegrityEnhanceWinWinPartnership9.jpg'),
                    img10: require('../images/HonestyandIntegrityEnhanceWinWinPartnership10.jpg'),
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
