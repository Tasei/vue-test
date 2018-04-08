<template>
    <div class="iui-index-menu">
        <div class="item" v-for="item in list">
            <!--<router-link v-if="item.route_to" class="box" :to="item.route_to">-->
                <!--<i class="img-icon" :style="{ 'background-image': 'url(' + item.iconImg + ')' }"></i>-->
                <!--<h5>{{item.title}}</h5>-->
            <!--</router-link>-->
            <a class="box" href="javascript:void(0);" @click="goWait(item.route_to)">
                <i class="img-icon" :style="{ 'background-image': 'url(' + item.iconImg + ')' }"></i>
                <h5>{{item.title}}</h5>
            </a>
        </div>
    </div>
</template>
<script>
    import {Toast} from "mint-ui"
    export default{
        props: {
            'list': Array
        },
        methods: {
            onClick(item) {
                if (item.onClick) {
                    item.onClick()
                }
            },
            goWait(r){
                if(r.query){
                    let rBtn = this.meeting.websettings[r.query.page]
                    if(rBtn == 'false'){
                        Toast('敬请期待')
                        return
                    }
                    this.$router.push(r)
                }else{
                    this.$router.push(r)
                }
            }
        }
    }
</script>
<style lang="less" scoped>
    .iui-index-menu {
        .item {
            width: 50%;
            height: 33.4%;
            min-height: 100px;
            float: left;
            overflow: visible;
            text-align:center;
            font-size: 17px;
            &::before {
                content: '';
                display:block;
                position: absolute;
                top:0;
                right: -1px;
                bottom:0;
                width: 1px;
                background-color: #ddd;
            }
            &::after {
                left: 0;
            }
            &:last-child {
                &::after {
                     height: 1px !important;
                }
            }
            .box {
                position: absolute;
                top: 50%;
                left: 5%;
                right: 5%;
                transform: translate(0, -50%);
                padding: 10% 0;
            }
        }
        &::after {
            content: '';
            display:block;
            clear: both;
        }
    }
    .img-icon {
        display: inline-block;
        width: 2em;
        height: 2em;
        background-repeat: no-repeat;
        background-size: contain;
        margin-bottom: 0.4em;
    }
</style>
