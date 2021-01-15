<template>
	<Card class="infection-card">
		<div class="main-data">
			<h1 class="data">
				{{ formatData(1234567) }}
			</h1>
			<h3 class="field-title">
				{{ venue_name === 'global' ? 'Infected Globally' : 'Total Infections' }}
			</h3>
		</div>

		<div class="infection-rate">
			<h2 class="data">0.89%</h2>
			<h3 class="field-title">
				{{
					venue_name === 'global'
						? 'Total Population'
						: "Of Country's population"
				}}
			</h3>
		</div>
	</Card>
</template>

<script>
import Card from '../Card';

export default {
	name: 'InfectionCard',
	components: {
		Card,
	},
};
</script>

<style lang="scss" scoped></style>
