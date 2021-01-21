export default {
	methods: {
		formatData(num = 123) {
			return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		},
		getRate(rateType, data) {
			let returnVal = 0;
			const decimalPlace = 2;

			const { confirmed, recovered, deaths, population } = data;

			switch (rateType) {
				case 'InfectionRate':
					returnVal = (confirmed / population) * 100;
					break;
				case 'RecoveryRateByInfections':
					returnVal = (recovered / confirmed) * 100;
					break;
				case 'RecoveryRateByPopulation':
					returnVal = (recovered / population) * 100;
					break;
				case 'DeathRateByInfections':
					returnVal = (deaths / confirmed) * 100;
					break;
				case 'DeathRateByPopulation':
					returnVal = (deaths / population) * 100;
					break;
			}

			if (returnVal > 0.01) {
				return returnVal.toFixed(decimalPlace) + '%';
			} else {
				return '---';
			}
		},
	},
};
