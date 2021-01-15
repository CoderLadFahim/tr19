<template>
	<div class="guideline">
		<h1>{{ msg.title.toUpperCase() }}</h1>
		<p>
			{{ msg.desc.toUpperCase() }}
		</p>
	</div>
</template>

<script>
export default {
	name: 'Guideline',
	props: {
		msg: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
.guideline {
	display: none;
}

@media only screen and (min-width: 1280px) {
	.guideline {
		@include dimen(20%, 60vh);
		display: flex;
		flex-direction: column;
		background-color: $lightnavy;
		align-items: center;
		justify-content: space-around;
		text-align: center;
		border-radius: 10px;
		color: $purple;
		align-self: start;
		margin-top: 30px;

		h1,
		p {
			font-weight: 200;
		}

		h1 {
			font-size: 2.5rem;
		}

		p {
			font-size: 1.5rem;
			width: 70%;
			line-height: 3.5rem;
		}
	}
}

@media only screen and (min-width: 1366px) {
	.guideline {
		height: 55vh;
		align-self: start;

		h1 {
			font-size: 2.3rem;
			width: 80%;
		}

		p {
			line-height: 3rem;
		}
	}
}

@media only screen and (min-width: 1440px) {
	.guideline {
		h1 {
			font-size: 2.5rem;
			width: 80%;
		}

		p {
			line-height: 3.5rem;
		}
	}
}

@media only screen and (min-width: 1536px) {
	.guideline p {
		width: 69%;
	}
}

@media only screen and (min-width: 1600px) {
	.guideline p {
		width: 65%;
	}
}

@media only screen and (min-width: 1920px) {
	.guideline {
		height: 57vh;

		h1 {
			font-size: 3rem;
		}

		p {
			font-size: 2rem;
			width: 70%;
			line-height: 4.5rem;
		}
	}
}

@media only screen and (max-height: 625px) {
	.guideline {
		margin-top: 20px;
		height: 68vh;

		// h1 {
		// 	font-size: 2rem;
		// }

		// p {
		// 	font-size: 1.5rem;
		// }
	}
}
</style>
