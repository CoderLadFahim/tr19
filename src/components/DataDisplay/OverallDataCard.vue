<template>
	<div class="venue-data indicator" v-if="!c19Data">
		<p class="country">Country</p>
		<ul class="numbers">
			<li class="infected">Infected</li>
			<li class="recovered">Recovered</li>
			<li class="deaths">Deaths</li>
		</ul>
	</div>

	<li v-else class="venue-data">
		<p class="country">
			<img
				v-if="c19Data.abbreviation"
				:src="
					`https://flagcdn.com/16x12/${c19Data.abbreviation.toLowerCase()}.png`
				"
				:alt="c19Data.country"
			/>
			{{ c19Data.country }}
		</p>
		<ul class="numbers">
			<li class="infected data">
				{{ c19Data.confirmed }}
			</li>
			<li class="recovered data">
				{{ c19Data.recovered }}
			</li>
			<li class="deaths data">
				{{ c19Data.deaths }}
			</li>
		</ul>
	</li>
</template>

<script>
export default {
	name: 'OverallDataCard',
	props: {
		c19Data: {
			type: Object,
		},
	},
};
</script>

<style lang="scss" scoped></style>
