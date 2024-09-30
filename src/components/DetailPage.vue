<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
				
				<v-btn class="mb-4 back-to-search" @click="goBack" text>
          Back to search
        </v-btn>

        <v-card v-if="loading">
          <v-card-title>Loading...</v-card-title>
        </v-card>

        <v-card v-if="!loading">
          <v-card-title>{{ property.title }}</v-card-title>
          <v-card-subtitle>{{ property.subtitle }}</v-card-subtitle>

          <v-card-text>
						<v-img :src="property.image" height="300" cover></v-img>
            <p>{{ property.description }}</p>
          </v-card-text>

          <v-card-item>
            <v-card-title class="title">{{ property.title }}</v-card-title>
  
            <v-card-subtitle>
              <span class="me-1">{{ property.subtitle }}</span>
              <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
            </v-card-subtitle>
          </v-card-item>
  
          <v-card-text>
            <div class="my-4 text-subtitle-1">{{ property.price }}</div>
            <div>{{ property.description }}</div>
          </v-card-text>

          <v-card-item class="detail-property">
            <v-card-title class="title">Facts & Features</v-card-title>
            <h3 class="type my-2">Interior</h3>
            <v-card-subtitle>
              <ul class="two-column-list">
                <li>Bedrooms: {{ property.details.bedrooms }}</li>
                <li>Bathrooms: {{ property.details.bathrooms }}</li>
                <li>Full Bathrooms: {{ property.details.fullBathrooms }}</li>
                <li>Half Bathrooms: {{ property.details.halfBathrooms }}</li>
                <li>Kitchen Features: {{ property.details.kitchenFeatures }}</li>
                <li>Heating: {{ property.details.heating }}</li>
                <li>Features: {{ property.details.features }}</li>
                <li>Has Fireplace: {{ property.details.hasFireplace ? 'Yes' : 'No' }}</li>
              </ul>
            </v-card-subtitle>

            <h3 class="type my-2">Property</h3>
            <v-card-subtitle>
              <ul class="two-column-list">
                <li>Total Structure Area: {{ property.details.interiorArea.totalStructureArea }} sqft</li>
                <li>Total Interior Livable Area: {{ property.details.interiorArea.totalInteriorLivableArea }}</li>
                <li>Total Parking Spaces: {{ property.details.property.parking.totalSpaces }}</li>
                <li>Exterior Features: {{ property.details.property.parking.exteriorFeatures }}</li>
              </ul>
            </v-card-subtitle>
          </v-card-item>
        </v-card>
        <div v-else>
          <h3>Property not found</h3>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import houseData from '@/assets/house.json';
import '../assets/styles/global.css';

export default {
  props: ['title'],
  data() {
    return {
      property: null,
      loading: true
    };
  },
	methods: {
    ...mapActions('property', ['updatePropertyDetails']),
    goBack() {
      this.$router.go(-1);
    },
    fetchPropertyDetails(title) {
      const property = houseData.find((p) => p.title === title);
      if (property) {
        this.property = property;
      } else {
        console.error(`Property with title "${title}" not found.`);
      }
    },
  },
  computed: {
    ...mapGetters('property', {
      getPropertyDetails: 'getPropertyDetails'
    }),
  },
	async mounted() {
    const property = await this.fetchPropertyDetails(this.title);
    if (property) {
      this.property = property;
    }
    this.loading = false
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