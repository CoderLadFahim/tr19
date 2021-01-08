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
				v-for="c19Data in c19All"
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
			c19All: 'getCountryResults',
		}),
	},
};
</script>

<style lang="scss">
.data-display {
	// border: 0.1px solid #fff;
	.indicators p {
		font-size: 0.625rem;
	}

	.active-filter {
		color: $purple;
	}

	.venues {
		margin-top: 10px;
		border: 0.1px solid goldenrod;
		height: 44.9vh;
		overflow-y: scroll;
		display: flex;
		flex-direction: column;
		justify-content: start;
	}
}

.venue-data.indicator {
	min-height: 30px;

	li {
		font-size: 0.56rem;
	}

	background-color: $lightnavy;
}

.venue-data {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 7px;
	min-height: 40px;
	color: #fff;
	font-size: 0.75rem;

	.country {
		display: flex;
		align-items: center;
	}

	img {
		margin-right: 10px;
	}

	& > * {
		flex-basis: 50%;
	}

	&:nth-child(odd) {
		background-color: $oddchild-col;
	}
	&:nth-child(even) {
		background-color: $evenchild-col;
	}

	.numbers {
		display: flex;
		justify-content: space-between;
		list-style: none;
		font-size: 0.6rem;

		.infected {
			color: $yellow;
		}
		.recovered {
			color: $green;
		}
		.deaths {
			color: $red;
		}
	}
}
</style>
