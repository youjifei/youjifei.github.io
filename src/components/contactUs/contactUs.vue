<template>
	<div id="contactUs" v-bind:class="isPhone ? 'isPhone':''">
		<uiAside v-if="!isPhone"></uiAside>
		<div class="rightContent">
			<container :title="title">
				<div class="contactUsBox">
					<div id="map"></div>
					<p>公司：河北林伟金鑫农业有机肥制造有限公司</p>
					<p><i>联系人：13313246827（石经理）</i></p>
					<p><i>联系人：18732294146（赵经理）</i></p>
					<p>QQ：532037140</p>
					<p>邮箱：532037140@qq.com</p>
					<p>地址：河北省保定市唐县北罗镇南雹水村</p>
				</div>
			</container>
		</div>
	</div>
</template>
<script>
	import uiAside from 'aside';
	import container from 'container';
	export default{
		components:{
			uiAside,
			container,
		},
		data(){
			return {
				title:'联系我们',
			}
		},
		mounted(){
			this.$nextTick(()=>{
				this.setMap();
			})
		},
		methods:{
			setMap(){
				let map = new BMap.Map("map");
				map.centerAndZoom(new BMap.Point(114.844649,38.721878), 16);
				map.enableScrollWheelZoom(true);     // 开启鼠标滚轮缩放
				map.enableKeyboard();          		 // 允许键盘操作
				map.addOverlay(new BMap.Marker(new BMap.Point(114.844649,38.721878)));
			}
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

	#contactUs{
		width: 1000px;
		margin:30px auto;
		.rightContent{
			display: inline-block;
			width: 740px;
			float: right;
			.contactUsBox{
				width:100%;
				margin:30px auto;
                p{
                    font-size: $font-mid;
					color:$green-base;
					text-align: left;
					text-indent: 2em;
					line-height: 34px;
                    i{
                        display: inline;
                        color:#f00;
                        font-weight: bold;
                    }
                }
				#map{
					width:100%;
					height:228px;
					margin:0 auto;
					margin-bottom: 30px;
					border:1px solid #dfdfdf;
				}
			}
		}

		&.isPhone{
			width: 100%;
			margin-bottom: 0;
			.rightContent{
				display: block;
				width: 95%;
				float:none;
				margin:0 auto;
				.contactUsBox{
					p{
						text-indent: 20px;
						font-size: $font-base;
					}
					#map{
						width: 95%;
						height: 180px;
					}
				}
			}
		}
	}

</style>
