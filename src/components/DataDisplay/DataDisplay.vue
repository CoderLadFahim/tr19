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
				v-for="(c19Data, i) in venuesData"
				v-show="
					c19Data.All.country.toLowerCase().includes(searchTerm.toLowerCase())
				"
				:key="c19Data.All.country"
				:c19Data="c19Data.All"
				:position="i + 1"
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
			let { country: venueName } = country;
			venueName = venueName
				.toLowerCase()
				.split(' ')
				.join('_');

			this.$router.push({
				name: 'Details',
				params: {
					venue_name: venueName,
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

@media only screen and (min-height: 640px) {
	.data-display .venues {
		height: 46vh;
	}
}

@media only screen and (min-height: 667px) {
	.data-display .venues {
		height: 47vh;
	}
}

@media only screen and (min-height: 736px) {
	.data-display .venues {
		height: 49.5vh;
	}
}

@media only screen and (min-height: 760px) {
	.data-display .venues {
		height: 50vh;
	}
}

@media only screen and (min-height: 780px) {
	.data-display .venues {
		height: 50.5vh;
	}
}

@media only screen and (min-height: 896px) {
	.data-display .venues {
		height: 53vh;
	}
}

@media only screen and (min-height: 962px) {
	.data-display .venues {
		height: 50.5vh;
	}
}

@media only screen and (min-height: 1024px) {
	.data-display .venues {
		height: 51.5vh;
	}
}

@media only screen and (max-width: 768px) and (min-height: 1024px) {
	.data-display .venues {
		height: 49vh;
	}
}

@media only screen and (min-height: 1280px) {
	.data-display .venues {
		height: 53.5vh;
	}
}

@media only screen and (max-width: 1280px) and (min-height: 625px) {
	.data-display .venues {
		height: 48.5vh;
	}
}
</style>
