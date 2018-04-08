<template>
<div class="interact-wrapper">
	<div class="interact-banners">
		<div class="interact-banner interact-draw " v-for="item in hrefList" >
			<div v-if="item.link" class="btn-wrapper" @click="kickoffLink(item.link)">

			</div>
            <div v-else class="btn-wrapper" @click="kickoffRouteTo(item.routeTo)">

            </div>
		</div>
	</div>
</div>
</template>
<script>
import {MessageBox,Toast} from "mint-ui"
//import PollForm from "./components/poll_form"
export default {
	data(){
		return {
			hrefList:[
                {
                    link:'http://xianchang.verydo.cn/app/index.php?i=2&c=entry&rid=310&do=app_redpack&m=meepo_xianchang',
                },
                {
                    link:'http://xianchang.verydo.cn/app/index.php?i=2&c=entry&rid=310&do=app_shake&m=meepo_xianchang',
                },
                {
                    link:'http://xianchang.verydo.cn/app/index.php?i=2&c=entry&rid=310&do=app_mshake&m=meepo_xianchang',
                },
                {
                    routeTo: {name: 'home_page',query:{page:'word'}}
                },
                {
			        link:require('../assets/seat.jpg')
                }
            ]
		}
	},
    mounted() {
        this.$store.commit('SPIN')
    },
	methods: {
        kickoffLink(a) {
            window.location.href = a;
        },
        kickoffRouteTo(a){
            this.$router.push(a)
        }
	}
}
</script>
<style lang="less" scoped>
.interact-wrapper{
	margin:20px;
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
.interact-banner{
	position: relative;
	margin-bottom: 16px;
	width: 100%;
    height:100px;
	border-radius: 2px;
	background-size: 100% 100%;

    .btn-wrapper{
        width:100%;
        height:100%;
    }
	&:nth-child(1) {
        background-image: url("../assets/01.png");
	}
	&:nth-child(2) {
        background-image: url("../assets/02.png");
	}
    &:nth-child(3) {
        background-image: url("../assets/03.png");
    }
    &:nth-child(4) {
        background-image: url("../assets/04.png");
    }
	&:last-child {
        background-image: url("../assets/05.png");
	}
}
</style>
