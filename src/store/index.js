import { createStore } from 'vuex';
// import demoData from './demodata';

// const cors = 'https://cors-anywhere.herokuapp.com/';
const apiEndpoint = 'https://covid-api.mmediagroup.fr/v1/cases';

export default createStore({
	state: {
		c19Status: null,
	},
	getters: {
		// this is used on the dashboard global status card
		getGlobalData: state => type => {
			const data = state.c19Status.Global.All[type];
			return data;
		},
		getVenuesData: state => {
			return Object.values(state.c19Status).filter(
				(result, i) => i && result.All.country
			);
		},
		getVenueData: state => venueName => {
			const venues = Object.values(state.c19Status).filter(
				venue => venue.All.country
			);

			venueName = venueName.split('_').join(' ');

			return venueName === 'global'
				? state.c19Status.Global.All
				: venues.find(venue => venue.All.country.toLowerCase() === venueName)
						.All;
		},
	},
	mutations: {
		SET_DATA(state, payload) {
			let data = payload;

			// deisraelization
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
			// const appInProduction = false;
			// if (appInProduction) {
			fetch(apiEndpoint)
				.then(res => res.json())
				.then(data => context.commit('SET_DATA', data))
				.catch(err => console.log(err));
			// } else {
			// 	context.commit('SET_DATA', demoData);
			// }
		},
	},
	modules: {},
});
