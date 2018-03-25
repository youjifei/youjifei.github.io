<template>
	<div id="content1" v-bind:class="isPhone ? 'isPhone':''">
		<div class="content1Top">
			<span class="titleBox" v-if="!isPhone">产品分类</span>
			<p class="pointTitle" v-if="isPhone">产品分类</p>
			<div class="productsBox">
				<a href="javascript:;" class="products" v-on:click="seeProduct(1)">
					<span class="imgBox imgBox1 cursor"></span>
					<p>纯羊粪有机肥</p>
				</a>
				<a href="javascript:;" class="products noMarginRight" v-on:click="seeProduct(2)">
					<span class="imgBox imgBox2 cursor"></span>
					<p>生物有机肥</p>
				</a>
				<a href="javascript:;" class="products" v-on:click="seeProduct(3)">
					<span class="imgBox imgBox3 cursor"></span>
					<p>菌肥</p>
				</a>
				<a href="javascript:;" class="products noMarginRight" v-on:click="seeProduct(4)">
					<span class="imgBox imgBox4 cursor"></span>
					<p>水溶肥</p>
				</a>
				<div class="clearfix"></div>
			</div>
		</div>
		<div class="content1Bottom"></div>
	</div>
</template>
<script type="text/javascript">
	export default{
		methods:{
			seeProduct(index){
				this.$store.commit('setProductNum',index)
				this.$router.push('/product');
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

	#content1{
		width:100%;
		background-color: #DBEBD9;
		.content1Top{
			width: 1000px;
			height: 208px;
			margin:0 auto;
			padding:24px 0;
			span,a{
				display: inline-block;
				float:left;
				&.titleBox{
					width:64px;
					height: 144px;
					background-image: url(../images/content1.jpg);
					font-size: $font-large;
					color:$green-light;
					padding:12px 20px 0;
					margin-right: 40px;
				}
				&.products{
					margin:5px 40px 0 0;
					.imgBox{
						width:111px;
						height: 111px;
						background-position: center;
						overflow: hidden;
						&.imgBox1{
							background-image: url(../images/sheep3.jpg);
						}
						&.imgBox2{
							background-image: url(../images/sw1.jpg);

						}
						&.imgBox3{
							background-image: url(../images/jun3.jpg);

						}
						&.imgBox4{
							background-image: url(../images/water3.jpg);

						}
					}
					p{
						font-size: $font-base;
						color:$green-base;
						line-height: 44px;
						text-align: center;
					}
				}
			}
		}
		.content1Bottom{
			height: 13px;
			background-image: url(../images/contentBg1.jpg);
		}

		&.isPhone{
			width: 100%;
			.content1Top{
				width:100%;
				height: auto;
				.pointTitle{
					text-align: center;
					font-size: 20px;
					font-weight: bold;
					color:$green-dark;
					margin-bottom:20px;
				}
				.productsBox{
					width:262px;
					margin: 0 auto;
					.noMarginRight{
						margin-right: 0;
					}
				}
			}
		}
	}
</style>
