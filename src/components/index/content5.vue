<template>
	<div id="content5" v-bind:class="isPhone ? 'isPhone':''">
		<h3 v-if="!isPhone">我们的优势</h3>
		<p class="pointTitle" v-if="isPhone">我们的优势</p>
		<img src="../images/youshi.jpg" alt="" v-if="!isPhone">
		<div class="imgBox" v-if="isPhone"><img class="img1" src="../images/youshi.jpg" alt=""></div>
		<div class="imgBox" v-if="isPhone"><img class="img2" src="../images/youshi.jpg" alt=""></div>
		<div class="imgBox" v-if="isPhone"><img class="img3" src="../images/youshi.jpg" alt=""></div>
		<div class="imgBox" v-if="isPhone"><img class="img4" src="../images/youshi.jpg" alt=""></div>
	</div>
</template>
<script type="text/javascript">
	export default{
		computed:{
			isPhone:function(){
				return this.$store.state.isPhone;
			}
		},
	}
</script>
<style type="text/css" lang="scss" scoped>
	@import "../../base/base";

	#content5{
		background-color: $white;
		overflow: hidden;
		padding:30px 0 50px;
		h3{
			text-align: center;
			font-size: 20px;
			color:$green-base;
			margin:30px 0;
		}
		img{
			display: block;
			margin:0 auto;
		}
		// H5
		&.isPhone{
			.pointTitle{
				text-align: center;
				font-size: 20px;
				font-weight: bold;
				color:$green-dark;
				margin-bottom:20px;
			}
			.imgBox{
				width:250px;
				height: 103px;
				margin:0 auto;
				overflow: hidden;
				.img2{
					margin-left: -233px;
				}
				.img3{
					margin-left: -467px;
				}
				.img4{
					margin-left: -702px;
				}
			}
		}
	}
</style>
