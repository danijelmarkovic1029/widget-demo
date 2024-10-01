<template>
	<v-alert
	color="primary"
	class="notification"
	theme="dark"
	prominent
>
	Welcome! 🎉<br />
	"Need help converting images with AI? <br />Click the button at the bottom right corner to get started 👇. It’s super easy!"
</v-alert>
<v-img
	class="hand-indicator"
	src="https://upload.wikimedia.org/wikipedia/commons/2/26/Hand_down.png"
	alt="Hand pointing down"
></v-img>
</template>

<script>
export default {
	data() {
		return {
			dialog: false,
		};
	},
	methods: {

	},
};
</script>

<style scoped>
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}
.notification {
  width: 280px;
  position: fixed;
  top: 105px;
  right: 20px;
  box-shadow: 0 4px 12px rgba(25, 118, 210, 1);
  animation: pulse 2s infinite;
}
</style>
