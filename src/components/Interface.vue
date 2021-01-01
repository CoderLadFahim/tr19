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
			<Filter />
			<input type="text" class="search-bar" placeholder="Search Country" />
		</div>
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
	computed: {
		...mapGetters({ results: 'getCountryResults' }),
		countryResults() {
			return this.results.map((result, i) => result.All);
		},
	},
};
</script>

<style lang="scss" scoped>
.interface {
	@include dimen(84vw, 66.5vh);
	border: 1px solid #fff;
	margin-top: 7px;
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
}
</style>
