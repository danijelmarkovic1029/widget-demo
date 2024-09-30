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
        <CardComponent2
          :title="card.title"
          :price="card.price"
          :imageSrc="card.imageSrc"
          :descriptionLine1="card.descriptionLine1"
          :descriptionLine2="card.descriptionLine2"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardComponent2 from './CardComponent2.vue';
import propertiesData from '@/assets/properties.json'

export default {
  components: {
    CardComponent2,
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