<template>
	<!-- infection card -->
	<Card class="infection-card" v-if="cardType === 'infection'">
		<div class="main-data">
			<h1 class="data">
				{{ formatData(venueDetails.confirmed) }}
			</h1>
			<h3 class="field-title">
				{{ !venueDetails.country ? 'Infected Globally' : 'Total Infected' }}
			</h3>
		</div>
		<div class="infection-rate">
			<h1 class="data">
				{{ getRate('InfectionRate') }}
			</h1>
			<h3 class="field-title">
				{{
					!venueDetails.country
						? 'Of Total Population'
						: "Of Country's Population"
				}}
			</h3>
		</div>
	</Card>
	<!-- recovery card -->
	<Card class="recovery-card" v-if="cardType === 'recovery'">
		<div class="main-data">
			<h3 class="data">
				{{ formatData(venueDetails.recovered) }}
			</h3>
			<h5 class="field-title">
				{{ !venueDetails.country ? 'Global Recoveries' : 'Recoveries' }}
			</h5>
		</div>
		<div class="main-data">
			<h3 class="infection-based-rate data">
				{{ getRate('RecoveryRateByInfections') }}
			</h3>
			<h5 class="field-title">
				{{
					!venueDetails.country
						? 'Of All Confirmed Cases'
						: 'Of Total Confirmed'
				}}
			</h5>
		</div>
		<div class="main-data">
			<h3 class="population-based-rate data">
				{{ getRate('RecoveryRateByPopulation') }}
			</h3>
			<h5 class="field-title">
				{{
					!venueDetails.country
						? 'Of Global Population'
						: "Of Country's Population"
				}}
			</h5>
		</div>
	</Card>
	<!-- Death Card -->
	<Card class="death-card" v-if="cardType === 'death'">
		<div class="main-data">
			<h3 class="data">
				{{ formatData(venueDetails.deaths) }}
			</h3>
			<h5 class="field-title">
				{{ !venueDetails.country ? 'Deaths Worldwide' : 'Deaths' }}
			</h5>
		</div>
		<div class="main-data">
			<h3 class="infection-based-rate data">
				{{ getRate('DeathRateByInfections') }}
			</h3>
			<h5 class="field-title">
				{{
					!venueDetails.country
						? 'Of All Confirmed Cases'
						: 'Of Total Confirmed'
				}}
			</h5>
		</div>
		<div class="main-data">
			<h3 class="population-based-rate data">
				{{ getRate('DeathRateByPopulation') }}
			</h3>
			<h5 class="field-title">
				{{
					!venueDetails.country
						? 'Of Global Population'
						: "Of Country's Population"
				}}
			</h5>
		</div>
	</Card>
</template>

<script>
import Card from './Card';

export default {
	name: 'DetailCard',
	props: {
		cardType: {
			type: String,
			required: true,
		},
		venueDetails: {
			type: Object,
			required: true,
		},
	},
	methods: {
		getRate(rateType) {
			let returnVal = 0;
			const decimalPlace = 2;

			const { confirmed, recovered, deaths, population } = this.venueDetails;

			switch (rateType) {
				case 'InfectionRate':
					returnVal = ((confirmed / population) * 100).toFixed(decimalPlace);
					break;
				case 'RecoveryRateByInfections':
					returnVal = ((recovered / confirmed) * 100).toFixed(decimalPlace);
					break;
				case 'RecoveryRateByPopulation':
					returnVal = ((recovered / population) * 100).toFixed(decimalPlace);
					break;
				case 'DeathRateByInfections':
					returnVal = ((deaths / confirmed) * 100).toFixed(decimalPlace);
					break;
				case 'DeathRateByPopulation':
					returnVal = ((deaths / population) * 100).toFixed(decimalPlace);
					break;
			}

			if (returnVal > 0.01) return returnVal + '%';
			return '---';
		},
	},
	components: {
		Card,
	},
};
</script>

<style lang="scss">
$field-title-col: #487eb0;

.card {
	width: auto;
	height: auto;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	padding-top: 20px;

	.field-title {
		color: $field-title-col;
	}
}

