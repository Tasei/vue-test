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
                      title:{title:'第一天 抵达  欢迎晚宴',date:'2018-4-9'},
                      content:[
                          {date:'12:00-17:00',title:'抵达里斯本机场 班车前往酒店',desc:''},
                          {date:'17:00-18:30',title:'酒店休息'},
                          {date:'18:30-19:00',title:'鸡尾酒会'},
                          {date:'19:00-20:30',title:'I-PACE及E-PACE揭幕'},
                          {date:'20:30-22:30',title:'晚宴'},
                      ]
                  },
                  {
                      title:{title:'第二天 捷豹路虎产品体验活动（分组进行）',date:'2018-4-10'},
                      content:[
                          {date:'08:00-08:30',title:'酒店出发'},
                          {date:'08:30-09:40',title:'电动化体验'},
                          {date:'09:40-12:30',title:'I-PACE 道路试驾'},
                          {date:'12:30-13:15',title:'午餐'},
                          {date:'13:15-13:30',title:'前往赛道'},
                          {date:'13:30-17:30',title:'I-PACE 赛道试驾'},
                          {date:'17:30-21:30',title:'路虎70周年及新一代卫士主题晚宴'},
                      ]
                  },
                  {
                      title:{title:'第三天  捷豹路虎产品体验活动（分组进行）',date:'2018-4-11'},
                      content:[
                          {date:'08:00-08:30',title:'试驾说明会'},
                          {date:'08:30-10:00',title:'中国市场会议'},
                          {date:'10:00-10:20',title:'茶歇'},
                          {date:'10:20-11:45',title:'客户体验革新体验'},
                          {date:'11:45-12:55',title:'路虎越野试驾'},
                          {date:'12:55-13:25',title:'午餐'},
                          {date:'13:25-13:35',title:'前往赛道'},
                          {date:'13:35-17:35',title:'I-PACE及路虎主题活动'},
                          {date:'17:35-19:30',title:'返回酒店休整'},
                          {date:'19:30-01:00',title:'捷豹路虎品牌盛宴'},
                      ]
                  },
                  {
                      title:{title:'第四天 离开',date:'2018-4-12'},
                      content:[
                          {date:'08:30-10:00',title:'办理退房手续 班车前往里斯本机场'},
                          {date:'随后',title:'搭乘航班 返回国内'},
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
