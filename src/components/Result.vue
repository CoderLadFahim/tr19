<template>
	<div class="result-info-bar result-style">
		<h4 class="country">Country</h4>
		<ul class="results">
			<li class="infected">Infected</li>
			<li class="recovered">Recovered</li>
			<li class="deaths">Deaths</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: Result,
	props: {
		countryData: {
			type: Object,
			required: True,
		},
	},
};
</script>

<style lang="scss" scoped></style>
