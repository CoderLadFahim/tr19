<template>
	<div class="dashboard">
		<GlobalStatus class="global-card">
			<router-link to="/details" class="details-btn">
				<button>
					<span class="btn-text">In-Depth Details</span>
					<span class="right-arrow"></span>
				</button>
			</router-link>

			<div class="location-data">
				<h1 class="location">Global</h1>
				<p class="population">
					Population:
					<span class="data"> {{ getGlobalData('population') }} </span>
				</p>
			</div>

			<ul class="global-status">
				<li class="data-field infection-data">
					<h1 class="data total-infected">{{ getGlobalData('confirmed') }}</h1>
					<p class="data-info">Infected Globally</p>
				</li>
				<li class="data-field recovery-data">
					<h1 class="data total-recovered">{{ getGlobalData('recovered') }}</h1>
					<p class="data-info">Gobal Recoveries</p>
				</li>
				<li class="data-field death-data">
					<h1 class="data total-deaths">{{ getGlobalData('deaths') }}</h1>
					<p class="data-info">Deaths Worldwide</p>
				</li>
			</ul>
		</GlobalStatus>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

import Card from '@/components/Card';

export default {
	name: 'Dashboard',
	components: {
		GlobalStatus: Card,
	},
	computed: {
		...mapGetters(['getGlobalData']),
	},
};
</script>

<style lang="scss">
.dashboard {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	a.details-btn {
		text-decoration: none;
	}

	.global-card {
		position: relative;
		.details-btn {
			position: absolute;
			right: -3px;
			top: 106%;

			&:hover {
				transform: scale(1.05);
				cursor: pointer;
			}

			button {
				font: {
					family: $regular-font;
					weight: 900;
					size: 0.6rem;
				}
				padding: 5px 10px;
				border: none;
				border-radius: 20px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				box-sizing: content-box;

				.btn-text {
					display: block;
					margin-right: 15px;
				}

				.right-arrow {
					@include arrow('right', 0.5);
				}
			}
		}

		.location-data {
			display: none;
		}
	}

	.global-status {
		@include dimen(100%);
		list-style: none;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;

		li:nth-child(1) {
			grid-column-start: 1;
			grid-column-end: 3;
		}

		li:nth-child(2),
		li:nth-child(3) {
			h1 {
				font-size: 1.3rem;
			}

			p {
				font-size: 0.75rem;
			}
		}

		.total-infected {
			color: $yellow;
		}
		.total-recovered {
			color: $green;
		}
		.total-deaths {
			color: $red;
		}
	}
}

@media only screen and (min-width: 414px) {
	.dashboard {
		.global-card .details-btn button {
			font-size: 0.7rem;
			padding: 7px 12px;
		}

		.global-status {
			li:nth-child(1) {
				h1 {
					font-size: 2.5rem;
				}

				p {
					font-size: 1.1rem;
				}
			}

			li:nth-child(2),
			li:nth-child(3) {
				h1 {
					font-size: 1.5rem;
				}
				p {
					font-size: 0.85rem;
				}
			}
		}
	}
}

@media only screen and (min-width: 601px), (min-height: 1024px) {
	.dashboard {
		.global-card {
			width: 85vw;
		}

		.global-status {
			li:nth-child(1) {
				h1 {
					font-size: 3.5rem;
				}

				p {
					font-size: 1.5rem;
				}
			}

			li:nth-child(2),
			li:nth-child(3) {
				h1 {
					font-size: 2.2rem;
				}
				p {
					font-size: 1.3rem;
				}
			}
		}
	}
}

@media only screen and (min-width: 768px) {
	.dashboard .global-status {
		li:nth-child(2),
		li:nth-child(3) {
			h1 {
				font-size: 2.5rem;
			}

			p {
				font-size: 1.5rem;
			}
		}
	}
}

@media only screen and (min-width: 800px) {
	.dashboard {
		.global-card .details-btn button {
			font-size: 0.8rem;
		}

		.global-status {
			li:nth-child(1) {
				h1 {
					font-size: 4.5rem;
				}
				p {
					font-size: 2rem;
				}
			}

			li:nth-child(2),
			li:nth-child(3) {
				h1 {
					font-size: 3rem;
				}

				p {
					font-size: 1.78rem;
				}
			}
		}
	}
}

@media only screen and (min-width: 1024px) {
	.dashboard {
		.global-card .details-btn button {
			font-size: 1rem;
			padding: 15px 20px;

			.btn-text {
				margin-right: 35px;
			}

			.right-arrow {
				@include arrow('right', 1);
			}
		}

		.global-status {
			li:nth-child(2),
			li:nth-child(3) {
				h1 {
					font-size: 3.5rem;
				}

				p {
					font-size: 2rem;
				}
			}
		}
	}
}

@media only screen and (min-width: 1280px) {
	.dashboard {
		.global-card {
			display: flex;
			flex-direction: column;
			justify-content: space-around;

			.location-data {
				display: block;
				text-align: center;
				.location {
					font-size: 2rem;
					font-weight: bold;
					color: #ffffff;
				}

				.population {
					color: $grey;

					span.data {
						color: $purple;
					}
				}
			}

			.details-btn {
				top: 10px;
				right: 10px;
				button {
					padding: 10px 15px;
					font-size: 0.7rem;
					border-radius: 10px;
					.btn-text {
						margin-right: 20px;
						position: relative;
						top: 1px;
					}

					.right-arrow {
						@include arrow('right', 0.7);
					}
				}
			}
		}

		.global-status {
			@include dimen(100%, auto);
			display: flex;
			align-items: center;

			.data-field {
				flex: 1;

				h1.data {
					font-size: 2rem;
				}
			}

			.data-field .data-info {
				font-size: 1.5rem;
			}
		}

		.details-btn {
			top: 40px;
			right: 50px;
		}
	}
}

@media only screen and (min-width: 1366px) {
	.dashboard {
		.global-card {
			.details-btn .btn-text {
				font-size: 1rem;
			}

			.location-data .population {
				font-size: 1.5rem;
			}
		}
	}
}
</style>
