<template>
	<loader v-if="!c19Status" />
	<router-view v-else />
</template>

<script>
import LoaderScreen from './components/LoadingScreen';

import { mapActions } from 'vuex';
import { mapState } from 'vuex';
import LoadingScreen from './components/LoadingScreen';

export default {
	name: 'App',
	components: {
		loader: LoadingScreen,
	},
	computed: {
		...mapState(['c19Status']),
	},
	methods: {
		...mapActions(['fetchData']),
	},
	created() {
		this.$store.dispatch('fetchData');
		// !this.c19Status ? document.body.classList.add('addMargin') : '';
	},
};
</script>

<style lang="scss">
*,
*::after,
*::before {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	background: linear-gradient(180deg, $gradient-start 0%, $gradient-end 100%);
	background-repeat: no-repeat;
	height: 100vh;
	overflow: hidden;
	color: $grey;
	font-family: $regular-font;
	font-weight: 700;
	margin-top: 25px;
	.data {
		font-family: $number-font;
	}
}

@media only screen and (min-width: 1366px) and (max-height: 625px) {
	body {
		margin-top: 10px;
	}
}
</style>
