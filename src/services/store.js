import Vuex from 'vuex';

Vue.use(Vuex);

/*
	state 为状态容器，存储所有全局状态
*/
const state = {
	isPhone:false,						//  终端检测
	productNum:0,						// 产品页显示哪个品种详情
	knowledgeNum:0,						// 资讯页显示第几条详情
}


/*
	mutations 为操作状态变化的动作容器，所有操作都在这里面注册、完成
*/
const mutations = {
	setProductNum(state,num){
		state.productNum = num;
	},
	setKnowledgeNum(state,num) {		// 更新'出借记录'展示列
      	state.knowledgeNum = num;
    },
	setAgentState(state,type){
		state.isPhone = type;
	}
}
export default new Vuex.Store({
	state,
	mutations,
})

/*
	应用示例
	（1）
		- store.commit('addCount')  	组件中提交不带参数的 mutations
		- computed:{					组件中监听 state 的变化（计算属性中）
			count:function(){
				return this.$store.state.count;
			}
		}
		- addCount (state) {			store.js 内接收不带参数的 mutations
      			state.count++ ;
    	  },
   	（2）
   		- store.commit('setUserInfo'，{'name':'jack','age':'18'})   组件中提交带参数的 mutations
		- setUserInfo (state,param) {								store.js 内接收带参数的 mutations
      		 state.userInfo = param ;
    	  },
*/
