export default {
	methods: {
		formatData(num) {
			return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		},
	},
};
