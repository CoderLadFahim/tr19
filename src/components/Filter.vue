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
				class="option"
				:class="{ active: activeFilter === filter.ID }"
				@click="handleClick($event, filter.ID)"
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
</style>
