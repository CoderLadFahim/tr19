<template>
	<div class="data-display">
		<div class="indicators">
			<p>
				Showing:
				<span class="active-filter">
					{{ activeFilter.name }}
				</span>
			</p>
			<DataBar :displayType="activeFilter.ID" />
		</div>

		<div class="venues">
			<DataBar
				v-for="(c19Data, i) in venuesData"
				v-show="
					c19Data.All.country.toLowerCase().includes(searchTerm.toLowerCase())
				"
				:key="c19Data.All.country"
				:c19Data="c19Data.All"
				:position="i + 1"
				:displayType="activeFilter.ID"
				@click="redirect(c19Data.All)"
			/>
		</div>
	</div>
</template>

<script>
import OverallDataCard from './OverallDataCard';
import DataBar from './DataBar';
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
			// activeFilterRates: [],
		};
	},
	components: {
		OverallDataCard,
		DataBar,
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
		height: 46vh;
		overflow-y: scroll;
		display: flex;
		flex-direction: column;
		justify-content: start;
	}
}

@media only screen and (min-height: 667px) {
	.data-display .venues {
		height: 47vh;
	}
}

@media only screen and (min-height: 720px) {
	.data-display .venues {
		height: 46vh;
	}
}

@media only screen and (min-height: 768px) {
	.data-display .venues {
		height: 43vh;
	}
}

@media only screen and (min-height: 780px) {
	.data-display .venues {
		height: 47vh;
	}
}

@media only screen and (min-height: 800px) {
	.data-display .venues {
		height: 48.5vh;
	}
}

@media only screen and (min-height: 864px) {
	.data-display .venues {
		height: 45vh;
	}
}

@media only screen and (min-height: 896px) {
	.data-display .venues {
		height: 53vh;
	}
}

@media only screen and (min-height: 900px) {
	.data-display .venues {
		height: 46vh;
	}
}

@media only screen and (min-height: 962px) {
	.data-display .venues {
		height: 50.5vh;
	}
}

@media only screen and (min-height: 1024px) {
	.data-display .venues {
		height: 49vh;
	}
}

@media only screen and (min-height: 1280px) {
	.data-display .venues {
		height: 53.5vh;
	}
}

@media only screen and (min-height: 1366px) {
	.data-display .venues {
		height: 51vh;
	}
}

@media only screen and (max-width: 1366px) and (max-height: 625px) {
	.data-display .venues {
		height: 50vh;
	}
}
</style>
