<template>
    <div>
        <div class="title" v-if="album">
            <h3 class="text-dark">{{album.title}}</h3>
            <h5 class="text-dark">共{{album.photo_count}}张照片</h5>
        </div>
        <div v-infinite-scroll="getList"
             infinite-scroll-disabled="loading"
             infinite-scroll-distance="10">
            <photo-grid :list="list" :total="total"></photo-grid>
        </div>
        <no-result v-if="list.length <= 0"></no-result>
    </div>
</template>
<script>
import photoGrid from './components/grid'
import noResult from './components/result'
export default{
    data(){
        return {
            album: null,
            list: [],
            total: 0,
            page: 1,
            loading: true
        }
    },
    computed: {
        id() {
            return this.$route.params.id
        }
    },
    components:{
        photoGrid, noResult
    },
    created() {
        this.getDetail()
    },

    methods: {
        getDetail() {
            this.$http.post('photo/getAlbumById', {
                id: this.id
            }).then((response) => {
                if(response.body.err == 0) {
                    this.album = response.body.res
                }
            }).then(() => {
                this.getList()
            })
        },

        getList () {
            let self = this
            this.loading = true
            this.$http.post('photo/list', {
                meeting_id: this.meeting.id,
                page: this.page,
                limit: 15,
                album_id: this.id
            }).then((response) => {
                if (response.body.err == 0) {
                    let ret = response.body.res
                    for(let el of ret.list) {
                        self.list.push(el)
                    }
                    self.total = ret.total
                    self.page = parseInt(self.page) + 1
                    this.$nextTick(() => {
                        if(self.total > self.list.length) {
                            self.loading = false
                        }
                    })
                }
            }).then((response) => {
                this.$store.commit('SPIN')
            })
        },
    }
}
</script>
<style lang="less" scoped>
    .title {
        padding: 20px;
        h3 {
            font-size: 24px;
            margin: 0;
        }
        h5 {
            margin: 10px 0 0;
        }
    }
</style>
