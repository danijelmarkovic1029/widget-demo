<template>
  <v-container class="estate-container">
    <v-row>
      <v-col cols="12" style="padding: 0px">
        <v-img
          src="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/07/image2-xl%401x.jpg"
          height="400px"
          width="100%"
          cover
        >
          <v-container class="white--text d-flex align-center justify-center" height="100%">
            <h1 class="banner-text">Explore Top Properties</h1>
          </v-container>
        </v-img>
      </v-col>
    </v-row>

    <v-row style="max-width: 80%; margin: auto">
      <v-col v-for="(property, index) in properties" :key="index" cols="12" sm="6" md="3">
        <CardComponent
          :title="property.title"
          :subtitle="property.subtitle"
          :image="property.image"
          :rating="property.rating"
          :reviews="property.reviews"
          :price="property.price"
          :description="property.description"
          :availableTimes="property.availableTimes"
          :loading="loading"
          :houseType="property.title"
          :detail="property.details"
        />
      </v-col>
    </v-row>
    <HelpPage />
  </v-container>
</template>

<script>
import CardComponent from './CardComponent.vue';
import housesData from '@/assets/house.json';
import HelpPage from './HelpPage.vue';

export default {
  components: {
    CardComponent,
    HelpPage
  },
  data() {
    return {
      loading: false,
      properties: housesData
    };
  },
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