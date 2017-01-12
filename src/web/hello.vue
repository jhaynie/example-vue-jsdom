<template>
	<div>The time is {{now}}</div>
</template>

<script>
export default {
	computed: {
		now () {
			return new Date();
		}
	}
}
</script>
