<template>
	<div class="guideline">
		<h1>Remain Indoors</h1>
		<p>
			DO NOT LEAVE YOUR HOUSE UNLESS IT’S AN ABSOLUTE NECESSITY
		</p>
	</div>
	<div class="interface">
		<h4 class="interface-title">Dashboard:</h4>
		<div class="interface-menu">
			<div class="filter">
				<div class="filter-menu">
					<h5>Sort By</h5>
					<div class="arrow-down"></div>
				</div>
				<ul class="filter-options">
					<li
						v-for="filter in filters"
						:key="filter.ID"
						:data-filterID="filter.ID"
						class="option"
						:class="{ active: filter.ID === activeFilter }"
						@click="activeFilter = filter.ID"
					>
						{{ filter.name }}
					</li>
				</ul>
			</div>
			<input type="text" class="search-bar" placeholder="Search Country" />
		</div>

		<div class="result-display">
			<div class="result-data">
				<h5 class="filter-type">
					Sorting by:
					<span class="type">
						{{ getActiveFilterName(activeFilter) }}
					</span>
				</h5>

				<div class="result-info-bar result-style">
					<h4 class="country">Country</h4>
					<ul class="results">
						<li class="infected">Infected</li>
						<li class="recovered">Recovered</li>
						<li class="deaths">Deaths</li>
					</ul>
				</div>
			</div>

			<ul class="country-results">
				<li
					class="result-style"
					v-for="result in countryResults"
					:key="result.country"
				>
					<h4 :class="{ adjustFont: result.country.length >= 19 }">
						<img
							v-if="result.abbreviation"
							:src="
								`https://flagcdn.com/16x12/${result.abbreviation.toLowerCase()}.png`
							"
							:alt="result.country"
						/>

						{{ result.country }}
					</h4>

					<ul class="results">
						<li class="infected data">{{ result.confirmed }}</li>
						<li class="recovered data">{{ result.recovered }}</li>
						<li class="deaths data">{{ result.deaths }}</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
	<div class="guideline">
		<h1>Wear Masks</h1>
		<p>
			WEAR A SURGICAL MASK IF YOU MUST LEAVE YOUR HOME
		</p>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: 'Interface',
	data: () => ({
		activeFilter: 'IRD',
		dataReady: false,
	}),
	methods: {
		getActiveFilterName(filterID) {
			return this.filters.find(filter => filter.ID === filterID).name;
		},
	},
	computed: {
		...mapGetters({ results: 'getCountryResults', filters: 'getFilters' }),
		countryResults() {
			return this.results.map((result, i) => result.All);
		},
	},
	mounted() {
		console.log();
	},
};
</script>

<style lang="scss" scoped>
.guideline {
	display: none;
}

.adjustFont {
	font-size: 0.6rem !important;
}

.interface {
	@include dimen(84vw, 66.5vh);
	// border: 1px solid #fff;
	margin-top: 7px;

	.interface-title {
		font-size: 0.875rem;
		margin-bottom: 15px;
	}

	.interface-menu {
		display: flex;
		justify-content: space-between;
		align-items: start;
		margin-bottom: 20px;
	}

	.filter {
		width: 30%;
		border-radius: 10px;
		text-align: center;
		position: relative;

		.filter-menu {
			border-radius: 10px;
			background-color: #fff;
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			min-width: 100%;
			padding: 5px 0;
			color: $purple;

			.arrow-down {
				@include dimen(0);
				border: {
					left: 6px solid transparent;
					right: 6px solid transparent;
					top: 6px solid $purple;
				}
			}
		}

		&:hover {
			.filter-options {
				opacity: 1;
				pointer-events: auto;
			}
		}

		.filter-options {
			position: absolute;
			top: 35px;
			background-color: #fff;
			color: $purple;
			list-style: none;
			width: 50vw;
			border-radius: 10px;
			overflow: hidden;
			// margin-top: 10px;
			opacity: 0;
			pointer-events: none;

			.option {
				font-size: 0.65rem;
				padding: 10px;
				text-align: left;
				&:hover {
					background-color: #f1f1f1;
					cursor: pointer;
				}

				&.active {
					background-color: $purple;
					color: #fff;
				}
			}
		}
	}

	.search-bar {
		color: $grey;
		background-color: $lightnavy;
		border-radius: 10px;
		border: none;
		font-family: $regular-font;
		font-weight: bold;
		font-size: 13.28px;
		padding: 5px 10px;
		width: 65%;

		&:focus {
			outline: none;
		}
	}

	.result-display {
		.result-data {
			display: flex;
			flex-direction: column;
			margin-bottom: 10px;
		}

		.filter-type {
			font-size: 0.7rem;
			margin-bottom: 3px;

			.type {
				font-size: 0.75rem;
				color: $purple;
				white-space: nowrap;
			}
		}

		.result-info-bar {
			background-color: $lightnavy;

			.country {
				color: $grey;
				font-size: 0.75rem;
			}
		}

		.country-results {
			// border: 1px solid #fff;
			max-height: 45vh;
			overflow: scroll;
		}

		.result-style {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 7px 10px;
			font-size: 0.7rem;
			color: #fff;
			text-align: left;

			& > * {
				// border: 0.1px dotted $grey;
			}

			h4 {
				display: flex;
				align-items: center;
				font-size: 0.875rem;
				width: 32%;

				img {
					margin-right: 8px;
				}
			}

			&:nth-child(odd) {
				background-color: $oddchild-col;
			}

			&:nth-child(even) {
				background-color: $evenchild-col;
			}

			.results {
				display: flex;
				width: 53%;
				align-items: center;
				justify-content: space-between;
				li {
					list-style: none;
					font-size: 0.5625rem;
					font-weight: lighter;
					text-align: right;
				}

				.data {
					font-weight: bold;
					text-align: right;
				}

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
	}
}
</style>
