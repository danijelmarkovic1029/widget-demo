<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(card, index) in cards"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <CardComponent2
          :title="card.title"
          :subtitle="card.subtitle"
          :imageSrc="card.imageSrc"
          :descriptionLine1="card.descriptionLine1"
          :descriptionLine2="card.descriptionLine2"
          :shareText="card.shareText"
          :exploreText="card.exploreText"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardComponent2 from './CardComponent2.vue';

export default {
  components: {
    CardComponent2,
  },
  data() {
    return {
      cards: [
        {
          title: 'Top 10 Australian beaches',
          subtitle: 'Number 10',
          imageSrc: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
          descriptionLine1: 'Whitehaven Beach',
          descriptionLine2: 'Whitsunday Island, Whitsunday Islands',
          shareText: 'Share',
          exploreText: 'Explore',
        },
        {
          title: 'Great Barrier Reef',
          subtitle: 'Number 5',
          imageSrc: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
          descriptionLine1: 'Scenic coral reefs',
          descriptionLine2: 'Queensland, Australia',
          shareText: 'Share',
          exploreText: 'Discover',
        },
        {
          title: 'Great Barrier Reef',
          subtitle: 'Number 5',
          imageSrc: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
          descriptionLine1: 'Scenic coral reefs',
          descriptionLine2: 'Queensland, Australia',
          shareText: 'Share',
          exploreText: 'Discover',
        },
				{
          title: 'Great Barrier Reef',
          subtitle: 'Number 5',
          imageSrc: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
          descriptionLine1: 'Scenic coral reefs',
          descriptionLine2: 'Queensland, Australia',
          shareText: 'Share',
          exploreText: 'Discover',
        },
				{
          title: 'Great Barrier Reef',
          subtitle: 'Number 5',
          imageSrc: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
          descriptionLine1: 'Scenic coral reefs',
          descriptionLine2: 'Queensland, Australia',
          shareText: 'Share',
          exploreText: 'Discover',
        },
				{
          title: 'Great Barrier Reef',
          subtitle: 'Number 5',
          imageSrc: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
          descriptionLine1: 'Scenic coral reefs',
          descriptionLine2: 'Queensland, Australia',
          shareText: 'Share',
          exploreText: 'Discover',
        },
				{
          title: 'Great Barrier Reef',
          subtitle: 'Number 5',
          imageSrc: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
          descriptionLine1: 'Scenic coral reefs',
          descriptionLine2: 'Queensland, Australia',
          shareText: 'Share',
          exploreText: 'Discover',
        },
				{
          title: 'Great Barrier Reef',
          subtitle: 'Number 5',
          imageSrc: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
          descriptionLine1: 'Scenic coral reefs',
          descriptionLine2: 'Queensland, Australia',
          shareText: 'Share',
          exploreText: 'Discover',
        },
				{
          title: 'Great Barrier Reef',
          subtitle: 'Number 5',
          imageSrc: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
          descriptionLine1: 'Scenic coral reefs',
          descriptionLine2: 'Queensland, Australia',
          shareText: 'Share',
          exploreText: 'Discover',
        },
      ],
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