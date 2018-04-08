<template>
    <div style="position: relative; padding: 0.1px 20px;">
        <div class="bg">
        </div>
        <iui-schedule :list="list"></iui-schedule>
    </div>
</template>
<script>
    import iuiSchedule from "../../../components/iui/schedule.vue"
    export default {
        data() {
          return {
              list:[
                  {
                      title:{title:'第一天',date:'3月7日'},
                      content:[
                          {date:'11:00-22:00',title:'到达 接机 签到'}
                      ]
                  },
                  {
                      title:{title:'第二天',date:'3月8日'},
                      content:[
                          {date:'08:00-14:00',title:'到达 接机 签到',},
                          {date:'14:00-15:00',title:'短驳（各个酒店-中国西部国际博览城）'},
                          {date:'15:00-16:00',title:'会议签到'},
                          {date:'16:00-17:00',title:'2018捷豹路虎全国经销商大会（中国西部国际博览城）'},
                          {date:'17:10-17:40',title:'合照（投资人/集团代表/总经理）'},
                          {date:'17:40-18:40',title:'鸡尾酒晚会'},
                          {date:'18:40-21:00',title:'晚宴'},
                      ]
                  },
                  {
                      title:{title:'第三天 (投资人/集团代表 3月9日的日程可自行选择是否参加) ',date:'3月9日'},
                      content:[
                          {date:'08:30-12:45',title:'捷豹路虎全国经销商大会II （中国西部国际博览城）',},
                          {date:'08:30-09:45',title:'市场'},
                          {date:'09:45-10:45',title:'销售'},
                          {date:'10:45-11:15',title:'茶歇'},
                          {date:'11:15-12:15',title:'售后'},
                          {date:'12:15-12:45',title:'网发'},
                      ]
                  },
                  {
                      title:{title:'分会场(销售/市场/业务拓展)(中国西部国际博览城)',date:'3月9日下午'},
                      content:[
                          {date:'12:45-13:30',title:'午餐（总经理/销售/市场）（中国西部国际博览城）',},
                          {date:'13:30-15:30',title:'销售会议（中国西部国际博览城）'},
                          {date:'15:30-16:00',title:'茶歇',},
                          {date:'16:00-18:00',title:'市场会议（中国西部国际博览城）'},
                          {date:'18:00-20:00',title:'结束 离开 送机'},
                      ]
                  },
                  {
                      title:{title:'分会场(售后)(费尔蒙酒店)',date:'3月9日下午'},
                      content:[
                          {date:'12:45-13:15',title:'短驳（售后）（分会场: 费尔蒙酒店）',},
                          {date:'13:15-14:15',title:'午餐'},
                          {date:'14:15-18:00',title:'售后会议',},
                          {date:'18:00-20:00',title:'结束 离开 送机'},
                      ]
                  },
              ]
          }
        },
        components:{
            iuiSchedule
        },
        mounted() {
            this.$store.commit('SPIN', false)
        }
    }
</script>
<style lang="less" scoped rel="stylesheet/less">
    .bg {
        background-image: url("../../../../assets/images/mobile/chery/shedule_bg.png");
        background-position: bottom;
        background-size: 100%;
        background-repeat: no-repeat;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
    }

    .help-block {
        font-size: 12px;
        font-family: PingFangSC-Regular;
        color: #666;
    }

    p {
        margin-top: 0 !important;
    }

    .subtitle {
        font-size: 14px;
        margin-bottom: 5px;
    }

    table {
        width: 100%;
        color: #333;
        margin-bottom: 20px;
        thead {
            td {
                font-size: 17px;
                font-family: PingFangSC-Semibold;
            }
        }
        td {
            font-size: 16px;
            vertical-align: text-bottom;
        }
    }
</style>
