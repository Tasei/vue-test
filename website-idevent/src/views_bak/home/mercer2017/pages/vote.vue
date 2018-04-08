<template>
    <div class="home-index">
        <div v-if="banner">
            <img :src="banner" class="img-responsive"/>
        </div>
        <div class='top-title'>
            <span class="line left"></span> 话题投票 <span class="line right"></span>
        </div>
        <div class="content-list">
            <div class="list-item" v-for="item in voteList" @click="goDetail(item)">
                <div class="item-common">
                    <div class="item-left">
                        <img class="item-img"
                             src="https://gss0.bdstatic.com/7Ls0a8Sm1A5BphGlnYG/sys/portrait/item/5ca8e59b9ee5bf863532367c20.jpg"
                             style="display: inline;">
                    </div>
                    <div class="item-content">
                        <div class="item-content-comm">
                            <p class="name"><b>{{item.title}}</b></p>
                            <p v-if="item.subtitle">
                                <i class="menu-icon iuifont iui-icon-message" style="padding-right: 8px"></i>
                                {{item.subtitle}}
                            </p>
                            <p>
                                <i class="menu-icon iuifont iui-icon-agency" style="padding-right: 8px"></i>
                                {{item.date}}
                            </p>
                        </div>
                    </div>
                    <div class="item-status">
                        <div class="btn-wrapper">
                            <template v-if="item.is_active==0">
                                <button class="btn btn-outline unstart">
                                    未开始
                                </button>
                            </template>
                            <template v-if="item.is_active==1">
                                <button class="btn btn-outline padding">
                                    进行中
                                </button>
                            </template>
                            <template v-if="item.is_active==-1">
                                <button class="btn btn-outline over">
                                    已结束
                                </button>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                voteList: [
                    {
                        "id": "2",
                        "title": "胡守一,新时代的人力资源分配,10:00-10:10",
                        "subtitle": "新时代的人力资源分配",
                        "subhead": null,
                        "is_active": "-1",
                        "is_on_wall": "1",
                        "display_answers": "0",
                        "created_at": "2017-01-12 17:33:54",
                        "updated_at": "2017-01-15 20:21:12",
                        "pic": ""
                    },
                    {
                        "id": "2",
                        "title": "张腾宇,新时代的人力资源分配,10:20-10:30",
                        "subhead": null,
                        "is_active": "1",
                        "is_on_wall": "1",
                        "display_answers": "0",
                        "created_at": "2017-01-12 17:33:54",
                        "updated_at": "2017-01-15 20:21:12",
                        "pic": ""
                    },
                    {
                        "id": "2",
                        "title": "刘烨,新时代的人力资源分配,10:40-10:50",
                        "subhead": null,
                        "is_active": "0",
                        "is_on_wall": "1",
                        "display_answers": "0",
                        "created_at": "2017-01-12 17:33:54",
                        "updated_at": "2017-01-15 20:21:12",
                        "pic": ""
                    },
                ]
            }
        },
        mounted() {
            this.$store.commit('SPIN')
        },
        computed: {
            banner() {
                return this.meeting.settings.home ? this.meeting.settings.home.index_banner : '';
            },
        },
        created() {
            this.voteList = this.itemList();//
        },
        methods: {
            goDetail(item) {
                let param = "mid=" + this.meeting.id + "&page=voteDetail&title=" + item.title;
                window.location.href = '/home/page?' + param;
            },
            vote() {

            },
            itemList() {
                let list = [];
                for (let item of this.voteList) {
                    let title = item.title.split(',');
                    item.title = title[0];
                    item.subtitle = title[1];
                    item.date = title[2];
                    list.push(item)
                }
                return list;
            }
        }
    }
</script>
<style lang="less" scoped>
    .interact-wrapper {
        margin: 0 20px;
    }

    .top-title {
        height: 50px;
        position: relative;
        background-color: #ffffff;


        line-height: 50px;
        text-align: center;
        font-size: 22px;
        color: #224089;
    }
    .line{
        display: inline-block;
        margin: 25px 20px 5px;
        border: 1px solid #224089;
        width: 50px;
        height: 0;
        position: relative;
    }
    .line:after{
        position: absolute;
        top: -3px;
        content: "";
        background: #224089;
        height: 6px;
        width: 6px;
        border-radius: 50%;
    }
    .left:after{
        right:-6px;
    }
    .right:after{
        left:-6px;
    }
    /*.top-title div {*/
        /*position: absolute;*/
        /*top: 50%;*/
        /*left: 50%;*/
        /*transform: translateY(-50%) translateX(-50%);*/
        /*font-size: 22px;*/
        /*color: #224089;*/
    /*}*/

    .content-list {
        min-height: 500px;
        height: 100%;
        .list-item {
            margin: 10px 8px;
            background: #ffffff;
            border-bottom-left-radius: 50px;
            border-top-left-radius: 50px;

            .item-common {
                width: 100%;
                height: 85px;
            }
            .item-left {
                float: left;
                width: 20%;
            }
            .item-img {
                margin: 10px 10px;
                display: inline-block;
                overflow: hidden;
                border-radius: 50%;
                width: 65px;
                height: auto;
            }
            .item-content {
                display: inline;
                float: left;
                margin-left: 15px;
                font-size: 16px;
                width: 45%;

                .item-content-comm {
                    vertical-align: middle;
                }
                .name {
                    padding-top: 10px;
                }
                p {
                    margin: 0 0 5px;
                    width: 200px;
                    word-wrap: break-word;
                    white-space: nowrap;
                    overflow: hidden;
                    font-size: 14px;
                }
            }

            .item-status {
                width: 25%;
                height: 85px;
                float: right;
                .btn-wrapper {
                    border: 2px solid #ffffff;
                    vertical-align: middle;
                    position: relative;
                    top: 50%;
                    text-align: center;
                    transform: translateY(-50%);
                    .btn {
                        font-family: PingFangSC-Regular;
                        font-size: 17px;
                        padding: 6px;
                        letter-spacing: 0px;
                        line-height: 17px;
                        text-align: center;
                    }

                    .unstart {
                        color: #9e9e9e;
                    }

                    .over {
                        color: #ff0000;
                    }
                    .padding {
                        color: #00b459;
                    }

                }
            }

            /*<div class="item-status">*/
            /*<div class="btn-wrapper">*/
            /*<button class="btn btn-outline">未开始</button>*/
            /*</div>*/
            /*</div>*/
        }
    }

    .home-index {
        background-color: #e6e6e6;
    }

    h2.page-title {
        margin: 0 auto 30px;
        padding: 30px 0;
        font-size: 17px;
        line-height: 17px;
        text-align: center;
        font-family: PingFangSC-Medium;
        border-bottom: 1px solid #ddd;
    }

</style>
