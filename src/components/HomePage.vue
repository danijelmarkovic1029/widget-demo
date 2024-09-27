<template>
  <v-container>
    <v-row>
      <v-col v-for="(property, index) in properties" :key="index" cols="12" sm="6" md="4">
        <CardComponent
          :title="property.title"
          :subtitle="property.subtitle"
          :image="property.image"
          :rating="property.rating"
          :reviews="property.reviews"
          :priceCategory="property.priceCategory"
          :description="property.description"
          :availableTimes="property.availableTimes"
          :loading="loading"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardComponent from './CardComponent.vue';

export default {
  components: {
    CardComponent,
  },
  data() {
    return {
      loading: false,
      properties: [
        {
          title: 'Cafe Badilico1',
          subtitle: 'Local Favorite',
          image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
          rating: 4.5,
          reviews: 413,
          priceCategory: '$ • Italian, Cafe',
          description: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
          availableTimes: ['5:30PM', '7:30PM', '8:00PM', '9:00PM'],
        },
				{
          title: 'Cafe Badilico2',
          subtitle: 'Local Favorite',
          image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
          rating: 4.5,
          reviews: 413,
          priceCategory: '$ • Italian, Cafe',
          description: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
          availableTimes: ['5:30PM', '7:30PM', '8:00PM', '9:00PM'],
        },
				{
          title: 'Cafe Badilico3',
          subtitle: 'Local Favorite',
          image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
          rating: 4.5,
          reviews: 413,
          priceCategory: '$ • Italian, Cafe',
          description: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
          availableTimes: ['5:30PM', '7:30PM', '8:00PM', '9:00PM'],
        },
				{
          title: 'Cafe Badilico4',
          subtitle: 'Local Favorite',
          image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
          rating: 4.5,
          reviews: 413,
          priceCategory: '$ • Italian, Cafe',
          description: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
          availableTimes: ['5:30PM', '7:30PM', '8:00PM', '9:00PM'],
        },
				{
          title: 'Cafe Badilico5',
          subtitle: 'Local Favorite',
          image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
          rating: 4.5,
          reviews: 413,
          priceCategory: '$ • Italian, Cafe',
          description: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
          availableTimes: ['5:30PM', '7:30PM', '8:00PM', '9:00PM'],
        },
				{
          title: 'Cafe Badilico6',
          subtitle: 'Local Favorite',
          image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
          rating: 4.5,
          reviews: 413,
          priceCategory: '$ • Italian, Cafe',
          description: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
          availableTimes: ['5:30PM', '7:30PM', '8:00PM', '9:00PM'],
        },
				{
          title: 'Cafe Badilico7',
          subtitle: 'Local Favorite',
          image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
          rating: 4.5,
          reviews: 413,
          priceCategory: '$ • Italian, Cafe',
          description: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
          availableTimes: ['5:30PM', '7:30PM', '8:00PM', '9:00PM'],
        },
				{
          title: 'Cafe Badilico8',
          subtitle: 'Local Favorite',
          image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
          rating: 4.5,
          reviews: 413,
          priceCategory: '$ • Italian, Cafe',
          description: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
          availableTimes: ['5:30PM', '7:30PM', '8:00PM', '9:00PM'],
        },
      ],
    };
  },
};
</script>