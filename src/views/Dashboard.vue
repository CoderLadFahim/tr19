<template>
	<div class="dashboard">
		<router-link
			:to="{ name: 'Details', params: { venue_name: 'global' } }"
			class="global-details-link"
		>
			<GlobalStatus class="global-card">
				<ul class="global-status">
					<li class="data-field infection-data">
						<h1 class="data total-infected">
							{{ formatData(getGlobalData('confirmed')) }}
						</h1>
						<p class="data-info">Infected Globally</p>
					</li>
					<li class="data-field recovery-data">
						<h1 class="data total-recovered">
							{{ formatData(getGlobalData('recovered')) }}
						</h1>
						<p class="data-info">Gobal Recoveries</p>
					</li>
					<li class="data-field death-data">
						<h1 class="data total-deaths">
							{{ formatData(getGlobalData('deaths')) }}
						</h1>
						<p class="data-info">Deaths Worldwide</p>
					</li>
				</ul>
			</GlobalStatus>
		</router-link>
		<DashboardInterface />
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

import Card from '@/components/Card';
import Interface from '@/components/Interface';

export default {
	name: 'Dashboard',
	components: {
		GlobalStatus: Card,
		DashboardInterface: Interface,
	},
	computed: {
		...mapGetters(['getGlobalData']),
	},
	created() {
		document.body.style.marginTop = '11px';
	},
};
</script>

<style lang="scss">
.dashboard {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	a.global-details-link {
		text-decoration: none;

		&:hover {
			cursor: pointer;
		}
	}

	.global-card {
		padding-top: 0;
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

			h1 {
				font-size: 2.25rem;
			}

			p {
				font-size: 0.7rem;
			}
		}

		li:nth-child(2),
		li:nth-child(3) {
			h1 {
				font-size: 1.125rem;
			}

			p {
				font-size: 0.625rem;
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
	.dashboard {
		.global-card {
			width: 90vw;
		}

		.global-status {
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
}

@media only screen and (min-width: 800px) {
	.dashboard {
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
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		.global-card {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			width: 95vw;
			// transition: 10ms;

			&:hover {
				border: 1px solid $purple;
			}
		}

		.global-status {
			@include dimen(100%, auto);
			display: flex;
			align-items: center;

			.data-field {
				flex: 1;

				h1.data {
					font-size: 2.5rem;
				}
			}

			.data-field .data-info {
				font-size: 1.5rem;
			}
		}
	}
}

@media only screen and (min-width: 1440px) {
	.dashboard .global-status .data-field {
		h1.data {
			font-size: 2.7rem;
		}

		.data-info {
			font-size: 1.7rem;
		}
	}
}

@media only screen and (min-width: 1920px) {
	.dashboard .global-status .data-field {
		h1.data {
			font-size: 3.5rem;
		}

		.data-info {
			font-size: 2rem;
		}
	}
}

@media only screen and (min-width: 1366px) and (max-height: 625px) {
	.dashboard .global-card {
		height: 25vh;
	}

	.dashboard .global-status .data-field {
		h1.data {
			font-size: 2.5rem;
		}

		.data-info {
			font-size: 1.5rem;
		}
	}
}
</style>
