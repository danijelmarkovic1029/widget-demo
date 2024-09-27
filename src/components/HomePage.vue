<template>
  <v-container class="estate-container">
    <v-row>
      <v-col cols="12">
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

    <v-row>
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
          image: 'https://photos.zillowstatic.com/fp/bf83967481fc5ef129afef23b36041b4-p_d.jpg',
          rating: 4.5,
          reviews: 413,
          price: '$48,000,000',
          description: '702 E Carver Rd, Tempe, AZ 85284.',
          availableTimes: ['5:30PM', '7:30PM', '8:00PM', '9:00PM'],
        },
				{
          title: 'Cafe Badilico2',
          subtitle: 'Local Favorite',
          image: 'https://photos.zillowstatic.com/fp/9ecbf760dba2782c72bad19715ff800c-sc_1152_768.jpg',
          rating: 4.5,
          reviews: 413,
          price: '$48,000,000',
          description: '702 E Carver Rd, Tempe, AZ 85284.',
          availableTimes: ['5:30PM', '7:30PM', '8:00PM', '9:00PM'],
        },
				{
          title: 'Cafe Badilico3',
          subtitle: 'Local Favorite',
          image: 'https://photos.zillowstatic.com/fp/a3a099dafc554652bd8e8d93f68b6035-sc_1152_768.jpg',
          rating: 4.5,
          reviews: 413,
          price: '$48,000,000',
          description: '702 E Carver Rd, Tempe, AZ 85284.',
          availableTimes: ['5:30PM', '7:30PM', '8:00PM', '9:00PM'],
        },
				{
          title: 'Cafe Badilico4',
          subtitle: 'Local Favorite',
          image: 'https://photos.zillowstatic.com/fp/8ed2b81fdb91ea3f0e11e87d09e6fcc0-p_d.jpg',
          rating: 4.5,
          reviews: 413,
          price: '$48,000,000',
          description: '702 E Carver Rd, Tempe, AZ 85284.',
          availableTimes: ['5:30PM', '7:30PM', '8:00PM', '9:00PM'],
        },
				{
          title: 'Cafe Badilico5',
          subtitle: 'Local Favorite',
          image: 'https://photos.zillowstatic.com/fp/c975044aee65890af5e84cf33b53467d-p_d.jpg',
          rating: 4.5,
          reviews: 413,
          price: '$48,000,000',
          description: '702 E Carver Rd, Tempe, AZ 85284.',
          availableTimes: ['5:30PM', '7:30PM', '8:00PM', '9:00PM'],
        },
				{
          title: 'Cafe Badilico6',
          subtitle: 'Local Favorite',
          image: 'https://photos.zillowstatic.com/fp/ca1c265511e58989caf7d58dc39ff5be-p_d.jpg',
          rating: 4.5,
          reviews: 413,
          price: '$48,000,000',
          description: '702 E Carver Rd, Tempe, AZ 85284.',
          availableTimes: ['5:30PM', '7:30PM', '8:00PM', '9:00PM'],
        },
				{
          title: 'Cafe Badilico7',
          subtitle: 'Local Favorite',
          image: 'https://photos.zillowstatic.com/fp/d356b688619a32102d3191c0d88ce4ef-p_d.jpg',
          rating: 4.5,
          reviews: 413,
          price: '$48,000,000',
          description: '702 E Carver Rd, Tempe, AZ 85284.',
          availableTimes: ['5:30PM', '7:30PM', '8:00PM', '9:00PM'],
        },
				{
          title: 'Cafe Badilico8',
          subtitle: 'Local Favorite',
          image: 'https://photos.zillowstatic.com/fp/0aee4fe93d8fec8ccd6b06dc5f66ec57-p_d.jpg',
          rating: 4.5,
          reviews: 413,
          price: '$48,000,000',
          description: '702 E Carver Rd, Tempe, AZ 85284.',
          availableTimes: ['5:30PM', '7:30PM', '8:00PM', '9:00PM'],
        },
      ],
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