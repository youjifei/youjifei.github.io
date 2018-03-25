<template>
	<div>
		<uiHeader></uiHeader>
		<uiBanner></uiBanner>
		<router-view></router-view>
		<uiFooter></uiFooter>
	</div>
</template>
<script type="text/javascript">
	import uiHeader from 'uiHeader';
	import uiFooter from 'uiFooter';
	import uiBanner from 'uiBanner';
	export default{
		components:{
			uiHeader,
			uiFooter,
			uiBanner,
		},
		mounted(){
			this.$nextTick(()=>{
				// 终端检测
				let browser={
	              	versions:function(){
	                	let u = navigator.userAgent, app = navigator.appVersion;
		                return {
		                  	mobile: !!u.match(/AppleWebKit.*Mobile.*/), 		//是否为移动终端
		                };
			        }(),
              		language:(navigator.browserLanguage || navigator.language).toLowerCase()
        		}
        		let agent = browser.versions.mobile
        		this.$store.commit('setAgentState',agent);
			})
		}
	}
</script>
