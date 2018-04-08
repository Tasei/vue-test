<template>
    <div class="content">
        <div class="map-bg map1" v-show="tab==1">
            <img src="../images/map1.png" class="img-responsive"/>
        </div>
        <div class="map-bg map2" v-show="tab==2">
            <img src="../images/map2.png" class="img-responsive"/>
        </div>
        <div class="map-tabs">
            <div class="map-btn" :class="{active: tab==1}" @click="switchTab(1)">酒店停车场</div>
            <div class="map-btn" :class="{active: tab==2}" @click="switchTab(2)">小镇停车场</div>
        </div>

        <div class="map-btn map-btn-guide" @click="gotoMap">
            <span class="fa fa-location-arrow"></span>导航
        </div>
    </div>
</template>

<script>
    import iuiPageBg from "../../../components/iui/page_bg.vue"

    export default {
        components: {iuiPageBg},
        name: 'maps',
        data() {
            return {
                tab: 1
            }
        },
        mounted() {
            this.$store.commit('SPIN');
            window.setDocumentTitle('自驾停车指南')
        },
        methods: {
            switchTab(idx) {
                this.tab = idx
            },
            gotoMap() {
                window.location.href = this.mapLink
            }
        },
        computed: {
            mapLink() {
                if (this.tab == 1) {
                    return 'http://map.qq.com/m/index/nav/type=drive&eword=%E4%B8%8A%E6%B5%B7%E8%BF%AA%E5%A3%AB%E5%B0%BC%E4%B9%90%E5%9B%AD%E9%85%92%E5%BA%97%E5%81%9C%E8%BD%A6%E5%9C%BA&epointx=121.6674&epointy=31.13499'
                } else {
                    return 'http://map.qq.com/m/index/nav/type=drive&eword=%E8%BF%AA%E5%A3%AB%E5%B0%BC%E5%B0%8F%E9%95%87&epointx=121.66138&epointy=31.13947'
                }
            }
        }
    }
</script>
<style lang="less" scoped>
    .map-bg {
        img {
            display: block;
        }
    }

    .map-tabs {
        position: fixed;
        bottom: 10px;
        left: 10px;
        background: #fff;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.50);
        border-radius: 4px;
        .map-btn {
            display: inline-block;
            box-shadow: none;
            float: left;
            border-radius: 0;

            &:first-child {
                border-radius: 4px 0 0 4px;
            }
            &:last-child {
                border-radius: 0 4px 4px 0;
            }
        }
    }

    .map-btn {
        margin: 0;
        text-align: center;
        color: #8d8d8d;
        padding: 10px;
        font-size: 15px;
        line-height: 17px;
        background: #fff;
        border-radius: 4px;
        min-width: 90px;
        height: 40px;
        border: 1px solid #dedede;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.50);

        &.active {
            color: #fff;
            background: rgba(0, 0, 0, 0.70);
        }
    }

    .map-btn-guide {
        position: fixed;
        right: 10px;
        bottom: 10px;
        background: #3f8fdf;
        border: 1px solid #3f8fdf;
        color: #fff;
        span {
            margin-right: 6px;
            font-size: 1.1em;
        }
    }
</style>
