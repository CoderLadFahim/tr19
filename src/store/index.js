import { createStore } from 'vuex';
import demoData from './demodata';

const cors = 'https://cors-anywhere.herokuapp.com/';
const apiEndpoint = 'https://covid-api.mmediagroup.fr/v1/cases';

const formatData = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export default createStore({
	state: {
		c19Status: null,
	},
	getters: {
		// this is used on the dashboard global status card
		getGlobalData: state => type => {
			const data = state.c19Status.Global.All[type];
			return formatData(data);
		},
		getCountryResults: state => {
			return Object.values(state.c19Status)
				.filter((result, i) => i && result.All.country)
				.map(result => {
					const resultData = { ...result };
					for (const prop in resultData['All'])
						typeof resultData['All'][prop] === 'number'
							? (resultData['All'][prop] = formatData(resultData['All'][prop]))
							: resultData['All'][prop];

					return resultData;
				});
		},
	},
	mutations: {
		SET_DATA(state, payload) {
			let data = payload;
			const { Israel: Palestine } = data;

			delete data.Israel;

			Palestine.All.country = 'Palestine';
			Palestine.All.abbreviation = 'PS';

			data = { ...data, Palestine };
			state.c19Status = data;
		},
	},
	actions: {
		fetchData(context) {
			const appInProduction = true;
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
