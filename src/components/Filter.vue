<template>
	<div class="filter">
		<div class="filter-menu" @click="toggleFilter">
			<h5>Sort By</h5>
			<div class="arrow-down"></div>
		</div>
		<ul class="filter-options" :class="{ hide: filterHide }" ref="filters">
			<li
				v-for="filter in filters"
				:key="filter.ID"
				:class="{ active: activeFilter === filter.ID }"
				@click="handleClick($event, filter.ID)"
				class="option"
			>
				{{ filter.name }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Filter',
	data() {
		return {
			filterHide: true,
			activeFilter: 'MI',
			filters: [
				// {
				// 	name: 'Infections, Recoveries & Deaths',
				// 	ID: 'IRD',
				// 	compareMethod(a, b) {
				// 		return (
				// 			b.All.confirmed +
				// 			b.All.deaths +
				// 			b.All.recovered -
				// 			(a.All.confirmed + a.All.deaths + a.All.recovered)
				// 		);
				// 	},
				// },
				{
					name: 'Most Infected',
					ID: 'MI',
					compareMethod(a, b) {
						return b.All.confirmed - a.All.confirmed;
					},
				},
				{
					name: 'Most Recovered',
					ID: 'MR',
					compareMethod(a, b) {
						return b.All.recovered - a.All.recovered;
					},
				},
				{
					name: 'Most Deaths',
					ID: 'MD',
					compareMethod(a, b) {
						return b.All.deaths - a.All.deaths;
					},
				},
				{
					name: 'Infection Rates',
					ID: 'IR',
					compareMethod(a, b) {
						return (
							b.All.confirmed / b.All.population -
							a.All.confirmed / a.All.population
						);
					},
				},
				{
					name: 'Recovery Rates by Total Infected',
					ID: 'RRI',
					compareMethod(a, b) {
						return (
							b.All.recovered / b.All.confirmed -
							a.All.recovered / a.All.confirmed
						);
					},
				},
				{
					name: 'Recovery Rates by Population',
					ID: 'RRP',
					compareMethod(a, b) {
						return (
							b.All.recovered / b.All.population -
							a.All.recovered / a.All.population
						);
					},
				},
				{
					name: 'Death Rates by Total Infected',
					ID: 'DRI',
					compareMethod(a, b) {
						return (
							b.All.deaths / b.All.confirmed - a.All.deaths / a.All.confirmed
						);
					},
				},
				{
					name: 'Death Rates by Population',
					ID: 'DRP',
					compareMethod(a, b) {
						return (
							b.All.deaths / b.All.population - a.All.deaths / a.All.population
						);
					},
				},
			],
		};
	},
	methods: {
		toggleFilter() {
			this.filterHide ? (this.filterHide = false) : (this.filterHide = true);
		},
		handleClick($event, filterID) {
			this.activeFilter = filterID;
			this.emitFilterType();

			setTimeout(() => {
				this.toggleFilter();
			}, 100);
		},
		emitFilterType() {
			this.$emit(
				'filter-change',
				this.filters.find(filter => filter.ID === this.activeFilter)
			);
		},
		// this method hides the filter when user clicks on anywhere but the filter
		hideFilter(e) {
			const classesToAvoid = [
				...Array.from(e.target.classList),
				...Array.from(e.target.parentElement.classList),
			];

			if (classesToAvoid.some(htmlClass => !htmlClass.includes('filter'))) {
				setTimeout(() => {
					this.filterHide = true;
				}, 100);
			}
		},
	},
	mounted() {
		this.emitFilterType();
		document.body.addEventListener('click', e => {
			this.hideFilter(e);
		});
	},
};
</script>

<style lang="scss" scoped>
.hide {
	opacity: 0;
	pointer-events: none;
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
		cursor: pointer;

		.arrow-down {
			@include dimen(0);
			border: {
				left: 6px solid transparent;
				right: 6px solid transparent;
				top: 6px solid $purple;
			}
		}

		h5,
		.arrow-down {
			// this is essential for 'this.hideMenu()' to work
			pointer-events: none;
		}
	}

	.filter-options {
		position: absolute;
		top: 35px;
		background-color: #fff;
		color: $purple;
		list-style: none;
		width: 60vw;
		border-radius: 10px;
		overflow: hidden;
		z-index: 99;
		transition: 50ms;

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

@media only screen and (min-width: 600px) {
	.filter {
		.filter-menu {
			padding: 7px 0;

			h5 {
				font-size: 1.2rem;
			}

			.arrow-down {
				border-width: 10px;
			}
		}

		.filter-options {
			top: 55px;

			.option {
				font-size: 1rem;
				padding: 15px;
			}
		}
	}
}

@media only screen and (min-width: 1024px) {
	.filter {
		.filter-menu {
			padding: 10px 0;

			h5 {
				font-size: 1.7rem;
			}

			.arrow-down {
				border-width: 15px;
			}
		}

		.filter-options {
			top: 80px;

			.option {
				font-size: 1.5rem;
				padding: 20px;
			}
		}
	}
}

@media only screen and (min-width: 1280px) {
	.filter {
		width: 20%;
		.filter-menu {
			padding: 5px 0;
			h5 {
				font-size: 1rem;
			}

			.arrow-down {
				border-width: 8px;
			}
		}

		.filter-options {
			top: 45px;
			width: 20vw;
		}

		.filter-options .option {
			font-size: 0.8rem;
			padding: 10px;
		}
	}
}

@media only screen and (min-width: 1440px) {
	.filter {
		width: 15%;
	}
}

@media only screen and (min-width: 1600px) {
	.filter {
		// width: 20%;

		.filter-menu {
			padding: 6px 0;

			h5 {
				font-size: 1.2rem;
			}
		}

		.filter-options {
			top: 55px;

			.option {
				font-size: 1rem;
			}
		}
	}
}

@media only screen and (min-width: 1920px) {
	.filter .filter-options .option {
		padding: 15px;
	}
}

@media only screen and (min-width: 1366px) and (max-height: 625px) {
	.filter {
		width: 15%;

		.filter-menu h5 {
			font-size: 1rem;
		}
	}
}
</style>
