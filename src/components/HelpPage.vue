<template>
	<v-icon icon="mdi-help" class="fixed-button ma-2" size="large" @click="dialog = true"></v-icon>

	<v-dialog v-model="dialog" max-width="600px">
		<v-card>
			<v-card-title class="headline">
				<span>FAQ</span>
				<v-btn icon="mdi-close" @click="dialog = false"></v-btn>
			</v-card-title>
			<v-card-title class="question">
				How to work
			</v-card-title>
			<v-card-text>
				<p>
					1. Go to the listing page.
				</p>
				<p>
					2. Open the widget.
				</p>
				<p>
					3. Select an image in the widget.
				</p>
				<p>
					2. Choose the room type, style and generate the images.
				</p>
			</v-card-text>

			<v-card-title class="question">
				How can I use this widget on my website?
			</v-card-title>
			<v-card-text>
				<p>
					To use the widget on your website, kindly contact the Proptexx team at support@proptexx.com to get the widget.
				</p>
			</v-card-text>
		</v-card>
	</v-dialog>
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
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
.fixed-button {
	position: fixed;
	top: 100px;
	right: 50px;
	z-index: 1000;
	background-color: #d3d3d3;
	border-radius: 50%;
	padding: 25px;
	color: black;
	transition: transform 0.5s ease, box-shadow 0.5s ease;
	animation: pulse 2s infinite;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
	&:hover {
		transform: scale(1.2);
	}
}

.headline {
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 20px;
	font-weight: bold;
}

.question {
	min-width: 90%;
	font-size: 17px;
	font-weight: bold;
	background: rgb(243 244 246);
	margin: auto;
}
</style>
