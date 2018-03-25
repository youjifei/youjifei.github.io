<template>
	<div id="header" v-bind:class="isPhone ? 'isPhoneHeader':''">
		<div class="headerIn">
			<img src="" alt="">
			<div class="tab" v-if="isPhone" v-on:click="navSlide">
				<span></span>
			</div>
			<ul class="navList">
				<li v-for="(el,index) in navList">
					<a href="javascript:;" v-on:click="jump(el)">{{el.name}}</a>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				navList:[
					{
						name:'首页',
						href:'/',
					},
					{
						name:'产品展示',
						href:'/product',
						// list:[
						// 	{
						// 		name:'纯羊粪有机肥',
						// 		href:'product.html/#/sheep',
						// 	},
						// 	{
						// 		name:'生物有机肥',
						// 		href:'product.html/#/biological',
						// 	},
						// 	{
						// 		name:'菌肥',
						// 		href:'product.html/#/bacteria',
						// 	},
						// 	{
						// 		name:'水溶肥',
						// 		href:'product.html/#/waterSoluble',
						// 	},
						// ],
					},
					{
						name:'知识科普',
						href:'/knowledge',
						list:[],
					},
					{
						name:'关于我们',
						href:'/aboutUs',
						list:[],
					},
					{
						name:'联系我们',
						href:'/contactUs',
						list:[],
					},
				]
			}
		},
		computed:{
			isPhone:function(){
				return this.$store.state.isPhone;
			}
		},
		methods:{
			jump(el){
				this.$router.push(el.href);
				// H5
				if(this.isPhone){
					$('.navList').slideUp();
					$('.tab span').toggleClass('rotate');
				}
			},
			// H5 下拉导航
			navSlide(){
				let display = $('.navList').css('display');
				$('.tab span').toggleClass('rotate');
				if(display == 'none'){
					$('.navList').slideDown();
				}else{
					$('.navList').slideUp();
				}
			}
		}
	}
</script>
<style type="text/css" lang="scss">
	@import "../../base/base";

	#header{
		width:100%;
		height: 59px;
		background-image: url(../images/navBg.jpg);
		.headerIn{
			width: 1200px;
			margin:0 auto;
			ul{
				width:700px;
				float:right;
				li{
					display: inline-block;
					width:98px;
					text-align: center;
					float:left;
					margin-left: 40px;
					position: relative;
					&:hover{
						background-image: url(../images/hover.jpg);
						background-repeat: no-repeat;
					}
					a{
						display: block;
						height: 59px;
						line-height: 59px;
						font-size:$font-mid;
						color:$green-yellow;
					}
				}
			}
		}

		&.isPhoneHeader{
			width:100%;
			background-color: rgba(0, 0, 0, 0.7);
			background-image: none;
			position: fixed;
			z-index: 9;
			.headerIn{
				width: 100%;
				position: relative;
				.tab{
					width:36px;
					height: 36px;
					color:$white;
					float:right;
					margin:10px;
					span{
						display: inline-block;
						float:left;
						width:24px;
						height: 24px;
						border-bottom-left-radius: 1px;
						border-left: 2px solid $white;
						border-bottom: 2px solid $white;
						transform: rotate(-45deg);
						margin-top: 0;
						transition: all 0.3s;
						&.rotate{
							transform: rotate(135deg);
							transition: all 0.3s;
							margin-top: 12px;
						}
					}
				}
				ul{
					width: 100%;
					float: none;
					background-color: rgba(0, 0, 0, 0.7);
					position: absolute;
					top:58px;
					left:0;
					z-index: 5;
					padding:15px 0;
					display: none;
					li{
						display: block;
						width: 100%;
						float: none;
						text-align: left;
						&:hover{
							background-image: none;
						}
						a{
							height: 34px;
							line-height: 34px;
							color: $white;
						}
					}
				}
			}
		}
	}
</style>
