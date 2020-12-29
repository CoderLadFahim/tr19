import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Details from '../views/Details.vue';

const routes = [
	{
		path: '/',
		name: 'Dashboard',
		component: Dashboard,
	},
	{
		path: '/details',
		name: 'Details',
		component: Details,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
