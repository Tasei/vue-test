<template>
    <div class="mt-container">
        <div class="block">
            <div class="title">{{$t('partner.principal')}}</div>
            <p class="logos">
                <img src="../assets/icon_1.png" />
            </p>
        </div>
        <div class="block">
            <div class="title">{{$t('partner.sponsor')}}</div>
            <p class="logos">
                <img src="../assets/icon_2.jpg" />
                <img src="../assets/icon_3.png" />
                <img src="../assets/icon_4.png" />
                <img src="../assets/logo_idevent.png" />
            </p>
        </div>
        <div class="block">
            <div class="title">{{$t('partner.venue')}}</div>
            <p class="logos">
                <img src="../assets/icon_5.png" />
            </p>
        </div>
        <div class="block">
            <div class="title">{{$t('partner.carrier')}}</div>
            <p class="logos">
                <img src="../assets/icon_10.png" />
            </p>
        </div>
        <div class="block">
            <div class="title">{{$t('partner.support')}}</div>
            <p class="logos">
                <img src="../assets/icon_6.jpg" />
                <img src="../assets/icon_7.png" />
                <img src="../assets/icon_12.png" />
            </p>
        </div>
        <div class="block">
            <div class="title">{{$t('partner.media')}}</div>
            <p class="logos">
                <img src="../assets/icon_8.png" />
                <img src="../assets/icon_9.png" />
                <img src="../assets/icon_11.png" />
            </p>
        </div>
    </div>
</template>
<script>
    export default{
        locales: {
            en: {
                partner: {
                    principal: 'Principal Partner',
                    sponsor: 'Sponsors',
                    venue: 'Official Conference Host Venue',
                    carrier: 'Official Carrier',
                    support: 'Supporting Organisations',
                    media: 'Media Partners',
                }
            },
            zh: {
                partner: {
                    principal: '主要合作伙伴',
                    sponsor: '合作伙伴',
                    venue: '大会官方场地',
                    carrier: '官方指定航空公司',
                    support: '支持合作伙伴',
                    media: '合作媒体',
                }
            }
        },
        mounted() {
            this.$store.commit('SPIN')
        },
        data() {
            return {
            }
        }
    }
</script>
<style lang="less" scoped>
    @import "../assets/style";
    .block {
        .logos {
            img {
                max-width: 39%;
                margin: 10px 5%;
            }
        }
    }
</style>