.infection-card {
	padding-top: 20px;
	// justify-content: space-evenly;

	&::before {
		width: 35%;
	}

	.field-title {
		font-size: 1rem;
		color: $field-title-col;
	}

	.main-data {
		.field-title {
			font-size: 1.2rem;
			color: $darkgrey;
		}

		.data {
			font-size: 2.5rem;
		}
	}

	.infection-rate .data {
		font-size: 2rem;
		font-weight: bold;
		color: #fff;
	}
}

.recovery-card {
	&::before {
		width: 80%;
	}
}

.death-card {
	&::before {
		width: 70%;
	}
}

.infection-based-rate {
	color: $blue;
}

.population-based-rate {
	color: #fff;
}

@media only screen and (min-width: 414px) {
	.infection-card {
		.main-data .data {
			font-size: 3rem;
		}

		.field-title {
			font-size: 1.2rem;
		}

		.main-data .field-title {
			font-size: 1.5rem;
		}

		.infection-rate .data {
			font-size: 2.5rem;
		}
	}

	.recovery-card,
	.death-card {
		.main-data .data {
			font-size: 1.5rem;
		}
	}
}

@media only screen and (min-width: 600px) {
	.infection-card,
	.recovery-card,
	.death-card {
		&.card::before {
			font-size: 1rem;
			padding: 5px 0;
			border-radius: 0 0 15px 15px;
			width: 35%;
		}
	}

	.infection-card {
		padding-top: 20px;
		justify-content: space-around;
		.main-data {
			.field-title {
				font-size: 2rem;
			}

			.data {
				font-size: 3.5rem;
			}
		}

		.infection-rate {
			.field-title {
				font-size: 1.5rem;
			}

			.data {
				font-size: 3rem;
			}
		}
	}

	.recovery-card,
	.death-card {
		&.card::before {
			width: 65%;
		}

		justify-content: space-evenly;

		.main-data {
			.data {
				font-size: 2rem;
			}

			.field-title {
				font-size: 1rem;
			}
		}
	}
}

@media only screen and (min-width: 768px) {
	.infection-card {
		&.card::before {
			width: 30%;
		}

		.main-data {
			.data {
				font-size: 4.5rem;
			}
		}

		.infection-rate {
			.data {
				font-size: 3.5rem;
			}

			.field-title {
				font-size: 1.5rem;
			}
		}
	}

	.recovery-card,
	.death-card {
		justify-content: space-around;
		padding-top: 30px;

		&.card::before {
			width: 50%;
		}

		.main-data {
			line-height: 2.1rem;
			.data {
				font-size: 2.2rem;
			}

			.field-title {
				font-size: 1.1rem;
			}
		}
	}
}

@media only screen and (min-width: 800px) {
	.infection-card {
		&.card::before {
			font-size: 1.5rem;
		}

		.main-data {
			.data {
				font-size: 5rem;
			}

			.field-title {
				font-size: 2.5rem;
			}
		}

		.infection-rate {
			.data {
				font-size: 4rem;
			}

			.field-title {
				font-size: 2rem;
			}
		}
	}

	.recovery-card,
	.death-card {
		padding-top: 40px;
		&.card::before {
			font-size: 1.2rem;
		}

		.main-data {
			line-height: 3rem;
			.data {
				font-size: 3rem;
			}

			.field-title {
				font-size: 1.5rem;
			}
		}
	}
}

@media only screen and (min-width: 1280px) {
	.infection-card,
	.recovery-card,
	.death-card {
		&.card::before {
			font-size: 0.875rem;
			width: 25%;
		}
	}

	.infection-card {
		// padding: 0;

		justify-content: space-around;

		.main-data {
			.data {
				font-size: 3rem;
			}

			.field-title {
				font-size: 1.5rem;
			}
		}

		.infection-rate {
			.data {
				font-size: 2.5rem;
			}

			.field-title {
				font-size: 1.5rem;
			}
		}
	}

	.recovery-card,
	.death-card {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;

		.main-data:first-child {
			padding: 0;
			grid-column-start: span 2;
			line-height: 3rem;
			.data {
				font-size: 3rem;
			}
			.field-title {
				font-size: 1.5rem;
			}
		}

		.main-data {
			line-height: 2rem;
			.data {
				font-size: 2.5rem;
			}
			.field-title {
				font-size: 1rem;
			}
		}
	}
}
</style>
