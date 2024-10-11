<template>
  <v-container class="estate-container">
    <v-row>
      <v-col cols="12" style="padding: 0px">
        <v-img src="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/07/image2-xl%401x.jpg" height="400px"
          width="100%" cover>
          <v-container class="white--text d-flex align-center justify-center" height="100%">
            <h1 class="banner-text">Choose the listing to start</h1>
          </v-container>
        </v-img>
      </v-col>
    </v-row>

    <v-row style="max-width: 80%; margin: auto">
      <v-col cols="12" sm="4" md="4">
        <CardComponent :title="staging.title" :subtitle="staging.subtitle" :image="staging.image"
          :rating="staging.rating" :reviews="staging.reviews" :price="staging.price" :description="staging.description"
          :availableTimes="staging.availableTimes" :loading="loading" :houseType="staging.title"
          :detail="staging.details" :AImodel="staging.AImodel" />
      </v-col>
    
      <v-col cols="12" sm="4" md="4">
        <CardComponent :title="refurnishing.title" :subtitle="refurnishing.subtitle" :image="refurnishing.image"
          :rating="refurnishing.rating" :reviews="refurnishing.reviews" :price="refurnishing.price" :description="refurnishing.description"
          :availableTimes="refurnishing.availableTimes" :loading="loading" :houseType="refurnishing.title"
          :detail="refurnishing.details" :AImodel="refurnishing.AImodel" />
      </v-col>
    
      <v-col cols="12" sm="4" md="4">
        <CardComponent v-if="properties.length" :title="properties[1].title" :subtitle="properties[1].subtitle"
          :image="properties[1].image" :rating="properties[1].rating" :reviews="properties[1].reviews"
          :price="properties[1].price" :description="properties[1].description" :availableTimes="properties[1].availableTimes"
          :loading="loading" :houseType="properties[1].title" :detail="properties[1].details" />
      </v-col>
    </v-row>
    
    <v-row style="max-width: 80%; margin: auto">
      <v-col v-for="(property, index) in properties.slice(2)" :key="index" cols="12" sm="6" md="4">
        <CardComponent :title="property.title" :subtitle="property.subtitle" :image="property.image"
          :rating="property.rating" :reviews="property.reviews" :price="property.price" :description="property.description"
          :availableTimes="property.availableTimes" :loading="loading" :houseType="property.title"
          :detail="property.details" />
      </v-col>
    </v-row>
    <!-- <HelpPage /> -->
  </v-container>
</template>

<script>
import CardComponent from './CardComponent.vue';
import housesData from '@/assets/house.json';
// import HelpPage from './HelpPage.vue';

