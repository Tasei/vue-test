<template>
    <div class="home-hotel-list">
        <ul class="list">
            <li v-for="p of list">
                <router-link :to="{name: 'home_hotel_detail', query:{hotel_id: p.id}}">
                    <div class="img plane-1">
                        <img v-if="p.cover" :src="p.cover.url + '/b200'"/>
                    </div>
                    <div class="content">
                        <h3 class="text-dark font-bold">{{p.name}}</h3>
                        <div class="hotel-stars">
                            <span v-for="n in parseInt(p.type)" class="fa fa-star"></span>
                        </div>
                        <p>{{p.address}}</p>
                    </div>
                </router-link>
            </li>
        </ul>

        <div class="col col-lg-12">
            <router-link :to="{name:'home_index'}" class="btn btn-lg btn-primary btn-home">返回首页</router-link>
        </div>

    </div>
</template>
<script>
    export default{
        props: {
            list: Array
        },
    }
</script>
