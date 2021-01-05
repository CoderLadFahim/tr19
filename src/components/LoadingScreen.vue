<template>
	<div class="loading-page" v-if="true">
		<div class="loader"></div>

		<p class="loading-msg">
			loading data
		</p>

		<p class="ahadith">
			if a plague enters a land, do not enter nor leave it <br />

			<span>
				-Prophet Muhammad
			</span>
		</p>
	</div>
</template>

<script>
export default {};
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
			left-color: $purple;
		}
		animation: load 1s linear infinite;
	}

	.loading-msg {
		font-size: 3rem;
		font-weight: 400;
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
</style>
