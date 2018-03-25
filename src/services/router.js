import VueRouter from 'vue-router';
Vue.use(VueRouter);

import index from '../components/index/index.vue';
import product from '../components/product/product.vue';
import knowledge from '../components/knowledge/knowledge.vue';
import aboutUs from '../components/aboutUs/aboutUs.vue';
import contactUs from '../components/contactUs/contactUs.vue';

const routes = [
	{
		path: '/',
		redirect: '/index'
	},
	{
 		path: '/index',
 		component: index
 	},
 	{
 		path: '/product',
 		component: product
 	},
	{
 		path: '/knowledge',
 		component: knowledge
 	},
	{
 		path: '/aboutUs',
 		component: aboutUs
 	},
	{
 		path: '/contactUs',
 		component: contactUs
 	},
];

export default new VueRouter({
	routes
})
