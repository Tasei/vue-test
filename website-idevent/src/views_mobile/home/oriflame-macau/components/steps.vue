<template>
	<ul class="o-dot-steps">
		<li v-for="(option, index) in steps"
			:class="{'complete': current > index, 'active': current==index}"
			:style="{'width': 100/steps.length+'%'}">
			<i></i>{{option.title}}
		</li>
	</ul>
</template>
<script>

export default {
    props: {
        currentIndex: Number,
        formsList: Array,
    },
    computed: {
        steps() {
            if (this.formsList) {
                let steps = [];
                for (let form of this.formsList) {
                    steps.push({title: form.name})
                }
                return steps
			} else {
                return this.$store.state.steps.list;
			}
        },
		current() {
            return this.currentIndex ? this.currentIndex : 0;
		}
    },
}
</script>
<style lang="less" scoped>
	@blue: #4c7cac;
	@grey: #d2c9ca;
	.o-dot-steps {
		font-size: 1.2em;
		margin-bottom: 30px;
		li {
			float:left;
			width:20%;
			text-align: center;
			position: relative;
			padding-top: 30px;
			color: @grey;
			font-weight: 600;
			i {
				display: block;
				position: absolute;
				z-index: 10;
				top: 0;
				left: 50%;
				width: 22px;
				height: 22px;
				margin-left: -11px;
				border: 1px solid @grey;
				border-radius: 50%;
				background-color: #fff;
				padding: 4px;
				&::before{
					content: '';
					display: block;
					width: 100%;
					height: 100%;
					background-color: @grey;
					border-radius: 50%;
				}
			}
			&::before, &::after{
				content: '';
				display: block;
				position: absolute;
				z-index: 0;
				top: 11px;
				left: 0;
				right: 50%;
				border: 1px solid @grey;
			}
			&::after{
				left: 50%;
				right: 0;
			}
			&:first-child {
				 &::before {
					display: none;
				 }
			}
			&:last-child {
				&::after {
					display: none;
				}
			}
			&.complete, &.active{
				color: @blue;
				i {
					border-color: @blue;
					&::before{
						background-color: @blue;
					}
				}
				&::before {
					border-color: @blue;
					border-width: 2px;
					top: 10px
				}
			}
			&.complete{
				&::after {
					border-color: @blue;
					border-width: 2px;
					top: 10px;
				}
			}
		}
		&:after{
			content: '';
			display: block;
			clear: both;
		}
	}
</style>
