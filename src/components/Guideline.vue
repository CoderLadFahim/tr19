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
</style>
