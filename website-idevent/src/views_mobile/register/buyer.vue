<template>
	<div>
		<steps></steps>
		<i-dot-loading :loading="loading"></i-dot-loading>
		
		<div class="items-wrapper-shadow" v-if="show">
			<mt-tabbar v-model="selected">
				<mt-tab-item id="amBtn" v-if="showAmBtn">
					<span>上午</span>
				</mt-tab-item>
			  	<mt-tab-item id="pmBtn" v-if="showPmBtn">
		    		<span>下午</span>
			  	</mt-tab-item>
			</mt-tabbar>
			<mt-tab-container v-model="active">
				<mt-tab-container-item id="amContent">
					<mt-checklist
					  title="上午展商名单"
					  v-model="amChecked"
					  :options="amList"
					  align="right"
					  >
					</mt-checklist>
				</mt-tab-container-item>
			  	<mt-tab-container-item id="pmContent">
			    	<mt-checklist
					  title="下午展商名单"
					  v-model="pmChecked"
					  :options="pmList"
					  align="right"
					>
					</mt-checklist>
			  	</mt-tab-container-item>
			</mt-tab-container>
			
			<iButton :onOk="submit">提交</iButton>
		</div>		

		<div class="save-success" v-else>
			<div class="buyer-save">
				<p>正在审核中……</p>
				<a href="" @click.prevent.stop="edit">修改</a>
			</div>
			<div class="nextStep">
				<nextStep></nextStep>
			</div>
		</div>

	</div>
</template>

<script>

    import steps from './components/steps';
    import nextStep from "./components/nextStep";
    import {iDotLoading} from 'iLoading';
    import {Toast} from 'mint-ui';
    import iButton from 'iButton';

    export default {
        name: 'matchmaking',
        data() {
            return {
                step: 'loading',
                selected: 'amBtn',
                active: 'amContent',
                amChecked: [],
                pmChecked: [],
                amList: [],
                pmList: [],
                show: true,
                list: [],
                showAmBtn: true,
                showPmBtn: true
            }
        },
        computed: {
            loading() {
                return (this.step === "loading")
            },
        },
        watch: {
            active(val) {
                this.selected = (val == 'amContent') ? 'amBtn' : 'pmBtn';
            },
            selected(val) {
            	this.active = (val == 'amBtn') ? 'amContent' : 'pmContent';
            },
            amChecked(val) {
                this.filterItem(this.pmList, val);
            },
            pmChecked(val) {
                this.filterItem(this.amList, val);
            }
        },
        created() {

            this.$http.get('micechina/exhibitor/list').then(response => {

                let body = response.body;
                if (body.err === 0 && body.res !== null) {
                    let ret = body.res;

                    if(ret.morningList.length && !ret.afternoonList.length) {

                        this.showPmBtn = false;
                        this.selected = 'amBtn';
                        ret.morningList.forEach((cur) => {
                            if(cur.morning_remain != 0) {

                                this.list.push({
                                    label: cur.name,
                                    value: cur.id,
                                    disabled: false
                                });
                            }
                        });

                        this.amList = JSON.parse(JSON.stringify(this.list));
                    }

                    if(ret.afternoonList.length && !ret.morningList.length) {

                        this.showAmBtn = false;
                        this.selected = 'pmBtn';
                        ret.afternoonList.forEach((cur) => {
                            if(cur.afternoon_remain != 0) {
                                this.list.push({
                                    label: cur.name,
                                    value: cur.id,
                                    disabled: false
                                });
                            }
                            
                        });

                        this.pmList = JSON.parse(JSON.stringify(this.list));
                    }
                   
                    if(ret.afternoonList.length && ret.morningList.length) {

                        let __list = [];
                        ret.afternoonList.forEach((cur) => {
                            if(cur.afternoon_remain != 0) {
                                this.list.push({
                                    label: cur.name,
                                    value: cur.id,
                                    disabled: false
                                });
                            }
                        });

                        ret.morningList.forEach((cur) => {
                            if(cur.morning_remain != 0) {
                                __list.push({
                                    label: cur.name,
                                    value: cur.id,
                                    disabled: false
                                });
                            }
                        });
                        this.amList = JSON.parse(JSON.stringify(__list));
                        this.pmList = JSON.parse(JSON.stringify(this.list));
                    }

                    
                }

            }).then(() => {

                this.$http.post('micechina/visitor/show').then(response => {

                    let ret = response.body;

                    if (ret.err === 0 && ret.res !== null) {

                        if (ret.res.afternoon_list.length || ret.res.morning_list.length) {
                            this.show = false;
                            ret.res.afternoon_list.forEach(val => {
                                this.pmChecked.push(val);
                            });
                            ret.res.morning_list.forEach(val => {
                                this.amChecked.push(val);
                            });

                        }

                    }
                })

            }).then(() => {

                this.step = '';
                this.$store.commit('SPIN');

            }).catch(err => {

                console.log(err);
            })
        },
        methods: {
            edit() {
                this.show = true;
            },
            filterItem(options, checked) {
                if(options.length) {
                    let plainList = JSON.parse(JSON.stringify(options));
                    options.splice(0);
                    plainList.forEach(function (cur, idx, arr) {
                        checked.forEach(id => {
                            if (cur.value == id) {
                                cur.disabled = true;
                            }
                        })
                        options.push(cur);
                    });
                }
                
            },
            submit(e) {

                if(this.pmList.length && this.amList.length) {

                    console.log('allday')
                    let total = this.amChecked.length + this.pmChecked.length;
    
                    if( this.amChecked.length > 18 ) {
                        Toast({
                            message: '上午至多选择18个展商',
                            position: 'middle',
                            duration: 3000
                        });

                        e.loading = false;
                        return false;
                    }
                    if( this.pmChecked.length > 24 ) {
                        Toast({
                            message: '下午至多选择24个展商',
                            position: 'middle',
                            duration: 3000
                        });

                        e.loading = false;
                        return false;
                    }
                    if(total < 10 ) {

                        Toast({
                            message: '请至少选择10个展商',
                            position: 'middle',
                            duration: 3000
                        });

                        e.loading = false;
                        return false;
                    }
                }

                if(this.pmList.length && !this.amList.length) {

                    console.log('afternoon')
                    if((this.pmChecked.length < 10) || (this.pmChecked.length > 24)) {
                        Toast({
                            message: '请至少选择10个展商，至多选择24个展商',
                            position: 'middle',
                            duration: 3000
                        });

                        e.loading = false;
                        return false;
                    }
                }

                if(this.amList.length && !this.pmList.length) {

                    console.log('morning');
                    console.log(this.amChecked.length)
                    if((this.amChecked.length < 10) || (this.amChecked.length > 18)) {

                        Toast({
                            message: '请至少选择10个展商，至多选择18个展商',
                            position: 'middle',
                            duration: 3000
                        });

                        e.loading = false;
                        return false;
                    }
                }

                this.$http.post('micechina/visitor/submit', {

                    morning_list: this.amChecked,
                    afternoon_list: this.pmChecked,

                }).then(response => {

                    e.loading = false;
                    let ret = response.body;

                    if (ret.err === 0 && ret.res !== null) {

                        this.show = false;

                    }else{

                        Toast({
                            message: ret.msg,
                            position: 'middle',
                            duration: 3000
                        });
                    }

                }).catch(err => {

                    Toast({
                        message: '系统错误',
                        position: 'middle',
                        duration: 3000
                    });
                })
            }
        },

        components: {
            steps,
            iButton,
            iDotLoading,
            nextStep
        }
    }
