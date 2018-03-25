<template>
	<div id="aside">
		<div class="asidePoint asideTop">
			<div class="title">
				产品分类
			</div>
			<div class="list">
				<ul>
					<li v-for="(el,index) in products">
						<a href="javascript:;" v-on:click="seeProduct(el)">{{el.name}}</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="asidePoint asideMid">
			<div class="title">
				知识科普
			</div>
			<div class="list">
				<ul>
					<li v-for="(el,index) in educations">
						<a href="javascript:;" v-on:click="seeKnowledge(el)">
							<img src="../images/arrowRight.jpg" alt="">
							{{el.name}}
						</a>
					</li>
				</ul>
				<img src="../images/jiao.png" alt="" class="jiao">
			</div>
		</div>
		<div class="asidePoint asideBottom">
			<div class="title">
				联系我们
			</div>
			<div class="list">
				<ul>
					<li v-for="(el,index) in address">
						<router-link :to="el.url" v-html="el.name" v-bind:class="'connectUs'+index"></router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				products:[
					{
						name:'纯羊粪有机肥',
						url:'/product',
						index:'1',
					},
					{
						name:'生物有机肥',
						url:'/product',
						index:'2',
					},
					{
						name:'菌肥',
						url:'/product',
						index:'3',
					},
					{
						name:'水溶肥',
						url:'/product',
						index:'4',
					},
				],
				educations:[
					{
						name:'有机肥分类',
						url:'/knowledge',
						index:'1',
					},
					{
						name:'养殖场羊粪的优点',
						url:'/knowledge',
						index:'4',
					},
					{
						name:'羊粪的作用',
						url:'/knowledge',
						index:'3',
					},
					{
						name:'草原羊粪的形成过程',
						url:'/knowledge',
						index:'5',
					},
					{
						name:'产品优势',
						url:'/knowledge',
						index:'7',
					},
				],
				address:[
					{
						name:'手机：13313246827',
						url:'/contactUs',
					},
					{
						name:'手机：18732294146',
						url:'/contactUs',
					},
					{
						name:'邮箱：532037140@qq.com',
						url:'/contactUs',
					},
					{
						name:'地址：河北省保定市唐县北罗<br/><i style="width:41px;"></i>镇南雹水村',
						url:'/contactUs',
					},
				]
			}
		},
		methods:{
			seeProduct(el){
				this.$store.commit('setProductNum',el.index)
				this.$router.push(el.url);
			},
			seeKnowledge(el){
				this.$store.commit('setKnowledgeNum',el.index)
				this.$router.push(el.url + '?' + el.index);
			},
		}
	}
</script>
<style type="text/css" lang="scss" scoped>
	@import "../../base/base";

	#aside{
		display: inline-block;
		width:225px;
		.asidePoint{
			.title{
				height: 65px;
				font-size: 22px;
				text-align: center;
				line-height: 58px;
				color:$green-yellow;
				background-image: url(../images/asideTitle1.jpg);
			}
			.list{
				background-color:#e4efe2;
				border:1px solid #bbddb4;
				margin-bottom: 20px;
				position: relative;
				ul{
					display: block;
					width:195px;
					margin: 15px auto;
					li{
						display: block;
						height: 40px;
						overflow: hidden;
						font-size: $font-base;
						text-indent: 45px;
						background-image: url('../images/asideList.jpg');
						background-position: 0 0;
						&:hover{
							background-position: 0 -42px;
							a{
								color:$white;
							}
						}
						a{
							display: block;
							float:left;
							width: 100%;
							line-height: 40px;
							color:$green-base;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
					}
				}
			}
			&.asideMid{
				.list{
					background-color: #e4efe2;
					ul{
						li{
							background-image: none;
							border-bottom: 1px dashed $green-dark;
							text-indent: 0;
							a{
								img{
									margin: -2px 8px 0 5px;
								}
							}
							&:hover{
								a{
									color:$green-dark;
								}
							}
						}
					}
					.jiao{
						position: absolute;
						right: 0;
						bottom:0;
					}
				}
			}
			&.asideBottom{
				.title{
					background-image: url(../images/asideTitle2.jpg);
					color:$white;
				}
				.list{
					background-color: #fff3e2;
					border:1px solid #ffa200;
					ul{
						li{
							height: auto;
							background-image: none;
							border-bottom:1px dotted #fe8600;
							text-indent: 0;
							a{
								color: #d56900;
								&.connectUs3{
									padding:10px 0;
									line-height: 20px;
								}
							}
							&:hover{
								a{
									color:#914b07;
								}
							}
						}
					}
				}
			}
		}
	}
</style>
