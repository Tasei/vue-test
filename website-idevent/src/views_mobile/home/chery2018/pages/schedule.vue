<template>
    <div style="position: relative; padding: 30px 20px;">
        <div class="bg">
        </div>
        <iui-schedule v-if="$lang=='en'" :list="listEn"></iui-schedule>
        <iui-schedule v-else :list="list"></iui-schedule>
    </div>
</template>
<script>
    import iuiSchedule from "../../../components/iui/schedule.vue"
    export default {
        data() {
          return {
              listEn:[
                  {
                      title:{title:'',date:'21th Mar'},
                      content:[
                          {title:'Check In',date:'Whole Day',desc:'Hotel'}
                      ]
                  },
                  {
                      title:{title:'',date:'22th Mar'},
                      content:[
                          {date:'09:00-12:00',title:'Commercial Session/Quality Session(Limited to production purchasing suppliers only)',desc:'2F Grand Ballroom',},
                          {date:'12:00-13:00',title:'Lunch',desc:'1F Buffet Restaurant',},
                          {date:'13:00-16:00 ',title:'General Assembly & Award Ceremony',desc:'2F Grand Ballroom',},
                          {date:'16:00-17:00',title:' Rest',desc:'Hotel',},
                          {date:'17:00-20:00',title:' Dinner',desc:'2F Grand Ballroom',},
                      ]
                  },
                  {
                      title:{title:'',date:'23th Mar'},
                      content:[
                          {title:'Check Out',date:'Whole Day'}
                      ]
                  }
              ],
              list:[
                  {
                      title:{title:'',date:'3月21日'},
                      content:[
                          {title:'会议签到',date:'全天',desc:'酒店大堂'}
                      ]
                  },
                  {
                      title:{title:'',date:'3月22日'},
                      content:[
                          {date:'09:00-12:00',title:'商务分会/质量分会(仅限生产采购供应商参加)',desc:'二楼大宴会厅',},
                          {date:'12:00-13:00',title:'午餐',desc:'一楼自助餐厅/二楼多功能宴会厅',},
                          {date:'13:00-16:00 ',title:'全员大会&颁奖典礼',desc:'二楼大宴会厅',},
                          {date:'16:00-17:00',title:'休息',desc:'酒店',},
                          {date:'17:00-20:00',title:'晚宴',desc:'二楼大宴会厅',},
                      ]
                  },
                  {
                      title:{title:'',date:'3月23日'},
                      content:[
                          {title:'返程',date:'全天'}
                      ]
                  }
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
