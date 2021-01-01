<template>
	<router-view />
</template>

<script>
import { mapActions } from 'vuex';
import { mapState } from 'vuex';

export default {
	name: 'App',
	computed: {
		...mapState(['c19Status']),
	},
	methods: {
		...mapActions(['fetchData']),
	},
	created() {
		this.fetchData();
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
	margin-top: 15px;
	.data {
		font-family: $number-font;
	}
}
</style>
