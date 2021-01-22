<template>
	<div class="venue-data indicator" v-if="!c19Data">
		<p class="rank">Rank</p>
		<p class="country">Country</p>
		<p
			class="data"
			:class="{
				infected: displayType === 'MI' || displayType === 'IR',
				recovered:
					displayType === 'MR' ||
					displayType === 'RRI' ||
					displayType === 'RRP',
				deaths:
					displayType === 'MD' ||
					displayType === 'DRI' ||
					displayType === 'DRP',
			}"
		>
			{{ dataIndicator[displayType] }}
		</p>
	</div>

	<div v-else class="venue-data venues-data">
		<p class="rank">{{ position }}.</p>

		<p class="country">
			<img
				v-if="c19Data.abbreviation"
				:src="
					`https://flagcdn.com/16x12/${c19Data.abbreviation.toLowerCase()}.png`
				"
				:alt="c19Data.country"
			/>
			{{ c19Data.country }}
		</p>

		<p
			class="data"
			:class="{
				infected: displayType === 'MI' || displayType === 'IR',
				recovered:
					displayType === 'MR' ||
					displayType === 'RRI' ||
					displayType === 'RRP',
				deaths:
					displayType === 'MD' ||
					displayType === 'DRI' ||
					displayType === 'DRP',
			}"
		>
			{{ formatData(respectiveData[displayType]) }}
		</p>
	</div>
</template>

<script>
export default {
	name: 'DataBar',
	props: {
		c19Data: {
			type: Object,
		},
		position: {
			type: Number,
		},
		displayType: {
			type: String,
		},
	},
	data() {
		return {
			dataIndicator: {
				MI: 'Total Infected',
				IR: 'Infection Rates',
				MD: 'Total Deaths',
				MR: 'Total Recovered',
				RRI: 'Recovery Rates',
				RRP: 'Recovery Rates',
				DRI: 'Death Rates',
				DRP: 'Death Rates',
			},
		};
	},
	computed: {
		respectiveData() {
			return {
				MI: this.c19Data.confirmed,
				IR: this.getRate('InfectionRate', this.c19Data),
				MD: this.c19Data.deaths,
				MR: this.c19Data.recovered,
				RRI: this.getRate('RecoveryRateByInfections', this.c19Data),
				RRP: this.getRate('RecoveryRateByPopulation', this.c19Data),
				DRI: this.getRate('DeathRateByInfections', this.c19Data),
				DRP: this.getRate('DeathRateByPopulation', this.c19Data),
			};
		},
	},
};
</script>

<style lang="scss" scoped>
.infected {
	color: $yellow;
}
.recovered {
	color: $green;
}
.deaths {
	color: $red;
}

.venue-data.indicator {
	min-height: 30px;
	margin-top: 5px;
	background-color: $lightnavy;

	p {
		font-size: 0.75rem;
		font-weight: bold;
	}

	.country {
		min-height: 0;
		// border: 1px solid #fff;
		padding-left: 5px;
	}
	.data {
		font-size: 0.65rem;
	}
}

.venue-data {
	min-height: 40px;
	font-size: 0.75rem;
	color: $purple;
	display: grid;
	grid-template-columns: 1fr 4fr 2.5fr;

	& > * {
		@include centralize();
		border: 1px solid $gradient-start;
	}

	&:nth-child(odd) {
		background-color: $oddchild-col;
	}
	&:nth-child(even) {
		background-color: $lightnavy;
	}

	.rank {
		// @include centralize();
		font-weight: bolder;
		font-size: 1rem;
	}

	.country {
		display: flex;
		align-items: center;
		color: #fff;
		img {
			margin: 0 10px;
		}
		flex: 1;
		// margin-left: 10px;
	}

	.data {
		font-size: 0.9rem;
	}

	&.venues-data:hover {
		& > * {
			border: none;
		}
		background-color: $navyblue;
		border-left: 2px solid $purple;
		border-right: 2px solid $purple;
		cursor: pointer;
	}
}

@media only screen and (min-width: 600px) {
	.venue-data.indicator {
		.rank {
			font-size: 0.85rem;
		}

		.country {
			font-size: 0.9rem;
			padding-left: 14px;
		}

		.data {
			font-size: 0.8rem;
		}
	}

	.venue-data {
		.rank {
			font-size: 1rem;
		}

		.country {
			font-size: 1rem;
			img {
				margin: 0 15px;
			}
		}

		.data {
			font-size: 1.1rem;
		}
	}
}
</style>
