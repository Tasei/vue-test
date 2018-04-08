<template>
	<div class="canvas-container">
		<img v-if="url" :src="url" alt="" style="margin-bottom: 50px;">
		<img :src="make" v-if="show" @click="goto('entry')" class="tips">
	</div>
</template>

<style lang="less" scoped>
	.canvas-container {
		/*background-color: #1467b2;*/
		background-color: transparent;
	}
	.share {
		padding: 10px;
		background: #fff;
	}
	.tips {
		position: fixed;
		bottom: 0;
		width: 100%;
		left: 0;
		z-index: 1;
	}
</style>
<script>

	import { Toast } from 'mint-ui';
	import Wechat from 'assets/js/wechat'
	export default {
		name: 'canvas',
		data() {
			return {
				url: '',
				bg: {
					'前台': 'bg01',
					'中台': 'bg02',
					'后台': 'bg03'
				},
				make: require('../images/make.jpg'),
				show: false
			}
		},
		created() {

			this.$http.post('custom/taibao/comImage', {
				user: this.$route.query.user
			}).then( response => {
        		let ret = response.body;
        		if( ret.err == 0 && ret.res != null ) {

        			this.url = ret.res.img
					this.show = true;

        		} else {
                    Toast(ret.msg);
                }
        		this.$store.commit('SPIN')
        	});

			// this.$http.post('register/getRegInfo').then(response => {

   //              let ret = response.body;
   //              if (ret.err == 0 && ret.res != null) {

   //                  if (ret.res.formList.length > 0) {
   //                      let form = ret.res.formList[0];
   //                      let form_id = form.id;
   //                      let elements = form.value.elements;

   //                      if ( elements.length > 0 ) {

		 //                    let nameItem = elements.find( item => item.label === '姓名' ) || {};
		 //                    let positionItem = elements.find( item => item.label === '岗位类型' ) || {};
		 //                    let photoItem = elements.find( item => item.type === 'photo_uploader' ) || {};

		 //                	let name = nameItem.value;
		 //                	let avatar = photoItem.value;
		 //                	let canvasBg;
		 //                	let type = positionItem.options.find( item => item.value === positionItem.value )['text'] || ''
		 //                	Object.keys(this.bg).forEach( (item, idx, arr) => {
		 //                		if( type.indexOf(item) > 0 ) {
		 //                			type = this.bg[item]
		 //                		}
		 //                	});

		 //                	this.$http.post('custom/taibao/comImage', {
		 //                		text: name,
		 //                		avatar: avatar,
		 //                		bg: type
		 //                	}).then( response => {

		 //                		let ret = response.body;
		 //                		if( ret.err == 0 && ret.res != null ) {
		 //                			this.url = ret.res.img
			// 						this.show = true;
		 //                		}

		 //                		this.$store.commit('SPIN')
		 //                	});

		       //          	this.$http.post('custom/taibao/getImg', { text: name, size: 60 }).then( response => {

		       //          		let ret = response.body;
		       //          		if( ret.err == 0 && ret.res != null ) {

		       //          			let fontName = ret.res.img;
		       //          			let canvasBg = this.bg[type];
									// let canvas = document.createElement('canvas');
									// let ctx = canvas.getContext('2d');
									// let Img = new Image();
									// let ImgFont = new Image();
									// let Imgavatar = new Image();
									// let Imgs = [Img, ImgFont, Imgavatar];
									// Imgs.forEach(item => item.setAttribute('crossOrigin', 'anonymous'));

									// this.$http.post('custom/taibao/cutAvatar', { url: avatar }).then( response => {

									// 	let ret = response.body;
									// 	if( ret.err == 0 && ret.res != null) {

									// 		Img.src = canvasBg;
									// 		ImgFont.src = fontName;
									// 		Imgavatar.src = ret.res.img;

									// 		let nums = Imgs.length;

									// 		Imgs.forEach( item => item.onload = () => {

									// 			if(!--nums) {
									// 				ctx.save();
									// 				let width = Img.width;
									// 				let height = Img.height;
									// 				canvas.height = height;
									// 				canvas.width = width;
									// 				ctx.drawImage(Img, 0, 0, width, height)

									// 				ctx.translate(420, 810)
									// 				ctx.rotate(-8*Math.PI/180)
									// 				ctx.drawImage(ImgFont, 0, 0, ImgFont.width, ImgFont.height);

									// 				ctx.resetTransform();
									// 				ctx.rotate(6*Math.PI/180)
									// 				ctx.fillStyle = 'rgba(220, 221, 223, .65)';
									// 				ctx.fillRect(480, 95, 240, 240);
									// 				ctx.fillStyle = '#fff';
									// 				ctx.fillRect(470, 90, 240, 240);
									// 				ctx.drawImage(Imgavatar, 480, 100, 220, 220);
									// 				ctx.save();

									// 				this.url = canvas.toDataURL('image/jpeg');
									// 				this.show = true;

									// 			}

									// 		})

									// 	}
									// })

		       //          		}

		       //          	})

		                // }

                    // }

                // }else {

                //     Toast(ret.msg);
                // }
            // });
		},
		mounted() {
			let user = this.$route.query.user;
			let link = window.location.protocol + '//' + window.location.host + '/home/page?page=canvasfont&user=' + user + '&mid=tbkhj';

			new Wechat('客户节|我服务我承诺', '我的服务，您体验；我的承诺，您满意！', link, 'https://static.idevent.cn/oss/meeting/117/pic/4PqeNldC8vWPbeIo.png');
		},
		methods: {
			goto(page) {

				this.$router.push({
					name: 'home_page',
					query: {
						page
					}
				})
			}
		}
	}
</script>
