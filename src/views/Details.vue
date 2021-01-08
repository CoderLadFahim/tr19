<template>
	<h1>
		{{ country_name }}
	</h1>
</template>

<script>
export default {
	name: 'Details',
	props: {
		country_name: {
			type: String,
		},
	},
};
</script>

<style></style>
