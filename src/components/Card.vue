<template>
	<div class="card">
		<slot />
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card {
	color: $grey;
	// border: 3px solid;
	border-radius: 10px;
	width: 85vw;
	height: 30vh;
	position: relative;

	&::before {
		content: 'Data Status';
		position: absolute;
		box-sizing: content-box;
		text-align: center;
		font-weight: bold;
		font-size: 0.7rem;
		color: #fff;
		background-color: $grey;
		border-radius: 0 0 10px 10px;
		padding: 3px 0;
		left: 50%;
		top: 0px;
		transform: translateX(-50%);
	}
}

.infection-card {
	color: $yellow;

	&::before {
		content: 'Infection Status';
		background-color: $yellow;
	}
}

.recovery-card {
	color: $green;

	&::before {
		content: 'Recovery Status';
		background-color: $green;
	}
}

.death-card {
	color: $red;

	&::before {
		content: 'Death Status';
		background-color: $red;
	}
}

.global-card {
	@include background-filter(0.95, '../assets/global-background.jpg');
	color: $purple;
	&::before {
		display: none;
	}
}

@media only screen and (min-width: 1280px) {
	.card {
		width: 95vw;
	}
}
@media only screen and (min-width: 1366px) {
	.card {
		height: 35vh;
	}
}
</style>
