<template>
	<div id="banner" v-bind:class="isPhone ? 'isPhone':''">
		<div class="imgBox first">
			<img src="../images/banner2.jpg" alt="">
		</div>
		<div class="imgBox second">
			<img src="../images/banner1.jpg" alt="">
		</div>
		<!-- <div class="pageDe">
			<span v-bind:class="num == 1 ? 'active':'' "></span>
			<span v-bind:class="num == 2 ? 'active':'' "></span>
		</div> -->
	</div>
</template>
<script>
	export default{
		data(){
			return{
				num:1,
			}
		},
		mounted(){
			this.$nextTick(()=>{
				setInterval(()=>{
					if(this.num == 1){
						this.num = 2;
					}else{
						this.num = 1;
					};
				},5000)

				// H5 高度控制
				// let wid = $(window).width();
				// let height = Math.floor((wid * 545)/1600) + 'px';
				// $('#banner').css('height',height);
			})
		},
		computed:{
			isPhone:function(){
				return this.$store.state.isPhone;
			}
		},
		watch:{
			'num':{
				'handler':function(val){
					if(val == 1){
						$('.first').fadeOut(1000);
						$('.second').fadeIn(1000);
					}else{
						$('.first').fadeIn(1000);
						$('.second').fadeOut(1000);
					}
				}
			}
		}
	}
</script>
<style type="text/css" lang="scss" scoped>
	@import "../../base/base";

	#banner{
		height: 545px;
		width: 1600px;
		margin:0 auto;
		position: relative;
		.imgBox{
			height: 545px;
			position: absolute;
			top:0;
		}
		// .pageDe{
		// 	position:absolute;
		// 	height: 10px;
		// 	top:510px;
		// 	left: 725px;
		// 	span{
		// 		display: inline-block;
		// 		width:65px;
		// 		height: 10px;
		// 		background-color: black;
		// 		float:left;
		// 		margin-right: 10px;
		// 		background-color: #0a3a01;
		// 		&.active{
		// 			background-color: #ffce00;
		// 		}
		// 	}
		// }
		&.isPhone{
			width:100%;
			height: 200px;
			.imgBox{
				width: 100%;
				height: auto;
				img{
					width: 100%;
					height: 200px;
				}
			}
		}
	}
</style>
