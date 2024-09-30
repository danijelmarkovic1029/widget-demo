<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
				
				<v-btn class="mb-4" @click="goBack" color="deep-purple" text>
          Back to search
        </v-btn>

        <v-card>
          <v-card-title>{{ getPropertyDetails.title }}</v-card-title>
          <v-card-subtitle>{{ getPropertyDetails.subtitle }}</v-card-subtitle>

          <v-card-text>
						<v-img :src="getPropertyDetails.image" height="300" cover></v-img>
            <p>{{ getPropertyDetails.description }}</p>
          </v-card-text>

          <v-card-item>
            <v-card-title class="title">{{ getPropertyDetails.title }}</v-card-title>
  
            <v-card-subtitle>
              <span class="me-1">{{ getPropertyDetails.subtitle }}</span>
              <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
            </v-card-subtitle>
          </v-card-item>
  
          <v-card-text>
            <div class="my-4 text-subtitle-1">{{ getPropertyDetails.price }}</div>
            <div>{{ getPropertyDetails.description }}</div>
          </v-card-text>

          <v-card-item class="detail-property">
            <v-card-title class="title">Facts & Features</v-card-title>
            <h3 class="type my-2">Interior</h3>
            <v-card-subtitle>
              <ul class="two-column-list">
                <li>Bedrooms: {{ getPropertyDetails.details.bedrooms }}</li>
                <li>Bathrooms: {{ getPropertyDetails.details.bathrooms }}</li>
                <li>Full Bathrooms: {{ getPropertyDetails.details.fullBathrooms }}</li>
                <li>Half Bathrooms: {{ getPropertyDetails.details.halfBathrooms }}</li>
                <li>Kitchen Features: {{ getPropertyDetails.details.kitchenFeatures }}</li>
                <li>Heating: {{ getPropertyDetails.details.heating }}</li>
                <li>Features: {{ getPropertyDetails.details.features }}</li>
                <li>Has Fireplace: {{ getPropertyDetails.details.hasFireplace ? 'Yes' : 'No' }}</li>
              </ul>
            </v-card-subtitle>

            <h3 class="type my-2">Property</h3>
            <v-card-subtitle>
              <ul class="two-column-list">
                <li>Total Structure Area: {{ getPropertyDetails.details.interiorArea.totalStructureArea }} sqft</li>
                <li>Total Interior Livable Area: {{ getPropertyDetails.details.interiorArea.totalInteriorLivableArea }}</li>
                <li>Total Parking Spaces: {{ getPropertyDetails.details.property.parking.totalSpaces }}</li>
                <li>Exterior Features: {{ getPropertyDetails.details.property.parking.exteriorFeatures }}</li>
              </ul>
            </v-card-subtitle>
          </v-card-item>
          
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: ['title'],
	methods: {
    ...mapActions('property', ['updatePropertyDetails']),
    goBack() {
      this.$router.go(-1);
    },
  },
  computed: {
    ...mapGetters('property', {
      getPropertyDetails: 'getPropertyDetails'
    }),
  },
	mounted() {
    console.log('start', this.getPropertyDetails.details);
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