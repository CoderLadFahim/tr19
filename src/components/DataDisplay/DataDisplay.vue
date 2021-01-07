<template>
	<div class="data-display">
		<div class="indicators">
			<p>
				Showing:
				<span class="active-filter">
					{{ activeFilter.name }}
				</span>
			</p>

			<div class="venue-data indicator">
				<p class="country">Country</p>
				<ul class="numbers">
					<li class="infected">Infected</li>
					<li class="recovered">Recovered</li>
					<li class="deaths">Deaths</li>
				</ul>
			</div>
		</div>

		<ul class="venues">
			<li
				v-for="c19Data in c19All"
				:key="c19Data.All.country"
				class="venue-data"
			>
				<p class="country">
					<img
						v-if="c19Data.All.abbreviation"
						:src="
							`https://flagcdn.com/16x12/${c19Data.All.abbreviation.toLowerCase()}.png`
						"
						:alt="c19Data.All.country"
					/>
					{{ c19Data.All.country }}
				</p>
				<ul class="numbers">
					<li class="infected data">
						{{ c19Data.All.confirmed }}
					</li>
					<li class="recovered data">
						{{ c19Data.All.recovered }}
					</li>
					<li class="deaths data">
						{{ c19Data.All.deaths }}
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: 'DataDisplay',
	props: {
		activeFilter: {
			type: Object,
			required: true,
		},
	},
	computed: {
		...mapGetters({
			c19All: 'getCountryResults',
		}),
	},
};
</script>

<style lang="scss" scoped>
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
