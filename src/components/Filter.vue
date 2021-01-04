<template>
	<div class="filter">
		<div class="filter-menu" @click="hideShowFilters">
			<h5>Sort By</h5>
			<div class="arrow-down"></div>
		</div>
		<ul class="filter-options hide" ref="filters">
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
	data: () => ({
		filters: [
			{ name: 'Infections, Recoveries & Deaths', ID: 'IRD' },
			{ name: 'Most Infected', ID: 'MI' },
			{ name: 'Most Recovered', ID: 'MR' },
			{ name: 'Most Deaths', ID: 'MD' },
			{ name: 'Infection Rate', ID: 'IR' },
			{ name: 'Recovery Rate by Total Infected', ID: 'RRI' },
			{ name: 'Recovery Rate by Population', ID: 'RRP' },
			{ name: 'Death Rate by Total Infected', ID: 'DRI' },
			{ name: 'Death Rate by Population', ID: 'DRP' },
		],
		activeFilter: 'IRD',
	}),
	methods: {
		hideShowFilters() {
			const filters = this.$refs.filters;
			Array.from(filters.classList).includes('hide')
				? filters.classList.remove('hide')
				: filters.classList.add('hide');
		},
		handleClick($event, filterID) {
			this.activeFilter = filterID;
			this.emitFilterType();

			setTimeout(() => {
				this.hideShowFilters();
			}, 100);
		},
		emitFilterType() {
			this.$emit('filter-change', this.activeFilter);
		},
	},
	mounted() {
		this.emitFilterType();
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

@media only screen and (max-height: 625px) {
	.filter {
		width: 15%;

		.filter-menu h5 {
			font-size: 1rem;
		}
	}
}
</style>
