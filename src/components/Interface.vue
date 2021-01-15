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
			<input
				type="text"
				v-model="searchTerm"
				class="search-bar"
				placeholder="Search Country"
			/>
		</div>

		<DataDisplay :activeFilter="filterMethod" :searchTerm="searchTerm" />
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
import DataDisplay from '@/components/DataDisplay/DataDisplay';

export default {
	name: 'Interface',
	components: {
		Guideline,
		Filter,
		DataDisplay,
	},
	data() {
		return {
			filterMethod: {},
			searchTerm: '',
		};
	},
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
	@include dimen(84vw, 65vh);
	// border: 0.1px solid #fff;
	margin-top: 15px;

	.interface-title {
		font-size: 0.875rem;
		margin-bottom: 5px;
	}

	.interface-menu {
		display: flex;
		justify-content: space-between;
		align-items: start;
		margin-bottom: 15px;
	}

	.search-bar {
		color: #fff;
		background-color: $lightnavy;
		border-radius: 10px;
		border: none;
		font-family: $regular-font;
		font-weight: 300;
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
		height: 68vh;

		.interface-title {
			font-size: 1rem;
			margin-bottom: 10px;
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

		.interface-menu {
			margin-bottom: 30px;
		}
	}
}

@media only screen and (min-width: 1024px) {
	.interface {
		margin-top: 30px;

		.interface-title {
			font-size: 1.5rem;
		}

		.search-bar {
			font-size: 1.7rem;
			padding: 10px 15px;
		}
	}
}

@media only screen and (min-width: 1280px) {
	.interface {
		@include dimen(50vw, 70vh);
		margin-top: 30px;
		$margin: 30px;
		margin: {
			left: $margin;
			right: $margin;
		}
		overflow: hidden;

		.interface-title {
			display: none;
		}

		.search-bar {
			font-size: 1rem;
			padding: 5px 10px;
			width: 65%;
		}
	}
}

@media only screen and (min-width: 1280px) {
	.interface .search-bar {
		font-size: 1.2rem;
	}
}

@media only screen and (min-width: 1366px) and (max-height: 625px) {
	.interface {
		margin-top: 20px;
	}

	.interface .search-bar {
		font-size: 1rem;
	}
}
</style>
