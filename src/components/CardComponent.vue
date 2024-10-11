<template>
  <div @mouseover="hover = true" @mouseleave="hover = false">
    <v-card :disabled="loading" :loading="loading" class="mx-auto my-12 rounded-xl" max-width="374"
      :elevation="hover ? 10 : 2" :class="{ 'hover-effect': hover }" transition="scale-transition">
      <div class="image-container" @mouseover="showBanner = true" @mouseleave="showBanner = false">
        <span v-if="AImodel && showBanner" class="banner">For {{ AImodel }}</span>
        <v-carousel height="250" show-arrows="hover" :continuous="false" delimiter-icon="mdi-square">
          <v-carousel-item v-for="(each, index) in image" :key="index">
            <v-img :src="each" height="250" cover @click.stop="showDetails"></v-img>
          </v-carousel-item>
        </v-carousel>

      </div>

      <v-card-item @click.stop="showDetails">
        <v-card-title>
          <div class="overlay-text">{{ houseType }}</div>
        </v-card-title>
        <v-card-title class="title">{{ price }}</v-card-title>

        <v-card-subtitle>
          <span class="me-1 description">{{ description }}</span>
        </v-card-subtitle>
      </v-card-item>

      <v-card-text @click.stop="showDetails">
        <div class="text-subtitle-1">{{ detail.bedrooms }}bds | {{ detail.bathrooms }}ba | {{
          detail.interiorArea.totalInteriorLivableArea }}</div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import '../assets/styles/global.css';

export default {
  props: {
    AImodel: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: 'Local Favorite',
    },
    houseType: {
      type: String,
      required: true,
    },
    image: {
      type: Array,
      required: true,
    },
    rating: {
      type: Number,
      default: 4.5,
    },
    reviews: {
      type: Number,
      default: 0,
    },
    price: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    availableTimes: {
      type: Array,
      default: () => ['5:30PM', '7:30PM', '8:00PM', '9:00PM'],
    },
    loading: {
      type: Boolean,
      default: false,
    },
    detail: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      hover: false,
      dialog: false,
      selection: '',
      showBanner: false
    };
  },
  methods: {
    ...mapActions('property', ['updatePropertyDetails']),
    reserve() {
      alert('Reservation made!');
    },
    showDetails() {
      const data = {
        title: this.title,
        subtitle: this.subtitle,
        image: this.image,
        price: this.price,
        description: this.description,
        details: this.detail
      };
      this.updatePropertyDetails(data)
      this.$router.push({
        name: 'detail-page',
        params: { title: this.title },
      });
    },
  },
};
</script>

<style scoped>
.image-container {
  position: relative;

  .v-carousel {
    .v-btn {
      width: 24px !important;
      height: 24px !important;
    }
  }

  .banner {
    position: absolute;
    top: 10px;
    left: 20px;
    background: #d56549;
    color: white;
    z-index: 100;
    padding: 0px 10px;
    border-radius: 20px;
    font-family: "Object Sans", "Adjusted Arial", Tahoma, Geneva, sans-serif;
    font-weight: bolder;
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 0.5px;
  }
}

.hover-effect {
  transform: scale(1.05);
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.title {
  margin-top: 12px;
  text-transform: none;
  font-family: "Object Sans", "Adjusted Arial", Tahoma, Geneva, sans-serif;
  font-weight: bolder;
  font-size: 16px;
  line-height: 24px;
}

.description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}

.text-subtitle-1 {
  color: var(--Dark-Grey, #191919);
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.view-property {
  max-width: 90%;
  margin: auto;
}
</style>
