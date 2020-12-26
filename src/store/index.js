import { createStore } from 'vuex';
import demoData from './demodata';

const cors = 'https://cors-anywhere.herokuapp.com/';
const apiEndpoint = 'https://covid-api.mmediagroup.fr/v1/cases';

export default createStore({
	state: {
		c19Status: null,
	},
	getters: {},
	mutations: {
		SET_DATA(state, payload) {
			state.c19Status = payload;
		},
	},
	actions: {
		fetchData(context) {
			const appInProduction = false;
			if (appInProduction) {
				fetch(cors + apiEndpoint)
					.then(res => res.json())
					.then(data => context.commit('SET_DATA', data))
					.catch(err => console.log(err));
			} else {
				context.commit('SET_DATA', demoData);
			}
		},
	},
	modules: {},
});
