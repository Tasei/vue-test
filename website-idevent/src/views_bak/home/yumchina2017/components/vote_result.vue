<template>
    <div class="vote-result" v-if="vote">
        <table class="table">
            <tbody>
                <tr v-for="p of list">
                    <td>
                        <div class="avatar">
                            <img :src="p.pic + '/b200'" />
                        </div>
                        <a v-if="p.rank==1" class="crown crown-1" href="javascript:;"></a>
                    </td>
                    <td>
                        <h5 class="name">{{p.text}}</h5>
                        <p class="desc">{{p.label}}</p>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" :aria-valuenow="p.percent"
                                 aria-valuemin="0" aria-valuemax="100"
                                 :style="{width: p.percent + '%'}"></div>
                        </div>
                    </td>
                    <td>{{p.percent}}%<br/></td>
                    <td class="vote-text">
                        {{p.vote_count}}
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
            }
        }
    }
</script>
<style lang="less" scoped>
    .vote-result {
        padding: 8px 0 0;
    }
    table {
        width: 100%;
        tr {
            margin-bottom: 30px;
            td {
                line-height: 1!important;
                vertical-align: middle!important;
                border: none!important;
                position: relative;
                padding: 12px 5px!important;
            }
            td:nth-child(1) {
                width: 40px;
                padding-left: 0!important;
            }
            td:nth-child(3) {
                width: 30px;
                font-size: 9px;
                vertical-align: bottom!important;
                color: #A07DAF;
                padding-bottom: 15px!important;
            }
            td:nth-child(4) {
                font-size: 20px;
                font-weight: normal;
                color: #999;
                text-align: right;
                width: 24px;
                small {
                    font-size: 12px;
                    margin-left: 4px;
                    color: #999!important;
                }

            }
            &:first-child {

                td:nth-child(4) {
                    color: #A07DAF;
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
            background-color: rgba(160, 125, 175, 0.2);//#A07DAF;
            .progress-bar {
                line-height: 6px;
                box-shadow: none!important;
                border-radius: 3px;
                background-color: #A07DAF;
            }
        }

        h5.name {
            font-size: 15px;
            color: #333;
            margin: 0 0 7px;
            line-height: 1;
        }
        p.desc {
            font-size: 12px;
            color: #999;
            margin: 0 0 7px;
        }
        a.crown {
            display: inline-block;
            position: absolute;
            left: 0px;
            top: 6px;
            width: 18px;
            height: 16px;
            background-position: center;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            &.crown-1 {
                background-image: url("../images/crown-1.png");
            }
            &.crown-2 {
                //background-image: url("../images/crown-2.png");
            }
            &.crown-3 {
                //background-image: url("../images/crown-3.png");
            }

        }
    }
</style>
