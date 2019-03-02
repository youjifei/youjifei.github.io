<template>
	<div class="content3" v-bind:class="isPhone ? 'isPhone':''">
		<div class="titleBox">
			<h3 class="title"><img src="../images/paw.png" alt="">实景拍摄</h3>
		</div>
		<div class="productsBox">
			<span>
				<a class="imgBox" href="javascript:;">
					<img src="../images/thermometer.png" alt="">
					<div class="meng">温度表</div>
				</a>
				<p  class="name">
					<a href="javascript:;">温度表</a>
				</p>
			</span>
			<span>
				<a class="imgBox" href="javascript:;">
					<img src="../images/material1.jpg" alt="">
					<div class="meng">有机肥原料（一）</div>
				</a>
				<p  class="name">
					<a href="javascript:;">有机肥原料（一）</a>
				</p>
			</span>
			<span>
				<a class="imgBox" href="javascript:;">
					<img src="../images/material2.jpg" alt="">
					<div class="meng">有机肥原料（二）</div>
				</a>
				<p  class="name">
					<a href="javascript:;">有机肥原料（二）</a>
				</p>
			</span>
			<span>
				<a class="imgBox" href="javascript:;">
					<img src="../images/feed.png" alt="">
					<div class="meng">养羊饲料</div>
				</a>
				<p  class="name">
					<a href="javascript:;">养羊饲料</a>
				</p>
			</span>
			<video src="../videos/fensui.mp4" controls="controls" class="video video1"></video>
			<video src="../videos/fajiao.mp4" controls="controls" class="video video2"></video>
			<div class="clearfix"></div>
		</div>
		<div class="titleBox mt-20"  v-if="!isPhone">
			<h3 class="title"><img src="../images/paw.png" alt="">产品展示<a href="product.html">更多>></a></h3>
		</div>
		<div class="productsBox"  v-if="!isPhone">
			<span v-for="(el,index) in products">
				<a class="imgBox" href="javascript:;" v-on:click="seeProduct(el)">
					<img v-if="index == 0" src="../images/sheep1.jpg" alt="">
					<img v-if="index == 1" src="../images/sheep2.jpg" alt="">
					<img v-if="index == 2" src="../images/sw1.jpg" alt="">
					<img v-if="index == 3" src="../images/sw2.jpg" alt="">
					<img v-if="index == 4" src="../images/jun1.jpg" alt="">
					<img v-if="index == 5" src="../images/jun2.jpg" alt="">
					<img v-if="index == 6" src="../images/water1.jpg" alt="">
					<img v-if="index == 7" src="../images/water2.jpg" alt="">
					<div class="meng">{{el.name}}</div>
				</a>
				<p  class="name">
					<a href="javascript:;" v-on:click="seeProduct(el)">{{el.name}}</a>
				</p>
			</span>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				products:[
					{
						name:'纯羊粪有机肥（1）',
						href:'/product',
						index:'1',
					},
					{
						name:'纯羊粪有机肥（2）',
						href:'/product',
						index:'1',
					},
					{
						name:'生物有机肥（1）',
						href:'/product',
						index:'2',
					},
					{
						name:'生物有机肥（2）',
						href:'/product',
						index:'2',
					},
					{
						name:'菌肥（1）',
						href:'/product',
						index:'3',
					},
					{
						name:'菌肥（2）',
						href:'/product',
						index:'3',
					},
					{
						name:'水溶肥（1）',
						href:'/product',
						index:'4',
					},
					{
						name:'水溶肥（2）',
						href:'/product',
						index:'4',
					},
				]
			}
		},
		methods:{
			seeProduct(el){
				this.$store.commit('setProductNum',el.index)
				this.$router.push(el.href);
			},
		},
		computed:{
			isPhone:function(){
				return this.$store.state.isPhone;
			}
		},
	}
</script>
<style type="text/css" lang="scss" scoped>
	@import "../../base/base";

	.content3{
		width:1600px;
		// height: 622px;
		margin:0 auto;
		background: url(../images/contentBg3Top.png) 0 0 no-repeat ,url(../images/contentBg3Bottom.png) bottom center no-repeat;
		background-color: #0C4002;
		overflow: hidden;
		.titleBox{
			width: 980px;
			margin:20px auto;
			color:$green-yellow;
			line-height: 54px;
			background-image: url(../images/line.png);
			background-position:0 bottom;
			background-repeat: repeat-x;
			.title{
				font-size: 20px;
				img{
					float:left;
					margin:14px 8px;
				}
				a{
					color:$green-yellow;
					float:right;
					font-size: $font-base;
					font-weight: normal;
					margin-right: 10px;
				}
			}
		}
		.productsBox{
			width: 980px;
			margin:0 auto 30px;
			span{
				display: inline-block;
				width:230px;
				height: 234px;
				background-image: url(../images/productBg.jpg);
				margin-left: 10px;
				margin-bottom: 25px;
				.imgBox{
					position:relative;
					display: block;
					width: 220px;
					height: 170px;
					margin:5px auto;
					img{
						width: 220px;
						height: 170px;
					}
					.meng{
						position: absolute;
						top:0;
						width:100%;
						height: 100%;
						background-color: rgba(0,0,0, 0.6);
						text-align: center;
						line-height: 170px;
						font-size: 24px;
						color:$white;
						display: none;
					}
					&:hover .meng{
						display: block;
					}
				}

				.name{
					display: block;
					text-align: center;
					line-height: 46px;
					a{
						color:$green-dark;
					}
				}
			}
			.video{
				display: inline-block;
				float: left;
				width: 470px;
				height: 300px;
				&.video1{
					margin-left: 10px;
				}
				&.video2{
					margin-left: 25px;
				}
			}
		}
		
		
		&.isPhone{
			width:100%;
			background-image: none;
			.titleBox{
				width:100%;
				background-image: none;
				margin:0 auto;
				.title{
					text-align: center;
					img{
						display: none;
					}
				}
			}
			.productsBox{
				width: 100%;
				span{
					width:46%;
					height: auto;
					background-image: none;
					margin:5px 2%;
					float: left;
					.imgBox{
						width: 100%;
						img{
							display: block;
							width: 100%;
						}
						&:hover .meng{
							display: none;
						}
					}
					.name{
						display: block;
						text-align: center;
						line-height: 46px;
						a{
							color:$white;
						}
					}
				}
				.video{
					display:block;
					width: 96%;
					height: auto;
					margin:10px 0 10px 2%;
				}
			}
		}
	}
</style>
