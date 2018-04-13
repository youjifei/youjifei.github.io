<template>
	<div id="aboutUs" v-bind:class="isPhone ? 'isPhone':''">
		<uiAside v-if="!isPhone"></uiAside>
		<div class="rightContent">
			<container :title="title">
				<div class="aboutUsBox">
                    <p>河北林伟金鑫农业有机肥制造有限公司位于历史悠久的古城保定市唐县，是一家以高新生物技术为核心，有机、生态、绿色、环保为理念，集产品研发、生产销售，物流配送于一体的综合性企业。公司生产环节中的主要
                        原料为当地畜禽废物及页岩、秸秆等，利用高科技发酵技术处理，污染问题，养殖业的可持续发展。并以高新生物技术为核心，有机、生态、绿色为主，集科研开发、生产销售、项目产业化于一体，产品质量
                        和多项技术指标先进。我厂生产的活性生物有机肥系列产品：<i>以天然羊粪和发酵有机肥、生物有机肥、水溶肥、微生物菌剂等各种肥料等，适用于西瓜、西葫、黄瓜、豆角、生姜、大蒜、洋葱、土豆、青椒、
                            尖椒等蔬菜及蜜橘、板栗、荔枝、脐橙等果树也适用于棉花、小麦、烟茶、药材、水稻、城市绿化生态养殖等各种行业，它具有疏松土壤，提高土壤肥力，促进农作物生长改善生物果实品
                            质，肥效长、无公害等优点</i>。公司拥有一批专业性的营销团队，为公司产品销售创了新局面。产品综合质量和多项指标处于全国先进、深受农业部门及广大用户的好评。公司以科研单位的技术为依托，绿色环
                            保农业的发展为契机，良好的企业运作环境为平台，本着"诚实守信、科技兴企"的原则，做好科技成果的转化和产品的推广工作，以优秀的产品、良好的服务回报社会。在坚持"质量过硬，信誉可靠"的原则下
                            ，企业在发展过程中坚定的走"品牌"道路。对生产严把质量关，对市场严把信誉关，对客户严把服务关。"让环境清新，让食品安全，让大地丰收，让农民富足"是我公司的期盼和责任。</p>
                    <p v-if="!isPhone"><i>业务洽谈热线：13313246827、18732294146</i></p>
                    <p v-if="isPhone"><i>业务洽谈热线：</i></p>
                    <p v-if="isPhone"><i>13313246827、18732294146</i></p>
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
				title:'关于我们',
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

	#aboutUs{
		width: 1000px;
		margin:30px auto;
		.rightContent{
			display: inline-block;
			width: 740px;
			float: right;
			.aboutUsBox{
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
			}
		}
	}
</style>
