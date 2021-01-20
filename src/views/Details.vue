<template>
	<div class="venue-details">
		<header>
			<h3 class="venue-name">
				<img
					v-if="venue_name !== 'global'"
					:src="
						`https://flagcdn.com/20x15/${venueData(
							venue_name
						).abbreviation.toLowerCase()}.png`
					"
					alt=""
				/>
				<span> {{ venueData(venue_name).country || 'Planet Earth' }}</span>
				<img
					v-if="venue_name !== 'global'"
					:src="
						`https://flagcdn.com/20x15/${venueData(
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
			<router-link to="/" class="back-btn">
				<span class="arrow"></span>
				<span class="btn-text">Dashboard</span>
			</router-link>
			<DetailsCard
				:cardType="'infection'"
				:venueDetails="venueData(venue_name)"
			/>
			<DetailsCard
				:cardType="'recovery'"
				:venueDetails="venueData(venue_name)"
			/>
			<DetailsCard :cardType="'death'" :venueDetails="venueData(venue_name)" />

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
import DetailsCard from '../components/DetailCard';

export default {
	name: 'Details',
	components: {
		Guideline,
		DetailsCard,
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
	position: absolute;
	background: #f1f1f1;
	bottom: 0;
	left: 0;
	right: 0;
	font-size: 0.75rem;
	width: 100%;
	padding: 5px 0;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	text-decoration: none;
	color: $navyblue;
	font-weight: bolder;
	transition: 200ms;

	&:hover {
		background-color: #fff;
	}
}

header {
	text-align: center;

	h3 {
		font-family: $regular-font;
		font-weight: 900;
		margin-bottom: 3px;
	}
	margin-bottom: 10px;

	.field-title {
		padding-right: 5px;
	}
}

.field-title {
	color: $darkgrey;
	font-size: 0.62rem;
}

.venue-name,
.venue-population {
	font-size: 0.87rem;
}

.venue-name {
	color: #fff;
	font-size: 1.05rem;

	span {
		padding: 0 10px;
	}
}

.venue-population .data {
	color: $purple;
}

.data-grid {
	display: grid;
	// border: 1px solid #fff;
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
		background: $lightnavy;
	}

	.infection-card {
		grid-column-start: span 2;
	}
}

@media only screen and (min-height: 760px) {
	header {
		margin-bottom: 20px;
	}
}

@media only screen and (min-width: 600px) {
	header {
		line-height: 2rem;
		.venue-name {
			font-size: 1.5rem;

			img {
				@include dimen(20px, 15px);
			}
		}
		.venue-population {
			.field-title {
				font-size: 0.8rem;
			}

			font-size: 1.3rem;
		}
	}

	.data-grid {
		height: 80%;
		grid-gap: 30px;
	}

	a.back-btn {
		padding: 10px 0;
		font-size: 1.1rem;
	}
}

@media only screen and (min-width: 768px) {
	header {
		// margin-bottom: 30px;
		line-height: 2.5rem;
		.venue-name {
			font-size: 2rem;

			img {
				@include dimen(25px, 20px);
			}
		}
	}
}

@media only screen and (min-width: 800px) {
	a.back-btn {
		font-size: 1.5rem;
	}
}

@media only screen and (min-width: 1024px) {
	header {
		line-height: 3.5rem;
		.venue-name {
			font-size: 2.5rem;

			img {
				@include dimen(30px, 25px);
			}
		}

		.venue-population {
			.field-title {
				font-size: 1.5rem;
			}

			.data {
				font-size: 2rem;
			}
		}
	}

	a.back-btn {
		font-size: 1.8rem;
	}
}

@media only screen and (min-width: 1280px) {
	.venue-details {
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;

		& > * {
			// border: 1px solid #fff;
		}
	}

	header {
		min-width: 50%;
		height: 7vh;
		margin: 0 auto;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		margin-bottom: 15px;

		.venue-name {
			font-size: 2rem;
			display: flex;
			align-items: center;
			margin-right: 30px;
		}
	}

	.data-grid {
		a.back-btn {
			position: absolute;
			bottom: auto;
			top: 5px;
			left: 5px;
			font-size: 1rem;
			width: 160px;
			padding: 5px 0;
			border-radius: 10px;
			display: flex;
			justify-content: space-evenly;
			background: none;
			color: #fff;
			// transition: none;
			border: 1px solid #fff;
			&:hover {
				border-color: $yellow;
			}

			.arrow {
				@include arrow('left', 0.5);
			}
		}

		// & > * {
		// 	width: auto;
		// 	height: auto;
		// }

		width: 90%;
		height: 85%;

		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(2, 1fr);
		grid-gap: 20px;

		grid-template-areas:
			'guideline1 infection-card infection-card guideline2'
			'recovery-card recovery-card death-card death-card';

		.guideline {
			@include dimen(auto);
			margin: 0;
			align-self: stretch;
			h1 {
				font-size: 2rem;
			}

			p {
				font-size: 1.2rem;
			}

			&:first-child {
				grid-area: guideline1;
			}
			&:last-child {
				grid-area: guideline2;
			}

			p {
				width: 90%;
			}
		}

		.infection-card {
			grid-area: infection-card;
		}
		.recovery-card {
			grid-area: recovery-card;
		}
		.death-card {
			grid-area: death-card;
		}
	}
}

@media only screen and (max-height: 700px) {
	header {
		// margin-top: 10px;
		margin-bottom: 20px;
		.venue-population .data {
			font-size: 1.5rem;
		}
	}

	.data-grid {
		// @include dimen(95%, 85%);
		width: 95%;
		display: grid;
		grid-gap: 1px;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: 1fr;
		grid-template-areas: 'guideline1 recovery-card infection-card death-card guideline2';

		.card {
			display: flex;
			height: 90%;
			align-self: center;
			padding-left: 10px;
			padding-right: 10px;

			&::before {
				width: 50%;
			}

			.main-data {
				.data {
					font-size: 2rem;
					line-height: 1.5rem;
				}

				.field-title {
					font-size: 1.2rem;
				}
			}
		}

		.infection-card {
			justify-content: space-between;
			height: 100%;

			padding: 102px 25px;

			.main-data {
				.data {
					font-size: 2.5rem;
					line-height: 2.5rem;
				}

				.field-title {
					font-size: 1.3rem;
				}
			}
		}

		.guideline {
			height: 85%;
			align-self: center;
			h1 {
				width: 85%;
			}
		}
	}
}
</style>
