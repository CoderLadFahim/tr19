<template>
	<Card class="recovery-card">
		<div class="main-data">
			<h1 class="data">
				{{ formatData(1234567) }}
			</h1>
			<h3 class="field-title">
				{{ venue_name === 'global' ? 'Global Recoveries' : 'Recoveries' }}
			</h3>
		</div>

		<div class="infection-based-rate">
			<h1 class="data">
				64.75%
			</h1>
			<h3 class="field-title">
				{{
					venue_name === 'global'
						? 'Of All Confirmed Cases'
						: 'Of Total Confirmed'
				}}
			</h3>
		</div>

		<div class="population-based-rate">
			<h1 class="data">
				0.57%
			</h1>
			<h3 class="field-title">
				{{
					venue_name === 'global'
						? 'Of Global Population'
						: "Of Country's Population"
				}}
			</h3>
		</div>
	</Card>
</template>

<script>
import Card from '../Card';

export default {
	name: 'RecoveryCard',
	components: {
		Card,
	},
};
</script>

<style lang="scss" scoped></style>
