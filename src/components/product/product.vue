<template>
	<div id="product" v-bind:class="isPhone ? 'isPhone':''">
		<uiAside v-if="!isPhone"></uiAside>
		<div class="rightContent">
			<container :title="title">
				<div class="productsBox" v-if="step == 1 && !isPhone">
					<template v-if="productNum == 0">
						<span v-for="(el,index) in totalList">
							<a class="imgBox" href="javascript:;" v-on:click="seeIntroduce(el.type)">
								<img v-if="index == 0" src="../images/sheep1.jpg" alt="">
								<img v-if="index == 1" src="../images/sheep2.jpg" alt="">
								<img v-if="index == 2" src="../images/sw1.jpg" alt="">
								<img v-if="index == 3" src="../images/sw2.jpg" alt="">
								<img v-if="index == 4" src="../images/jun1.jpg" alt="">
								<img v-if="index == 5" src="../images/jun2.jpg" alt="">
								<img v-if="index == 6" src="../images/water1.jpg" alt="">
								<img v-if="index == 7" src="../images/water2.jpg" alt="">
							</a>
							<p  class="name">
								<a href="javascript:;" v-on:click="seeIntroduce(el.type)">{{el.name}}</a>
							</p>
						</span>
					</template>
					<template v-if="productNum == 1">
						<span v-for="(el,index) in sheepList">
							<a class="imgBox" href="javascript:;" v-on:click="seeIntroduce(el.type)">
								<img v-if="index == 0" src="../images/sheep1.jpg" alt="">
								<img v-if="index == 1" src="../images/sheep2.jpg" alt="">
								<img v-if="index == 2" src="../images/sheep3.jpg" alt="">
								<img v-if="index == 3" src="../images/sheep4.jpg" alt="">
								<img v-if="index == 4" src="../images/sheep5.jpg" alt="">
								<img v-if="index == 5" src="../images/sheep6.jpg" alt="">
								<img v-if="index == 6" src="../images/sheep7.jpg" alt="">
								<img v-if="index == 7" src="../images/sheep8.jpg" alt="">
								<img v-if="index == 8" src="../images/sheep9.jpg" alt="">
							</a>
							<p  class="name">
								<a href="javascript:;" v-on:click="seeIntroduce(el.type)">{{el.name}}</a>
							</p>
						</span>
					</template>
					<template v-if="productNum == 2">
						<span v-for="(el,index) in biologicalList">
							<a class="imgBox" href="javascript:;" v-on:click="seeIntroduce(el.type)">
								<img v-if="index == 0" src="../images/sw1.jpg" alt="">
								<img v-if="index == 1" src="../images/sw2.jpg" alt="">
								<img v-if="index == 2" src="../images/sw3.jpg" alt="">
							</a>
							<p  class="name">
								<a href="javascript:;" v-on:click="seeIntroduce(el.type)">{{el.name}}</a>
							</p>
						</span>
					</template>
					<template v-if="productNum == 3">
						<span v-for="(el,index) in bacteriaList">
							<a class="imgBox" href="javascript:;" v-on:click="seeIntroduce(el.type)">
								<img v-if="index == 0" src="../images/jun1.jpg" alt="">
								<img v-if="index == 1" src="../images/jun2.jpg" alt="">
								<img v-if="index == 2" src="../images/jun3.jpg" alt="">
							</a>
							<p  class="name">
								<a href="javascript:;" v-on:click="seeIntroduce(el.type)">{{el.name}}</a>
							</p>
						</span>
					</template>
					<template v-if="productNum == 4">
						<span v-for="(el,index) in waterSolubleList">
							<a class="imgBox" href="javascript:;" v-on:click="seeIntroduce(el.type)">
								<img v-if="index == 0" src="../images/water1.jpg" alt="">
								<img v-if="index == 1" src="../images/water2.jpg" alt="">
								<img v-if="index == 2" src="../images/water3.jpg" alt="">
							</a>
							<p  class="name">
								<a href="javascript:;" v-on:click="seeIntroduce(el.type)">{{el.name}}</a>
							</p>
						</span>
					</template>
				</div>
				<div class="productsBox" v-if="step == 1 && isPhone">
					<span v-for="(el,index) in sheepList" v-bind:class="(index % 2) ? '':'marginRight' ">
						<a class="imgBox" href="javascript:;" v-on:click="seeIntroduce(el.type)">
							<img v-if="index == 0" src="../images/sheep1.jpg" alt="">
							<img v-if="index == 1" src="../images/sheep2.jpg" alt="">
							<img v-if="index == 2" src="../images/sheep3.jpg" alt="">
							<img v-if="index == 3" src="../images/sheep4.jpg" alt="">
							<img v-if="index == 4" src="../images/sheep5.jpg" alt="">
							<img v-if="index == 5" src="../images/sheep6.jpg" alt="">
							<img v-if="index == 6" src="../images/sheep7.jpg" alt="">
							<img v-if="index == 7" src="../images/sheep8.jpg" alt="">
							<img v-if="index == 8" src="../images/sheep9.jpg" alt="">
						</a>
						<p  class="name">
							<a href="javascript:;" v-on:click="seeIntroduce(el.type)">{{el.name}}</a>
						</p>
					</span>
					<span v-for="(el,index) in biologicalList" v-bind:class="(index % 2) ? 'marginRight':'' ">
						<a class="imgBox" href="javascript:;" v-on:click="seeIntroduce(el.type)">
							<img v-if="index == 0" src="../images/sw1.jpg" alt="">
							<img v-if="index == 1" src="../images/sw2.jpg" alt="">
							<img v-if="index == 2" src="../images/sw3.jpg" alt="">
						</a>
						<p  class="name">
							<a href="javascript:;" v-on:click="seeIntroduce(el.type)">{{el.name}}</a>
						</p>
					</span>
					<span v-for="(el,index) in bacteriaList" v-bind:class="(index % 2) ? '':'marginRight' ">
						<a class="imgBox" href="javascript:;" v-on:click="seeIntroduce(el.type)">
							<img v-if="index == 0" src="../images/jun1.jpg" alt="">
							<img v-if="index == 1" src="../images/jun2.jpg" alt="">
							<img v-if="index == 2" src="../images/jun3.jpg" alt="">
						</a>
						<p  class="name">
							<a href="javascript:;" v-on:click="seeIntroduce(el.type)">{{el.name}}</a>
						</p>
					</span>
					<span v-for="(el,index) in waterSolubleList" v-bind:class="(index % 2) ? 'marginRight':'' ">
						<a class="imgBox" href="javascript:;" v-on:click="seeIntroduce(el.type)">
							<img v-if="index == 0" src="../images/water1.jpg" alt="">
							<img v-if="index == 1" src="../images/water2.jpg" alt="">
							<img v-if="index == 2" src="../images/water3.jpg" alt="">
						</a>
						<p  class="name">
							<a href="javascript:;" v-on:click="seeIntroduce(el.type)">{{el.name}}</a>
						</p>
					</span>
					<div class="clearfix"></div>
				</div>
				<div class="productsBox" v-if="step == 2">
					<h1 class="introduceTitle">{{introduceTitle}}</h1>
					<p class="tip">2018-03-07&nbsp;&nbsp;&nbsp;&nbsp;河北林伟胜达有机肥经营有限公司</p>
					<p class="introduceContent">产品以天然羊粪和发酵有机肥、生物有机肥、水溶肥、微生物菌剂等各种肥料等，适用于西瓜、西葫、黄瓜、豆角、生姜、大蒜、洋葱、土豆、青椒、尖椒等蔬菜及蜜橘、板栗、荔枝、脐橙等果树也适用于棉花、
						小麦、烟茶、药材、水稻、城市绿化生态养殖等各种行业，它具有疏松土壤，提高土壤肥力，促进农作物生长改善生物果实品质，肥效长、无公害等优点。</p>
					<i class="back cursor" v-on:click="back">&lt;&lt; 返回列表</i>
				</div>
			</container>
		</div>
		<div class="clearfix"></div>
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
				title:'产品展示',
				step:1,				// 1 列表 2 介绍
				// productNum:0,		// 产品种类 0 全部 1 纯羊粪 2 生物 3 菌肥 4 水溶肥
				introduceTitle:'',	// 介绍信息标题
				totalList:[
					{
						name:'纯羊粪有机肥（1）',
						type:'sheep',
					},
					{
						name:'纯羊粪有机肥（2）',
						type:'sheep',
					},
					{
						name:'生物有机肥（1）',
						type:'biological',
					},
					{
						name:'生物有机肥（2）',
						type:'biological',
					},
					{
						name:'菌肥（1）',
						type:'bacteria',
					},
					{
						name:'菌肥（2）',
						type:'bacteria',
					},
					{
						name:'水溶肥（1）',
						type:'waterSoluble',
					},
					{
						name:'水溶肥（2）',
						type:'waterSoluble',
					},
				],
				sheepList:[
					{
						name:'纯羊粪有机肥（1）',
						type:'sheep',
					},
					{
						name:'纯羊粪有机肥（2）',
						type:'sheep',
					},
					{
						name:'纯羊粪有机肥（3）',
						type:'sheep',
					},
					{
						name:'纯羊粪有机肥（4）',
						type:'sheep',
					},
					{
						name:'纯羊粪有机肥（5）',
						type:'sheep',
					},
					{
						name:'纯羊粪有机肥（6）',
						type:'sheep',
					},
					{
						name:'纯羊粪有机肥（7）',
						type:'sheep',
					},
					{
						name:'纯羊粪有机肥（8）',
						type:'sheep',
					},
					{
						name:'纯羊粪有机肥（9）',
						type:'sheep',
					},
				],
				biologicalList:[
					{
						name:'生物有机肥（1）',
						type:'biological',
					},
					{
						name:'生物有机肥（2）',
						type:'biological',
					},
					{
						name:'生物有机肥（3）',
						type:'biological',
					},
				],
				bacteriaList:[
					{
						name:'菌肥（1）',
						type:'bacteria',
					},
					{
						name:'菌肥（2）',
						type:'bacteria',
					},
					{
						name:'菌肥（3）',
						type:'bacteria',
					},
				],
				waterSolubleList:[
					{
						name:'水溶肥（1）',
						type:'waterSoluble',
					},
					{
						name:'水溶肥（2）',
						type:'waterSoluble',
					},
					{
						name:'水溶肥（3）',
						type:'waterSoluble',
					},
				],
			}
		},
		mounted(){
			this.$nextTick(()=>{
				this.back();

				// H5返回键控制
				if(this.isPhone){
					let _this = this;
					window.addEventListener("popstate", function(event) {
						if(_this.step == 2){
							_this.back();
						}
					}, false);
				}
			})
		},
		methods:{
			// 查看肥料介绍
			seeIntroduce(type){
				this.pushHistory();
				if(type == 'sheep'){
					this.introduceTitle = '纯羊粪有机肥';
				}else if(type == 'biological'){
					this.introduceTitle = '生物有机肥';
				}else if(type == 'bacteria'){
					this.introduceTitle = '菌肥';
				}else if(type == 'waterSoluble'){
					this.introduceTitle = '水溶肥';
				};
				this.step = 2;
			},
			back(){
				this.step = 1;
				this.introduceTitle = '';
			},
			pushHistory(){
				let state = {
					title: "title",
					url: "#"
				};
				window.history.pushState(state,"title", "#");
			},
		},
		watch:{
			'$route':{
				'handler':function(val){
					this.step = 1;
					this.back();
				}
			},
			productNum:{
				'handler':function(val){
					this.back();
				}
			}
		},
		computed:{
			productNum:function(){
				return this.$store.state.productNum;
			},
			isPhone:function(){
				return this.$store.state.isPhone;
			}
		},
	}
