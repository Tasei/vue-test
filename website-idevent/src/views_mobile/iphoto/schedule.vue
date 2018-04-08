<template>
    <div class="schedule-album">
        <div v-infinite-scroll="getList"
             infinite-scroll-disabled="loading"
             infinite-scroll-distance="10">
            <div class="album-item" v-for="el of list">
                <router-link :to="{name: 'iphoto_schedule_detail', params:{id: el.id}}">
                    <div class="title">
                        <h3 class="text-dark">{{el.title}}</h3>
                        <h5 class="text-dark">共{{el.photo_count}}张照片</h5>
                        <span class="next"></span>
                    </div>
                    <div class="content" v-if="el.list.length > 0">
                        <div class="content-item" v-for="p of el.list">
                            <div class="pic">
                                <img :src="p.photo.pic + '/b200'"/>
                            </div>
                        </div>
                        <!--占位置-->
                        <div class="content-item" v-for="n of (4-el.list.length)"><div class="pic"></div></div>
                    </div>
                </router-link>
            </div>
        </div>
        <no-result v-if="list.length <= 0"></no-result>
    </div>
</template>
<script>
import noResult from './components/result'
export default{
    data(){
        return {
            loading: true,
            list: [],
            page: 1,
            total: 0
        }
    },
    components:{
        noResult
    },
    created() {
        this.getList()
    },

    methods: {
        getList() {
            let self = this
            this.loading = true
            this.$http.post('photo/getAlbumList', {
                meeting_id: this.meeting.id,
                page: this.page,
                limit: 15
            }).then((response) => {
                if(response.body.err == 0) {
                    let ret = response.body.res
                    for(let el of ret.list) {
                        this.list.push(el)
                    }
                    this.page = parseInt(this.page) + 1
                    this.total = ret.total
                    this.$nextTick(() => {
                        if(self.total > self.list.length) {
                            self.loading = false
                        }
                    })
                }
            }).then(() => {
                this.$store.commit('SPIN')
            })
        }
    }
}
</script>
<style lang="less" scoped>
    .album-item {
        position: relative;
        padding: 20px 20px  10px 20px;
        > a {
            display: block;
        }
        .title {
            position: relative;
            display: block;
        }
        h3 {
            font-size: 17px;
            margin: 0;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            padding-right: 25px;
        }
        h5 {
            font-size: 13px;
            margin: 5px 0 10px 0;
        }
        .content {
            display: flex;
            margin-left: -5px;
            .content-item {
                margin-left: 5px;
                justify-content: space-between;
                width: 25%;
                flex: 1;
                .pic {
                    padding-top: 100%;
                    background: transparent;
                    position: relative;
                    overflow: hidden;
                    img {
                        position: absolute;
                        left: 0;
                        top: 0;
                        max-width: 100%;
                    }
                }
            }
        }

        .next {
            display: inline-block;
            width: 17px;
            height: 17px;
            background: url("../../assets/images/iphoto/next.png") no-repeat center;
            background-size: 9px 16px;
            position: absolute;
            top: 50%;
            margin-top: -9px;
            right: 0;
        }
    }
</style>