export default {
  components: {
    CardComponent,
    // HelpPage
  },
  data() {
    return {
      loading: false,
      properties: housesData,
      staging: {
        "AImodel": "Virtual Staging",
        "title": "Custom shining Room",
        "subtitle": "Designed for those who value style and storage, this room features a luxurious walk-in closet. With ample shelving, hanging space, and drawers, it's ideal for organizing your wardrobe and accessories.",
        "image": [
          require('@/assets/staging/1.jpeg'),
          require('@/assets/staging/2.jpeg'),
          require('@/assets/staging/3.jpg'),
          require('@/assets/staging/4.jpeg'),
          require('@/assets/staging/5.jpeg'),
          require('@/assets/staging/6.jpeg'),
          require('@/assets/staging/7.jpeg'),
          require('@/assets/staging/8.jpeg'),
          require('@/assets/staging/9.jpeg'),
          require('@/assets/staging/10.jpeg'),
          require('@/assets/staging/11.jpeg'),
          require('@/assets/staging/12.jpeg'),
          require('@/assets/staging/13.jpeg'),
          require('@/assets/staging/14.jpeg'),
          require('@/assets/staging/15.jpeg'),
          require('@/assets/staging/16.jpeg'),
          require('@/assets/staging/17.jpeg'),
          require('@/assets/staging/18.jpeg'),
          require('@/assets/staging/19.jpeg'),
          require('@/assets/staging/20.jpeg'),
          require('@/assets/staging/21.jpeg'),
          require('@/assets/staging/22.jpeg'),
          require('@/assets/staging/23.jpeg'),
          require('@/assets/staging/24.jpeg'),
          require('@/assets/staging/25.jpeg'),
          require('@/assets/staging/26.jpeg'),
          require('@/assets/staging/27.jpeg'),
          require('@/assets/staging/28.jpeg'),
          require('@/assets/staging/29.jpeg'),
          require('@/assets/staging/30.jpeg'),
          require('@/assets/staging/31.jpeg'),
          require('@/assets/staging/32.jpeg'),
          require('@/assets/staging/33.jpeg'),
          require('@/assets/staging/34.jpeg'),
          require('@/assets/staging/35.jpeg'),
          require('@/assets/staging/36.jpeg'),
          require('@/assets/staging/37.jpeg'),
          require('@/assets/staging/38.jpeg'),
          require('@/assets/staging/39.jpeg'),
          require('@/assets/staging/40.jpeg'),
          require('@/assets/staging/41.jpeg'),
          require('@/assets/staging/42.jpeg'),
          require('@/assets/staging/43.jpeg'),
          require('@/assets/staging/44.jpeg'),
        ],
        "rating": 4.5,
        "reviews": 413,
        "price": "$41,500",
        "description": "3248 Burning Memory Lane, FL 32801",
        "availableTimes": ["5:30PM", "7:30PM", "8:00PM", "9:00PM"],
        "type": "Essential appliances",
        "details": {
          "bedrooms": 2,
          "builtYear": 2020,
          "bathrooms": 1,
          "fullBathrooms": 2,
          "halfBathrooms": 1,
          "kitchenFeatures": "F",
          "heating": "Heat Pump",
          "features": ["BayWin", "D/D", "EIK", "FP", "NewKit", "Study", "Sunny", "W/D"],
          "hasFireplace": false,
          "interiorArea": {
            "totalStructureArea": 2400,
            "totalInteriorLivableArea": "2,950 sqft"
          },
          "property": {
            "parking": {
              "totalSpaces": 2
            },
            "exteriorFeatures": ["cGdn", "Patio"]
          }
        }
      },
      refurnishing: {
        "AImodel": "Virtual Refurnishing",
        "title": "Modern Indoor System",
        "subtitle": "Stay warm during the winter months with heated flooring in both the bedroom and bathroom. This feature provides an extra layer of luxury, ensuring that your space remains cozy and comfortable all year round.",
        "image": [
          require('@/assets/refurnishing/1.jpg'),
          require('@/assets/refurnishing/2.jpeg'),
          require('@/assets/refurnishing/3.jpeg'),
          require('@/assets/refurnishing/4.jpeg'),
          require('@/assets/refurnishing/5.jpeg'),
          require('@/assets/refurnishing/6.jpeg'),
          require('@/assets/refurnishing/7.jpeg'),
          require('@/assets/refurnishing/8.jpeg'),
          require('@/assets/refurnishing/9.jpeg'),
          require('@/assets/refurnishing/10.jpeg'),
          require('@/assets/refurnishing/11.jpeg'),
          require('@/assets/refurnishing/12.jpeg'),
          require('@/assets/refurnishing/13.jpeg'),
          require('@/assets/refurnishing/14.jpeg'),
          require('@/assets/refurnishing/15.jpeg'),
          require('@/assets/refurnishing/16.jpeg'),
          require('@/assets/refurnishing/17.jpeg'),
          require('@/assets/refurnishing/18.jpeg'),
          require('@/assets/refurnishing/19.jpeg'),
          require('@/assets/refurnishing/20.jpeg'),
          require('@/assets/refurnishing/21.jpeg'),
          require('@/assets/refurnishing/22.jpeg'),
          require('@/assets/refurnishing/23.jpeg'),
          require('@/assets/refurnishing/24.jpeg'),
          require('@/assets/refurnishing/25.jpeg'),
          require('@/assets/refurnishing/26.jpeg'),
          require('@/assets/refurnishing/27.jpeg'),
          require('@/assets/refurnishing/28.jpeg'),
          require('@/assets/refurnishing/29.jpeg'),
          require('@/assets/refurnishing/30.jpeg'),
          require('@/assets/refurnishing/31.jpeg'),
          require('@/assets/refurnishing/32.jpeg'),
          require('@/assets/refurnishing/33.jpeg'),
          require('@/assets/refurnishing/34.jpeg'),
          require('@/assets/refurnishing/35.jpeg'),
          require('@/assets/refurnishing/36.jpeg'),
          require('@/assets/refurnishing/37.jpeg'),
          require('@/assets/refurnishing/38.jpeg'),
          require('@/assets/refurnishing/39.jpeg'),
          require('@/assets/refurnishing/40.jpeg'),
          require('@/assets/refurnishing/41.jpeg'),
          require('@/assets/refurnishing/42.jpeg'),
          require('@/assets/refurnishing/43.jpeg'),
          require('@/assets/refurnishing/44.jpeg'),
        ],
        "rating": 4.3,
        "reviews": 423,
        "price": "$34,500",
        "description": "991 Callison Lane, FL 32801",
        "availableTimes": ["5:30PM", "7:30PM", "8:00PM", "9:00PM"],
        "type": "Two bedrooms",
        "details": {
          "bedrooms": 3,
          "builtYear": 2022,
          "bathrooms": 1,
          "fullBathrooms": 2,
          "halfBathrooms": 1,
          "kitchenFeatures": "F",
          "heating": "Heat Pump",
          "features": ["BayWin", "D/D", "EIK", "FP", "NewKit", "Study", "Sunny", "W/D"],
          "hasFireplace": false,
          "interiorArea": {
            "totalStructureArea": 2400,
            "totalInteriorLivableArea": "1,950 sqft"
          },
          "property": {
            "parking": {
              "totalSpaces": 2
            },
            "exteriorFeatures": ["cGdn", "Patio"]
          }
        }
      }
    };
  },
  methods: {
    getImage(imagePath) {
      if (imagePath.startsWith('@/')) {
        return require(`${imagePath.replace('@', '../..')}`);
      }
      return imagePath;
    }
  }
};
</script>

<style scoped>
.estate-container {
  background-color: #f5f5f5;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: max-content;
  padding: 0px !important;
}

.banner-text {
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  text-align: center;
  color: white;
}

.v-row.no-gutters {
  margin: 0;
  padding: 0;
}
</style>