</script>

<style lang="less">
	.items-wrapper-shadow {
		padding: 0 20px;
		.mint-cell-wrapper {
			background: none;
		}
		label.mint-checklist-title {
			display: block;
			padding-bottom: 10px;
			border-bottom: 1px solid #ddd;
			margin: 0;
		}
		.mint-checklist {
			&>label {
				margin-bottom: 10px;
			}
		}
		.mint-checklist-label {
			span {
				font-size: 14px;
				font-weight: normal;
			}
		}
		.mint-cell-wrapper {
			padding: 0;
		}
		.mint-tab-container {
			margin-top: 20px;
		}
		.mint-tabbar {
			position: static;
			right: auto;
			left: auto;
			bottom: auto;
			top: auto;
			margin: 20px 0;
		}
		.mint-checkbox-input:checked + .mint-checkbox-core {
			background-color: #e60039;
			border-color: #e60039;
		}
		.mint-cell {
			.mint-checklist-label {
				display: block;
				width: 100%;
				padding: 0 20px;
				line-height: 20px;
				margin-bottom: 0;
			}
		}
		.btn {
			width: 100%;
			margin: 20px 0;
			padding: 10px 0;
			background-color: #e60039;
		 	color: #fff!important;
		}
		.mint-checkbox-core::after {
			top: 4px;
			left: 7px;
		}

	}
	.save-success {
		margin: 30px 0;
		.buyer-save {
			text-align: center;
		}
		.nextStep {
			margin: 0 20px;
		}
	}
	
	
</style>
