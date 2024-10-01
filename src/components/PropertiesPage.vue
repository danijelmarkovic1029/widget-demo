<template>
  <v-container style="max-width: 80%;">
    <v-row>
      <v-col
        v-for="(card, index) in cards"
        :key="index"
        cols="12"
        sm="6"
        md="4"
      >
        <CardComponent3
          :title="card.title"
          :price="card.price"
          :imageSrc="card.imageSrc"
          :descriptionLine1="card.descriptionLine1"
          :descriptionLine2="card.descriptionLine2"
        />
      </v-col>
    </v-row>
    <ContactPage />
  </v-container>
</template>

<script>
import CardComponent3 from './CardComponent3.vue';
import propertiesData from '@/assets/properties.json'
import ContactPage from './ContactPage.vue';

export default {
  components: {
    CardComponent3,
    ContactPage
  },
  data() {
    return {
      cards: propertiesData
    };
  },
};
</script>
<style>
.property {
	margin-bottom: 20px;
}

.property img {
	max-width: 100%;
	height: auto;
}
</style>