<template>
	<div class="loading-page" v-if="true">
		<div class="loader"></div>

		<p class="loading-msg">
			loading data
		</p>

		<p class="ahadith">
			if a plague enters a land, do not enter, nor leave it <br />

			<span>
				-Prophet Muhammad
			</span>
		</p>
	</div>
</template>

<script>
export default {
	name: 'LoadingScreen',
};
</script>

<style lang="scss" scoped>
.loading-page {
	@include dimen(100vw, 100vh);
	text-transform: capitalize;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;

	.loader {
		@include dimen(100px);
		border: 20px solid #fff;
		border-radius: 10px;
		border: {
			top-color: $yellow;
			right-color: $green;
			bottom-color: $red;
			left-color: $grey;
		}
		animation: load 1.5s linear infinite;
	}

	.loading-msg {
		font-size: 3rem;
		font-weight: 200;
		color: $purple;
	}

	.ahadith {
		font-size: 1.5rem;
		font-weight: 200;
		width: 80%;

		span {
			font-size: 1rem;
			font-weight: bold;
		}
	}
}

@media only screen and (min-width: 600px) {
	.loading-page {
		.loader {
			@include dimen(150px);
			border-width: 30px;
		}

		.loading-msg {
			font-size: 4rem;
		}

		.ahadith {
			font-size: 2rem;
			width: 65%;

			span {
				font-size: 1.5rem;
			}
		}
	}
}

@media only screen and (min-width: 768px) {
	.loading-page {
		.loader {
			@include dimen(180px);
			border-width: 35px;
		}

		.loading-msg {
			font-size: 4.5rem;
		}

		.ahadith {
			font-size: 2.5rem;
			width: 65%;

			span {
				font-size: 2rem;
			}
		}
	}
}

@media only screen and (min-width: 1024px) {
	.loading-page {
		.loader {
			@include dimen(230px);
			border-width: 45px;
		}

		.loading-msg {
			font-size: 5.5rem;
		}

		.ahadith {
			font-size: 3rem;
			width: 60%;

			span {
				font-size: 2.5rem;
			}
		}
	}
}

@media only screen and (min-width: 1280px) {
	.loading-page {
		.loader {
			@include dimen(150px);
			border-width: 30px;
		}

		.loading-msg {
			font-size: 4rem;
		}

		.ahadith {
			font-size: 2rem;
			width: 65%;

			span {
				font-size: 1.5rem;
			}
		}
	}
}
</style>
