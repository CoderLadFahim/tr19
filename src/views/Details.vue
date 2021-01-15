<template>
	<div class="venue-details">
		<router-link to="/" class="back-btn">
			<div class="arrow"></div>
			Back to Dashboard</router-link
		>
		<header>
			<h3 class="venue-name">
				<img
					v-if="venue_name !== 'global'"
					:src="
						`https://flagcdn.com/16x12/${venueData(
							venue_name
						).abbreviation.toLowerCase()}.png`
					"
					alt=""
				/>
				{{ venueData(venue_name).country || 'Planet Earth' }}
				<img
					v-if="venue_name !== 'global'"
					:src="
						`https://flagcdn.com/16x12/${venueData(
							venue_name
						).abbreviation.toLowerCase()}.png`
					"
					alt=""
				/>
			</h3>
			<h3 class="venue-population">
				<span class="field-title">Population:</span>
				<span class="data"
					>{{ formatData(venueData(venue_name).population) }}
				</span>
			</h3>
		</header>
		<div class="data-grid">
			<InfectionCard />
			<RecoveryCard />
			<DeathCard />

			<Guideline
				:msg="{
					title: 'wash your hands',
					desc: 'Wash your hands thoroughly with soap or hand-sanitizer',
				}"
			/>
			<Guideline
				:msg="{
					title: 'Keep your distance',
					desc: 'Stay two meters of six feet apart from one another',
				}"
			/>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

import Guideline from '../components/Guideline';
import InfectionCard from '../components/DetailCards/InfectionCard';
import RecoveryCard from '../components/DetailCards/RecoveryCard';
import DeathCard from '../components/DetailCards/DeathCard';

export default {
	name: 'Details',
	components: {
		Guideline,
		InfectionCard,
		RecoveryCard,
		DeathCard,
	},
	props: {
		venue_name: {
			type: String,
		},
	},
	computed: {
		...mapGetters({ venueData: 'getVenueData' }),
	},
};
</script>

<style lang="scss">
.venue-details {
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	margin-top: -15px;
}

a.back-btn {
	.arrow {
		display: none;
	}

	position: fixed;
	background: #fff;
	bottom: 0;
	font-size: 0.75rem;
	width: 100%;
	padding: 5px 0;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	text-decoration: none;
	color: $navyblue;
	font-weight: bolder;
}

header {
	text-align: center;

	h3 {
		font-family: $regular-font;
		font-weight: 900;
		margin-bottom: 3px;
	}
	margin-bottom: 10px;
}

.field-title {
	color: $darkgrey;
	font-size: 0.62rem;
	padding-right: 5px;
}

.venue-name,
.venue-population {
	font-size: 0.87rem;
}

.venue-name {
	color: #fff;
	// font-size: 1.05rem;
}

.venue-population .data {
	color: $purple;
}

.data-grid {
	display: grid;
	border: 1px solid #fff;
	width: 85%;
	height: 83%;
	margin: 0 auto;
	grid: {
		template: {
			rows: 1fr 1fr;
			columns: 1fr 1fr;
		}

		gap: 20px;
	}

	.card {
		width: auto;
		height: auto;
	}

	.infection-card {
		grid-column-start: span 2;
	}
}
</style>
