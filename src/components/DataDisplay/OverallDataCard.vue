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
				{{ formatData(c19Data.confirmed) }}
			</li>
			<li class="recovered data">
				{{ formatData(c19Data.recovered) }}
			</li>
			<li class="deaths data">
				{{ formatData(c19Data.deaths) }}
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
		position: {
			type: Number,
		},
	},
};
</script>

<style lang="scss" scoped>
.venue-data.indicator {
	min-height: 30px;
	margin-top: 5px;

	li {
		font-size: 0.56rem;
		font-weight: normal;
	}

	.country {
		min-height: 0;
		padding: 0;
	}

	background-color: $lightnavy;
}

.venue-data {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 7px;
	min-height: 40px;
	font-size: 0.75rem;
	transition: 200ms;
	color: $purple;

	.country {
		display: flex;
		align-items: center;
		color: #fff;
	}

	img {
		margin-right: 10px;
	}

	& > * {
		flex-basis: 50%;
	}

	&:nth-child(odd) {
		background-color: $oddchild-col;
	}
	&:nth-child(even) {
		background-color: $evenchild-col;
	}

	.numbers {
		display: flex;
		justify-content: space-between;
		list-style: none;
		font-size: 0.5rem;
		font-weight: 900;

		.infected {
			color: $yellow;
		}
		.recovered {
			color: $green;
		}
		.deaths {
			color: $red;
		}
	}
}

li.venue-data:hover {
	border: 1px solid $purple;
	cursor: pointer;
}

@media only screen and (min-width: 600px) {
	.venue-data.indicator {
		min-height: 40px;

		li {
			font-size: 0.8rem;
		}
	}

	.venue-data {
		font-size: 1rem;
		padding: 0 15px;
		min-height: 50px;

		img {
			// margin: 0 15px 0 10px;
			margin-right: 15px;
			transform: scale(1.3);
		}

		.numbers {
			font-size: 0.8rem;
		}
	}
}

@media only screen and (min-width: 768px) {
	.venue-data.indicator li {
		font-size: 1rem;
	}

	.venue-data {
		font-size: 1.1rem;

		img {
			margin-right: 20px;
			transform: scale(1.5);
		}
	}
}

@media only screen and (min-width: 1024px) {
	.venue-data.indicator {
		min-height: 60px;

		.country {
			font-size: 1.5rem;
		}

		li {
			font-size: 1.3rem;
		}
	}

	.venue-data {
		font-size: 1.6rem;
		padding: 0 15px;
		min-height: 70px;

		img {
			margin: 0 25px 0 5px;
			// margin-right: 10px 0;
			transform: scale(1.7);
		}

		.numbers {
			font-size: 1.3rem;
		}
	}
}

@media only screen and (min-width: 1280px) {
	.venue-data.indicator {
		min-height: 35px;

		.country {
			font-size: 0.9rem;
		}

		li {
			font-size: 1rem;
		}
	}

	.venue-data {
		font-size: 1rem;
		padding: 0 10px;
		min-height: 40px;

		img {
			margin-right: 15px;
			transform: scale(1.3);
		}

		.numbers {
			font-size: 1rem;
		}
	}
}
</style>
