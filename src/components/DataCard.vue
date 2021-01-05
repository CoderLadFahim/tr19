<template>
	<div v-if="!rankMode" class="result-info-bar">
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
	name: DataCard,
};
</script>

<style lang="scss" scoped></style>