</script>
<style type="text/css" lang="scss" scoped>
	@import "../../base/base";

	#product{
		width: 1000px;
		margin:30px auto;
		.rightContent{
			display: inline-block;
			width: 740px;
			float: right;
			.productsBox{
				width:100%;
				margin:30px auto;
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
				.introduceTitle{
					margin-top:70px;
					text-align: center;
				}
				.tip{
					font-size: $font-small;
					color:#999999;
					line-height: 30px;
					text-align: center;
				}
				.introduceContent{
					font-size: $font-mid;
					color:$green-base;
					text-align: left;
					text-indent: 2em;
					margin-top:30px;
					line-height: 34px;
				}
				.back{
					font-size: $font-small;
					color:$green-dark;
					float:left;
					margin-top: 50px;
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
				.productsBox{
					padding:0 4%;
					margin-bottom: 0;
					span{
						width: 43%;
						height: auto;
						background-image: none;
						margin-left: 0;
						float: left;
						&.marginRight{
							margin-right: 12%;
						}
						.imgBox{
							width: 100%;
							height: auto;
							margin:0;
							img{
								width: 100%;
								height: auto;
							}
						}
						.name{
							font-size: $font-base;
							line-height: 24px;
						}
					}

					.introduceTitle{
						margin-top:30px;
					}
					.introduceContent{
						margin-top: 20px;
					}
					.back{
						margin:20px 0 30px;
					}
				}
			}
		}
	}
</style>
