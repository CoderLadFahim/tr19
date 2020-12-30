<template>
	<div class="interface">
		<h4 class="interface-title">Dashboard:</h4>
		<div class="interface-menu">
			<div class="filter">
				<div class="filter-menu">
					<h5>Sort By</h5>
					<div class="arrow-down"></div>
				</div>
				<ul class="filter-options">
					<li class="option active">Cases, Recoveries & Deaths</li>
					<li class="option">Most Infected</li>
					<li class="option">Most Recovered</li>
					<li class="option">Most Deaths</li>
					<li class="option">Infection Rate</li>
					<li class="option">Recovery Rate by Total Infected</li>
					<li class="option">Recovery Rate by Population</li>
					<li class="option">Death Rate by Total Infected</li>
					<li class="option">Death Rate by Population</li>
				</ul>
			</div>
			<input type="text" class="search-bar" placeholder="Search Country" />
		</div>

		<div class="result-display">
			<div class="result-data">
				<h5 class="data-type">
					Sorting by: <span class="type">Recovery Rate By Total Infected</span>
				</h5>
				<div class="result-order-btns">
					<button class="ascending">Ascending</button>
					<button class="descending">Descending</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.interface {
	@include dimen(84vw, 60vh);
	border: 1px solid #fff;
	margin-top: 20px;

	.interface-title {
		font-size: 0.875rem;
		margin-bottom: 10px;
	}

	.interface-menu {
		display: flex;
		justify-content: space-between;
		align-items: start;
	}

	.filter {
		width: 30%;
		border-radius: 10px;
		text-align: center;
		position: relative;

		.filter-menu {
			border-radius: 10px;
			background-color: $lightnavy;
			// border: 1px solid $purple;
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			min-width: 100%;
			padding: 5px 0;
			color: $purple;

			.arrow-down {
				@include dimen(0);
				border: {
					left: 6px solid transparent;
					right: 6px solid transparent;
					top: 6px solid $purple;
				}
			}
		}

		&:hover {
			.filter-options {
				opacity: 1;
				pointer-events: auto;
			}
		}

		.filter-options {
			position: absolute;
			top: 35px;
			background-color: #fff;
			color: $purple;
			list-style: none;
			width: 50vw;
			border-radius: 10px;
			overflow: hidden;
			// margin-top: 10px;
			opacity: 0;
			pointer-events: none;

			.option {
				font-size: 0.65rem;
				padding: 10px;
				text-align: left;
				&:hover {
					background-color: #f1f1f1;
					cursor: pointer;
				}

				&.active {
					background-color: $purple;
					color: #fff;
				}
			}
		}
	}

	.search-bar {
		color: $grey;
		background-color: $lightnavy;
		border-radius: 10px;
		border: none;
		font-family: $regular-font;
		font-weight: bold;
		font-size: 13.28px;
		padding: 5px 10px;
		width: 65%;

		&:focus {
			outline: none;
		}
	}
}
</style>
