<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="12" md="8">

				<v-btn class="mb-4" @click="goBack" color="deep-purple" text>
					Back to search
				</v-btn>

				<v-card>
					<v-card-title>{{ apartment.title }}</v-card-title>
					<v-card-subtitle>{{ apartment.price }}</v-card-subtitle>

					<v-card-text>
						<v-img :src="apartment.imageSrc" height="300" cover></v-img>
						<p>{{ apartment.descriptionLine1 }}</p>
						<p>{{ apartment.descriptionLine2 }}</p>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import apartmentData from '@/assets/apartment.json';

export default {
	props: ['title', 'price', 'imageSrc'],
	data() {
		return {
			apartment: null,
		};
	},
	methods: {
		goBack() {
			this.$router.go(-1);
		},
		fetchApartmentDetails(title) {
			const apartment = apartmentData.find((p) => p.title === title);
			if (apartment) {
				this.apartment = apartment;
			} else {
				console.error(`Property with title "${title}" not found.`);
			}
		},
	},
	mounted() {
		console.log('start', this.title);
		console.log('start1', this.imageSrc);
		console.log('start2', this.price);
		if (this.title) {
			const apartment = this.fetchApartmentDetails(this.title);
			if (apartment) {
				this.apartment = apartment;
			}
		} else {
			console.log('Title prop is missing or undefined')
		}
	},
};
</script>

<style scoped>
.title {
	text-transform: none;
	font-family: "Object Sans", "Adjusted Arial", Tahoma, Geneva, sans-serif;
	font-weight: 900;
	font-size: 20px;
	line-height: 24px;
}

.text-subtitle-1 {
	font-size: 16px;
	color: grey;
}

.v-card-title {
	font-size: 24px;
	font-weight: bold;
}

.v-card-subtitle {
	font-size: 18px;
	color: #555;
}

.detail-property {
	.type {
		background-color: rgb(246, 246, 250);
	}
}

.two-column-list {
	display: flex;
	flex-wrap: wrap;
	padding: 0;
	list-style-type: none;
}

.two-column-list li {
	flex-basis: 50%;
	box-sizing: border-box;
	padding: 5px;
	color: black;
}
</style>