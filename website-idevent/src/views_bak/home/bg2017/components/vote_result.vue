<template>
    <div class="vote-result" v-if="total > 0">
        <div class="title">
            <a href="javascript:;">{{vote.title}}</a>
        </div>
        <table class="table">
            <tbody>
                <tr v-for="p of list">
                    <td>{{p.rank}}</td>
                    <td>
                        <div class="avatar">
                            <img :src="p.pic + '/b200'" />
                        </div>
                        <a v-if="p.rank==1" class="crown crown-1" href="javascript:;"></a>
                        <a v-if="p.rank==2" class="crown crown-2" href="javascript:;"></a>
                        <a v-if="p.rank==3" class="crown crown-3" href="javascript:;"></a>
                    </td>
                    <td>
                        <h5 class="name">{{p.text}}</h5>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" :aria-valuenow="p.percentage"
                                 aria-valuemin="0" aria-valuemax="100"
                                 :style="{width: p.percentage + '%'}"></div>
                        </div>
                    </td>
                    <td>
                        <a href="javascript:;">{{p.percentage}}%</a>
                    </td>
                    <td class="text-primary">
                        {{p.vote_count}}<small>票</small>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    export default {
        props: {
            vote: {
                type: Object,
                default: null
            },
            list: {
                type: Array,
                default: []
            },
            total: {
                type: Number,
                default: 0
            }
        }
    }
</script>
<style lang="less" scoped>
    .vote-result {
        padding: 0 20px 80px 20px;
    }
    .title {
        text-align: center;
        padding: 30px 0 22px;
        a {
            display: inline-block;
            min-width: 90px;
            height: 40px;
            line-height: 40px;
            font-size: 17px;
            color: #BC9D5D;
            font-weight: bold;
            background: url("../images/tab_bg.png") no-repeat center;
            background-size: 100% 100%;
        }
    }
    table {
        width: 100%;
        tr {
            margin-bottom: 30px;
            td {
                line-height: 1!important;
                vertical-align: middle!important;
                padding: 15px 0;
                border: none!important;
                height: 70px;
                position: relative;
            }
            td:nth-child(1) {
                width: 16px;
                text-align: center;
                padding: 0!important;
            }
            td:nth-child(2) {
                width: 60px;
                padding: 0 10px;
            }
            td:nth-child(3) {
                padding: 6px 0;
            }
            td:nth-child(4) {
                padding: 0!important;
                width: 89px;
                a {
                    display: inline-block;
                    font-size: 9px;
                    position: absolute;
                    left: 5px;
                    bottom: 18px;
                }
            }
            td:nth-child(5) {
                padding: 0!important;
                width: 46px;
                font-size: 25px;
                font-weight: normal;
                color: #999;
                small {
                    font-size: 12px;
                    margin-left: 4px;
                    color: #999!important;
                }

            }
        }
        .avatar {
            position: relative;
            width: 40px;
            height: 40px;
            background: #eeeeee;
            border-radius: 50%;
            overflow: hidden;
            img {
                max-width: 100%;
            }
        }
        .progress {
            height: 6px;
            margin-bottom: 0;
            box-shadow: none!important;
            border-radius: 3px;
            position: relative;
            overflow: visible;
            .progress-bar {
                line-height: 6px;
                box-shadow: none!important;
                border-radius: 3px;
            }

        }
        h5.name {
            font-size: 15px;
            color: #333;
            margin: 0 0 7px;
            line-height: 1;
        }
        a.crown {
            display: inline-block;
            position: absolute;
            left: 6px;
            top: 9px;
            width: 18px;
            height: 16px;
            background-position: center;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            &.crown-1 {
                background-image: url("../images/crown-1.png");
            }
            &.crown-2 {
                background-image: url("../images/crown-2.png");
            }
            &.crown-3 {
                background-image: url("../images/crown-3.png");
            }

        }
    }
</style>
