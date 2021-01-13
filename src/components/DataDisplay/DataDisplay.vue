<template>
	<div class="data-display">
		<div class="indicators">
			<p>
				Showing:
				<span class="active-filter">
					{{ activeFilter.name }}
				</span>
			</p>
			<OverallDataCard />
		</div>

		<div class="venues">
			<OverallDataCard
				v-for="c19Data in venuesData"
				v-show="
					c19Data.All.country.toLowerCase().includes(searchTerm.toLowerCase())
				"
				:key="c19Data.All.country"
				:c19Data="c19Data.All"
				@click="redirect(c19Data.All)"
			/>
		</div>
	</div>
</template>

<script>
import OverallDataCard from './OverallDataCard';
import { mapGetters } from 'vuex';

export default {
	name: 'DataDisplay',
	props: {
		activeFilter: {
			type: Object,
			required: true,
		},
		searchTerm: {
			type: String,
			required: false,
		},
	},
	data() {
		return {
			activeFilterRates: [],
		};
	},
	components: {
		OverallDataCard,
	},
	methods: {
		redirect(country) {
			let { country: countryName } = country;
			countryName = countryName
				.toLowerCase()
				.split(' ')
				.join('_');

			this.$router.push({
				name: 'Details',
				params: {
					country_name: countryName,
				},
			});
		},
	},
	computed: {
		...mapGetters({
			c19All: 'getVenuesData',
		}),
		venuesData() {
			return this.c19All.sort(this.activeFilter.compareMethod);
		},
	},
};
</script>

<style lang="scss" scoped>
.data-display {
	::-webkit-scrollbar {
		display: none;
	}
	// border: 0.1px solid #fff;
	.indicators p {
		font-size: 0.725rem;
	}

	.active-filter {
		color: $purple;
	}

	.venues {
		margin-top: 10px;
		// border: 0.1px solid goldenrod;
		height: 48vh;
		overflow-y: scroll;
		display: flex;
		flex-direction: column;
		justify-content: start;
	}
}

@media only screen and (min-width: 360px) {
	.data-display .venues {
		height: 45vh;
	}
}

@media only screen and (min-width: 375px) {
	.data-display .venues {
		height: 45.5vh;
	}
}

@media only screen and (min-width: 414px) {
	.data-display .venues {
		height: 48vh;
	}
}

@media only screen and (min-width: 600px) {
	.data-display .venues {
		height: 50vh;
	}
}

@media only screen and (min-width: 768px) {
	.data-display {
		.indicators p {
			font-size: 1rem;
		}

		.venues {
			height: 47vh;
		}
	}
}

@media only screen and (min-width: 800px) {
	.data-display .venues {
		height: 52vh;
	}
}

@media only screen and (min-width: 1024px) {
	.data-display .venues {
		height: 50vh;
	}
}

@media only screen and (min-width: 1280px) {
	.data-display .venues {
		height: 46vh;
	}
}

@media only screen and (min-width: 1280px) and (max-height: 720px) {
	.data-display .venues {
		height: 43vh;
	}
}

@media only screen and (min-width: 1366px) {
	.data-display .venues {
		height: 40vh;
	}
}

@media only screen and (min-width: 1440px) {
	.data-display .venues {
		height: 44vh;
	}
}

@media only screen and (min-width: 1536px) {
	.data-display .venues {
		height: 43vh;
	}
}

@media only screen and (min-width: 1920px) {
	.data-display .venues {
		height: 47vh;
	}
}

@media only screen and (min-width: 1366px) and (max-height: 625px) {
	.data-display .venues {
		height: 49vh;
	}
}
</style>
