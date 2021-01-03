<template>
	<Guideline
		:msg="{
			title: 'Remain Indoors',
			desc: 'Do not leave your house unless it\'s an absolute necessity',
		}"
	/>
	<div class="interface">
		<h4 class="interface-title">Dashboard:</h4>
		<div class="interface-menu">
			<Filter @filter-change="handleFilterChange" />
			<input type="text" class="search-bar" placeholder="Search Country" />
		</div>

		<div class="results"></div>
	</div>

	<Guideline
		:msg="{
			title: 'Wear Masks',
			desc: 'Wear a surgical mask if you must leave your home',
		}"
	/>
</template>

<script>
import { mapGetters } from 'vuex';
import Guideline from '@/components/Guideline';
import Filter from '@/components/Filter';

export default {
	name: 'Interface',
	components: {
		Guideline,
		Filter,
	},
	data: () => ({
		filterMethod: '',
	}),
	computed: {
		...mapGetters({ results: 'getCountryResults' }),
		countryResults() {
			return this.results.map((result, i) => result.All);
		},
	},
	methods: {
		handleFilterChange(newFilter) {
			this.filterMethod = newFilter;
		},
	},
};
</script>

<style lang="scss" scoped>
.interface {
	@include dimen(84vw, 66.5vh);
	// border: 1px solid #fff;
	margin-top: 15px;
	overflow: scroll;

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

	.search-bar {
		color: $purple;
		background-color: $lightnavy;
		border-radius: 10px;
		border: none;
		font-family: $regular-font;
		font-weight: bold;
		font-size: 0.83rem;
		padding: 5px 10px;
		width: 65%;

		&:focus {
			outline: none;
		}
	}
}

@media only screen and (min-width: 600px) {
	.interface {
		margin-top: 20px;

		.interface-title {
			font-size: 1rem;
		}

		.search-bar {
			font-size: 1.2rem;
			padding: 7px 10px;
		}
	}
}

@media only screen and (min-width: 768px) {
	.interface {
		margin-top: 30px;
		width: 90vw;
	}
}

@media only screen and (min-width: 1024px) {
	.interface {
		margin-top: 60px;

		.interface-title {
			font-size: 1.5rem;
		}

		.search-bar {
			font-size: 1.7rem;
			padding: 10px 15px;
		}
	}
}
</style>
