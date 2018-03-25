<template>
	<div id="knowledge" v-bind:class="isPhone ? 'isPhone':''">
		<uiAside v-if="!isPhone"></uiAside>
		<div class="rightContent">
			<container :title="title">
				<div class="knowledgeBox" v-if="step == 1">
                    <ul>
                        <li v-for="(el,index) in list">
							<img src="../images/arrowRight.jpg" alt="">
							<a href="javascript:;" v-on:click="seeDetails(el)">{{el.question}}</a>
							<span>2018-03-07</span>
                        </li>
                    </ul>
				</div>
				<div class="knowledgeBox detailsBox" v-if="step == 2">
					<h3 class="detailsTitle">{{details.question}}</h3>
					<p class="tip">2018-03-07&nbsp;&nbsp;&nbsp;&nbsp;河北林伟胜达有机肥经营有限公司</p>
					<p class="detailsContent" v-for="(el,index) in details.answer">{{el}}</p>
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
				title:'科普知识',
				step:1,				// 1 列表 2 介绍
                list:[
                    {
                        question:'有机肥',
                        answer:['主要来源于植物和（或）动物，施于土壤以提供植物营养为其主要功能的含碳物料。经生物物质、动植物废弃物、植物残体加工而来，消除了其中的有毒有害物质，富含大量有益物质，包括：多种有机酸、肽类以及包括氮、磷、钾在内的丰富的营养元素。不仅能为农作物提供全面营养，而且肥效长，可增加和更新土壤有机质，促进微生物繁殖，改善土壤的理化性质和生物活性，是绿色食品生产的主要养分。'],
                    },
                    {
                        question:'有机肥分类',
                        answer:['有机肥具体可以分为以下几类：','1、农业废弃物：','比如秸秆、豆粕、棉粕等。','2、畜禽粪便：','比如鸡粪、牛羊马粪、兔粪；','3、工业废弃物：','比如酒糟、醋糟、木薯渣、糖渣、糠醛渣等；','4、生活垃圾：','比如餐厨垃圾等；','5、城市污泥：','比如河道淤泥、下水道淤泥等。有机肥原料生产供应基地分类大全：蚕沙、蘑菇菌渣、海带渣、磷柠檬酸渣、木薯渣、蛋白泥、糖醛渣、氨基酸腐植酸、油渣、草木灰、贝壳粉等，兼营、花生壳粉等。','6、现代理化：','比如多维场能浓缩有机肥由畜禽粪有效萃取物、多种元素有机复合物、植物皂苷有机活性剂、磁铁矿粉等成分科学配方混合，干燥，粉碎过筛，再经过频率为10MHz高频电场处理制成。这种有机肥张勇飞和赵冰等专家科研人员经过多年反复试验研制成功的一种有机肥。这种有机肥首次将多维场能原理引进肥料生产，增加了肥料组分的分子场能，它首先体现了高频电场和磁铁矿粉对多种元素复合物的磁化作用，从而提高作物对大量元素和微量元素吸收率；其次也体现了在植物皂苷有机活性剂以水溶状态将具有植物营养作用的肥料元素富集到作物的根系，便于植株的吸收利用；这些都充分体现了有机农业的生产思想。施用多维场能浓缩有机肥不但有效提高植物产量，同时还有效提高作物产品品质。多维场能浓缩有机肥可作作物底肥、追肥和叶面喷施肥。'],
                    },
                    {
                        question:'羊粪',
                        answer:['羊粪是指羊的大便，黑色，一般成羊其粪便大小如黄豆粒，近似椭圆形，是一种用途极广的动物粪便。羊粪经过发酵是一种很好的有机肥，使用它做肥料，可以改善土质，是防止土地板结，经济价值很好。常见的有：用来养花，种牧草，种茶。'],
                    },
                    {
                        question:'羊粪的作用',
                        answer:['可以做农作物、花卉的肥料，如果有上好几吨的话，可以建沼气池做燃料。还有你对它加工及有了新的价值针对来开发市场。如：','口蘑：口蘑是生长在蒙古草原上的一种白色伞菌属野生蘑菇，一般生长在有羊骨或羊粪的地方，味道异常鲜美，由于产量不大，需求量大，所以价值昂贵，目前仍然是中国市场上最为昂贵的一种蘑菇。','蚯蚓饵料：最好是牛粪、猪粪、马粪、羊粪、兔粪，猪，羊、兔粪加秸杆、稻草。','马龄薯：在城市郊区、工矿区及交通运输便利并有销售市场的地方，采用塑料薄膜覆盖种植马铃薯，不仅可以使马铃薯...育苗阳畦底下铺20～30厘米厚的生马粪或羊粪，灌水使之含水量达到60%，上部再铺过筛细土10厘米厚井整平。','癞蛤蟆：5米深，水温最好以18－25为宜，食料来源：人尿、猪牛、羊粪，每天喂1－3次，放养密度刚孵化出的每平方米放养2000－3000个左右，随着个体增大以信个体差异，分类疏散，蝌蚪经2个月后变态为幼蛙，人工饲养应禁止使用。','但是，羊粪要经过发酵处理后才能施入农田。因为，羊粪中含有大肠菌、线虫等病菌和害虫直接施入农田，会导致病虫害的传播、作物发病，而且还会造成烧根烧苗现象等，因此，羊粪需要经过发酵处理才会更安全。发酵方法如下：','羊粪与秸秆、锯末屑、蘑菇渣、干泥土粉等按适当比例混合。1吨物料(鲜料约2.5吨)加1公斤金宝贝肥料发酵剂，按1公斤金宝贝肥料发酵剂加5公斤米糠（或麸皮、玉米粉等替代物）稀释后再均匀撒入物料堆，混拌发酵。在做堆时请不要做的太小，太小会影响发酵，高度在1.5米左右，宽度2米，长度在2米以上的堆发酵效果比较好。发酵过程注意适当供氧与翻堆（温度升至75℃或以上时要翻倒几次），升温控制在65℃左右，温度太高对养分有影响。发酵物料的水分应控制在60～65%。调整物料水分方法：水分过高可添加秸秆、锯末屑、蘑菇渣、干泥土粉等。水分合适与否判断办法：手紧抓一把物料，指缝见水印但不滴水，落地即散。整个发酵过程5～7天完成。成品有机肥为蓬松状、呈黑褐色，略带酒香味或泥土味，营养丰富，用于瓜果蔬菜、经济作物、苗木花卉营养土，价值增值数倍。'],
                    },
                    {
                        question:'养殖场羊粪的优点',
                        answer:['养殖场的羊因摄取的饲料比较多，所以养殖场的羊粪里含氮、磷、钾（总养分）比较高。国家标准总养分（N+P205+K20）/%≥5.0，实测结果10.2。'],
                    },
                    {
                        question:'草原羊粪的形成过程',
                        answer:['清晨蒙古族牧民起床，开始喝奶茶吃手把肉，早点结束后，骑着马带着牧羊犬赶着羊群来到大草原上，羊群在草原上开始了一天的自然采食和嬉戏打闹，下午四点，羊群吃饱后，牧民赶着它们来到小河边喝水。羊群回到家便被牧民赶进羊舍，羊粪是在羊舍里经过日复一日的踩踏，参透了羊尿后产生的。'],
                    },
                    {
                        question:'生产羊粪有机肥的过程',
                        answer:['1、选择优质羊粪砖块为原料进行平整；','2、根据羊粪原料干湿度进行喷洒水溶生物菌种进行发酵作业，水分在25%才能发酵；','3、装载机进行从原料到成品，三次发酵和翻抛作业；','4、期间进行水分含量测试，掌握菌种溶解在原肥中的情况；','5、发酵中和发酵好的羊粪有机肥；','6、按照NY525-2012、GB/T8567-2010对每批次有机肥进行检验；','7、装载机把发酵好的原料进行过筛作业；','8、组装粉碎机把过筛后物料进行粉碎作业；','9、加工水溶肥和颗粒肥；','10、定量包装机进行包装作业。'],
                    },
                    {
                        question:'产品优势',
                        answer:['1、活化疏松土壤，改良土壤结构，促进根系生长，增加土壤有机质，增强土壤通气、保水、保肥等性能；','2、营养全面，肥效持久，增产、增收，提高经济效益；','3、防重茬，增强作物抗病、抗寒、抗旱能力；','4、改善果蔬色泽、口感、糖分、氨基酸含量等品质指标。'],
                    },
                    {
                        question:'使用没有发酵的羊粪会造成什么后果',
                        answer:['1、长草：羊群吃了牧草后，牧草中的草籽和自然界中漂浮的草籽仍然会留在羊粪里，如果不经高温发酵，在遇到潮湿温暖的环境下便会疯长，影响经济作物生长；','2、烧根：羊粪在干燥时不会发酵，到了南方雨水多温度高的环境后便会开始发酵，发酵时温度可以腐熟鸡蛋，这时的羊粪正在作物的根部，植物就会全军覆没；','3、生虫：羊粪没有发酵，细菌、有害微生物、黑头虫。就会啃食植物的根；','4、肥效差：因羊粪蛋和羊粪末中没有羊尿，同时又没有经过发酵，使用后除发生上述三种情况外，即使植物存活下来生长也不会旺盛；','5、用肥常识：在当地农牧民种菜时不会直接使用干羊粪和羊粪末，尽可能使用羊粪块肥。牧民在养殖过程中用干羊粪蛋和羊粪末进行垫羊舍，没有用土垫的习惯；','6、识别误区：干羊粪蛋和羊粪末是羊群在羊舍里前一天晚上形成的，第二天就扫了出来，表面上看是纯羊粪，其实是羊粪的初级品，只有日复一日的踩踏，参透了羊尿才是优质和肥效强劲的羊粪。发酵羊粪有行业标准，建议种植户不要自己发酵羊粪。'],
                    },
                ],
                details:{},
			}
		},
		methods:{
			// 查看肥料介绍
			seeDetails(el){
				this.pushHistory();
				this.details = el;
				this.step = 2;
			},
			back(){
				this.step = 1;
				this.details = {};
			},
			pushHistory(){
				let state = {
					title: "title",
					url: "#"
				};
				window.history.pushState(state,"title", "#");
			},
		},
		mounted(){
			this.$nextTick(()=>{
				let num = window.location.href.split('?')[1];
				if(num){
					this.seeDetails(this.list[num]);
				};

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
		computed:{
			msgNum:function(){
				return this.$store.state.knowledgeNum;
			},
			isPhone:function(){
				return this.$store.state.isPhone;
			}
		},
		watch:{
			msgNum:{
				'handler':function(val){
					console.log(val)
					this.seeDetails(this.list[val]);
				}
			}
		}
	}
</script>
<style type="text/css" lang="scss" scoped>
	@import "../../base/base";

	#knowledge{
		width: 1000px;
		margin:30px auto;
		.rightContent{
			display: inline-block;
			width: 740px;
			float: right;
			.knowledgeBox{
				width:100%;
				margin:30px auto;
				ul{
					display: block;
					li{
						display: block;
						font-size: $font-base;
						line-height: 36px;
						img{
							float: left;
							margin:13px 10px 0 5px;
						}
						a{
							color:$green-dark;
						}
						span{
							float: right;
							margin-right: 10px;
						}
					}
				}
				.detailsTitle{
					margin-top:70px;
					text-align: center;
				}
				.tip{
					font-size: $font-small;
					color:#999999;
					line-height: 30px;
					text-align: center;
					margin-bottom: 30px;
				}
				.detailsContent{
					font-size: $font-mid;
					color:$green-base;
					text-align: left;
					text-indent: 2em;
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
				.knowledgeBox{
					ul{
						li{
							a{
								display: inline-block;
								width:60%;
								height: 36px;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
							}
						}
					}
					.detailsTitle{
						margin-top:30px;
					}
					.tip{
						margin-bottom: 20px;
					}
					.back{
						margin: 20px 0 30px;
					}
				}
			}
		}
	}
</style>
